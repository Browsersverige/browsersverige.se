/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// initialize the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.3.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Exception("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { 
                data.key = key; 
                data.index = i;
                data.first = (i === 0);
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Exception("No environment passed to template");
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
      var result = env.VM.invokePartial.apply(this, arguments);
      if (result != null) { return result; }

      if (env.compile) {
        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: env.VM.programWithDepth,
      noop: env.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        env.VM.checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;

  function LocationInfo(locInfo){
    locInfo = locInfo || {};
    this.firstLine   = locInfo.first_line;
    this.firstColumn = locInfo.first_column;
    this.lastColumn  = locInfo.last_column;
    this.lastLine    = locInfo.last_line;
  }

  var AST = {
    ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
      var inverseLocationInfo, firstInverseNode;
      if (arguments.length === 3) {
        locInfo = inverse;
        inverse = null;
      } else if (arguments.length === 2) {
        locInfo = inverseStrip;
        inverseStrip = null;
      }

      LocationInfo.call(this, locInfo);
      this.type = "program";
      this.statements = statements;
      this.strip = {};

      if(inverse) {
        firstInverseNode = inverse[0];
        if (firstInverseNode) {
          inverseLocationInfo = {
            first_line: firstInverseNode.firstLine,
            last_line: firstInverseNode.lastLine,
            last_column: firstInverseNode.lastColumn,
            first_column: firstInverseNode.firstColumn
          };
          this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
        } else {
          this.inverse = new AST.ProgramNode(inverse, inverseStrip);
        }
        this.strip.right = inverseStrip.left;
      } else if (inverseStrip) {
        this.strip.left = inverseStrip.right;
      }
    },

    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "mustache";
      this.strip = strip;

      // Open may be a string parsed from the parser or a passed boolean flag
      if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
        this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
      } else {
        this.escaped = !!open;
      }

      if (rawParams instanceof AST.SexprNode) {
        this.sexpr = rawParams;
      } else {
        // Support old AST API
        this.sexpr = new AST.SexprNode(rawParams, hash);
      }

      this.sexpr.isRoot = true;

      // Support old AST API that stored this info in MustacheNode
      this.id = this.sexpr.id;
      this.params = this.sexpr.params;
      this.hash = this.sexpr.hash;
      this.eligibleHelper = this.sexpr.eligibleHelper;
      this.isHelper = this.sexpr.isHelper;
    },

    SexprNode: function(rawParams, hash, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = "sexpr";
      this.hash = hash;

      var id = this.id = rawParams[0];
      var params = this.params = rawParams.slice(1);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      var eligibleHelper = this.eligibleHelper = id.isSimple;

      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      this.isHelper = eligibleHelper && (params.length || hash);

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
    },

    PartialNode: function(partialName, context, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type         = "partial";
      this.partialName  = partialName;
      this.context      = context;
      this.strip = strip;
    },

    BlockNode: function(mustache, program, inverse, close, locInfo) {
      LocationInfo.call(this, locInfo);

      if(mustache.sexpr.id.original !== close.path.original) {
        throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
      }

      this.type = 'block';
      this.mustache = mustache;
      this.program  = program;
      this.inverse  = inverse;

      this.strip = {
        left: mustache.strip.left,
        right: close.strip.right
      };

      (program || inverse).strip.left = mustache.strip.right;
      (inverse || program).strip.right = close.strip.left;

      if (inverse && !program) {
        this.isInverse = true;
      }
    },

    ContentNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "content";
      this.string = string;
    },

    HashNode: function(pairs, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "hash";
      this.pairs = pairs;
    },

    IdNode: function(parts, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "ID";

      var original = "",
          dig = [],
          depth = 0;

      for(var i=0,l=parts.length; i<l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;

        if (part === ".." || part === "." || part === "this") {
          if (dig.length > 0) {
            throw new Exception("Invalid path: " + original, this);
          } else if (part === "..") {
            depth++;
          } else {
            this.isScoped = true;
          }
        } else {
          dig.push(part);
        }
      }

      this.original = original;
      this.parts    = dig;
      this.string   = dig.join('.');
      this.depth    = depth;

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

      this.stringModeValue = this.string;
    },

    PartialNameNode: function(name, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "PARTIAL_NAME";
      this.name = name.original;
    },

    DataNode: function(id, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "DATA";
      this.id = id;
    },

    StringNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "STRING";
      this.original =
        this.string =
        this.stringModeValue = string;
    },

    IntegerNode: function(integer, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "INTEGER";
      this.original =
        this.integer = integer;
      this.stringModeValue = Number(integer);
    },

    BooleanNode: function(bool, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "BOOLEAN";
      this.bool = bool;
      this.stringModeValue = bool === "true";
    },

    CommentNode: function(comment, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "comment";
      this.comment = comment;
    }
  };

  // Must be exported as an object rather than the root of the module as the jison lexer
  // most modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"sexpr":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"sexpr_repetition0":28,"sexpr_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"OPEN_SEXPR":35,"CLOSE_SEXPR":36,"hash":37,"hash_repetition_plus0":38,"hashSegment":39,"ID":40,"EQUALS":41,"DATA":42,"pathSegments":43,"SEP":44,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},
  productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1], this._$); 
  break;
  case 2: return new yy.ProgramNode([], this._$); 
  break;
  case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0], this._$);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], [], this._$);
  break;
  case 6:this.$ = new yy.ProgramNode($$[$0], this._$);
  break;
  case 7:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 8:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 9:this.$ = [$$[$0]];
  break;
  case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0], this._$);
  break;
  case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0], this._$);
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = $$[$0];
  break;
  case 15:this.$ = new yy.ContentNode($$[$0], this._$);
  break;
  case 16:this.$ = new yy.CommentNode($$[$0], this._$);
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 21:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]), this._$);
  break;
  case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 24:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
  break;
  case 25:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
  break;
  case 26:this.$ = $$[$0];
  break;
  case 27:this.$ = new yy.StringNode($$[$0], this._$);
  break;
  case 28:this.$ = new yy.IntegerNode($$[$0], this._$);
  break;
  case 29:this.$ = new yy.BooleanNode($$[$0], this._$);
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
  break;
  case 32:this.$ = new yy.HashNode($$[$0], this._$);
  break;
  case 33:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 34:this.$ = new yy.PartialNameNode($$[$0], this._$);
  break;
  case 35:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
  break;
  case 36:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
  break;
  case 37:this.$ = new yy.DataNode($$[$0], this._$);
  break;
  case 38:this.$ = new yy.IdNode($$[$0], this._$);
  break;
  case 39: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 40:this.$ = [{part: $$[$0]}];
  break;
  case 43:this.$ = [];
  break;
  case 44:$$[$0-1].push($$[$0]);
  break;
  case 47:this.$ = [$$[$0]];
  break;
  case 48:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],
  defaultActions: {3:[2,2],16:[2,1],50:[2,42]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open.charAt(2) === '~',
      right: close.charAt(0) === '~' || close.charAt(1) === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;
                                   
  break;
  case 1:return 14;
  break;
  case 2:
                                     this.popState();
                                     return 14;
                                   
  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 35;
  break;
  case 5:return 36;
  break;
  case 6:return 25;
  break;
  case 7:return 16;
  break;
  case 8:return 20;
  break;
  case 9:return 19;
  break;
  case 10:return 19;
  break;
  case 11:return 23;
  break;
  case 12:return 22;
  break;
  case 13:this.popState(); this.begin('com');
  break;
  case 14:strip(3,5); this.popState(); return 15;
  break;
  case 15:return 22;
  break;
  case 16:return 41;
  break;
  case 17:return 40;
  break;
  case 18:return 40;
  break;
  case 19:return 44;
  break;
  case 20:// ignore whitespace
  break;
  case 21:this.popState(); return 24;
  break;
  case 22:this.popState(); return 18;
  break;
  case 23:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 24:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 25:return 42;
  break;
  case 26:return 34;
  break;
  case 27:return 34;
  break;
  case 28:return 33;
  break;
  case 29:return 40;
  break;
  case 30:yy_.yytext = strip(1,2); return 40;
  break;
  case 31:return 'INVALID';
  break;
  case 32:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,32],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var sexpr = mustache.sexpr;
      var type = this.classifySexpr(sexpr);

      if (type === "helper") {
        this.helperSexpr(sexpr, program, inverse);
      } else if (type === "simple") {
        this.simpleSexpr(sexpr);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousSexpr(sexpr, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);

          if (val.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(val);
          }
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      this.sexpr(mustache.sexpr);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousSexpr: function(sexpr, program, inverse) {
      var id = sexpr.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      var id = sexpr.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          name = sexpr.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
      }
    },

    sexpr: function(sexpr) {
      var type = this.classifySexpr(sexpr);

      if (type === "simple") {
        this.simpleSexpr(sexpr);
      } else if (type === "helper") {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original, data);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifySexpr: function(sexpr) {
      var isHelper   = sexpr.isHelper;
      var isEligible = sexpr.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);

          if (param.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(param);
          }
        } else {
          this[param.type](param);
        }
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.hash(sexpr.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;
  var Exception = __dependency2__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return "this.compilerInfo = ["+revision+",'"+versions+"'];\n";
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        source = this.compilerInfo()+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.pushStackLiteral('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'sexpr') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.options.stringParams) {
        this.push('{' + hash.contexts.join(',') + '}');
        this.push('{' + hash.types.join(',') + '}');
      }

      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isRoot) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';
      this.useRegister('helper');

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
      if (helper.paramsInit) {
        lookup += ',' + helper.paramsInit;
      }

      this.push(
        '('
          + lookup
          + ',helper '
            + '? helper.call(' + helper.callParams + ') '
            + ': helperMissing.call(' + helper.helperMissingParams + '))');

      // Always flush subexpressions. This is both to prevent the compounding size issue that
      // occurs when the code has to be duplicated for inlining and also to prevent errors
      // due to the incorrect options object being passed due to the shared register.
      if (!isRoot) {
        this.flushInline();
      }
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';
      this.useRegister('helper');

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      if (helper.paramsInit) {
        this.pushSource(helper.paramsInit);
      }
      this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
      this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack,
          createdStack,
          usedLiteral;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
          usedLiteral = true;
        } else {
          // Get or create the current stack name for use by the inline
          createdStack = !this.stackSlot;
          var name = !createdStack ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (!usedLiteral) {
          this.popStack();
        }
        if (createdStack) {
          this.stackSlot--;
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [],
          paramsInit = this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    setupOptions: function(paramSize, params) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      if (this.options.stringParams) {
        options.push("hashTypes:" + this.popStack());
        options.push("hashContexts:" + this.popStack());
      }

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
          this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      return options;
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';

      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return 'options=' + options;
      } else {
        params.push(options);
        return '';
      }
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module5__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    if (typeof this == 'undefined') return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));

/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function( window, undefined ) {

var Globalize,
	// private variables
	regexHex,
	regexInfinity,
	regexParseFloat,
	regexTrim,
	// private JavaScript utility functions
	arrayIndexOf,
	endsWith,
	extend,
	isArray,
	isFunction,
	isObject,
	startsWith,
	trim,
	truncate,
	zeroPad,
	// private Globalization utility functions
	appendPreOrPostMatch,
	expandFormat,
	formatDate,
	formatNumber,
	getTokenRegExp,
	getEra,
	getEraYear,
	parseExact,
	parseNegativePattern;

// Global variable (Globalize) or CommonJS module (globalize)
Globalize = function( cultureSelector ) {
	return new Globalize.prototype.init( cultureSelector );
};

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	module.exports = Globalize;
} else {
	// Export as global variable
	window.Globalize = Globalize;
}

Globalize.cultures = {};

Globalize.prototype = {
	constructor: Globalize,
	init: function( cultureSelector ) {
		this.cultures = Globalize.cultures;
		this.cultureSelector = cultureSelector;

		return this;
	}
};
Globalize.prototype.init.prototype = Globalize.prototype;

// 1. When defining a culture, all fields are required except the ones stated as optional.
// 2. Each culture should have a ".calendars" object with at least one calendar named "standard"
//    which serves as the default calendar in use by that culture.
// 3. Each culture should have a ".calendar" object which is the current calendar being used,
//    it may be dynamically changed at any time to one of the calendars in ".calendars".
Globalize.cultures[ "default" ] = {
	// A unique name for the culture in the form <language code>-<country/region code>
	name: "en",
	// the name of the culture in the english language
	englishName: "English",
	// the name of the culture in its own language
	nativeName: "English",
	// whether the culture uses right-to-left text
	isRTL: false,
	// "language" is used for so-called "specific" cultures.
	// For example, the culture "es-CL" means "Spanish, in Chili".
	// It represents the Spanish-speaking culture as it is in Chili,
	// which might have different formatting rules or even translations
	// than Spanish in Spain. A "neutral" culture is one that is not
	// specific to a region. For example, the culture "es" is the generic
	// Spanish culture, which may be a more generalized version of the language
	// that may or may not be what a specific culture expects.
	// For a specific culture like "es-CL", the "language" field refers to the
	// neutral, generic culture information for the language it is using.
	// This is not always a simple matter of the string before the dash.
	// For example, the "zh-Hans" culture is netural (Simplified Chinese).
	// And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
	// field is "zh-CHS", not "zh".
	// This field should be used to navigate from a specific culture to it's
	// more general, neutral culture. If a culture is already as general as it
	// can get, the language may refer to itself.
	language: "en",
	// numberFormat defines general number formatting rules, like the digits in
	// each grouping, the group separator, and how negative numbers are displayed.
	numberFormat: {
		// [negativePattern]
		// Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
		// but is still defined as an array for consistency with them.
		//   negativePattern: one of "(n)|-n|- n|n-|n -"
		pattern: [ "-n" ],
		// number of decimal places normally shown
		decimals: 2,
		// string that separates number groups, as in 1,000,000
		",": ",",
		// string that separates a number from the fractional portion, as in 1.99
		".": ".",
		// array of numbers indicating the size of each number group.
		// TODO: more detailed description and example
		groupSizes: [ 3 ],
		// symbol used for positive numbers
		"+": "+",
		// symbol used for negative numbers
		"-": "-",
		// symbol used for NaN (Not-A-Number)
		"NaN": "NaN",
		// symbol used for Negative Infinity
		negativeInfinity: "-Infinity",
		// symbol used for Positive Infinity
		positiveInfinity: "Infinity",
		percent: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
			//   positivePattern: one of "n %|n%|%n|% n"
			pattern: [ "-n %", "n %" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent a percentage
			symbol: "%"
		},
		currency: {
			// [negativePattern, positivePattern]
			//   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
			//   positivePattern: one of "$n|n$|$ n|n $"
			pattern: [ "($n)", "$n" ],
			// number of decimal places normally shown
			decimals: 2,
			// array of numbers indicating the size of each number group.
			// TODO: more detailed description and example
			groupSizes: [ 3 ],
			// string that separates number groups, as in 1,000,000
			",": ",",
			// string that separates a number from the fractional portion, as in 1.99
			".": ".",
			// symbol used to represent currency
			symbol: "$"
		}
	},
	// calendars defines all the possible calendars used by this culture.
	// There should be at least one defined with name "standard", and is the default
	// calendar used by the culture.
	// A calendar contains information about how dates are formatted, information about
	// the calendar's eras, a standard set of the date formats,
	// translations for day and month names, and if the calendar is not based on the Gregorian
	// calendar, conversion functions to and from the Gregorian calendar.
	calendars: {
		standard: {
			// name that identifies the type of calendar this is
			name: "Gregorian_USEnglish",
			// separator of parts of a date (e.g. "/" in 11/05/1955)
			"/": "/",
			// separator of parts of a time (e.g. ":" in 05:44 PM)
			":": ":",
			// the first day of the week (0 = Sunday, 1 = Monday, etc)
			firstDay: 0,
			days: {
				// full day names
				names: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
				// abbreviated day names
				namesAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
				// shortest day names
				namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
			},
			months: {
				// full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
				names: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "" ],
				// abbreviated month names
				namesAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" ]
			},
			// AM and PM designators in one of these forms:
			// The usual view, and the upper and lower case versions
			//   [ standard, lowercase, uppercase ]
			// The culture does not use AM or PM (likely all standard date formats use 24 hour time)
			//   null
			AM: [ "AM", "am", "AM" ],
			PM: [ "PM", "pm", "PM" ],
			eras: [
				// eras in reverse chronological order.
				// name: the name of the era in this culture (e.g. A.D., C.E.)
				// start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
				// offset: offset in years from gregorian calendar
				{
					"name": "A.D.",
					"start": null,
					"offset": 0
				}
			],
			// when a two digit year is given, it will never be parsed as a four digit
			// year greater than this year (in the appropriate era for the culture)
			// Set it as a full year (e.g. 2029) or use an offset format starting from
			// the current year: "+19" would correspond to 2029 if the current year 2010.
			twoDigitYearMax: 2029,
			// set of predefined date and time patterns used by the culture
			// these represent the format someone in this culture would expect
			// to see given the portions of the date that are shown.
			patterns: {
				// short date pattern
				d: "M/d/yyyy",
				// long date pattern
				D: "dddd, MMMM dd, yyyy",
				// short time pattern
				t: "h:mm tt",
				// long time pattern
				T: "h:mm:ss tt",
				// long date, short time pattern
				f: "dddd, MMMM dd, yyyy h:mm tt",
				// long date, long time pattern
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				// month/day pattern
				M: "MMMM dd",
				// month/year pattern
				Y: "yyyy MMMM",
				// S is a sortable format that does not vary by culture
				S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
			}
			// optional fields for each calendar:
			/*
			monthsGenitive:
				Same as months but used when the day preceeds the month.
				Omit if the culture has no genitive distinction in month names.
				For an explaination of genitive months, see http://blogs.msdn.com/michkap/archive/2004/12/25/332259.aspx
			convert:
				Allows for the support of non-gregorian based calendars. This convert object is used to
				to convert a date to and from a gregorian calendar date to handle parsing and formatting.
				The two functions:
					fromGregorian( date )
						Given the date as a parameter, return an array with parts [ year, month, day ]
						corresponding to the non-gregorian based year, month, and day for the calendar.
					toGregorian( year, month, day )
						Given the non-gregorian year, month, and day, return a new Date() object
						set to the corresponding date in the gregorian calendar.
			*/
		}
	},
	// For localized strings
	messages: {}
};

Globalize.cultures[ "default" ].calendar = Globalize.cultures[ "default" ].calendars.standard;

Globalize.cultures.en = Globalize.cultures[ "default" ];

Globalize.cultureSelector = "en";

//
// private variables
//

regexHex = /^0x[a-f0-9]+$/i;
regexInfinity = /^[+\-]?infinity$/i;
regexParseFloat = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
regexTrim = /^\s+|\s+$/g;

//
// private JavaScript utility functions
//

arrayIndexOf = function( array, item ) {
	if ( array.indexOf ) {
		return array.indexOf( item );
	}
	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[i] === item ) {
			return i;
		}
	}
	return -1;
};

endsWith = function( value, pattern ) {
	return value.substr( value.length - pattern.length ) === pattern;
};

extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction(target) ) {
		target = {};
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( isObject(copy) || (copyIsArray = isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && isArray(src) ? src : [];

					} else {
						clone = src && isObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

isArray = Array.isArray || function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Array]";
};

isFunction = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Function]";
};

isObject = function( obj ) {
	return Object.prototype.toString.call( obj ) === "[object Object]";
};

startsWith = function( value, pattern ) {
	return value.indexOf( pattern ) === 0;
};

trim = function( value ) {
	return ( value + "" ).replace( regexTrim, "" );
};

truncate = function( value ) {
	if ( isNaN( value ) ) {
		return NaN;
	}
	return Math[ value < 0 ? "ceil" : "floor" ]( value );
};

zeroPad = function( str, count, left ) {
	var l;
	for ( l = str.length; l < count; l += 1 ) {
		str = ( left ? ("0" + str) : (str + "0") );
	}
	return str;
};

//
// private Globalization utility functions
//

appendPreOrPostMatch = function( preMatch, strings ) {
	// appends pre- and post- token match strings while removing escaped characters.
	// Returns a single quote count which is used to determine if the token occurs
	// in a string literal.
	var quoteCount = 0,
		escaped = false;
	for ( var i = 0, il = preMatch.length; i < il; i++ ) {
		var c = preMatch.charAt( i );
		switch ( c ) {
			case "\'":
				if ( escaped ) {
					strings.push( "\'" );
				}
				else {
					quoteCount++;
				}
				escaped = false;
				break;
			case "\\":
				if ( escaped ) {
					strings.push( "\\" );
				}
				escaped = !escaped;
				break;
			default:
				strings.push( c );
				escaped = false;
				break;
		}
	}
	return quoteCount;
};

expandFormat = function( cal, format ) {
	// expands unspecified or single character date formats into the full pattern.
	format = format || "F";
	var pattern,
		patterns = cal.patterns,
		len = format.length;
	if ( len === 1 ) {
		pattern = patterns[ format ];
		if ( !pattern ) {
			throw "Invalid date format string \'" + format + "\'.";
		}
		format = pattern;
	}
	else if ( len === 2 && format.charAt(0) === "%" ) {
		// %X escape format -- intended as a custom format string that is only one character, not a built-in format.
		format = format.charAt( 1 );
	}
	return format;
};

formatDate = function( value, format, culture ) {
	var cal = culture.calendar,
		convert = cal.convert,
		ret;

	if ( !format || !format.length || format === "i" ) {
		if ( culture && culture.name.length ) {
			if ( convert ) {
				// non-gregorian calendar, so we cannot use built-in toLocaleString()
				ret = formatDate( value, cal.patterns.F, culture );
			}
			else {
				var eraDate = new Date( value.getTime() ),
					era = getEra( value, cal.eras );
				eraDate.setFullYear( getEraYear(value, cal, era) );
				ret = eraDate.toLocaleString();
			}
		}
		else {
			ret = value.toString();
		}
		return ret;
	}

	var eras = cal.eras,
		sortable = format === "s";
	format = expandFormat( cal, format );

	// Start with an empty string
	ret = [];
	var hour,
		zeros = [ "0", "00", "000" ],
		foundDay,
		checkedDay,
		dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g,
		quoteCount = 0,
		tokenRegExp = getTokenRegExp(),
		converted;

	function padZeros( num, c ) {
		var r, s = num + "";
		if ( c > 1 && s.length < c ) {
			r = ( zeros[c - 2] + s);
			return r.substr( r.length - c, c );
		}
		else {
			r = s;
		}
		return r;
	}

	function hasDay() {
		if ( foundDay || checkedDay ) {
			return foundDay;
		}
		foundDay = dayPartRegExp.test( format );
		checkedDay = true;
		return foundDay;
	}

	function getPart( date, part ) {
		if ( converted ) {
			return converted[ part ];
		}
		switch ( part ) {
			case 0:
				return date.getFullYear();
			case 1:
				return date.getMonth();
			case 2:
				return date.getDate();
			default:
				throw "Invalid part value " + part;
		}
	}

	if ( !sortable && convert ) {
		converted = convert.fromGregorian( value );
	}

	for ( ; ; ) {
		// Save the current index
		var index = tokenRegExp.lastIndex,
			// Look for the next pattern
			ar = tokenRegExp.exec( format );

		// Append the text before the pattern (or the end of the string if not found)
		var preMatch = format.slice( index, ar ? ar.index : format.length );
		quoteCount += appendPreOrPostMatch( preMatch, ret );

		if ( !ar ) {
			break;
		}

		// do not replace any matches that occur inside a string literal.
		if ( quoteCount % 2 ) {
			ret.push( ar[0] );
			continue;
		}

		var current = ar[ 0 ],
			clength = current.length;

		switch ( current ) {
			case "ddd":
				//Day of the week, as a three-letter abbreviation
			case "dddd":
				// Day of the week, using the full name
				var names = ( clength === 3 ) ? cal.days.namesAbbr : cal.days.names;
				ret.push( names[value.getDay()] );
				break;
			case "d":
				// Day of month, without leading zero for single-digit days
			case "dd":
				// Day of month, with leading zero for single-digit days
				foundDay = true;
				ret.push(
					padZeros( getPart(value, 2), clength )
				);
				break;
			case "MMM":
				// Month, as a three-letter abbreviation
			case "MMMM":
				// Month, using the full name
				var part = getPart( value, 1 );
				ret.push(
					( cal.monthsGenitive && hasDay() ) ?
					( cal.monthsGenitive[ clength === 3 ? "namesAbbr" : "names" ][ part ] ) :
					( cal.months[ clength === 3 ? "namesAbbr" : "names" ][ part ] )
				);
				break;
			case "M":
				// Month, as digits, with no leading zero for single-digit months
			case "MM":
				// Month, as digits, with leading zero for single-digit months
				ret.push(
					padZeros( getPart(value, 1) + 1, clength )
				);
				break;
			case "y":
				// Year, as two digits, but with no leading zero for years less than 10
			case "yy":
				// Year, as two digits, with leading zero for years less than 10
			case "yyyy":
				// Year represented by four full digits
				part = converted ? converted[ 0 ] : getEraYear( value, cal, getEra(value, eras), sortable );
				if ( clength < 4 ) {
					part = part % 100;
				}
				ret.push(
					padZeros( part, clength )
				);
				break;
			case "h":
				// Hours with no leading zero for single-digit hours, using 12-hour clock
			case "hh":
				// Hours with leading zero for single-digit hours, using 12-hour clock
				hour = value.getHours() % 12;
				if ( hour === 0 ) hour = 12;
				ret.push(
					padZeros( hour, clength )
				);
				break;
			case "H":
				// Hours with no leading zero for single-digit hours, using 24-hour clock
			case "HH":
				// Hours with leading zero for single-digit hours, using 24-hour clock
				ret.push(
					padZeros( value.getHours(), clength )
				);
				break;
			case "m":
				// Minutes with no leading zero for single-digit minutes
			case "mm":
				// Minutes with leading zero for single-digit minutes
				ret.push(
					padZeros( value.getMinutes(), clength )
				);
				break;
			case "s":
				// Seconds with no leading zero for single-digit seconds
			case "ss":
				// Seconds with leading zero for single-digit seconds
				ret.push(
					padZeros( value.getSeconds(), clength )
				);
				break;
			case "t":
				// One character am/pm indicator ("a" or "p")
			case "tt":
				// Multicharacter am/pm indicator
				part = value.getHours() < 12 ? ( cal.AM ? cal.AM[0] : " " ) : ( cal.PM ? cal.PM[0] : " " );
				ret.push( clength === 1 ? part.charAt(0) : part );
				break;
			case "f":
				// Deciseconds
			case "ff":
				// Centiseconds
			case "fff":
				// Milliseconds
				ret.push(
					padZeros( value.getMilliseconds(), 3 ).substr( 0, clength )
				);
				break;
			case "z":
				// Time zone offset, no leading zero
			case "zz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), clength )
				);
				break;
			case "zzz":
				// Time zone offset with leading zero
				hour = value.getTimezoneOffset() / 60;
				ret.push(
					( hour <= 0 ? "+" : "-" ) + padZeros( Math.floor(Math.abs(hour)), 2 ) +
					// Hard coded ":" separator, rather than using cal.TimeSeparator
					// Repeated here for consistency, plus ":" was already assumed in date parsing.
					":" + padZeros( Math.abs(value.getTimezoneOffset() % 60), 2 )
				);
				break;
			case "g":
			case "gg":
				if ( cal.eras ) {
					ret.push(
						cal.eras[ getEra(value, eras) ].name
					);
				}
				break;
		case "/":
			ret.push( cal["/"] );
			break;
		default:
			throw "Invalid date format pattern \'" + current + "\'.";
		}
	}
	return ret.join( "" );
};

// formatNumber
(function() {
	var expandNumber;

	expandNumber = function( number, precision, formatInfo ) {
		var groupSizes = formatInfo.groupSizes,
			curSize = groupSizes[ 0 ],
			curGroupIndex = 1,
			factor = Math.pow( 10, precision ),
			rounded = Math.round( number * factor ) / factor;

		if ( !isFinite(rounded) ) {
			rounded = number;
		}
		number = rounded;

		var numberString = number+"",
			right = "",
			split = numberString.split( /e/i ),
			exponent = split.length > 1 ? parseInt( split[1], 10 ) : 0;
		numberString = split[ 0 ];
		split = numberString.split( "." );
		numberString = split[ 0 ];
		right = split.length > 1 ? split[ 1 ] : "";

		var l;
		if ( exponent > 0 ) {
			right = zeroPad( right, exponent, false );
			numberString += right.slice( 0, exponent );
			right = right.substr( exponent );
		}
		else if ( exponent < 0 ) {
			exponent = -exponent;
			numberString = zeroPad( numberString, exponent + 1, true );
			right = numberString.slice( -exponent, numberString.length ) + right;
			numberString = numberString.slice( 0, -exponent );
		}

		if ( precision > 0 ) {
			right = formatInfo[ "." ] +
				( (right.length > precision) ? right.slice(0, precision) : zeroPad(right, precision) );
		}
		else {
			right = "";
		}

		var stringIndex = numberString.length - 1,
			sep = formatInfo[ "," ],
			ret = "";

		while ( stringIndex >= 0 ) {
			if ( curSize === 0 || curSize > stringIndex ) {
				return numberString.slice( 0, stringIndex + 1 ) + ( ret.length ? (sep + ret + right) : right );
			}
			ret = numberString.slice( stringIndex - curSize + 1, stringIndex + 1 ) + ( ret.length ? (sep + ret) : "" );

			stringIndex -= curSize;

			if ( curGroupIndex < groupSizes.length ) {
				curSize = groupSizes[ curGroupIndex ];
				curGroupIndex++;
			}
		}

		return numberString.slice( 0, stringIndex + 1 ) + sep + ret + right;
	};

	formatNumber = function( value, format, culture ) {
		if ( !isFinite(value) ) {
			if ( value === Infinity ) {
				return culture.numberFormat.positiveInfinity;
			}
			if ( value === -Infinity ) {
				return culture.numberFormat.negativeInfinity;
			}
			return culture.numberFormat[ "NaN" ];
		}
		if ( !format || format === "i" ) {
			return culture.name.length ? value.toLocaleString() : value.toString();
		}
		format = format || "D";

		var nf = culture.numberFormat,
			number = Math.abs( value ),
			precision = -1,
			pattern;
		if ( format.length > 1 ) precision = parseInt( format.slice(1), 10 );

		var current = format.charAt( 0 ).toUpperCase(),
			formatInfo;

		switch ( current ) {
			case "D":
				pattern = "n";
				number = truncate( number );
				if ( precision !== -1 ) {
					number = zeroPad( "" + number, precision, true );
				}
				if ( value < 0 ) number = "-" + number;
				break;
			case "N":
				formatInfo = nf;
				/* falls through */
			case "C":
				formatInfo = formatInfo || nf.currency;
				/* falls through */
			case "P":
				formatInfo = formatInfo || nf.percent;
				pattern = value < 0 ? formatInfo.pattern[ 0 ] : ( formatInfo.pattern[1] || "n" );
				if ( precision === -1 ) precision = formatInfo.decimals;
				number = expandNumber( number * (current === "P" ? 100 : 1), precision, formatInfo );
				break;
			default:
				throw "Bad number format specifier: " + current;
		}

		var patternParts = /n|\$|-|%/g,
			ret = "";
		for ( ; ; ) {
			var index = patternParts.lastIndex,
				ar = patternParts.exec( pattern );

			ret += pattern.slice( index, ar ? ar.index : pattern.length );

			if ( !ar ) {
				break;
			}

			switch ( ar[0] ) {
				case "n":
					ret += number;
					break;
				case "$":
					ret += nf.currency.symbol;
					break;
				case "-":
					// don't make 0 negative
					if ( /[1-9]/.test(number) ) {
						ret += nf[ "-" ];
					}
					break;
				case "%":
					ret += nf.percent.symbol;
					break;
			}
		}

		return ret;
	};

}());

getTokenRegExp = function() {
	// regular expression for matching date and time tokens in format strings.
	return (/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g);
};

getEra = function( date, eras ) {
	if ( !eras ) return 0;
	var start, ticks = date.getTime();
	for ( var i = 0, l = eras.length; i < l; i++ ) {
		start = eras[ i ].start;
		if ( start === null || ticks >= start ) {
			return i;
		}
	}
	return 0;
};

getEraYear = function( date, cal, era, sortable ) {
	var year = date.getFullYear();
	if ( !sortable && cal.eras ) {
		// convert normal gregorian year to era-shifted gregorian
		// year by subtracting the era offset
		year -= cal.eras[ era ].offset;
	}
	return year;
};

// parseExact
(function() {
	var expandYear,
		getDayIndex,
		getMonthIndex,
		getParseRegExp,
		outOfRange,
		toUpper,
		toUpperArray;

	expandYear = function( cal, year ) {
		// expands 2-digit year into 4 digits.
		if ( year < 100 ) {
			var now = new Date(),
				era = getEra( now ),
				curr = getEraYear( now, cal, era ),
				twoDigitYearMax = cal.twoDigitYearMax;
			twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt( twoDigitYearMax, 10 ) : twoDigitYearMax;
			year += curr - ( curr % 100 );
			if ( year > twoDigitYearMax ) {
				year -= 100;
			}
		}
		return year;
	};

	getDayIndex = function	( cal, value, abbr ) {
		var ret,
			days = cal.days,
			upperDays = cal._upperDays;
		if ( !upperDays ) {
			cal._upperDays = upperDays = [
				toUpperArray( days.names ),
				toUpperArray( days.namesAbbr ),
				toUpperArray( days.namesShort )
			];
		}
		value = toUpper( value );
		if ( abbr ) {
			ret = arrayIndexOf( upperDays[1], value );
			if ( ret === -1 ) {
				ret = arrayIndexOf( upperDays[2], value );
			}
		}
		else {
			ret = arrayIndexOf( upperDays[0], value );
		}
		return ret;
	};

	getMonthIndex = function( cal, value, abbr ) {
		var months = cal.months,
			monthsGen = cal.monthsGenitive || cal.months,
			upperMonths = cal._upperMonths,
			upperMonthsGen = cal._upperMonthsGen;
		if ( !upperMonths ) {
			cal._upperMonths = upperMonths = [
				toUpperArray( months.names ),
				toUpperArray( months.namesAbbr )
			];
			cal._upperMonthsGen = upperMonthsGen = [
				toUpperArray( monthsGen.names ),
				toUpperArray( monthsGen.namesAbbr )
			];
		}
		value = toUpper( value );
		var i = arrayIndexOf( abbr ? upperMonths[1] : upperMonths[0], value );
		if ( i < 0 ) {
			i = arrayIndexOf( abbr ? upperMonthsGen[1] : upperMonthsGen[0], value );
		}
		return i;
	};

	getParseRegExp = function( cal, format ) {
		// converts a format string into a regular expression with groups that
		// can be used to extract date fields from a date string.
		// check for a cached parse regex.
		var re = cal._parseRegExp;
		if ( !re ) {
			cal._parseRegExp = re = {};
		}
		else {
			var reFormat = re[ format ];
			if ( reFormat ) {
				return reFormat;
			}
		}

		// expand single digit formats, then escape regular expression characters.
		var expFormat = expandFormat( cal, format ).replace( /([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1" ),
			regexp = [ "^" ],
			groups = [],
			index = 0,
			quoteCount = 0,
			tokenRegExp = getTokenRegExp(),
			match;

		// iterate through each date token found.
		while ( (match = tokenRegExp.exec(expFormat)) !== null ) {
			var preMatch = expFormat.slice( index, match.index );
			index = tokenRegExp.lastIndex;

			// don't replace any matches that occur inside a string literal.
			quoteCount += appendPreOrPostMatch( preMatch, regexp );
			if ( quoteCount % 2 ) {
				regexp.push( match[0] );
				continue;
			}

			// add a regex group for the token.
			var m = match[ 0 ],
				len = m.length,
				add;
			switch ( m ) {
				case "dddd": case "ddd":
				case "MMMM": case "MMM":
				case "gg": case "g":
					add = "(\\D+)";
					break;
				case "tt": case "t":
					add = "(\\D*)";
					break;
				case "yyyy":
				case "fff":
				case "ff":
				case "f":
					add = "(\\d{" + len + "})";
					break;
				case "dd": case "d":
				case "MM": case "M":
				case "yy": case "y":
				case "HH": case "H":
				case "hh": case "h":
				case "mm": case "m":
				case "ss": case "s":
					add = "(\\d\\d?)";
					break;
				case "zzz":
					add = "([+-]?\\d\\d?:\\d{2})";
					break;
				case "zz": case "z":
					add = "([+-]?\\d\\d?)";
					break;
				case "/":
					add = "(\\/)";
					break;
				default:
					throw "Invalid date format pattern \'" + m + "\'.";
			}
			if ( add ) {
				regexp.push( add );
			}
			groups.push( match[0] );
		}
		appendPreOrPostMatch( expFormat.slice(index), regexp );
		regexp.push( "$" );

		// allow whitespace to differ when matching formats.
		var regexpStr = regexp.join( "" ).replace( /\s+/g, "\\s+" ),
			parseRegExp = { "regExp": regexpStr, "groups": groups };

		// cache the regex for this format.
		return re[ format ] = parseRegExp;
	};

	outOfRange = function( value, low, high ) {
		return value < low || value > high;
	};

	toUpper = function( value ) {
		// "he-IL" has non-breaking space in weekday names.
		return value.split( "\u00A0" ).join( " " ).toUpperCase();
	};

	toUpperArray = function( arr ) {
		var results = [];
		for ( var i = 0, l = arr.length; i < l; i++ ) {
			results[ i ] = toUpper( arr[i] );
		}
		return results;
	};

	parseExact = function( value, format, culture ) {
		// try to parse the date string by matching against the format string
		// while using the specified culture for date field names.
		value = trim( value );
		var cal = culture.calendar,
			// convert date formats into regular expressions with groupings.
			// use the regexp to determine the input format and extract the date fields.
			parseInfo = getParseRegExp( cal, format ),
			match = new RegExp( parseInfo.regExp ).exec( value );
		if ( match === null ) {
			return null;
		}
		// found a date format that matches the input.
		var groups = parseInfo.groups,
			era = null, year = null, month = null, date = null, weekDay = null,
			hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null,
			pmHour = false;
		// iterate the format groups to extract and set the date fields.
		for ( var j = 0, jl = groups.length; j < jl; j++ ) {
			var matchGroup = match[ j + 1 ];
			if ( matchGroup ) {
				var current = groups[ j ],
					clength = current.length,
					matchInt = parseInt( matchGroup, 10 );
				switch ( current ) {
					case "dd": case "d":
						// Day of month.
						date = matchInt;
						// check that date is generally in valid range, also checking overflow below.
						if ( outOfRange(date, 1, 31) ) return null;
						break;
					case "MMM": case "MMMM":
						month = getMonthIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "M": case "MM":
						// Month.
						month = matchInt - 1;
						if ( outOfRange(month, 0, 11) ) return null;
						break;
					case "y": case "yy":
					case "yyyy":
						year = clength < 4 ? expandYear( cal, matchInt ) : matchInt;
						if ( outOfRange(year, 0, 9999) ) return null;
						break;
					case "h": case "hh":
						// Hours (12-hour clock).
						hour = matchInt;
						if ( hour === 12 ) hour = 0;
						if ( outOfRange(hour, 0, 11) ) return null;
						break;
					case "H": case "HH":
						// Hours (24-hour clock).
						hour = matchInt;
						if ( outOfRange(hour, 0, 23) ) return null;
						break;
					case "m": case "mm":
						// Minutes.
						min = matchInt;
						if ( outOfRange(min, 0, 59) ) return null;
						break;
					case "s": case "ss":
						// Seconds.
						sec = matchInt;
						if ( outOfRange(sec, 0, 59) ) return null;
						break;
					case "tt": case "t":
						// AM/PM designator.
						// see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
						// the AM tokens. If not, fail the parse for this format.
						pmHour = cal.PM && ( matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2] );
						if (
							!pmHour && (
								!cal.AM || ( matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2] )
							)
						) return null;
						break;
					case "f":
						// Deciseconds.
					case "ff":
						// Centiseconds.
					case "fff":
						// Milliseconds.
						msec = matchInt * Math.pow( 10, 3 - clength );
						if ( outOfRange(msec, 0, 999) ) return null;
						break;
					case "ddd":
						// Day of week.
					case "dddd":
						// Day of week.
						weekDay = getDayIndex( cal, matchGroup, clength === 3 );
						if ( outOfRange(weekDay, 0, 6) ) return null;
						break;
					case "zzz":
						// Time zone offset in +/- hours:min.
						var offsets = matchGroup.split( /:/ );
						if ( offsets.length !== 2 ) return null;
						hourOffset = parseInt( offsets[0], 10 );
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						var minOffset = parseInt( offsets[1], 10 );
						if ( outOfRange(minOffset, 0, 59) ) return null;
						tzMinOffset = ( hourOffset * 60 ) + ( startsWith(matchGroup, "-") ? -minOffset : minOffset );
						break;
					case "z": case "zz":
						// Time zone offset in +/- hours.
						hourOffset = matchInt;
						if ( outOfRange(hourOffset, -12, 13) ) return null;
						tzMinOffset = hourOffset * 60;
						break;
					case "g": case "gg":
						var eraName = matchGroup;
						if ( !eraName || !cal.eras ) return null;
						eraName = trim( eraName.toLowerCase() );
						for ( var i = 0, l = cal.eras.length; i < l; i++ ) {
							if ( eraName === cal.eras[i].name.toLowerCase() ) {
								era = i;
								break;
							}
						}
						// could not find an era with that name
						if ( era === null ) return null;
						break;
				}
			}
		}
		var result = new Date(), defaultYear, convert = cal.convert;
		defaultYear = convert ? convert.fromGregorian( result )[ 0 ] : result.getFullYear();
		if ( year === null ) {
			year = defaultYear;
		}
		else if ( cal.eras ) {
			// year must be shifted to normal gregorian year
			// but not if year was not specified, its already normal gregorian
			// per the main if clause above.
			year += cal.eras[( era || 0 )].offset;
		}
		// set default day and month to 1 and January, so if unspecified, these are the defaults
		// instead of the current day/month.
		if ( month === null ) {
			month = 0;
		}
		if ( date === null ) {
			date = 1;
		}
		// now have year, month, and date, but in the culture's calendar.
		// convert to gregorian if necessary
		if ( convert ) {
			result = convert.toGregorian( year, month, date );
			// conversion failed, must be an invalid match
			if ( result === null ) return null;
		}
		else {
			// have to set year, month and date together to avoid overflow based on current date.
			result.setFullYear( year, month, date );
			// check to see if date overflowed for specified month (only checked 1-31 above).
			if ( result.getDate() !== date ) return null;
			// invalid day of week.
			if ( weekDay !== null && result.getDay() !== weekDay ) {
				return null;
			}
		}
		// if pm designator token was found make sure the hours fit the 24-hour clock.
		if ( pmHour && hour < 12 ) {
			hour += 12;
		}
		result.setHours( hour, min, sec, msec );
		if ( tzMinOffset !== null ) {
			// adjust timezone to utc before applying local offset.
			var adjustedMin = result.getMinutes() - ( tzMinOffset + result.getTimezoneOffset() );
			// Safari limits hours and minutes to the range of -127 to 127.  We need to use setHours
			// to ensure both these fields will not exceed this range.	adjustedMin will range
			// somewhere between -1440 and 1500, so we only need to split this into hours.
			result.setHours( result.getHours() + parseInt(adjustedMin / 60, 10), adjustedMin % 60 );
		}
		return result;
	};
}());

parseNegativePattern = function( value, nf, negativePattern ) {
	var neg = nf[ "-" ],
		pos = nf[ "+" ],
		ret;
	switch ( negativePattern ) {
		case "n -":
			neg = " " + neg;
			pos = " " + pos;
			/* falls through */
		case "n-":
			if ( endsWith(value, neg) ) {
				ret = [ "-", value.substr(0, value.length - neg.length) ];
			}
			else if ( endsWith(value, pos) ) {
				ret = [ "+", value.substr(0, value.length - pos.length) ];
			}
			break;
		case "- n":
			neg += " ";
			pos += " ";
			/* falls through */
		case "-n":
			if ( startsWith(value, neg) ) {
				ret = [ "-", value.substr(neg.length) ];
			}
			else if ( startsWith(value, pos) ) {
				ret = [ "+", value.substr(pos.length) ];
			}
			break;
		case "(n)":
			if ( startsWith(value, "(") && endsWith(value, ")") ) {
				ret = [ "-", value.substr(1, value.length - 2) ];
			}
			break;
	}
	return ret || [ "", value ];
};

//
// public instance functions
//

Globalize.prototype.findClosestCulture = function( cultureSelector ) {
	return Globalize.findClosestCulture.call( this, cultureSelector );
};

Globalize.prototype.format = function( value, format, cultureSelector ) {
	return Globalize.format.call( this, value, format, cultureSelector );
};

Globalize.prototype.localize = function( key, cultureSelector ) {
	return Globalize.localize.call( this, key, cultureSelector );
};

Globalize.prototype.parseInt = function( value, radix, cultureSelector ) {
	return Globalize.parseInt.call( this, value, radix, cultureSelector );
};

Globalize.prototype.parseFloat = function( value, radix, cultureSelector ) {
	return Globalize.parseFloat.call( this, value, radix, cultureSelector );
};

Globalize.prototype.culture = function( cultureSelector ) {
	return Globalize.culture.call( this, cultureSelector );
};

//
// public singleton functions
//

Globalize.addCultureInfo = function( cultureName, baseCultureName, info ) {

	var base = {},
		isNew = false;

	if ( typeof cultureName !== "string" ) {
		// cultureName argument is optional string. If not specified, assume info is first
		// and only argument. Specified info deep-extends current culture.
		info = cultureName;
		cultureName = this.culture().name;
		base = this.cultures[ cultureName ];
	} else if ( typeof baseCultureName !== "string" ) {
		// baseCultureName argument is optional string. If not specified, assume info is second
		// argument. Specified info deep-extends specified culture.
		// If specified culture does not exist, create by deep-extending default
		info = baseCultureName;
		isNew = ( this.cultures[ cultureName ] == null );
		base = this.cultures[ cultureName ] || this.cultures[ "default" ];
	} else {
		// cultureName and baseCultureName specified. Assume a new culture is being created
		// by deep-extending an specified base culture
		isNew = true;
		base = this.cultures[ baseCultureName ];
	}

	this.cultures[ cultureName ] = extend(true, {},
		base,
		info
	);
	// Make the standard calendar the current culture if it's a new culture
	if ( isNew ) {
		this.cultures[ cultureName ].calendar = this.cultures[ cultureName ].calendars.standard;
	}
};

Globalize.findClosestCulture = function( name ) {
	var match;
	if ( !name ) {
		return this.findClosestCulture( this.cultureSelector ) || this.cultures[ "default" ];
	}
	if ( typeof name === "string" ) {
		name = name.split( "," );
	}
	if ( isArray(name) ) {
		var lang,
			cultures = this.cultures,
			list = name,
			i, l = list.length,
			prioritized = [];
		for ( i = 0; i < l; i++ ) {
			name = trim( list[i] );
			var pri, parts = name.split( ";" );
			lang = trim( parts[0] );
			if ( parts.length === 1 ) {
				pri = 1;
			}
			else {
				name = trim( parts[1] );
				if ( name.indexOf("q=") === 0 ) {
					name = name.substr( 2 );
					pri = parseFloat( name );
					pri = isNaN( pri ) ? 0 : pri;
				}
				else {
					pri = 1;
				}
			}
			prioritized.push({ lang: lang, pri: pri });
		}
		prioritized.sort(function( a, b ) {
			if ( a.pri < b.pri ) {
				return 1;
			} else if ( a.pri > b.pri ) {
				return -1;
			}
			return 0;
		});
		// exact match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			match = cultures[ lang ];
			if ( match ) {
				return match;
			}
		}

		// neutral language match
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			do {
				var index = lang.lastIndexOf( "-" );
				if ( index === -1 ) {
					break;
				}
				// strip off the last part. e.g. en-US => en
				lang = lang.substr( 0, index );
				match = cultures[ lang ];
				if ( match ) {
					return match;
				}
			}
			while ( 1 );
		}

		// last resort: match first culture using that language
		for ( i = 0; i < l; i++ ) {
			lang = prioritized[ i ].lang;
			for ( var cultureKey in cultures ) {
				var culture = cultures[ cultureKey ];
				if ( culture.language == lang ) {
					return culture;
				}
			}
		}
	}
	else if ( typeof name === "object" ) {
		return name;
	}
	return match || null;
};

Globalize.format = function( value, format, cultureSelector ) {
	var culture = this.findClosestCulture( cultureSelector );
	if ( value instanceof Date ) {
		value = formatDate( value, format, culture );
	}
	else if ( typeof value === "number" ) {
		value = formatNumber( value, format, culture );
	}
	return value;
};

Globalize.localize = function( key, cultureSelector ) {
	return this.findClosestCulture( cultureSelector ).messages[ key ] ||
		this.cultures[ "default" ].messages[ key ];
};

Globalize.parseDate = function( value, formats, culture ) {
	culture = this.findClosestCulture( culture );

	var date, prop, patterns;
	if ( formats ) {
		if ( typeof formats === "string" ) {
			formats = [ formats ];
		}
		if ( formats.length ) {
			for ( var i = 0, l = formats.length; i < l; i++ ) {
				var format = formats[ i ];
				if ( format ) {
					date = parseExact( value, format, culture );
					if ( date ) {
						break;
					}
				}
			}
		}
	} else {
		patterns = culture.calendar.patterns;
		for ( prop in patterns ) {
			date = parseExact( value, patterns[prop], culture );
			if ( date ) {
				break;
			}
		}
	}

	return date || null;
};

Globalize.parseInt = function( value, radix, cultureSelector ) {
	return truncate( Globalize.parseFloat(value, radix, cultureSelector) );
};

Globalize.parseFloat = function( value, radix, cultureSelector ) {
	// radix argument is optional
	if ( typeof radix !== "number" ) {
		cultureSelector = radix;
		radix = 10;
	}

	var culture = this.findClosestCulture( cultureSelector );
	var ret = NaN,
		nf = culture.numberFormat;

	if ( value.indexOf(culture.numberFormat.currency.symbol) > -1 ) {
		// remove currency symbol
		value = value.replace( culture.numberFormat.currency.symbol, "" );
		// replace decimal seperator
		value = value.replace( culture.numberFormat.currency["."], culture.numberFormat["."] );
	}

	// trim leading and trailing whitespace
	value = trim( value );

	// allow infinity or hexidecimal
	if ( regexInfinity.test(value) ) {
		ret = parseFloat( value );
	}
	else if ( !radix && regexHex.test(value) ) {
		ret = parseInt( value, 16 );
	}
	else {

		// determine sign and number
		var signInfo = parseNegativePattern( value, nf, nf.pattern[0] ),
			sign = signInfo[ 0 ],
			num = signInfo[ 1 ];

		// #44 - try parsing as "(n)"
		if ( sign === "" && nf.pattern[0] !== "(n)" ) {
			signInfo = parseNegativePattern( value, nf, "(n)" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}

		// try parsing as "-n"
		if ( sign === "" && nf.pattern[0] !== "-n" ) {
			signInfo = parseNegativePattern( value, nf, "-n" );
			sign = signInfo[ 0 ];
			num = signInfo[ 1 ];
		}

		sign = sign || "+";

		// determine exponent and number
		var exponent,
			intAndFraction,
			exponentPos = num.indexOf( "e" );
		if ( exponentPos < 0 ) exponentPos = num.indexOf( "E" );
		if ( exponentPos < 0 ) {
			intAndFraction = num;
			exponent = null;
		}
		else {
			intAndFraction = num.substr( 0, exponentPos );
			exponent = num.substr( exponentPos + 1 );
		}
		// determine decimal position
		var integer,
			fraction,
			decSep = nf[ "." ],
			decimalPos = intAndFraction.indexOf( decSep );
		if ( decimalPos < 0 ) {
			integer = intAndFraction;
			fraction = null;
		}
		else {
			integer = intAndFraction.substr( 0, decimalPos );
			fraction = intAndFraction.substr( decimalPos + decSep.length );
		}
		// handle groups (e.g. 1,000,000)
		var groupSep = nf[ "," ];
		integer = integer.split( groupSep ).join( "" );
		var altGroupSep = groupSep.replace( /\u00A0/g, " " );
		if ( groupSep !== altGroupSep ) {
			integer = integer.split( altGroupSep ).join( "" );
		}
		// build a natively parsable number string
		var p = sign + integer;
		if ( fraction !== null ) {
			p += "." + fraction;
		}
		if ( exponent !== null ) {
			// exponent itself may have a number patternd
			var expSignInfo = parseNegativePattern( exponent, nf, "-n" );
			p += "e" + ( expSignInfo[0] || "+" ) + expSignInfo[ 1 ];
		}
		if ( regexParseFloat.test(p) ) {
			ret = parseFloat( p );
		}
	}
	return ret;
};

Globalize.culture = function( cultureSelector ) {
	// setter
	if ( typeof cultureSelector !== "undefined" ) {
		this.cultureSelector = cultureSelector;
	}
	// getter
	return this.findClosestCulture( cultureSelector ) || this.cultures[ "default" ];
};

}( this ));

/*! 
* DevExpress ChartJS
* Version: 13.2.7
* Build date: Feb 10, 2014
*
* Copyright (c) 2012 - 2014 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: http://chartjs.devexpress.com/EULA
*/
"use strict";window.DevExpress||(function(n,t,i){function u(t){function f(){while(r.length){var e=r.shift(),t=e();if(t!==i&&t.then){u=!0,n.when(t).always(f);return}}u=!1}function e(n,i){t?(r[0]&&i&&i(r[0]),r=[n]):r.push(n),u||f()}function o(){return u}var r=[],u=!1;return{add:e,busy:o}}var r,f;(function(n){if(n=n.split("."),n[0]<1||n[0]===1&&n[1]<10)throw Error("Your version of jQuery is too old. Please upgrade jQuery to 1.10.0 or later.");})(n.fn.jquery),r=function(){var i=function(n,t,i){return function(){var r=this.callBase;this.callBase=n[t];try{return i.apply(this,arguments)}finally{this.callBase=r}}},r=function(n){var t=function(){};return t.prototype=n.prototype,new t},t=function(){},u=function(t){var r=this,u;return t?(u=n.map(t,function(n,t){return t}),n.each(["toString","toLocaleString","valueOf"],function(){t[this]&&u.push(this)}),n.each(u,function(){var u=n.isFunction(r.prototype[this])&&n.isFunction(t[this]);r.prototype[this]=u?i(r.parent.prototype,this,t[this]):t[this]}),r):r},f=function(){var t=this;return n.each(arguments,function(){this.ctor&&t._includedCtors.push(this.ctor);for(var n in this)if(n!=="ctor"){if(n in t.prototype)throw Error("Member name collision: "+n);t.prototype[n]=this[n]}}),t},e=function(n){return this.parent===n?!0:!this.parent||!this.parent.subclassOf?!1:this.parent.subclassOf(n)};return t.inherit=function(t){var i=function(){if(!this||this.constructor!==i)throw Error("A class must be instantiated using the 'new' keyword");var t=this,r=t.ctor;r&&r.apply(t,arguments),n.each(t.constructor._includedCtors,function(){this.call(t)})};return i.prototype=r(this),i.inherit=this.inherit,i.redefine=u,i.include=f,i.subclassOf=e,i.parent=this,i._includedCtors=this._includedCtors?this._includedCtors.slice(0):[],i.prototype.constructor=i,i.redefine(t),i},t}(),f=function(){var t=document.createElement("a"),i=["protocol","hostname","port","pathname","search","hash"],r=function(n){return n.charAt(0)!=="/"&&(n="/"+n),n};return function(u){t.href=u;var f={};return n.each(i,function(){f[this]=t[this]}),f.pathname=r(f.pathname),f}}(),t.DevExpress=t.DevExpress||{};var e=function(t){var i=n.Deferred();return setTimeout(function(){i.resolve(t())},60),i},o=function(){var t=[];return{add:function(n){t.push(n)},remove:function(i){var r=n.inArray(i,t);r!==-1&&t.splice(r,1)},fire:function(){var n=t.pop(),i=!!n;return i&&n(),i},hasCallback:function(){return t.length>0}}}(),s=function(){var n="body";return function(t){return arguments.length&&(n=t),n}}();n.extend(t.DevExpress,{abstract:function(){throw Error("Not implemented");},Class:r,createQueue:u,enqueue:u().add,enqueueAsync:e,parseUrl:f,backButtonCallback:o,overlayTargetContainer:s})}(jQuery,this),function(n,t,i){var e=function(n){return n===i||n===null?"":String(n)},r=function(n){return e(n).charAt(0).toUpperCase()+n.substr(1)},u=function(n){return e(n).replace(/([a-z\d])([A-Z])/g,"$1 $2").split(/[\s_-]+/)},f=function(t){return n.map(u(t),function(n){return n.toLowerCase()}).join("-")},o=function(n){return f(n).replace(/-/g,"_")},s=function(t,i){return n.map(u(t),function(n,t){return n=n.toLowerCase(),(i||t>0)&&(n=r(n)),n}).join("")},h=function(n){return r(f(n).replace(/-/g," "))},c=function(t){return n.map(u(t),function(n){return r(n.toLowerCase())}).join(" ")};t.inflector={dasherize:f,camelize:s,humanize:h,titleize:c,underscore:o}}(jQuery,DevExpress),function(n,t,i){var h={iPhone:"iPhone",iPhone5:"iPhone 5",iPad:"iPad",iPadMini:"iPad Mini",androidPhone:"Android Mobile",androidTablet:"Android",win8:"MSAppHost",win8Phone:"Windows Phone 8",msSurface:"MSIE ARM Tablet PC",desktop:"desktop",tizen:"Tizen Mobile"},c={ios:[5,6,7],android:[2,3,4],win8:[8],tizen:[2],desktop:[],generic:[]},f,l=function(n){if(n)f=e(n);else{if(!f){n=i;try{n=y()}catch(t){n=s()}finally{n||(n=s())}f=e(n)}return f}},e=function(t){if(t==="genericPhone")return{deviceType:"phone",platform:"generic",generic:!0};if(n.isPlainObject(t))return r(t);var i;if(t){if(i=h[t],!i)throw Error("Unknown device");}else i=navigator.userAgent;return a(i)},r=function(t){var i={phone:t.deviceType==="phone",tablet:t.deviceType==="tablet",android:t.platform==="android",ios:t.platform==="ios",win8:t.platform==="win8",tizen:t.platform==="tizen",generic:t.platform==="generic"};return n.extend({},o,i,t)},a=function(n){return u.ios(n)||u.android(n)||u.win8(n)||u.tizen(n)||u.desktop(n)||v},o={deviceType:"",platform:"",version:[],phone:!1,tablet:!1,android:!1,ios:!1,win8:!1,tizen:!1,generic:!1},v=n.extend(o,{platform:"generic",deviceType:"phone",generic:!0}),u={ios:function(n){if(/ip(hone|od|ad)/i.test(n)){var i=/ip(hone|od)/i.test(n),t=n.match(/os (\d+)_(\d+)_?(\d+)?/i),u=t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3]||0,10)]:[];return r({deviceType:i?"phone":"tablet",platform:"ios",version:u})}},android:function(n){if(/android|htc_|silk/i.test(n)){var i=/mobile/i.test(n),t=n.match(/android (\d+)\.(\d+)\.?(\d+)?/i),u=t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3]||0,10)]:[];return r({deviceType:i?"phone":"tablet",platform:"android",version:u})}},win8:function(n){var u=/windows phone/i.test(n),i=/msie(.*)arm(.*)tablet\spc/i.test(n),e=!i&&/msapphost/i.test(n),t,f;if(u||i||e)return t=n.match(/windows phone (\d+).(\d+)/i)||n.match(/windows nt (\d+).(\d+)/i),f=t?[parseInt(t[1],10),parseInt(t[2],10)]:[],r({deviceType:u?"phone":i?"tablet":"desktop",platform:"win8",version:f})},tizen:function(n){if(/tizen/i.test(n)){var i=/mobile/i.test(n),t=n.match(/tizen (\d+)\.(\d+)/i),u=t?[parseInt(t[1],10),parseInt(t[2],10)]:[];return r({deviceType:i?"phone":"tablet",platform:"tizen",version:u})}},desktop:function(n){if(/desktop/i.test(n))return r({deviceType:"desktop",platform:"desktop"})}},y=function(){var n;return(window.top["dx-force-device-object"]||window.top["dx-force-device"])&&(n=window.top["dx-force-device-object"]||window.top["dx-force-device"]),n},s=function(){return window.sessionStorage&&(sessionStorage.getItem("dx-force-device")||sessionStorage.getItem("dx-simulator-device"))},p=function(t){var i=c[t.platform],r=t.version&&t.version[0],u=i[i.length-1],f,e;return r?(f=n.inArray(parseInt(r,10),i)!==-1,e=f?r:u," dx-version-major-"+e):u?" dx-version-major-"+u:""};t.devices={attachCss:function(t,i){var u=n(t),r;i=i||this.current(),r=i.deviceType?" dx-device-"+i.deviceType:"",u.addClass("dx-theme-"+i.platform).addClass("dx-theme-"+i.platform+"-typography").addClass(r).addClass(p(i))},current:l,real:e(),isRippleEmulator:function(){return!!window.tinyHippos},isSimulator:function(){try{return window.top!==window.self&&window.top["dx-force-device"]}catch(n){return!1}}}}(jQuery,DevExpress),function(n,t){var f=/(webkit)[ \/]([\w.]+)/,e=/(opera)(?:.*version)?[ \/]([\w.]+)/,o=/(msie) ([\w.]+)/,s=/(mozilla)(?:.*? rv:([\w.]+))?/,u=navigator.userAgent.toLowerCase(),h=function(){var n={},t=f.exec(u)||e.exec(u)||o.exec(u)||u.indexOf("compatible")<0&&s.exec(u)||[],i=t[1],r=t[2];return i&&(n[i]=!0,n.version=r),n}();t.browser=h}(jQuery,DevExpress,this),function(n,t,i){var e=["","Webkit","Moz","O","ms"],o=document.createElement("dx").style,s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MsTransitionEnd",transition:"transitionend"},u=function(n){var i,u,r;for(n=t.inflector.camelize(n,!0),i=0,u=e.length;i<u;i++)if(r=e[i]+n,r in o)return r},r=function(n){return!!u(n)},f=t.devices.real.ios&&t.devices.real.deviceType==="tablet"&&i.devicePixelRatio>1,h=(t.devices.real.deviceType==="desktop"||t.devices.isSimulator())&&t.browser.msie;t.support={touch:"ontouchstart"in i,pointer:i.navigator.pointerEnabled,transform3d:!h&&!f&&r("perspective"),transition:!f&&r("transition"),transitionEndEventName:s[u("transition")],animation:!f&&r("animation"),winJS:"WinJS"in i,styleProp:u,supportProp:r,hasKo:!!i.ko,hasNg:!i.ko&&!!i.angular,inputType:function(n){if(n==="text")return!0;var t=document.createElement("input");try{return t.setAttribute("type",n),t.value="wrongValue",!t.value}catch(i){return!1}}}}(jQuery,DevExpress,this),function(n,t,i){var v=/left|right/,y=/top|bottom/,s=/fit|flip|none/,f=function(n){switch(typeof n){case"string":return n.split(/\s+/,2);case"object":return[n.x||n.h,n.y||n.v];case"number":return[n];default:return n}},h=function(t){var i={h:"center",v:"center"},r=f(t);return r&&n.each(r,function(){var n=String(this).toLowerCase();v.test(n)?i.h=n:y.test(n)&&(i.v=n)}),i},p=function(n){var t=f(n),i=parseInt(t&&t[0],10),r=parseInt(t&&t[1],10);return isFinite(i)||(i=0),isFinite(r)||(r=i),{h:i,v:r}},w=function(n){var t=f(n),i=String(t&&t[0]).toLowerCase(),r=String(t&&t[1]).toLowerCase();return s.test(i)||(i="none"),s.test(r)||(r=i),{h:i,v:r}},c=function(n){switch(n){case"center":return.5;case"right":case"bottom":return 1;default:return 0}},e=function(n){switch(n){case"left":return"right";case"right":return"left";case"top":return"bottom";case"bottom":return"top";default:return n}},o=function(n){n.myLocation=n.atLocation+c(n.atAlign)*n.atSize-c(n.myAlign)*n.mySize+n.offset},r={fit:function(n,t){var i=!1;return n.myLocation>t.max&&(n.myLocation=t.max,i=!0),n.myLocation<t.min&&(n.myLocation=t.min,i=!0),i},flip:function(t,i){if(t.myAlign==="center"&&t.atAlign==="center")return!1;if(t.myLocation<i.min||t.myLocation>i.max){var r=n.extend({},t,{myAlign:e(t.myAlign),atAlign:e(t.atAlign),offset:-t.offset});if(o(r),r.myLocation>=i.min&&r.myLocation<=i.max||r.myLocation>t.myLocation)return t.myLocation=r.myLocation,!0}return!1}},u,b={h:{location:0,flip:!1,fit:!1},v:{location:0,flip:!1,fit:!1}},l=function(f,e){var y=n(f),g=y.offset(),v=n.extend(!0,{},b,{h:{location:g.left},v:{location:g.top}}),k,d;if(!e)return v;var nt=h(e.my),tt=h(e.at),s=e.of||window,it=p(e.offset),rt=w(e.collision),c={mySize:y.outerWidth(),myAlign:nt.h,atAlign:tt.h,offset:it.h,collision:rt.h},l={mySize:y.outerHeight(),myAlign:nt.v,atAlign:tt.v,offset:it.v,collision:rt.v};return s.preventDefault?(c.atLocation=s.pageX,l.atLocation=s.pageY,c.atSize=0,l.atSize=0):(s=n(s),n.isWindow(s[0])?(c.atLocation=s.scrollLeft(),l.atLocation=s.scrollTop(),c.atSize=s.width(),l.atSize=s.height()):s[0].nodeType===9?(c.atLocation=0,l.atLocation=0,c.atSize=s.width(),l.atSize=s.height()):(k=s.offset(),c.atLocation=k.left,l.atLocation=k.top,c.atSize=s.outerWidth(),l.atSize=s.outerHeight())),o(c),o(l),d=function(){var r=n(window),f=r.width(),e=r.height(),o=r.scrollLeft(),s=r.scrollTop(),h=document.width>document.documentElement.clientWidth,v=document.height>document.documentElement.clientHeight,y=t.support.touch?document.documentElement.clientWidth/(v?f-u:f):1,p=t.support.touch?document.documentElement.clientHeight/(h?e-u:e):1;return u===i&&(u=a()),{h:{min:o,max:o+r.width()/y-c.mySize},v:{min:s,max:s+r.height()/p-l.mySize}}}(),r[c.collision]&&(v.h[c.collision]=r[c.collision](c,d.h)),r[l.collision]&&(v.v[l.collision]=r[l.collision](l,d.v)),n.extend(!0,v,{h:{location:Math.round(c.myLocation)},v:{location:Math.round(l.myLocation)}}),v},k=function(t,i){var u=n(t),r;return i?(r=i.h&&i.v?i:l(u,i),u.offset({left:r.h.location,top:r.v.location}),r):u.offset()},a;n.extend(t,{calculatePosition:l,position:k,inverseAlign:e}),a=function(){var t=n("<div>").css({width:100,height:100,overflow:"scroll",position:"absolute",top:-9999}).appendTo(n("body")),i=t.get(0).offsetWidth-t.get(0).clientWidth;return t.remove(),i}}(jQuery,DevExpress),function(n,t){var r={},u=function(t,i){if(n.isPlainObject(t)){n.each(t,u);return}r[t]=i},e=function(){var i=n.makeArray(arguments);n.each(i,function(){delete r[this]})},f;u({func:{execute:function(t){n.isFunction(t.action)&&(t.result=t.action.apply(t.context,t.args),t.handled=!0)}},url:{execute:function(n){typeof n.action=="string"&&n.action.charAt(0)!=="#"&&(document.location=n.action)}},hash:{execute:function(n){typeof n.action=="string"&&n.action.charAt(0)==="#"&&(document.location.hash=n.action)}}}),f=t.Class.inherit({ctor:function(t,i){i=i||{},this._action=t||n.noop,this._context=i.context||window,this._beforeExecute=i.beforeExecute||n.noop,this._afterExecute=i.afterExecute||n.noop,this._component=i.component,this._excludeValidators=i.excludeValidators},execute:function(){var n={action:this._action,args:Array.prototype.slice.call(arguments),context:this._context,component:this._component,canceled:!1,handled:!1},t;if(this._validateAction(n))return(this._beforeExecute.call(this._context,n),n.canceled)?void 0:(t=this._executeAction(n),this._afterExecute.call(this._context,n),t)},_validateAction:function(t){var i=this._excludeValidators;return n.each(r,function(r,u){if(!i||!(n.inArray(r,i)>-1))return u.validate&&u.validate(t),t.canceled?!1:void 0}),!t.canceled},_executeAction:function(t){var i;return n.each(r,function(n,r){return r.execute&&r.execute(t),t.handled?(i=t.result,!1):void 0}),i}}),n.extend(t,{registerActionExecutor:u,unregisterActionExecutor:e,Action:f})}(jQuery,DevExpress),function(n,t,i){function fr(t,i){return(t.textContent||t.innerText||n(t).text()||"").toLowerCase().indexOf((i||"").toLowerCase())>-1}function tt(t,r){var e,u,f;for(f in r)(e=t[f],u=r[f],t!==u)&&(n.isPlainObject(u)?t[f]=tt(n.isPlainObject(e)?e:{},u):u!==i&&(t[f]=u));return t}var it=Math.PI,rt=Math.LN10,ut=Math.cos,ft=Math.sin,l=Math.abs,et=Math.log,ot=Math.floor,st=Math.ceil,ht=Math.max,er=Math.min,a=window.isNaN,w=window.Number,ct=window.NaN,f=["millisecond","second","minute","hour","day","week","month","quarter","year"],lt=function(n){return n!==null&&n!==i},o=function(t){return n.type(t)==="string"},s=function(t){return n.isNumeric(t)},v=function(t){return n.type(t)==="object"},at=function(t){return n.type(t)==="array"},b=function(t){return n.type(t)==="date"},vt=function(t){return n.type(t)==="function"},r=function(n){switch(n){case"millisecond":return 1;case"second":return r("millisecond")*1e3;case"minute":return r("second")*60;case"hour":return r("minute")*60;case"day":return r("hour")*24;case"week":return r("day")*7;case"month":return r("day")*30;case"quarter":return r("month")*3;case"year":return r("day")*365;default:return 0}},h=function(n,t){return r(n)*t},yt=function(n){for(var t,i,f=["millisecond","second","minute","hour","day","month","year"],e={},u=f.length-1;u>=0;u--)i=f[u],t=Math.floor(n/r(i)),t>0&&(e[i+"s"]=t,n-=h(i,t));return e},pt=function(t){var i=0;return v(t)&&n.each(t,function(n,t){i+=h(n.substr(0,n.length-1),t)}),o(t)&&(i=h(t,1)),i},wt=function(t,i){var r,u=0;return r={year:t.getFullYear()!==i.getFullYear(),month:t.getMonth()!==i.getMonth(),day:t.getDate()!==i.getDate(),hour:t.getHours()!==i.getHours(),minute:t.getMinutes()!==i.getMinutes(),second:t.getSeconds()!==i.getSeconds()},n.each(r,function(n,t){t&&u++}),r.count=u,r},bt=function(n,t){return n&&t&&n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()},kt=function(n){return new Date(n.getFullYear(),n.getMonth(),1)},y=function(n){var t,i;return s(n)&&(t=n.toString(),i=t.indexOf("."),i>=0)?c(n)?t.substr(i+1,t.indexOf("e")-i-1):(t=n.toFixed(20),t.substr(i+1,t.length-i+1)):""},dt=function(n){var i=y(n),t;if(i)for(t=0;t<i.length;t++)if(i.charAt(t)!=="0")return t+1;return 0},u=function(n,t,i){return n+(i?-1:1)*t},c=function(n){return s(n)&&n.toString().indexOf("e")!==-1},gt=function(n,t,i){var r=null,f;return b(n)?(f=o(t)?g(t.toLowerCase()):t,r=new Date(n.getTime()),f.years&&r.setFullYear(u(r.getFullYear(),f.years,i)),f.quarters&&r.setMonth(u(r.getMonth(),3*f.quarters,i)),f.months&&r.setMonth(u(r.getMonth(),f.months,i)),f.weeks&&r.setDate(u(r.getDate(),7*f.weeks,i)),f.days&&r.setDate(u(r.getDate(),f.days,i)),f.hours&&r.setHours(u(r.getHours(),f.hours,i)),f.minutes&&r.setMinutes(u(r.getMinutes(),f.minutes,i)),f.seconds&&r.setSeconds(u(r.getSeconds(),f.seconds,i)),f.milliseconds&&r.setMilliseconds(u(n.getMilliseconds(),f.milliseconds,i))):r=u(n,t,i),r},k=function(t){var r=-1,i;return o(t)?t:v(t)?(n.each(t,function(n,t){for(i=0;i<f.length;i++)t&&(n===f[i]+"s"||n===f[i])&&r<i&&(r=i)}),f[r]):""},ni=function(n,i){var r,u,f=k(i);switch(f){case"second":n.setMilliseconds(0);break;case"minute":n.setSeconds(0,0);break;case"hour":n.setMinutes(0,0,0);break;case"year":n.setMonth(0);case"month":n.setDate(1);case"day":n.setHours(0,0,0,0);break;case"week":r=n.getDate(),n.getDay()!==0&&(r+=7-n.getDay()),n.setDate(r),n.setHours(0,0,0,0);break;case"quarter":u=t.formatHelper.getFirstQuarterMonth(n.getMonth()),n.getMonth()!==u&&n.setMonth(u),n.setDate(1),n.setHours(0,0,0,0)}},p=function(n,t){return t>20&&(t=20),s(n)?c(n)?w(n.toExponential(t)):w(n.toFixed(t)):void 0},d=function(n){var r,u=n.toString(),f=u.indexOf("."),t,i;return c(n)?(i=e(n),i<0?Math.abs(i):0):f!==-1?(t=f+1,r=u.substring(t,t+20),r.length):0},ti=function(n,t,i){var r=d(n),u=d(t);return p(i,r<u?u:r)},ii=function(n){var i=y(n),r,t;if(i)for(t=1;t<=i.length;t++)if(r=p(n,t),r!==0&&i[t-2]&&i[t-1]&&i[t-2]===i[t-1])return r;return n},g=function(n){var t={};switch(n){case"year":t.years=1;break;case"month":t.months=1;break;case"quarter":t.months=3;break;case"week":t.days=7;break;case"day":t.days=1;break;case"hour":t.hours=1;break;case"minute":t.minutes=1;break;case"second":t.seconds=1;break;case"millisecond":t.milliseconds=1}return t},ri=function(n){return(n%360+360)%360},ui=function(n){return 90-n},nt=function(n){return it*n/180},fi=function(n){var t=nt(n);return{cos:ut(t),sin:ft(t)}},ei=1e-14,e=function(n){var t=l(n),i;return a(t)?ct:t>0?(t=et(t)/rt,i=st(t),i-t<ei?i:ot(t)):0},oi=function(n,t,i){var u=ht(e(n),e(t)),r=-e(l(t-n)/i),f;return!a(u)&&!a(r)?(l(u)<=4?(f="fixedPoint",r<0&&(r=0),r>4&&(r=4)):(f="exponential",r+=u-1,r>3&&(r=3)),{format:f,precision:r}):null},si=function(t){var i=n(window),r,u=function(){var n=i.width(),u=i.height();clearTimeout(r),r=setTimeout(function(){i.width()===n&&i.height()===u&&t()},100)};return u.stop=function(){return clearTimeout(r),this},u},hi=function(){function i(i){t&&n.isFunction(t.info)&&t.info(i)}function r(i){t&&n.isFunction(t.warn)&&t.warn(i)}function u(i){t&&n.isFunction(t.error)&&t.error(i)}var t=window.console;return{info:i,warn:r,error:u}}(),ci=function(){function n(n,t){if(!n)throw new Error(t);}function t(t,r){n(t!==null&&t!==i,r)}return{assert:n,assertParam:t}}(),li=function(){var t,r=n.Callbacks(),i=n(window),u=function(){return[i.width(),i.height()].join()},f=function(){var n=u();n!==t&&(t=n,r.fire())};i.on("resize",f);return t=u(),r}(),ai=function(){function r(){var t=n("<input>").addClass("dx-hidden-input").appendTo("body");setTimeout(function(){t.focus(),setTimeout(function(){t.hide(),t.remove()},100)},100)}function u(){var n=document.activeElement;n&&n!==document.body&&n.blur&&n.blur()}var i=t.devices.real.platform==="android"&&/^4\.0(\.\d)?/.test(t.devices.real.version.join("."))&&navigator.userAgent.indexOf("Chrome")===-1;i?r():u()},vi=function(t){var i=n("<div />");return window.WinJS?WinJS.Utilities.setInnerHTMLUnsafe(i.get(0),t):i.append(t),i.contents()},yi=function(){var n=1;return function(){return"DevExpress_"+n++}}(),pi=function(){var n=1;return function(){return"DevExpressPattern_"+n++}}(),wi=function(n,t,i){var r,u;n=n||{};for(r in t)t.hasOwnProperty(r)&&(u=t[r],r in n&&!i||(n[r]=u));return n},bi=function(){function n(){}return function(t){return n.prototype=t,new n}}(),ki=function(t,i){var r=n.Deferred(),u=i||this;return setTimeout(function(){var i=t.call(u);i&&i.done&&n.isFunction(i.done)?i.done(function(){r.resolveWith(u)}):r.resolveWith(u)},0),r.promise()},di=function(n,t){return Math.log(n)/Math.log(t)},gi=function(n,t){return Math.pow(t,n)},nr=function(){for(var t=arguments[0],i,n=0;n<arguments.length-1;n++)i=new RegExp("\\{"+n+"\\}","gm"),t=t.replace(i,arguments[n+1]);return t},tr=function(t){var i,r={left:{},top:{}},f=t.getRoot(),u;return f&&(i=f.element,i.getScreenCTM?(u=i.getScreenCTM(),u?(r.left=i.createSVGPoint().matrixTransform(u).x+(document.body.scrollLeft||document.documentElement.scrollLeft),r.top=i.createSVGPoint().matrixTransform(u).y+(document.body.scrollTop||document.documentElement.scrollTop)):(r.left=document.body.scrollLeft||document.documentElement.scrollLeft,r.top=document.body.scrollTop||document.documentElement.scrollTop)):(r.left=n(i).offset().left,r.top=n(i).offset().top)),r},ir=function(t,r,u){var f=[],e=0;return n.each(r,function(r,o){var s=0,h=u?u(o):o;n.each(h,function(n){var r=t[n];if(r!==h[n]&&r!==i)return s=0,!1;s++}),s===e&&s>0?f.push(o):s>e&&(f.length=0,f.push(o),e=s)}),f},rr=function(n){return(n+"").replace(/([\+\*\?\\\.\[\^\]\$\(\)\{\}\>\<\|\=\!\:])/g,"\\$1")},ur=function(n,t,i){return n.replace(new RegExp("("+rr(t)+")","gi"),i)};n.expr[":"].dxicontains=n.expr.createPseudo(function(n){return function(t){return fr(t,n)}}),t.utils={dateUnitIntervals:f,isDefined:lt,isString:o,isNumber:s,isObject:v,isArray:at,isDate:b,isFunction:vt,getLog:di,raiseTo:gi,normalizeAngle:ri,convertAngleToRendererSpace:ui,degreesToRadians:nt,getCosAndSin:fi,getDecimalOrder:e,getAppropriateFormat:oi,getFraction:y,adjustValue:ii,convertMillisecondsToDateUnits:yt,convertDateTickIntervalToMilliseconds:pt,convertDateUnitToMilliseconds:h,getDateUnitInterval:k,getDatesDifferences:wt,correctDateWithUnitBeginning:ni,roundValue:p,isExponential:c,applyPrecisionByMinDelta:ti,getSignificantDigitPosition:dt,addInterval:gt,getDateIntervalByString:g,sameMonthAndYear:bt,getFirstMonthDate:kt,logger:hi,debug:ci,createResizeHandler:si,windowResizeCallbacks:li,resetActiveElement:ai,createMarkupFromString:vi,getNextClipId:yi,getNextPatternId:pi,extendFromObject:wi,clone:bi,executeAsync:ki,stringFormat:nr,getRootOffset:tr,findBestMatches:ir,replaceAll:ur,deepExtendArraySafe:tt}}(jQuery,DevExpress),function(n,t,i){var u=t.support,e=/matrix(3d)?\((.+?)\)/,o=/translate(?:3d)?\((.+?)\)/,s=function(n){var t,i,f;return u.transform3d?(f=r(n),t={left:f.x,top:f.y}):(i=n.position(),t={left:i.left,top:i.top}),t},h=function(n,t,e){if(e=e||{},!u.transform3d&&!e.cssTransform){n.css(t);return}var o=r(n),s=t.left,h=t.top;s!==i&&(o.x=s),h!==i&&(o.y=h),n.css({transform:f(o),transformOrigin:"0% 0%"})},r=function(n){var i=n.css("transform")||"translate3d(0, 0, 0)",t=i.match(e),r=t&&t[1];return t?(t=t[2].split(","),r==="3d"?t=t.slice(12,15):(t.push(0),t=t.slice(4,7))):t=[0,0,0],{x:parseFloat(t[0]),y:parseFloat(t[1]),z:parseFloat(t[2])}},c=function(n){var t=n.match(o);if(t&&t[1])return t=t[1].split(","),t={x:parseFloat(t[0]),y:parseFloat(t[1]),z:parseFloat(t[2])}},f=function(n){return"translate3d("+(n.x||0)+"px, "+(n.y||0)+"px, "+(n.z||0)+"px) scale(1)"};t.translator={move:h,locate:s,parseTranslate:c,getTranslate:r,getTranslateCss:f}}(jQuery,DevExpress),function(n,t){t.Animator=t.Class.inherit({ctor:function(){this._finished=!0,this._stopped=!1},start:function(){this._stopped=!1,this._finished=!1,this._stepCore()},stop:function(){this._stopped=!0},_stepCore:function(){if(this._isStopped()){this._stop();return}if(this._isFinished()){this._finished=!0,this._complete();return}this._step(),t.requestAnimationFrame.call(window,n.proxy(this._stepCore,this))},_step:t.abstract,_isFinished:n.noop,_stop:n.noop,_complete:n.noop,_isStopped:function(){return this._stopped},inProgress:function(){return!(this._stopped||this._finished)}})}(jQuery,DevExpress),function(n,t,i){var f=t.translator,o=t.support,e=o.transitionEndEventName+".dxFX",w=/cubic-bezier\((\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\)/,s="dxSimulatedTransitionTimeoutKey",u="dxAnimData",r="transform",b=1e3/60,k={animate:function(t,i){var r=n.Deferred(),u=n.Deferred(),o=n.Deferred();t.one(e,function(){u.reject()});return t.data(s,setTimeout(function(){o.reject()},i.duration+i.delay)),n.when(u,o).fail(n.proxy(function(){this._cleanup(t),r.resolveWith(t,[i,t])},this)),f.getTranslate(t),t.css({transitionProperty:"all",transitionDelay:i.delay+"ms",transitionDuration:i.duration+"ms",transitionTimingFunction:i.easing}),y(t,i.to),i.duration||t.trigger(e),r.promise()},_cleanup:function(n){n.css("transition","none").off(e);var t=n.data(s);clearTimeout(t),n.removeData(s)},stop:function(t,i){var r=t.data(u);r&&(i?t.trigger(e):(n.each(r.to,function(n){t.css(n,t.css(n))}),this._cleanup(t)))}},d=t.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){window.setTimeout(n,b)}}(),h={animate:function(t,e){var h=n.Deferred(),s=t.data(u),o=this;return s?(n.each(e.to,function(n){e.from[n]===i&&(e.from[n]=o._normalizeValue(t.css(n)))}),e.to[r]&&(e.from[r]=o._parseTransform(e.from[r]),e.to[r]=o._parseTransform(e.to[r])),s.frameAnimation={to:e.to,from:e.from,currentValue:e.from,easing:tt(e.easing),duration:e.duration,startTime:(new Date).valueOf(),finish:function(){this.currentValue=this.to,this.draw(),h.resolve()},draw:function(){var i=n.extend({},this.currentValue);i[r]&&(i[r]=n.map(i[r],function(n,t){return t==="translate"?f.getTranslateCss(n):t==="scale"?"scale("+n+")":t.substr(0,t.length-1)==="rotate"?t+"("+n+"deg)":void 0}).join(" ")),t.css(i)}},e.delay?(s.frameAnimation.startTime+=e.delay,s.frameAnimation.delayTimeout=setTimeout(function(){o._animationStep(t)},e.delay)):o._animationStep(t),h.promise()):h.reject().promise()},_parseTransform:function(t){var i={};return n.each(t.match(/(\w|\d)+\([^\)]*\)\s*/g),function(n,t){var e=f.parseTranslate(t),u=t.match(/scale\((.+?)\)/),r=t.match(/(rotate.)\((.+)deg\)/);e&&(i.translate=e),u&&u[1]&&(i.scale=parseFloat(u[1])),r&&r[1]&&(i[r[1]]=parseFloat(r[2]))}),i},stop:function(n,t){var r=n.data(u),i=r&&r.frameAnimation;i&&(clearTimeout(i.delayTimeout),t&&i.finish())},_animationStep:function(t){var f=t.data(u),i=f&&f.frameAnimation,r;if(i){if(r=(new Date).valueOf(),r>=i.startTime+i.duration){i.finish();return}i.currentValue=this._calcStepValue(i,r-i.startTime),i.draw(),d(n.proxy(function(){this._animationStep(t)},this))}},_calcStepValue:function(t,i){var r=function(u,f){var e=n.isArray(f)?[]:{},o=function(r){var e=i/t.duration,o=i,s=1*u[r],h=f[r]-u[r],c=t.duration;return n.easing[t.easing](e,o,s,h,c)};return n.each(f,function(n,t){if(typeof t=="string"&&parseFloat(t,10)===!1)return!0;e[n]=typeof t=="object"?r(u[n],t):o(n)}),e};return r(t.from,t.to)},_normalizeValue:function(n){var t=parseFloat(n,10);return t===!1?n:t}},g={transition:o.transition?k:h,frame:h},c=function(n){return g[n&&n.strategy||"transition"]},nt={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)"},tt=function(t){var i,r,u;return(t=nt[t]||t,i=t.match(w),!i)?"linear":(i=i.slice(1,5),n.each(i,function(n,t){i[n]=parseFloat(t)}),r="cubicbezier_"+i.join("_").replace(/\./g,"p"),n.isFunction(n.easing[r])||(u=function(n,t,i,r){var u=3*n,f=3*(i-n)-u,o=1-u-f,e=3*t,s=3*(r-t)-e,h=1-e-s,c=function(n){return n*(u+n*(f+n*o))},l=function(n){return n*(e+n*(s+n*h))},a=function(n){for(var t=n,r=0,i;r<14;){if(i=c(t)-n,Math.abs(i)<.001)break;t=t-i/v(t),r++}return t},v=function(n){return u+n*(2*f+n*3*o)};return function(n){return l(a(n))}},n.easing[r]=function(n,t,r,f,e){return f*u(i[0],i[1],i[2],i[3])(t/e)+r}),r)},l=function(t,i){n.each(["from","to"],function(){if(!n.isPlainObject(t[this]))throw Error("Animation with the '"+i+"' type requires '"+this+"' configuration as an plain object.");})},it={setup:function(){}},rt={validateConfig:function(n){l(n,"slide")},setup:function(n,t){o.transform3d&&(this._resetLocation(n),this._locationToTranslate(n,t.from),this._locationToTranslate(n,t.to))},_resetLocation:function(n){n.css({top:0,left:0})},_locationToTranslate:function(n,t){var u=f.getTranslate(n),e=t.left,o=t.top;e!==i&&(u.x=e,delete t.left),o!==i&&(u.y=o,delete t.top),t[r]=f.getTranslateCss(u)}},ut={setup:function(t,i){var r=i.from,u=n.isPlainObject(r)?t.css("opacity"):String(r),f=String(i.to);i.from={opacity:u},i.to={opacity:f}}},ft={validateConfig:function(n){l(n,"pop")},setup:function(n,t){var i=t.from,u=t.to,f="opacity"in i?i.opacity:n.css("opacity"),e="opacity"in u?u.opacity:1,o="scale"in i?i.scale:0,s="scale"in u?u.scale:1;t.from={opacity:f},t.from[r]=this._getCssTransform(o),t.to={opacity:e},t.to[r]=this._getCssTransform(s)},_getCssTransform:function(n){return"scale("+n+")"}},a={custom:it,slide:rt,fade:ut,pop:ft},et=function(n){var t=a[n];if(!t)throw Error('Unknown animation type "'+n+'"');return t},ot={type:"custom",from:{},to:{},duration:400,complete:n.noop,easing:"ease",delay:0},st=function(t,i){i=n.extend(!0,{},ot,i);var r=n(t),u=et(i.type);return r.length?(v(r,i.from),v(r,i.to),n.isFunction(u.validateConfig)&&u.validateConfig(i),u.setup(r,i),p(r),y(r,i.from),ht(r,i).done(i.complete)):n.Deferred().resolve().promise()},v=function(i,r){if(r.position){var u=t.calculatePosition(i,r.position);n.extend(r,{left:u.h.location,top:u.v.location}),delete r.position}},y=function(t,i){n.each(i,function(n,i){t.css(n,i)})},ht=function(i,r){var f=n.Deferred();return i.data(u,r),t.fx.off&&(r.duration=0),c(r).animate(i,r).done(function(){i.removeData(u),f.resolveWith(this,[i,r])}),f.promise()},ct=function(n){return!!n.data(u)},p=function(t,i){var r=n(t);c(r.data(u)).stop(r,i),r.removeData(u)};t.fx={off:!1,animationTypes:a,animate:st,animating:ct,stop:p}}(jQuery,DevExpress),function(n,t){function e(n){return/^(localhost$|127\.)/i.test(n)}var r=window.location,u="dxproxy.devexpress.com:8000",f=r.protocol==="ms-appx:",o=r.host===u,s=e(r.hostname),h=function(){return r.pathname.split("/")[1]},c=function(n){var i=t.parseUrl(n);return e(i.hostname)?"http://"+u+"/"+h()+"_"+i.port+i.pathname+i.search:n},l=t.EndpointSelector=function(n){this.config=n};l.prototype={urlFor:function(n){var t=this.config[n];if(!t)throw Error("Unknown endpoint key");return o?c(t.local):t.production&&(f&&!Debug.debuggerEnabled||!f&&!s)?t.production:t.local}}}(jQuery,DevExpress),function(n,t,i){var r=t.utils,f,u;t.NumericFormat={currency:"C",fixedpoint:"N",exponential:"",percent:"P",decimal:"D"},t.LargeNumberFormatPostfixes={1:"K",2:"M",3:"B",4:"T"},f=4,u=10,t.LargeNumberFormatPowers={largenumber:"auto",thousands:1,millions:2,billions:3,trillions:4},t.DateTimeFormat={longdate:"D",longtime:"T",monthandday:"M",monthandyear:"Y",quarterandyear:"qq",shortdate:"d",shorttime:"t",millisecond:"fff",second:"T",minute:"t",hour:"t",day:"dd",week:"dd",month:"MMMM",quarter:"qq",year:"yyyy",longdatelongtime:"D",shortdateshorttime:"d"},t.formatHelper={romanDigits:["I","II","III","IV"],_addFormatSeparator:function(n,t){var i=" ";return t?n+i+t:n},_getDateTimeFormatPattern:function(n){return Globalize.findClosestCulture().calendar.patterns[t.DateTimeFormat[n.toLowerCase()]]},_isDateFormatContains:function(i){var r=!1;return n.each(t.DateTimeFormat,function(n){return r=n===i.toLowerCase(),!r}),r},getQuarter:function(n){return Math.floor(n/3)},getQuarterString:function(n,t){var i="",r=this.getQuarter(n.getMonth());switch(t){case"q":i=this.romanDigits[r];break;case"qq":i="Q"+this.romanDigits[r];break;case"Q":i=(r+1).toString();break;case"QQ":i="Q"+(r+1).toString()}return i},getFirstQuarterMonth:function(n){return this.getQuarter(n)*3},_formatCustomString:function(n,t){for(var f=/qq|q|QQ|Q/g,i,u="",r=0;r<t.length;)i=f.exec(t),(!i||i.index>r)&&(u+=Globalize.format(n,t.substring(r,i?i.index:t.length))),i?(u+=this.getQuarterString(n,i[0]),r=i.index+i[0].length):r=t.length;return u},_parseNumberFormatString:function(i){var u,r={};if(i&&typeof i=="string")return u=i.toLowerCase().split(" "),n.each(u,function(n,i){i in t.NumericFormat?r.formatType=i:i in t.LargeNumberFormatPowers&&(r.power=t.LargeNumberFormatPowers[i])}),r.power&&!r.formatType&&(r.formatType="fixedpoint"),r.formatType?r:void 0},_calculateNumberPower:function(n,t,r,u){var f=Math.abs(n),e=0;if(f>1)while(f&&f>=t&&(u===i||e<u))e++,f=f/t;else if(f>0&&f<1)while(f<1&&(r===i||e>r))e--,f=f*t;return e},_getNumberByPower:function(n,t,i){for(var r=n;t>0;)r=r/i,t--;while(t<0)r=r*i,t++;return r},_formatNumber:function(n,i,r){var u;return i.power==="auto"&&(i.power=this._calculateNumberPower(n,1e3,0,f)),i.power&&(n=this._getNumberByPower(n,i.power,1e3)),u=t.LargeNumberFormatPostfixes[i.power]||"",this._formatNumberCore(n,i.formatType,r)+u},_formatNumberExponential:function(n,t){var r=this._calculateNumberPower(n,u),f=this._getNumberByPower(n,r,u),e;return t=t===i?1:t,f.toFixed(t||0)>=u&&(r++,f=f/u),e=(r>=0?"+":"")+r.toString(),this._formatNumberCore(f,"fixedpoint",t)+"E"+e},_formatNumberCore:function(n,i,u){return i==="exponential"?this._formatNumberExponential(n,u):Globalize.format(n,t.NumericFormat[i]+(r.isNumber(u)?u:0))},_formatDate:function(n,i){var u=t.DateTimeFormat[i.toLowerCase()];return(i=i.toLowerCase(),i==="quarterandyear"&&(u=this.getQuarterString(n,u)+" yyyy"),i==="quarter")?this.getQuarterString(n,u):i==="longdatelongtime"?this._formatDate(n,"longdate")+" "+this._formatDate(n,"longtime"):i==="shortdateshorttime"?this._formatDate(n,"shortDate")+" "+this._formatDate(n,"shortTime"):Globalize.format(n,u)},format:function(n,t,i){if(t&&t.format){if(t.dateType)return this._formatDateEx(n,t);if(r.isNumber(n)&&isFinite(n))return this._formatNumberEx(n,t)}return this._format(n,t,i)},_format:function(n,t,i){var u;return!r.isString(t)||t===""||!r.isNumber(n)&&!r.isDate(n)?r.isDefined(n)?n.toString():"":(u=this._parseNumberFormatString(t),r.isNumber(n)&&u)?this._formatNumber(n,u,i):r.isDate(n)&&this._isDateFormatContains(t)?this._formatDate(n,t):!u&&!this._isDateFormatContains(t)?this._formatCustomString(n,t):void 0},_formatNumberEx:function(n,i){var a=this,v=t.NumericFormat[i.format.toLowerCase()],f=Globalize.culture().numberFormat,w=i.currencyCulture&&Globalize.cultures[i.currencyCulture]?Globalize.cultures[i.currencyCulture].numberFormat.currency:f.currency,b=f.percent,c=a._getUnitFormatSettings(n,i),k=c.unit,y=c.precision,nt=c.showTrailingZeros,tt=c.includeGroupSeparator,it=f[","],rt=f["."],r,l,o,u,d=/n|\$|-|%/g,e="",s,p,g,h;n=a._applyUnitToValue(n,k),r=Math.abs(n),l=n<0;switch(v){case"D":if(o="n",r=Math[l?"ceil":"floor"](r),y>0){for(s=""+r,p=s.length;p<y;p+=1)s="0"+s;r=s}l&&(r="-"+r);break;case"N":u=f;case"C":u=u||w;case"P":u=u||b,o=l?u.pattern[0]:u.pattern[1]||"n",r=Globalize.format(r*(v==="P"?100:1),"N"+y),nt||(r=a._excludeTrailingZeros(r,rt)),tt||(r=r.replace(new RegExp("\\"+it,"g"),""));break;default:throw"Illegal numeric format: '"+v+"'";}for(;;)if(g=d.lastIndex,h=d.exec(o),e+=o.slice(g,h?h.index:o.length),h)switch(h[0]){case"-":/[1-9]/.test(r)&&(e+=f["-"]);break;case"$":e+=w.symbol;break;case"%":e+=b.symbol;break;case"n":e+=r+k}else break;return(i.plus&&n>0?"+":"")+e},_excludeTrailingZeros:function(n,t){var u=n.indexOf(t),r,i;if(u<0)return n;for(r=n.length,i=r-1;i>=u&&(n[i]==="0"||i===u);i--)r--;return n.substring(0,r)},_getUnitFormatSettings:function(n,t){var e=t.unit||"",u=t.precision||0,h=t.includeGroupSeparator||!1,s=t.showTrailingZeros===i?!0:t.showTrailingZeros,f=t.significantDigits||1,r,o;if(e.toLowerCase()==="auto")if(s=!1,r=Math.abs(n),f<1&&(f=1),r>=1e9?(e="B",r/=1e9):r>=1e6?(e="M",r/=1e6):r>=1e3?(e="K",r/=1e3):e="",r==0)u=0;else if(r<1)for(u=f,o=Math.pow(10,-f);r<o;)o/=10,u++;else u=r>=100?f-3:r>=10?f-2:f-1;return u<0&&(u=0),{unit:e,precision:u,showTrailingZeros:s,includeGroupSeparator:h}},_applyUnitToValue:function(n,t){return t=="B"?n.toFixed(1)/1e9:t=="M"?n/1e6:t=="K"?n/1e3:n},_formatDateEx:function(t,r){var f=this,l="Q",c=r.format,u=r.dateType,h=Globalize.culture().calendars.standard,o=i,s,e;if(c=c.toLowerCase(),u!=="num"||c==="dayofweek")switch(c){case"monthyear":return f._formatDate(t,"monthandyear");case"quarteryear":return f.getQuarterString(t,"QQ")+" "+t.getFullYear();case"daymonthyear":return f._formatDate(t,u+"Date");case"datehour":return o=new Date(t.getTime()),o.setMinutes(0),e=u==="timeOnly"?"":f._formatDate(t,u+"Date"),u==="timeOnly"?f._formatDate(o,"shorttime"):e+" "+f._formatDate(o,"shorttime");case"datehourminute":return e=u==="timeOnly"?"":f._formatDate(t,u+"Date"),u==="timeOnly"?f._formatDate(t,"shorttime"):e+" "+f._formatDate(t,"shorttime");case"datehourminutesecond":return e=u==="timeOnly"?"":f._formatDate(t,u+"Date"),u==="timeOnly"?f._formatDate(t,"longtime"):e+" "+f._formatDate(t,"longtime");case"year":return e=t.toString(),u==="abbr"?e.slice(2,4):e;case"quarter":return l+t.toString();case"month":return s=t-1,u==="abbr"?h.months.namesAbbr[s]:h.months.names[s];case"hour":return u==="long"?(o=new Date,o.setHours(t),o.setMinutes(0),f._formatDate(o,"shorttime")):t.toString();case"dayofweek":return s=n.inArray(t,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),u!=="num"?u==="abbr"?h.days.namesAbbr[s]:h.days.names[s]:((s-h.firstDay+1+7)%8).toString();default:return t.toString()}else return t.toString()},getTimeFormat:function(n){return n?this._getDateTimeFormatPattern("longtime"):this._getDateTimeFormatPattern("shorttime")},getDateFormatByDifferences:function(n){var i="";return(n.millisecond&&(i=t.DateTimeFormat.millisecond),(n.hour||n.minute||n.second)&&(i=this._addFormatSeparator(this.getTimeFormat(n.second),i)),n.year&&n.month&&n.day)?this._addFormatSeparator(this._getDateTimeFormatPattern("shortdate"),i):n.year&&n.month?t.DateTimeFormat.monthandyear:n.year?t.DateTimeFormat.year:n.month&&n.day?this._addFormatSeparator(this._getDateTimeFormatPattern("monthandday"),i):n.month?t.DateTimeFormat.month:n.day?this._addFormatSeparator("dddd, dd",i):i},getDateFormatByTicks:function(n){var f,t,u,i,e;if(n.length>1)for(t=r.getDatesDifferences(n[0],n[1]),i=1;i<n.length-1;i++)u=r.getDatesDifferences(n[i],n[i+1]),t.count<u.count&&(t=u);else t={year:!0,month:!0,day:!0,hour:n[0].getHours()>0,minute:n[0].getMinutes()>0,second:n[0].getSeconds()>0};return f=this.getDateFormatByDifferences(t)},getDateFormatByTickInterval:function(n,t,i){var e,u,f,s={quarter:"month",week:"day"},o=function(n,t,i){switch(t){case"year":n.month=i;case"quarter":case"month":n.day=i;case"week":case"day":n.hour=i;case"hour":n.minute=i;case"minute":n.second=i;case"second":n.millisecond=i}},h=function(n,t,i){!i.getMilliseconds()&&i.getSeconds()?i.getSeconds()-t.getSeconds()==1&&(n.millisecond=!0,n.second=!1):!i.getSeconds()&&i.getMinutes()?i.getMinutes()-t.getMinutes()==1&&(n.second=!0,n.minute=!1):!i.getMinutes()&&i.getHours()?i.getHours()-t.getHours()==1&&(n.minute=!0,n.hour=!1):!i.getHours()&&i.getDate()>1?i.getDate()-t.getDate()==1&&(n.hour=!0,n.day=!1):i.getDate()===1&&i.getMonth()?i.getMonth()-t.getMonth()==1&&(n.day=!0,n.month=!1):!i.getMonth()&&i.getFullYear()&&i.getFullYear()-t.getFullYear()==1&&(n.month=!0,n.year=!1)};return i=r.isString(i)?i.toLowerCase():i,u=r.getDatesDifferences(n,t),n!==t&&h(u,n>t?t:n,n>t?n:t),f=r.getDateUnitInterval(u),o(u,f,!0),f=r.getDateUnitInterval(i||"second"),o(u,f,!1),u[s[f]||f]=!0,e=this.getDateFormatByDifferences(u)}}}(jQuery,DevExpress),function(n){function r(n){this.baseColor=n;var t;n&&(t=String(n).toLowerCase().replace(/ /g,""),t=e[t]?"#"+e[t]:t,t=o(t)),t=t||{},this.r=i(t[0]),this.g=i(t[1]),this.b=i(t[2])}function o(n){for(var f,t=0,r=u.length,i;t<r;++t)if(i=u[t].re.exec(n),i)return u[t].process(i);return null}function i(n){return n<0||isNaN(n)?0:n>255?255:n}function s(n,t,i){return"#"+(16777216|n<<16|t<<8|i).toString(16).slice(1)}var e={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"},u=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,process:function(n){return[parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10)]}},{re:/^#(\w{2})(\w{2})(\w{2})$/,process:function(n){return[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]}},{re:/^#(\w{1})(\w{1})(\w{1})$/,process:function(n){return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]}}],f=Math.round;r.prototype={constructor:r,highlight:function(n){return n=n||10,this.alter(n).toHex()},darken:function(n){return n=n||10,this.alter(-n).toHex()},alter:function(n){var t=new r;return t.r=i(this.r+n),t.g=i(this.g+n),t.b=i(this.b+n),t},blend:function(n,t){var e=n instanceof r?n:new r(n),u=new r;return u.r=i(f(this.r*(1-t)+e.r*t)),u.g=i(f(this.g*(1-t)+e.g*t)),u.b=i(f(this.b*(1-t)+e.b*t)),u},toHex:function(){return s(this.r,this.g,this.b)}},n.Color=r}(DevExpress),function(n,t){var r=function(){var i={};return{setup:function(n){this.localizeString=function(r){var u=new RegExp("(^|[^a-zA-Z_0-9"+n+"-]+)("+n+"{1,2})([a-zA-Z_0-9-]+)","g"),f=n+n;return r.replace(u,function(r,u,e,o){var s=u+n+o;return e!==f&&(Globalize.cultures["default"].messages[o]?s=u+Globalize.localize(o):i[o]=t.inflector.humanize(o)),s})}},localizeNode:function(t){var i=this;n(t).each(function(t,r){r.nodeType&&(r.nodeType===3?r.nodeValue=i.localizeString(r.nodeValue):(n.each(r.attributes||[],function(n,t){typeof t.value=="string"&&(t.value=i.localizeString(t.value))}),n(r).contents().each(function(n,t){i.localizeNode(t)})))})},getDictionary:function(t){return t?i:n.extend({},i,Globalize.cultures["default"].messages)}}}();r.setup("@"),t.localization=r}(jQuery,DevExpress),Globalize.addCultureInfo("default",{messages:{Yes:"Yes",No:"No",Cancel:"Cancel",Clear:"Clear",Done:"Done",Loading:"Loading...",Select:"Select...",Search:"Search",Back:"Back","dxLookup-searchPlaceholder":"Minimum character number: {0}","dxCollectionContainerWidget-noDataText":"No data to display","dxList-pullingDownText":"Pull down to refresh...","dxList-pulledDownText":"Release to refresh...","dxList-refreshingText":"Refreshing...","dxList-pageLoadingText":"Loading...","dxListEditDecorator-delete":"Delete","dxScrollView-pullingDownText":"Pull down to refresh...","dxScrollView-pulledDownText":"Release to refresh...","dxScrollView-refreshingText":"Refreshing...","dxScrollView-reachBottomText":"Loading...","dxSwitch-onText":"ON","dxSwitch-offText":"OFF"}}),function(n,t,i){var o=t.support.hasKo,s=function(n){return n.replace(/\[/g,".").replace(/\]/g,"")},u=function(n){return o?ko.utils.unwrapObservable(n):n},h=function(n){return o&&ko.isObservable(n)},c=function(n,t){return t==="this"?n:n[t]},l=function(n,t,i){if(t==="this")throw Error("Cannot assign to self");var r=n[t];h(r)?r(i):n[t]=i},f=function(t){if(arguments.length>1&&(t=n.makeArray(arguments)),!t||t==="this")return function(n){return n};if(n.isFunction(t))return t;if(n.isArray(t))return v(t);t=s(t);var i=t.split(".");return function(t,r){r=r||{};var f=u(t);return n.each(i,function(){if(!f)return!1;var t=u(f[this]);n.isFunction(t)&&!r.functionsAsIs&&(t=t.call(f)),f=t}),f}},v=function(t){var r={};return n.each(t,function(){r[this]=f(this)}),function(t,u){var f={};return n.each(r,function(n){var s=this(t,u),e,o,h,r;if(s!==i){for(e=f,o=n.split("."),h=o.length-1,r=0;r<h;r++)e=e[o[r]]={};e[o[r]]=s}}),f}},y=function(r){r=r||"this",r=s(r);var o=r.lastIndexOf("."),a=f(r.substr(0,o)),e=r.substr(1+o);return function(r,f,o){o=o||{};var v=a(r,{functionsAsIs:o.functionsAsIs}),s=c(v,e);o.functionsAsIs||!n.isFunction(s)||h(s)?(s=u(s),o.merge&&n.isPlainObject(f)&&(s===i||n.isPlainObject(s))?(s||l(v,e,{}),t.utils.deepExtendArraySafe(u(c(v,e)),f)):l(v,e,f)):v[e](f)}},p=function(n){return[n[0],n.length<3?"=":n[1].toLowerCase(),n.length<2?!0:n[n.length-1]]},w=function(t){return n.isArray(t)||(t=[t]),n.map(t,function(t){return{selector:n.isFunction(t)||typeof t=="string"?t:t.getter||t.field||t.selector,desc:!!(t.desc||String(t.dir).charAt(0).toLowerCase()==="d")}})},a=t.Class.inherit({ctor:function(n){n&&(n=String(n)),this._value=this._normalize(n||this._generate())},_normalize:function(n){for(n=n.replace(/[^a-f0-9]/ig,"").toLowerCase();n.length<32;)n+="0";return[n.substr(0,8),n.substr(8,4),n.substr(12,4),n.substr(16,4),n.substr(20,12)].join("-")},_generate:function(){for(var t="",n=0;n<32;n++)t+=Math.round(Math.random()*15).toString(16);return t},toString:function(){return this._value},valueOf:function(){return this._value},toJSON:function(){return this._value}}),r=function(n,t){return n instanceof Date?n.getTime():n instanceof a?n.valueOf():!t&&typeof n=="string"?n.toLowerCase():n},b=function(t,i,u){var e,o,f;if(n.isArray(t)){for(e=n.map(i,function(n,t){return t}),f=0;f<e.length;f++)if(o=e[f],r(i[o],!0)!=r(u[o],!0))return!1;return!0}return r(i,!0)==r(u,!0)},k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=function(t){var r,i;for(n.isArray(t)||(t=g(String(t))),r="",i=0;i<t.length;i+=3){var e=t[i],u=t[i+1],f=t[i+2];r+=n.map([e>>2,(e&3)<<4|u>>4,isNaN(u)?64:(u&15)<<2|f>>6,isNaN(f)?64:f&63],function(n){return k.charAt(n)}).join("")}return r},g=function(n){for(var i=[],t,r=0;r<n.length;r++)t=n.charCodeAt(r),t<128?i.push(t):t<2048?i.push(192+(t>>6),128+(t&63)):t<65536?i.push(224+(t>>12),128+(t>>6&63),128+(t&63)):t<2097152&&i.push(240+(t>>18),128+(t>>12&63),128+(t>>6&63),128+(t&63));return i},nt=function(){var n={timeout:"Network connection timeout",error:"Unspecified network error",parsererror:"Unexpected server response"},t=function(t){var i=n[t];return i?i:t};return function(n,i){return n.status<400?t(i):n.statusText}}(),e=t.data={utils:{compileGetter:f,compileSetter:y,normalizeBinaryCriterion:p,normalizeSortingInfo:w,toComparable:r,keysEqual:b,errorMessageFromXhr:nt},Guid:a,base64_encode:d,queryImpl:{},queryAdapters:{},query:function(){var t=n.isArray(arguments[0])?"array":"remote";return e.queryImpl[t].apply(this,arguments)},errorHandler:null,_handleError:function(n){e.errorHandler&&e.errorHandler(n)}}}(jQuery,DevExpress),function(n,t,i){var a=t.Class,u=t.data,c=u.queryImpl,f=u.utils.compileGetter,r=u.utils.toComparable,e=a.inherit({toArray:function(){var n=[];for(this.reset();this.next();)n.push(this.current());return n},countable:function(){return!1}}),o=e.inherit({ctor:function(n){this.array=n,this.index=-1},next:function(){return this.index+1<this.array.length?(this.index++,!0):!1},current:function(){return this.array[this.index]},reset:function(){this.index=-1},toArray:function(){return this.array.slice(0)},countable:function(){return!0},count:function(){return this.array.length}}),s=e.inherit({ctor:function(n){this.iter=n},next:function(){return this.iter.next()},current:function(){return this.iter.current()},reset:function(){return this.iter.reset()}}),h=e.inherit({ctor:function(n,t,i){this.iter=n,this.rules=[{getter:t,desc:i}]},thenBy:function(n,t){var i=new h(this.sortedIter||this.iter,n,t);return this.sortedIter||(i.rules=this.rules.concat(i.rules)),i},next:function(){return this._ensureSorted(),this.sortedIter.next()},current:function(){return this._ensureSorted(),this.sortedIter.current()},reset:function(){delete this.sortedIter},countable:function(){return this.sortedIter||this.iter.countable()},count:function(){return this.sortedIter?this.sortedIter.count():this.iter.count()},_ensureSorted:function(){this.sortedIter||(n.each(this.rules,function(){this.getter=f(this.getter)}),this.sortedIter=new o(this.iter.toArray().sort(n.proxy(this._compare,this))))},_compare:function(n,t){var i,s;if(n===t)return 0;for(i=0,s=this.rules.length;i<s;i++){var e=this.rules[i],u=r(e.getter(n)),o=r(e.getter(t)),f=e.desc?-1:1;if(u<o)return-f;if(u>o)return f;if(u!==o)return u?f:-f}return 0}}),l=function(){var e=function(t){var u=[],i=["return function(d) { return "],f=0,r=!1;return n.each(t,function(){n.isArray(this)||n.isFunction(this)?(r&&i.push(" && "),u.push(l(this)),i.push("op[",f,"](d)"),f++,r=!0):(i.push(/and|&/i.test(this)?" && ":" || "),r=!1)}),i.push(" }"),new Function("op",i.join(""))(u)},i=function(n){return t.utils.isDefined(n)?n.toString():""},o=function(n){n=u.utils.normalizeBinaryCriterion(n);var e=f(n[0]),o=n[1],t=n[2];t=r(t);switch(o.toLowerCase()){case"=":return function(n){return r(e(n))==t};case"<>":return function(n){return r(e(n))!=t};case">":return function(n){return r(e(n))>t};case"<":return function(n){return r(e(n))<t};case">=":return function(n){return r(e(n))>=t};case"<=":return function(n){return r(e(n))<=t};case"startswith":return function(n){return r(i(e(n))).indexOf(t)===0};case"endswith":return function(n){var u=r(i(e(n)));return u.lastIndexOf(t)===u.length-i(t).length};case"contains":return function(n){return r(i(e(n))).indexOf(t)>-1};case"notcontains":return function(n){return r(i(e(n))).indexOf(t)===-1}}throw Error("Unknown filter operation: "+o);};return function(t){return n.isFunction(t)?t:n.isArray(t[0])?e(t):o(t)}}(),v=s.inherit({ctor:function(n,t){this.callBase(n),this.criteria=l(t)},next:function(){while(this.iter.next())if(this.criteria(this.current()))return!0;return!1}}),y=e.inherit({ctor:function(n,t){this.iter=n,this.getter=t},next:function(){return this._ensureGrouped(),this.groupedIter.next()},current:function(){return this._ensureGrouped(),this.groupedIter.current()},reset:function(){delete this.groupedIter},countable:function(){return!!this.groupedIter},count:function(){return this.groupedIter.count()},_ensureGrouped:function(){var r,t;if(!this.groupedIter){var i={},e=[],u=this.iter,s=f(this.getter);for(u.reset();u.next();)r=u.current(),t=s(r),t in i?i[t].push(r):(i[t]=[r],e.push(t));this.groupedIter=new o(n.map(e,function(n){return{key:n,items:i[n]}}))}}}),p=s.inherit({ctor:function(n,t){this.callBase(n),this.getter=f(t)},current:function(){return this.getter(this.callBase())},countable:function(){return this.iter.countable()},count:function(){return this.iter.count()}}),w=s.inherit({ctor:function(n,t,i){this.callBase(n),this.skip=Math.max(0,t),this.take=Math.max(0,i),this.pos=0},next:function(){if(this.pos>=this.skip+this.take)return!1;while(this.pos<this.skip&&this.iter.next())this.pos++;return this.pos++,this.iter.next()},reset:function(){this.callBase(),this.pos=0},countable:function(){return this.iter.countable()},count:function(){return Math.min(this.iter.count()-this.skip,this.take)}});c.array=function(t,r){r=r||{},t instanceof e||(t=new o(t));var b=function(n){var t=r.errorHandler;t&&t(n),u._handleError(n)},s=function(r,u,f){var o=n.Deferred().fail(b),e;try{for(t.reset(),arguments.length<2&&(u=arguments[0],r=t.next()?t.current():i),e=r;t.next();)e=u(e,t.current());o.resolve(f?f(e):e)}catch(s){o.reject(s)}return o.promise()},k=function(i){return n.isFunction(i)||n.isArray(i)||(i=n.makeArray(arguments)),l(new p(t,i))},a=function(n){return k(f(n))},l=function(n){return c.array(n,r)};return{toArray:function(){return t.toArray()},enumerate:function(){var i=n.Deferred().fail(b);try{i.resolve(t.toArray())}catch(r){i.reject(r)}return i.promise()},sortBy:function(n,i){return l(new h(t,n,i))},thenBy:function(n,i){if(t instanceof h)return l(t.thenBy(n,i));throw Error();},filter:function(i){return n.isArray(i)||(i=n.makeArray(arguments)),l(new v(t,i))},slice:function(n,r){return r===i&&(r=Number.MAX_VALUE),l(new w(t,n,r))},select:k,groupBy:function(n){return l(new y(t,n))},aggregate:s,count:function(){if(t.countable()){var i=n.Deferred().fail(b);try{i.resolve(t.count())}catch(r){i.reject(r)}return i.promise()}return s(0,function(n){return 1+n})},sum:function(n){return n?a(n).sum():s(0,function(n,t){return n+t})},min:function(n){return n?a(n).min():s(function(n,t){return t<n?t:n})},max:function(n){return n?a(n).max():s(function(n,t){return t>n?t:n})},avg:function(n){if(n)return a(n).avg();var t=0;return s(0,function(n,i){return t++,n+i},function(n){return t?n/t:i})}}}}(jQuery,DevExpress),function(n,t){var r=t.data,u=r.queryImpl;u.remote=function(t,i,f){f=f||[],i=i||{};var o=function(n,t){return{name:n,args:t}},s=function(e){var o=n.Deferred(),h,c,s,l,a=function(n){var t=i.errorHandler;t&&t(n),r._handleError(n),o.reject(n)};try{for(h=i.adapter||"odata",n.isFunction(h)||(h=r.queryAdapters[h]),c=h(i),s=[].concat(f).concat(e);s.length;){if(l=s[0],String(l.name)!=="enumerate"&&(!c[l.name]||c[l.name].apply(c,l.args)===!1))break;s.shift()}c.exec(t).done(function(t,r){if(s.length){var f=u.array(t,{errorHandler:i.errorHandler});n.each(s,function(){f=f[this.name].apply(f,this.args)}),f.done(n.proxy(o.resolve,o)).fail(n.proxy(o.reject,o))}else o.resolve(t,r)}).fail(a)}catch(v){a(v)}return o.promise()},e={};return n.each(["sortBy","thenBy","filter","slice","select","groupBy"],function(){var n=this;e[n]=function(){return u.remote(t,i,f.concat(o(n,arguments)))}}),n.each(["count","min","max","sum","avg","aggregate","enumerate"],function(){var n=this;e[n]=function(){return s.call(this,o(n,arguments))}}),e}}(jQuery,DevExpress),function(n,t,i){var f=t.data,o=f.Guid,h="application/json;odata=verbose",l=function(t,i){var u;t=n.extend({method:"get",url:"",params:{},payload:null,headers:{}},t),i=i||{},u=i.beforeSend,u&&u(t);var o=(t.method||"get").toLowerCase(),r=o==="get",f=r&&i.jsonp,s=n.extend({},t.params),c=r?s:JSON.stringify(t.payload),l=!r&&n.param(s),e=t.url,a=!r&&h;return l&&(e+=(e.indexOf("?")>-1?"&":"?")+l),f&&(c.$format="json"),{url:e,data:c,dataType:f?"jsonp":"json",jsonp:f&&"$callback",type:o,timeout:3e4,headers:t.headers,contentType:a,accepts:{json:[h,"text/plain"].join()},xhrFields:{withCredentials:i.withCredentials}}},s=function(t,i){var r=n.Deferred();return n.ajax(l(t,i)).always(function(t,u){var f=y(t,u),e=f.error,o=f.data,h=f.nextUrl,c;e?r.reject(e):i.countOnly?r.resolve(f.count):h?s({url:h},i).fail(n.proxy(r.reject,r)).done(function(n){r.resolve(o.concat(n))}):(isFinite(f.count)&&(c={totalCount:f.count}),r.resolve(o,c))}),r.promise()},a=function(n){var t,i=n;for(("message"in n)&&(t=n.message.value?n.message.value:n.message);i=i.innererror||i.internalexception;)if(t=i.message,i.internalexception&&t.indexOf("inner exception")===-1)break;return t},v=function(t,i){var o;if(i==="nocontent")return null;var r=200,u="Unknown error",e=t;if(i!=="success"){r=t.status,u=f.utils.errorMessageFromXhr(t,i);try{e=n.parseJSON(t.responseText)}catch(s){}}return(o=e&&e.error,o)?(u=a(o)||u,r===200&&(r=500),e.error.code&&(r=Number(e.error.code)),n.extend(Error(u),{httpStatus:r,errorDetails:o})):r!==200?n.extend(Error(u),{httpStatus:r}):void 0},y=function(t,i){var u=v(t,i),r;return u?{error:u}:n.isPlainObject(t)?(r=t.d,!r)?{error:Error("Malformed or unsupported JSON response received")}:(r=r.results||r,c(r),{data:r,nextUrl:t.d.__next,count:t.d.__count}):{data:t}},u=t.Class.inherit({ctor:function(n){this._value=n},valueOf:function(){return this._value}}),p=function(){var n=function(n){return n=String(n),n.length<2&&(n="0"+n),n};return function(t){var i=["datetime'",t.getUTCFullYear(),"-",n(t.getUTCMonth()+1),"-",n(t.getUTCDate())];return(t.getUTCHours()||t.getUTCMinutes()||t.getUTCSeconds()||t.getUTCMilliseconds())&&(i.push("T",n(t.getUTCHours()),":",n(t.getUTCMinutes()),":",n(t.getUTCSeconds())),t.getUTCMilliseconds()&&i.push(".",t.getUTCMilliseconds())),i.push("'"),i.join("")}}(),r=function(n){return n instanceof u?n.valueOf():n.replace(/\./g,"/")},e=function(n){return n instanceof Date?p(n):n instanceof o?"guid'"+n+"'":n instanceof u?n.valueOf():typeof n=="string"?"'"+n.replace(/'/g,"''")+"'":String(n)},w=function(t){if(n.isPlainObject(t)){var i=[];return n.each(t,function(n,t){i.push(r(n)+"="+e(t))}),i.join()}return e(t)},c=function(t){n.each(t,function(n,i){if(i!==null&&typeof i=="object")c(i);else if(typeof i=="string"){var r=i.match(/^\/Date\((-?\d+)((\+|-)?(\d+)?)\)\/$/);r&&(t[n]=new Date(Number(r[1])+r[2]*6e4))}})},b={String:function(n){return n+""},Int32:function(n){return~~n},Int64:function(n){return n instanceof u?n:new u(n+"L")},Guid:function(n){return n instanceof o?n:new o(n)}},k=function(){var t=function(n){return function(t,i,r){r.push(t," ",n," ",i)}},i=function(n,t){return function(i,r,u){t?u.push(n,"(",r,",",i,")"):u.push(n,"(",i,",",r,")")}},o={"=":t("eq"),"<>":t("ne"),">":t("gt"),">=":t("ge"),"<":t("lt"),"<=":t("le"),startswith:i("startswith"),endswith:i("endswith"),contains:i("substringof",!0),notcontains:i("not substringof",!0)},s=function(n,t){n=f.utils.normalizeBinaryCriterion(n);var i=n[1],u=o[i.toLowerCase()];if(!u)throw Error("Unknown filter operation: "+i);u(r(n[0]),e(n[2]),t)},h=function(t,i){var r=!1;n.each(t,function(){n.isArray(this)?(r&&i.push(" and "),i.push("("),u(this,i),i.push(")"),r=!0):(i.push(/and|&/i.test(this)?" and ":" or "),r=!1)})},u=function(t,i){n.isArray(t[0])?h(t,i):s(t,i)};return function(n){var t=[];return u(n,t),t.join("")}}(),d=function(t){var o=[],u=[],f,h,c,e,l=function(){return h||c!==i},a=function(n,t,i){if(l()||typeof n!="string")return!1;i&&(o=[]);var u=r(n);t&&(u+=" desc"),o.push(u)},v=function(){var u={};return t.expand&&n.each(n.makeArray(t.expand),function(){u[r(this)]=1}),f&&n.each(f,function(){var n=this.split(".");n.length<2||(n.pop(),u[r(n.join("."))]=1)}),n.map(u,function(n,t){return t}).join()||i},y=function(){var n={};return e||(o.length&&(n.$orderby=o.join(",")),h&&(n.$skip=h),c!==i&&(n.$top=c),f&&(n.$select=r(f.join())),n.$expand=v()),u.length&&(n.$filter=k(u.length<2?u[0]:u)),e&&(n.$top=0),(t.requireTotalCount||e)&&(n.$inlinecount="allpages"),n};return{exec:function(i){return s({url:i,params:n.extend(y(),t&&t.params)},{beforeSend:t.beforeSend,jsonp:t.jsonp,withCredentials:t.withCredentials,countOnly:e})},sortBy:function(n,t){return a(n,t,!0)},thenBy:function(n,t){return a(n,t,!1)},slice:function(n,t){if(l())return!1;h=n,c=t},filter:function(t){if(l()||n.isFunction(t))return!1;n.isArray(t)||(t=n.makeArray(arguments)),u.length&&u.push("and"),u.push(t)},select:function(t){if(f||n.isFunction(t))return!1;n.isArray(t)||(t=n.makeArray(arguments)),f=t},count:function(){e=!0}}};n.extend(!0,f,{EdmLiteral:u,utils:{odata:{sendRequest:s,serializePropName:r,serializeValue:e,serializeKey:w,keyConverters:b}},queryAdapters:{odata:d}})}(jQuery,DevExpress),function(n,t){function e(t,i){return t=t.groupBy(i[0].selector),i.length>1&&(t=t.select(function(t){return n.extend({},t,{items:e(u.query(t.items),i.slice(1)).toArray()})})),t}var o=t.Class,r=t.abstract,u=t.data,f=u.utils.normalizeSortingInfo,s=["loading","loaded","modifying","modified","inserting","inserted","updating","updated","removing","removed"];u.Store=o.inherit({ctor:function(t){var i=this;t=t||{},n.each(s,function(){var r=i[this]=n.Callbacks();this in t&&r.add(t[this])}),this._key=t.key,this._errorHandler=t.errorHandler,this._useDefaultSearch=!0},_customLoadOptions:function(){return null},key:function(){return this._key},keyOf:function(n){return this._keyGetter||(this._keyGetter=u.utils.compileGetter(this.key())),this._keyGetter(n)},_requireKey:function(){if(!this.key())throw Error("Key expression is required for this operation");},load:function(n){var t=this;return n=n||{},this.loading.fire(n),this._loadImpl(n).done(function(n,i){t.loaded.fire(n,i)})},_loadImpl:function(t){var o=t.filter,u=t.sort,s=t.select,r=t.group,h=t.skip,c=t.take,i=this.createQuery(t);return o&&(i=i.filter(o)),r&&(r=f(r)),(u||r)&&(u=f(u||[]),r&&(u=r.concat(u)),n.each(u,function(n){i=i[n?"thenBy":"sortBy"](this.selector,this.desc)})),s&&(i=i.select(s)),r&&(i=e(i,r)),(c||h)&&(i=i.slice(h||0,c)),i.enumerate()},createQuery:r,totalCount:function(n){return this._addFailHandlers(this._totalCountImpl(n))},_totalCountImpl:function(n){n=n||{};var t=this.createQuery(),i=n.group,r=n.filter;return r&&(t=t.filter(r)),i&&(i=f(i),t=e(t,i)),t.count()},byKey:function(n,t){return this._addFailHandlers(this._byKeyImpl(n,t))},_byKeyImpl:r,insert:function(n){var t=this;return t.modifying.fire(),t.inserting.fire(n),t._addFailHandlers(t._insertImpl(n).done(function(n,i){t.inserted.fire(n,i),t.modified.fire()}))},_insertImpl:r,update:function(n,t){var i=this;return i.modifying.fire(),i.updating.fire(n,t),i._addFailHandlers(i._updateImpl(n,t).done(function(n,t){i.updated.fire(n,t),i.modified.fire()}))},_updateImpl:r,remove:function(n){var t=this;return t.modifying.fire(),t.removing.fire(n),t._addFailHandlers(t._removeImpl(n).done(function(n){t.removed.fire(n),t.modified.fire()}))},_removeImpl:r,_addFailHandlers:function(n){return n.fail(this._errorHandler,u._handleError)}})}(jQuery,DevExpress),function(n,t,i){var r=t.data,e=r.Guid,u=function(){var i=n.Deferred();return i.resolve.apply(i,arguments).promise()},f=function(){var i=n.Deferred();return i.reject.apply(i,arguments).promise()};r.ArrayStore=r.Store.inherit({ctor:function(t){t=n.isArray(t)?{data:t}:t||{},this.callBase(t),this._array=t.data||[]},createQuery:function(){return r.query(this._array,{errorHandler:this._errorHandler})},_byKeyImpl:function(n){return u(this._array[this._indexByKey(n)])},_insertImpl:function(t){var s=this.key(),r,o={};if(n.extend(o,t),s){if(r=this.keyOf(o),r===i||typeof r=="object"&&n.isEmptyObject(r)){if(n.isArray(s))throw Error("Compound keys cannot be auto-generated");r=o[s]=String(new e)}else if(this._array[this._indexByKey(r)]!==i)return f(Error("Attempt to insert an item with the duplicate key"))}else r=o;return this._array.push(o),u(t,r)},_updateImpl:function(n,i){var r,e;if(this.key()){if(e=this._indexByKey(n),e<0)return f(Error("Data item not found"));r=this._array[e]}else r=n;return t.utils.deepExtendArraySafe(r,i),u(n,i)},_removeImpl:function(n){var t=this._indexByKey(n);return t>-1&&this._array.splice(t,1),u(n)},_indexByKey:function(n){for(var t=0,i=this._array.length;t<i;t++)if(r.utils.keysEqual(this.key(),this.keyOf(this._array[t]),n))return t;return-1}})}(jQuery,DevExpress),function(n,t){var f=t.Class,r=t.abstract,u=t.data,e=f.inherit({ctor:function(t,i){var u,f,r;if(this._store=t,this._dirty=!1,u=this._immediate=i.immediate,f=Math.max(100,i.flushInterval||1e4),!u){r=n.proxy(this.save,this),setInterval(r,f);n(window).on("beforeunload",r);window.cordova&&document.addEventListener("pause",r,!1)}},notifyChanged:function(){this._dirty=!0,this._immediate&&this.save()},load:function(){this._store._array=this._loadImpl(),this._dirty=!1},save:function(){this._dirty&&(this._saveImpl(this._store._array),this._dirty=!1)},_loadImpl:r,_saveImpl:r}),o=e.inherit({ctor:function(n,t){this.callBase(n,t);var i=t.name;if(!i)throw Error("Name is required");this._key="dx-data-localStore-"+i},_loadImpl:function(){var n=localStorage.getItem(this._key);return n?JSON.parse(n):[]},_saveImpl:function(n){n.length?localStorage.setItem(this._key,JSON.stringify(n)):localStorage.removeItem(this._key)}}),s={dom:o};u.LocalStore=u.ArrayStore.inherit({ctor:function(n){n=typeof n=="string"?{name:n}:n||{},this.callBase(n),this._backend=new s[n.backend||"dom"](this,n),this._backend.load()},clear:function(){this._array=[],this._backend.notifyChanged()},_insertImpl:function(t){var i=this._backend;return this.callBase(t).done(n.proxy(i.notifyChanged,i))},_updateImpl:function(t,i){var r=this._backend;return this.callBase(t,i).done(n.proxy(r.notifyChanged,r))},_removeImpl:function(t){var i=this._backend;return this.callBase(t).done(n.proxy(i.notifyChanged,i))}})}(jQuery,DevExpress),function(n,t){var h=t.Class,r=t.data,u=r.utils.odata,f=function(t){if(!t)return t;var i={};return n.each(t,function(n,t){i[n]=u.serializeValue(t)}),i},e=function(n,t){var i=u.keyConverters[n];if(!i)throw Error("Unknown key type: "+n);return i(t)},o={_extractServiceOptions:function(n){n=n||{},this._url=String(n.url).replace(/\/+$/,""),this._beforeSend=n.beforeSend,this._jsonp=n.jsonp,this._withCredentials=n.withCredentials},_sendRequest:function(n,t,i,r){return u.sendRequest({url:n,method:t,params:i||{},payload:r},{beforeSend:this._beforeSend,jsonp:this._jsonp,withCredentials:this._withCredentials})}},s=r.Store.inherit({ctor:function(n){this.callBase(n),this._extractServiceOptions(n),this._keyType=n.keyType},_customLoadOptions:function(){return["expand","customQueryParams"]},_byKeyImpl:function(t,i){var r={};return i&&i.expand&&(r.$expand=n.map(n.makeArray(i.expand),u.serializePropName).join()),this._sendRequest(this._byKeyUrl(t),"GET",r)},createQuery:function(n){return n=n||{},r.query(this._url,{beforeSend:this._beforeSend,errorHandler:this._errorHandler,jsonp:this._jsonp,withCredentials:this._withCredentials,params:f(n.customQueryParams),expand:n.expand,requireTotalCount:n.requireTotalCount})},_insertImpl:function(t){this._requireKey();var r=this,i=n.Deferred();return n.when(this._sendRequest(this._url,"POST",null,t)).done(function(n){i.resolve(t,r.keyOf(n))}).fail(n.proxy(i.reject,i)),i.promise()},_updateImpl:function(t,i){var r=n.Deferred();return n.when(this._sendRequest(this._byKeyUrl(t),"MERGE",null,i)).done(function(){r.resolve(t,i)}).fail(n.proxy(r.reject,r)),r.promise()},_removeImpl:function(t){var i=n.Deferred();return n.when(this._sendRequest(this._byKeyUrl(t),"DELETE")).done(function(){i.resolve(t)}).fail(n.proxy(i.reject,i)),i.promise()},_byKeyUrl:function(t){var i=this._keyType;return n.isPlainObject(i)?n.each(i,function(n,i){t[n]=e(i,t[n])}):i&&(t=e(i,t)),this._url+"("+encodeURIComponent(u.serializeKey(t))+")"}}).include(o),c=h.inherit({ctor:function(t){var i=this;i._extractServiceOptions(t),i._errorHandler=t.errorHandler,n.each(t.entities||[],function(r,u){i[r]=new s(n.extend({},t,{url:i._url+"/"+encodeURIComponent(u.name||r)},u))})},get:function(n,t){return this.invoke(n,t,"GET")},invoke:function(t,i,u){u=u||"POST";var e=n.Deferred();return n.when(this._sendRequest(this._url+"/"+encodeURIComponent(t),u,f(i))).done(function(n){n&&t in n&&(n=n[t]),e.resolve(n)}).fail([this._errorHandler,r._handleError,n.proxy(e.reject,e)]),e.promise()},objectLink:function(n,t){var i=this[n];if(!i)throw Error("Unknown entity name or alias: "+n);return{__metadata:{uri:i._byKeyUrl(t)}}}}).include(o);n.extend(r,{ODataStore:s,ODataContext:c})}(jQuery,DevExpress),function(n,t){function r(n){return function(t,i){t&&t.getResponseHeader?n.reject(Error(u.utils.errorMessageFromXhr(t,i))):n.reject.apply(n,arguments)}}function f(n){return"_customize"+t.inflector.camelize(n,!0)}function e(n){return"_"+n+"Path"}var u=t.data;u.RestStore=u.Store.inherit({ctor:function(t){var i=this;i.callBase(t),t=t||{},i._url=String(t.url).replace(/\/+$/,""),i._jsonp=t.jsonp,i._withCredentials=t.withCredentials,n.each(["Load","Insert","Update","Remove","ByKey","Operation"],function(){var n=t["customize"+this];n&&(i[f(this)]=n)}),n.each(["load","insert","update","remove","byKey"],function(){var n=t[this+"Path"];n&&(i[e(this)]=n)})},_loadImpl:function(t){var i=n.Deferred(),u={url:this._formatUrlNoKey("load"),type:"GET"};return n.when(this._createAjax(u,"load",t)).done(n.proxy(i.resolve,i)).fail(r(i)),this._addFailHandlers(i.promise())},createQuery:function(){throw Error("Not supported");},_insertImpl:function(t){var i=n.Deferred(),u=this,f={url:this._formatUrlNoKey("insert"),type:"POST",contentType:"application/json",data:JSON.stringify(t)};return n.when(this._createAjax(f,"insert")).done(function(n){i.resolve(t,u.key()&&u.keyOf(n))}).fail(r(i)),i.promise()},_updateImpl:function(t,i){var u=n.Deferred(),f={url:this._formatUrlWithKey("update",t),type:"PUT",contentType:"application/json",data:JSON.stringify(i)};return n.when(this._createAjax(f,"update")).done(function(){u.resolve(t,i)}).fail(r(u)),u.promise()},_removeImpl:function(t){var i=n.Deferred(),u={url:this._formatUrlWithKey("remove",t),type:"DELETE"};return n.when(this._createAjax(u,"remove")).done(function(){i.resolve(t)}).fail(r(i)),i.promise()},_byKeyImpl:function(t){var i=n.Deferred(),u={url:this._formatUrlWithKey("byKey",t),type:"GET"};return n.when(this._createAjax(u,"byKey")).done(function(n){i.resolve(n)}).fail(r(i)),i.promise()},_createAjax:function(t,i,r){function o(n){return"done"in n&&"fail"in n}var e,u;if(this._jsonp&&t.type==="GET"?t.dataType="jsonp":n.extend(!0,t,{xhrFields:{withCredentials:this._withCredentials}}),e=this[f("operation")],e&&(u=e(t,i,r),u)){if(o(u))return u;t=u}if(e=this[f(i)],e&&(u=e(t,r),u)){if(o(u))return u;t=u}return n.ajax(t)},_formatUrlNoKey:function(t){var r=this._url,i=this[e(t)];return i?n.isFunction(i)?i(r):r+"/"+i:r},_formatUrlWithKey:function(t,i){var u=this._url,r=this[e(t)];return r?n.isFunction(r)?r(u,i):u+"/"+r+"/"+encodeURIComponent(i):u+"/"+encodeURIComponent(i)}})}(jQuery,DevExpress),function(n,t,i){function u(t){return t&&n.isFunction(t.done)&&n.isFunction(t.fail)&&n.isFunction(t.promise)}function r(t){return n.Deferred().resolve(t).promise()}function f(t,i){if(!n.isFunction(i))throw Error(w+t);}function y(n){throw Error(b+n);}function e(n){function t(n){var t=n[0],i=n[1];return!t||!t.getResponseHeader?null:o.utils.errorMessageFromXhr(t,i)}return function(i){var r;r=i instanceof Error?i:Error(t(arguments)||i&&String(i)||"Unknown error"),n.reject(r)}}var o=t.data,p="CustomStore does not support creating queries",w="Required option is not specified or is not a function: ",b="Invalid return value: ",s="totalCount",h="load",c="byKey",l="insert",a="update",v="remove";o.CustomStore=o.Store.inherit({ctor:function(n){n=n||{},this.callBase(n),this._useDefaultSearch=!1,this._loadFunc=n[h],this._totalCountFunc=n[s],this._byKeyFunc=n[c]||n.lookup,this._insertFunc=n[l],this._updateFunc=n[a],this._removeFunc=n[v]},createQuery:function(){throw Error(p);},_totalCountImpl:function(t){var h=this._totalCountFunc,i,o=n.Deferred();return f(s,h),i=h(t),u(i)||(i=Number(i),isFinite(i)||y(s),i=r(i)),i.done(function(n){o.resolve(Number(n))}).fail(e(o)),o.promise()},_loadImpl:function(t){var c=this._loadFunc,o,s=n.Deferred();return f(h,c),o=c(t),n.isArray(o)?o=r(o):o===null||o===i?o=r([]):u(o)||y(h),o.done(function(n,t){s.resolve(n,t)}).fail(e(s)),this._addFailHandlers(s.promise())},_byKeyImpl:function(t){var s=this._byKeyFunc,i,o=n.Deferred();return f(c,s),i=s(t),u(i)||(i=r(i)),i.done(function(n){o.resolve(n)}).fail(e(o)),o.promise()},_insertImpl:function(t){var s=this._insertFunc,i,o=n.Deferred();return f(l,s),i=s(t),u(i)||(i=r(i)),i.done(function(n){o.resolve(t,n)}).fail(e(o)),o.promise()},_updateImpl:function(t,i){var h=this._updateFunc,o,s=n.Deferred();return f(a,h),o=h(t,i),u(o)||(o=r()),o.done(function(){s.resolve(t,i)}).fail(e(s)),s.promise()},_removeImpl:function(t){var s=this._removeFunc,i,o=n.Deferred();return f(v,s),i=s(t),u(i)||(i=r()),i.done(function(){o.resolve(t)}).fail(e(o)),o.promise()}})}(jQuery,DevExpress),function(n,t,i){function s(t){function f(){var i={};return n.each(["load","byKey","lookup","totalCount","insert","update","remove"],function(){i[this]=t[this],delete t[this]}),new e(i)}function s(n){var t=r[o[n.type]];return delete n.type,new t(n)}function h(t){return new e({load:function(){return n.getJSON(t)}})}var u;return typeof t=="string"&&(t=h(t)),t===i&&(t=[]),t=n.isArray(t)||t instanceof r.Store?{store:t}:n.extend({},t),u=t.store,"load"in t?u=f():n.isArray(u)?u=new r.ArrayStore(u):n.isPlainObject(u)&&(u=s(n.extend({},u))),t.store=u,t}function h(t){switch(t.length){case 0:return i;case 1:return t[0]}return n.makeArray(t)}function u(n){return function(){var t=h(arguments);return t!==i&&(this._storeLoadOptions[n]=t),this._storeLoadOptions[n]}}function l(n,t){t.refresh=!n._paginate||n._pageIndex===0,t.searchValue!==null&&(t.searchString=t.searchValue)}var r=t.data,e=r.CustomStore,c=t.Class,o={jaydata:"JayDataStore",breeze:"BreezeStore",odata:"ODataStore",local:"LocalStore",array:"ArrayStore"},f=c.inherit({ctor:function(t){t=s(t),this._store=t.store,this._storeLoadOptions=this._extractLoadOptions(t),this._mapFunc=t.map,this._postProcessFunc=t.postProcess,this._pageIndex=0,this._pageSize=t.pageSize!==i?t.pageSize:20,this._items=[],this._totalCount=-1,this._isLoaded=!1,this._loadingCount=0,this._preferSync=t._preferSync,this._loadQueue=this._createLoadQueue(),this._searchValue="searchValue"in t?t.searchValue:null,this._searchOperation=t.searchOperation||"contains",this._searchExpr=t.searchExpr,this._paginate=t.paginate,this._paginate===i&&(this._paginate=!this.group()),this._isLastPage=!this._paginate,this._userData={},this.changed=n.Callbacks(),this.loadError=n.Callbacks(),this.loadingChanged=n.Callbacks()},dispose:function(){this.changed.empty(),this.loadError.empty(),this.loadingChanged.empty(),delete this._store,this._disposed=!0},_extractLoadOptions:function(t){var r={},i=["sort","filter","select","group","requireTotalCount"],u=this._store._customLoadOptions();return u&&(i=i.concat(u)),n.each(i,function(){r[this]=t[this]}),r},loadOptions:function(){return this._storeLoadOptions},items:function(){return this._items},pageIndex:function(n){return n!==i&&(this._pageIndex=n,this._isLastPage=!this._paginate),this._pageIndex},isLastPage:function(){return this._isLastPage},sort:u("sort"),filter:function(){var n=h(arguments);return n!==i&&(this._storeLoadOptions.filter=n,this.pageIndex(0)),this._storeLoadOptions.filter},group:u("group"),select:u("select"),searchValue:function(n){return n!==i&&(this._searchValue=n),this._searchValue},searchOperation:function(n){return n!==i&&(this._searchOperation=n),this._searchOperation},searchExpr:function(t){var i=arguments.length;return i&&(i>1&&(t=n.makeArray(arguments)),this._searchExpr=t),this._searchExpr},store:function(){return this._store},key:function(){return this._store&&this._store.key()},totalCount:function(){return this._totalCount},isLoaded:function(){return this._isLoaded},isLoading:function(){return this._loadingCount>0},_createLoadQueue:function(){return t.createQueue()},_changeLoadingCount:function(n){var i=this.isLoading(),t;this._loadingCount+=n,t=this.isLoading(),i^t&&this.loadingChanged.fire(t)},_scheduleLoadCallbacks:function(n){var t=this;t._changeLoadingCount(1),n.always(function(){t._changeLoadingCount(-1)})},_scheduleChangedCallbacks:function(n){var t=this;n.done(function(){t.changed.fire()})},load:function(){function e(){return r._disposed?i:r._loadFromStore(f,t)}var r=this,t=n.Deferred(),u=this.loadError,f;return this._scheduleLoadCallbacks(t),this._scheduleChangedCallbacks(t),f=this._createStoreLoadOptions(),this._loadQueue.add(function(){return e(),t.promise()},function(){r._changeLoadingCount(-1)}),t.promise().fail(n.proxy(u.fire,u))},_addSearchOptions:function(n){this._disposed||(this.store()._useDefaultSearch?this._addSearchFilter(n):(n.searchValue=this._searchValue,n.searchExpr=this._searchExpr))},_createStoreLoadOptions:function(){var t=n.extend({},this._storeLoadOptions);return this._addSearchOptions(t),this._paginate&&(t.pageIndex=this._pageIndex,this._pageSize&&(t.skip=this._pageIndex*this._pageSize,t.take=this._pageSize)),t.userData=this._userData,l(this,t),t},_addSearchFilter:function(t){var u=this._searchValue,f=this._searchOperation,i=this._searchExpr,r=[];u&&(i||(i="this"),n.isArray(i)||(i=[i]),n.each(i,function(n,t){r.length&&r.push("or"),r.push([t,f,u])}),t.filter=t.filter?[r,t.filter]:r)},_loadFromStore:function(i,r){function f(n,f){function e(){u._processStoreLoadResult(n,f,i,r)}u._preferSync?e():t.utils.executeAsync(e)}var u=this;return this.store().load(i).done(f).fail(n.proxy(r.reject,r))},_processStoreLoadResult:function(t,i,r,u){function e(){return f._isLoaded=!0,f._totalCount=isFinite(i.totalCount)?i.totalCount:-1,u.resolve(t,i)}function o(){f.store().totalCount(r).done(function(n){i.totalCount=n,e()}).fail(function(){})}var f=this;f._disposed||(t=f._transformLoadedData(t),n.isPlainObject(i)||(i={}),f._items=t,(!t.length||!f._paginate||f._pageSize&&t.length<f._pageSize)&&(f._isLastPage=!0),r.requireTotalCount&&!isFinite(i.totalCount)?o():e())},_transformLoadedData:function(t){var i=n.makeArray(t);return this._mapFunc&&(i=n.map(i,this._mapFunc)),this._postProcessFunc&&(i=this._postProcessFunc(i)),i}});r.Store.redefine({toDataSource:function(t){return new f(n.extend({store:this},t))}}),n.extend(!0,r,{DataSource:f,createDataSource:function(n){return new f(n)},utils:{storeTypeRegistry:o,normalizeDataSourceOptions:s}})}(jQuery,DevExpress),DevExpress.social={},function(n,t,i){function o(){}var ft=t.social,r=window.location,et=window.navigator,w=window.encodeURIComponent,ot=window.decodeURIComponent,s=et.standalone,h=!1,p;if(window.cordova)n(document).on("deviceready",function(){h=!0});var b="dx-facebook-access-token",c="dx-facebook-step1",l="dx-facebook-step2",u=null,k=null,d=n.Callbacks(),f,g=function(){return!!u},st=function(){return{accessToken:u,expiresIn:u?k:0}},a=ft.Facebook={loginRedirectUrl:"FacebookLoginCallback.html",connectionChanged:d,isConnected:g,getAccessTokenObject:st,jsonp:!1},ht=function(n,t){o(),t=t||{},f=h?"https://www.facebook.com/connect/login_success.html":ct();var u=(t.permissions||[]).join(),i="https://www.facebook.com/dialog/oauth?display=popup&client_id="+n+"&redirect_uri="+w(f)+"&scope="+w(u)+"&response_type=token";s&&e(c,r.href),h?at(i):lt(i)},ct=function(){var n=r.pathname.split(/\//g);return n.pop(),n.push(a.loginRedirectUrl),r.protocol+"//"+r.host+n.join("/")},lt=function(n){var t=512,i=320,r=(screen.width-t)/2,u=(screen.height-i)/2;window.open(n,null,"width="+t+",height="+i+",toolbar=0,scrollbars=0,status=0,resizable=0,menuBar=0,left="+r+",top="+u)},at=function(n){var t=window.open(n,"_blank");t.addEventListener("exit",function(){f=null}),t.addEventListener("loadstop",function(n){var i=unescape(n.url);i.indexOf(f)===0&&(t.close(),v(i))})},vt=function(){var n=window.opener;s?(e(l,r.href),r.href=y(c)):n&&n.DevExpress&&(n.DevExpress.social.Facebook._processLoginRedirectUrl(r.href),window.close())},v=function(n){var t=yt(n);k=t.expires_in,nt(t.access_token),f=null},yt=function(t){var r=t.split("#")[1],u,i;return r?(u=r.split(/&/g),i={},n.each(u,function(){var t=this.split("=");i[t[0]]=ot(t[1])}),i):{}},pt=function(){o(),nt(null)},nt=function(n){n!==u&&(u=n,e(b,n),d.fire(!!n))},tt=function(t,r,f){if(o(),!g())throw Error("Not connected");typeof r!="string"&&(f=r,r=i),r=(r||"get").toLowerCase();var e=n.Deferred(),s=arguments;return n.ajax({url:"https://graph.facebook.com/"+t,type:r,data:n.extend({access_token:u},f),dataType:a.jsonp&&r==="get"?"jsonp":"json"}).done(function(n){n=n||it(),n.error?e.reject(n.error):e.resolve(n)}).fail(function(i){var u,o;try{if(u=n.parseJSON(i.responseText),o=s[3]||0,o++<3&&u.error.code==190&&u.error.error_subcode==466){setTimeout(function(){tt(t,r,f,o).done(function(n){e.resolve(n)}).fail(function(n){e.reject(n)})},500);return}}catch(h){u=it()}e.reject(u.error)}),e.promise()},it=function(){return{error:{message:"Unknown error"}}},rt=function(){if(!ut())throw Error("HTML5 sessionStorage or jQuery.cookie plugin is required");},ut=function(){return!!(n.cookie||window.sessionStorage)},e=function(t,i){rt(),i=JSON.stringify(i),window.sessionStorage?i===null?sess.removeItem(t):sessionStorage.setItem(t,i):n.cookie(t,i)},y=function(t){rt();try{return JSON.parse(window.sessionStorage?sessionStorage.getItem(t):n.cookie(t))}catch(i){return null}};ut()&&(u=y(b)),s&&(p=y(l),p&&(v(p),e(c,null),e(l,null))),n.extend(a,{login:ht,logout:pt,handleLoginRedirect:vt,_processLoginRedirectUrl:v,api:tt})}(jQuery,DevExpress),function(n,t){var u=t.ui={},f="20px",e=function(i){var r,u,e,c,h;i=n.extend({},i);var l=t.devices.current(),o=i.allowZoom,s=i.allowPan,a="allowSelection"in i?i.allowSelection:l.platform=="desktop";if(t.overlayTargetContainer(".dx-viewport"),r="meta[name=viewport]",n(r).length||n("<meta />").attr("name","viewport").appendTo("head"),u=["width=device-width"],e=[],o?e.push("pinch-zoom"):u.push("initial-scale=1.0","maximum-scale=1.0, user-scalable=no"),s&&e.push("pan-x","pan-y"),s||o?n("html").css("-ms-overflow-style","-ms-autohiding-scrollbar"):n("html, body").css("overflow","hidden"),!a){if(t.devices.real.ios)n(document).on("selectstart",function(){return!1});n(".dx-viewport").css("user-select","none")}if(n(r).attr("content",u.join()),n("html").css("-ms-touch-action",e.join(" ")||"none"),t.support.touch)n(document).off(".dxInitViewport").on("touchmove.dxInitViewport",function(n){var t=n.originalEvent.touches.length,i=!o&&t>1,r=!s&&t===1&&!n.isScrollingEvent;(i||r)&&n.preventDefault()});if(navigator.userAgent.match(/IEMobile\/10\.0/)&&(n(document.head).append(n("<style/>").text("@-ms-viewport{ width: auto!important; user-zoom: fixed; max-zoom: 1; min-zoom: 1; }")),n(window).bind("load resize",function(){var r=44,u=21,f=72,i="Notify"in window.external,e=i?r:0,o=i?u:f,s=n(window).width()<n(window).height()?Math.round(screen.availHeight*(document.body.clientWidth/screen.availWidth))-o:Math.round(screen.availWidth*(document.body.clientHeight/screen.availHeight))-e;document.body.style.setProperty("min-height",s+"px","important")})),t.devices.real.ios&&t.devices.real.version[0]>6&&(c=document.location.protocol=="file:",c)){n(".dx-viewport").css("position","relative"),n("body").css({"box-sizing":"border-box","padding-top":f}),h=function(){var t="height=device-"+(Math.abs(window.orientation)===90?"width":"height");n(r).attr("content",u.join()+","+t)};n(window).on("orientationchange",h);h()}},o=t.Class.inherit({getTemplateClass:function(){return r},supportDefaultTemplate:function(){return!1},getDefaultTemplate:function(){return null}}),r=t.Class.inherit({ctor:function(t){this._template=this._element=n(t).detach()},render:function(n){var t=this._template.clone();return n.append(t),t},dispose:n.noop});t.registerActionExecutor({designMode:{validate:function(n){t.designMode&&(n.canceled=!0)}},gesture:{validate:function(n){if(n.args.length)for(var i=n.args[0],t=i.itemElement||i.element;t&&t.length;){if(t.data("dxGesture")){n.canceled=!0;break}t=t.parent()}}},disabled:{validate:function(n){if(n.args.length){var t=n.args[0],i=t.itemElement||t.element;i&&i.is(".dx-state-disabled, .dx-state-disabled *")&&(n.canceled=!0)}}}}),n.extend(u,{TemplateProvider:o,Template:r,initViewport:e})}(jQuery,DevExpress),function(n,t){var c=t.ui,l=n.event,a=l.special,v={mouse:/^mouse/i,touch:/^touch/i,keyboard:/^key/i,pointer:/pointer/i},u=function(t){var i="other";return n.each(v,function(n){if(this.test(t.type))return i=n,!1}),i},f=function(n){return u(n)==="pointer"},e=function(n){return u(n)==="mouse"||f(n)&&n.pointerType==="mouse"},r=function(n){return u(n)==="touch"||f(n)&&n.pointerType==="touch"},o=function(n){return u(n)==="keyboard"},s=function(t,i){return typeof t=="string"?s(t.split(/\s+/g),i):(n.each(t,function(n,r){t[n]=r+"."+i}),t.join(" "))},y=function(n){var t;return f(n)&&r(n)?(t=(n.originalEvent.originalEvent||n.originalEvent).changedTouches[0],{x:t.pageX,y:t.pageY,time:n.timeStamp}):e(n)?{x:n.pageX,y:n.pageY,time:n.timeStamp}:r(n)?(t=(n.changedTouches||n.originalEvent.changedTouches)[0],{x:t.pageX,y:t.pageY,time:n.timeStamp}):void 0},p=function(n,t){return{x:t.x-n.x,y:t.y-n.y,time:t.time-n.time||1}},w=function(n){return e(n)||f(n)?0:r(n)?n.originalEvent.touches.length:void 0},b=function(t){return e(t)?n(t.target).is("input, textarea, select")||t.which>1:r(t)?(t.originalEvent.changedTouches||t.originalEvent.originalEvent.changedTouches).length!==1:void 0},h=function(t,i){var u=n.Event(t,i),s=u.originalEvent,f=n.event.props.slice();return(e(t)||r(t))&&n.merge(f,n.event.mouseHooks.props),o(t)&&n.merge(f,n.event.keyHooks.props),s&&n.each(f,function(){u[this]=s[this]}),u},k=function(t){var i=h(t.originalEvent,t);return n.event.trigger(i,null,t.target||i.target),i},d=function(t,i){var r=n(t.target).data("dxGestureEvent");return!r||r===i?(n(t.target).data("dxGestureEvent",i),!0):!1},g=function(n,t){a[n]=t};c.events={eventSource:u,isPointerEvent:f,isMouseEvent:e,isTouchEvent:r,isKeyboardEvent:o,addNamespace:s,hasTouches:w,eventData:y,eventDelta:p,needSkipEvent:b,createEvent:h,fireEvent:k,handleGestureEvent:d,registerEvent:g}}(jQuery,DevExpress),function(n,t,i){var u="dxComponents",f=t.ui,r=t.data.utils,e=t.Class.inherit({NAME:null,_defaultOptions:function(){return{disabled:!1}},_optionsByReference:function(){return{}},ctor:function(i,r){this._$element=n(i),this._element().data(this.NAME,this),this._element().data(u)||this._element().data(u,[]),this._element().data(u).push(this.NAME),this._options={},this._updateLockCount=0,this._requireRefresh=!1,this.optionChanged=n.Callbacks(),this.disposing=n.Callbacks(),this.beginUpdate();try{var e=t.devices.current(),o=f.optionsByDevice(e,this.NAME)||{};this.option(this._defaultOptions()),this.option(o),this._initOptions(r||{})}finally{this.endUpdate()}},_initOptions:function(n){this.option(n)},_optionValuesEqual:function(n,t,i){return(t=r.toComparable(t,!0),i=r.toComparable(i,!0),t===null||typeof t!="object")?t===i:!1},_init:n.noop,_render:n.noop,_clean:n.noop,_modelByElement:n.noop,_invalidate:function(){this._requireRefresh=!0},_refresh:function(){this._clean(),this._render()},_dispose:function(){this._clean(),this.optionChanged.empty(),this.disposing.fireWith(this).empty()},_createAction:function(i,r){var u=this,f,e,o;return r=n.extend({},r),f=r.element||u._element(),e=u._modelByElement(f),r.context=e||u,r.component=u,o=new t.Action(i,r),function(t){return arguments.length||(t={}),n.isPlainObject(t)||(t={actionValue:t}),o.execute.call(o,n.extend(t,{component:u,element:f,model:e}))}},_createActionByOption:function(n,t){if(typeof n!="string")throw Error("Option name type is unexpected");return this._createAction(this.option(n),t)},_optionChanged:function(){},_element:function(){return this._$element},instance:function(){return this},beginUpdate:function(){this._updateLockCount++},endUpdate:function(){if(this._updateLockCount--,!this._updateLockCount)if(this._initializing||this._initialized)this._requireRefresh&&(this._requireRefresh=!1,this._refresh());else{this._initializing=!0;try{this._init()}finally{this._initializing=!1,this._initialized=!0}this._render()}},option:function(t){var i=this,u=t,f=arguments[1];if(arguments.length<2&&n.type(u)!=="object")return r.compileGetter(u)(i._options,{functionsAsIs:!0});typeof u=="string"&&(t={},t[u]=f),i.beginUpdate();try{n.each(t,function(n,t){var u=r.compileGetter(n)(i._options,{functionsAsIs:!0}),f;i._optionValuesEqual(n,u,t)||(r.compileSetter(n)(i._options,t,{functionsAsIs:!0,merge:!i._optionsByReference()[n]}),f=n.split(/[.\[]/)[0],i._initialized&&(i.optionChanged.fireWith(i,[f,t,u]),i._optionChanged(f,t,u)))})}finally{i.endUpdate()}}}),o=function(r,u){f[r]=u,u.prototype.NAME=r,n.fn[r]=function(f){var h=typeof f=="string",e=this,o,s;return h?(o=f,s=n.makeArray(arguments).slice(1),this.each(function(){var u=n(this).data(r),h,f;if(!u)throw Error(t.utils.stringFormat("Component {0} has not been initialized on this element",r));return h=u[o],f=h.apply(u,s),f!==i?(e=f,!1):void 0})):this.each(function(){var t=n(this).data(r);t?t.option(f):new u(this,f)}),e}},s=function(t){t=n(t);var i=t.data(u);return i?n.map(i,function(n){return t.data(n)}):[]},h=function(){n.each(s(this),function(){this._dispose()})},c=n.cleanData;n.cleanData=function(t){return n.each(t,h),c.apply(this,arguments)},n.extend(f,{Component:e,registerComponent:o})}(jQuery,DevExpress),function(n,t,i){var r=window.ko,o,v,y,p,w,b;if(t.support.hasKo){(function(n){if(n=n.split("."),n[0]<2||n[0]==2&&n[1]<3)throw Error("Your version of KnockoutJS is too old. Please upgrade KnockoutJS to 2.3.0 or later.");})(r.version);var e=t.ui,s=e.events,h="dxKoLocks",l="dxKoCreation",k=function(){var n={},t=function(t){return n[t]||0};return{obtain:function(i){n[i]=t(i)+1},release:function(i){var r=t(i);r===1?delete n[i]:n[i]=r-1},locked:function(n){return t(n)>0}}},d=function(t){r.bindingHandlers[t]={init:function(i,u){var f=n(i),o={},s={},c=function(n,i){var e=f.data(t),u=f.data(h),c=r.utils.unwrapObservable(i);if(e){if(u.locked(n))return;u.obtain(n);try{e.option(n,c)}finally{u.release(n)}}else o[n]=c,r.isWriteableObservable(i)&&(s[n]=i)},a=function(n,t){if(n in s){var r=this._$element,i=r.data(h);if(!i.locked(n)){i.obtain(n);try{s[n](t)}finally{i.release(n)}}}};return r.computed(function(){var e=f.data(t);e&&e.beginUpdate(),n.each(r.unwrap(u()),function(n,t){r.computed(function(){c(n,t)},null,{disposeWhenNodeIsRemoved:i})}),e&&e.endUpdate()},null,{disposeWhenNodeIsRemoved:i}),o&&(f.data(l,!0),f[t](o),o=null,f.data(h,new k),f.data(t).optionChanged.add(a)),{controlsDescendantBindings:e[t].subclassOf(e.Widget)}}}},g=e.Component.inherit({_modelByElement:function(n){if(n.length)return r.dataFor(n.get(0))}}),nt=e.registerComponent,tt=function(n,t){nt(n,t),d(n)},c=e.Template.inherit({ctor:function(t){this.callBase.apply(this,arguments),this._template=n("<div>").append(t),this._registerKoTemplate()},_cleanTemplateElement:function(){this._element.each(function(){r.cleanNode(this)})},_registerKoTemplate:function(){var n=this._template.get(0);new r.templateSources.anonymousTemplate(n).nodes(n)},render:function(t,u){var e;u=u!==i?u:r.dataFor(t.get(0))||{};var o=r.contextFor(t[0]),s=o?o.createChildContext(u):u,f=n("<div />").appendTo(t);return r.renderTemplate(this._template.get(0),s,null,f.get(0)),e=f.contents(),t.append(e),f.remove(),e},dispose:function(){this._template.remove()}}),it=e.TemplateProvider.inherit({getTemplateClass:function(){return c},supportDefaultTemplate:function(n){return this._createdWithKo(n)?!0:this.callBase(n)},getDefaultTemplate:function(n){if(this._createdWithKo(n))return a(n.NAME)},_createdWithKo:function(n){return!!n._element().data(l)}});r.bindingHandlers.dxAction={update:function(i,u,f,e){var h=n(i),o=r.utils.unwrapObservable(u()),c=o,s={context:i},l;o.execute&&(c=o.execute,n.extend(s,o)),l=new t.Action(c,s);h.off(".dxActionBinding").on("dxclick.dxActionBinding",function(n){l.execute({element:h,model:e,evaluate:function(n){var u=e,f;return n.length>0&&n[0]==="$"&&(u=r.contextFor(i)),f=t.data.utils.compileGetter(n),f(u)},jQueryEvent:n}),s.bubbling||n.stopPropagation()})}};var a=function(){var n={};return function(i){if(u[i]||(i="base"),!n[i]){var r=u[i](),f=t.utils.createMarkupFromString(r);n[i]=new c(f)}return n[i]}}(),f=function(t,r,u,f){u=u===i?!0:u;var e=n.map(r,function(n,t){return t+":"+n}).join(",");return f=f||"","<"+t+' data-bind="'+e+'" '+f+">"+(u?"<\/"+t+">":"")},rt={css:"{ 'dx-state-disabled': $data.disabled, 'dx-state-invisible': !($data.visible === undefined || ko.unwrap($data.visible)) }"},u={base:function(){var n=[f("div",rt,!1)],t=f("div",{html:"html"}),i=f("div",{text:"text"}),r=f("div",{text:"String($data)"});return n.push("<!-- ko if: $data.html && !$data.text -->",t,"<!-- /ko -->","<!-- ko if: !$data.html && $data.text -->",i,"<!-- /ko -->","<!-- ko ifnot: $.isPlainObject($data) -->",r,"<!-- /ko -->","<\/div>"),n.join("")}};u.dxPivotTabs=function(){var n=u.base(),t=f("span",{text:"title"}),i=n.indexOf(">")+1,r=n.length-6;return n=[n.substring(0,i),t,n.substring(r,n.length)],n.join("")},u.dxPanorama=function(){var n=u.base(),i=f("div",{text:"header"},!0,'class="dx-panorama-item-header"'),t=n.indexOf(">")+1;return n=[n.substring(0,t),"<!-- ko if: $data.header -->",i,"<!-- /ko -->",n.substring(t,n.length)],n.join("")},u.dxList=function(){var n=u.base(),t=f("div",{text:"key"});return n=[n.substring(0,n.length-6),"<!-- ko if: $data.key -->"+t+"<!-- /ko -->","<\/div>"],n.join("")},u.dxToolbar=function(){var i=u.base();return i=[i.substring(0,i.length-6),"<!-- ko if: $data.widget -->"],n.each(["button","tabs","dropDownMenu"],function(){var r=t.inflector.camelize(["dx","-",this].join("")),n={};n[r]="$data.options",i.push("<!-- ko if: $data.widget === '",this,"' -->",f("div",n),"<!-- /ko -->")}),i.push("<!-- /ko -->"),i.join("")},u.dxGallery=function(){var n=u.base(),t=f("div",{text:"String($data)"}),i=f("img",{attr:"{ src: String($data) }"},!1);return n=n.replace(t,i)},u.dxTabs=function(){var n=u.base(),t=f("div",{text:"text"}),i=f("span",{attr:"{ 'class': 'dx-icon-' + $data.icon }",css:"{ 'dx-icon': true }"}),r=f("img",{attr:"{ src: $data.iconSrc }",css:"{ 'dx-icon': true }"},!1),e="<!-- ko if: $data.icon -->"+i+"<!-- /ko --><!-- ko if: !$data.icon && $data.iconSrc -->"+r+'<!-- /ko --><span class="dx-tab-text" data-bind="text: $data.text"><\/span>';return n=n.replace("<!-- ko if: !$data.html && $data.text -->","<!-- ko if: !$data.html && ($data.text || $data.icon || $data.iconSrc) -->").replace(t,e)},u.dxActionSheet=function(){return f("div",{dxButton:"{ text: $data.text, clickAction: $data.clickAction, type: $data.type, disabled: !!ko.unwrap($data.disabled) }"})},u.dxNavBar=u.dxTabs,o=function(n,t){var i=function(){r.cleanNode(this)};t?n.each(i):n.find("*").each(i)},v=n.fn.empty,n.fn.empty=function(){return o(this,!1),v.apply(this,arguments)},y=n.fn.remove,n.fn.remove=function(n,t){if(!t){var i=this;n&&(i=i.filter(n)),o(i,!0)}return y.call(this,n,t)},p=n.fn.html,n.fn.html=function(n){return typeof n=="string"&&o(this,!1),p.apply(this,arguments)},n.extend(e,{Component:g,registerComponent:tt,TemplateProvider:it,Template:c,defaultTemplate:a}),w=s.registerEvent,b=function(t,i){w(t,i);var u=s.addNamespace(t,t+"Binding");r.bindingHandlers[t]={update:function(t,i,f,e){var s=n(t),o=r.utils.unwrapObservable(i()),h=o.execute?o.execute:o;s.off(u).on(u,function(n){h(e,n)})}}},n.extend(s,{registerEvent:b})}}(jQuery,DevExpress),function(n,t,i){var y,p;if(t.support.hasNg){var w=window.angular,u=t.ui,h=u.events,e=t.data.utils.compileSetter,o=t.data.utils.compileGetter,c="dxNgCreation",b="dxTemplates",l="dxNgCompiler",a="dxDefaultCompilerGetter",k="template",v=w.module("dx",[]),d=t.Class.inherit({ctor:function(t){this._componentName=t.componentName,this._compile=t.compile,this._$element=t.$element,this._componentDisposing=n.Callbacks(),this._$templates=this._extractTemplates()},init:function(n){this._scope=n.scope,this._$element=n.$element,this._ngOptions=n.ngOptions,this._$element.data(c,!0),n.ngOptions.data&&this._initDataScope(n.ngOptions.data)},initDefaultCompilerGetter:function(){var n=this;n._$element.data(a,function(t){return n._compilerByTemplate(t)})},initTemplateCompilers:function(){var t=this;this._$templates&&this._$templates.each(function(i,r){n(r).data(l,t._compilerByTemplate(r))})},initComponentWithBindings:function(){this._initComponent(this._scope),this._initComponentBindings()},_initDataScope:function(t){if(typeof t=="string"){var r=t,i=this._scope;t=i.$eval(t),this._scope=i.$new(),this._synchronizeDataScopes(i,this._scope,t,r)}n.extend(this._scope,t)},_synchronizeDataScopes:function(t,i,r,u){var f=this;n.each(r,function(n){f._synchronizeScopeField({parentScope:t,childScope:i,fieldPath:n,parentPrefix:u})})},_initComponent:function(n){this._component=this._$element[this._componentName](this._evalOptions(n)).data(this._componentName)},_initComponentBindings:function(){var t=this,i={};t._ngOptions.bindingOptions&&n.each(t._ngOptions.bindingOptions,function(n,r){var f=n.search(/\[|\./),u=f>-1?n.substring(0,f):n,e;i[u]||(i[u]={}),i[u][n]=r,e=t._scope.$watch(r,function(i,r){i!==r&&t._component.option(n,i)},!0),t._component.disposing.add(function(){e(),t._componentDisposing.fire()})}),t._component.optionChanged.add(function(r,u){!t._scope.$root.$$phase&&i&&i[r]&&t._scope.$apply(function(){n.each(i[r],function(n,i){var s=e(i),h=o(n),f={};f[r]=u,s(t._scope,h(f))})})})},_extractTemplates:function(){var t,i;return u[this._componentName].subclassOf(u.Widget)&&n.trim(this._$element.html())&&(i=!this._$element.children().first().attr("data-options"),t=i?n("<div/>").attr("data-options","dxTemplate: { name: '"+k+"' }").append(this._$element.contents()):this._$element.children().detach(),this._$element.data(b,t)),t},_compilerByTemplate:function(t){var r=this,u=this._getScopeItemsPath();return function(f,e){var s=n(t).clone(),h,o;if(f!==i){h=f.$id,o=h?f:r._createScopeWithData(f);s.on("$destroy",function(){var n=!o.$parent;n||o.$destroy()})}else o=r._scope;return u&&r._synchronizeScopes(o,u,e),g(r._compile(s),o),s}},_getScopeItemsPath:function(){if(u[this._componentName].subclassOf(u.CollectionContainerWidget)&&this._ngOptions.bindingOptions)return this._ngOptions.bindingOptions.items},_createScopeWithData:function(t){var i=this._scope.$new();return typeof t=="object"?n.extend(i,t):i.scopeValue=t,i},_synchronizeScopes:function(t,i,r){var f=this,u=o(i+"["+r+"]")(this._scope);n.isPlainObject(u)||(u={scopeValue:u}),n.each(u,function(n){f._synchronizeScopeField({parentScope:f._scope,childScope:t,fieldPath:n,parentPrefix:i,itemIndex:r})})},_synchronizeScopeField:function(n){var r=n.parentScope,c=n.childScope,t=n.fieldPath,l=n.parentPrefix,u=n.itemIndex,y=t==="scopeValue"?"":"."+t,a=u!==i,f=[l],s,v,h;a&&f.push("[",u,"]"),f.push(y),s=f.join(""),v=r.$watch(s,function(n,i){n!==i&&e(t)(c,n)}),h=c.$watch(t,function(n,t){if(n!==t){if(a&&!o(l)(r)[u]){h();return}e(s)(r,n)}}),this._componentDisposing.add([v,h])},_evalOptions:function(t){var i=n.extend({},this._ngOptions);return delete i.data,delete i.bindingOptions,this._ngOptions.bindingOptions&&n.each(this._ngOptions.bindingOptions,function(n,r){i[n]=t.$eval(r)}),i}}),g=function(n,t){t.$root.$$phase?n(t):t.$apply(function(){n(t)})},nt=u.Component.inherit({_modelByElement:function(n){if(n.length)return n.scope()},_createActionByOption:function(){var n=this.callBase.apply(this,arguments),t=this;return function(){var r=this,i=t._modelByElement(t._element()),u=arguments;return!i||i.$root.$$phase?n.apply(r,u):i.$apply(function(){return n.apply(r,u)})}}}),tt=u.registerComponent,it=function(n,t){tt(n,t),v.directive(n,["$compile",function(t){return{restrict:"A",compile:function(i){var r=new d({componentName:n,compile:t,$element:i});return function(t,i,u){r.init({scope:t,$element:i,ngOptions:u[n]?t.$eval(u[n]):{}}),r.initTemplateCompilers(),r.initDefaultCompilerGetter(),r.initComponentWithBindings()}}}}])},s=u.Template.inherit({ctor:function(){this.callBase.apply(this,arguments),this._compiler=this._template.data(l)},render:function(t,i,r){var u=this._compiler,f=n.isFunction(u)?u(i,r):u;return t.append(f),f},setCompiler:function(n){this._compiler=n(this._element)}}),rt=u.TemplateProvider.inherit({getTemplateClass:function(n){return this._createdWithNg(n)?s:this.callBase(n)},supportDefaultTemplate:function(n){return this._createdWithNg(n)?!0:this.callBase(n)},getDefaultTemplate:function(n){if(this._createdWithNg(n)){var i=n._element().data(a),t=ut(n.NAME);return t.setCompiler(i),t}},_createdWithNg:function(n){return!!n._element().data(c)}}),ut=function(){var n={};return function(t){return r[t]||(t="base"),n[t]||(n[t]=r[t]()),new s(n[t])}}(),f={container:function(){return n("<div/>").attr("ng-class","{ 'dx-state-invisible': !visible && visible != undefined, 'dx-state-disabled': !!disabled }").attr("ng-switch","").attr("on","html && 'html' || text && 'text' || scopeValue && 'scopeValue'")},html:function(){return n("<div/>").attr("ng-switch-when","html").attr("ng-bind-html-unsafe","html")},text:function(){return n("<div/>").attr("ng-switch-when","text").attr("ng-bind","text")},primitive:function(){return n("<div/>").attr("ng-switch-when","scopeValue").attr("ng-bind-html-unsafe","'' + scopeValue")}},r={base:function(){return f.container().append(f.html()).append(f.text()).append(f.primitive())}};r.dxList=function(){return r.base().attr("on","html && 'html' || text && 'text' || scopeValue && 'scopeValue' || key && 'key'").append(n("<div/>").attr("ng-switch-when","key").attr("ng-bind","key"))},r.dxToolbar=function(){var i=r.base().attr("on","html && 'html' || text && 'text' || scopeValue && 'scopeValue' || widget");return n.each(["button","tabs","dropDownMenu"],function(r,u){var f="dx-"+t.inflector.dasherize(this);n("<div/>").attr("ng-switch-when",u).attr(f,"options").appendTo(i)}),i},r.dxGallery=function(){return f.container().append(f.html()).append(f.text()).append(n("<img/>").attr("ng-switch-when","scopeValue").attr("ng-src","{{'' + scopeValue}}"))},r.dxTabs=function(){var i=f.container().attr("on","html && 'html' ||  icon && 'icon' ||  iconSrc && 'iconSrc' ||  text && 'text' || scopeValue && 'scopeValue'"),t=n("<span/>").addClass("dx-tab-text").attr("ng-bind","text"),r=n("<span/>").attr("ng-switch-when","icon").addClass("dx-icon").attr("ng-class","'dx-icon-' + icon").add(t.attr("ng-switch-when","icon")),u=n("<img/>").attr("ng-switch-when","iconSrc").addClass("dx-icon").attr("ng-src","{{iconSrc}}").add(t.attr("ng-switch-when","iconSrc"));return i.append(f.html()).append(r).append(u).append(t.attr("ng-switch-when","text")).append(f.primitive())},r.dxActionSheet=function(){return n("<div/>").attr("dx-button","{ bindingOptions: { text: 'text', clickAction: 'clickAction', type: 'type', disabled: 'disabled' } }")},r.dxNavBar=r.dxTabs,n.extend(u,{Component:nt,registerComponent:it,Template:s,TemplateProvider:rt}),y=h.registerEvent,p=function(n,t){y(n,t);var i=n.slice(0,2)+n.charAt(2).toUpperCase()+n.slice(3);v.directive(i,["$parse",function(t){return{restrict:"A",compile:function(r,u){var f=t(u[i]);return function(t,i){i.on(n,function(n){t.$apply(function(){f(t,{$event:n})})})}}}}])},n.extend(h,{registerEvent:p})}}(jQuery,DevExpress),function(n,t){var u=t.ui,e={text:"Ok",clickAction:function(){return!0}},r="dx-dialog",o=r+"-wrapper",s=r+"-root",h=r+"-content",c=r+"-message",l=r+"-buttons",a=r+"-button",v=function(i){function nt(){return f.show(),v.promise()}function w(n){f.hide().done(function(){f._element().remove()}),v.resolve(y||n)}var b=this,y,v;if(!u.dxPopup)throw new Error("DevExpress.ui.dxPopup required");v=n.Deferred(),i=n.extend(u.optionsByDevice(t.devices.current(),"dxDialog"),i);var k=n(".dx-viewport"),d=n("<div/>").addClass(r).appendTo(k),g=n("<div/>").addClass(c).html(String(i.message)),p=n("<div/>").addClass(l),f=d.dxPopup({title:i.title||b.title,height:"auto",width:function(){var r=n(window).height()>n(window).width(),t=(r?"p":"l")+"Width";return i.hasOwnProperty(t)?i[t]:i.width},contentReadyAction:function(){f.content().addClass(h).append(g).append(p)},animation:{show:{type:"pop",duration:400},hide:{type:"pop",duration:400,to:{opacity:0,scale:0},from:{opacity:1,scale:1}}}}).data("dxPopup");return f._wrapper().addClass(o),i.position&&f.option("position",i.position),n.each(i.buttons||[e],function(){var i=n("<div/>").addClass(a).appendTo(p),r=new t.Action(this.clickAction,{context:f});i.dxButton(n.extend(this,{clickAction:function(){y=r.execute(arguments),w()}}))}),f._wrapper().addClass(s),{show:nt,hide:w}},f=function(t,i){var r,f=n.isPlainObject(t)?t:{title:i,message:t};return r=u.dialog.custom(f),r.show()},y=function(t,i){var r,f=n.isPlainObject(t)?t:{title:i,message:t,buttons:[{text:Globalize.localize("Yes"),clickAction:function(){return!0}},{text:Globalize.localize("No"),clickAction:function(){return!1}}]};return r=u.dialog.custom(f),r.show()},p=function(i,r,e){var o,s;if(o=n.isPlainObject(i)?i:{message:i},!u.dxToast){f(o.message);return}r&&(o.type=r),e&&(o.displayTime=e),s=n("<div/>").appendTo(".dx-viewport").addClass("dx-static").dxToast(o).data("dxToast"),s.option("hiddenAction",function(n){n.element.remove(),new t.Action(o.hiddenAction,{context:n.model}).execute(arguments)}),s.show()};n.extend(u,{notify:p,dialog:{custom:v,alert:f,confirm:y}})}(jQuery,DevExpress),function(n,t){var r=t.data,u="_dataSourceOptions",f="_handleDataSourceChanged",e="_handleDataSourceLoadError",o="_handleDataSourceLoadingChanged";t.ui.DataHelperMixin={ctor:function(){this.disposing.add(function(){this._disposeDataSource()})},_refreshDataSource:function(){this._initDataSource(),this._loadDataSource()},_initDataSource:function(){var t=this.option("dataSource"),i,f;this._disposeDataSource(),t&&(t instanceof r.DataSource?(this._isSharedDataSource=!0,this._dataSource=t):(i=u in this?this[u]():{},f=this._dataSourceType?this._dataSourceType():r.DataSource,this._dataSource=new f(n.extend(!0,{},i,r.utils.normalizeDataSourceOptions(t)))),this._addDataSourceHandlers())},_addDataSourceHandlers:function(){f in this&&this._addDataSourceChangeHandler(),e in this&&this._addDataSourceLoadErrorHandler(),o in this&&this._addDataSourceLoadingChangedHandler()},_addDataSourceChangeHandler:function(){var t=this,n=this._dataSource;this._dataSourceChangedHandler=function(){t[f](n.items())},n.changed.add(this._dataSourceChangedHandler)},_addDataSourceLoadErrorHandler:function(){this._dataSourceLoadErrorHandler=n.proxy(this[e],this),this._dataSource.loadError.add(this._dataSourceLoadErrorHandler)},_addDataSourceLoadingChangedHandler:function(){this._dataSourceLoadingChangedHandler=n.proxy(this[o],this),this._dataSource.loadingChanged.add(this._dataSourceLoadingChangedHandler)},_loadDataSource:function(){if(this._dataSource){var n=this._dataSource;n.isLoaded()?this._dataSourceChangedHandler():n.load()}},_disposeDataSource:function(){this._dataSource&&(this._isSharedDataSource?(delete this._isSharedDataSource,this._dataSource.changed.remove(this._dataSourceChangedHandler),this._dataSource.loadError.remove(this._dataSourceLoadErrorHandler),this._dataSource.loadingChanged.remove(this._dataSourceLoadingChangedHandler)):this._dataSource.dispose(),delete this._dataSource,delete this._dataSourceChangedHandler,delete this._dataSourceLoadErrorHandler,delete this._dataSourceLoadingChangedHandler)}}}(jQuery,DevExpress),function(n){var r={2:"touch",3:"pen",4:"mouse"},u={filter:function(t,i){var u=i.pointerType;return n.isNumeric(u)&&(t.pointerType=r[u]),t},props:n.event.mouseHooks.props.concat(["pointerId","originalTarget","namespace","width","height","pressure","result","tiltX","charCode","tiltY","detail","isPrimary","prevValue"])};n.each(["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel","MSPointerOver","MSPointerOut","MSPointerEnter","MSPointerLeave","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","pointerenter","pointerleave"],function(){n.event.fixHooks[this]=u})}(jQuery,DevExpress),function(n){var r={filter:function(n,t){return t.changedTouches.length&&(n.pageX=t.changedTouches[0].pageX,n.pageY=t.changedTouches[0].pageY),n},props:n.event.mouseHooks.props.concat(["touches","changedTouches","targetTouches","detail","result","namespace","originalTarget","charCode","prevValue"])};n.each(["touchstart","touchmove","touchend","touchcancel"],function(){n.event.fixHooks[this]=r})}(jQuery,DevExpress),function(n,t){var c=t.ui,f=t.support,e=t.devices.real,r=c.events,l=100,u=!1,o=null,a="dxPointerEvents",v={dxpointerdown:"mousedown",dxpointermove:"mousemove",dxpointerup:"mouseup",dxpointercancel:""},y={dxpointerdown:"touchstart",dxpointermove:"touchmove",dxpointerup:"touchend",dxpointercancel:"touchcancel"},p={dxpointerdown:"pointerdown",dxpointermove:"pointermove",dxpointerup:"pointerup",dxpointercancel:"pointercancel"},s={dxpointerdown:"touchstart mousedown",dxpointermove:"touchmove mousemove",dxpointerup:"touchend mouseup",dxpointercancel:"touchcancel"},h=function(){return f.touch&&!(e.tablet||e.phone)?s:f.touch?y:v}();n.each(h,function(t,i){var e={EVENT_NAMESPACE:[a,".",t].join(""),_handlerCount:0,_handler:function(i){return t==="dxpointerdown"&&n(i.target).data("dxGestureEvent",null),r.fireEvent({type:t,pointerType:r.eventSource(i),originalEvent:i})},setup:function(){if(!(f._handlerCount>0))n(document).on(r.addNamespace(i,e.EVENT_NAMESPACE),f._handler)},add:function(){f._handlerCount++},remove:function(){f._handlerCount--},teardown:function(){f._handlerCount||n(document).off("."+f.EVENT_NAMESPACE)}},c=n.extend({},e,{_handler:function(n){if(r.isTouchEvent(n)&&(f._skipNextEvents=!0),!r.isMouseEvent(n)||!u){if(r.isMouseEvent(n)&&f._skipNextEvents){f._skipNextEvents=!1,u=!0,clearTimeout(o),o=setTimeout(function(){u=!1},l);return}return e._handler(n)}}}),f=h===s?c:e;r.registerEvent(t,f)})}(jQuery,DevExpress),function(n,t,i){var y=navigator.userAgent,c=i.screen,l=t.ui,p=t.utils,f=l.events,w=t.support,e=t.devices.real,b="dxSpecialEvents",s="dxClick"+b,o="dxclick",h="dxClickScrollableParent",a="dxClickScrollableParentOffset",v=function(){var n=e.deviceType==="phone"&&c.height<=480,t=e.deviceType==="tablet"&&i.devicePixelRatio<2,r=e.platform==="ios"&&e.version[0]>6;return r&&(n||t)}(),k=function(){return e.platform==="ios"},d=function(){if(!w.touch)return!0;var t=y.match(/Chrome\/([0-9]+)/)||[],r=!!t[0],u=~~t[1],f=e.platform==="android";if(r)if(f){if(u>31&&i.innerWidth<=c.width||n("meta[name=viewport][content*='user-scalable=no']").length)return!0}else return!0;return!1}(),u={TOUCH_BOUNDARY:10,_startX:0,_startY:0,_handlerCount:0,_target:null,_touchWasMoved:function(n){var t=u.TOUCH_BOUNDARY;return Math.abs(n.pageX-u._startX)>t||Math.abs(n.pageY-u._startY)>t},_getClosestScrollable:function(t){var r=n(),i;if(t.data(h))r=t.data(h);else for(i=t;i.length;){if(i[0].scrollHeight-i[0].offsetHeight>1){r=i,t.data(h,r);break}i=i.parent()}return r},_saveClosestScrollableOffset:function(n){var t=u._getClosestScrollable(n);t.length&&n.data(a,t.scrollTop())},_closestScrollableWasMoved:function(n){var t=n.data(h);return t&&t.scrollTop()!==n.data(a)},_hasClosestScrollable:function(n){var t=u._getClosestScrollable(n);return t.length?t.is("body")?!1:t===window?!1:t.css("overflow")==="hidden"?!1:!0:!1},_handleStart:function(t){if(!f.isMouseEvent(t)||t.which===1){if(f.isTouchEvent(t)&&k()){var i=t.originalEvent.targetTouches[0].identifier;if(u._lastTouchId===i){l.feedback.reset();return}u._lastTouchId=i}u._saveClosestScrollableOffset(n(t.target)),u._target=t.target,u._startX=t.pageX,u._startY=t.pageY}},_handleEnd:function(t){var i=n(t.target);!i.is(u._target)||u._touchWasMoved(t)||u._closestScrollableWasMoved(i)||v&&u._hasClosestScrollable(i)||(i.is(":focus")||t.dxPreventBlur||p.resetActiveElement(),f.handleGestureEvent(t,o)&&f.fireEvent({type:o,originalEvent:t}),u._reset())},_handleCancel:function(){u._reset()},_reset:function(){u._target=null},_handleClick:function(t){var i=n(t.target);i.is(u._target)&&u._hasClosestScrollable(i)&&f.handleGestureEvent(t,o)&&f.fireEvent({type:o,originalEvent:t}),u._reset()},_makeElementClickable:function(n){n.attr("onclick")||n.attr("onclick","void(0)")},setup:function(){if(u._makeElementClickable(n(this)),!(u._handlerCount>0)){var t=n(document).on(f.addNamespace("dxpointerdown",s),n.proxy(u._handleStart,this)).on(f.addNamespace("dxpointerup",s),n.proxy(u._handleEnd,this)).on(f.addNamespace("dxpointercancel",s),n.proxy(u._handleCancel,this));if(v)t.on(f.addNamespace("click",s),n.proxy(u._handleClick,this))}},add:function(){u._handlerCount++},remove:function(){u._handlerCount--},teardown:function(){u._handlerCount||n(document).off("."+s)}},g={bindType:"click",delegateType:"click",handle:function(n){if(f.handleGestureEvent(n,o))return n.handleObj.handler.apply(this,arguments)}};f.registerEvent(o,d?g:u)}(jQuery,DevExpress,window),function(n,t){var s=t.ui,f=s.events,c=n.event.special,h="dxSpecialEvents",e="dxHold",o="dxhold",u=h+"HoldTimer",r={HOLD_TIMEOUT:750,TOUCH_BOUNDARY:5,_startX:0,_startY:0,_touchWasMoved:function(n){var t=r.TOUCH_BOUNDARY;return Math.abs(n.pageX-r._startX)>t||Math.abs(n.pageY-r._startY)>t},setup:function(t){var h=this,i=n(h),c=function(n){i.data(u)||(r._startX=n.pageX,r._startY=n.pageY,i.data(u,setTimeout(function(){i.removeData(u),f.handleGestureEvent(n,o)&&f.fireEvent({type:o,originalEvent:n})},t&&"timeout"in t?t.timeout:r.HOLD_TIMEOUT)))},l=function(n){r._touchWasMoved(n)&&s()},s=function(){clearTimeout(i.data(u)),i.removeData(u)};i.on(f.addNamespace("dxpointerdown",e),c).on(f.addNamespace("dxpointermove",e),l).on(f.addNamespace("dxpointerup",e),s)},teardown:function(){var t=n(this);clearTimeout(t.data(u)),t.removeData(u).off("."+e)}};f.registerEvent(o,r)}(jQuery,DevExpress),function(n,t){var o=t.ui,c=t.utils,r=o.events,l="dxswipestart",s="dxswipe",a="dxswipeend",v="dxswipecancel",u="dxSwipeEventDataKey",h="dxGesture",y={defaultItemSizeFunc:function(){return this._activeSwipeable.width()},isSwipeAngleAllowed:function(n){return Math.abs(n.y)<=Math.abs(n.x)},getBounds:function(){return[this._maxLeftOffset,this._maxRightOffset]},calcOffsetRatio:function(n){var t=r.eventData(n);return(t.x-(this._startEventData&&this._startEventData.x||0))/this._itemSizeFunc().call(this,n)},isFastSwipe:function(n){var t=r.eventData(n);return this.FAST_SWIPE_SPEED_LIMIT*Math.abs(t.x-this._tickData.x)>=t.time-this._tickData.time}},p={defaultItemSizeFunc:function(){return this._activeSwipeable.height()},isSwipeAngleAllowed:function(n){return Math.abs(n.y)>=Math.abs(n.x)},getBounds:function(){return[this._maxTopOffset,this._maxBottomOffset]},calcOffsetRatio:function(n){var t=r.eventData(n);return(t.y-(this._startEventData&&this._startEventData.y||0))/this._itemSizeFunc().call(this,n)},isFastSwipe:function(n){var t=r.eventData(n);return this.FAST_SWIPE_SPEED_LIMIT*Math.abs(t.y-this._tickData.y)>=t.time-this._tickData.time}},w={horizontal:y,vertical:p},b=t.Class.inherit({STAGE_SLEEP:0,STAGE_TOUCHED:1,STAGE_SWIPING:2,TICK_INTERVAL:300,FAST_SWIPE_SPEED_LIMIT:5,ctor:function(){this._attachEvents()},_getStrategy:function(){return w[this._data("direction")]},_defaultItemSizeFunc:function(){return this._getStrategy().defaultItemSizeFunc.call(this)},_itemSizeFunc:function(){return this._data("itemSizeFunc")||this._defaultItemSizeFunc},_data:function(n,t){var i=this._activeSwipeable.data(u);if(arguments.length===1)return i[n];arguments.length===2&&(i[n]=t)},_closestSwipeable:function(t){for(var i=n(t.target),r;i.length;){if(r=n(i).data(u),r)return n(i);i=i.parent()}},_handleStart:function(n){if(!r.needSkipEvent(n)&&!(this._swipeStage>this.STAGE_SLEEP)){var t=this._activeSwipeable=this._closestSwipeable(n);t&&(this._parentsLength=this._activeSwipeable.parents().length,this._startEventData=r.eventData(n),this._tickData={time:0},this._swipeStage=this.STAGE_TOUCHED)}},_handleMove:function(n){this._activeSwipeable&&this._swipeStage!==this.STAGE_SLEEP&&(this._swipeStage===this.STAGE_TOUCHED&&this._handleFirstMove(n),this._swipeStage===this.STAGE_SWIPING&&this._handleNextMoves(n))},_handleFirstMove:function(t){var i=r.eventDelta(this._startEventData,r.eventData(t)),u;if((i.x||i.y)&&r.handleGestureEvent(t,s)){if(!this._getStrategy().isSwipeAngleAllowed.call(this,i)||r.needSkipEvent(t)){this._fireSwipeCancelEvent(t),this._reset();return}if(o.feedback.reset(),n(":focus",this._activeSwipeable).length&&c.resetActiveElement(),t.originalEvent){if(u=this._data("direction"),t.originalEvent.pointerMoveData[u]!==this._parentsLength)return;t.originalEvent.isScrollingEvent=!1}if(this._prepareGesture(),t=r.fireEvent({type:"dxswipestart",originalEvent:t,target:this._activeSwipeable.get(0)}),t.cancel){this._fireSwipeCancelEvent(t),this._reset();return}this._maxLeftOffset=t.maxLeftOffset,this._maxRightOffset=t.maxRightOffset,this._maxTopOffset=t.maxTopOffset,this._maxBottomOffset=t.maxBottomOffset,this._swipeStage=this.STAGE_SWIPING}},_fireSwipeCancelEvent:function(n){r.fireEvent({type:"dxswipecancel",originalEvent:n,target:this._activeSwipeable.get(0)})},_handleBodyPointerMove:function(n){if(this._activeSwipeable&&n.originalEvent){var t=n.originalEvent.pointerMoveData||{},i=this._data("direction"),r=t[i];if(r&&r>this._parentsLength){this._reset();return}t[i]=this._parentsLength,n.originalEvent.pointerMoveData=t}},_handleNextMoves:function(n){var u=this._getStrategy(),i=r.eventData(n),t=u.calcOffsetRatio.call(this,n);t=this._fitOffset(t,this._data("elastic")),i.time-this._tickData.time>this.TICK_INTERVAL&&(this._tickData=i),r.fireEvent({type:"dxswipe",originalEvent:n,offset:t,target:this._activeSwipeable.get(0)})},_handleEnd:function(n){if((t.devices.isRippleEmulator()||!r.hasTouches(n))&&this._activeSwipeable){if(this._swipeStage!==this.STAGE_SWIPING){this._reset();return}var f=this._getStrategy(),e=f.calcOffsetRatio.call(this,n),o=f.isFastSwipe.call(this,n),i=e,u=this._calcTargetOffset(e,o);i=this._fitOffset(i,this._data("elastic")),u=this._fitOffset(u,!1),r.fireEvent({type:"dxswipeend",offset:i,targetOffset:u,target:this._activeSwipeable.get(0),originalEvent:n}),this._reset()}},_fitOffset:function(n,t){var r=this._getStrategy(),i=r.getBounds.call(this);return n<-i[0]?t?(-2*i[0]+n)/3:-i[0]:n>i[1]?t?(2*i[1]+n)/3:i[1]:n},_calcTargetOffset:function(n,t){var i;return t?(i=Math.ceil(Math.abs(n)),n<0&&(i=-i)):i=Math.round(n),i},_prepareGesture:function(){clearTimeout(this._gestureEndTimer),this._activeSwipeable.data(h,!0)},_forgetGesture:function(){var t=this._activeSwipeable;this._gestureEndTimer=setTimeout(n.proxy(function(){t.data(h,!1)},this),400)},_reset:function(){this._forgetGesture(),this._activeSwipeable=null,this._swipeStage=this.STAGE_SLEEP},_attachEvents:function(){n("body").on(r.addNamespace("dxpointermove","dxSwipe"),n.proxy(this._handleBodyPointerMove,this));n(document).on(r.addNamespace("dxpointerdown","dxSwipe"),n.proxy(this._handleStart,this)).on(r.addNamespace("dxpointermove","dxSwipe"),n.proxy(this._handleMove,this)).on(r.addNamespace("dxpointerup dxpointercancel","dxSwipe"),n.proxy(this._handleEnd,this))},isDisposed:function(){return this._disposed},dispose:function(){this._disposed=!0,this._activeSwipeable&&this._reset(),n(document).off(".dxSwipe")}}),f=null,e=0;n.each([l,s,a,v],function(t,i){r.registerEvent(i,{noBubble:!0,setup:function(t){n(this).data(u,n.extend(n(this).data(u)||{elastic:!0,direction:"horizontal"},t)),(!f||f.isDisposed())&&(f=new b)},add:function(){e++},remove:function(){e--},teardown:function(){var t=n(this);(t.data(u)&&t.removeData(u),e)||f&&(f.dispose(),f=null)}})})}(jQuery,DevExpress),function(n,t,i){var u=t.ui,s="UIFeedback",f="dx-feedback",h="dx-state-active",c="dx-state-disabled",a="dx-state-invisible",v="dx-state-hovered",y=30,p=400,r,e=u.events;u.feedback={reset:function(){l(!0)}},u.Widget=u.Component.inherit({_defaultOptions:function(){return n.extend(this.callBase(),{visible:!0,activeStateEnabled:!0,width:i,height:i,clickAction:null,hoverStateEnabled:!1})},_init:function(){this.callBase(),this._feedbackShowTimeout=y,this._feedbackHideTimeout=p},_render:function(){this.callBase(),this._element().addClass("dx-widget"),this._toggleDisabledState(this.option("disabled")),this._toggleVisibility(this.option("visible")),this._refreshFeedback(),this._renderDimensions(),this._renderClick()},_dispose:function(){this._clearTimers(),r&&r.closest(this._element()).length&&(r=null),this.callBase()},_clean:function(){this.callBase(),this._element().empty()},_clearTimers:function(){clearTimeout(this._feedbackHideTimer),clearTimeout(this._feedbackShowTimer)},_toggleVisibility:function(n){this._element().toggleClass(a,!n)},_toggleHoverState:function(n){this.option("hoverStateEnabled")&&this._element().toggleClass(v,n)},_renderDimensions:function(){var n=this.option("width"),t=this.option("height");this._element().width(n),this._element().height(t)},_refreshFeedback:function(){this._feedbackDisabled()?(this._feedbackOff(),this._element().removeClass(f)):this._element().addClass(f)},_renderClick:function(){var t=this,n=e.addNamespace("dxclick",this.NAME);this._clickAction=this._createActionByOption("clickAction");this._clickEventContainer().off(n).on(n,function(n){t._clickAction({jQueryEvent:n})})},_clickEventContainer:function(){return this._element()},_feedbackDisabled:function(){return!this.option("activeStateEnabled")||this.option("disabled")},_feedbackOn:function(t,i){this._feedbackDisabled()||(this._clearTimers(),i?this._feedbackShow(t):this._feedbackShowTimer=window.setTimeout(n.proxy(this._feedbackShow,this,t),this._feedbackShowTimeout),this._saveActiveElement())},_feedbackShow:function(t){var i=this._element();this._activeStateUnit&&(i=n(t).closest(this._activeStateUnit)),i.hasClass(c)||(i.addClass(h),this._toggleHoverState(!1))},_saveActiveElement:function(){r=this._element()},_feedbackOff:function(t){this._clearTimers(),t?this._feedbackHide():this._feedbackHideTimer=window.setTimeout(n.proxy(this._feedbackHide,this),this._feedbackHideTimeout)},_feedbackHide:function(){var n=this._element();this._activeStateUnit&&(n=n.find(this._activeStateUnit)),n.removeClass(h),this._toggleHoverState(!this.option("disabled")),this._clearActiveElement()},_clearActiveElement:function(){var i=this._element().get(0),t=r&&r.get(0);t&&(t===i||n.contains(i,t))&&(r=null)},_toggleDisabledState:function(n){this._element().toggleClass(c,n),this._toggleHoverState(!n)},_optionChanged:function(n,t){switch(n){case"disabled":this._toggleDisabledState(t),this._refreshFeedback();break;case"activeStateEnabled":this._refreshFeedback();break;case"hoverStateEnabled":this._toggleHoverState();break;case"visible":this._toggleVisibility(t);break;case"width":case"height":this._renderDimensions();break;case"clickAction":this._renderClick();break;default:this.callBase.apply(this,arguments)}},repaint:function(){this._refresh()}});var w=function(n,t){var h=n.jQueryEvent,s=n.element,i,u;e.needSkipEvent(h)||(r&&o(r)._feedbackOff(!0),i=s.closest("."+f),i.length&&(u=o(i),u._feedbackOn(s,t),t&&u._feedbackOff()))},l=function(n){r&&o(r)._feedbackOff(n)},o=function(t){var i;return n.each(t.data("dxComponents"),function(n,r){if(u[r].subclassOf(u.Widget))return i=t.data(r),!1}),i};n(function(){var i=new t.Action(w);n(document).on(e.addNamespace("dxpointerdown",s),function(t){i.execute({jQueryEvent:t,element:n(t.target)})}).on(e.addNamespace("dxpointerup dxpointercancel",s),function(t){var u=r&&n(t.target).closest("."+f).get(0)===r.get(0);u&&i.execute({jQueryEvent:t,element:n(t.target)},!0),l()})})}(jQuery,DevExpress),function(n,t){var r=t.ui,u="template",f="[data-options*='dxTemplate']",e="dxTemplates",o=function(t){var i=n(t).data("options");return n.trim(i).charAt(0)!=="{"&&(i="{"+i+"}"),new Function("return "+i)().dxTemplate},s=r.Widget.inherit({_defaultOptions:function(){return n.extend(this.callBase(),{contentReadyAction:n.noop})},_init:function(){this.callBase(),this._templateProvider=new r.TemplateProvider,this._initTemplates(),this._initContentReadyAction()},_clean:n.noop,_createTemplate:function(n){return new(this._templateProvider.getTemplateClass(this))(n)},_initTemplates:function(){var n=this,t={},i=this._element().data(e),r=i?i:this._element().contents().filter(f);r.length?r.each(function(){var i=o(this);if(i){if(!i.name)throw Error("Template name was not specified");t[i.name]=n._createTemplate(this)}}):t[u]=n._createTemplate(n._element().contents()),this._externalTemplates={},this._templates=t},_initContentReadyAction:function(){this._contentReadyAction=this._createActionByOption("contentReadyAction",{excludeValidators:["gesture","designMode","disabled"]})},_render:function(){this.callBase(),this._renderContent()},_renderContent:function(){this._renderContentImpl(),this._fireContentReadyAction()},_renderContentImpl:t.abstract,_fireContentReadyAction:function(){this._contentReadyAction({excludeValidators:["disabled","gesture"]})},_getTemplate:function(n){var i=this._acquireTemplate.apply(this,arguments);if(!i&&this._templateProvider.supportDefaultTemplate(this)&&(i=this._templateProvider.getDefaultTemplate(this),!i))throw Error(t.utils.stringFormat('Template "{0}" was not found and no default template specified!',n));return i},_acquireTemplate:function(t){if(t==null)return t;if(t.nodeType||t.jquery)return t=n(t),t.is("script")&&(t=t.html()),this._createTemplate(t);if(typeof t=="string")return this._getTemplates()[t];if(n.isFunction(t)){var i=n.makeArray(arguments).slice(1);return this._acquireTemplate(t.apply(this,i))}return this._acquireTemplate(t.toString())},_optionChanged:function(n){switch(n){case"contentReadyAction":this._initContentReadyAction();break;default:this.callBase.apply(this,arguments)}},_cleanTemplates:function(){n.each(this._templates,function(n,t){t.dispose()})},_dispose:function(){this._cleanTemplates(),this._contentReadyAction=null,this.callBase()},addTemplate:function(t){n.extend(this._templates,t)},addExternalTemplate:function(t){n.extend(this._externalTemplates,t)},_getTemplates:function(){return n.extend({},this._templates,this._externalTemplates)}});r.ContainerWidget=s}(jQuery,DevExpress),function(n,t){var o=t.utils.isString,r,f=[],h=DevExpress.Class.inherit({_compile:function(n,t){return t},_render:function(n){return n},ctor:function(t){this._element=n(t),this._element.length===1&&(this._element[0].nodeName.toLowerCase()!=="script"&&(this._element=n("<div />").append(this._element)),this._template=this._compile(this._element.html()||"",this._element))},render:function(t,i){var r;if(this._template)return r=this._render(this._template,i),o(r)&&(r=n.parseHTML(r)),r=n(r),t&&t.append(r),r},dispose:n.noop}),s=function(n){if(n&&n.compile&&n.render)return h.inherit({allowRenderToDetachedContainer:n.allowRenderToDetachedContainer!==!1,_compile:n.compile,_render:n.render});throw Error("Template Engine must contains compile and render methods");},e,u;window.ko&&(e=function(){},e.prototype=ko.utils.extend(new ko.templateEngine,{renderTemplateSource:function(n,t){var u=n.data("precompiledTemplate");return u||(u=new r(n.domElement),n.data("precompiledTemplate",u)),u.render(null,t.$data)},allowTemplateRewriting:!1})),DevExpress.ui.setTemplateEngine=function(n){if(o(n)){if(r=f&&f[n],!r&&n!=="default")throw Error(t.utils.stringFormat('Template Engine "{0}" is not supported',n));}else r=s(n)||r;window.ko&&ko.setTemplateEngine(r?new e:new ko.nativeTemplateEngine)},DevExpress.ui.TemplateProvider=DevExpress.ui.TemplateProvider.inherit({getTemplateClass:function(){return r?r:this.callBase.apply(this,arguments)}}),u=function(n,t){f[n]=s(t)},u("jquery-tmpl",{compile:function(n,t){return t},render:function(n,t){return n.tmpl(t)}}),u("jsrender",{compile:function(t){return n.templates(t)},render:function(n,t){return n.render(t)}}),u("mustache",{compile:function(n){return Mustache.compile(n)},render:function(n,t){return n(t)}}),u("hogan",{compile:function(n){return Hogan.compile(n)},render:function(n,t){return n.render(t)}}),u("underscore",{compile:function(n){return _.template(n)},render:function(n,t){return n(t)}}),u("handlebars",{compile:function(n){return Handlebars.compile(n)},render:function(n,t){return n(t)}}),u("doT",{compile:function(n){return doT.template(n)},render:function(n,t){return n(t)}})}(jQuery,DevExpress),function(n,t,i){var r=t.ui,u=r.events,f=r.ContainerWidget.inherit({_defaultOptions:function(){return n.extend(this.callBase(),{items:[],itemTemplate:"item",itemRender:null,itemClickAction:null,itemRenderedAction:null,noDataText:Globalize.localize("dxCollectionContainerWidget-noDataText"),dataSource:null})},_init:function(){this.callBase(),this._cleanRenderedItems(),this._refreshDataSource()},_dataSourceOptions:function(){var t={paginate:!1,_preferSync:!1};return n.isArray(this.option("dataSource"))&&(t._preferSync=!0),t},_cleanRenderedItems:function(){this._renderedItemsCount=0},_optionChanged:function(n,t,i){switch(n){case"items":this._cleanRenderedItems(),this._invalidate(),this.callBase.apply(this,arguments);break;case"dataSource":this._refreshDataSource(),this._dataSource||this.option("items",[]),this._renderEmptyMessage();break;case"noDataText":this._renderEmptyMessage();break;case"itemRenderedAction":this._createItemRenderAction();break;case"itemTemplate":this._itemTemplateName=null,this._invalidate();break;case"itemRender":this._itemRender=null,this._invalidate();break;default:this.callBase(n,t,i)}},_expectNextPageLoading:function(){this._startIndexForAppendedItems=0},_expectLastItemLoading:function(){this._startIndexForAppendedItems=-1},_forgetNextPageLoading:function(){this._startIndexForAppendedItems=null},_handleDataSourceChanged:function(n){var t=this.option("items");this._initialized&&t&&this._shouldAppendItems()?(this._renderedItemsCount=t.length,this.option().items=t.concat(n.slice(this._startIndexForAppendedItems)),this._renderContent(),this._forgetNextPageLoading()):this.option("items",n)},_handleDataSourceLoadError:function(){this._forgetNextPageLoading()},_shouldAppendItems:function(){return this._startIndexForAppendedItems!=null&&this._allowDinamicItemsAppend()},_allowDinamicItemsAppend:function(){return!1},_clean:function(){this._itemContainer().empty()},_refresh:function(){this._cleanRenderedItems(),this.callBase.apply(this,arguments)},_itemContainer:function(){return this._element()},_itemClass:t.abstract,_itemSelector:function(){return"."+this._itemClass()},_itemDataKey:t.abstract,_itemElements:function(){return this._itemContainer().find(this._itemSelector())},_render:function(){this.callBase(),this._attachClickEvent()},_attachClickEvent:function(){var t=this._itemSelector(),i=u.addNamespace("dxclick",this.NAME);this._itemContainer().off(i,t).on(i,t,n.proxy(this._handleItemClick,this))},_handleItemClick:function(n){this._handleItemJQueryEvent(n,"itemClickAction")},_renderContentImpl:function(){var n=this.option("items")||[];this._renderedItemsCount?this._renderItems(n.slice(this._renderedItemsCount)):this._renderItems(n)},_renderItems:function(t){t.length&&n.each(t,n.proxy(this._renderItem,this)),this._renderEmptyMessage()},_renderItem:function(n,t,i){var o;i=i||this._itemContainer();var f=this._getItemRenderer(),s=this._getItemTemplateName(),e=this._getTemplate(t.template||s,n,t),r,u={index:n,item:t,container:i};return r=f?this._createItemByRenderer(f,u):e?this._createItemByTemplate(e,u):this._createItemByRenderer(this._itemRenderDefault,u),r.addClass(this._itemClass()).data(this._itemDataKey(),t),o={itemElement:r,itemData:t,itemIndex:n},this._postprocessRenderItem(o),this._getItemRenderAction()({itemElement:r,itemData:t}),r},_createItemRenderAction:function(){return this._itemRenderAction=this._createActionByOption("itemRenderedAction",{element:this._element(),excludeValidators:["gesture","designMode","disabled"]})},_getItemRenderAction:function(){return this._itemRenderAction||this._createItemRenderAction()},_getItemRenderer:function(){return this._itemRender=this._itemRender||this.option("itemRender")},_createItemByRenderer:function(t,i){var r=n("<div />").appendTo(i.container),u=t.call(this,i.item,i.index,r);return u!=null&&r[0]!==u[0]&&r.append(u),r},_getItemTemplateName:function(){return this._itemTemplateName=this._itemTemplateName||this.option("itemTemplate")},_createItemByTemplate:function(n,t){return n.render(t.container,t.item,t.index,"ignoreTarget")},_itemRenderDefault:function(t,r,u){n.isPlainObject(t)?(t.visible===i||t.visible||u.hide(),t.disabled&&u.addClass("dx-state-disabled"),t.text&&u.text(t.text),t.html&&u.html(t.html)):u.html(String(t))},_postprocessRenderItem:n.noop,_renderEmptyMessage:function(){var t=this.option("noDataText"),i=this.option("items"),u=this._dataSource&&this._dataSource.isLoading(),r=!t||i&&i.length||u;r&&this._$nodata&&(this._$nodata.remove(),this._$nodata=null),r||(this._$nodata=this._$nodata||n("<div />").addClass("dx-empty-message"),this._$nodata.appendTo(this._itemContainer()).text(t))},_handleItemJQueryEvent:function(t,i,r,u){this._handleItemEvent(t.target,i,n.extend(r,{jQueryEvent:t}),u)},_closestItemElement:function(t){return n(t).closest(this._itemSelector())},_handleItemEvent:function(t,i,r,u){var f=this._closestItemElement(n(t)),e=this._createActionByOption(i,u);return r=n.extend({itemElement:f,itemData:this._getItemData(f)},r),e(r)},_getItemData:function(n){return n.data(this._itemDataKey())}}).include(r.DataHelperMixin);r.CollectionContainerWidget=f}(jQuery,DevExpress),function(n,t){var r=t.ui,u=r.events,f=r.CollectionContainerWidget.inherit({_defaultOptions:function(){return n.extend(this.callBase(),{selectedIndex:-1,itemSelectAction:null})},_render:function(){this.callBase(),this._renderSelectedIndex(this.option("selectedIndex")),this._attachSelectedEvent()},_attachSelectedEvent:function(){var t=this._itemSelector(),r=this._createAction(this._handleItemSelect),f=n.proxy(this._handleItemClick,this),i=u.addNamespace("dxclick",this.NAME);this._element().off(i,t).on(i,t,function(i){var u=n(i.target).closest(t);r({itemElement:u,jQueryEvent:i}),f(i)})},_handleItemSelect:function(t){var r=t.jQueryEvent,i=t.component;if(!u.needSkipEvent(r)){var e=i._itemElements(),o=n(r.target).closest(i._itemSelector()),f=e.index(o);i.option("selectedIndex")!==f&&i._onItemSelectAction(f)}},_onItemSelectAction:function(n){this.option("selectedIndex",n)},_renderSelectedIndex:t.abstract,_renderEmptyMessage:n.noop,_attachClickEvent:n.noop,_optionChanged:function(n,t,i){n==="selectedIndex"?(this._renderSelectedIndex(t,i),this._handleItemEvent(this._selectedItemElement(t),"itemSelectAction",null,{excludeValidators:["gesture"]})):this.callBase.apply(this,arguments)},_selectedItemElement:function(n){return this._itemElements().eq(n)}});r.SelectableCollectionWidget=f}(jQuery,DevExpress),function(n,t){var u=function(n){var i=t.devices.real,r=i.platform==="android"&&i.version.length&&i.version[0]<4,u=i.platform!==n.platform,f=n.platform==="generic",e=n.platform==="desktop",o=i.platform==="tizen",s=i.platform==="generic",h=t.devices.isRippleEmulator(),c=t.devices.isSimulator();return r||o||h||c||u&&!f&&!(s&&e)},f=/chrome/i.test(navigator.userAgent),r={};r.dxActionSheet=function(n){if(n.platform==="ios"&&n.tablet)return{usePopover:!0}},r.dxRadioGroup=function(n){if(n.tablet)return{layout:"horizontal"}},r.dxDateBox=function(n){if(n.android||n.win8)return{useNativePicker:!1}},r.dxDatePicker=function(n){return n.platform!=="win8"?{width:333,height:280}:{showNames:!0}},r.dxDialog=function(t){return t.platform==="ios"?{width:276}:t.platform==="win8"&&!t.phone?{width:"60%"}:t.platform==="win8"?{width:function(){return n(window).width()},position:{my:"top center",at:"top center",of:window,offset:"0 0"}}:t.platform==="android"?{lWidth:"60%",pWidth:"80%"}:void 0},r.dxDropDownMenu=function(n){if(n.platform==="ios")return{usePopover:!0}},r.dxLoadIndicator=function(){var t=DevExpress.devices.real,i=t.platform==="android"&&(t.version[0]<4||t.version[0]===4&&t.version[1]===0);if(DevExpress.browser.msie&&DevExpress.browser.version[0]<=10||i)return{viaImage:!0}},r.dxLoadPanel=function(n){if(n.platform==="desktop")return{width:180}},r.dxLookup=function(t){return t.platform==="win8"&&t.phone?{showCancelButton:!1,fullScreen:!0}:t.platform==="ios"&&t.phone?{fullScreen:!0}:t.platform==="ios"&&t.tablet?{popupWidth:function(){return Math.min(n(window).width(),n(window).height())*.4},popupHeight:function(){return Math.min(n(window).width(),n(window).height())*.4},usePopover:!0}:void 0},r.dxPopup=function(n){return n.platform==="win8"&&!n.phone?{width:"60%"}:n.platform==="win8"&&n.phone?{position:{my:"top center",at:"top center",of:window,offset:"0 0"}}:n.platform==="ios"?{animation:{show:{type:"slide",duration:400,from:{position:{my:"top",at:"bottom",of:window}},to:{position:{my:"center",at:"center",of:window}}},hide:{type:"slide",duration:400,from:{position:{my:"center",at:"center",of:window}},to:{position:{my:"top",at:"bottom",of:window}}}}}:void 0},r.dxScrollable=function(n){return u(n)?{useNative:!1,useSimulatedScrollBar:!0}:n.platform==="android"&&!f?{useSimulatedScrollBar:!0}:void 0},r.dxScrollView=function(t){var i=r.dxScrollable(t)||{},u=DevExpress.devices.real;return(u.platform==="ios"||t.platform==="desktop"||t.platform==="generic")&&n.extend(i,{refreshStrategy:"pullDown"}),u.platform==="android"&&n.extend(i,{refreshStrategy:"swipeDown"}),u.platform==="win8"&&n.extend(i,{refreshStrategy:"slideDown"}),i},r.dxList=function(t){var i=r.dxScrollable(t)||{};return"useNative"in i&&(i.useNativeScrolling=i.useNative,delete i.useNative),delete i.useSimulatedScrollBar,t.platform==="desktop"&&n.extend(i,{showNextButton:!0,autoPagingEnabled:!1,editConfig:{selectionMode:"control"}}),(t.platform==="ios"||t.platform==="ios7")&&n.extend(i,{editConfig:{deleteMode:t.version===7?"slideItem":"slideButton"}}),t.platform==="android"&&n.extend(i,{editConfig:{deleteMode:"swipe"}}),t.platform==="win8"&&n.extend(i,{editConfig:{deleteMode:"hold"}}),t.platform==="generic"&&n.extend(i,{editConfig:{deleteMode:"slideItem"}}),i},r.dxToast=function(t){if(t.platform==="win8")return{position:{my:"top center",at:"top center",of:window,offset:"0 0"},width:function(){return n(window).width()-20},height:"35px"}},r.dxToolbar=function(n){return n.platform==="ios"?{submenuType:"dxActionSheet"}:n.platform==="win8"?{submenuType:"dxList"}:n.platform==="android"?{submenuType:"dxDropDownMenu"}:void 0},t.ui.optionsByDevice=function(n,t){var i=r[t];return i&&i(n)}}(jQuery,DevExpress));if(!DevExpress.MOD_VIZ_CORE){if(!window.DevExpress)throw Error("Required module is not referenced: core");(function(n){n.viz={}})(DevExpress),function(n){n.viz.core={}}(DevExpress),function(n,t,i){var r=t.utils,e=Math,u=t.viz.core,f=2e3;u.outOfScreen={x:-1e3,y:-1e3},u.tickIntervalCalculator={_defaultNumberMultipliers:[1,2,3,5],_defaultGridSpacingFactor:30,_getCommonTickInterval:function(n,t){for(var r=0,f=!1,i,u=1;!f;u*=10)for(i=0;i<t.length;i++)if(r=t[i]*u,n<=r){f=!0;break}return r},_getNumericTickInterval:function(n,t){var f,i=0,e,o=!1,u;if(n>1)i=this._getCommonTickInterval(n,t);else if(n>0)for(i=1,f=.1;!o;f/=10)for(u=t.length-1;u>=0;u--){if(e=t[u]*f,n>e){o=!0;break}i=e}return r.adjustValue(i)},_getLogarithmicTickInterval:function(n,t){var i=0;return n!==0&&(i=this._getCommonTickInterval(n,t)),r.adjustValue(i)},_getDateTimeTickInterval:function(n,t){var e={millisecond:[1,2,5,10,25,100,250,300,500],second:[1,2,3,5,10,15,20,30],minute:[1,2,3,5,10,15,20,30],hour:[1,2,3,4,6,8,12],day:[1,2,3,5,7,10,14],month:[1,2,3,6]},h={},o,u,f,s,i;if(n<1)return{milliseconds:1};for(u in e)if(e.hasOwnProperty(u))for(f=e[u],i=0;i<f.length;i++)if(n<=r.convertDateUnitToMilliseconds(u,f[i]))return h[u+"s"]=f[i],h;for(o=1;;o*=10)for(i=0;i<t.length;i++)if(s=o*t[i],n<=r.convertDateUnitToMilliseconds("year",s))return{years:s};return null},getTickInterval:function(n){var t=this,e=n.gridSpacingFactor||t._defaultGridSpacingFactor,i,u,o=n.businessDelta,f=n.screenDelta;i=n.numberMultipliers||t._defaultNumberMultipliers,n.type==="logarithmic"&&(o=Math.round(Math.abs(r.getLog(n.max,n.base)-r.getLog(n.min,n.base)))),u=f>0&&e<f?e*o/f:0;switch(n.type){case"numeric":return t._getNumericTickInterval(u,i);case"datetime":return t._getDateTimeTickInterval(u,i);case"logarithmic":return t._getLogarithmicTickInterval(u,i)}return null}},u.minorTickIntervalCalculator={_defaultNumberMultipliers:[2,4,5,8,10],_defaultGridSpacingFactor:15,_getDateTimeTickInterval:function(n,t,i){for(var f,u=i.length-1;u>=0;u--)if(f=Math.floor(n/i[u]),t<=f)return r.convertMillisecondsToDateUnits(f);return 0},_getNumericTickInterval:function(n,t,i){for(var f,u=i.length-1;u>=0;u--)if(f=n/i[u],t<=f)return r.adjustValue(f);return 0},getTickInterval:function(n,t,i,u,f){var e=this,u=r.isDefined(u)?u:e._defaultGridSpacingFactor,f=f||e._defaultNumberMultipliers,o=u*t/i;switch(n){case"numeric":return e._getNumericTickInterval(t,o,f);case"datetime":return e._getDateTimeTickInterval(t,o,f)}return 0}},u.tickProvider={_appendFakeSVGElement:function(t,i,r){var f=n.extend({},r.textOptions,{rotate:0});return r.renderer.createText(i,u.outOfScreen.x+r.translator.translateX(t),u.outOfScreen.y,f).append()},_getDistanceByAngle:function(n,t){return n/Math.abs(Math.sin(t*(Math.PI/180)))},_areDisplayValuesValid:function(n,t,i){var f=this,s=f._getTextFunc(i),h=i.textOptions&&r.isNumber(i.textOptions.rotate)?i.textOptions.rotate:0,c=f._appendFakeSVGElement(n,s(n),i),l=f._appendFakeSVGElement(t,s(t),i),u=c.getBBox(),e=l.getBBox(),o,a=i.translator.businessRange.invertX;return o=h!==0?f._getDistanceByAngle(u.height,h)<=Math.abs(e.x-u.x):a?e.x+e.width<u.x:u.x+u.width<e.x,c.remove(),l.remove(),o},_removeInvalidDatesWithUnitBegining:function(n,t){n.length<=1||!t.setTicksAtUnitBeginning||!r.isDate(t.min)||this._areDisplayValuesValid(n[0],n[1],t)||n.splice(1,1)},_getMaxDisplayValue:function(n,t){var i=null,f=this._getTextFunc(t),u,r;if(i=f(n[0]),!t.isRotate)for(r=1;r<n.length;r++)u=f(n[r]),i.length<u.length&&(i=u);return i},_getValueSize:function(n,t){var u=this,f,e=t.textOptions?t.textOptions.rotate:0,o,i,s;return n.length===0?0:(t.isRotate=r.isNumber(e)&&e!==0,f=u._getMaxDisplayValue(n,t),o=u._appendFakeSVGElement(f,f,t),i=o.getBBox(),s=t.isRotate?u._getDistanceByAngle(i.height,e):t.isHorizontal?i.width:i.height,o.remove(),Math.ceil(s))},_adjustNumericTickValue:function(n,t,i){return r.isExponential(n)?r.adjustValue(n):r.applyPrecisionByMinDelta(i,t,n)},_generateStartTick:function(n,t){var o=this,h=0,s=t.min-t.max<0,i=t.min,e=r.isDate(t.min),u=e?r.convertDateTickIntervalToMilliseconds(n):n,f;if(t.type==="logarithmic")i=r.raiseTo(Math.floor(r.adjustValue(r.getLog(t.min,t.base))/u*u),t.base);else for(i=Math.floor(t.min/u)*u,i=e?new Date(i):i,i=e?new Date(i):o._adjustNumericTickValue(i,u,t.min);s===i-t.min<0&&i!==t.min;)if(f=o._nextTick(i,n,t),f!==i)i=f;else return f;return i},_nextTick:function(n,t,i){var u,f,e=this;return i.type==="logarithmic"?(f=r.addInterval(r.adjustValue(r.getLog(n,i.base)),t,i.min>i.max),u=r.raiseTo(f,i.base)):(u=r.addInterval(n,t,i.min>i.max),i.type==="numeric"&&(u=r.isExponential(u)?r.adjustValue(u):r.applyPrecisionByMinDelta(i.min,t,u)),i.type==="datetime"&&i.setTicksAtUnitBeginning&&r.correctDateWithUnitBeginning(u,t)),u},_addMinorTicks:function(t,i,f,e,o){var w=this,l,a=r.isDate(t)?"datetime":"numeric",h,s=[],y=0,v=e.minorTickCount+1,p,c;for(e.min=t,e.max=i,r.isDefined(e.tickInterval)||(h=Math.abs(e.max-e.min),r.isDefined(e.minorTickCount)?((!f.majorTicks.autoArrangementStep||f.majorTicks.autoArrangementStep<=1)&&(p=e.minorTickCount+1,y=a==="datetime"?r.convertDateTickIntervalToMilliseconds(f.majorTickInterval):f.majorTickInterval,v=Math.round(h/y*p)||1),c=a==="datetime"?r.convertMillisecondsToDateUnits(h/v):h/v,n.isNumeric(c)&&(c=r.adjustValue(c))):r.isDate(t)&&(c=u.minorTickIntervalCalculator.getTickInterval(a,h,h*e.deltaCoef,e.gridSpacingFactor,e.numberMultipliers))),e=n.extend(!0,{},e,{tickInterval:c}),s=w.getTicks(e),o&&s.reverse(),s.length>0&&Math.ceil(Math.abs(i-s[s.length-1])*e.deltaCoef)<2&&s.pop(),l=0;l<s.length;l++)f.minorTicks.push(s[l]),f.fullTicks.push(s[l])},_addLeftBoudedTicks:function(n,t,i){r.isDefined(t)&&n.majorTicks[0].valueOf()!==t.valueOf()&&(i.addMinMax.max=!0,this._addMinorTicks(n.majorTicks[0],t,n,i,!0),i.addMinMax.max=!1,i.showCustomBoundaryTicks&&(n.minorTicks.length>0&&n.minorTicks[0].valueOf()===t.valueOf()&&n.minorTicks.shift(t),n.customBoundaryTicks.push(t),n.fullTicks.unshift(t)))},_addRightBoudedTicks:function(n,t,i){var u=n.majorTicks[n.majorTicks.length-1];n.fullTicks.push(u),r.isDefined(t)&&u.valueOf()!==t.valueOf()&&(i.addMinMax.min=!1,i.addMinMax.max=!0,this._addMinorTicks(u,t,n,i),i.showCustomBoundaryTicks&&(n.minorTicks.length>0&&n.minorTicks[n.minorTicks.length-1].valueOf()===t.valueOf()&&n.minorTicks.pop(t),n.customBoundaryTicks.push(t),n.fullTicks.push(t)))},_correctBoundedTicks:function(t,i,r,u){u=n.extend({},{min:!0,max:!0},u),r.length>0&&(u.min||r[0].valueOf()!==t.valueOf()||r.shift(),u.max&&r[r.length-1].valueOf()===i.valueOf()||r.pop())},_initializeMinorTicksOptions:function(t,f,e,o,s,h){var a=this,c,l=r.isDefined(h.minorTickCount);n.extend(!0,h,{addMinMax:{min:!1,max:!1},deltaCoef:a._getDeltaCoef(o,f,e)},h),h.numberMultipliers=l?[h.minorTickCount+1]:h.numberMultipliers,h.gridSpacingFactor=l?0:h.gridSpacingFactor,!l&&s.majorTicks.length>1&&(c=Math.abs(s.majorTicks[0]-s.majorTicks[1]),a.needTickIntervalCalculation(c,s.minorTickInterval,h.incidentOccured)&&(s.minorTickInterval=u.minorTickIntervalCalculator.getTickInterval(t,c,c*h.deltaCoef,h.gridSpacingFactor,h.numberMultipliers),h.tickInterval=r.isNumber(f)?s.minorTickInterval:i))},_getDataType:function(n){return r.isDate(n)?"datetime":"numeric"},_getDeltaCoef:function(n,t,i){return n/Math.abs(t-i)},_initializeMajorTicksOptions:function(t,i,f,e,o,s){var h;s.type=t,s.screenDelta=e,n.extend(!0,s,{min:i,max:f,screenDelta:e,isHorizontal:!0}),r.isDefined(i)&&r.isDefined(f)&&(h=Math.abs(f-i),s.businessDelta=h,this.needTickIntervalCalculation(h,o.majorTickInterval,s.incidentOccured)&&(s.isStartTickGenerated=!0,o.majorTickInterval=u.tickIntervalCalculator.getTickInterval(s),s.tickInterval=o.majorTickInterval))},_getTextFunc:function(n){return n.getText||function(n){return n.toString()}},_generateTicks:function(t){var s=this,f=[],e,c=t.max-t.min>0,l,a,o,h=t.isStartTickGenerated,v,y=t.useTicksAutoArrangement;if(t.type=r.isDefined(t.type)&&t.type!=="continuous"?t.type:s._getDataType(t.min),t.businessDelta=Math.abs(t.max-t.min),!r.isDefined(t.min)||!r.isDefined(t.max)||isNaN(t.min)||isNaN(t.max))f=t.isHorizontal?["canvas_position_left","canvas_position_center","canvas_position_right"]:["canvas_position_bottom","canvas_position_middle","canvas_position_top"],y=!1,f.hideLabels=!0;else if(o=n.isNumeric(t.min)&&n.isNumeric(t.max)&&!n.isNumeric(t.tickInterval)?i:t.tickInterval,v=t.type==="logarithmic"?Math.abs(r.getLog(t.min,t.base)-r.getLog(t.max,t.base)):t.businessDelta,this.needTickIntervalCalculation(v,o,t.incidentOccured)&&(h=r.isDefined(h)?h:!0,o=u.tickIntervalCalculator.getTickInterval(t)),f.tickInterval=o,o&&o.valueOf()!==0&&t.min.valueOf()!==t.max.valueOf()){e=h?s._generateStartTick(o,t):t.min;do{if(f.push(e),e=s._nextTick(e,o,t),f[f.length-1].valueOf()===e.valueOf())break;l=e-t.min>0,a=t.max-e>0}while(c===l&&c===a);f.push(e),s._correctBoundedTicks(t.min,t.max,f,t.addMinMax)}return f},_getAutoArrangementStep:function(n,t){var u=this,i,r=t.isHorizontal?t.textSpacing:0;return t.getCustomAutoArrangementStep?t.getCustomAutoArrangementStep(n,t):t.maxDisplayValueSize>0?(i=Math.floor((t.screenDelta+t.textSpacing)/(t.maxDisplayValueSize+r)),Math.ceil((t.ticksCount||n.length)/i)):1},_getAutoArrangementTicks:function(n,t,i){var f=this,u=n,r;if(i>1)for(u=[],r=0;r<n.length;r+=i)u.push(n[r]);return u},isOverlappedTicks:function(n,t){var i=this;return t.maxDisplayValueSize=i._getValueSize(n,t),i._getAutoArrangementStep(n,t)>1},needTickIntervalCalculation:function(n,t,i){var u;if(r.isDefined(t)){if(!r.isNumber(t)&&(u=new Date,t=r.addInterval(u,t)-u,!t))return!0;if(r.isNumber(t))if(t>0&&n/t>f)i&&i("The specified tick interval has led to generating too many ticks. Therefore, the tick interval has been chosen automatically.");else return!1}return!0},getTickIntervals:function(n,t,i,u,f){var o=this,c,h,s=o._getDataType(n),e={majorTickInterval:u.tickInterval,minorTickInterval:f.tickInterval,majorTicks:[]};return o._initializeMajorTicksOptions(s,n,t,i,e,u),r.isDefined(n)&&r.isDefined(t)&&(e.majorTicks.push(n),e.majorTicks.push(o._nextTick(n,e.majorTickInterval,{min:n,max:t,setTicksAtUnitBeginning:u.setTicksAtUnitBeginning})),h=Math.abs(e.majorTicks[0]-e.majorTicks[1]),o._initializeMinorTicksOptions(s,n,t,i,e,f)),e},getFullTicks:function(n,t,i,u,f){var o=this,s,h=o._getDataType(n),e={customBoundaryTicks:[],fullTicks:[],majorTickInterval:u.tickInterval,majorTicks:[],minorTickInterval:f.tickInterval,minorTicks:[]};if(o._initializeMajorTicksOptions(h,n,t,i,e,u),e.majorTicks=o.getTicks(u),r.isDefined(n)&&r.isDefined(t)&&e.majorTicks.length>0){for(e.majorTicks.autoArrangementStep&&e.majorTicks.autoArrangementStep>1&&!r.isDefined(f.tickInterval)&&!r.isDefined(f.minorTickCount)&&(f.tickInterval=e.minorTickInterval=u.tickInterval),o._initializeMinorTicksOptions(h,n,t,i,e,f),o._addLeftBoudedTicks(e,n,f),s=0;s<e.majorTicks.length-1;s++)e.fullTicks.push(e.majorTicks[s]),o._addMinorTicks(e.majorTicks[s],e.majorTicks[s+1],e,f);o._addRightBoudedTicks(e,t,f)}return e},getTicks:function(t){var u=this,f,e,i=t.customTicks?t.customTicks:u._generateTicks(t);return t.useTicksAutoArrangement&&(t.maxDisplayValueSize=u._getValueSize(i,t),f=u._getAutoArrangementStep(i,t),f>1&&(i=r.isDefined(t.tickInterval)||r.isDefined(t.customTicks)?u._getAutoArrangementTicks(i,t,f):u._generateTicks(n.extend({},t,{gridSpacingFactor:t.maxDisplayValueSize})),i.autoArrangementStep=f),u._removeInvalidDatesWithUnitBegining(i,t)),i}}}(jQuery,DevExpress),function(n,t,i){var u=t.utils.isDefined,r=Math.round;t.viz.core.NumericTranslator={createTranslator:function(n){return function(t){var i=this,f=i._getCanvasRange(n),e,o=i.translateSpecialCases(i,t,n);return u(o)?o:isNaN(t)||t<f.rangeMin||t>f.rangeMax?null:(e=(t-f.rangeMinVisible)*f.ratioCanvasOfRange,r(i._calculateProjection(e,n)))}},createUnTransltator:function(n){return function(t){var r=this,u,i=r._getCanvasRange(n);return t<i.startPoint||t>i.endPoint?null:(u=(t-i.startPoint)/i.ratioCanvasOfRange,r._calculateUnProjection(u,n))}},createGetIntervalFunction:function(n){return function(){var t=this,u=t._getCanvasRange(n),f=0;return t.businessRange["interval"+n]!==i&&(f=u.length*t.businessRange["interval"+n]/(u.rangeMaxVisible-u.rangeMinVisible)),r(f)}}}}(jQuery,DevExpress),function(n,t){var u=t.viz.core,r=u.NumericTranslator;u.DatetimeTranslator={createTranslator:r.createTranslator,createUnTransltator:function(n){return function(t){var u=r.createUnTransltator(n),i=u.call(this,t);return i===null?i:new Date(i)}},createGetIntervalFunction:r.createGetIntervalFunction}}(jQuery,DevExpress),function(n,t){function f(n){return r(r(n*10)/10)}var u=t.utils.isDefined,r=Math.round;t.viz.core.CategoryTranslator={createTranslator:function(n){return function(t){var i=this,e=i._getCanvasRange(n),f=i["categories"+n+"ToPoints"][t],h=i.businessRange["stick"+n],o,s=i.translateSpecialCases(i,t,n);return u(s)?s:f?(o=h?f.index:f.index+.5,r(e.startPoint+e.interval*o)):0}},createUnTransltator:function(n){return function(t){var u=this,i=u._getCanvasRange(n),o=u.businessRange,e,r=0;return t<i.startPoint||t>i.endPoint?null:(e=o["stick"+n]?(t-i.startPoint)/i.interval+.5:(t-i.startPoint)/i.interval,r=f(e-.5),u["categories"+n+"Number"]===r&&r--,o["invert"+n]&&(r=u["categories"+n+"Number"]-r-1),u.categories[r])}},createGetIntervalFunction:function(n){return function(){var t=this._getCanvasRange(n);return t.interval}}}}(jQuery,DevExpress),function(n,t){var u=t.viz.core,f=u.NumericTranslator,r=t.utils,s=Math,e=r.raiseTo,o=r.getLog,h=r.isDefined,c=s.round;u.LogarifmicTranslator={createTranslator:function(n){return function(t){var i=this,e=i.businessRange,s=e["base"+n],r,u=i.translateSpecialCases(i,t,n);return h(u)?u:(r=f.createTranslator(n+"log"),r.call(i,o(t,s)))}},createUnTransltator:function(n){return function(t){var r=this,o=r.businessRange,s=o["base"+n],i,u;return u=f.createUnTransltator(n+"log"),i=u.call(r,t),i===null?i:e(i,s)}},createGetIntervalFunction:function(n){return function(){var r=this,u=r.businessRange,t=r._getCanvasRange(n),i=u["base"+n];return c(t.length/o(t.rangeMaxVisible/t.rangeMinVisible,i)*((e(u["interval"+n],i)-1)/(i-1)))}}}}(jQuery,DevExpress),function(n){var r=window.NaN,i=window.Number;n.viz.core.Translator1D=n.Class.inherit({ctor:function(n,t,i,r){this.setup({domainStart:n,domainEnd:t,codomainStart:i,codomainEnd:r})},setup:function(n){var t=this;return n=n||{},t._domainStart=i(n.domainStart),t._domainEnd=i(n.domainEnd),t._codomainStart=i(n.codomainStart),t._codomainEnd=i(n.codomainEnd),t._domainDelta=t._domainEnd-t._domainStart,t._codomainDelta=t._codomainEnd-t._codomainStart,t},getDomainStart:function(){return this._domainStart},getDomainEnd:function(){return this._domainEnd},getCodomainStart:function(){return this._codomainStart},getCodomainEnd:function(){return this._codomainEnd},getDomainRange:function(){return this._domainDelta},getCodomainRange:function(){return this._codomainDelta},translate:function(n){var t=this,i=(n-t._domainStart)/t._domainDelta;return 0<=i&&i<=1?t._codomainStart+i*t._codomainDelta:r},adjust:function(n){var t=this,u=(n-t._domainStart)/t._domainDelta,f=r;return u<0?f=t._domainStart:u>1?f=t._domainEnd:0<=u&&u<=1&&(f=i(n)),f}})}(DevExpress),function(n,t,i){var u=t.utils,r=t.viz.core,f=u.getLog,e=["width","height","left","top","bottom","right"];r.Translator2D=t.Class.inherit(function(){var o=function(n,t){this.canvas=s(t),this.updateBusinessRange(n)},s=function(t){return n.each(e,function(n,i){var r=t[i];t[i]=parseInt(r)||0}),t},h=function(){var n=this;n.canvas=null,n.businessRange.dispose(),n.businessRange=null,n.categoriesXToPoints=null,n.categoriesYToPoints=null,n.categories=null},c=function(){var t=this,n=t.canvas;t.width=n.width-n.left-n.right,t.height=n.height-n.top-n.bottom,t._set("X"),t._set("Y")},l=function(n,t){var i=this.businessRange,r=i["axisType"+n];return u.isDefined(r)||(r=t.length?i["axisType"+n]="discrete":u.isNumber(i["min"+n])?i["axisType"+n]="numeric":u.isDate(i["min"+n])?i["axisType"+n]="datetime":i["axisType"+n]="numeric"),r},a=function(n){var i=this,s=i.businessRange,f=i.businessRange["categories"+n]||[],u={},e,h=i._determineAxisType(n,f),o;n==="X"?(e="width",o="horizontal"):(e="height",o="vertical");switch(h){case"logarithmic":u=r.LogarifmicTranslator;break;case"discrete":u=r.CategoryTranslator,i["categories"+n+"Number"]=f.length,i.categories=f,i[o+"Interval"]=s["stick"+n]?i[e]/(i["categories"+n+"Number"]-1):i[e]/i["categories"+n+"Number"],i["categories"+n+"ToPoints"]=t(f,i.businessRange["invert"+n]);break;case"datetime":u=r.DatetimeTranslator;break;default:u=r.NumericTranslator}return i["translate"+n]=u.createTranslator(n),i["untranslate"+n]=u.createUnTransltator(n),i["getInterval"+n]=u.createGetIntervalFunction(n),u},v=function(n){this.businessRange=n,n.minVisibleX===i&&(n.minVisibleX=n.minX),n.maxVisibleX===i&&(n.maxVisibleX=n.maxX),n.minVisibleY===i&&(n.minVisibleY=n.minY),n.maxVisibleY===i&&(n.maxVisibleY=n.maxY),this.init()},y=function(){return this.businessRange},p=function(){var t=this.businessRange,n={};return n.minX=t.minVisibleX,n.maxX=t.maxVisibleX,n.minY=t.minVisibleY,n.maxY=t.maxVisibleY,n.axisTypeX=t.axisTypeX,n.axisTypeY=t.axisTypeY,n.axisTypeX==="logarithmic"&&(n.baseX=t.baseX),n.axisTypeY==="logarithmic"&&(n.baseY=t.baseY),t.categoriesX&&(n.categoriesX=t.categoriesX,n.minCategoryXPos=0,n.maxCategoryXPos=n.minCategoryXPos+n.categoriesX.length-1),t.categoriesY&&(n.categoriesY=t.categoriesY,n.minCategoryYPos=0,n.maxCategoryYPos=n.minCategoryYPos+n.categoriesY.length-1),n},w=function(){var n=this.canvas;return{minX:n.left,maxX:n.width-n.right,minY:n.top,maxY:n.height-n.bottom}},t=function(n,t){var u={},r,i;if(t)for(i=n.length-1;i>=0;i--)r=n[n.length-1-i],u[r]={name:r,index:i};else for(i=0;i<n.length;i++)r=n[i],u[r]={name:r,index:i};return u},b=function(n,t,i){var e=(t+"").match(/canvas_position_(.*)/),r=n.canvas,o,u=n.businessRange,f;if(e){if(t=e[1],t==="default")return u["minVisible"+i]<=0&&u["maxVisible"+i]>=0?n["translate"+i](0):i==="X"?(f=u.invertX^(u.minVisibleX<=0&&u.maxVisibleX<=0),f?r.left+n.width:r.left):(f=u.invertY^(u.minVisibleY<=0&&u.maxVisibleY<=0),f?r.top:r.top+n.height);if(i==="X"){if(t==="left")return r.left;if(t==="center")return r.left+n.width/2;if(t==="right")return r.left+n.width}else{if(t==="bottom")return r.top+n.height;if(t==="middle")return r.top+n.height/2;if(t==="top")return r.top}}return null},k=function(n){var t={},i=this;return n[0]==="X"?(t.startPoint=i.canvas.left,t.lengthCanvas=i.canvas.width,t.endPoint=i.canvas.width-i.canvas.right,t.rangeMin=i.businessRange.minX,t.rangeMax=i.businessRange.maxX,t.rangeMinVisible=i.businessRange.minVisibleX,t.rangeMaxVisible=i.businessRange.maxVisibleX,t.invert=i.businessRange.invertX,t.interval=i.horizontalInterval,t.length=i.width,t.base=i.businessRange.baseX):n[0]==="Y"&&(t.startPoint=i.canvas.top,t.lengthCanvas=i.canvas.height,t.endPoint=i.canvas.height-i.canvas.bottom,t.rangeMin=i.businessRange.minY,t.rangeMax=i.businessRange.maxY,t.rangeMinVisible=i.businessRange.minVisibleY,t.rangeMaxVisible=i.businessRange.maxVisibleY,t.invert=!i.businessRange.invertY,t.interval=i.verticalInterval,t.length=i.height,t.base=i.businessRange.baseY),n.indexOf("log")!==-1&&(t.rangeMaxVisible=f(t.rangeMaxVisible,t.base),t.rangeMinVisible=f(t.rangeMinVisible,t.base),t.rangeMin=f(t.rangeMin,t.base),t.rangeMax=f(t.rangeMax,t.base)),t.ranges=t.rangeMin&&t.rangeMin.valueOf(),t.ratioCanvasOfRange=t.length/(t.rangeMaxVisible-t.rangeMinVisible),t},d=function(n,t){var i=this._getCanvasRange(t),r=i.invert?i.endPoint:i.startPoint;return i.invert?r-n:r+n},g=function(n,t){var i=this._getCanvasRange(t),r=i.invert?i.rangeMaxVisible:i.rangeMinVisible;return i.invert?r.valueOf()-n:r.valueOf()+n};return{ctor:o,dispose:h,init:c,makeCategoriesToPoints:t,translateSpecialCases:b,getCanvasVisibleArea:w,getBusinessVisibleArea:p,updateBusinessRange:v,getBusinessRange:y,_determineAxisType:l,_getCanvasRange:k,_set:a,_calculateProjection:d,_calculateUnProjection:g}}())}(jQuery,DevExpress),function(n){var i=window.isFinite;n.viz.core.Rectangle=n.Class.inherit({ctor:function(n){var t=this;n=n||{},t.left=Number(n.left)||0,t.right=Number(n.right)||0,t.top=Number(n.top)||0,t.bottom=Number(n.bottom)||0},width:function(){return this.right-this.left},height:function(){return this.bottom-this.top},horizontalMiddle:function(){return(this.left+this.right)/2},verticalMiddle:function(){return(this.top+this.bottom)/2},raw:function(){var n=this;return{left:n.left,top:n.top,right:n.right,bottom:n.bottom}},clone:function(){return new this.constructor(this.raw())},move:function(n,t){var r=this.clone();return i(n)&&i(t)&&(r.left+=Number(n),r.right+=Number(n),r.top+=Number(t),r.bottom+=Number(t)),r},inflate:function(n,t){var r=this.clone();return i(n)&&i(t)&&(r.left-=Number(n),r.right+=Number(n),r.top-=Number(t),r.bottom+=Number(t)),r},scale:function(n){var t=this;return n>0?t.inflate(t.width()*(n-1)/2,t.height()*(n-1)/2):t.clone()}})}(DevExpress),function(n,t,i){var r=t.viz,u=r.core,e=0,f=function(n){for(var i=r.themes,t=0;t<i.length;t++)if(i[t].name===n)return t;return-1};u.findTheme=function(n){var t=f(n),i=r.themes;return t<0&&(t=e),i[t]},u.currentTheme=function(n,t,u){var o=-1,s=r.themes;if(n===i)return s[e].name;u&&t&&(o=f(n+":"+u+"-"+t)),o<0&&u&&(o=f(n+":"+u)),t&&o<0&&(o=f(n+"-"+t)),o<0&&(o=f(n)),e=o>=0?o:0},u.registerTheme=function(t,i){var f,e,o=r.themes;t&&t.name&&u.findTheme(t.name)&&(f=u.findTheme(i),f?(e=n.extend(!0,{},f,t),o.push(e)):o.push(t))}}(jQuery,DevExpress),function(n,t,i){function a(n){if(n===i)return s;n=String(n).toLowerCase(),s=n in r?n:"default"}function h(n,t){var i,f;if(u(n))i=n;else{if(t=t||{},f=t.type||"simpleSet",l(n)){var o=n.toLowerCase(),h=r[o],c=t.theme&&r[o+"_"+e(t.theme).toLowerCase()];i=c&&c[f]||h&&h[f]}i||(i=r[s][f])}return i?i.slice(0):null}function v(n,t,f){var s={},h;u(t)?s.simpleSet=t.slice(0):t&&(s.simpleSet=u(t.simpleSet)?t.simpleSet.slice(0):i,s.indicatingSet=u(t.indicatingSet)?t.indicatingSet.slice(0):i,s.gradientSet=u(t.gradientSet)?t.gradientSet.slice(0):i),(s.simpleSet||s.indicatingSet||s.gradientSet)&&(h=e(n).toLowerCase(),f&&(h=h+"_"+e(f).toLowerCase()),o(r[h]=r[h]||{},s))}function y(n){var t=0;this.next=function(){var i=n[t++];return t==n.length&&this.reset(),i},this.reset=function(){t=0}}function c(n,t){t=t||{},this._originalPalette=h(n,t);var i=t?t.stepHighlight||0:0;this._paletteSteps=new y([0,i,-i]),this._resetPalette()}function p(n,t){var i=new f(n).alter(t),r=w(i);return(r>200||r<55)&&(i=new f(n).alter(-t/2)),i.toHex()}function w(n){return n.r*.3+n.g*.59+n.b*.11}function b(n,t){var i=h(n,{type:"gradientSet"});i=t>0?k(i[0],i[1],t):[],this.getColor=function(n){return i[n]||null}}function k(n,t,i){var e=new f(n),o=new f(t);if(i===1)return[e.blend(o,.5).toHex()];var u=[],h=1/(i-1),r,s=i;for(u.push(0),r=1;r<s-1;++r)u.push(h*r);for(u.push(1),r=0;r<s;++r)u[r]=e.blend(o,u[r]).toHex();return u}var e=window.String,f=n.Color,u=n.utils.isArray,l=n.utils.isString,o=t.extend,r={"default":{simpleSet:["#5f8b95","#ba4d51","#af8a53","#955f71","#859666","#7e688c"],indicatingSet:["#a3b97c","#e1b676","#ec7f83"],gradientSet:["#5f8b95","#ba4d51"]},"harmony light":{simpleSet:["#fcb65e","#679ec5","#ad79ce","#7abd5c","#e18e92","#b6d623","#b7abea","#85dbd5"],indicatingSet:["#b6d623","#fcb65e","#e18e92"],gradientSet:["#7abd5c","#fcb65e"]},"soft pastel":{simpleSet:["#60a69f","#78b6d9","#6682bb","#a37182","#eeba69","#90ba58","#456c68","#7565a4"],indicatingSet:["#90ba58","#eeba69","#a37182"],gradientSet:["#78b6d9","#eeba69"]},pastel:{simpleSet:["#bb7862","#70b3a1","#bb626a","#057d85","#ab394b","#dac599","#153459","#b1d2c6"],indicatingSet:["#70b3a1","#dac599","#bb626a"],gradientSet:["#bb7862","#70b3a1"]},bright:{simpleSet:["#70c92f","#f8ca00","#bd1550","#e97f02","#9d419c","#7e4452","#9ab57e","#36a3a6"],indicatingSet:["#70c92f","#f8ca00","#bd1550"],gradientSet:["#e97f02","#f8ca00"]},soft:{simpleSet:["#cbc87b","#9ab57e","#e55253","#7e4452","#e8c267","#565077","#6babac","#ad6082"],indicatingSet:["#9ab57e","#e8c267","#e55253"],gradientSet:["#9ab57e","#e8c267"]},ocean:{simpleSet:["#75c099","#acc371","#378a8a","#5fa26a","#064970","#38c5d2","#00a7c6","#6f84bb"],indicatingSet:["#c8e394","#7bc59d","#397c8b"],gradientSet:["#acc371","#38c5d2"]},vintage:{simpleSet:["#dea484","#efc59c","#cb715e","#eb9692","#a85c4c","#f2c0b5","#c96374","#dd956c"],indicatingSet:["#ffe5c6","#f4bb9d","#e57660"],gradientSet:["#efc59c","#cb715e"]},violet:{simpleSet:["#d1a1d1","#eeacc5","#7b5685","#7e7cad","#a13d73","#5b41ab","#e287e2","#689cc1"],indicatingSet:["#d8e2f6","#d0b2da","#d56a8a"],gradientSet:["#eeacc5","#7b5685"]}},s="default";o(c.prototype,{dispose:function(){return this._originalPalette=this._palette=this._paletteSteps=null,this},getNextColor:function(){var n=this;return n._currentColor>=n._palette.length&&n._resetPalette(),n._palette[n._currentColor++]},_resetPalette:function(){var n=this,r,t;if(n._currentColor=0,r=n._paletteSteps.next(),t=n._originalPalette,r)for(var u=n._palette=[],i=0,f=t.length;i<f;++i)u[i]=p(t[i],r);else n._palette=t.slice(0)},reset:function(){return this._paletteSteps.reset(),this._resetPalette(),this}}),o(n.viz.core,{registerPalette:v,getPalette:h,Palette:c,GradientPalette:b,currentPalette:a})}(DevExpress,jQuery),function(n,t){var u=n.utils.isString,f=n.viz.core.findTheme,r=t.extend,e=t.each;n.viz.core.BaseThemeManager=n.Class.inherit({dispose:function(){return this._theme=this._font=null,this},setTheme:function(n){n=n||{};var t=this,i=f(u(n)?n:n.name);return t._themeName=i.name,t._font=r({},i.font,n.font),t._themeSection&&e(t._themeSection.split("."),function(n,u){i=t._IE8?r(!0,{},i[u],i[u+"IE8"]):i[u]}),t._theme=r(!0,{},i,u(n)?{}:n),t._initializeTheme(),t},theme:function(){return this._theme},themeName:function(){return this._themeName},_initializeTheme:function(){},_initializeFont:function(n){r(n,this._font,r({},n))}})}(DevExpress,jQuery),function(n){var i=Math.min;n.viz.core.TextCloud=n.Class.inherit(function(){var t={horMargin:8,verMargin:4,tailLength:10},n={};return n["right-bottom"]=n.rb=[0,-1,-1,0,0,1,1,0],n["bottom-right"]=n.br=[-1,0,0,-1,1,0,0,1],n["left-bottom"]=n.lb=[0,-1,1,0,0,1,-1,0],n["bottom-left"]=n.bl=[1,0,0,-1,-1,0,0,1],n["left-top"]=n.lt=[0,1,1,0,0,-1,-1,0],n["top-left"]=n.tl=[1,0,0,1,-1,0,0,-1],n["right-top"]=n.rt=[0,1,-1,0,0,-1,1,0],n["top-right"]=n.tr=[-1,0,0,1,1,0,0,-1],{setup:function(r){var e=this,f=$.extend({},t,r),h=f.x,c=f.y,u=n[f.type],o=f.textWidth+2*f.horMargin,s=f.textHeight+2*f.verMargin,l=f.tailLength,a=l,v=h,y=c;return u[0]&1?a=i(a,s/3):l=i(l,o/3),e._points=[h,c,h+=u[0]*(o+l),c+=u[1]*(s+a),h+=u[2]*o,c+=u[3]*s,h+=u[4]*o,c+=u[5]*s,h+=u[6]*(o-l),c+=u[7]*(s-a)],e._cx=v+u[0]*l+(u[0]+u[2])*o/2,e._cy=y+u[1]*a+(u[1]+u[3])*s/2,e._cloudWidth=o,e._cloudHeight=s,e._tailLength=f.tailLength,e},points:function(){return this._points.slice(0)},cx:function(){return this._cx},cy:function(){return this._cy},width:function(){return this._cloudWidth},height:function(){return this._cloudHeight},tailLength:function(){return this._tailLength}}}())}(DevExpress),function(n,t){var r=t.viz,u=r.core,f=t.Class,i=t.utils.isDefined,e=f.inherit({ctor:function(t){t=t||{},this._incidentOccured=n.isFunction(t.incidentOccured)?t.incidentOccured:n.noop},correctValueType:function(n){return n==="numeric"||n==="datetime"||n==="string"?n:""},_parsers:{string:function(n){return i(n)?""+n:n},numeric:function(n){if(!i(n))return n;var t=Number(n);return isNaN(t)&&(t=undefined),t},datetime:function(n){if(!i(n))return n;var t,r=Number(n);return t=isNaN(r)?new Date(n):new Date(r),isNaN(Number(t))&&(t=undefined),t}},getParser:function(t,i){var u=this,r,f="valueType is unknown.";return i&&(f='The type specified as the "valueType" field of the '+i+" configuration object is unknown."),t=u.correctValueType(t),r=u._parsers[t],r||this._incidentOccured.call(null,f),r||n.noop}});u.ParseUtils=e}(jQuery,DevExpress),function(n,t){var u=t.viz,f=u.core,e={easing:"linear",duration:150},i={x:-1e4,y:-1e4},r=function(n,t,i,r){var u=n.animation;u&&(u.options.complete=null,u.stop()),i?n.animate(t,{complete:r}):(n.applySettings(t),r&&r())},o=t.Class.inherit({ctor:function(t,i){var r=this;r._$widgetContainer=n(i),r._$container=n("<div>",{css:{position:"relative",height:0,padding:0,margin:0,border:0}}).appendTo(r._$widgetContainer),r._updateContainer(),r.applyOptions(t),r._endLoadingCompleteHandler=function(){r._endLoad=!1,r._externalComplete&&r._externalComplete(),r._externalComplete=null,r._onCompleteAction&&r[r._onCompleteAction](),r._onCompleteAction=null},r._$container.hide()},_updateRenderer:function(n,t,i){return this._renderer?this._renderer.recreateCanvas(n,t):this._$container.get(0)&&(this._renderer=new u.renderers.Renderer({width:n,height:t,animation:e}),this._renderer.draw(this._$container[0])),this._renderer&&this._renderer.getRoot().applySettings({style:{position:"absolute",top:i,left:0}}),this._renderer},applyOptions:function(n,t,i){var r=this._pane;r&&n&&(r.rect.applySettings({fill:n.backgroundColor}),r.text.applySettings({font:n.font,text:n.text})),this.isShown&&(t||i)&&this._updateContainer(t,i)},_draw:function(){var n,t=this._renderer;t&&(n=this._pane={},n.rect=t.createRect(0,0,0,0,0,{opacity:0}).append(),n.text=t.createText("",0,0,{align:"center",translateX:i.x,translateY:i.y}).append())},_updateContainer:function(n,t){var i=this,r=i._$widgetContainer,u;n=n||r.width(),t=t||r.height(),u=r.get(0)?r.offset().top-i._$container.offset().top:-t,i._updateRenderer(n,t,u),i._pane?(i._pane.rect.applySettings({width:n,height:t}),i._pane.text.move(n/2,t/2)):i._draw()},dispose:function(){this._$widgetContainer=null,this._$container.remove().detach(),this._$container=null,this._renderer.dispose(),this._renderer=null,this._pane=null},toForeground:function(){this._$container.appendTo(this._$widgetContainer)},show:function(n,t){if(this._endLoad){this._onCompleteAction="show";return}this._$container.show(),this._updateContainer(n,t),r(this._pane.rect,{opacity:.85},!0),this.isShown=!0},endLoading:function(n,t){(this._externalComplete=n,this._endLoad)||(this.isShown?(this._endLoad=!0,r(this._pane.rect,{opacity:1},!t,this._endLoadingCompleteHandler)):n&&n())},hide:function(){var n=this;if(this._endLoad){this._onCompleteAction="hide";return}this.isShown&&(this._pane.text.move(i.x,i.y),r(n._pane.rect,{opacity:0},!0,function(){n._$container.hide()}),this.isShown=!1)}});f.loadIndicatorMixin={base:{_showLoadIndicator:function(n,t){var i=this;i._loadIndicator=this._loadIndicator||new o(n,i._element()),i._loadIndicator.show(t.width,t.height),i._initializing&&i._loadIndicator.endLoading(undefined,!0)},showLoadingIndicator:function(){this._showLoadIndicator(this.option("loadingIndicator"),this.canvas||{})},hideLoadingIndicator:function(){this._loadIndicator&&this._loadIndicator.hide()},_updateLoadIndicator:function(n,t,i){this._loadIndicator&&this._loadIndicator.applyOptions(n,t,i)},_endLoading:function(n){this._loadIndicator?this._loadIndicator.endLoading(n):n&&n()},_reappendLoadIndicator:function(){this._loadIndicator&&this._loadIndicator.toForeground()},_disposeLoadIndicator:function(){this._loadIndicator&&this._loadIndicator.dispose(),this._loadIndicator=null}},gauge:{showLoadingIndicator:function(){this._showLoadIndicator(n.extend(!0,{},this._themeManager.getPartialTheme("loadingIndicator"),this.option("loadingIndicator")),this._canvas||{})}},map:{showLoadingIndicator:function(){this._showLoadIndicator(this._themeManager.getLoadIndicatorSettings(this.option("loadingIndicator")),{width:this._width,height:this.height})}}}}(jQuery,DevExpress),function(n,t){function i(n){var t,r,i=0,u=!0;return n.replace(/<g\s*class\s*=\s*"dxc-trackers"[^>]*>/i,function(n,i){t=i}),t?(n.substring(t).replace(/<\s*\/?g/gi,function(n,t){u&&(/<\s*g/i.test(n)?i++:i--,i==0&&(r=t+n.length+1,u=!1))}),n.substring(0,t)+n.substring(t+r)):n}t.viz.core.widgetMarkupMixin={svg:function(){var n=this.renderer||this._renderer;return n?this._normalizeHtml(n.svg()):""},_normalizeHtml:function(n){var r=/xmlns="[\s\S]*?"/gi,t=!0;return n=n.replace(r,function(n){return t?(t=!1,n):""}),n=n.replace(/xmlns:NS1="[\s\S]*?"/gi,"").replace(/NS1:xmlns:xlink="([\s\S]*?)"/gi,'xmlns:xlink="$1"'),i(n)}}}(jQuery,DevExpress),function(n,t,i){t.viz.themes=t.viz.themes||[];var r="'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana",u="'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana";t.viz.themes.push({name:"desktop",font:{color:"#767676",family:r,weight:400,size:12,cursor:"default"},chart:{containerBackgroundColor:"#ffffff",commonSeriesSettings:{border:{visible:!1,width:2},hoverMode:"excludePoints",selectionMode:"includePoints",hoverStyle:{hatching:{direction:"right",width:2,step:6,opacity:.75},border:{visible:!1,width:3}},selectionStyle:{hatching:{direction:"right",width:2,step:6,opacity:.5},border:{visible:!1,width:3}},point:{visible:!0,symbol:"circle",size:6,border:{visible:!1,width:1},hoverMode:"onlyPoint",selectionMode:"onlyPoint",hoverStyle:{border:{visible:!0,width:4},size:6},selectionStyle:{border:{visible:!0,width:4},size:6}},label:{font:{color:"#ffffff"},border:{visible:!1,width:1,color:"#d3d3d3",dashStyle:"solid"},connector:{visible:!1,width:1}},scatter:{},line:{width:2,dashStyle:"solid",hoverStyle:{width:3,hatching:{direction:"none"}},selectionStyle:{width:3}},stackedline:{width:2,dashStyle:"solid",hoverStyle:{width:3,hatching:{direction:"none"}},selectionStyle:{width:3}},fullstackedline:{width:2,dashStyle:"solid",hoverStyle:{width:3,hatching:{direction:"none"}},selectionStyle:{width:3}},stepline:{width:2,dashStyle:"solid",hoverStyle:{width:3,hatching:{direction:"none"}},selectionStyle:{width:3}},area:{point:{visible:!1}},stackedarea:{point:{visible:!1}},fullstackedarea:{point:{visible:!1}},steparea:{border:{visible:!0,width:2},point:{visible:!1},hoverStyle:{border:{visible:!0,width:3}},selectionStyle:{border:{visible:!0,width:3}}},spline:{width:2,hoverStyle:{width:3,hatching:{direction:"none"}},selectionStyle:{width:3}},splinearea:{point:{visible:!1}},bar:{cornerRadius:0,point:{hoverStyle:{border:{visible:!1}},selectionStyle:{border:{visible:!1}}}},stackedbar:{cornerRadius:0,point:{hoverStyle:{border:{visible:!1}},selectionStyle:{border:{visible:!1}}}},fullstackedbar:{cornerRadius:0,point:{hoverStyle:{border:{visible:!1}},selectionStyle:{border:{visible:!1}}}},rangebar:{cornerRadius:0,point:{hoverStyle:{border:{visible:!1}},selectionStyle:{border:{visible:!1}}}},rangearea:{point:{visible:!1}},rangesplinearea:{point:{visible:!1}},pie:{border:{visible:!1,width:2,color:"#ffffff"},hoverStyle:{hatching:{direction:"right",width:4,step:10,opacity:.75},border:{visible:!1,width:2}},selectionStyle:{hatching:{direction:"right",width:4,step:10,opacity:.5},border:{visible:!1,width:2}}},doughnut:{innerRadius:.5},donut:{innerRadius:.5},bubble:{opacity:.5,point:{hoverStyle:{border:{visible:!1}},selectionStyle:{border:{visible:!1}}}},candlestick:{width:1,innerColor:"#ffffff",reduction:{color:"#ff0000"},hoverStyle:{width:3,hatching:{direction:"none"}},selectionStyle:{width:3},point:{border:{visible:!0}}},stock:{width:1,reduction:{color:"#ff0000"},hoverStyle:{width:3,hatching:{direction:"none"}},selectionStyle:{width:3},point:{border:{visible:!0}}}},legend:{verticalAlignment:"top",horizontalAlignment:"right",position:"outside",visible:!0,customizeText:i,itemTextPosition:i,margin:10,equalColumnWidth:!1,markerSize:12,backgroundColor:i,border:{visible:!1,width:1,color:"#d3d3d3",cornerRadius:0,dashStyle:"solid"},paddingLeftRight:20,paddingTopBottom:15,columnCount:0,rowCount:0,columnItemSpacing:20,rowItemSpacing:8},tooltip:{enabled:!1,font:{family:u,weight:200,size:26,color:"#ffffff"},shared:!1,arrowLength:10,paddingLeftRight:22,paddingTopBottom:6,format:"",argumentFormat:"",precision:0,argumentPrecision:0,percentPrecision:0,customizeText:i},loadingIndicator:{font:{},backgroundColor:"#ffffff",text:"Loading..."},title:{font:{family:u,weight:200,color:"#232323",size:28}},crosshair:{enabled:!1,color:"#c6c6c6",width:1,dashStyle:"solid",verticalLine:{visible:!0},horizontalLine:{visible:!0}},commonAxisSettings:{discreteAxisDivisionMode:"betweenLabels",visible:!1,color:"#d3d3d3",width:1,multipleAxesSpacing:5,label:{visible:!0,overlappingBehavior:{mode:"auto",rotationAngle:90,staggeringSpacing:5},precision:0,format:"",customizeText:i,indentFromAxis:10},grid:{visible:!1,color:"#d3d3d3",width:1},tick:{visible:!1,color:"#d3d3d3"},title:{font:{size:16},margin:10},stripStyle:{paddingLeftRight:10,paddingTopBottom:5},constantLineStyle:{paddingLeftRight:10,paddingTopBottom:10,width:1,color:"#000000",dashStyle:"solid",label:{visible:!0,position:"inside"}}},horizontalAxis:{isHorizontal:!0,position:"bottom",axisDivisionFactor:50,label:{alignment:"center"},stripStyle:{label:{horizontalAlignment:"center",verticalAlignment:"top"}},constantLineStyle:{label:{horizontalAlignment:"right",verticalAlignment:"top"}},constantLines:{}},verticalAxis:{isHorizontal:!1,position:"left",axisDivisionFactor:30,label:{alignment:"right",overlappingBehavior:{mode:"enlargeTickInterval"}},stripStyle:{label:{horizontalAlignment:"left",verticalAlignment:"center"}},constantLineStyle:{label:{horizontalAlignment:"left",verticalAlignment:"top"}},constantLines:{}},argumentAxisStyle:{},valueAxisStyle:{grid:{visible:!0}},commonPaneSettings:{border:{color:"#d3d3d3",width:1}},dataPrepareSettings:{checkTypeForAllData:!1,convertToAxisDataType:!0,sortingMethod:!0},useAggregation:!1},chartIE8:{commonSeriesSettings:{pie:{hoverStyle:{border:{visible:!0,color:"#ffffff"}},selectionStyle:{border:{visible:!0,color:"#ffffff"}}}}},gauge:{containerBackgroundColor:"#ffffff",scale:{majorTick:{color:"#ffffff"},minorTick:{color:"#ffffff"},label:{font:{}}},rangeContainer:{backgroundColor:"#808080"},valueIndicator:{_default:{color:"#c2c2c2"},rangebar:{color:"#cbc5cf",backgroundColor:"none",text:{font:{size:14,color:null}}},twocolorneedle:{secondColor:"#e18e92"},twocolorrectangle:{secondColor:"#e18e92"}},subvalueIndicator:{_default:{color:"#8798a5"},textcloud:{text:{font:{color:"#ffffff",size:18}}}},valueIndicators:{_default:{color:"#c2c2c2"},rangebar:{color:"#cbc5cf",backgroundColor:"none",text:{font:{size:14,color:null}}},twocolorneedle:{secondColor:"#e18e92"},trianglemarker:{color:"#8798a5"},textcloud:{color:"#679ec5",text:{font:{color:"#ffffff",size:18}}}},title:{font:{size:16,color:"#232323",family:r,weight:400}},subtitle:{font:{size:14,color:"#232323",family:r,weight:400}},indicator:{text:{font:{size:18}}},tooltip:{font:{color:"#ffffff",size:26,family:u,weight:200}},loadingIndicator:{font:{},backgroundColor:"#ffffff",text:"Loading..."}},barGauge:{backgroundColor:"#e0e0e0",relativeInnerRadius:.3,barSpacing:4,label:{indent:20,connectorWidth:2,font:{size:16}},title:{layout:{position:"top-center",overlay:0},font:{size:16,color:"#232323",family:r,weight:400}},subtitle:{font:{size:14,color:"#232323",family:r,weight:400}},tooltip:{horizontalPadding:22,verticalPadding:6,arrowLength:10,font:{size:26,color:"#ffffff",family:u,weight:200}},loadingIndicator:{font:{},backgroundColor:"#ffffff",text:"Loading..."}},rangeSelector:{containerBackgroundColor:"#ffffff",scale:{label:{topIndent:7,font:{size:11}},tick:{width:1,color:"#e5e5e5"},marker:{separatorHeight:33,topIndent:10,textLeftIndent:7,textTopIndent:11}},loadingIndicator:{font:{},backgroundColor:"#ffffff",text:"Loading..."},sliderMarker:{padding:7,pointerSize:6,color:"#9b9b9b",invalidRangeColor:"#ff0000",font:{color:"#ffffff",size:11}},sliderHandle:{width:1,color:"#e5e5e5"},shutter:{color:i,opacity:.75},background:{color:"#c0bae1"},chart:{containerBackgroundColor:i,commonSeriesSettings:{border:{visible:!1,width:1},hoverStyle:{border:{}},selectionStyle:{border:{}},point:{visible:!1,symbol:"circle",border:{visible:!1,width:1},size:6,hoverStyle:{border:{}},selectionStyle:{border:{}}},line:{width:2},scatter:{point:{visible:!0}},stackedline:{width:2},fullstackedline:{width:2},area:{},stackedarea:{},fullstackedarea:{},spline:{width:2},splinearea:{},bar:{cornerRadius:0},stackedbar:{cornerRadius:0},fullstackedbar:{cornerRadius:0},rangebar:{cornerRadius:0},rangearea:{},rangesplinearea:{},pie:{},candlestick:{width:1,innerColor:"#ffffff",reduction:{color:"#ff0000"}},stock:{width:1,reduction:{color:"#ff0000"}}},dataPrepareSettings:{checkTypeForAllData:!1,convertToAxisDataType:!0,sortingMethod:!0},useAggregation:!1}},map:{background:{borderWidth:1,borderColor:"#cacaca",color:"#ffffff"},area:{borderWidth:1,borderColor:"#ffffff",color:"#d2d2d2",hoveredBorderWidth:1,hoveredBorderColor:"#303030",hoveredColor:null,selectedBorderWidth:2,selectedBorderColor:"#303030",selectedColor:null,hoveredClass:"dxm-area-hovered",selectedClass:"dxm-area-selected"},loadingIndicator:{backgroundColor:"#ffffff",font:{},text:"Loading..."},marker:{borderWidth:2,borderColor:"#ffffff",color:"#ba4d51",size:4,selectedStep:1,extraStep:9,font:{color:"#2b2b2b",size:12},"class":null,hoveredClass:"dxm-marker-hovered",selectedClass:"dxm-marker-selected",extraColor:"#ffffff",extraOpacity:.32},controlBar:{borderColor:"#5d5d5d",borderWidth:3,color:"#ffffff"},tooltip:{borderWidth:1,borderColor:"#d7d7d7",color:"#ffffff",font:{color:"#2b2b2b",size:14}},legend:{horizontalIndent:10,verticalIndent:10,horizontalPadding:16,verticalPadding:12,maxWidth:400,maxHeight:400,textIndent:8,itemSpacing:4,itemSize:12,borderWidth:1,borderColor:"#cacaca",opacity:.65,color:"#ffffff",font:{color:"#2b2b2b",size:12}}},sparkline:{lineColor:"#666666",lineWidth:2,areaOpacity:.2,minColor:"#e8c267",maxColor:"#e55253",barPositiveColor:"#a9a9a9",barNegativeColor:"#d7d7d7",winColor:"#a9a9a9",lossColor:"#d7d7d7",firstLastColor:"#666666",pointSymbol:"circle",pointColor:"#ffffff",pointSize:2,tooltip:{enabled:!0,allowContainerResizing:!0,verticalAlignment:"top",horizontalAlignment:"center",format:"",paddingLeftRight:14,paddingTopBottom:10,arrowLength:10,precision:0,color:"#666666",opacity:.9,font:{color:"#ffffff",family:"Segoe UI",size:12,weight:200}}},bullet:{color:"#e8c267",targetColor:"#666666",targetWidth:4,showTarget:!0,showZeroLevel:!0,tooltip:{enabled:!0,allowContainerResizing:!0,verticalAlignment:"top",horizontalAlignment:"center",format:"",precision:0,paddingLeftRight:14,paddingTopBottom:10,arrowLength:10,color:"#666666",opacity:.9,font:{color:"#ffffff",family:"Segoe UI",size:12,weight:200}}}}),t.viz.core.registerTheme({name:"desktop-dark",font:{color:"#808080"},chart:{containerBackgroundColor:"#2b2b2b",commonSeriesSettings:{label:{border:{color:"#494949"}}},legend:{border:{color:"#494949"}},loadingIndicator:{backgroundColor:"#2b2b2b"},title:{font:{color:"#929292"}},crosshair:{color:"#515151"},commonAxisSettings:{color:"#494949",grid:{color:"#494949"},tick:{color:"#494949"},constantLineStyle:{color:"#ffffff"}},commonPaneSettings:{border:{color:"#494949"}}},gauge:{containerBackgroundColor:"#2b2b2b",scale:{majorTick:{color:"#303030"},minorTick:{color:"#303030"}},rangeContainer:{backgroundColor:"#b5b5b5"},valueIndicator:{_default:{color:"#b5b5b5"},rangebar:{color:"#84788b"},twocolorneedle:{secondColor:"#ba544d"},twocolorrectangle:{secondColor:"#ba544d"}},subvalueIndicator:{_default:{color:"#b7918f"}},valueIndicators:{_default:{color:"#b5b5b5"},rangebar:{color:"#84788b"},twocolorneedle:{secondColor:"#ba544d"},trianglemarker:{color:"#b7918f"},textcloud:{color:"#ba544d"}},title:{font:{color:"#929292"}},subtitle:{font:{color:"#929292"}},loadingIndicator:{backgroundColor:"#2b2b2b"}},barGauge:{title:{font:{color:"#929292"}},subtitle:{font:{color:"#929292"}},loadingIndicator:{backgroundColor:"#2b2b2b"}},rangeSelector:{containerBackgroundColor:"#2b2b2b",scale:{tick:{color:"#363636"}},loadingIndicator:{backgroundColor:"#2b2b2b"},sliderMarker:{color:"#b5b5b5",font:{color:"#303030"}},sliderHandle:{color:"#757575"},shutter:{color:"#2b2b2b",opacity:.9}},map:{background:{borderColor:"#3f3f3f",color:"#303030"},area:{borderColor:"#303030",color:"#686868",hoveredBorderColor:"#ffffff",selectedBorderColor:"#ffffff"},loadingIndicator:{backgroundColor:"#2b2b2b"},marker:{font:{color:"#ffffff"}},controlBar:{borderColor:"#c7c7c7",color:"#303030"},legend:{borderColor:"#3f3f3f",color:"#303030",font:{color:"#ffffff"}}},sparkline:{lineColor:"#c7c7c7",firstLastColor:"#c7c7c7",barPositiveColor:"#b8b8b8",barNegativeColor:"#8e8e8e",winColor:"#b8b8b8",lossColor:"#8e8e8e",pointColor:"#303030",tooltip:{color:"#c7c7c7",font:{color:"#303030"}}},bullet:{targetColor:"#8e8e8e",tooltip:{color:"#c7c7c7",font:{color:"#303030"}}}},"desktop")}(jQuery,DevExpress),function(n,t){t.viz.core.registerTheme({name:"android",chart:{containerBackgroundColor:"#050506",title:{font:{color:"#ffffff"}},commonSeriesSettings:{label:{border:{color:"#4c4c4c"}}},commonAxisSettings:{color:"#4c4c4c",grid:{color:"#4c4c4c"},tick:{color:"#4c4c4c"},title:{font:{color:"#545455"}},label:{font:{color:"#ffffff",size:11}}},commonPaneSettings:{border:{color:"#4c4c4c"}},legend:{font:{color:"#ffffff",size:11},border:{color:"#4c4c4c"}},loadingIndicator:{backgroundColor:"#050506"}}},"desktop-dark"),t.viz.core.registerTheme({name:"android-holo-light",chart:{containerBackgroundColor:"#e8e8e8",title:{font:{color:"#808080"}},commonAxisSettings:{title:{font:{color:"#939393"}},label:{font:{color:"#404040",size:11}}},legend:{font:{color:"#000000",size:11}},loadingIndicator:{backgroundColor:"#e8e8e8"}}},"desktop")}(jQuery,DevExpress),function(n,t){t.viz.core.registerTheme({name:"ios",chart:{containerBackgroundColor:"#cbd0da",title:{font:{color:"#808080"}},commonSeriesSettings:{label:{border:{color:"#b0b3ba"}}},commonAxisSettings:{color:"#b0b3ba",grid:{color:"#b0b3ba"},tick:{color:"#b0b3ba"},title:{font:{color:"#939393"}},label:{font:{color:"#000000",size:11}}},commonPaneSettings:{border:{color:"#b0b3ba"}},legend:{font:{color:"#000000",size:11},border:{color:"#b0b3ba"}},loadingIndicator:{backgroundColor:"#cbd0da"}}},"desktop"),t.viz.core.registerTheme({name:"ios:7",chart:{containerBackgroundColor:"#ffffff",title:{font:{color:"#808080"}},commonSeriesSettings:{label:{border:{color:"#d3d3d3"}}},commonAxisSettings:{color:"#d3d3d3",grid:{color:"#d3d3d3"},tick:{color:"#d3d3d3"},title:{font:{color:"#939393"}},label:{font:{color:"#000000",size:11}}},commonPaneSettings:{border:{color:"#d3d3d3"}},legend:{font:{color:"#000000",size:11},border:{color:"#d3d3d3"}},loadingIndicator:{backgroundColor:"#ffffff"}}},"desktop")}(jQuery,DevExpress),function(n,t){t.viz.core.registerTheme({name:"win8",chart:{containerBackgroundColor:"#000000",title:{font:{color:"#ffffff"}},commonSeriesSettings:{label:{border:{color:"#454545"}}},commonAxisSettings:{color:"#454545",grid:{color:"#454545"},tick:{color:"#454545"},title:{font:{color:"#535353"}},label:{font:{color:"#ffffff",size:11}}},commonPaneSettings:{border:{color:"#454545"}},legend:{font:{color:"#ffffff",size:11},border:{color:"#454545"}},loadingIndicator:{backgroundColor:"#000000"}}},"desktop-dark"),t.viz.core.registerTheme({name:"win8-white",chart:{title:{font:{color:"#808080"}},commonAxisSettings:{title:{font:{color:"#939393"}},label:{font:{color:"#404040",size:11}}},legend:{font:{color:"#000000",size:11}}}},"desktop")}(jQuery,DevExpress),function(n,t){t.viz.core.registerTheme({name:"tizen"},"desktop"),t.viz.core.registerTheme({name:"tizen-black"},"desktop-dark")}(jQuery,DevExpress),function(n){n.viz.renderers={}}(DevExpress),function(n,t){function o(n){return c.createElementNS("http://www.w3.org/2000/svg",n)}function f(t,i){n.each(i,function(n,i){t.setAttribute(n,i)})}function ot(n){for(var i=0,r=n.length,t=[];i<r;)t.push("L",n[i++].toFixed(2),n[i++].toFixed(2));return r?(t[0]="M",t.push("Z"),t=t.join(" ")):t="",t}var s=t.viz.renderers,i=t.utils,a=t.Class,c=document,u=1e10,r=a.inherit({ctor:function(t,i,r){this.renderer=t,this.element=this.createElement(i),this.$element=n(this.element),this.applySettings(n.extend({},this.defaultSettings(),r))},defaultSettings:n.noop,createElement:function(n){return this._nodeName=n,o(n)},dispose:function(){this.off(),this.remove(),this.renderer=null,this.element=null,this.settings=null,this.$element=null,this.transformation=null},append:function(n){var t=n||this.renderer.getRoot();return t.element.appendChild(this.element),this},insertBefore:function(n){return n.element.parentNode.insertBefore(this.element,n.element),this},toBackground:function(){return this.element.parentNode&&this.element.parentNode.insertBefore(this.element,this.element.parentNode.firstChild),this},toForeground:function(){return this.element.parentNode&&this.element.parentNode.appendChild(this.element),this},addClass:function(t){var i=this.$element.attr("class"),r,u;return t&&(i?(u=i.split(" "),r=n.inArray(t,u),r===-1&&(i+=" "+t)):i=t,this.$element.attr("class",i)),this.$element},removeClass:function(t){var f=this.$element.attr("class"),r,u,e="",i;if(f&&t&&(r=f.split(" "),u=n.inArray(t,r),u!==-1)){for(i=0;i<r.length;i++)i!==u&&(e+=r[i]+" ");this.$element.attr("class",e.replace(/ $/,""))}return this.$element},applySettings:function(t){var i;return this.settings=n.extend(this.settings||{},t||{}),this.adjustSettings(),i=this._normalizeSettings(this.settings),this.applyStyle(this._style),this._applyAttributes(i),this},_applyAttributes:function(n){this.$element.attr(n)},adjustSettings:function(){},applyStyle:function(n){return this.$element.css(n||{}),this},trigger:function(n,t){this.$element.trigger(n,t)},on:function(){return this.$element.on.apply(this.$element,arguments),this},data:function(n){return this.$element.data(n),this},removeData:function(){return this.$element.removeData(),this},off:function(n){return this.$element.off(n),this},getBBox:function(){function t(t){var i={};try{if(n.isFunction(t.getBBox))i=t.getBBox();else throw{};}catch(r){i={x:0,y:0,width:t.offsetWidth||0,height:t.offsetHeight||0}}return i}var h=this,t,it=this.element,s=h.transformation,c=s.rotateAngle||0,f=s.rotateX||0,e=s.rotateY||0,o=Math.abs,l=Math.min;if(t=n.extend({},t(it)),c){var a=i.getCosAndSin(c),r=a.sin.toFixed(3),u=a.cos.toFixed(3),v=t.x-f,y=t.y-e,p=t.x+t.width-f,w=t.y-e,b=t.x-f,k=t.y+t.height-e,d=t.x+t.width-f,g=t.y+t.height-e,nt,tt;nt=o(t.height*r)+o(t.width*u),tt=o(t.height*u)+o(t.width*r),t.x=l(v*u-y*r+f,p*u-w*r+f,b*u-k*r+f,d*u-g*r+f),t.y=l(v*r+y*u+e,p*r+w*u+e,b*r+k*u+e,d*r+g*u+e),t.width=nt,t.height=tt}return h._normalizeBBox(t)},_normalizeBBox:function(t){var s=Math.ceil,h=Math.floor,o=n.isNumeric,i=h(t.x),r=h(t.y),c=s(t.width+t.x),l=s(t.height+t.y),f,e;return t.x=o(i)&&i<u&&i>-u?i:0,t.y=o(r)&&r<u&&r>-u?r:0,f=c-i,e=l-r,t.width=o(f)&&f<u&&f>-u?f:0,t.height=o(e)&&e<u&&e>-u?e:0,t.isEmpty=!t.x&&!t.y&&!t.width&&!t.height,t},clear:function(n){n?this.$element.find(n).remove():this.$element.empty()},detach:function(){this.$element.detach()},animate:function(t,r,u){r=r||{};var e=this,f={};u&&n.extend(r,{complete:u}),this.renderer.animOptions.enabled?(n.each(t,function(n,t){switch(n){case"scale":f.transform=f.transform||{};var r=e.transformation.scale||{};f.transform.scale={x:{from:i.isDefined(r.x)?r.x:1,to:i.isDefined(t.x)?t.x:1},y:{from:i.isDefined(r.y)?r.y:1,to:i.isDefined(t.y)?t.y:1}};break;case"rotate":f.transform=f.transform||{},f.transform.rotate={angle:{from:e.transformation.rotateAngle||0,to:t.angle},y:t.y||0,x:t.x||0};break;case"translate":f.transform=f.transform||{},f.transform.translate={x:{from:e.transformation.translateX||0,to:t.x||0},y:{from:e.transformation.translateY||0,to:t.y||0}};break;case"points":f[n]=t;break;default:f[n]={from:e.settings[n]||0,to:t}}}),e.renderer.animateElement(e,f,n.extend({},this.renderer.animOptions,r))):(t.translate&&("x"in t.translate&&(t.translateX=t.translate.x),"y"in t.translate&&(t.translateY=t.translate.y),delete t.translate),r&&(r.step&&r.step.call(e,1,1),r.complete&&r.complete.call(e)),this.applySettings(t))},stopAnimation:function(){var n=this;return n.animation&&n.animation.stop(!0),n},move:function(n,t,i,r){return n=n||0,t=t||0,r=r||{},i?this.animate({translate:{x:n,y:t}},r):this.applySettings({translateX:n,translateY:t}),this},rotate:function(n,t,i,r,u){n=n||0,t=t||0,i=i||0,u=u||{},r?this.animate({rotate:{angle:n,x:t,y:i}},u):this.applySettings({rotate:[n,t,i]})},remove:function(){this.$element.remove()},_normalizeSettings:function(i){var o,s,e,f,r,u,h={},c;for(o in i){if(r=o,u=i[r],r==="align")r="text-anchor",u={left:"start",center:"middle",right:"end"}[u];else if(r==="font"){if(s=this._style=this._style||{},!n.isPlainObject(u))continue;n.each(u,function(n){switch(n){case"color":f="fill";break;case"opacity":f="fillOpacity";break;case"cursor":f=n;break;default:e=n.charAt(0),f="font"+n.replace(e,e.toUpperCase())}s[f]=u[n]});continue}else if(r==="dashStyle"){if(r="stroke-dasharray",u=u.toLowerCase(),u==="solid"||u==="none")continue;u=u.replace(/longdash/g,"8,3,").replace(/dash/g,"4,3,").replace(/dot/g,"1,3,").replace(/,$/,"").split(","),u=n.map(u,function(n){return+n*(i.strokeWidth||1)}).join(",")}else if(/^(linecap|linejoin)$/i.test(r))r="stroke-"+r;else if(/^(translateX|translateY|rotate|scale)$/i.test(r)){this["_"+r]=u;continue}else if(r==="clipId")r="clip-path",u="url(#"+u+")";else if(r==="style"){this._style=this._style||{},n.extend(!0,this._style,u);continue}else if(r==="text")continue;else if(r==="segments")continue;else r=t.inflector.dasherize(r);h[r]=u}return this._applyTransformation(h)},_applyTransformation:function(t){var o,s,h;this.transformation={translateX:this._translateX,translateY:this._translateY,rotateAngle:0,rotateX:0,rotateY:0};var r=this.transformation,u=this._rotate,f=this._scale,e=[];return(i.isDefined(r.translateX)||i.isDefined(r.translateY))&&e.push("translate("+(r.translateX||0)+","+(r.translateY||0)+")"),i.isDefined(u)&&(i.isNumber(u)?(r.rotateAngle=u,r.rotateX=t.x||0,r.rotateY=t.y||0):n.isArray(u)?(r.rotateAngle=u[0]||0,r.rotateX=u[1]||0,r.rotateY=u[2]||0):i.isObject(u)&&(r.rotateAngle=u.angle||0,r.rotateX=u.x||0,r.rotateY=u.y||0),e.push("rotate("+r.rotateAngle+","+r.rotateX+","+r.rotateY+")")),i.isNumber(f)?(o=i.isDefined(f)?f:1,e.push("scale("+o+","+o+")"),r.scale={x:o,y:o}):i.isObject(f)&&(s=i.isDefined(f.x)?f.x:1,h=i.isDefined(f.y)?f.y:1,e.push("scale("+s+","+h+")"),r.scale={x:s,y:h}),e.length&&(t.transform=e.join(" ")),t}}),v=r.inherit({defaultSettings:function(){return{width:0,height:0,style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)"},xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",stroke:"none",strokeWidth:0,fill:"none"}},ctor:function(n,t){this.callBase(n,"svg",t)}}),h={defaultSettings:function(){return{x:0,y:0,width:0,height:0}},adjustSettings:function(){(!i.isDefined(this.settings.sharpEdges)||this.settings.sharpEdges)&&(this.sharpEdges(),delete this.settings.sharpEdges)},prepareSettings:function(n){var f=this.settings?Number(this.settings.strokeWidth)||0:0,t,u,r=!1;i.isDefined(n.width)&&(this._realWidth=Number(n.width)),i.isDefined(n.height)&&(this._realHeight=Number(n.height)),i.isDefined(n.x)&&(this._realX=Number(n.x)),i.isDefined(n.y)&&(this._realY=Number(n.y)),i.isDefined(n.strokeWidth)&&(this._realStrokeWidth=Number(n.strokeWidth)),this._realStrokeWidth=this._realStrokeWidth||this.defaultSettings().strokeWidth||0,u=~~((this._realWidth<this._realHeight?this._realWidth:this._realHeight)/2),t=this._realStrokeWidth<u?this._realStrokeWidth:u,t!==f&&(r=!0,n.sharpEdges=!0,t>0&&(n.strokeWidth=t)),(i.isDefined(n.x)||r)&&(n.x=this._realX+t/2),(i.isDefined(n.y)||r)&&(n.y=this._realY+t/2),(i.isDefined(n.width)||r)&&(n.width=this._realWidth-t),(i.isDefined(n.height)||r)&&(n.height=this._realHeight-t)},applySettings:function(t){var t=n.extend(!0,{},t);this.prepareSettings(t),this.callBase(t)},sharpEdges:function(){var t=Math.round(this.settings.strokeWidth||0),n=t%2/2;this.settings.x=Math.floor(this.settings.x-n||0)+n,this.settings.y=Math.floor(this.settings.y-n||0)+n,this.settings.width=Math.floor(this.settings.width||0),this.settings.height=Math.floor(this.settings.height||0),this.settings.strokeWidth>0&&(this.settings.strokeWidth=t)}},y=r.inherit(h).inherit({ctor:function(n,t,r,u){var f={full:"none",lefttop:"xMinYMin",leftcenter:"xMinYMid",leftbottom:"xMinYMax",centertop:"xMidYMin",center:"xMidYMid",centerbottom:"xMidYMax",righttop:"xMaxYMin",rightcenter:"xMaxYMid",rightbottom:"xMaxYMax"};this.href=i.isDefined(r)?r:"",this.preserveAspectRatio=f[(u||"").toLowerCase()],this.preserveAspectRatio=this.preserveAspectRatio||"none",this.callBase(n,"image",t)},adjustSettings:function(){this.callBase(),this.element.setAttributeNS("http://www.w3.org/1999/xlink","href",this.href),this.preserveAspectRatio&&this.element.setAttribute("preserveAspectRatio",this.preserveAspectRatio)}}),p=r.inherit(h).inherit({defaultSettings:function(){return{x:0,y:0,width:0,height:0,rx:0,ry:0}},ctor:function(n,t){this.callBase(n,"rect",t)}}),e=r.inherit({defaultSettings:function(){return{points:{x:0,y:0}}},getNodeName:function(){return"path"},getPathAttributeName:function(){return"d"},ctor:function(n,t){this.callBase(n,this.getNodeName(),t)},dispose:function(){this.segments=null,this.fromSegments=null,this.callBase()},adjustSettings:function(){this.prepareSegments(this.settings)},applySettings:function(n){var n=n||{};this.settings&&n.strokeWidth&&this.settings.strokeWidth!==n.strokeWidth&&(n.sharpEdges=!0),this.callBase(n)},prepareSegments:function(t){if("points"in t){var u=t.points,e=u[0],o=this.closePath||t.closePath,f=[],r;if(i.isObject(e))f=n.map(u,function(n,t){return n?t?[["L",n.x,n.y]]:[["M",n.x,n.y]]:null});else if(i.isNumber(e))for(r=0;r<u.length;r+=2){if(!r){f=[["M",u[r]||0,u[r+1]||0]];continue}f.push(["L",u[r]||0,u[r+1]||0])}else f=[["M",0,0]];o&&f.push(["Z"]),this.segments=f,delete t.points,delete t.closePath,t.sharpEdges=!0}t.sharpEdges&&(this.sharpEdges(),this.combinePathParams(t),delete t.sharpEdges)},customizeSegments:function(n){return n},combinePathParams:function(t){var i;this.segments=this.customizeSegments(this.segments),this.segments&&(i=n.map(this.segments,function(n){return n.join(" ")}),i=i.join(" "),t[this.getPathAttributeName()]=i)},animate:function(n,t,i){var r=this,u;if(!("points"in n)||!this.renderer.animOptions.enabled)return this.callBase(n,t,i);u=r.segments,r.prepareSegments(n),delete n.d,u.length===r.segments.length&&(n.points={from:u,to:r.segments}),r.callBase(n,t,i)},sharpEdges:function(){var o=this,v=o.segments.length,i=0,n,t,s,h,l,a,r,u,f,e,y=Math.round(o.settings.strokeWidth||0),c=y%2/2;for(i;i<v-1;i++){n=o.segments[i],t=o.segments[i+1],t[0]==="Z"&&i&&(t=o.segments[0]);switch(n[0]){case"M":case"L":r=1,u=2;break;case"C":r=5,u=6;break;case"A":r=6,u=7;break;case"Z":continue}switch(t[0]){case"M":case"L":f=1,e=2;break;case"C":f=5,e=6;break;case"A":f=6,e=7;break;case"Z":continue}s=Math.floor(n[r]),h=Math.floor(n[u]),l=t[f]=Math.floor(t[f]),a=t[e]=Math.floor(t[e]),n[r]=i==0?s:n[r],n[u]=i==0?h:n[u],s==l&&(n[r]=s+c,t[f]=l+c),h==a&&(n[u]=h+c,t[e]=a+c)}}}),w=e.inherit(h).inherit({defaultSettings:function(){return n.extend(!0,{},this.callBase(),{segments:{top:!0,bottom:!0,left:!0,right:!0}})},prepareSegments:function(){var h=this,t=h.settings,i=t.x,u=i+t.width,r=t.y,f=r+t.height,e=[],o,s=0,c=0,l={top:[["M",i,r],["L",u,r]],right:[["M",u,r],["L",u,f]],bottom:[["M",u,f],["L",i,f]],left:[["M",i,f],["L",i,r]]};n.each(l,function(n){var i=!!h.settings.segments[n];s=s*2+~~i});switch(s){case 13:case 9:o=["left","top","right","bottom"];break;case 11:o=["bottom","left","top","right"];break;default:o=["top","right","bottom","left"]}n.each(o,function(t,i){var r=!!h.settings.segments[i];r&&n.each(l[i].slice(c),function(n,t){e.push(t)}),c=~~r}),s==15&&e.push(["Z"]),this.segments=e.length?e:[["M",0,0],["Z"]],this.combinePathParams(t)},adjustSettings:function(){this.callBase(),this.prepareSegments()},applySettings:function(t){var i=this.settings&&this.settings.segments||this.defaultSettings().segments;t.segments=n.extend(!0,{},i||{},t.segments),this.callBase(t)}}),b=e.inherit({defaultSettings:function(){return{points:{x:0,y:0}}},ctor:function(n,t){this.closePath=!0,this.callBase(n,t)}}),l=e.inherit({defaultSettings:function(){return{points:{x:0,y:0}}},prepareSegments:function(n){if("points"in n){var o=n.points,s=o[0],h=this.closePath||n.closePath,u=[],t=[],r,f,e,c=0;if(i.isObject(s)){for(r=0;r<o.length;r++){if(f=o[r].x,e=o[r].y,!r){u=[["M",f,e]];continue}if((r-1)%3==0){t.length>0&&u.push(t),t=["C",f,e];continue}t.push(f),t.push(e)}t.length>0&&u.push(t)}else if(i.isNumber(s)){for(r=0;r<o.length;r+=2){if(f=o[r],e=o[r+1],!r){u=[["M",f,e||0]];continue}if((r-2)%6==0){t.length>0&&u.push(t),t=["C",f,e||0];continue}t.push(f),t.push(e||0)}t.length>0&&u.push(t)}else u=[["M",0,0]];h&&u.push(["Z"]),this.segments=u,delete n.points,delete n.closePath,this.combinePathParams(n)}}}),k=l.inherit({defaultSettings:function(){return{points:{x:0,y:0}}},ctor:function(n,t){this.closePath=!0,this.callBase(n,t)}}),d=e.inherit({defaultSettings:function(){return{x:0,y:0,linejoin:"round"}},createArcSegments:function(n,t,i,r,u,f,e){var o=Math.floor(Math.abs(f-u)/Math.PI)%2?"1":"0",s=n+r*Math.cos(u),h=t-r*Math.sin(u),c=n+r*Math.cos(f),l=t-r*Math.sin(f),a=n+i*Math.cos(f),v=t-i*Math.sin(f),y=n+i*Math.cos(u),p=t-i*Math.sin(u);return[["M",s,h],["A",r,r,0,o,0,c,l],[e?"M":"L",a,v],["A",i,i,0,o,1,y,p],["Z"]]},prepareSegments:function(n){var o;if("x"in n||"y"in n||"outerRadius"in n||"innerRadius"in n||"startAngle"in n||"endAngle"in n){var s=i.isNumber(n.x)?Number(n.x):0,h=i.isNumber(n.y)?Number(n.y):0,u=i.isNumber(n.outerRadius)?Number(n.outerRadius):0,f=i.isNumber(n.innerRadius)?Number(n.innerRadius):0,t=i.isNumber(n.startAngle)?Number(n.startAngle):0,r=i.isNumber(n.endAngle)?Number(n.endAngle):360,e;this.segments=[["M",0,0],["Z"]],(u||f)&&(o=Math.min(u,f),u=Math.max(u,f),f=o,Math.round(t)!=Math.round(r)&&(Math.abs(r-t)%360==0&&(t=0,r=360,e=!0,r-=.0001),t>360&&(t=t%360),r>360&&(r=r%360),t>r&&(t-=360),t=t*Math.PI/180,r=r*Math.PI/180,this.segments=this.createArcSegments(s,h,f,u,t,r,e))),delete n.x,delete n.y,delete n.outerRadius,delete n.innerRadius,delete n.startAngle,delete n.endAngle,this.combinePathParams(n)}}}),g=r.inherit({defaultSettings:function(){return{cx:0,cy:0,r:0}},ctor:function(n,t){this.callBase(n,"circle",t)}}),nt=r.inherit({defaultSettings:function(){return{x:0,y:0}},ctor:function(n,t){this.tspans=[],this.callBase(n,"text",t)},dispose:function(){this.tspans=null,this.callBase()},updateText:function(n){i.isDefined(n)||(n=""),this.applySettings({text:n})},adjustSettings:function(){if(!("text"in this.settings)){this.changeX();return}this._createElementWithText(this.settings.text)},changeX:function(){for(var n=0;n<this.tspans.length;n++)this.tspans[n].settings.x!=undefined&&this.tspans[n].applySettings({x:this.settings.x})},_createElementWithText:function(n){var t,i;this.clear(),n=n.toString().replace(/\r/g,""),n=n.replace(/\n/g,"<br/>"),t=c.createElement("div"),t.innerHTML=n,t.params={style:{}},this._orderText(t)},clear:function(){this.callBase(),this.tspans=[]},_orderText:function(n){var i=[],f=(this.settings.font?this.settings.font.size:12)||12,u=function(n,t,i){var r={style:{}},i=i||[],f,o,e;if(t.params=t.params||{},t.parentNode&&t.nodeName!="#text"&&t.parentNode.params)for(f in t.parentNode.params)t.params[f]=t.parentNode.params[f];switch(t.tagName){case"B":t.params.fontWeight="bold";break;case"I":t.params.fontStyle="italic";break;case"U":t.params.textDecoration="underline";break;case"BR":n++}for(t.style&&(t.style.fontSize&&(t.params.fontSize=t.style.fontSize.split("p")[0]||t.params.fontSize),t.params.fill=t.style.color||t.params.fill,t.params.fontStyle=t.style.fontStyle||t.params.fontStyle,t.params.fontWeight=t.style.fontWeight||t.params.fontWeight,t.params.textDecoration=t.style.textDecoration||t.params.textDecoration),o=t.childNodes.length,e=0;e!=o;)n=u(n,t.childNodes[e++],i);return t.wholeText!=undefined&&(r.fill=t.parentNode.params.fill,r.text=t.wholeText,t.parentNode.params.fontSize&&(r.style.fontSize=t.parentNode.params.fontSize),t.parentNode.params.fontStyle&&(r.style.fontStyle=t.parentNode.params.fontStyle),t.parentNode.params.fontWeight&&(r.style.fontWeight=t.parentNode.params.fontWeight),t.parentNode.params.textDecoration&&(r.style.textDecoration=t.parentNode.params.textDecoration),i.push({params:r,line:n})),n},t,r;for(u(0,n,i),t=0;t<i.length;t++)t!=0?i[t].line!=i[t-1].line?(i[t].params.dy=i[t].params.fontSize||f,i[t].params.x=this.settings.x):(i[t].params.dy=0,i[t].params.dx=0):(i[t].params.x=this.settings.x,i[t].params.dy=0),r=new tt(this.renderer,i[t].params),r.append(this),this.tspans.push(r)}}),tt=r.inherit({ctor:function(n,t){var i=t.text||"";delete t.text,this.callBase(n,"tspan",t),this.element.appendChild(c.createTextNode(i))}}),it=r.inherit({ctor:function(n,t){this.callBase(n,"g",t)},update:n.noop}),rt=r.inherit({ctor:function(n,t){var f=i.getNextPatternId(),e=t.color,u=t.hatching,s=u.opacity,h=u.width||1,r=u.step||6,o=u.direction,c={strokeWidth:h,stroke:e};this.callBase(n,"pattern",{id:f,width:r,height:r}),this.element.setAttribute("patternUnits","userSpaceOnUse"),this._rect=n.createRect(0,0,r,r,0,{fill:e,opacity:s}).append(this),this._path=n.createPath(0,c).append(this),o==="right"?this._path.applySettings({d:"M "+r/2+" "+-r/2+" L "+-r/2+" "+r/2+"M 0 "+r+" L "+r+" 0 M "+r*1.5+" "+r/2+" L "+r/2+" "+r*1.5}):o==="left"&&this._path.applySettings({d:"M 0 0 L "+r+" "+r+" M "+-r/2+" "+r/2+" L "+r/2+" "+r*1.5+" M "+r/2+-r/2+" L "+r*1.5+" "+r/2}),this.id="url(#"+f+")"},append:function(){return this.callBase(this.renderer.defsSvg)},clear:function(){this.callBase(),this._path=null},dispose:function(){this._path=null,this.callBase()}}),ut=r.inherit({ctor:function(n,t){var u=t.x,f=t.y,e=t.w,o=t.h,r=i.getNextClipId();delete t.x,delete t.y,delete t.w,delete t.h,this.callBase(n,"clipPath",{id:r}),this.id=r,this._rect=n.createRect(u,f,e,o,0,t),this._rect.append(this)},append:function(){return this.callBase(this.renderer.defsSvg)},updateRectangle:function(n){this._rect.applySettings(n)},dispose:function(){this._rect=null,this.callBase()}}),et=r.inherit({ctor:function(t){this.applySettings=n.noop,this.callBase(t,"filter"),delete this.applySettings,this.ref=null,this._create()},append:function(){return this.callBase(this.renderer.defsSvg)},dispose:function(){while(this.element.firstChild)this.element.removeChild(this.element.firstChild);return this.callBase(),this},applySettings:function(n){return n=n||{},this.$element.attr({id:n.id||null,x:n.x||null,y:n.y||null,width:n.width||null,height:n.height||null}),this.ref=n.id?"url(#"+n.id+")":null,this._update(n),this}}),ft=et.inherit({_create:function(){var n=this,t=n._gaussianBlur=o("feGaussianBlur"),i=n._offset=o("feOffset"),r=n._flood=o("feFlood"),u=n._composite=o("feComposite"),e=o("feBlend");f(t,{"in":"SourceGraphic",result:"gaussianBlurResult"}),f(i,{"in":"gaussianBlurResult",result:"offsetResult"}),f(r,{result:"floodResult"}),f(u,{"in":"floodResult",in2:"offsetResult",operator:"in",result:"compositeResult"}),f(e,{"in":"SourceGraphic",in2:"compositeResult",mode:"normal"}),n.element.appendChild(t),n.element.appendChild(i),n.element.appendChild(r),n.element.appendChild(u),n.element.appendChild(e)},_update:function(n){f(this._gaussianBlur,{stdDeviation:n.blur||0}),f(this._offset,{dx:n.dx||0,dy:n.dy||0}),f(this._flood,{"flood-color":n.color,"flood-opacity":n.opacity})}});s.SvgRenderer=a.inherit({ctor:function(n){n=n||{},this._setAnimationOptions(n.animation||{}),this.animationController=new s.AnimationController,this.cssClass=n.cssClass||"",this.recreateCanvas(n.width,n.height)},dispose:function(){this.killContainer(),this.animationController.dispose(),this.animOptions=null,this.animationController=null},_setAnimationOptions:function(n){this.animOptions={enabled:!0,duration:1e3,easing:"easeOutCubic"},"enabled"in n&&(this.animOptions.enabled=n.enabled),"duration"in n&&(this.animOptions.duration=n.duration),"easing"in n&&(this.animOptions.easing=n.easing)},animationEnabled:function(){return!!this.animOptions.enabled},updateAnimationOptions:function(t){this._setAnimationOptions(n.extend(this.animOptions||{},t))},stopAllAnimations:function(){this.animationController.stop()},killContainer:function(){this.svgRoot&&(this.svgRoot.remove(),this.svgRoot=null),this.defsSvg&&(this.defsSvg.remove(),this.defsSvg=null),this.drawn=null},recreateCanvas:function(n,t,i){n>=0&&t>=0&&(this.svgRoot?this.svgRoot.applySettings({width:n,height:t}):(this.cssClass=i||this.cssClass,this.svgRoot=new v(this,{width:n,height:t,"class":this.cssClass}),this.animationController.element=this.svgRoot.element),this.defsSvg&&this.defsSvg.clear("pattern"))},resize:function(n,t){var i=this.getRoot();i&&n>0&&t>0&&i.applySettings({width:n,height:t})},getRoot:function(){return this.svgRoot},isInitialized:function(){return!!this.svgRoot},draw:function(n){n&&!this.drawn&&(n.appendChild(this.getRoot().element),this.drawn=!0)},updateParams:function(n,t){t&&t.strokeWidth&&(n.strokeWidth=t.strokeWidth)},animateElement:function(n,t,i){this.animationController.animateElement(n,t,i)},createRect:function(t,i,r,u,f,e){var o={x:t,y:i,width:r,height:u,rx:f,ry:f};return e&&!e.inh&&n.extend(o,e),this.updateParams(o,e),new p(this,o)},createSegmentRect:function(t,i,r,u,f,e,o){var s=n.extend({},o||{},{x:t,y:i,width:r,height:u,rx:f,ry:f,segments:e});return new w(this,s)},createClipRect:function(n,t,i,u){var f={x:n,y:t,w:i,h:u,fill:"none",stroke:"none",strokeWidth:0};return this.defsSvg||(this.defsSvg=new r(this,"defs"),this.defsSvg.append()),new ut(this,f)},createPattern:function(n,t){return(t=t||{},t.direction=(t.direction||"").toLowerCase(),t.direction!=="right"&&t.direction!=="left")?{id:n,append:function(){return this},clear:function(){},dispose:function(){}}:(this.defsSvg||(this.defsSvg=new r(this,"defs"),this.defsSvg.append()),new rt(this,{hatching:t,color:n}))},createImage:function(t,i,r,u,f,e){var o=n.extend({},e||{},{x:t,y:i,width:r,height:u});return new y(this,o,f,o.location)},createLine:function(t,i,r,u,f){var o={points:[t,i,r,u]};return f&&!f.inh&&n.extend(o,f),this.updateParams(o,f),new e(this,o)},createPath:function(t,i){var r={points:t};return i&&!i.inh&&n.extend(r,i),this.updateParams(r,i),new e(this,r)},createSimplePath:function(n){return new r(this,"path",n)},createBezierPath:function(t,i){var r={points:t};return i&&!i.inh&&n.extend(r,i),this.updateParams(r,i),new l(this,r)},createArea:function(t,i){var r={points:t};return i&&!i.inh&&n.extend(r,i),this.updateParams(r,i),new b(this,r)},createBezierArea:function(t,i){var r={points:t};return i&&!i.inh&&n.extend(r,i),this.updateParams(r,i),new k(this,r)},createCircle:function(t,i,r,u){var f={cx:t,cy:i,r:r};return u&&!u.inh&&n.extend(f,u),new g(this,f)},createArc:function(t,i,r,u,f,e,o){var s={x:t,y:i,outerRadius:r,innerRadius:u,startAngle:f,endAngle:e};return o&&!o.inh&&n.extend(s,o),this.updateParams(s,o),new d(this,s)},createText:function(t,i,r,u){var f={x:i,y:r,text:t};return u&&!u.inh&&n.extend(f,u),new nt(this,f)},createGroup:function(n){return new it(this,n)},createFilter:function(n){var t=n==="shadow"?ft:null;return t?(this.defsSvg=this.defSvg||new r(this,"defs").append(),new t(this)):null},svg:function(){return this.svgRoot.$element.parent().html()}}),s._svgBuildPath=ot,s._svgRendererInternals={BaseSvgElement:r,RootSvgElement:v,RectSvgElement:p,ImageSvgElement:y,PathSvgElement:e,AreaSvgElement:b,BezierSvgElement:l,BezierAreaSvgElement:k,CircleSvgElement:g,TextSvgElement:nt,TspanSvgElement:tt,GroupSvgElement:it,ArcSvgElement:d,RectSvgBaseElement:h,SegmentRectSvgElement:w,ClipRectSvgElement:ut,PatternSvgElement:rt,ShadowFilterSvgElement:ft}}(jQuery,DevExpress),function(n,t){function k(n){for(var t=n.childNodes.length;t--;)n.removeChild(n.childNodes[0])}function lt(n){for(var i=0,r=n.length,t=[];i<r;)t.push("l",n[i++].toFixed(0),n[i++].toFixed(0));return r?(t[0]="m",t.push("x e"),t=t.join(" ")):t="",t}var o=t.viz.renderers,u=t.utils,f=document,i=o._svgRendererInternals,c,l=[],w=["position","display","visibility","filter","margin","marginTop","marginLeft","marginRight","marginBottom","whiteSpace","clip","overflow"],s=["stroke","fill","opacity","strokeWidth","align"],b={x:0,y:0,width:1,height:1,position:"absolute"},e=function(t,i){return n.extend(!0,i||{},b,t)},a=function(t,i,r){var f;return u.isDefined(t)&&(u.isNumber(t)?f={angle:t,x:i||0,y:r||0}:n.isArray(t)?f={angle:t[0]||0,x:t[1]||0,y:t[2]||0}:u.isObject(t)&&(f={angle:t.angle||0,x:t.x||0,y:t.y||0})),f},d=function(n,t,i){var e=n.element,r,u=t[i];(i==="opacity"||i==="fillOpacity")&&(e.fill?e.fill.opacity=u>=.002?u:.002:(r=f.createElement("vml:fill"),e.appendChild(r),r.opacity=u>=.002?u:.002,r.className="vml",t.fillcolor&&(r.color=t.fillcolor))),i==="joinStyle"&&(e.stroke?e.stroke.joinStyle=u:(r=f.createElement("vml:stroke"),n.element.appendChild(r),r.className="vml",r.joinStyle=u)),(i==="opacity"||i==="strokeOpacity")&&(e.stroke?e.stroke.opacity=u>=.002?u:.002:(r=f.createElement("vml:stroke"),n.element.appendChild(r),r.className="vml",r.opacity=u>=.002?u:.002,t.strokecolor&&(r.color=t.strokecolor))),i==="dashstyle"&&(e.stroke?e.stroke.dashstyle=u:(r=f.createElement("vml:stroke"),n.element.appendChild(r),r.className="vml",r.dashstyle=u))},y=function(n){var r,t,i,e=n.tagName.toLowerCase(),o,u,f;if(e==="div"){if(n.childNodes.length>0)for(t={},r=0;r<n.childNodes.length;r++)(i=y(n.childNodes[r]),i)&&(t.left=t.left===undefined||i.left<t.left?i.left:t.left,t.top=t.top===undefined||i.top<t.top?i.top:t.top,t.right=t.right===undefined||i.right>t.right?i.right:t.right,t.bottom=t.bottom===undefined||i.bottom>t.bottom?i.bottom:t.bottom)}else if(e==="shape"||e==="vml:shape"){for(o=(n.path.value||n.path).match(/[-0-9]+/g),t={},i=n.getBoundingClientRect(),r=0;r<o.length;r++)u=parseInt(o[r]),r%2?(t.top=t.top===undefined||u<t.top?u:t.top,t.bottom=t.bottom===undefined||u>t.bottom?u:t.bottom):(t.left=t.left===undefined||u<t.left?u:t.left,t.right=t.right===undefined||u>t.right?u:t.right);t.left=t.left||0,t.top=t.top||0,t.right=t.right||0,t.bottom=t.bottom||0,i.right-i.left<=1&&i.top-i.bottom<=1?(t.right=t.right+i.left,t.bottom=t.bottom+i.top,t.left=t.left+i.left,t.top=t.top+i.top):(t.right=t.right-t.left+i.left,t.bottom=t.bottom-t.top+i.top,t.left=i.left,t.top=i.top),f=Math.ceil(parseFloat(n.strokeweight)/2),f&&f>1&&(t.left-=f,t.top-=f,t.right+=f,t.bottom+=f)}else t=n.getBoundingClientRect();return t},r={isVml:function(){return!0},dispose:function(){this.childElements=null,this._style=null,this._fullSettings=null,this.callBase()},defaultSettings:function(n){return e(n,this.callBase?this.callBase():{})},createElement:function(n){if(this._nodeName=n,this.childElements=[],this._fullSettings={},this.isVml()){var t=f.createElement("vml:"+n);return t.className="vml",t}return f.createElement(n)},append:function(t){var i=t||this.renderer.getRoot();return i&&(i.element.appendChild(this.element),i.childElements.push(this),this.parentElement&&this.parentElement.childElements.splice(n.inArray(this,this.parentElement.childElements),1),this.parentElement=i),(i===this.renderer.getRoot()||i._isAppended)&&this.appendComplete(),this},insertBefore:function(t){var i=t.parentElement;return i.element.insertBefore(this.element,t.element),this.parentElement=i,i.childElements.splice(n.inArray(t,i.childElements),0,this),i._isAppended&&this.appendComplete(),this},remove:function(){return this.callBase.apply(this,arguments),this.parentElement&&(this.parentElement.childElements.splice(n.inArray(this,this.parentElement.childElements),1),this.parentElement=null),this},detach:function(){return this.callBase.apply(this,arguments),this._delayAttributes(["opacity"]),this._onDetach(),this.parentElement&&(this.parentElement.childElements.splice(n.inArray(this,this.parentElement.childElements),1),this.parentElement=null),this},clear:function(){return this.callBase.apply(this,arguments),n.each(this.childElements,function(n,t){t.parentElement=null}),this.childElements=[],this},applyStyle:function(n){this.callBase(n),n.opacity&&(this.element.style.opacity=n.opacity)},_fillAttributesFromParentAndCurrentStyle:function(t){var u=this.element,e=this.parentElement,r,h={strokeWidth:"stroke-width"},i,o,f={};if(e)for(r=0;r<s.length;r++)i=s[r],!this.settings[i]&&e._fullSettings[i]&&(f[i]=e._fullSettings[i]);if(u.style&&u.currentStyle)for(r=0;r<s.length;r++)i=s[r],o=h[i]||i,u.currentStyle[o]&&(f[i]=u.currentStyle[o]);n.extend(this._fullSettings,this.settings,f),this.isVml()&&n.extend(t,this._normalizeSettings(f))},_applyAttributes:function(n){var t,i;if(n&&n.arcsize!==undefined){try{this.element.setAttribute("arcsize",n.arcsize)}catch(r){}delete n.arcsize}if(n&&n["class"]&&(this.element.className=(this.isVml()?"vml ":"")+n["class"],delete n["class"]),this._isAppended){if(n=n||this._delayedAttributes,n){if(this._fillAttributesFromParentAndCurrentStyle(n),this.isVml())for(t in n)i=n[t],t==="opacity"||t==="fillOpacity"||t==="strokeOpacity"||t==="dashstyle"||t==="joinStyle"?d(this,n,t):this.element[t]=i;delete this._delayedAttributes}}else this._delayedAttributes=n},_onDetach:function(){this._isAppended=!1,n.each(this.childElements,function(n,t){t._onDetach()}),this.isVml()&&k(this.element)},appendComplete:function(){this.renderer.isElementAppendedToPage(this)?(this._isAppended=!0,this._applyAttributes(),n.each(this.childElements,function(n,t){t.appendComplete()})):(l.push(this),n(this.element).data("vmlNeedAppendComplete",!0),c===undefined&&(c=setTimeout(function(){c=undefined;var t=l;l=[],n.each(t,function(){n(this.element).data("vmlNeedAppendComplete")&&!this._isAppended&&this.appendComplete()})},200)))},_delayAttributes:function(t){var r,u,i,f=this.settings||{};for(t=t||[],this._delayedAttributes=this._delayedAttributes||{},i=0;i<t.length;i++)r=t[i],u=f[r],u&&(this._delayedAttributes[r]=u);n.each(this.childElements||[],function(n,i){i._delayAttributes(t)})},_normalizeSettings:function(t){var s,u={},f={},e,o,r,i;for(s in t)if(r=s,i=t[r],r==="x"||r==="translateX")o=t.x||0,t.translateX&&(o+=t.translateX),u.left=o+"px";else if(r==="y"||r==="translateY")o=t.y||0,t.translateY&&(o+=t.translateY),u.top=o+"px";else if(r==="width")u.width=i+"px";else if(r==="height")u.height=i+"px";else if(r==="align")continue;else if(r==="scale")continue;else if(n.inArray(r,w)!=-1)u[r]=i!==null?i:"";else if(r==="font"){if(!n.isPlainObject(i))continue;n.each(i,function(n){var t,r;switch(n){case"color":case"opacity":break;case"cursor":t=n;break;default:r=n.charAt(0),t="font"+n.replace(r,r.toUpperCase())}t&&(u[t]=i[n])})}else if(r==="style")n.extend(!0,u,i);else if(r==="rotate")this._rotate=i;else if(r==="clipId"){if(e=this.renderer.getClipRect(i,this),e){var l=e.width,a=e.height,h=e.x,c=e.y,v=l+h,y=a+c;u.width=e.cSize.width,u.height=e.cSize.height,u.clip="rect("+c+"px, "+v+"px, "+y+"px, "+h+"px)"}}else if(r==="segments")continue;else r==="fill"?(f.filled=i==="none"?"f":"t",f.fillcolor=i==="grey"?"#808080":i):r==="opacity"?f.opacity=i<.002?i:i:r==="stroke"?(f.stroked=i==="none"?"f":"t",f.strokecolor=i):r==="strokeWidth"?f.strokeweight=i+"px":r==="lineJoin"?f.joinStyle=i:r==="dashStyle"?(i=i.toLowerCase(),i!=="solid"&&(f.dashstyle=i)):f[r]=i;return this._style=u,f},_getBBox:function(){var u,f,n,e,i=0,r=0,t=this.element,o;try{n=y(t),u=n.right-n.left,f=n.bottom-n.top,o=this.element.parentNode||this.renderer.getRoot().element,e=o.getBoundingClientRect(),i=n.left-e.left,r=n.top-e.top,t.tagName.toLowerCase()==="div"&&(i=i-(parseInt(t.style.left,10)||0),r=r-(parseInt(t.style.top,10)||0))}catch(s){u=t.offsetWidth||0,f=t.offsetHeight||0}return{x:i,y:r,width:u,height:f,isEmpty:!i&&!r&&!u&&!f}},getBBox:function(){return this._getBBox()},sharpEdges:function(){}},g=function(n){switch(n){case"M":return"m";case"L":return"l";case"Z":return"x e"}return n},h={defaultSettings:function(){return n.extend(this.callBase(),{coordsize:"1,1"})},getNodeName:function(){return"shape"},getPathAttributeName:function(){return"path"},customizeSegments:function(t){var i=t;return t&&(i=n.map(t,function(n){var i,r=[],u=g(n[0]);for(r.push(u),i=1;i<n.length;i++)r.push(Math.floor(n[i]));return[r]})),i}},nt=i.BaseSvgElement.inherit(r).inherit({isVml:function(){return!1},defaultSettings:function(){return{width:0,height:0,position:"relative",display:"inline-block",overflow:"hidden",stroke:"none",strokeWidth:0,fill:"none"}},ctor:function(n,t){this.callBase(n,"div",t)}}),tt=i.BaseSvgElement.inherit(i.RectSvgBaseElement).inherit(r).inherit({ctor:function(n,t){this.callBase(n,"image",t)},defaultSettings:function(){return n.extend(this.callBase(),{strokeWidth:0,fill:"none"})},adjustSettings:function(){this.callBase(),this.settings.href&&(this.settings.src=this.settings.href,delete this.settings.href)}}),it=i.BaseSvgElement.inherit(i.RectSvgBaseElement).inherit(r).inherit({defaultSettings:function(){return e({stroked:"f",strokeWidth:0,rx:0,ry:0})},recreateElement:function(t){var r,i;this._nodeName=t,r=this.$element.parent()[0],r?(i=this.$element,this.element=this.createElement(t),this.$element=n(this.element),this.$element.insertBefore(i),i.remove()):(this.element=this.createElement(t),this.$element=n(this.element)),this.applySettings()},_adjustArcSize:function(){var t=this.settings,f=t.rx||0,e=t.ry||0,o=t.width,s=t.height,r,u,i;(t.rx!==undefined||t.ry!==undefined)&&(r=Math.max(f,e),u=Math.max(o,s)/2,i=r/u,t.arcsize=i,n.isNumeric(i)&&i!=0?this._nodeName!=="roundrect"&&this.recreateElement("roundrect"):this._nodeName==="roundrect"&&this.recreateElement("rect"),delete t.rx,delete t.ry)},_adjustRotation:function(){var n=this.settings,v=this.settings.rotate,e,o,s,h,i,r,c,l,u,f,t;t=a(v,n.x,n.y),t&&(e=t.angle,i=t.x,r=t.y,o=e*Math.PI/180,s=Math.cos(o),h=Math.sin(o),u=n.x+(n.translateX||0)+n.width/2,f=n.y+(n.translateY||0)+n.height/2,l=(u-i)*s-(f-r)*h+i-u,c=(u-i)*h+(f-r)*s+r-f,this.settings.marginLeft=Math.round(l)+"px",this.settings.marginTop=Math.round(c)+"px",this.settings.rotation=e)},adjustSettings:function(){this.callBase(),this._adjustArcSize(),this._adjustRotation()},ctor:function(n,t){this.callBase(n,"rect",t)}}),v=i.PathSvgElement.inherit(r).inherit(h).inherit({prepareSegments:function(t){var i=this,w=t.rotate,l,u,f,v,e,o,s,h,c,y,p,r;this.callBase(t),v=i.segments,r=a(w,t.x,t.y),r&&(l=r.angle,u=r.x,f=r.y,i.segments&&(e=l*Math.PI/180,o=Math.cos(e),s=Math.sin(e),i.segments=n.map(i.segments,function(n){return n.length===3?(h=n[1],c=n[2],y=(h-u)*o-(c-f)*s+u,p=(h-u)*s+(c-f)*o+f,[[n[0],Math.floor(y),Math.floor(p)]]):[n]}),i.combinePathParams(t),i.segments=v))}}),rt=i.BaseSvgElement.inherit(r).inherit({ctor:function(n,t){this.callBase(n,"shape",t)},defaultSettings:function(){return e({coordsize:"1,1"})},adjustSettings:function(){var n=this.settings;n.d!==undefined&&(n.path=n.d,delete n.d)}}),ut=v.inherit({defaultSettings:function(){var n=this.callBase();return e({points:{x:0,y:0}},n)},ctor:function(n,t){this.closePath=!0,this.callBase(n,t)}}),ft=i.SegmentRectSvgElement.inherit(r).inherit(h).inherit({defaultSettings:function(){var n=this.callBase();return n.lineJoin="miter",delete n.fill,delete n.stroke,delete n.strokecolor,delete n.stroked,n},prepareSegments:function(){this.callBase(),this.segments=this.customizeSegments(this.segments),this.settings.x=0,this.settings.y=0,this.settings.width=1,this.settings.height=1},applySettings:function(n){var t=n.x,i=n.y,r=n.width,u=n.height;this.callBase(n),this.settings.x=t,this.settings.y=i,this.settings.width=r,this.settings.height=u}}),p=i.BezierSvgElement.inherit(r).inherit(h),et=p.inherit({defaultSettings:function(){var n=this.callBase();return e({points:{x:0,y:0}},n)},ctor:function(n,t){this.closePath=!0,this.callBase(n,t)}}),ot=i.ArcSvgElement.inherit(r).inherit(h).inherit({createArcSegments:function(n,t,i,r,u,f,e){var o=n+r*Math.cos(u),s=t-r*Math.sin(u),h=n+r*Math.cos(f),c=t-r*Math.sin(f),l=n+i*Math.cos(f),a=t-i*Math.sin(f),v=n+i*Math.cos(u),y=t-i*Math.sin(u);return[["wr",n-i,t-i,n+i,t+i,l,a,v,y],[e?"wr":"at",n-r,t-r,n+r,t+r,o,s,h,c],["x e"]]}}),st=i.BaseSvgElement.inherit(r).inherit({defaultSettings:function(){return e({cx:0,cy:0,r:0})},applySettings:function(n){return n.cx=n.cx||n.x,n.cy=n.cy||n.y,this.callBase(n)},adjustSettings:function(){var n,t,i;(this.settings.cx!==undefined||this.settings.cy!==undefined||this.settings.r!==undefined)&&(n="r"in this.settings?this.settings.r:this.settings.width/2,t="cx"in this.settings?this.settings.cx:this.settings.x+this.settings.width/2,i="cy"in this.settings?this.settings.cy:this.settings.y+this.settings.width/2,this.settings.x=t-n,this.settings.y=i-n,this.settings.width=this.settings.height=n*2,delete this.settings.cx,delete this.settings.cy,delete this.settings.r)},ctor:function(n,t){this.callBase(n,"oval",t)}}),ht=i.BaseSvgElement.inherit(r).inherit({isVml:function(){return!1},defaultSettings:function(){return{x:0,y:0,position:"absolute",whiteSpace:"nowrap"}},ctor:function(n,t){this.callBase(n,"span",t)},adjustSettings:function(){var i,t=this.settings;t.font&&(t.fill=t.fill||t.font.color,t.opacity=t.opacity||t.font.opacity),"text"in t&&(i=u.isDefined(t.text)?t.text:"",i=i.toString().replace(/\r/g,""),i=i.replace(/\n/g,"<br/>"),n(this.element).html(i),delete t.text)},updateText:function(n){this.applySettings({text:u.isDefined(n)?n:""})},_applyAttributes:function(n){var tt,it;this.callBase(n),n=this._fullSettings;var rt=n.rotate,t=0,k,d,i=1,r=0,y=0,p=1,ft,w,s,g=n.y+(n.translateY||0),nt=n.x+(n.translateX||0),ut=n.align,u=this.getBBox(),l=this._style||{},h=0,c=0,o,b,v,f,e;this._oldRotate&&!u.isEmpty?(s=this._oldRotate.angle*Math.PI/180,y=Math.sin(s),p=Math.cos(s),(this._oldRotate.angle|0)%90!=0?(this._oldRotate.angle|0)%45==0?(f=u.width,e=u.height):(w=Math.abs(Math.tan(s)),tt=(u.width-u.height*w)/(1-w*w),it=u.width-tt,e=Math.abs(it/y),f=Math.abs(tt/p)):(e=Math.abs(u.height*p-u.width*y),f=Math.abs(u.width*p-u.height*y))):(f=u.width,e=u.height),(e||f)&&(v=a(rt,nt,g),this._oldRotate=v,v&&(t=v.angle,k=v.x,d=v.y,Math.abs(t)>360&&(t=t%360),t<0&&(t=t+360),t?(s=t*Math.PI/180,i=Math.cos(s),r=Math.sin(s),l.filter='progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11 = '+i.toFixed(5)+", M12 = "+(-r).toFixed(5)+", M21 = "+r.toFixed(5)+", M22 = "+i.toFixed(5)+")"):(l.filter="",this._oldRotate=null),h=(nt-k)*(i-1)-(g-d)*r,c=(nt-k)*r+(g-d)*(i-1)),o=e*(.55+.45/2),t<90?(c-=o*i,h-=(e-o)*r):t<180?(c+=(e-o)*i,h+=f*i-(e-o)*r):t<270?(c+=(e-o)*i+f*r,h+=f*i+o*r):(c+=f*r-o*i,h+=o*r),b={center:.5,right:1}[ut],b&&(h-=f*b*i,c-=f*b*r),l.marginLeft=Math.round(h)+"px",l.marginTop=Math.round(c)+"px"),n.fill&&n.fill!=="none"&&(l.color=n.fill),n.opacity&&(this.element.style.filter="alpha(opacity="+n.opacity*100+")"),this.applyStyle(l)}}),ct=i.BaseSvgElement.inherit(r).inherit({isVml:function(){return!1},defaultSettings:function(){return{x:0,y:0,position:"absolute"}},ctor:function(n,t){this.callBase(n,"div",t)},applySettings:function(t){var r=this.callBase,i;return t=t||{},i=t.rotate,i&&(u.isNumber(i)&&(i=[i,t.x||0,t.y||0]),n.each(this.childElements,function(n,t){t.applySettings({rotate:i})})),delete t.rotate,delete t.x,delete t.y,this.callBase=r,this.callBase(t)},getBBox:function(){return this._getBBox()},update:function(){if(this.settings.clipId){var n=this.getBBox();this.applyStyle({left:n.x+(this.settings.translateX||0),right:n.y+(this.settings.translateY||0),width:n.width,height:n.height})}}});o.VmlRenderer=o.SvgRenderer.inherit({ctor:function(n){n=n||{},n.animation={enabled:!1},document.namespaces&&!document.namespaces.vml&&(document.namespaces.add("vml","urn:schemas-microsoft-com:vml"),document.createStyleSheet().addRule(".vml","behavior: url(#default#VML); display: inline-block;")),this._clipRects={},this.cssClass=n.cssClass||"",this.callBase(n)},dispose:function(){this.callBase(),this._clipRects=null,this._size=null},updateAnimationOptions:n.noop,draw:function(n){var t=this.getRoot();this.callBase(n),t&&t.appendComplete()},recreateCanvas:function(n,t,i){n>0&&t>0&&(this._size={width:n,height:t},this.svgRoot?this.svgRoot.applySettings({width:n,height:t}):(this.cssClass=i||this.cssClass,this.svgRoot=new nt(this,{width:n,height:t,"class":this.cssClass})),this.defsSvg&&this.defsSvg.clear())},_getSize:function(){return this._size||{}},isElementAppendedToPage:function(t){return n(t.element).closest(document.documentElement).length},createRect:function(t,i,r,u,f,e){var o=n.extend(!0,{},e||{},{x:t,y:i,width:r,height:u,rx:f,ry:f});return new it(this,o)},createSegmentRect:function(t,i,r,u,f,e,o){var s=n.extend({},o||{},{x:t,y:i,width:r,height:u,rx:f,ry:f,segments:e});return new ft(this,s)},createClipRect:function(t,i,r,f){var e=u.getNextClipId(),o=[],s={id:e,x:t,y:i,width:r,height:f,cSize:this._getSize(),addElement:function(t){var i=!1;n.each(o,function(){if(this===t)return i=!0,!1}),i||o.push(t)},append:function(){return this},remove:function(){},dispose:function(){},updateRectangle:function(t){return"x"in t&&(this.x=t.x),"translateX"in t&&(this.x+=t.translateX),"y"in t&&(this.y=t.y),"translateY"in t&&(this.y+=t.translateY),"width"in t&&(this.width=t.width),"height"in t&&(this.height=t.height),n.each(o,function(){this.applySettings({clipId:e})}),this}};return this._clipRects[e]=s,s},getClipRect:function(n,t){var i=this._clipRects[n];return i&&t&&i.addElement(t),this._clipRects[n]},createImage:function(t,i,r,u,f,e){var o=n.extend(!0,{},e&&!e.inh?e:{},{x:t,y:i,width:r,height:u,href:f});return new tt(this,o)},createLine:function(t,i,r,u,f){var e=n.extend(!0,{},f&&!f.inh?f:{},{points:[t,i,r,u]});return new v(this,e)},createPath:function(t,i){var r=n.extend(!0,{},i&&!i.inh?i:{},{points:t});return new v(this,r)},createSimplePath:function(n){return new rt(this,n)},createBezierPath:function(t,i){var r=n.extend(!0,{},i&&!i.inh?i:{},{points:t});return new p(this,r)},createArea:function(t,i){var r=n.extend(!0,{},i&&!i.inh?i:{},{points:t});return new ut(this,r)},createBezierArea:function(t,i){var r=n.extend(!0,{},i&&!i.inh?i:{},{points:t});return new et(this,r)},createCircle:function(t,i,r,u){var f=n.extend(!0,{},u&&!u.inh?u:{},{cx:t,cy:i,r:r});return new st(this,f)},createArc:function(t,i,r,u,f,e,o){var s=n.extend(!0,{},o&&!o.inh?o:{},{x:t,y:i,outerRadius:r,innerRadius:u,startAngle:f,endAngle:e});return new ot(this,s)},createText:function(t,i,r,u){var f=n.extend(!0,{},u&&!u.inh?u:{},{x:i,y:r,text:t});return new ht(this,f)},createGroup:function(n){return new ct(this,n)},createPattern:function(n){return{id:n,append:function(){return this},clear:function(){},dispose:function(){}}},createFilter:function(n){return n==="shadow"?{ref:null,append:function(){return this},dispose:function(){return this},applySettings:function(){return this}}:null},svg:function(){return""}}),o._vmlBuildPath=lt}(jQuery,DevExpress),function(n,t){function u(){return!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect}var i=t.viz.renderers,r=t.browser;r.msie&&r.version<9&&!u()?(i.Renderer=i.VmlRenderer,i.buildPath=i._vmlBuildPath):(i.Renderer=i.SvgRenderer,i.buildPath=i._svgBuildPath)}(jQuery,DevExpress),function(n){var t=n.viz.renderers,u=n.Class,i,r=function(){},f;i={easeOutCubic:function(n,t,i){return n===1?i:(1-Math.pow(1-n,3))*(i-t)+ +t},linear:function(n,t,i){return n===1?i:n*(i-t)+ +t}},t.easingFunctions=i,t.animationSvgStep={points:function(n,t,i,r,u){for(var e=t.from,c=t.to,h=[],o,s,f=0;f<e.length;f++){if(s=[e[f][0]],e[f].length>1)for(o=1;o<e[f].length;o++)s.push(r(i,e[f][o],c[f][o]));h[f]=s.join(" ")}u.d=h.join(" "),n.element.setAttribute("d",u.d)},transform:function(n,t,i,r,u){var s=t.translate,e=t.rotate,h=t.scale,o=[],f=n.settings;s?(u.translateX=r(i,s.x.from,s.x.to),u.translateY=r(i,s.y.from,s.y.to),o.push("translate("+u.translateX+","+u.translateY+")")):(f.translateX||f.translateY)&&o.push("translate("+(f.translateX||0)+","+(f.translateY||0)+")"),e?(u.rotate={rotateAngle:r(i,e.angle.from,e.angle.to),rotateX:e.x,rotateY:e.y},o.push("rotate("+u.rotate.rotateAngle+","+e.x+","+e.y+")")):f.rotate&&o.push("rotate("+f.rotate.angle+","+(f.rotate.x||0)+","+(f.rotate.y||0)+")"),h?(u.scale={x:r(i,h.x.from,h.x.to),y:r(i,h.y.from,h.y.to)},o.push("scale("+u.scale.x+","+u.scale.y+")")):f.scale&&o.push("scale("+f.scale.x+","+f.scale.y+")"),n.element.setAttribute("transform",o.join())},base:function(n,t,i,r,u,f){u[f]=r(i,t.from,t.to),n.element.setAttribute(f,u[f])},_:r,complete:function(n,t){n.applySettings(t)}},f=u.inherit({ctor:function(n,r,u){var f=this;f._progress=0,f.element=n,f.params=r,f.options=u,f.duration=u.partitionDuration?u.duration*u.partitionDuration:u.duration,f._animateStep=u.animateStep||t.animationSvgStep,f._easing=i[u.easing]||i.easeOutCubic,f._currentParams={},f.tick=f._start},_calcProgress:function(n){return Math.min(1,(n-this._startTime)/this.duration)},_step:function(n){var t=this,r=t._animateStep,i,u;t._progress=t._calcProgress(n);for(i in t.params)t.params.hasOwnProperty(i)&&(u=r[i]||r.base,u(t.element,t.params[i],t._progress,t._easing,t._currentParams,i));return(t.options.step&&t.options.step(t._easing(t._progress,0,1),t._progress),t._progress===1)?t.stop():!0},_start:function(n){return this._startTime=n,this.tick=this._step,!0},_end:function(){var n=this;n.stop=r,n.tick=r,n._animateStep.complete&&n._animateStep.complete(n.element,n._currentParams),n.options.complete&&n.options.complete()},tick:function(){return!0},stop:function(n){var t=this.options;if(!n&&t.repeatCount&&--t.repeatCount>0)return this.tick=this._start,!0;this._end()}}),t.AnimationController=u.inherit(function(){var n=1e3/60,t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,n)};return{ctor:function(){var n=this;n.requestAnimationFrame=t,n._animationCount=0,n._timerId=null,n._animations={}},_loop:function(){var n=this,t=n._animations,r=0,u=+new Date,i;for(i in t)t.hasOwnProperty(i)&&(t[i].tick(u)||delete t[i],r++);if(r===0){n.stop();return}n._timerId=n.requestAnimationFrame.call(null,function(){n._loop()},n.element)},addAnimation:function(n){var t=this;t._animations[t._animationCount++]=n,t._timerId||(clearTimeout(t._startDelay),t._startDelay=setTimeout(function(){t._timerId=1,t._loop()},0))},animateElement:function(n,t,i){n&&t&&i&&(n.animation&&n.animation.stop(!0),this.addAnimation(n.animation=new f(n,t,i)))},dispose:function(){this.stop(),this.element=null},stop:function(){this._animations={},this._animationCount=0,clearTimeout(this._startDelay),this._timerId=null}}}())}(DevExpress),function(n){n.viz.charts={series:{}}}(DevExpress),function(n,t,i){var h=t.utils,r=h.isDefined,u=h.isDate,f=h.getLog,s=h.raiseTo,e=1,o=6e4,c=function(n,t){return t<n},l=function(n,t){return t>n},y=function(n,t,r,u){var e=n!==i,f=t!==i;e?f&&u(n,t)&&r(t):f&&r(t)},a=function(n){return n=(n||"").toUpperCase(),function(t){var r=this,v="categories"+n,o="base"+n,p="invert"+n,w="stick"+n,s="axisType"+n,b="keepValueMargins"+n,h=r[v],nt,u=t[v],f,a,d,k,g=function(n){var i=(r[n+"Priority"]||0)-(t[n+"Priority"]||0);((r[n]||0)<t[n]&&i===0||i<0)&&(r[n]=t[n],r[n+"Priority"]=t[n+"Priority"])},e=function(n,i){y(r[n],t[n],function(t){r[n]=t},i)};if(r[p]=r[p]||t[p],r[w]=r[w]||t[w],r[s]=r[s]||t[s],r[o]=r[s]==="logarithmic"?r[o]||t[o]:i,r[b]=r[b]||t[b],e("min"+n,c),e("interval"+n,c),e("max"+n,l),e("minVisible"+n,c),e("maxVisible"+n,l),g("minValueMargin"+n),g("maxValueMargin"+n),h===i)r[v]=u;else if(d=h.length,u&&u.length)for(f=0;f<u.length;f++){for(a=0,k=!1;a<d;a++)if(h[a].valueOf()===u[f].valueOf()){k=!0;break}k||h.push(u[f])}return this}},v=function(n){return n=(n||"").toUpperCase(),function(t){var i=(new Date).getYear()-1;this["min"+n]=t==="datetime"?new Date(i,0,1):0,this["max"+n]=t==="datetime"?new Date(i,11,31):10,this["stubData"+n]=!0}};t.viz.charts.Range=t.Class.inherit({ctor:function(t){t&&n.extend(this,t)},dispose:function(){this.categoriesY=null,this.categoriesX=null},getBoundRange:function(n){return this.getBoundRangeX(n),this.getBoundRangeY(n),this},getBoundRangeX:a("X"),getBoundRangeY:a("Y"),isDefined:function(){return this.isDefinedX()||this.isDefinedY()},isDefinedX:function(){return r(this.minX)&&r(this.maxX)||r(this.categoriesX)},isDefinedY:function(){return r(this.minY)&&r(this.maxY)||r(this.categoriesY)},setStubData:function(n){this.setStubDataX(n),this.setStubDataY(n)},setStubDataX:v("X"),setStubDataY:v("Y"),_correctValueMarginsToZeroIfNeeded:function(n){var t=this,e,i=r(t["minVisible"+n])?t["minVisible"+n]:t["min"+n],f=r(t["maxVisible"+n])?t["maxVisible"+n]:t["max"+n],o=t["minValueMargin"+n],s=t["maxValueMargin"+n],h=u(f)||u(i);r(f)&&r(i)&&(e=f-i),!e||h||t["keepValueMargins"+n]||(i<=0&&f<=0&&s&&s>f/(i-f)&&(t["maxValueMargin"+n]=0,t["max"+n]=0),i>=0&&f>=0&&o&&o>i/(f-i)&&(t["minValueMargin"+n]=0,t["min"+n]=0))},applyValueMargins:function(){this._applySpecificValueMargins("X"),this._applySpecificValueMargins("Y"),this.applyEqualLimitsMargins()},_applySpecificValueMargins:function(n){n=(n||"").toUpperCase();var t=this,i="min"+n,e="max"+n,o="minVisible"+n,h="maxVisible"+n,l="minValueMargin"+n,a="maxValueMargin"+n,c,v,y,w=u(t[e])||u(t[i]),p,b,g,k,d;t["axisType"+n]==="logarithmic"?(c=t["base"+n],p=Math.floor(f(t[i],c)),b=Math.ceil(f(t[e],c)),k=Math.floor(f(t[o],c)),d=Math.ceil(f(t[h],c)),r(t[i])&&(g=t[i],t[i]=s(p,c),f(g/t[i],c)<f(1+c/10,c)&&(t.keepValueMarginsX||t.keepValueMarginsY)&&!t["keepValueMargins"+n]&&(p-=1,t[i]=s(p,c))),(!r(t[o])||t[o]<t[i]||t[o]>t[e])&&(k=p),t[o]=s(k,c),r(t[e])&&(t[e]=s(b,c)),(!r(t[h])||t[h]<t[i]||t[h]>t[e])&&(d=b),t[h]=s(d,c)):(this._correctValueMarginsToZeroIfNeeded(n),r(t[e])&&r(t[i])&&(v=t[e]-t[i]),(!r(t[o])||t[o]<t[i]||t[o]>t[e])&&(t[o]=t[i]),(!r(t[h])||t[h]<t[i]||t[h]>t[e])&&(t[h]=t[e]),y=t[h]-t[o],r(t[i])&&t[l]&&(w?t[i]=new Date(t[i].valueOf()-v*t[l]):t[i]-=v*t[l]),r(t[o])&&t[l]&&(w?t[o]=new Date(t[o].valueOf()-y*t[l]):t[o]-=y*t[l]),r(t[e])&&t[a]&&(w?t[e]=new Date(t[e].valueOf()+v*t[a]):t[e]+=v*t[a]),r(t[h])&&t[a]&&(w?t[h]=new Date(t[h].valueOf()+y*t[a]):t[h]+=y*t[a]))},applyEqualLimitsMargins:function(){this._applySpecificEqualLimitsMargins("X"),this._applySpecificEqualLimitsMargins("Y")},_applySpecificEqualLimitsMargins:function(n){n=(n||"").toUpperCase();var t=this,i="min"+n,f="max"+n,s="minVisible"+n,h="maxVisible"+n,c=u(t[f])||u(t[i]);r(t[i])&&r(t[f])&&t[i].valueOf()===t[f].valueOf()&&(c?(t[i]=new Date(t[i].valueOf()-o),t[f]=new Date(t[f].valueOf()+o)):(t[i]=n==="Y"&&t[i]===0?t[i]:t[i]-e,t[f]=t[f]+e)),r(t[s])&&r(t[h])&&t[s].valueOf()===t[h].valueOf()&&(c?(t[s]=t[s].valueOf()-o<t[i].valueOf()?t[i]:new Date(t[s].valueOf()-o),t[h]=t[h].valueOf()+o>t[f].valueOf()?t[f]:new Date(t[h].valueOf()+o)):((n!=="Y"||t[s]!==0)&&(t[s]=t[s]-e<t[i]?t[i]:t[s]-e),t[h]=t[h]+e>t[f]?t[f]:t[h]+e))},correctValueZeroLevel:function(){function t(t,i){n[t]<0&&n[i]<0&&(n[i]=0),n[t]>0&&n[i]>0&&(n[t]=0)}var n=this;u(n.maxY)||u(n.minY)||(t("minY","maxY"),t("minVisibleY","maxVisibleY"))}})}(jQuery,DevExpress),function(n){n.viz.charts.consts={dataTypes:{STRING:"string",NUMERIC:"numeric",DATETIME:"datetime"},axisTypes:{DISCRETE:"discrete",CONTINUOUS:"continuous",LOGARITHMIC:"logarithmic"}}}(DevExpress),function(n,t){var f=t.viz,o=new f.core.ParseUtils,e=f.charts.consts,i=e.dataTypes,r=e.axisTypes,u=t.utils;f.charts.DataValidator=t.Class.inherit({ctor:function(t,i,r,u){var f=this;i=i||[[]],t||(f._nullData=!0),f.groups=i,f.data=t||[],f._parsers={},f._errorShowList={},f._skipFields={},f.options=u||{},f.incidentOccured=r,f.userArgumentCategories=f.groups.length&&f.groups[0].length&&f.groups[0][0].options.argumentCategories,f.incidentOccured=f.incidentOccured?function(){r.apply(null,arguments)}:n.noop},validate:function(){var t=this;return t._data=t.data,(!u.isArray(t.data)||t._nullData)&&t.incidentOccured(t._errorMessages.incorrectDataMessage.apply(t)),t._checkType(),t._checkAxisType(),t.options.convertToAxisDataType&&(t._createParser(),t._parse()),t._sort(),n.each(t._skipFields,function(n,i){i===t._data.length&&t.incidentOccured(t._errorMessages.missingFieldMessage(n))}),t._data},_checkType:function(){var t=this,i=[],r=[],f=function(i,r){return n.each(i,function(u,f){n.each(f.getValueFields(),function(n,u){i.valueType=t._getType(r[u],i.valueType)})}),i.valueType?!0:void 0},e=function(i,r){return n.each(i,function(n,i){var u=i.getArgumentField();t.groups.argumentType=t._getType(r[u],t.groups.argumentType)}),t.groups.argumentType?!0:void 0};n.each(t.groups,function(n,u){if(!u.length)return null;var f=u[0].options.valueType,e=u[0].options.argumentType;u.valueType=f,t.groups.argumentType=e,f?null:i.push(u),e?null:r.push(u)}),(i.length||r.length)&&n.each(t.data,function(o,s){var h=!0;if(u.isObject(s))return n.each(i,function(n,t){h=h&&f(t,s)}),n.each(r,function(n,t){h=h&&e(t,s)}),!t.options.checkTypeForAllData&&h?!1:void 0})},_checkAxisType:function(){var t=this;n.each(t.groups,function(i,r){n.each(r,function(n,i){var u={};u.argumentAxisType=t._correctAxisType(t.groups.argumentType,i.options.argumentAxisType,!!(t.userArgumentCategories&&t.userArgumentCategories.length)),u.valueAxisType=t._correctAxisType(r.valueType,i.options.valueAxisType,!!(i.options.valueCategories&&i.options.valueCategories.length)),t.groups.argumentAxisType=t.groups.argumentAxisType||i.options.argumentAxisType,u.argumentType=t.groups.argumentType,u.valueType=r.valueType,i._updateDataType(u)})})},_createParser:function(){var t=this;n.each(t.groups,function(i,u){n.each(u,function(i,f){t._parsers[f.getArgumentField()]=t._createParserUnit(t.groups.argumentType,t.groups.argumentAxisType===r.LOGARITHMIC?t._filterForLogAxis:null),n.each(f.getValueFields(),function(n,i){t._parsers[i]=t._createParserUnit(u.valueType,f.options.valueAxisType===r.LOGARITHMIC?t._filterForLogAxis:null)}),f.getTagField()&&(t._parsers[f.getTagField()]=null)})})},_parse:function(){var t=this,i=[];n.each(t.data,function(r,f){var e={};if(!u.isObject(f)){f&&t.incidentOccured(t._errorMessages.incorrectDataMessage.apply(t));return}n.each(t._parsers,function(n,t){e[n]=t?t(f[n],n):f[n],e["original"+n]=f[n]}),i.push(e)}),this._data=i},_getType:function(n,t){return t===i.STRING||u.isString(n)?i.STRING:t===i.DATETIME||u.isDate(n)?i.DATETIME:u.isNumber(n)?i.NUMERIC:t},_correctAxisType:function(n,t,u){return(n===i.STRING&&(t===r.CONTINUOUS||t===r.LOGARITHMIC)&&this.incidentOccured(this._errorMessages.incompatibleTypesDataMessage()),t===r.LOGARITHMIC)?r.LOGARITHMIC:(t=(u||t===r.DISCRETE||n===i.STRING)&&r.DISCRETE,t||r.CONTINUOUS)},_filterForLogAxis:function(n,t){return n<=0?(this.incidentOccured(this._errorMessages.numericParsingMessage(t,n)),null):n},_createParserUnit:function(n,t){var i=this,r=n?o.getParser(n,undefined,!0):function(n){return n};return function(u,f){var e=r(u);return t&&(e=t.call(i,e,f)),e===undefined&&(i._addSkipFields(f),i._validUnit(u,f,n)),e}},_validUnit:function(n,t,r){n&&((n.length||!u.isDate(n))&&this.incidentOccured(this._errorMessages.unsupportedFieldMessage(t)),r===i.NUMERIC?this.incidentOccured(this._errorMessages.numericParsingMessage(t)):this.incidentOccured(this._errorMessages.dateParsingMessage(t)))},_sort:function(){var t=this,r=t.groups,e={},f=r.length&&r[0].length&&r[0][0].getArgumentField();u.isFunction(t.options.sortingMethod)?t._data.sort(t.options.sortingMethod):t.userArgumentCategories?(n.each(t.userArgumentCategories,function(n,t){e[t]=n}),t._data.sort(function(n,t){return n=n[f],t=t[f],e[n]-e[t]})):t.options.sortingMethod===!0&&r.argumentType!==i.STRING&&t._data.sort(function(n,t){return n[f]-t[f]})},_addSkipFields:function(n){this._skipFields[n]=(this._skipFields[n]||0)+1},_errorMessages:{missingFieldMessage:function(n){return"Data source does not contain the '"+n+"' field."},unsupportedFieldMessage:function(n){return"The '"+n+"' field contains data of an unsupported type."},incorrectDataMessage:function(){if(this._erorrDataSource!==!0)return this._erorrDataSource=!0,"Data source contains data of an unsupported type."},incompatibleTypesDataMessage:function(){return"The axis and data types are incompatible."},numericParsingMessage:function(n){return"The value of the '"+n+"' field cannot be parsed to a correct numeric value."},dateParsingMessage:function(n){return"Value of the '"+n+"' field cannot be parsed to a correct date."}}})}(jQuery,DevExpress),function(n,t){var u=t.viz,f=u.core.Palette,e=t.utils.isArray,r=20,o=50;u.charts.ThemeManager=u.core.BaseThemeManager.inherit(function(){var i=function(n,i){var r=this;n=n||{},i&&(r._themeSection=i),r._IE8=t.browser.msie&&t.browser.version<9,r.setTheme(n.theme),r.palette=new f(n.palette,{stepHighlight:o,theme:r._themeName})},u=function(){this.palette.dispose(),this.palette=null,this.callBase()},s=function(n){var i=n._theme,t=i.commonSeriesSettings,r=i.font,u;t.point=t.point||{},t.containerBackgroundColor=t.containerBackgroundColor||i.containerBackgroundColor,t.label=t.label||{},n._initializeFont(t.label.font)},h=function(n){var i=n._theme,t=i.commonAxisSettings,r=i.font,u,f;t&&(t.label=t.label||{},t.grid=t.grid||{},t.ticks=t.ticks||{},t.line=t.line||{},t.title=t.title||{},t.label.font=t.label.font||{},n._initializeFont(t.label.font),t.title.font=t.title.font||{},n._initializeFont(t.title.font))},c=function(t){var u=this,i={dataSource:t.dataSource,series:t.series},r;return delete t.dataSource,delete t.series,(t.valueAxis&&e(t.valueAxis)&&!t.valueAxis.length||n.isEmptyObject(t.valueAxis))&&delete t.valueAxis,(t.panes&&e(t.panes)&&!t.panes.length||n.isEmptyObject(t.panes))&&delete t.panes,r=n.extend(!0,{},u._theme,t),r.dataSource=i.dataSource,r.series=i.series,t.series=i.series,t.dataSource=i.dataSource,r},l=function(i,u,f){var a=this,e=n.extend(!0,{},u||a._theme.commonSeriesSettings),s=n.extend(!0,{},f||{}),c=((i.type||e.type||"")+"").toLowerCase(),h=~c.indexOf("bar"),v=~c.indexOf("bubble"),y=~c.indexOf("area"),o,l;return s=n.extend(!0,s,s[c]),e=n.extend(!0,e,e[c],s),i=i||{},(h||v)&&n.extend(!0,i,s.point,i.point),o=new t.Color(i.color||s.color||a.palette.getNextColor()),e.color=o.toHex(),e.border.color=e.border.color||o.toHex(),e.hoverStyle.color=e.hoverStyle.color||a._IE8&&(h||v||y)&&o.highlight(r)||o.toHex(),e.hoverStyle.border.color=e.hoverStyle.border.color||o.toHex(),e.selectionStyle.color=e.selectionStyle.color||a._IE8&&(h||v||y)&&o.highlight(r)||o.toHex(),e.selectionStyle.border.color=e.selectionStyle.border.color||o.toHex(),l=new t.Color(i.point&&i.point.color||s.point&&s.point.color||o.toHex()),e.point.color=l.toHex(),e.point.border.color=e.point.border.color||h&&e.border.color||l.toHex(),e.point.hoverStyle.color=e.point.hoverStyle.color||h&&e.hoverStyle.color||e.containerBackgroundColor,e.point.hoverStyle.border.color=e.point.hoverStyle.border.color||h&&e.hoverStyle.border.color||l.toHex(),e.point.selectionStyle.color=e.point.selectionStyle.color||h&&e.selectionStyle.color||e.containerBackgroundColor,e.point.selectionStyle.border.color=e.point.selectionStyle.border.color||h&&e.selectionStyle.border.color||l.toHex(),n.extend(!0,{},e,i)},a=function(t,i,r){var e=this,u=i||e._theme.commonSeriesSettings||{},f=(t.type||u.type||"").toLowerCase();return f&&f!=="pie"&&(u[f]=n.extend(!0,{},u[f],u.pie)),r=r||{},t=t||{},t=n.extend(!0,{},u,u[f],r,r[f],t)},v=function(i,u){var o=this,s=u||o._theme.commonSeriesSettings||{},f=n.extend(!0,{},s.pie),h=i.type||f.type||"",e;return i=i||{},e=new t.Color(i.color||o.palette.getNextColor()),f.color=e.toHex(),f.border.color=f.border.color||e.toHex(),f.hoverStyle.color=f.hoverStyle.color||o._IE8&&e.highlight(r)||e.toHex(),f.hoverStyle.border.color=f.hoverStyle.border.color||e.toHex(),f.selectionStyle.color=f.selectionStyle.color||o._IE8&&e.highlight(r)||e.toHex(),f.selectionStyle.border.color=f.selectionStyle.border.color||e.toHex(),n.extend(!0,{},f,i)},y=function(){this.palette.reset()},p=function(n){this.palette=new f(n||this._theme.defaultPalette,{stepHighlight:o,theme:this.themeName})};return{_themeSection:"chart",ctor:i,dispose:u,_initializeTheme:function(){var t=this,n=this._theme;n.legend=n.legend||{},n.legend.font=n.legend.font||{},t._initializeFont(n.legend.font),s(t),h(t),n.title=n.title||{},n.title.font=n.title.font||{},t._initializeFont(n.title.font),n.tooltip=n.tooltip||{},n.tooltip.font=n.tooltip.font||{},t._initializeFont(n.tooltip.font),n.loadingIndicator=n.loadingIndicator||{},n.loadingIndicator.font=n.loadingIndicator.font||{},t._initializeFont(n.loadingIndicator.font)},applyChartTheme:c,applyNextSeriesTheme:l,applyPieSeriesTheme:a,applyNextPieSegmentTheme:v,resetPalette:y,updatePalette:p}}())}(jQuery,DevExpress),function(n,t,i){var u=t.formatHelper,r=20;t.viz.charts.Tooltip=t.Class.inherit({ctor:function(n,t){this.textStyle={align:"center"},this.tooltipGroup=t,this._reinit(n)},dispose:function(){this.shadow=null,this.cloud=null,this.text=null,this.tooltipGroup=null,this.options=null,this.textStyle=null,this.renderer=null},update:function(n){this._reinit(n)},_reinit:function(t){t=t||{},this.renderer=t.renderer||this.renderer,this.customColor=t.color||this.customColor,this.textStyle.font=t.font||this.textStyle.font,this.canvasWidth=t.canvasWidth||this.canvasWidth,this.canvasHeight=t.canvasHeight||this.canvasHeight,delete t.renderer,delete t.font,this.options=n.extend(!0,{},this.options||{},t)},formatValueTooltip:function(n){return u.format(this.value,n.format,n.precision)},formatTooltip:function(t){var r=function(n){n.argumentText=u.format(n.argument,t.argumentFormat,t.argumentPrecision),n.percent!==i&&(n.percentText=u.format(n.percent,"percent",t.percentPrecision)),n.total!==i&&(n.totalText=u.format(n.total,t.format,t.precision))};return r(this),n.each(this.points||[],function(n,t){r(t)}),t.customizeText?t.customizeText.call(this,this):this.valueText},_getData:function(){var t=this,e=t.x,h=t.y,w=e,l=h,tt,b="center",r=[],a=[],v=t.text.getBBox(),c=t.options,y=c.paddingLeftRight,d=c.paddingTopBottom,o=c.arrowLength>0?c.arrowLength:0,p=c.cloudHorizontalPosition,k=c.cloudVerticalPosition,g=p!==i&&p!==null,nt=k!==i&&k!==null,u=v.width+y*2,f=v.height+d*2,s;return s=t._checkWidthText(u,f),s&&(v=s.bbox,u=s.cloudWidth,f=s.cloudHeight,y=s.paddingLeftRight,d=s.paddingTopBottom),(g?p==="right":u/2>e)?(a=t._setArrowLeft(u,f,o,e,h),b="left",w+=y):(g?p==="left":e+u/2>t.canvasWidth)?(a=t._setArrowRight(u,f,o,e,h),b="right",w-=y):a=t._setArrowCenter(u,f,o,e,h),(nt?k==="top":f+o<h)?(l-=o+f/2-v.height/2+t.tooltipOffset,t.tooltipInverted=!1):(l+=o+f/2+v.height/2+t.tooltipOffset,t.tooltipInverted=!0),n.extend(r,a),o>0&&!t.tooltipInverted&&(f+o<h&&(r[1]+=2),u/2>e?r[2]+=2:e+u/2>t.canvasWidth?r[r.length-2]-=2:(r[2]+=2,r[r.length-2]-=2)),l=t._correctYTextContent(l),{points:a,text:{x:w,y:l,align:b},pointsOfShadow:r}},_updateTextContent:function(){this.text.updateText(this.tooltipText),this.text.applySettings({font:this.textStyle.font})},_correctYTextContent:function(n){this.text.applySettings({y:n});var t=this.text.getBBox();return n-(t.y+t.height-n)},_adjustTextContent:function(n){this.text.applySettings({x:n.text.x,y:n.text.y,align:n.text.align})},_updateTooltip:function(){var n=this,t,i,u=4,r;n._updateTextContent(),i=n._getData(),n.shadow.applySettings({points:i.pointsOfShadow}),n.shadow.move(u/2,n.tooltipInverted?-u:u),n.cloud.applySettings({points:i.points,fill:n.fillColor,"class":n.className}),n._adjustTextContent(i),t=n.tooltipGroup.getBBox(),t.y+t.height>n.canvasHeight?(r=(n.canvasHeight-t.y)/t.height,n.tooltipGroup.applySettings({scale:r,translateX:n.x*(1-r),translateY:n.y*(1-r)})):n.tooltipGroup.applySettings({scale:1,translateX:0,translateY:0})},_createTextContent:function(){return this.renderer.createText("0",0,0,this.textStyle)},draw:function(){this.shadow||(this.shadow=this.renderer.createPath({},{fill:"#000000",stroke:"none",opacity:.1}),this.cloud=this.renderer.createArea({},{fill:this.customColor}),this.text=this._createTextContent()),this.shadow.append(this.tooltipGroup),this.cloud.append(this.tooltipGroup),this.text.append(this.tooltipGroup),this.hide()},show:function(){var n={visibility:"visible"};this.shadow.applySettings(n),this.cloud.applySettings(n),this.text.applySettings(n)},hide:function(){var n={visibility:"hidden"};this.shadow.applySettings(n),this.cloud.applySettings(n),this.text.applySettings(n)},move:function(n,t,i,r,u,f){this.x=n,this.y=t,this.tooltipOffset=i,this.tooltipText=r,this.fillColor=this.customColor||u,this.className=f,this._updateTooltip()},_setArrowCenter:function(n,t,u,f,e){var s=this,h=s.options.cloudVerticalPosition,tt=h!==i&&h!==null,o=!(tt?h==="top":t+u<e),v=f,c=o?e+s.tooltipOffset:e-s.tooltipOffset,y=v+r/2,p=o?c+u:c-u,w=y+n/2-r/2,l=p,b=w,k=o?l+t:l-t,d=b-n,a=k,g=d,nt=o?a-t:a+t,it=g+n/2-r/2,rt=nt;return[v,c,y,p,w,l,b,k,d,a,g,nt,it,rt]},_setArrowLeft:function(n,t,u,f,e){var s=this,h=s.options.cloudVerticalPosition,g=h!==i&&h!==null,o=!(g?h==="top":t+u<e),v=f,c=o?e+s.tooltipOffset:e-s.tooltipOffset,y=v+r,p=o?c+u:c-u,w=y+n-r,l=p,b=w,k=o?l+t:l-t,d=b-n,a=k,nt=d,tt=o?a-t-u:a+t+u;return[v,c,y,p,w,l,b,k,d,a,nt,tt]},_setArrowRight:function(n,t,u,f,e){var s=this,h=s.options.cloudVerticalPosition,g=h!==i&&h!==null,o=!(g?h==="top":t+u<e),v=f,c=o?e+s.tooltipOffset:e-s.tooltipOffset,y=v,p=o?c+u+t:c-u-t,w=y-n,l=p,b=w,k=o?l-t:l+t,d=b+n-r,a=k,nt=d+r,tt=o?a-u:a+u;return[v,c,y,p,w,l,b,k,d,a,nt,tt]},_checkWidthText:function(n,t){var i=this.x,a=this.y,r=this.tooltipText,u,o=this.options.paddingLeftRight,s=this.options.paddingTopBottom,h,l,c,f,e=this.text.getBBox();if(n<i||i+n<this.canvasWidth||n/2<i&&i+n/2<this.canvasWidth)return!1;if(r.indexOf("<br/>")===-1&&r.indexOf(" ")!==-1){for(l=Math.max(i,this.canvasWidth-i,2*Math.min(i,this.canvasWidth-i)),h=r.length*l/e.width,u=r.substr(0,~~h).lastIndexOf(" "),u===-1&&(u=r.substr(0).indexOf(" ")),c=r.substr(u+1).length,this.tooltipText=r.substr(0,u)+"<br/>";h<=c;)if(f=r.substr(u+1,~~h).lastIndexOf(" "),f===-1&&(f=r.substr(u+1).indexOf(" ")),f!==-1)this.tooltipText+=r.substr(u+1,f)+"<br/>",c=r.substr(u+1+f).length,u+=f+1;else break;this.tooltipText+=r.substr(u+1),this.text.updateText(this.tooltipText),e=this.text.getBBox(),n=e.width+o*2,t=e.height+s*2}return n>i&&i+n>this.canvasWidth&&(n/2>i||i+n/2>this.canvasWidth)&&(o=5,s=5,n=e.width+2*o,t=e.height+2*s),{bbox:e,cloudWidth:n,cloudHeight:t,paddingTopBottom:s,paddingLeftRight:o}}})}(jQuery,DevExpress),function(n){n.viz.charts.series.consts={events:{mouseover:"mouseover",mouseout:"mouseout",mousemove:"mousemove",touchstart:"touchstart",touchmove:"touchmove",touchend:"touchend",mousedown:"mousedown",mouseup:"mouseup",click:"click",selectSeries:"selectseries",deselectSeries:"deselectseries",selectPoint:"selectpoint",deselectPoint:"deselectpoint",showPointTooltip:"showpointtooltip",hidePointTooltip:"hidepointtooltip"},states:{hover:"hover",normal:"normal",selected:"selected",normalMark:0,hoverMark:1,selectedMark:2},animations:{showDuration:{duration:400},hideGroup:{opacity:.0001},showGroup:{opacity:1}}}}(DevExpress),function(n,t){var i=t.viz.charts.series,r=r=t.utils;i.SeriesPointsDrawerMixin={drawPoints:function(t,i,r,u){var f=this,e=f.areLabelsVisible();f.hoverPattern&&(f.styles.states.hover.fill=this.hoverPattern.id,f.styles.states.selected.fill=this.selectedPattern.id),n.each(r,function(n,r){(r.adjustSeriesLabels=f.adjustSeriesLabels,r.isInVisibleArea(r.x,r.y,r.width||0,r.height||0))&&(r.options.visible&&r.drawMarker(f.renderer,t,u),f.styles.point.label&&!f.styles.point.label.visible?(e||r.options.label&&r.options.label.visible)&&r.drawLabel(f.renderer,i):e&&r.options.label.visible&&r.drawLabel(f.renderer,i))})},drawPointTrackers:function(t){var i=this,r=!i._suppressTrackers;n.each(t,function(n,t){t.isInVisibleArea(t.x,t.y,t.width||0,t.height||0)&&r&&t.drawTrackerMarker(i.renderer,i.options.markerTrackerGroup)})}},i.LineDrawerMixin={drawLine:function(n,t){this.paths.push(this.createSpecialPath(t,this.styles.attributes).append(n))},drawLineTracker:function(n){var t=this,r=this.styles,u,i;this._suppressTrackers||(u=r.attributes.strokeWidth<20?20:r.attributes.strokeWidth,i=t.createSpecialPath(n,{strokeWidth:u,stroke:"grey",opacity:.0001}).append(t.options.seriesTrackerGroup),t.trackerElements.push(i),i.data({series:t}))},createSpecialPath:function(n,t){return this.renderer.createPath(n,t)}},i.AreaDrawerMixin={drawArea:function(n,t,i){if(this.resetLineColors(),(this.isStackedSeries()||this.isFullStackedSeries())&&this.seriesGroup.toBackground(),this.segments[t].length===1){var r=this.renderer.createPath(i,this.styles.stick).append(n);r.stick=!0,this.areas.push(r)}else this.areas.push(this.createSpecialArea(i,this.styles.area).append(n));this.hoverPattern&&(this.styles.area.states.hover.fill=this.hoverPattern.id,this.styles.area.states.selected.fill=this.selectedPattern.id,this.styles.states.hover.fill="none",this.styles.states.selected.fill="none")},drawAreaTracker:function(n){var i;this._suppressTrackers||(i=this.areaSegments[n].length===2?this.renderer.createPath(this.areaSegments[n],{strokeWidth:20,stroke:"grey",opacity:.0001}).append(this.options.seriesTrackerGroup):this.createSpecialArea(this.areaSegments[n],{strokeWidth:0,fill:"grey",opacity:.0001}).append(this.options.seriesTrackerGroup),this.trackerElements.push(i),i.data({series:this}))},prepareSegments:function(t){this.areaSegments=this.areaSegments||[];var i=this.preparedSegments||this.segments,r=n.map(i[t],function(n){return n.getCoords()}),u=n.map(i[t].slice().reverse(),function(n){return n.getCoords(!0)});this.areaSegments[t]=r.concat(u)},createSpecialArea:function(n,t){return this.renderer.createArea(n,t)}},i.SplineDrawerMixin={drawSpline:function(n,t,r){i.LineDrawerMixin.drawLine.call(this,n,r)},drawSplineTracker:function(n){i.LineDrawerMixin.drawLineTracker.call(this,this.preparedSegments[n])},prepareSegments:function(t){var i=this,u=[],f=i.segments[t],e,o;i.preparedSegments=i.preparedSegments||[],e=function(n,t,i){return n>t&&i>n||n<t&&i<n?n:i},o=function(n,t,i){var u=r.clone(n);return u.x=t,u.y=i,u},f.length!==1?n.each(f,function(n,t){var a,v,y,p,h,c,r,s,b,k,d,g,st,l=.5,ft,et,ot,it,rt,ut,nt,tt,w;if(!n){u.push(t),u.push(t);return}if(h=f[n-1],n<f.length-1)c=f[n+1],r=t.x,s=t.y,b=h.x,k=c.x,d=h.y,g=c.y,ft=!!(!i.options.rotated&&(s<=h.y&&s<=c.y||s>=h.y&&s>=c.y)||i.options.rotated&&(r<=h.x&&r<=c.x||r>=h.x&&r>=c.x)),ft?i.options.rotated?(y=a=r,p=(s+c.y)/2,v=(s+h.y)/2):(p=v=s,y=(r+c.x)/2,a=(r+h.x)/2):(it=g-d,rt=b-k,ut=d*k-b*g,i.options.rotated?(tt=s,nt=-1*(rt*tt+ut)/it,w=nt-r||0,b-=w,k-=w):(nt=r,tt=-1*(it*nt+ut)/rt,w=tt-s||0,d-=w,g-=w),y=(r+l*k)/(1+l),p=(s+l*g)/(1+l),a=(r+l*b)/(1+l),v=(s+l*d)/(1+l)),i.options.rotated?(a=e(h.x,r,a),y=e(c.x,r,y)):(v=e(h.y,s,v),p=e(c.y,s,p)),et=o(t,a,v),ot=o(t,y,p),u.push(et,t,ot);else{u.push(t,t);return}}):u.push(f[0]),i.preparedSegments[t]=u},createSpecialPath:function(n,t){return this.renderer.createBezierPath(n,t)}},i.SplineAreaDrawerMixin={drawSplineArea:i.AreaDrawerMixin.drawArea,drawSplineAreaTracker:i.AreaDrawerMixin.drawAreaTracker,prepareSegments:function(n){i.SplineDrawerMixin.prepareSegments.call(this,n),i.AreaDrawerMixin.prepareSegments.call(this,n);var t=this.areaSegments[n],r=t[t.length/2-1],u=t[t.length/2];t.splice(t.length/2,0,{x:r.x,y:r.y},{x:u.x,y:u.y})},createSpecialArea:function(n,t){return this.renderer.createBezierArea(n,t)}},i.StepLineDrawerMixin={drawStepLine:function(n,t,r){i.LineDrawerMixin.drawLine.call(this,n,r)},drawStepLineTracker:function(n){i.LineDrawerMixin.drawLineTracker.call(this,this.preparedSegments[n])},prepareSegments:function(t){var u=this,i=[];u.preparedSegments=u.preparedSegments||[],n.each(u.segments[t],function(n,t){var u,f;if(!n){i.push(t);return}u=i[i.length-1].y,u!==t.y&&(f=r.clone(t),f.y=u,i.push(f)),i.push(t)}),u.preparedSegments[t]=i},createSpecialPath:function(n,t){return this.renderer.createPath(n,t)}},i.StepAreaDrawerMixin={drawStepArea:i.AreaDrawerMixin.drawArea,drawStepAreaTrackers:i.AreaDrawerMixin.drawAreaTracker,prepareSegments:function(n){i.StepLineDrawerMixin.prepareSegments.call(this,n),i.AreaDrawerMixin.prepareSegments.call(this,n)},createSpecialArea:function(n,t){return this.renderer.createArea(n,t)}}}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r="allseriespoints",u="includepoints",f=i.consts.states;i.pointVisualizationMixin={applyPointStyle:function(t,i){(t===r||t===u)&&n.each(this.segments,function(t,r){n.each(r,function(n,t){t.fullState&f.selectedMark||t[i]()})})},applyPointNormalStyle:function(n){this.applyPointStyle(n,"applyNormalStyle")},applyPointHoverStyle:function(n){this.applyPointStyle(n,"applyHoverStyle")},applyPointSelectionStyle:function(n){this.applyPointStyle(n,"applySelectionStyle")}},i.pathVisualizationMixin={applyPathStyle:function(t){var i=this;n.each(this.paths,function(n,i){i.applySettings(t)})},applyPathNormalStyle:function(){this.applyPathStyle(this.styles.states.normal)},applyPathHoverStyle:function(){this.applyPathStyle(this.styles.states.hover)},applyPathSelectionStyle:function(){this.applyPathStyle(this.styles.states.selected)}},i.areaVisualizationMixin={applyAreaStyle:function(t,i){var r=this;this.areas&&n.each(this.areas,function(n,t){t.stick?t.applySettings(r.styles.stick.states[i]):t.applySettings(r.styles.area.states[i])})},applyAreaNormalStyle:function(n){this.applyAreaStyle(n,"normal")},applyAreaHoverStyle:function(n){this.applyAreaStyle(n,"hover")},applyAreaSelectionStyle:function(n){this.applyAreaStyle(n,"selected")}}}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series;i.LineSeriesAdjustOptionsMixin={adjustOptions:function(){var u=this.styles,n=u.attributes,t=u.states.hover,i=u.states.selected,r=u.states.normal;n.stroke=n.fill,n.fill="none",n.strokeWidth=n.lineWidth,r.stroke=r.fill,r.fill="none",r.strokeWidth=r.lineWidth,t.stroke=t.fill,t.fill="none",t.strokeWidth=t.lineWidth,i.stroke=i.fill,i.fill="none",i.strokeWidth=i.lineWidth}},i.AreaSeriesAdjustOptionsMixin={adjustOptions:function(){var t=this.styles,i=t.attributes,r=t.states,u=r.hover,f=r.selected,e=r.normal,o={},s={},h={},c={},l={},a={},n;n="opacity"in i?i.opacity:.5,o={fill:e.fill,stroke:"none",strokeWidth:0,opacity:n},s={fill:u.fill,stroke:"none",strokeWidth:0,opacity:n},h={fill:f.fill,stroke:"none",strokeWidth:0,opacity:n},c={fill:"none",stroke:e.fill,strokeWidth:1,opacity:n},l={fill:"none",stroke:u.fill,strokeWidth:1,opacity:n},a={fill:"none",stroke:f.fill,strokeWidth:1,opacity:n},t.area={"class":"dxc-area-element",fill:i.fill,stroke:"none",strokeWidth:0,opacity:n,states:{normal:o,hover:s,selected:h}},t.stick={"class":"dxc-area-element",fill:"none",stroke:i.fill,strokeWidth:1,opacity:n,states:{normal:c,hover:l,selected:a}}}},i.BarSeriesAdjustOptionsMixin={adjustOptions:function(){var t=this.styles,i=this.options,c=t.attributes,l=t.states.hover,a=t.states.selected,v=t.states.normal,r=t.point.attributes,u=t.point.states.hover,f=t.point.states.selected,e=t.point.states.normal,o=i.hoverMode,s=i.selectionMode,h=function(n){if(!n)return!1;switch(n.toLowerCase()){case"allseriespoints":case"allargumentpoints":case"none":return!0}};n.extend(!0,r,c),n.extend(!0,u,l),n.extend(!0,f,a),n.extend(!0,e,v),u.r=f.r=e.r=r.r,t.point.hoverMode=h(o)&&o,t.point.selectionMode=h(s)&&s,t.point.visible=!0}},i.CandleStickSeriesAdjustOptionsMixin={adjustOptions:function(){var t=this.styles,e=this.options,i=t.attributes,r=t.states.hover,u=t.states.selected,f=t.states.normal,o=t.point.attributes,s=t.point.states.hover,h=t.point.states.selected,c=t.point.states.normal,l=e.hoverMode,a=e.selectionMode,v=function(n){if(!n)return!1;switch(n.toLowerCase()){case"allseriespoints":case"allargumentpoints":case"none":return!0}};i.stroke=i.fill,i.strokeWidth=i.lineWidth,f.stroke=f.fill,f.strokeWidth=f.lineWidth,r.stroke=r.fill,r.strokeWidth=r.lineWidth,u.stroke=u.fill,u.strokeWidth=u.lineWidth,n.extend(!0,o,i),n.extend(!0,s,r),n.extend(!0,h,u),n.extend(!0,c,f),s.r=h.r=c.r=o.r=0,t.point.hoverMode=v(l)&&l,t.point.selectionMode=v(a)&&a,t.point.visible=!0}},i.BubleSeriesAdjustOptionsMixin={adjustOptions:function(){var t=this.styles,i=this.options,h=t.attributes,c=t.states.hover,l=t.states.selected,a=t.states.normal,v=t.point.attributes,r=t.point.states.hover,u=t.point.states.selected,f=t.point.states.normal,e=i.hoverMode,o=i.selectionMode,s=function(n){if(!n)return!1;switch(n.toLowerCase()){case"allseriespoints":case"allargumentpoints":case"none":return!0}};n.extend(!0,v,h),n.extend(!0,r,c),n.extend(!0,u,l),n.extend(!0,f,a),delete r.r,delete u.r,delete f.r,t.point.hoverMode=s(e)&&e,t.point.selectionMode=s(o)&&o,t.point.visible=!0}}}(jQuery,DevExpress),function(n,t,i){var r=t.viz.charts.series;r.pointsAnimation={animatePoints:function(t){if(this.points&&this.points.length){var r=this.points.length-1;n.each(this.points,function(n,u){u.animate(n===r?t:i)})}else t&&t()},sequentialAnimatePoints:function(n){if(this.styles&&this.styles.point.visible&&this.segments){var t=this,r=0,u=.2,f=t.points&&t.points.length,o=1/(u*(f-1)+1),e=function(){t.points[r]&&t.points[r++].animate(r===f?n:i,o,function(n,t){t>=u&&(this.step=null,e())})};e()}}},r.pathAnimation={animatePaths:function(t){var r=this,u=r.preparedSegments||r.segments;u&&u.length&&r.paths&&r.paths.length?n.each(r.paths,function(n,r){r.animate({points:u[n]},{},n==u.length-1?t:i)}):t&&t()},getZeroPathPoints:function(t){var i=this.preparedSegments||this.segments;return n.map(i[t],function(n){return n.getDefaultCoords()})}},r.areaAnimation={animateAreas:function(t){var r=this,u;r.areaSegments&&r.areaSegments.length&&r.areas?(u=r.areas.length-1,n.each(r.areas,function(n,f){f.animate({points:r.areaSegments[n]},i,n===u?t:i)})):t&&t()},getZeroAreaPoints:function(t){var i,r,u=this.preparedSegments||this.segments;return i=n.map(u[t],function(n){return n.getDefaultCoords()}),r=n.map(u[t].slice().reverse(),function(n){return n.getDefaultCoords()}),i.concat(r)}},r.splineAreaAnimation={animateAreas:function(n){r.areaAnimation.animateAreas.call(this,n)},getZeroAreaPoints:function(n){var t=r.areaAnimation.getZeroAreaPoints.call(this,n),i=t[t.length/2-1],u=t[t.length/2];return t.splice(t.length/2,0,{x:i.x,y:i.y},{x:u.x,y:u.y}),t}}}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,u=t.utils.isDefined,f=window.isFinite,r=t.utils,e=r.normalizeAngle;i.specialAreaMethodsMixin={resetLineColors:function(){var t=this.styles,i=t.attributes,n=t.states,r=n.hover,u=n.selected,f=n.normal;i.fill="none",delete i.lineWidth,f.fill="none",delete f.lineWidth,r.fill="none",delete r.lineWidth,u.fill="none",delete u.lineWidth}},i.specialBarMethodsMixin={_getPointSize:function(){return 3}},i.specialCandleStickMethodsMixin={getRangeData:function(t){var i=this,s=i.options,h=s.rotated,c=h?"X":"Y",o=h?"Y":"X",l=i.points,f=[],e=[],a=function(n,t){return n-t},v;return n.each(this.points,function(n,t){u(t.argument)&&e.push(t.argument),t.hasValue()&&(f.push(t.highValue),f.push(t.lowValue))}),i.rangeData={},v=function(n,t){var u;r.isDefined(t)&&(u=Math.abs(n-t)),r.isDefined(u)&&(u<i.rangeData.intervalX||!r.isDefined(i.rangeData.intervalX))&&(i.rangeData.intervalX=u)},f.length&&(f.sort(a),i.rangeData["max"+c]=f[f.length-1],i.rangeData["min"+c]=f[0],n.each(l,function(n,t){var i,u=t.argument,r;n!==0&&(i=l[n-1],r=i.argument),v(u,r)})),e.length&&s.argumentAxisType!=="discrete"?(e.sort(a),i.rangeData["min"+o]=e[0],i.rangeData["max"+o]=e[e.length-1]):i.rangeData["categories"+o]=e,this._zoomAxis(t),this.rangeData},_setPointStylesReduct:function(n,t,i,r){var e=r.customState&&r.customState.innerColor||this.styles.reduction.innerColor,u="dx-candle-default",f=r.customState&&r.customState.color||this.styles.reduction.color;return t!==null&&(n!==0&&this.prevLevelValue!==null&&t<this.prevLevelValue&&(r.attributes.fill=r.states.normal.fill=r.states.hover.fill=r.states.selected.fill=f,r.attributes.stroke=r.states.normal.stroke=r.states.hover.stroke=r.states.selected.stroke=f,u="dx-candle-reduction"),this.prevLevelValue=t),i.open<i.close&&(r.attributes.fill=r.states.normal.fill=r.states.hover.fill=r.states.selected.fill=e,u=(u?u:"")+" dx-candle-positive"),r.attributes["class"]=u,u},reinitData:function(t){var r=this,u,y=i.pointFactory,h=this.options.argumentField||"date",f=this.options.openValueField||"open",e=this.options.highValueField||"high",o=this.options.lowValueField||"low",s=this.options.closeValueField||"close",l=this.options.tagField,c,a,v;if(this.segments=[],!t.length){this.points=[];return}r.level=this.styles.reduction.level;switch((r.level||"").toLowerCase()){case"open":u=f;break;case"high":u=e;break;case"low":u=o;break;default:u=s,r.level="close"}r.styles.pointStyles=[],r.pointsByArgument={},r.className="dx-candle-default",this.points=n.map(t,function(t,i){var p;if(t[h]!==undefined&&t[h]!==null&&t[f]!==undefined&&t[e]!==undefined&&t[o]!==undefined&&t[s]!==undefined)return a=n.extend(!0,{},r.styles.point||{}),c=r._getPointStyle(a,i,t[h],t[u],undefined,t[l],{highValue:t[e],lowValue:t[o],closeValue:t[s],openValue:t[f]}),v=r._setPointStylesReduct(i,t[u],{open:t[f],high:t[e],close:t[s],low:t[o]},c),p=y.createPoint(r.type,{openValue:t[f],pointClassName:v,highValue:t[e],lowValue:t[o],closeValue:t[s],argument:t[h],originalOpenValue:t["original"+f],originalHighValue:t["original"+e],originalLowValue:t["original"+o],originalCloseValue:t["original"+s],originalArgument:t["original"+h],options:c,tag:t[l],reductionValue:t[u],series:r}),r.pointsByArgument[p.argument.valueOf()]=r.pointsByArgument[p.argument.valueOf()]||p,p}),delete this.prevLevelValue,r.originalPoints=r.points,this._segmentPoints()},createPatterns:function(){var t=this,i=t.styles.states.hover,r=t.styles.states.selected,u=t.styles.states.normal,e=t.styles.reduction.color,f=t.renderer;t.styles.pointStyles=t.styles.pointStyles||[],n.each(t.styles.pointStyles,function(n,i){if(i){var u=i.states.hover,f=i.states.selected,r=i.customState;i.hoverPatternColor||(i.hoverPatternColor=r.hoverColor,i.selectedPatternColor=r.selectedColor),i.hoverPattern||(i.hoverPattern=t.renderer.createPattern(i.hoverPatternColor,u.hatching),i.selectedPattern=t.renderer.createPattern(i.selectedPatternColor,f.hatching)),i.hoverPattern.append(),i.selectedPattern.append()}}),t.callBase(),t.patternColorReduction||(t.patternColorReduction=e),t.hoverPatternReduction||(t.hoverPatternReduction=f.createPattern(u.fill===i.fill?t.patternColorReduction:i.fill,i.hatching),t.selectedPatternReduction=f.createPattern(u.fill===r.fill?t.patternColorReduction:r.fill,r.hatching)),t.hoverPatternReduction.append(),t.selectedPatternReduction.append()},createMarkerGroups:function(t){var i=this.styles,r=i.reduction,u=n.extend({"class":"default-markers"},i.point.states.normal),f=n.extend({"class":"reduction-markers"},i.point.states.normal,{fill:r.color,stroke:r.color}),e=n.extend({"class":"default-positive-markers"},i.point.states.normal,{fill:r.innerColor}),o=n.extend({"class":"reduction-positive-markers"},i.point.states.normal,{fill:r.innerColor,stroke:r.color});return{defaultMarkersGroup:this.renderer.createGroup(u).append(t),reductionMarkersGroup:this.renderer.createGroup(f).append(t),defaultPositiveMarkersGroup:this.renderer.createGroup(e).append(t),reductionPositiveMarkersGroup:this.renderer.createGroup(o).append(t)}},getValueFields:function(){return[this.options.openValueField,this.options.highValueField,this.options.lowValueField,this.options.closeValueField]},updateTeamplateFieldNames:function(){var n=this;n.options.openValueField=n.options.openValueField+n.name,n.options.highValueField=n.options.highValueField+n.name,n.options.lowValueField=n.options.lowValueField+n.name,n.options.closeValueField=n.options.closeValueField+n.name,n.options.tagField=n.options.tagField+n.name},_getPointSize:function(){return 10},_preparePointStyle:function(n){var t=this.callBase(n),i=t.attributes,r=t.states.normal,u=t.states.hover,f=t.states.selected;return t.customState={},n.width&&(i.strokeWidth=n.width),i.stroke=i.fill,n.width&&(r.strokeWidth=n.width),r.stroke=r.fill,n.hoverStyle.width&&(u.strokeWidth=n.hoverStyle.width),t.customState.hoverColor=u.stroke=u.fill,n.selectionStyle.width&&(f.strokeWidth=n.selectionStyle.width),t.customState.selectedColor=f.stroke=f.fill,t.customState.color=n.color,t.customState.innerColor=n.innerColor,t}},i.specialPieMethodsMixin={arrangePoints:function(){var t=this,i=t.styles.minSegmentSize,a=t.options.startAngle,r,e,o=0,y=this.translator,u=0,c,f,l=0,s=0,h,v=t.options.segmentsDirection!=="anticlockwise";for(t.points=n.map(t.points,function(n){return n.value===null||n.value<0||n.value===0&&!i?null:n}),r=t.points,e=r.length,f=0;f<e;f++)u+=r[f].value;u===0&&(u=e,n.each(t.points,function(n,t){t.value=1})),i&&(n.each(r,function(n,t){t.value<i*u/360?s+=i:l+=t.value}),h=s<360?i*l/(360-s):0),n.each(v?r:r.concat([]).reverse(),function(n,t){var r=t.value,f;i&&r<h&&(f=h,t.value=f),c=r/u,t.correctValue(o,c),t.shiftedAngle=a,o=o+(f||r)})},correctPosition:function(t){n.each(this.points,function(n,i){i.correctPosition(t)})},getRangeData:function(){var n=this.callBase();return n?(n.minY!==undefined&&(n.minY=n.minY>0?0:n.minY,n.maxY=n.maxY<0?0:n.maxY),n):n},parseStyleOptions:function(n){n.label&&n.label.position&&n.label.position!=="outside"&&n.label.position!=="inside"&&n.label.position!=="columns"&&(n.label.position="outside"),n.label.position&&n.label.position==="columns"&&(n.label.connector.visible=!0),this.options.segmentsDirection=n.segmentsDirection||"clockwise",this.options.startAngle=f(n.startAngle)?e(n.startAngle):0;var t=this.styles&&this.styles.pointStyles||{};return this.styles=this.callBase(n),this.styles.pointStyles=t,this.adjustOptions(),this.styles}},i.specialBubbleMethodsMixin={reinitData:function(n){var t=this,v=i.pointFactory.createPoint,y=t.options.rotated,l,f,u,e,o=t.options,s=o.argumentField,h=o.valueField,c=o.sizeField,a=o.tagField;for(n&&n.length&&(this._canRenderCompleteHandle=!0),t.styles.pointStyles=[],t.points=[],t.pointsByArgument={},t.segments=[],f=0;f<n.length;f++)(u=n[f],r.isDefined(u[h])&&r.isDefined(u[s])&&r.isDefined(u[c]))&&(l=t._getPointStyle(t.styles.point,f,u[s],u[h],undefined,u[a],{size:u[c]}),e=v(t.type,{value:u[h],argument:u[s],size:u[c],originalValue:u["original"+h],originalArgument:u["original"+s],rotated:y,options:l,tag:u[a],series:t}),t.points.push(e),t.pointsByArgument[e.argument.valueOf()]=t.pointsByArgument[e.argument.valueOf()]||e);t.originalPoints=t.points,t._segmentPoints()},getValueFields:function(){return[this.options.valueField,this.options.sizeField]},updateTeamplateFieldNames:function(){var n=this;n.options.valueField=n.options.valueField+n.name,n.options.sizeField=n.options.sizeField+n.name,n.options.tagField=n.options.tagField+n.name},_preparePointStyle:function(n){var t=this.callBase(n);return n.opacity&&(t.attributes.opacity=t.states.normal.opacity=n.opacity),delete t.attributes.r,delete t.states.normal.r,delete t.states.hover.r,delete t.states.selected.r,t}}}(jQuery,DevExpress),function(n,t){var r=t.viz.charts.series,i=t.utils;r.SeriesDataFilterMixin={_fusionPoints:function(n,t,i){var u=this._calcMedianValue(n,"value");return r.pointFactory.createPoint(t,{value:u,argument:i,originalValue:u,originalArgument:i,rotated:this.options.rotated,options:this.styles.point,tag:null,series:this})},_calcMedianValue:function(t,r){var f,u;return u=n.map(t,function(n){return n[r]}),u.sort(function(n,t){return n-t}),f=u[Math.floor(u.length/2)],i.isDefined(f)?f:null},_resample:function(t,i){var u=this,f=[],e,o,r=0;return this.options.argumentAxisType==="discrete"||this.options.valueAxisType==="discrete"?(i=this.getOriginalPoints().length/t,e=n.map(this.getOriginalPoints(),function(n,t){return Math.floor(r)===t?(r+=i,n):null})):(e=n.map(this.getOriginalPoints(),function(n){switch(u._isInInterval(n.argument,t,r,i)){case!0:f.push(n);break;case!1:return null;case"nextInterval":for(o=u._fusionPoints(f,u.type,t[r],r);u._isInInterval(n.argument,t,r,i)==="nextInterval";)r++;if(f=[],u._isInInterval(n.argument,t,r,i)===!0&&f.push(n),o)return o}}),f.length&&e.push(u._fusionPoints(f,u.type,t[r])),delete u.prevLevelValue,e)},_isInInterval:function(t,r,u,f){var e=r[u],s=r[u+1],o;return(f=n.isNumeric(f)?f:i.convertDateTickIntervalToMilliseconds(f),o=i.isDate(e)?new Date(e.getTime()+f):e+f,t>=e&&t<o)?!0:t<e||s===undefined?!1:"nextInterval"}}}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,u=t.utils,r=i.SeriesDataFilterMixin;i.FinancialSeriesDataResamplerMixin={_fusionPoints:function(t,r,f,e){var o=u.clone(t[0]),s,c=-Infinity,l=+Infinity,h,a,v,y;if(t.length){n.each(t,function(n,t){t.hasValue()&&(c=Math.max(c,t.highValue),l=Math.min(l,t.lowValue),h=h!==undefined?h:t.openValue,a=t.closeValue!==undefined?t.closeValue:a)}),o.argument=f,o.openValue=h,o.closeValue=a,o.highValue=c,o.lowValue=l;switch((this.level||"").toLowerCase()){case"open":s=h;break;case"high":s=c;break;case"low":s=l;break;default:s=a}return v=n.extend(!0,{},this.styles.point),y=this._setPointStylesReduct(e,s,{open:h,close:a,high:c,low:l},v),o.pointClassName=y,o.options=v,o.reductionValue=s,i.pointFactory.createPoint(r,o)}},_resample:r._resample,_isInInterval:r._isInInterval}}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,u=t.utils,r=i.SeriesDataFilterMixin;i.RangeSeriesDataFilterMixin={_fusionPoints:function(n,t,r){var u=i.SeriesDataFilterMixin._calcMedianValue(n,"value"),f=i.SeriesDataFilterMixin._calcMedianValue(n,"minValue");return(u===null||f===null)&&(u=f=null),i.pointFactory.createPoint(t,{minValue:f,value:u,argument:r,originalMinValue:f,originalValue:u,originalArgument:r,rotated:this.options.rotated,options:this.styles.point,tag:null,series:this})},_resample:r._resample,_isInInterval:r._isInInterval}}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.SeriesDataFilterMixin,u="value",f="size";i.BubbleSeriesDataResamplerMixin={_fusionPoints:function(n,t,r){var e=this._calcMedianValue(n,u),o=this._calcMedianValue(n,f);return i.pointFactory.createPoint(t,{size:o,value:e,argument:r,originalValue:e,originalArgument:r,rotated:this.options.rotated,options:this.styles.point,tag:null,series:this})},_resample:r._resample,_isInInterval:r._isInInterval,_calcMedianValue:r._calcMedianValue}}(jQuery,DevExpress),function(n,t){var u=t.viz.charts.series,o=u.consts.events,f=u.consts.states,i=t.utils,r=t.formatHelper,e="canvas_position_default";u.BasePoint=t.Class.inherit({ctor:function(n){this.LABEL_BACKGROUND_PADDING_X=8,this.LABEL_BACKGROUND_PADDING_Y=4,this.LABEL_OFFSET=10,this.rotated=!!n.rotated,n.options.label&&n.options.label.position&&n.options.label.position!=="outside"&&n.options.label.position!=="inside"&&(n.options.label.position="outside"),this.options=n.options,this.series=n.series,this.value=this.initialValue=n.value,this.argument=this.initialArgument=n.argument,this.originalValue=n.originalValue,this.originalArgument=n.originalArgument,this.minValue=e,this.labelFormatObject={argument:this.initialArgument,value:this.initialValue,seriesName:this.series.name,originalValue:this.originalValue,originalArgument:this.originalArgument},this.tag=n.tag,this.pointClassName=n.pointClassName||""},dispose:function(){var n=this;n.off(),n.trackerGraphic&&n.trackerGraphic.removeData(),n.graphic=null,n.trackerGraphic=null,n.hoverPattern=null,n.selectedPattern=null,n.label=null,n.labelBackground=null,n.connector=null,n.insideLabelGroup=null,n.labelGroup=null,n.points=null,n.translator=null,n.options=null,n.series=null,n.tag=null,n.labelFormatObject=null,n.stackPoints=null},formatLabel:function(n){return this.valueText=r.format(this.value,n.format,n.precision),this.argumentText=r.format(this.argument,n.argumentFormat,n.argumentPrecision),this.percent!==undefined&&(this.percentText=r.format(this.percent,"percent",n.percentPrecision)),this.total!==undefined&&(this.totalText=r.format(this.total,n.format,n.precision)),n.customizeText?n.customizeText.call(this,this):this.valueText},setOptions:function(n){this.options=n},translate:function(n){(this.translator=n=n||this.translator,this.translator&&this.hasValue())&&(this.rotated?(this.y=n.translateY(this.argument),this.x=n.translateX(this.value),this.minX=n.translateX(this.minValue),this.defaultX=n.translateX(e)):(this.y=n.translateY(this.value),this.minY=n.translateY(this.minValue),this.x=n.translateX(this.argument),this.defaultY=n.translateY(e)),this._calculateVisibility(this.x,this.y,0,0),this.prepareStatesOptions())},_calculateVisibility:function(n,t,i,r){var u;this.translator&&this.translator.getCanvasVisibleArea&&(u=this.translator.getCanvasVisibleArea()||{},this.visible=u.minX>n+(i||0)||u.maxX<n||u.minY>t+(r||0)||u.maxY<t?!1:!0)},correctValue:function(n){this.value+=n,i.isNumber(this.minValue)?this.minValue+=n:this.minValue=n,this.translate()},setPercentValue:function(n,t){var u=this.value/n||0,r;i.isNumber(this.minValue)?(r=this.minValue/n||0,this.labelFormatObject.percent=u-r):this.labelFormatObject.percent=u,this.labelFormatObject.total=n,t&&(this.value=u,this.minValue=r?r:this.minValue,this.translate())},getCoords:function(n){return n?this.rotated?{x:this.minX,y:this.y}:{x:this.x,y:this.minY}:{x:this.x,y:this.y}},getDefaultCoords:function(){return this.rotated?{x:this.defaultX,y:this.y}:{x:this.x,y:this.defaultY}},getTooltipCoords:function(){return this.graphic?{x:this.x,y:this.y,offset:this.graphic.getBBox().height/2}:{x:this.x,y:this.y,offset:0}},isInVisibleArea:function(){return this.visible},drawMarker:function(t,i,r){if(this.hasValue()){var y=this.options.attributes.r,b=this.options.states.normal,u=this.options.image,f,k,l,e,o,a,v,p=20,w=20,s,h,c;if(r&&(this.rotated?s=this.defaultX-this.x:h=this.defaultY-this.y),c=n.extend({translateX:s,translateY:h},this.options.attributes),u)l=u.url?u.url.toString():u.toString(),e=u.width||p,o=u.height||w,a=Math.round(e*.5),v=Math.round(o*.5),f=t.createImage(this.x-a,this.y-v,e,o,l,{location:"center"});else switch(this.options.symbol){case"circle":f=t.createCircle(this.x,this.y,y,c);break;case"square":case"polygon":case"triangle":case"cross":f=t.createArea(this.points,c)}f&&f.move(s||0,h||0).append(i),this.graphic=f,this._checkState()}},_checkState:function(){this.isSelected()?this.series.setPointSelectedState(this):this.isHovered()?this.series.setPointHoverState(this):this.fullState=f.normalMark},_trackerAttrs:{stroke:"none",fill:"grey",opacity:.0001,inh:!0},storeTrackerR:function(){var n=window.navigator,i="ontouchstart"in window||n.msPointerEnabled&&n.msMaxTouchPoints||n.pointerEnabled&&n.maxTouchPoints,t=i?20:6;return this.options.trackerR=this.options.attributes.r<t?t:this.options.attributes.r},drawTrackerMarker:function(n,t){this.hasValue()&&(this.trackerGraphic=n.createCircle(this.x,this.y,this.options.trackerR||this.storeTrackerR(),this._trackerAttrs).append(t),this.trackerGraphic.data({point:this}))},select:function(){this.series.selectPoint(this)},clearSelection:function(){this.series.deselectPoint(this)},_populatePointShape:function(n,t){var i=this,r,u;i.options.symbol==="square"&&(n.points=[{x:i.x-t,y:i.y-t},{x:i.x+t,y:i.y-t},{x:i.x+t,y:i.y+t},{x:i.x-t,y:i.y+t},{x:i.x-t,y:i.y-t}]),i.options.symbol==="polygon"&&(n.points=[{x:i.x-t,y:i.y},{x:i.x,y:i.y-t},{x:i.x+t,y:i.y},{x:i.x,y:i.y+t},{x:i.x-t,y:i.y}]),i.options.symbol==="triangle"&&(n.points=[{x:i.x-t,y:i.y-t},{x:i.x+t,y:i.y-t},{x:i.x,y:i.y+t},{x:i.x-t,y:i.y-t}]),i.options.symbol==="cross"&&(r=Math.floor(t/2),u=Math.ceil(t/2),n.points=[{x:i.x-t,y:i.y-r},{x:i.x-r,y:i.y-t},{x:i.x,y:i.y-u},{x:i.x+r,y:i.y-t},{x:i.x+t,y:i.y-r},{x:i.x+u,y:i.y},{x:i.x+t,y:i.y+r},{x:i.x+r,y:i.y+t},{x:i.x,y:i.y+u},{x:i.x-r,y:i.y+t},{x:i.x-t,y:i.y+r},{x:i.x-u,y:i.y}])},prepareStatesOptions:function(){var n=this;n.options.states&&n.options.states.normal&&n._populatePointShape(n,n.options.states.normal.r)},applyNormalStyle:function(){return this.graphic&&(this._populatePointShape(this.options.states.normal,this.options.states.normal.r),this.graphic.applySettings(this.options.states.normal)),this},applyHoverStyle:function(){return this.graphic&&!this.options.image&&(this._populatePointShape(this.options.states.hover,this.options.states.hover.r),this.graphic.applySettings(this.options.states.hover),this.graphic.toForeground(),this.graphic.addClass("dx-chart-hovered-point")),this},applySelectionStyle:function(){return this.graphic&&!this.options.image&&(this._populatePointShape(this.options.states.selected,this.options.states.selected.r),this.graphic.applySettings(this.options.states.selected),this.graphic.toForeground(),this.graphic.addClass("dx-chart-selected-point")),this},setHoverState:function(){this.series.setPointHoverState(this)},releaseHoverState:function(){this.series.releasePointHoverState(this),this.graphic&&(this.graphic.removeClass("dx-chart-hovered-point"),this.isSelected()||this.graphic.toBackground())},setSelectedState:function(){this.series.setPointSelectedState(this)},releaseSelectedState:function(){this.series.releasePointSelectedState(this),this.graphic&&this.graphic.removeClass("dx-chart-selected-point")},showTooltip:function(){this.series.showPointTooltip(this)},hideTooltip:function(){this.series.hidePointTooltip(this)},on:function(t,i,r){n(this).on(t,i,r);return this},off:function(t){return n(this).off(t),this},isSelected:function(){return!!(this.fullState&f.selectedMark)},isHovered:function(){return!!(this.fullState&f.hoverMark)},correctLabel:function(){this.correctBackgroundPosition(),this.rotateLabel(),this.correctLabelPosition()},drawLabel:function(n,t){var r=this,e=r.labelFormatObject,u=r.options.label,f=u.background,o=r.hasValue()&&i.isDefined(e.value)?r.formatLabel.call(e,u):null,s;i.isDefined(o)&&(r.labelGroup=n.createGroup().append(t),u.connector&&u.connector.strokeWidth&&(r.connector=n.createPath([],u.connector).append(r.labelGroup)),r.insideLabelGroup=n.createGroup().append(r.labelGroup),u.background["class"]=r.pointClassName,(f.fill&&f.fill!=="none"||f.strokeWidth&&f.stroke&&f.stroke!=="none")&&(r.labelBackground=n.createRect(r.x,r.y,0,0,0,f).append(r.insideLabelGroup)),r.label=n.createText(o,r.x,r.y,u.attributes).append(r.insideLabelGroup),r.correctLabel(),r.correctConnectorPosition())},rotateLabel:function(){var n=this.insideLabelGroup.getBBox(),t=this.options.label;this.insideLabelGroup.applySettings({x:n.x+n.width/2,y:n.y+n.height/2,rotate:t.rotationAngle})},getGraphicSettings:function(){return{x:this.graphic.settings.x||0,y:this.graphic.settings.y||0,height:this.graphic.settings.height||0,width:this.graphic.settings.width||0}},correctLabelPosition:function(){var n=this.insideLabelGroup.getBBox(),t=this.graphic?this.graphic.getBBox():{x:this.x,y:this.y,height:0,width:0},r=0,i=0;t.isEmpty&&(t={x:this.x,y:this.y,height:0,width:0}),this.rotated?(i+=t.y-n.y-n.height/2+t.height/2,r+=this.initialValue>0||this.series.isFullStackedSeries()?t.x+t.width-n.x+this.LABEL_OFFSET:t.x-n.x-n.width-this.LABEL_OFFSET):i+=this.initialValue>0||this.series.isFullStackedSeries()?t.y-n.y-n.height-this.LABEL_OFFSET:t.y+t.height-n.y+this.LABEL_OFFSET,r+=this.options.label.horizontalOffset,i+=this.options.label.verticalOffset,this.checkLabelPosition({x:n.x+r,y:n.y+i,height:n.height,width:n.width},r,i)},checkLabelPosition:function(n,t,i){var u=this.graphic?this.graphic.getBBox():{x:this.x,y:this.y,height:0,width:0},r=this.translator.getCanvasVisibleArea();u.isEmpty&&(u={x:this.x,y:this.y,height:0,width:0}),this.rotated||r.minX<=u.x+u.width&&r.maxX>=u.x&&(r.minX>n.x&&this.adjustSeriesLabels&&(t+=r.minX-n.x),r.maxX<n.x+n.width&&this.adjustSeriesLabels&&(t-=n.x+n.width-r.maxX),r.minY>n.y&&(i+=u.y+u.height-n.y+this.LABEL_OFFSET),r.maxY<n.y+n.height&&(i-=n.y+n.height-u.y+this.LABEL_OFFSET)),this.rotated&&r.minY<=u.y+u.height&&r.maxY>=u.y&&(r.minX>n.x&&(t+=u.x+u.width-n.x+this.LABEL_OFFSET),r.maxX<n.x+n.width&&(t-=n.x+n.width-u.x+this.LABEL_OFFSET),r.minY>n.y&&this.adjustSeriesLabels&&(i+=r.minY-n.y),r.maxY<n.y+n.height&&this.adjustSeriesLabels&&(i-=n.y+n.height-r.maxY)),this.insideLabelGroup.move(~~t,~~i)},correctBackgroundPosition:function(){if(this.labelBackground){var n=this.label.getBBox(),t=n.x-this.LABEL_BACKGROUND_PADDING_X,i=n.y-this.LABEL_BACKGROUND_PADDING_Y,r=n.width+2*this.LABEL_BACKGROUND_PADDING_X,u=n.height+2*this.LABEL_BACKGROUND_PADDING_Y;this.labelBackground.applySettings({x:t,y:i,width:r,height:u})}},correctConnectorPosition:function(n){var t=this.insideLabelGroup.getBBox(),n=n||(this.graphic?this.graphic.getBBox():{x:this.x,y:this.y,height:0,width:0}),i,u,r,f,e,o;if(this.connector){if(n.isEmpty&&(n={x:this.x,y:this.y,height:0,width:0}),t.x=t.x+(this.insideLabelGroup.settings.translateX||0),t.y=t.y+(this.insideLabelGroup.settings.translateY||0),e=this.labelBackground?t.y+t.height/2:null,o=this.labelBackground?t.x+t.width/2:null,this.rotated){if((o||t.x)>n.x+n.width)i=o||t.x,u=n.x+n.width;else if((o||t.x+t.width)<n.x)i=o||t.x+t.width,u=n.x;else return;r=Math.round(t.y+t.height/2),f=r>n.y+n.height?n.y+n.height:r<n.y?n.y:r}else{if((e||t.y+t.height)<n.y)r=e||t.y+t.height,f=n.y;else if((e||t.y)>n.y+n.height)r=e||t.y,f=n.y+n.height;else return;i=Math.round(t.x+t.width/2),u=i>n.x+n.width?n.x+n.width:i<n.x?n.x:i}this.connector.applySettings({points:[i,r,u,f]})}},getColor:function(){return this.options.attributes.fill},getTooltipFormatObject:function(t){var i=this._getFormatObject(t),r,u;return this.stackPoints?(t.options.customizeText||(t.options.customizeText=function(){return n.map(this.points,function(n){return n.seriesName+": "+n.valueText}).join("\n")}),r=[],n.each(this.stackPoints,function(n,i){r.push(i._getFormatObject(t))}),u={total:i.total,argument:i.argument,points:r},this.stackPoints.stackName&&(u.stackName=this.stackPoints.stackName),u):i},_getFormatObject:function(t){var i=t.formatValueTooltip.call({value:this.initialValue},t.options);return n.extend({},this.labelFormatObject,{point:this,valueText:i})},animate:function(n){var i=this,t=i.graphic;if(!t){n&&n();return}t.animate({translate:{x:0,y:0}},undefined,n)},hasValue:function(){return this.initialValue!==null},getClassName:function(){return this.pointClassName}})}(jQuery,DevExpress),function(n,t){var r=t.viz.charts.series,f=r.consts.states,e=t.utils.isDefined,u="canvas_position_default",i=function(n,t,i){return n<t?t:n>i?i:n};r.BarPoint=r.BasePoint.inherit({translate:function(n){var t,r,f,e,o;(this.translator=n=n||this.translator,this.translator&&this.hasValue())&&(t=n.getCanvasVisibleArea()||{},this.rotated?(e=f=n.translateY(this.argument)+(this.yCorrection||0),o=n.translateX(this.value),r=n.translateX(this.minValue),this.width=Math.abs(o-r),this._calculateVisibility(Math.min(o,r),Math.min(e,f),this.width,this.height),o=i(o,t.minX,t.maxX),r=i(r,t.minX,t.maxX),this.y=e,this.minY=f,this.width=Math.abs(o-r),this.x=Math.min(o,r)+(this.xCorrection||0),this.minX=r+(this.xCorrection||0),this.defaultX=n.translateX(u),this.visible&&(this.y<t.minY&&(this.height=this.height-(t.minY-this.y),this.y=t.minY,this.minY=t.minY),this.y+this.height>t.maxY&&(this.height=t.maxY-this.y))):(o=r=n.translateX(this.argument)+(this.xCorrection||0),e=n.translateY(this.value),f=n.translateY(this.minValue),this.height=Math.abs(e-f),this._calculateVisibility(Math.min(o,r),Math.min(e,f),this.width,this.height),e=i(e,t.minY,t.maxY),f=i(f,t.minY,t.maxY),this.x=o,this.minX=r,this.height=Math.abs(e-f),this.y=Math.min(e,f)+(this.yCorrection||0),this.minY=f+(this.yCorrection||0),this.defaultY=n.translateY(u),this.visible&&(this.x<t.minX&&(this.width=this.width-(t.minX-this.x),this.x=t.minX,this.minX=t.minX),this.x+this.width>t.maxX&&(this.width=t.maxX-this.x))))},getTooltipCoords:function(){var n=this,t=n.x+n.width/2,i=n.y+n.height/2;return{x:t,y:i,offset:0}},correctCoordinates:function(n){var t=n.offset-Math.round(n.width/2);this.rotated?(this.height=n.width,this.yCorrection=t):(this.width=n.width,this.xCorrection=t)},drawMarker:function(n,t){if(this.hasValue()){var i=this._checkState();this.graphic=n.createRect(this.x,this.y,this.width,this.height,i.r,i).append(t)}},_checkState:function(){var n;return this.isSelected()?n=this.options.states.selected:this.isHovered()?n=this.options.states.hover:(n=this.options.attributes,this.fullState=f.normalMark),n},drawTrackerMarker:function(n,t){if(this.hasValue()){var i=this,f=i.y,r=i.height,e=i.x,u=i.width;i.rotated?u===1&&(u=9,e-=4):r===1&&(r=9,f-=4),this.trackerGraphic=n.createRect(e,f,u,r,i.options.attributes.r,i._trackerAttrs).append(t),this.trackerGraphic.data({point:i})}},correctConnectorPosition:function(){this.callBase(this.getBboxGraphic())},drawLabel:function(n,t){if(this.hasValue()&&(this.options.label.showForZeroValues||this.labelFormatObject.value))this.callBase(n,t);else return},getBboxGraphic:function(){var n=this.graphic&&this.graphic.getBBox(),t,i;return n.isEmpty&&(n=this.getGraphicSettings()),t=n.x-this.x,i=n.y-this.y,n.x-=t,n.y-=i,n.width+=2*t,n.height+=2*i,n},correctLabelPosition:function(){var n=this.insideLabelGroup.getBBox(),t=this.getBboxGraphic(),u=this.translator.getBusinessRange(),f=this.series.options.valueAxisType==="discrete",e=!f&&(this.initialValue>=0&&!u.invertY||this.initialValue<0&&u.invertY)||f&&!u.invertY||this.series.isFullStackedSeries(),o=!f&&(this.initialValue>=0&&!u.invertX||this.initialValue<0&&u.invertX)||f&&!u.invertX||this.series.isFullStackedSeries(),i=0,r=0;this.initialValue===0&&this.series.isFullStackedSeries()?this.rotated?(r+=t.y-n.y-n.height/2+t.height/2,i+=this.defaultX-n.x+this.LABEL_OFFSET):(i+=t.width/2,r+=this.defaultY-n.y-n.height-this.LABEL_OFFSET):this.options.label.position==="outside"?this.rotated?(r+=t.y-n.y-n.height/2+t.height/2,i+=o?t.x+t.width-n.x+this.LABEL_OFFSET:t.x-n.x-n.width-this.LABEL_OFFSET):(i+=t.width/2,r+=e?t.y-n.y-n.height-this.LABEL_OFFSET:t.y+t.height-n.y+this.LABEL_OFFSET):this.options.label.position==="inside"&&(this.rotated?(r+=t.y-n.y-n.height/2+t.height/2,i+=o?t.x+t.width-n.x-n.width-this.LABEL_OFFSET:t.x-n.x+this.LABEL_OFFSET):(i+=t.width/2,r+=e?t.y-n.y-n.height+this.LABEL_OFFSET+n.height:t.y+t.height-n.y-this.LABEL_OFFSET-n.height)),i+=this.options.label.horizontalOffset,r+=this.options.label.verticalOffset,this.checkLabelPosition({x:n.x+i,y:n.y+r,height:n.height,width:n.width},i,r,t)},checkLabelPosition:function(n,t,i,r){var r=r||this.graphic.getBBox(),u=this.translator.getCanvasVisibleArea();r.isEmpty&&(r=this.getGraphicSettings()),u.minX<=r.x+r.width&&u.maxX>=r.x&&u.minY<=r.y+r.height&&u.maxY>=r.y&&(this.rotated||(u.minX>n.x&&this.adjustSeriesLabels&&(t+=u.minX-n.x),u.maxX<n.x+n.width&&this.adjustSeriesLabels&&(t-=n.x+n.width-u.maxX),u.minY>n.y&&(i+=u.minY-n.y),u.maxY<n.y+n.height&&(i-=n.y+n.height-u.maxY)),this.rotated&&(u.minX>n.x&&(t+=u.minX-n.x),u.maxX<n.x+n.width&&(t-=n.x+n.width-u.maxX),u.minY>n.y&&this.adjustSeriesLabels&&(i+=u.minY-n.y),u.maxY<n.y+n.height&&this.adjustSeriesLabels&&(i-=n.y+n.height-u.maxY))),this.insideLabelGroup.move(~~t,~~i)},_populatePointShape:function(){},animate:function(){var n=this,t=n.graphic;t&&n.translator&&(n.rotated?(t.applySettings({width:0,x:n.defaultX,sharpEdges:!1}),t.animate({width:n.width,x:n.x})):(t.applySettings({height:0,y:n.defaultY,sharpEdges:!1}),t.animate({height:n.height,y:n.y})))}})}(jQuery,DevExpress),function(n,t){var r=t.viz.charts.series,u=t.utils,f=r.consts.states,i=t.formatHelper;r.OhlcPoint=r.BasePoint.inherit({ctor:function(n){this.LABEL_BACKGROUND_PADDING_X=8,this.LABEL_BACKGROUND_PADDING_Y=4,this.LABEL_OFFSET=10,this.argument=this.initialArgument=n.argument,this.openValue=n.openValue,this.highValue=n.highValue,this.lowValue=n.lowValue,this.closeValue=n.closeValue,this.value=this.initialValue=n.reductionValue,this.originalOpenValue=n.originalOpenValue,this.originalCloseValue=n.originalCloseValue,this.originalLowValue=n.originalLowValue,this.originalHighValue=n.originalHighValue,this.originalArgument=n.originalArgument,this.tag=n.tag,this.options=n.options,this.series=n.series,this.rotated=!!(this.series&&this.series.options&&this.series.options.rotated||!1),this.labelFormatObject={openValue:this.openValue,highValue:this.highValue,lowValue:this.lowValue,closeValue:this.closeValue,reductionValue:this.initialValue,argument:this.initialArgument,value:this.initialValue,seriesName:this.series.name,originalOpenValue:this.originalOpenValue,originalCloseValue:this.originalCloseValue,originalLowValue:this.originalLowValue,originalHighValue:this.originalHighValue,originalArgument:this.originalArgument},this.pointClassName=n.pointClassName||""},formatLabel:function(n){return this.openValueText=i.format(this.openValue,n.format,n.precision),this.highValueText=i.format(this.highValue,n.format,n.precision),this.lowValueText=i.format(this.lowValue,n.format,n.precision),this.closeValueText=i.format(this.closeValue,n.format,n.precision),this.reductionValueText=i.format(this.reductionValue,n.format,n.precision),this.valueText=i.format(this.value,n.format,n.precision),this.argumentText=i.format(this.argument,n.argumentFormat,n.argumentPrecision),n.customizeText?n.customizeText.call(this,this):this.valueText},translate:function(n){var t=this,u=t.rotated,f=u?"translateY":"translateX",r=u?"translateX":"translateY",e,i=Math;(t.translator=n=n||t.translator,t.translator&&t.hasValue())&&(t.x=n[f](t.argument)+(t.xCorrection||0),t.openY=t.openValue!==null?n[r](t.openValue):null,t.highY=n[r](t.highValue),t.lowY=n[r](t.lowValue),t.closeY=t.closeValue!==null?n[r](t.closeValue):null,e=i.abs(t.lowY-t.highY),t.rotated?t._calculateVisibility(i.min(t.lowY,t.highY)+i.abs(t.lowY-t.highY)/2,t.x,0,0):t._calculateVisibility(t.x,i.min(t.lowY,t.highY)+i.abs(t.lowY-t.highY)/2,0,0))},correctCoordinates:function(n){var t=1+2*this.options.attributes.lineWidth,i=10;this.width=n.width<t?t:n.width>i?i:n.width,this.xCorrection=n.offset},drawMarker:function(n,t){if(this.hasValue()){var r=this,u,f=r.rotated,i;u=r._checkState();switch(r.pointClassName){case"dx-candle-reduction":i=t.reductionMarkersGroup;break;case"dx-candle-default dx-candle-positive":i=t.defaultPositiveMarkersGroup;break;case"dx-candle-reduction dx-candle-positive":i=t.reductionPositiveMarkersGroup;break;default:i=t.defaultMarkersGroup}r.drawMarkerInGroup(i,u,n)}},_checkState:function(){var n=this,t;return n.isSelected()?t=n.options.states.selected:n.isHovered()?t=n.options.states.hover:(t=n.options.attributes,n.fullState=f.normalMark),t},drawMarkerInGroup:function(t,i,r){var u=this,f=this.rotated?function(n,t){return{x:t,y:n}}:function(n,t){return{x:n,y:t}},e=u.openValue,s=u.closeValue,o;n.isNumeric(e)&&n.isNumeric(s)?e>s?u.graphic=r.createArea([f(u.x,u.highY),f(u.x,u.openY),f(u.x+u.width/2,u.openY),f(u.x+u.width/2,u.closeY),f(u.x,u.closeY),f(u.x,u.lowY),f(u.x,u.closeY),f(u.x-u.width/2,u.closeY),f(u.x-u.width/2,u.openY),f(u.x,u.openY)],i).append(t):e<s?u.graphic=r.createArea([f(u.x,u.highY),f(u.x,u.closeY),f(u.x+u.width/2,u.closeY),f(u.x+u.width/2,u.openY),f(u.x,u.openY),f(u.x,u.lowY),f(u.x,u.openY),f(u.x-u.width/2,u.openY),f(u.x-u.width/2,u.closeY),f(u.x,u.closeY)],i).append(t):e===s&&(u.graphic=r.createArea([f(u.x,u.highY),f(u.x,u.lowY),f(u.x,u.closeY),f(u.x-u.width/2,u.closeY),f(u.x+u.width/2,u.closeY),f(u.x,u.closeY)],i).append(t)):e===s?u.graphic=r.createArea([f(u.x,u.highY),f(u.x,u.lowY)],i).append(t):(o=n.isNumeric(e)?u.openY:u.closeY,u.graphic=r.createArea([f(u.x,u.highY),f(u.x,u.lowY),f(u.x,o),f(u.x-u.width/2,o),f(u.x+u.width/2,o),f(u.x,o)],i).append(t))},drawTrackerMarker:function(n,t){if(this.hasValue()){var i=this,r=i.highY,u=i.lowY,e=i.rotated,f=Math,o,s,h,c;r===u&&(r=e?r+2:r-2,u=e?u-2:u+2),e?(o=f.min(u,r),s=i.x-i.width/2,h=f.abs(u-r),c=i.width):(o=i.x-i.width/2,s=f.min(u,r),h=i.width,c=f.abs(u-r)),i.trackerGraphic=n.createRect(o,s,h,c,0,i._trackerAttrs).append(t),i.trackerGraphic.data({point:i})}},animate:function(){},drawLabel:function(n,t){if(this.hasValue()&&u.isDefined(this.labelFormatObject.value)){var i=this.options.label,r=this.formatLabel.call(this.labelFormatObject,i),f=this.rotated;u.isDefined(r)&&(this.labelGroup=n.createGroup().append(t),this.insideLabelGroup=n.createGroup().append(this.labelGroup),i.background["class"]=this.pointClassName,(i.background.fill&&i.background.fill!=="none"||i.background.strokeWidth&&i.background.stroke&&i.background.stroke!=="none")&&(i.background.fill=this.options.attributes.stroke,this.labelBackground=f?n.createRect(this.highY,this.x,0,0,0,i.background).append(this.insideLabelGroup):n.createRect(this.x,this.highY,0,0,0,i.background).append(this.insideLabelGroup)),this.label=f?n.createText(r,this.highY,this.x,i.attributes).append(this.insideLabelGroup):n.createText(r,this.x,this.highY,i.attributes).append(this.insideLabelGroup),this.correctBackgroundPosition(),this.rotateLabel(),this.correctLabelPosition())}},correctLabelPosition:function(){var n=this.insideLabelGroup.getBBox(),r=this.graphic.getBBox(),u=this.rotated,t=0,i=0;u?t+=r.x-n.x+r.width+this.LABEL_OFFSET:i+=r.y-n.y-n.height-this.LABEL_OFFSET,t+=this.options.label.horizontalOffset,i+=this.options.label.verticalOffset,this.checkLabelPosition({x:n.x+t,y:n.y+i,height:n.height,width:n.width},t,i)},checkLabelPosition:function(n,t,i){var r=this.translator.getCanvasVisibleArea(),u=this.graphic.getBBox();r.minX<=u.x+u.width&&r.maxX>=u.x&&(r.minX>n.x&&this.adjustSeriesLabels&&(t+=r.minX-n.x),r.maxX<n.x+n.width&&this.adjustSeriesLabels&&(t-=n.x+n.width-r.maxX),r.minY>n.y&&(i+=r.minY-n.y),r.maxY<n.y+n.height&&(i-=n.y+n.height-r.maxY)),this.insideLabelGroup.move(~~t,~~i)},getTooltipCoords:function(){var u,f,n,i,t=Math,e=t.min(this.lowY,this.highY),o=t.max(this.lowY,this.highY),r=this.translator.getCanvasVisibleArea();if(this.graphic)return this.rotated?(n=t.max(r.minX,e),i=t.min(r.maxX,o),f=this.x,u=n+(i-n)/2):(n=t.max(r.minY,e),i=t.min(r.maxY,o),u=this.x,f=n+(i-n)/2),{x:u,y:f,offset:0}},_getFormatObject:function(t){var u=t.formatValueTooltip.call({value:this.highValue},t.options),i=t.formatValueTooltip.call({value:this.openValue},t.options),r=t.formatValueTooltip.call({value:this.closeValue},t.options),f=t.formatValueTooltip.call({value:this.lowValue},t.options);return n.extend({},this.labelFormatObject,{valueText:"h: "+u+(i!==""?" o: "+i:"")+(r!==""?" c: "+r:"")+" l: "+f,highValueText:u,openValueText:i,closeValueText:r,lowValueText:f,point:this})},_populatePointShape:function(){},getColor:function(){return this.options.attributes.stroke},hasValue:function(){return this.highValue!==null&&this.lowValue!==null}})}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.states,u=i.OhlcPoint;i.StockPoint=i.OhlcPoint.inherit({correctCoordinates:function(n){var t=2+this.options.attributes.lineWidth,i=10;this.width=n.width<t?t:n.width>i?i:n.width,this.xCorrection=n.offset},drawMarkerInGroup:function(t,i,r){var u=this.rotated?function(n,t){return{x:t,y:n}}:function(n,t){return{x:n,y:t}},f=n.isNumeric(this.openY),e=n.isNumeric(this.closeY);this.graphic=r.createPath([u(this.x,this.highY),f&&u(this.x,this.openY),f&&u(this.x-this.width/2,this.openY),f&&u(this.x,this.openY),e&&u(this.x,this.closeY),e&&u(this.x+this.width/2,this.closeY),e&&u(this.x,this.closeY),u(this.x,this.lowY)],i).append(t)}})}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=t.utils,u=i.consts.events,f=i.consts.states;i.RangePoint=i.BasePoint.inherit({ctor:function(n){this.callBase(n),this.minValue=this.initialMinValue=n.minValue!==undefined?n.minValue:"default",this.originalMinValue=n.originalMinValue,this.minLabelFormatObject={argument:this.initialArgument,value:this.initialMinValue,seriesName:this.series.name,originalMinValue:this.originalMinValue,originalArgument:this.originalArgument}},dispose:function(){var n=this;n.minLabel=null,n.minLabelBackground=null,n.minConnector=null,n.insideMinLabelGroup=null,n.minLabelGroup=null,n.maxLabel=null,n.maxLabelBackground=null,n.maxConnector=null,n.insideMaxLabelGroup=null,n.maxLabelGroup=null,n.topPoints=null,n.bottomPoints=null,n.minLabelFormatObject=null,n.callBase()},getTooltipCoords:function(){var u,f,i,r,n,t=this.translator.getCanvasVisibleArea();return this.rotated?(n=Math.min(this.x,this.minX),f=this.y,i=t.minX>n?t.minX:n,r=t.maxX<n+this.width?t.maxX:n+this.width,u=i+(r-i)/2):(n=Math.min(this.y,this.minY),u=this.x,i=t.minY>n?t.minY:n,r=t.maxY<n+this.height?t.maxY:n+this.height,f=i+(r-i)/2),{x:u,y:f,offset:0}},translate:function(n){this.minX=this.minY=n.translateY(this.minValue),this.callBase(n),this.rotated?(this.width=Math.abs(this.x-this.minX),this.height=0):(this.height=Math.abs(this.minY-this.y),this.width=0)},isInVisibleArea:function(){var t=Math.min(this.minX,this.x)||this.x,i=Math.max(this.minX,this.x)||this.x,r=Math.max(this.minY,this.y)||this.y,u=Math.min(this.minY,this.y)||this.y,s,h,c,l,f=!0,e=!0,o=!0,n;return this.translator&&this.translator.getCanvasVisibleArea&&(n=this.translator.getCanvasVisibleArea(),s=n.maxX<t&&n.maxX<i,h=n.minX>t&&n.minX>i,l=n.minY>u&&n.minY>r,c=n.maxY<u&&n.maxY<r,l||c||s||h?f=e=o=!1:this.rotated?(e=n.minX<t&&n.maxX>t,f=n.minX<i&&n.maxX>i):(f=n.minY<u&&n.maxY>u,e=n.minY<r&&n.maxY>r)),this.visibleTopMarker=f,this.visibleBottomMarker=e,this.visibleRangeArea=o,o},drawMarker:function(n,t){if(this.hasValue()){var o=this.options.attributes.r,f,r,u,e,i=n.createGroup().append(t);switch(this.options.symbol){case"circle":this.rotated?(r=Math.min(this.x,this.minX),u=this.y):(r=this.x,u=Math.min(this.y,this.minY)),f=this.visibleTopMarker?n.createCircle(r+this.width,u,o,this.options.attributes).append(i):null,e=this.visibleBottomMarker?n.createCircle(r,u+this.height,o,this.options.attributes).append(i):null;break;case"square":case"polygon":case"triangle":case"cross":f=this.visibleTopMarker?n.createArea(this.topPoints,this.options.attributes).append(i):null,e=this.visibleBottomMarker?n.createArea(this.bottomPoints,this.options.attributes).append(i):null}this.graphic=i,this.graphic.topMarker=f,this.graphic.bottomMarker=e,this._checkState()}},_populatePointShape:function(n,t){var o=this,e,s,i,r,u,f;this.rotated?(i=Math.max(o.x,o.minX),u=Math.min(o.x,o.minX),r=f=o.y):(i=u=o.x,r=Math.min(o.y,o.minY),f=Math.max(o.y,o.minY)),o.options.symbol==="square"&&(n.topPoints=[{x:i-t,y:r-t},{x:i+t,y:r-t},{x:i+t,y:r+t},{x:i-t,y:r+t},{x:i-t,y:r-t}],n.bottomPoints=[{x:u-t,y:f-t},{x:u+t,y:f-t},{x:u+t,y:f+t},{x:u-t,y:f+t},{x:u-t,y:f-t}]),o.options.symbol==="polygon"&&(n.topPoints=[{x:i-t,y:r},{x:i,y:r-t},{x:i+t,y:r},{x:i,y:r+t},{x:i-t,y:r}],n.bottomPoints=[{x:u-t,y:f},{x:u,y:f-t},{x:u+t,y:f},{x:u,y:f+t},{x:u-t,y:f}]),o.options.symbol==="triangle"&&(n.topPoints=[{x:i-t,y:r-t},{x:i+t,y:r-t},{x:i,y:r+t},{x:i-t,y:r-t}],n.bottomPoints=[{x:u-t,y:f-t},{x:u+t,y:f-t},{x:u,y:f+t},{x:u-t,y:f-t}]),o.options.symbol==="cross"&&(e=Math.floor(t/2),s=Math.ceil(t/2),n.topPoints=[{x:i-t,y:r-e},{x:i-e,y:r-t},{x:i,y:r-s},{x:i+e,y:r-t},{x:i+t,y:r-e},{x:i+s,y:r},{x:i+t,y:r+e},{x:i+e,y:r+t},{x:i,y:r+s},{x:i-e,y:r+t},{x:i-t,y:r+e},{x:i-s,y:r}],n.bottomPoints=[{x:u-t,y:f-e},{x:u-e,y:f-t},{x:u,y:f-s},{x:u+e,y:f-t},{x:u+t,y:f-e},{x:u+s,y:f},{x:u+t,y:f+e},{x:u+e,y:f+t},{x:u,y:f+s},{x:u-e,y:f+t},{x:u-t,y:f+e},{x:u-s,y:f}])},drawTrackerMarker:function(n,t){if(this.hasValue()){var i=this,e=i.options,r=e.trackerR||i.storeTrackerR(),u,f;i.rotated?(u=Math.min(i.x,i.minX)-r,f=i.y-r):(u=i.x-r,f=Math.min(i.y,i.minY)-r),i.trackerGraphic=n.createRect(u,f,i.width+2*r,i.height+2*r,0,i._trackerAttrs).append(t),i.trackerGraphic.data({point:i})}},applyStyle:function(n){this.graphic&&(this._populatePointShape(n,n.r),this.graphic.topMarker&&this.graphic.topMarker.applySettings(n.topPoints?{points:n.topPoints,style:n}:n),this.graphic.bottomMarker&&this.graphic.bottomMarker.applySettings(n.bottomPoints?{points:n.bottomPoints,style:n}:n))},applyNormalStyle:function(){return this.applyStyle(this.options.states.normal),this.callBase()},applyHoverStyle:function(){return this.applyStyle(this.options.states.hover),this.callBase()},applySelectionStyle:function(){return this.applyStyle(this.options.states.selected),this.callBase()},drawLabel:function(n,t){if(this.hasValue()&&r.isDefined(this.labelFormatObject.value)&&r.isDefined(this.minLabelFormatObject.value)){var i=this.options.label,f=this.formatLabel.call(this.labelFormatObject,i),e=this.formatLabel.call(this.minLabelFormatObject,i),u=this.translator.getBusinessRange(),o=this.series.options.valueAxisType==="discrete",s=o&&(!u.invertY&&!this.rotated||u.invertX&&this.rotated)||!o&&this.value>this.minValue&&(!u.invertY&&!this.rotated||!u.invertX&&this.rotated);r.isDefined(f)&&r.isDefined(e)&&(this.labelGroup=n.createGroup().append(t),this.options.label.connector&&this.options.label.connector.strokeWidth&&(this.visibleTopMarker&&(this.maxConnector=n.createLine(0,0,0,0,this.options.label.connector).append(this.labelGroup)),this.visibleBottomMarker&&(this.minConnector=n.createLine(0,0,0,0,this.options.label.connector).append(this.labelGroup))),this.maxLabelGroup=n.createGroup().append(this.labelGroup),this.insideMaxLabelGroup=n.createGroup().append(this.maxLabelGroup),this.minLabelGroup=n.createGroup().append(this.labelGroup),this.insideMinLabelGroup=n.createGroup().append(this.minLabelGroup),(i.background.fill&&i.background.fill!=="none"||i.background.strokeWidth&&i.background.stroke&&i.background.stroke!=="none")&&(this.maxLabelBackground=n.createRect(this.x,this.y,0,0,0,i.background).append(this.insideMaxLabelGroup),this.minLabelBackground=n.createRect(this.x,this.y,0,0,0,i.background).append(this.insideMinLabelGroup)),this.maxLabel=n.createText(s?f:e,this.x,this.y,i.attributes).append(this.insideMaxLabelGroup),this.minLabel=n.createText(s?e:f,this.x,this.y,i.attributes).append(this.insideMinLabelGroup),this.correctLabel(),this.correctConnectorPosition(this.maxLabelGroup.getBBox(),this.maxConnector),this.correctConnectorPosition(this.minLabelGroup.getBBox(),this.minConnector))}},rotateLabel:function(){var n=this.insideMaxLabelGroup.getBBox(),t=this.insideMinLabelGroup.getBBox(),i=this.options.label;this.insideMaxLabelGroup.applySettings({x:n.x+n.width/2,y:n.y+n.height/2,rotate:i.rotationAngle}),this.insideMinLabelGroup.applySettings({x:t.x+t.width/2,y:t.y+t.height/2,rotate:i.rotationAngle})},correctLabelPosition:function(){var n=this.insideMaxLabelGroup.getBBox(),i=this.insideMinLabelGroup.getBBox(),t=this.graphic&&this.graphic.topMarker?this.graphic.topMarker.getBBox():{x:this.rotated?Math.max(this.x,this.minX):this.x,y:this.rotated?this.y:Math.min(this.y,this.minY),height:0,width:0},r=this.graphic&&this.graphic.bottomMarker?this.graphic.bottomMarker.getBBox():{x:this.rotated?Math.min(this.x,this.minX):this.x,y:this.rotated?this.y:Math.max(this.y,this.minY),height:0,width:0},e=0,u=0,o=0,f=0;this.options.label.position==="outside"?this.rotated?(u=f+=t.y-n.y-n.height/2+t.height/2,e+=t.x+t.width-n.x+this.LABEL_OFFSET,o+=r.x-i.x-i.width-this.LABEL_OFFSET):(u+=t.y-n.y-n.height-this.LABEL_OFFSET,f+=r.y+r.height-i.y+this.LABEL_OFFSET):this.options.label.position==="inside"&&(this.rotated?(u=f+=t.y-n.y-n.height/2+t.height/2,e+=t.x-n.x-n.width-this.LABEL_OFFSET,o+=r.x+r.width-i.x+this.LABEL_OFFSET):(u+=t.y+t.height-n.y+this.LABEL_OFFSET,f+=r.y-i.y-i.height-this.LABEL_OFFSET)),e+=this.options.label.horizontalOffset,u+=this.options.label.verticalOffset,o+=this.options.label.horizontalOffset,f+=this.options.label.verticalOffset,this.checkLabelPosition(e,u,o,f)},checkLabelPosition:function(n,t,i,r){var f=this.insideMaxLabelGroup.getBBox(),e=this.insideMinLabelGroup.getBBox(),o={},s={},v=this.graphic&&this.graphic.topMarker?this.graphic.topMarker.getBBox():{x:this.rotated?Math.max(this.x,this.minX):this.x,y:this.rotated?this.y:Math.min(this.y,this.minY),height:0,width:0},y=this.graphic&&this.graphic.bottomMarker?this.graphic.bottomMarker.getBBox():{x:this.rotated?Math.min(this.x,this.minX):this.x,y:this.rotated?this.y:Math.max(this.y,this.minY),height:0,width:0},h=f.x+n,c=f.y+t,l=e.x+i,a=e.y+r,u=this.translator.getCanvasVisibleArea();this.visibleRangeArea&&(this.rotated||(u.minX>h&&this.adjustSeriesLabels&&(n+=u.minX-h),u.minX>l&&this.adjustSeriesLabels&&(i+=u.minX-l),u.maxX<h+f.width&&this.adjustSeriesLabels&&(n-=h+f.width-u.maxX),u.maxX<l+e.width&&this.adjustSeriesLabels&&(i-=l+e.width-u.maxX),u.minY>c&&(t+=u.minY-c),u.maxY<a+e.height&&(r-=a+e.height-u.maxY),o.y=f.y+t,s.y=e.y+r,o.y+f.height>s.y&&(t-=(o.y+f.height-s.y)/2,r+=(o.y+f.height-s.y)/2,o.y=f.y+t,s.y=e.y+r,u.minY>o.y?(r+=u.minY-o.y,t+=u.minY-o.y):u.maxY<s.y+e.height&&(t-=s.y+e.height-u.maxY,r-=s.y+e.height-u.maxY))),this.rotated&&(u.minX>l&&(i+=u.minX-l),u.maxX<h+f.width&&(n-=h+f.width-u.maxX),u.minY>a&&this.adjustSeriesLabels&&(r+=u.minY-a),u.minY>c&&this.adjustSeriesLabels&&(t+=u.minY-c),u.maxY<a+e.height&&this.adjustSeriesLabels&&(r-=a+e.height-u.maxY),u.maxY<c+f.height&&this.adjustSeriesLabels&&(t-=c+f.height-u.maxY),o.x=f.x+n,s.x=e.x+i,o.x<s.x+e.width&&(n+=(s.x+e.width-o.x)/2,i-=(s.x+e.width-o.x)/2,o.x=f.x+n,s.x=e.x+i,u.minX>s.x?(i+=u.minX-s.x,n+=u.minX-s.x):u.maxX<o.x+f.width&&(n-=o.x+f.width-u.maxX,i-=o.x+f.width-u.maxX)))),this.insideMaxLabelGroup.move(~~n,~~t),this.insideMinLabelGroup.move(~~i,~~r)},correctBackgroundPosition:function(){if(this.maxLabelBackground&&this.minLabelBackground){var n=this.maxLabel.getBBox(),t=this.minLabel.getBBox(),i=n.x-this.LABEL_BACKGROUND_PADDING_X,r=t.x-this.LABEL_BACKGROUND_PADDING_X,u=n.y-this.LABEL_BACKGROUND_PADDING_Y,f=t.y-this.LABEL_BACKGROUND_PADDING_Y,e=n.width+2*this.LABEL_BACKGROUND_PADDING_X,o=t.width+2*this.LABEL_BACKGROUND_PADDING_X,s=n.height+2*this.LABEL_BACKGROUND_PADDING_Y,h=t.height+2*this.LABEL_BACKGROUND_PADDING_Y;this.maxLabelBackground.applySettings({x:i,y:u,width:e,height:s}),this.minLabelBackground.applySettings({x:r,y:f,width:o,height:h})}},correctConnectorPosition:function(n,t){if(t){var i=this.graphic?this.graphic.getBBox():{x:this.rotated?Math.min(this.x,this.minX):this.x,y:this.rotated?this.y:Math.min(this.y,this.minY),height:this.height,width:this.width},o=this.maxLabelBackground||this.minLabelBackground?n.y+n.height/2:null,s=this.maxLabelBackground||this.minLabelBackground?n.x+n.width/2:null,r,f,u,e;if(this.rotated){if((s||n.x)>i.x+i.width)r=s||n.x,f=i.x+i.width;else if((s||n.x+n.width)<i.x)r=s||n.x+n.width,f=i.x;else return!1;u=Math.round(n.y+n.height/2),e=u>i.y+i.height?i.y+i.height:u<i.y?i.y:u}else{if((o||n.y+n.height)<i.y)u=o||n.y+n.height,e=i.y;else if((o||n.y)>i.y+i.height)u=o||n.y,e=i.y+i.height;else return!1;r=Math.round(n.x+n.width/2),f=r>i.x+i.width?i.x+i.width:r<i.x?i.x:r}t.applySettings({points:[r,u,f,e]})}},_getFormatObject:function(n){var t=n.formatValueTooltip.call({value:this.initialMinValue},n.options),i=n.formatValueTooltip.call({value:this.initialValue},n.options);return{argument:this.initialArgument,valueText:t+" - "+i,rangeValue1Text:t,rangeValue2Text:i,rangeValue1:this.initialMinValue,rangeValue2:this.initialValue,seriesName:this.series.name,point:this,originalMinValue:this.originalMinValue,originalValue:this.originalValue,originalArgument:this.originalArgument}},animate:function(){var n=this,t=n.graphic;t&&n.translator&&(n.rotated?(t.topMarker&&t.topMarker.move(n.defaultX-Math.max(n.minX,n.x),0),t.bottomMarker&&t.bottomMarker.move(n.defaultX-Math.min(n.minX,n.x),0)):(t.topMarker&&t.topMarker.move(0,n.defaultY-Math.min(n.minY,n.y)),t.bottomMarker&&t.bottomMarker.move(0,n.defaultY-Math.max(n.minY,n.y))),t.topMarker&&t.topMarker.move(0,0,!0),t.bottomMarker&&t.bottomMarker.move(0,0,!0))},hasValue:function(){return this.initialValue!==null&&this.initialMinValue!==null}})}(jQuery,DevExpress),function(n,t){var r=t.viz.charts.series,u=r.BarPoint,i=t.utils;r.RangeBarPoint=r.BarPoint.inherit({ctor:function(n){this.callBase(n),this.minValue=this.initialMinValue=n.minValue!==undefined?n.minValue:"default",this.originalMinValue=n.originalMinValue,this.minLabelFormatObject={argument:this.initialArgument,value:this.initialMinValue,seriesName:this.series.name,originalMinValue:this.originalMinValue,originalArgument:this.originalArgument}},dispose:function(){var n=this;n.minLabel=null,n.minLabelBackground=null,n.minConnector=null,n.insideMinLabelGroup=null,n.minLabelGroup=null,n.maxLabel=null,n.maxLabelBackground=null,n.maxConnector=null,n.insideMaxLabelGroup=null,n.maxLabelGroup=null,n.minLabelFormatObject=null,n.callBase()},translate:function(n){this.hasValue()&&(this.callBase(n),this.rotated?this.width=this.width||1:this.height=this.height||1)},drawLabel:function(n,t){if(this.hasValue()||i.isDefined(this.labelFormatObject.value)&&i.isDefined(this.minLabelFormatObject.value)){var r=this.options.label,f=this.formatLabel.call(this.labelFormatObject,r),e=this.formatLabel.call(this.minLabelFormatObject,r),u=this.translator.getBusinessRange(),o=this.series.options.valueAxisType==="discrete",s=o&&(!u.invertY&&!this.rotated||u.invertX&&this.rotated)||!o&&this.value>this.minValue&&(!u.invertY&&!this.rotated||!u.invertX&&this.rotated);i.isDefined(f)&&i.isDefined(e)&&(this.labelGroup=n.createGroup().append(t),this.options.label.connector&&this.options.label.connector.strokeWidth&&(this.maxConnector=n.createLine(0,0,0,0,this.options.label.connector).append(this.labelGroup),this.minConnector=n.createLine(0,0,0,0,this.options.label.connector).append(this.labelGroup)),this.maxLabelGroup=n.createGroup().append(this.labelGroup),this.insideMaxLabelGroup=n.createGroup().append(this.maxLabelGroup),this.minLabelGroup=n.createGroup().append(this.labelGroup),this.insideMinLabelGroup=n.createGroup().append(this.minLabelGroup),(r.background.fill&&r.background.fill!=="none"||r.background.strokeWidth&&r.background.stroke&&r.background.stroke!=="none")&&(this.maxLabelBackground=n.createRect(this.x,this.y,0,0,0,r.background).append(this.insideMaxLabelGroup),this.minLabelBackground=n.createRect(this.x,this.y,0,0,0,r.background).append(this.insideMinLabelGroup)),this.maxLabel=n.createText(s?f:e,this.x,this.y,r.attributes).append(this.insideMaxLabelGroup),this.minLabel=n.createText(s?e:f,this.x,this.y,r.attributes).append(this.insideMinLabelGroup),this.correctLabel(),this.correctConnectorPosition(this.maxLabelGroup.getBBox(),this.maxConnector),this.correctConnectorPosition(this.minLabelGroup.getBBox(),this.minConnector))}},rotateLabel:function(){var n=this.insideMaxLabelGroup.getBBox(),t=this.insideMinLabelGroup.getBBox(),i=this.options.label;this.insideMaxLabelGroup.applySettings({x:n.x+n.width/2,y:n.y+n.height/2,rotate:i.rotationAngle}),this.insideMinLabelGroup.applySettings({x:t.x+t.width/2,y:t.y+t.height/2,rotate:i.rotationAngle})},correctLabelPosition:function(){var t=this.insideMaxLabelGroup.getBBox(),i=this.insideMinLabelGroup.getBBox(),n=this.graphic.getBBox(),r=0,u=0,f=0,e=0;n.isEmpty&&(n=this.getGraphicSettings()),this.options.label.position==="outside"?this.rotated?(u=e+=n.y-t.y-t.height/2+n.height/2,r+=n.x+n.width-t.x+this.LABEL_OFFSET,f+=n.x-i.x-i.width-this.LABEL_OFFSET):(r=f+=n.width/2,u+=n.y-t.y-t.height-this.LABEL_OFFSET,e+=n.y+n.height-i.y+this.LABEL_OFFSET):this.options.label.position==="inside"&&(this.rotated?(u=e+=n.y-t.y-t.height/2+n.height/2,r+=n.x+n.width-t.x-t.width-this.LABEL_OFFSET,f+=n.x-i.x+this.LABEL_OFFSET):(r=f+=n.width/2,u+=n.y-t.y+this.LABEL_OFFSET,e+=n.y+n.height-i.y-i.height-this.LABEL_OFFSET)),r+=this.options.label.horizontalOffset,u+=this.options.label.verticalOffset,f+=this.options.label.horizontalOffset,e+=this.options.label.verticalOffset,this.checkLabelPosition(r,u,f,e)},checkLabelPosition:function(n,t,i,r){var f=this.insideMaxLabelGroup.getBBox(),e=this.insideMinLabelGroup.getBBox(),o={},s={},h=this.graphic.getBBox(),c=f.x+n,l=f.y+t,a=e.x+i,v=e.y+r,u=this.translator.getCanvasVisibleArea();u.minX<=h.x+h.width&&u.maxX>=h.x&&u.minY<=h.y+h.height&&u.maxY>=h.y&&(this.rotated||(u.minX>c&&this.adjustSeriesLabels&&(n+=u.minX-c),u.minX>a&&this.adjustSeriesLabels&&(i+=u.minX-a),u.maxX<c+f.width&&this.adjustSeriesLabels&&(n-=c+f.width-u.maxX),u.maxX<a+e.width&&this.adjustSeriesLabels&&(i-=a+e.width-u.maxX),u.minY>l&&(t+=u.minY-l),u.maxY<v+e.height&&(r-=v+e.height-u.maxY),o.y=f.y+t,s.y=e.y+r,o.y+f.height>s.y&&(t-=(o.y+f.height-s.y)/2,r+=(o.y+f.height-s.y)/2,o.y=f.y+t,s.y=e.y+r,u.minY>o.y?(r+=u.minY-o.y,t+=u.minY-o.y):u.maxY<s.y+e.height&&(t-=s.y+e.height-u.maxY,r-=s.y+e.height-u.maxY))),this.rotated&&(u.minX>a&&(i+=u.minX-a),u.maxX<c+f.width&&(n-=c+f.width-u.maxX),u.minY>v&&this.adjustSeriesLabels&&(r+=u.minY-v),u.minY>l&&this.adjustSeriesLabels&&(t+=u.minY-l),u.maxY<v+e.height&&this.adjustSeriesLabels&&(r-=v+e.height-u.maxY),u.maxY<l+f.height&&this.adjustSeriesLabels&&(t-=l+f.height-u.maxY),o.x=f.x+n,s.x=e.x+i,o.x<s.x+e.width&&(n+=(s.x+e.width-o.x)/2,i-=(s.x+e.width-o.x)/2,o.x=f.x+n,s.x=e.x+i,u.minX>s.x?(i+=u.minX-s.x,n+=u.minX-s.x):u.maxX<o.x+f.width&&(n-=o.x+f.width-u.maxX,i-=o.x+f.width-u.maxX)))),this.insideMaxLabelGroup.move(~~n,~~t),this.insideMinLabelGroup.move(~~i,~~r)},correctBackgroundPosition:function(){if(this.maxLabelBackground&&this.minLabelBackground){var n=this.maxLabel.getBBox(),t=this.minLabel.getBBox(),i=n.x-this.LABEL_BACKGROUND_PADDING_X,r=t.x-this.LABEL_BACKGROUND_PADDING_X,u=n.y-this.LABEL_BACKGROUND_PADDING_Y,f=t.y-this.LABEL_BACKGROUND_PADDING_Y,e=n.width+2*this.LABEL_BACKGROUND_PADDING_X,o=t.width+2*this.LABEL_BACKGROUND_PADDING_X,s=n.height+2*this.LABEL_BACKGROUND_PADDING_Y,h=t.height+2*this.LABEL_BACKGROUND_PADDING_Y;this.maxLabelBackground.applySettings({x:i,y:u,width:e,height:s}),this.minLabelBackground.applySettings({x:r,y:f,width:o,height:h})}},correctConnectorPosition:function(n,t){if(t){var i=this.graphic.getBBox(),r,f,u,e,o=this.maxLabelBackground||this.minLabelBackground?n.y+n.height/2:null,s=this.maxLabelBackground||this.minLabelBackground?n.x+n.width/2:null;if(i.isEmpty&&(i=this.getGraphicSettings()),this.rotated){if((s||n.x)>i.x+i.width)r=s||n.x,f=i.x+i.width;else if((s||n.x+n.width)<i.x)r=s||n.x+n.width,f=i.x;else return!1;u=Math.round(n.y+n.height/2),e=u>i.y+i.height?i.y+i.height:u<i.y?i.y:u}else{if((o||n.y+n.height)<i.y)u=o||n.y+n.height,e=i.y;else if((o||n.y)>i.y+i.height)u=o||n.y,e=i.y+i.height;else return!1;r=Math.round(n.x+n.width/2),f=r>i.x+i.width?i.x+i.width:r<i.x?i.x:r}t.applySettings({points:[r,u,f,e]})}},_getFormatObject:function(n){var t=n.formatValueTooltip.call({value:this.initialMinValue},n.options),i=n.formatValueTooltip.call({value:this.initialValue},n.options);return{argument:this.initialArgument,valueText:t+" - "+i,rangeValue1Text:t,rangeValue2Text:i,rangeValue1:this.initialMinValue,rangeValue2:this.initialValue,seriesName:this.series.name,point:this,originalMinValue:this.originalMinValue,originalValue:this.originalValue,originalArgument:this.originalArgument}},hasValue:function(){return this.initialValue!==null&&this.initialMinValue!==null}})}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,f=i.consts.states,e=t.formatHelper,r=i.BasePoint,u=r.inherit({ctor:function(n){this.callBase(n),this.size=this.initialSize=n.size,this.labelFormatObject.size=this.initialSize},correctCoordinates:function(n){this.bubbleSize=n},drawMarker:function(n,t,i){if(this.hasValue()){var r=n.createCircle(this.x,this.y,this.bubbleSize,this.options.attributes).append(t);this.graphic=r,this._checkState(),i&&this.graphic.applySettings({scale:{x:.01,y:.01},translateX:this.x,translateY:this.y})}},drawTrackerMarker:function(n,t){if(this.hasValue()){var i=this,u=i.options,r=n.createCircle(i.x,i.y,i.bubbleSize,i._trackerAttrs);r.append(t),r.data({point:this})}},getTooltipCoords:function(){if(this.graphic)return{x:this.x,y:this.y,offset:0}},correctLabelPosition:function(){if(this.options.label.position==="outside")this.callBase();else{var n=this.insideLabelGroup.getBBox(),t=this.graphic?this.graphic.getBBox():{x:this.x,y:this.y,height:0,width:0},r=0,i=0;t.isEmpty&&(t={x:this.x,y:this.y,height:0,width:0}),i+=t.y+t.height/2-n.y-n.height/2,r+=this.options.label.horizontalOffset,i+=this.options.label.verticalOffset,this.checkLabelPosition({x:n.x+r,y:n.y+i,height:n.height,width:n.width},r,i)}},_populatePointShape:function(){},applyNormalStyle:function(){if(this.graphic){var t=n.extend(!0,{},this.options.states.normal);delete t.opacity,this.graphic.applySettings(t)}return this},animate:function(n){if(!this.graphic){n&&n();return}this.graphic.animate({scale:{x:1,y:1},translate:{x:0,y:0}},{},n)}});i.BubblePoint=u}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series;i.pointFactory={createPoint:function(n,t){n=(n||"").toLowerCase();switch(n){case"line":return new i.BasePoint(t);case"stackedline":return new i.BasePoint(t);case"fullstackedline":return new i.BasePoint(t);case"area":return new i.BasePoint(t);case"stackedarea":return new i.BasePoint(t);case"fullstackedarea":return new i.BasePoint(t);case"bar":return new i.BarPoint(t);case"stackedbar":return new i.BarPoint(t);case"fullstackedbar":return new i.BarPoint(t);case"spline":return new i.BasePoint(t);case"splinearea":return new i.BasePoint(t);case"scatter":return new i.BasePoint(t);case"candlestick":return new i.OhlcPoint(t);case"stock":return new i.StockPoint(t);case"rangearea":return new i.RangePoint(t);case"rangesplinearea":return new i.RangePoint(t);case"rangebar":return new i.RangeBarPoint(t);case"pie":return new i.PiePoint(t);case"doughnut":return new i.PiePoint(t);case"stepline":return new i.BasePoint(t);case"steparea":return new i.BasePoint(t);case"bubble":return new i.BubblePoint(t);default:return null}}}}(jQuery,DevExpress),function(n,t){var l=t.viz.charts.series,s=l.consts.events,f=l.consts.states,a=t.utils,w=t.viz.core,ut=w.ParseUtils,b=20,k=15,d=.3,o="allseriespoints",e="includepoints",v=0,y=1,tt=20,it=n.inArray,p=Math.abs,rt=Math.min,i=a.isDefined,g=n.noop,c=n.isEmptyObject,h=n.Event,r=n.extend,u=n.each,nt=function(t,i){var r={};return n.map(t,function(n){var t=n[i],u=r[t]?null:t;return r[t]=!0,u})};l.BaseSeries=t.Class.inherit({ctor:function(n,i,u){var f=this;f.type=i.specificType||"unknown",f.isRangeSeries=u,f.renderer=n,f.isIE8=t.browser.msie&&t.browser.version<9,f.points=[],f.originalPoints=[],f._parseOptions(i),f._parsedUserOptions=r(!0,{},i),f.userOptions=i,f.tag=i.tag},dispose:function(){var n=this;n.off(),u(n.points||[],function(n,t){t.dispose()}),n.points=null,u(n.trackerElements||[],function(n,t){t.removeData()}),n.trackerElements=null,n.hoverPattern=null,n.selectedPattern=null,n.seriesGroup=null,n.pointsByArgument=null,n.segments=null,n.preparedSegments=null,n.renderer=null,n._rawData=null,n._parsedUserOptions=null,n.options=null,n.userOptions=null,n.tag=null,n.rangeData=null,n._originalBusinessRange=null,n.translator=null,n.styles=null,n.legend=null,n.markerPatterns&&(u(n.markerPatterns,function(n,t){t.dispose&&t.dispose()}),n.markerPatterns=null)},_addToVisibleVal:function(n){var r=this,t=r.rangeData,u=r._isBarOrArea(),f=r.options.valueAxisType==="discrete";f?it(n,t.visibleValCategories)===-1&&t.visibleValCategories.push(n):(u&&(t.minVisibleVal=i(t.minVisibleVal)?t.minVisibleVal:0,t.maxVisibleVal=i(t.maxVisibleVal)?t.maxVisibleVal:0),(n<t.minVisibleVal||!i(t.minVisibleVal))&&(t.minVisibleVal=n),(n>t.maxVisibleVal||!i(t.maxVisibleVal))&&(t.maxVisibleVal=n))},_truncateValue:function(n,t,r){var u=this.rangeData,f=u[n],e=u[t];u[n]=r<f||!i(f)?r:u[n],u[t]=r>e||!i(e)?r:u[t]},_processArgument:function(n,t,r){var e=this,f=e.rangeData,u;e._truncateValue("minArg","maxArg",n),u=i(t)?p(r?r(n,t):n-t):u,f.minIntervalArg=i(u)&&(u<f.minIntervalArg||!i(f.minIntervalArg))?u:f.minIntervalArg},_processValue:function(n,t,r,u){var e=this,o=e.rangeData,f;e._truncateValue("minVal","maxVal",n),e.isRangeSeries&&e._truncateValue("minVal","maxVal",t),f=i(r)?p(n-r):f,f=e.isRangeSeries&&i(u)?rt(f,p(t-u)):f,o.minIntervalVal=i(f)&&(f<o.minIntervalVal||!i(o.minIntervalVal))?f:o.minIntervalVal},_fillRangeData:function(n){var u=this,r=n==="X"?"Y":"X",t=u.rangeData;i(t.minVal)&&(t["min"+n]=t.minVal,t["max"+n]=t.maxVal,t["interval"+n]=undefined),i(t.minArg)&&(t["min"+r]=t.minArg,t["max"+r]=t.maxArg,t["interval"+r]=t.minIntervalArg),t.categoriesArg.length&&(t["categories"+r]=t.categoriesArg.slice(0)),t.categoriesVal.length&&(t["categories"+n]=t.categoriesVal.slice(0)),t.visibleValCategories.length&&(t["visibleCategories"+n]=t.visibleValCategories.slice(0)),t["minVisible"+n]=t.minVisibleVal,t["maxVisible"+n]=t.maxVisibleVal},_correctRangeData:function(){var t=this,n=t.rangeData;delete n.minArg,delete n.maxArg,delete n.minVal,delete n.maxVal,delete n.minIntervalArg,delete n.minIntervalVal,delete n.minVisibleVal,delete n.maxVisibleVal,delete n.visibleValCategories,delete n.categoriesArg,delete n.categoriesVal,n=t.addLabelPaddingsToRange(n),n=t.processRangeForFullStackedSeries(n),n=t.getRangeMinValue(n)},_getMainAxisName:function(){return this.options.rotated?"X":"Y"},_zoomAxis:function(n){var h=this,t=h.rangeData,r,u=h._getMainAxisName(),f,e,o,s;r=u==="X"?"Y":"X",n&&i(n.minArg)&&i(n.maxArg)&&(f=n.minArg<n.maxArg?n.minArg:n.maxArg,e=n.maxArg>n.minArg?n.maxArg:n.minArg,t["min"+r]=f<t["min"+r]?f:t["min"+r],t["max"+r]=e>t["max"+r]?e:t["max"+r],t["minVisible"+r]=f,t["maxVisible"+r]=e,i(n.minVal)&&i(n.maxVal)&&(o=n.minVal<n.maxVal?n.minVal:n.maxVal,s=n.maxVal>n.minVal?n.maxVal:n.minVal),i(n.minVal)&&(t["min"+u]=o<t["min"+u]?o:t["min"+u],t["minVisible"+u]=o),i(n.maxVal)&&(t["max"+u]=s>t["max"+u]?s:t["max"+u],t["maxVisible"+u]=s))},getRangeData:function(n,t){var r=this,s=r.options,o,h=s.argumentAxisType==="discrete",l=s.valueAxisType==="discrete",f=r.points||[],c=f.length,e;return r.rangeData=o={visibleValCategories:[],categoriesVal:[],categoriesArg:[]},h&&(o.categoriesArg=nt(f,"argument"),r._processArgument=g),l&&(o.categoriesVal=nt(f,"value"),r._processValue=g),c&&(u(f,function(u,s){var c,y=s.value,p=s.minValue,l=s.argument,a,v,w;u!==0&&(c=f[u-1],a=c.value,v=c.minValue,w=c.argument),s.hasValue()&&r._processValue(y,p,a,v),r._processArgument(l,w,t),!h&&n&&n.adjustOnZoom&&l>=n.minArg&&l<=n.maxArg&&(!i(o.minVisibleVal)&&u&&c.hasValue()&&(r._addToVisibleVal(a),r.isRangeSeries&&r._addToVisibleVal(v)),s.hasValue()&&(e=u,r._addToVisibleVal(y),r.isRangeSeries&&r._addToVisibleVal(p)))}),i(e)&&e<c-1&&f[e+1].hasValue()&&(r._addToVisibleVal(f[e+1].value),r.isRangeSeries&&r._addToVisibleVal(f[e+1].minValue)),r._fillRangeData(r._getMainAxisName())),r._correctRangeData(),r._zoomAxis(n),o},getRangeMinValue:function(n){var r=this,e=r.options,t=r._getMainAxisName(),u=n["min"+t],f=n["max"+t],o=e.rotated;return r._isBarOrArea()&&n&&!r.isRangeSeries&&(n.keepValueMarginsX=o?n.keepValueMarginsX:!0,n.keepValueMarginsY=o?!0:n.keepValueMarginsY,e.valueAxisType!=="logarithmic"&&e.showZero!==!1&&i(u)&&(n["min"+t]=u=u>0?0:u,r.setZeroPadding(n,u,"minValueMargin"+t),n["max"+t]=f=f<0?0:f,(f===0||f>0&&u<0)&&(n["minValueMargin"+t]=n["maxValueMargin"+t],n["minValueMargin"+t+"Priority"]=n["maxValueMargin"+t+"Priority"]),r.setZeroPadding(n,f,"maxValueMargin"+t))),n},setZeroPadding:function(n,t,i){t===0&&this.setPadding(n,i,0,tt)},setPadding:function(n,t,i,r){n[t]=i,n[t+"Priority"]=r},addLabelPaddingsToRange:function(n){var t=this,i;return t.areLabelsVisible()&&t.styles.point.label.position!=="inside"&&(i=t._getMainAxisName(),t.setPadding(n,"maxValueMargin"+i,d,b),t.isRangeSeries&&t.setPadding(n,"minValueMargin"+i,d,b)),n},_isBarOrArea:function(){return this.type.slice(-3)==="bar"||this.type.slice(-4)==="area"},isFullStackedSeries:function(){return this.type.indexOf("fullstacked")===0},isStackedSeries:function(){return this.type.indexOf("stacked")===0},processRangeForFullStackedSeries:function(n){var t=this,u,r=c(n),i;return t.isFullStackedSeries()&&(i=t._getMainAxisName(),t.setPadding(n,"minValueMargin"+i,0,k),t.setPadding(n,"maxValueMargin"+i,0,k),r||(n["min"+i]=0)),n},_applyClippings:function(n,t,i){this.paneClipRectID&&(n.clipId=this.paneClipRectID,i.clipId=this.paneClipRectID,this.forceClipping&&(t.clipId=this.paneClipRectID))},_applyTrackersClippings:function(){var n=this,t=n.options;n.paneClipRectID&&(t.seriesTrackerGroup.applySettings({clipId:n.paneClipRectID}),n.forceClipping&&t.markerTrackerGroup.applySettings({clipId:n.paneClipRectID}))},_drawTrackersForSegment:function(n,t){this.drawPointTrackers(t)},drawTrackers:function(){var n=this;n.segments&&(n.trackerElements=[],u(n.segments,function(t,i){n._drawTrackersForSegment(t,i)})),n._applyTrackersClippings()},draw:function(n,t){var i=this,l={"class":"dxc-series"},u={"class":"dxc-elements"},e=r({"class":"dxc-markers"},i.styles.point.states.normal),o={"class":"dxc-series-labels"},s,h,c;if(n)return i.translator=n,i._translateCoors(),i._applyClippings(u,e,o),i.seriesGroup?i.seriesGroup.clear():i.seriesGroup=i.renderer.createGroup(l),s=i.renderer.createGroup(u).append(i.seriesGroup),h=i.renderer.createGroup(e).append(i.seriesGroup),i.seriesGroup.append(i.options.seriesGroup),c=i.renderer.createGroup(o).append(i.options.seriesLabelsGroup),i.createPatterns(),i.drawSeriesData(s,h,c,t),i.isSelected()?i.setSelectedState(i.lastSelectionMode):i.isHovered()?i.setHoverState(i.lastHoverdMode):i.fullState=f.normalMark,i},createPatterns:function(){var n=this,i=n.renderer,t=n.styles,r=t.states.hover,f=t.states.selected;n.hoverPatternColor||(n.hoverPatternColor=r.fill,n.selectedPatternColor=f.fill),n.hoverPattern||(n.hoverPattern=i.createPattern(n.hoverPatternColor,r.hatching),n.selectedPattern=i.createPattern(n.selectedPatternColor,f.hatching)),n.hoverPattern.append(),n.selectedPattern.append(),t.pointStyles=t.pointStyles||[],u(t.pointStyles,function(n,t){if(t){var r=t.states.hover,u=t.states.selected;t.hoverPatternColor||(t.hoverPatternColor=r.fill,t.selectedPatternColor=u.fill),t.hoverPattern||(t.hoverPattern=i.createPattern(t.hoverPatternColor,r.hatching),t.selectedPattern=i.createPattern(t.selectedPatternColor,u.hatching)),t.hoverPattern.append(),t.selectedPattern.append()}})},areLabelsVisible:function(){return this.styles.point.label.visible&&(!i(this.styles.maxLabelCount)||this.points.length<=this.styles.maxLabelCount)},getPoints:function(){return this.points},getOriginalPoints:function(){return this.originalPoints},getValueFields:function(){return this.isRangeSeries?[this.options.rangeValue1Field,this.options.rangeValue2Field]:[this.options.valueField]},getTeamplatedFields:function(){var n=this,t=n.getValueFields(),i=[];return t.push(n.getTagField()),u(t,function(t,r){var u={};u.teamplateField=r+n.name,u.originalField=r,i.push(u)}),i},getArgumentField:function(){return this.options.argumentField},getTagField:function(){return this.options.tagField},updateTeamplateFieldNames:function(){var t=this,n=t.options;t.isRangeSeries?(n.rangeValue1Field=n.rangeValue1Field+t.name,n.rangeValue2Field=n.rangeValue2Field+t.name):n.valueField=n.valueField+t.name,n.tagField=n.tagField+t.name},_updateDataType:function(n){var i=this,t=i.options;t.argumentType=n.argumentType,t.valueType=n.valueType,t.argumentAxisType=n.argumentAxisType,t.valueAxisType=n.valueAxisType},select:function(){this.options.seriesGroup&&this.options.seriesGroup.trigger(new h(s.selectSeries,{target:this}),this.options.selectionMode),this.seriesGroup&&this.seriesGroup.toForeground(),this.trackerElements&&this.trackerElements.length&&u(this.trackerElements,function(n,t){t.toBackground()})},clearSelection:function(){this.options.seriesGroup&&this.options.seriesGroup.trigger(new h(s.deselectSeries,{target:this}),this.options.selectionMode)},selectPoint:function(n){this.options.seriesGroup&&this.options.seriesGroup.trigger(new h(s.selectPoint),n)},deselectPoint:function(n){this.options.seriesGroup&&this.options.seriesGroup.trigger(new h(s.deselectPoint),n)},showPointTooltip:function(n){this.options.seriesGroup&&this.options.seriesGroup.trigger(new h(s.showPointTooltip),n)},hidePointTooltip:function(n){this.options.seriesGroup&&this.options.seriesGroup.trigger(new h(s.hidePointTooltip),n)},getAllPoints:function(){return this.originalPoints.slice()},getPointByPos:function(n){return this.points&&this.points[n]},getPointByArg:function(n){return this.pointsByArgument[n.valueOf()]||null},on:function(t,i,r){n(this).on(t,i,r);return this},off:function(t){return n(this).off(t),this},setHoverState:function(n){var t=this;t.fullState=t.fullState|f.hoverMark,n=n||t.options.hoverMode,t.lastHoverMode=n,t._checkBehavior(n,v)&&(t.applyHoverStyle(n),t.legend&&t.legend.applyHoverStyle(t))},releaseHoverState:function(){var n=this,t=n.lastHoverMode||n.options.hoverMode;n.fullState=n.fullState&~f.hoverMark,delete n.lastHoverMode,n._checkBehavior(t,v)&&(n.applyNormalStyle(t),n.legend&&n.legend.applyNormalStyle(n))},setSelectedState:function(n){var t=this;t.fullState=t.fullState|f.selectedMark,t.lastSelectionMode=n,t._checkBehavior(n,y)&&((t.lastHoverMode===o||t.lastHoverMode===e)&&t.applyNormalStyle(e),n=n||t.options.selectionMode,t.applySelectionStyle(n),t.legend&&t.legend.applySelectionStyle(t))},releaseSelectedState:function(){var n=this,t=n.lastSelectionMode||n.options.selectionMode;n.fullState=n.fullState&~f.selectedMark,n._checkBehavior(t,y)&&(n.isHovered()?((t===e||t===o)&&(n.lastHoverMode!==e||n.lastHoverMode===o)&&(n.applyNormalStyle(t),n.legend&&n.legend.applyNormalStyle(n)),n.applyHoverStyle(n.lastHoverMode),n.legend&&n.legend.applyHoverStyle(n)):(n.applyNormalStyle(t),n.legend&&n.legend.applyNormalStyle(n)),delete n.lastSelectionMode)},_checkBehavior:function(n,t){var r=this,i=!1;return n!=="none"&&(t===v?i=!r.isSelected()||r.options.selectionMode==="none":t===y&&(i=!0)),i},setPointHoverState:function(n){n.fullState=n.fullState|f.hoverMark,this.isSelected()&&(this.lastSelectionMode===o||this.lastSelectionMode===e)||n.isSelected()||n.applyHoverStyle()},releasePointHoverState:function(n){n.fullState=n.fullState&~f.hoverMark,this.isSelected()&&(this.lastSelectionMode===o||this.lastSelectionMode===e)||n.isSelected()||this.isHovered()&&(this.lastSelectionMode===o||this.lastSelectionMode===e)||n.applyNormalStyle()},setPointSelectedState:function(n){n.fullState=n.fullState|f.selectedMark,n.applySelectionStyle()},releasePointSelectedState:function(n){n.fullState=n.fullState&~f.selectedMark,this.isHovered()&&(this.lastHoverMode===o||this.lastHoverMode===e)||n.isHovered()?n.applyHoverStyle():this.isSelected()&&(this.lastSelectionMode===o||this.lastSelectionMode===e)?n.applySelectionStyle():n.applyNormalStyle()},isHovered:function(){return!!(this.fullState&f.hoverMark)},isSelected:function(){return!!(this.fullState&f.selectedMark)},_translateCoors:function(){var n=this,t=n.translator;u(n.points,function(n,i){i.translate(t)})},_getTicksForAggregation:function(n,t,i,r){return w.tickProvider.getTicks({min:n,max:t,screenDelta:i,gridSpacingFactor:r})},getStackName:function(){return this.type==="stackedbar"||this.type==="fullstackedbar"?this.stackName:null},resamplePoints:function(n,t,r){var f=this,h,s,e,o,c;f.getOriginalPoints().length&&(u(f.getOriginalPoints(),function(n,i){e=i.argument-t<=0?n:e,o||(o=i.argument-r>0?n:null)}),e=e?e:1,o=i(o)?o:f.getOriginalPoints().length-1,t=f.getOriginalPoints()[e-1].argument,r=f.getOriginalPoints()[o].argument,f.translator=n,h=f._getPointSize(),s=f.options.argumentAxisType!=="discrete"&&f.options.valueAxisType!=="discrete"?f._getTicksForAggregation(t,r,f.translator.width,h):f.translator.width/h,f.points=f._resample(s,s.tickInterval),f._segmentPoints())},reinitData:function(n){var i=this,e=i.options,v=l.pointFactory.createPoint,y=e.rotated,c,r,t,u,o,s,h,f=e.argumentField,a=e.tagField;if(i.styles.pointStyles=[],n&&n.length&&(i._canRenderCompleteHandle=!0),i.pointsByArgument={},i.segments=[],i.points=[],i._originalBusinessRange=null,n){if(i.isRangeSeries)for(s=e.rangeValue1Field||"val1",h=e.rangeValue2Field||"val2",r=0;r<n.length;r++)(t=n[r],t[f]!==null&&t[f]!==undefined&&t[s]!==undefined&&t[h]!==undefined)&&(c=i._getPointStyle(i.styles.point,r,t[f],t[s],t[h],t[a],{}),u=v(i.type,{minValue:t[s],value:t[h],argument:t[f],originalMinValue:t["original"+s],originalValue:t["original"+h],originalArgument:t["original"+f],rotated:y,options:c,tag:t[a],series:i}),i.pointsByArgument[u.argument.valueOf()]=i.pointsByArgument[u.argument.valueOf()]||u,i.points.push(u));else for(o=e.valueField||"val",r=0;r<n.length;r++)(t=n[r],t[f]!==null&&t[f]!==undefined&&t[o]!==undefined)&&(c=i._getPointStyle(i.styles.point,r,t[f],t[o],undefined,t[a],{}),u=v(i.type,{value:t[o],argument:t[f],originalValue:t["original"+o],originalArgument:t["original"+f],rotated:y,options:c,tag:t[a],series:i}),i.points.push(u),i.pointsByArgument[u.argument.valueOf()]=i.pointsByArgument[u.argument.valueOf()]||u);i.originalPoints=i.points,i._segmentPoints()}},_preparePointStyle:function(n){var u=this,f=u.type,l=~f.indexOf("pie")||~f.indexOf("doughnut"),a=l?u.userOptions.pie:u.userOptions.point,e=u.styles.point,s=~f.indexOf("bar"),h=l||s||~f.indexOf("bubble")||~f.indexOf("stock")||~f.indexOf("stick"),i,o=n.color&&new t.Color(n.color),c;return n.border=n.border||{},n.border.color=n.border.color||n.color,n.hoverStyle=n.hoverStyle||{},n.hoverStyle.color=n.hoverStyle.color||u.isIE8&&s&&o&&o.highlight(20)||h&&n.color||undefined,n.hoverStyle.border=n.hoverStyle.border||{},n.hoverStyle.border.color=n.hoverStyle.border.color||n.color,n.selectionStyle=n.selectionStyle||{},n.selectionStyle.color=n.selectionStyle.color||u.isIE8&&s&&o&&o.highlight(20)||h&&n.color||undefined,n.selectionStyle.border=n.selectionStyle.border||{},n.selectionStyle.border.color=n.selectionStyle.border.color||n.color,n=r(!0,{},a,n),i=u._parsePointStyleOptions(n,f),i.attributes.inh=!1,i.label=r(!0,{},u.styles.point.label),h&&(c=function(n){if(!n)return!1;switch(n.toLowerCase()){case"allseriespoints":case"allargumentpoints":case"none":return!0}},i.attributes=r(!0,{},e.attributes,i.attributes),i.states.normal=r(!0,{},e.states.normal,i.states.normal),i.states.hover=r(!0,{},e.states.hover,i.states.hover),i.states.selected=r(!0,{},e.states.selected,i.states.selected),i.attributes.r=i.states.normal.r=i.states.hover.r=i.states.selected.r=e.attributes.r,i.hoverMode=c(u.options.hoverMode)&&u.options.hoverMode,i.selectionMode=c(u.options.selectionMode)&&u.options.selectionMode,i.visible=!0),i},_prepareLabelStyle:function(n){var t=this,u,i={},f=t.userOptions.label;return n=r(!0,{},f,n),i.color=t.userOptions.point.color,i.label=n,u=t._parseLabelStyleOptions(i)},_getPointStyle:function(n,t,i,u,f,e,o){var s=this,l,v,a,y,h,b,p=s.options.customizePoint,w=s.options.customizeLabel;return r(o,{index:t,argument:i,seriesName:s.name,tag:e}),f?(o.rangeValue1=u,o.rangeValue2=f):o.value=u,l=p?p.call(o,o):{},a=w?w.call(o,o):{},c(l)||(v=s._preparePointStyle(l),s.styles.pointStyles.push(v),h=v),c(a)||(y=s._prepareLabelStyle(a),h||(h=r(!0,{},n),s.styles.pointStyles.push(h)),h.label=y),c(l)&&c(a)&&(h=n),h},_segmentPoints:function(){var t=this,n=[];t.segments=[],u(t.points,function(i,r){r.hasValue()?n.push(r):n.length!==0&&(t.segments.push(n),n=[])}),n.length&&t.segments.push(n)},_parseOptions:function(t){this.options={incidentOccured:t.incidentOccured,rotated:!!t.rotated,seriesGroup:t.seriesGroup,seriesLabelsGroup:t.seriesLabelsGroup,seriesTrackerGroup:t.seriesTrackerGroup,markerTrackerGroup:t.markerTrackerGroup,argumentCategories:t.argumentCategories,argumentAxisType:t.argumentAxisType,argumentType:t.argumentType,argumentField:t.specificType==="candlestick"||t.specificType==="stock"?t.argumentField||"date":t.argumentField||"arg",valueCategories:t.valueCategories,valueAxisType:t.valueAxisType,valueType:t.valueType,valueField:t.valueField||"val",rangeValue1Field:t.rangeValue1Field||"val1",rangeValue2Field:t.rangeValue2Field||"val2",tagField:t.tagField||"tag",sizeField:t.sizeField||"size",openValueField:t.openValueField||"open",closeValueField:t.closeValueField||"close",highValueField:t.highValueField||"high",lowValueField:t.lowValueField||"low",selectionMode:(t.selectionMode||"").toLowerCase(),hoverMode:(t.hoverMode||"").toLowerCase(),showInLegend:t.showInLegend!==undefined?t.showInLegend:!0,customizePoint:n.isFunction(t.customizePoint)?t.customizePoint:undefined,customizeLabel:n.isFunction(t.customizeLabel)?t.customizeLabel:undefined,showZero:t.showZero},n.isFunction(this.options.incidentOccured)||(this.options.incidentOccured=n.noop),this.name=t.name,this.axis=t.axis,this.pane=t.pane,this.styles=this.parseStyleOptions(t),this.adjustOptions&&this.adjustOptions()},_createPointState:function(n,t,i){var r=n.border,u={strokeWidth:r.visible?r.width||0:0,stroke:r.visible&&r.width?r.color:"none",fill:n.color,r:n.size+(r.visible&&n.size!==0?~~(r.width/2)||0:0)};return t&&(u.inh=!0),i&&(u.hatching={},u.hatching={direction:n.hatching&&n.hatching.direction,width:n.hatching&&n.hatching.width,step:n.hatching&&n.hatching.step,opacity:n.hatching&&n.hatching.opacity}),u},_createSeriesState:function(n,t,i,r,u){var f=n.border,e={strokeWidth:f.visible?f.width||0:0,stroke:f.visible&&f.width?f.color:"none",fill:n.color,dashStyle:n.dashStyle||u,lineWidth:n.width,opacity:i?n.opacity:undefined};return t&&(e.r=n.cornerRadius),r&&(e.hatching={},e.hatching={direction:n.hatching.direction,width:n.hatching.width,step:n.hatching.step,opacity:n.hatching.opacity}),e},_parsePointStyleOptions:function(n,t){var i=t&&(~t.indexOf("bar")||~t.indexOf("bubble")||~t.indexOf("stock")||~t.indexOf("stick")),f=this._createPointState(n,!0),s=this._createPointState(n.hoverStyle,!1,i),h=this._createPointState(n.selectionStyle,!1,i),e={},o;return u(["linejoin","linecap","style"],function(t,i){i in n&&(e[i]=n[i])}),o=r(!0,{},f,e),{visible:n.visible,symbol:n.symbol,image:n.image,attributes:o,seriesName:n.seriesName,selectionMode:(n.selectionMode||"").toLowerCase(),hoverMode:(n.hoverMode||"").toLowerCase(),states:{normal:f,hover:s,selected:h}}},_parseLabelStyleOptions:function(t){var i=t.label,r=i.font,u=i.border,f=i.connector,e={align:i.alignment,font:{color:i.backgroundColor==="none"&&r.color.toLowerCase()==="#ffffff"&&i.position!=="inside"?t.color:r.color,family:r.family,weight:r.weight,size:r.size,opacity:r.opacity},style:i.style},o={fill:i.backgroundColor||t.color,strokeWidth:u.visible?u.width||0:0,stroke:u.visible&&u.width?u.color:"none",dashStyle:u.dashStyle},s={stroke:f.visible&&f.width?f.color||t.color:"none",strokeWidth:f.visible?f.width||0:0};return{format:i.format,argumentFormat:i.argumentFormat,precision:i.precision,argumentPrecision:i.argumentPrecision,percentPrecision:i.percentPrecision,customizeText:n.isFunction(i.customizeText)?i.customizeText:undefined,attributes:e,visible:r.size!==0?i.visible:!1,showForZeroValues:i.showForZeroValues,horizontalOffset:i.horizontalOffset,verticalOffset:i.verticalOffset,radialOffset:i.radialOffset,background:o,position:i.position,connector:s,rotationAngle:i.rotationAngle}},parseStyleOptions:function(n){var i=this,e=i.type,c=~e.indexOf("bubble")||~e.indexOf("area"),t=r(!0,{},this.getDefaultStyleOptions(),n),o=i._createSeriesState(t,!0,c),l=i._createSeriesState(t.hoverStyle,!1,!1,!0,t.dashStyle),a=i._createSeriesState(t.selectionStyle,!1,!1,!0,t.dashStyle),s={},h,f;return u(["linejoin","linecap","style"],function(n,i){t[i]&&(s[i]=t[i])}),h=r(!0,{},o,s),f=i._parsePointStyleOptions(t.point),f.label=i._parseLabelStyleOptions(t),{themeColor:t.color,attributes:h,maxLabelCount:t.maxLabelCount,minSegmentSize:t.minSegmentSize,minBarSize:t.minBarSize,reduction:{color:t.reduction.color,level:t.reduction.level,innerColor:t.innerColor},states:{normal:o,hover:l,selected:a},point:f}},canRenderCompleteHandle:function(){var n=this._canRenderCompleteHandle;return delete this._canRenderCompleteHandle,!!n},_isTypeSupported:function(n){return a.isString(n)||a.isNumber(n)||a.isDate(n)},_getPointSize:function(){return this.styles.point.visible?this.styles.point.attributes.r*2:2},getDefaultStyleOptions:function(){return{color:"#000000",border:{visible:!1,width:1,color:"#000000"},width:2,dashStyle:"solid",cornerRadius:0,innerColor:"#ffffff",reduction:{color:"#FF0000"},maxLabelCount:undefined,minSegmentSize:undefined,minBarSize:undefined,point:{visible:!0,symbol:"circle",color:"#000000",size:6,seriesName:this.name,border:{visible:!1,width:1,color:"#000000"},hoverStyle:{color:"#000000",border:{visible:!0,width:2,color:"#ffffff"},size:6},selectionStyle:{color:"#000000",border:{visible:!0,width:2,color:"#ffffff"},size:6}},label:{visible:!1,showForZeroValues:!0,alignment:"center",font:{family:"'Segoe UI', 'Helvetica Neue', 'Trebuchet MS', Verdana",weight:400,color:"#ffffff",size:14},rotationAngle:0,horizontalOffset:0,verticalOffset:0,radialOffset:0,format:"",argumentFormat:"",precision:0,argumentPrecision:0,position:"outside",connector:{visible:!1,width:1},border:{visible:!1,width:1,color:"#808080",dashStyle:"solid"}},hoverStyle:{hatching:{direction:"none",width:2,step:6,opacity:.75},color:"#000000",border:{visible:!1,width:1,color:"#000000"},width:3},selectionStyle:{hatching:{direction:"right",width:2,step:6,opacity:.5},color:"#000000",border:{visible:!1,width:1,color:"#000000"},width:3}}}})}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.LineSeries=i.BaseSeries.inherit({ctor:function(n,t,i){t.specificType=t.specificType||"line",this.callBase(n,t,i),this.paths=this.paths||[]},dispose:function(){this.paths=null,this.callBase()},drawSeriesData:function(t,i,u,f){var e=this;e.segments&&(e.paths=[],f&&(u.applySettings(r.hideGroup),i.applySettings(r.hideGroup)),n.each(e.segments,function(n,r){e.styles.attributes.strokeWidth>0&&e.drawLine(t,f?e.getZeroPathPoints(n):r),e.drawPoints(i,u,r)}),f&&e.animate(function(){i.animate(r.showGroup,r.showDuration),u.animate(r.showGroup,r.showDuration)}))},_drawTrackersForSegment:function(n,t){this.drawLineTracker(t),this.callBase(n,t)},applyNormalStyle:function(n){var t=this;t.paths&&(t.applyPathNormalStyle(),t.applyPointNormalStyle(n))},applyHoverStyle:function(n){var t=this;t.paths&&(t.applyPathHoverStyle(),t.applyPointHoverStyle(n))},applySelectionStyle:function(n){var t=this;t.paths&&(t.applyPathSelectionStyle(),t.applyPointSelectionStyle(n))},animate:function(n){this.animatePaths(n)}}).include(i.SeriesPointsDrawerMixin).include(i.LineDrawerMixin).include(i.LineSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pathVisualizationMixin).include(i.pointsAnimation).include(i.pathAnimation).include(i.SeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.AreaSeries=i.BaseSeries.inherit({ctor:function(n,t,i){this.type=t.specificType=t.specificType||"area",this.callBase(n,t,i),this.areaSegments=this.areaSegments||[]},dispose:function(){var n=this;n.areas=null,n.areaSegments=null,n.paths=null,n.callBase()},drawSeriesData:function(t,i,u,f){var e=this,o,s;(e.paths=[],e.areas=[],e.segments)&&(f&&(u.applySettings(r.hideGroup),i.applySettings(r.hideGroup)),n.each(e.segments,function(n,r){e.prepareSegments(n),f?(s=e.getZeroAreaPoints(n),o=e.getZeroPathPoints(n)):(s=e.areaSegments[n],o=r),e.drawPoints(i,u,r),e.drawArea(t,n,s),(e.styles.attributes.strokeWidth>0||e.styles.states.hover.strokeWidth>0||e.styles.states.selected.strokeWidth>0)&&e.drawLine(t,o)}),f&&e.animate(function(){i.animate(r.showGroup,r.showDuration),u.animate(r.showGroup,r.showDuration)}))},_drawTrackersForSegment:function(n,t){this.drawAreaTracker(n,t),this.callBase(n,t)},applyNormalStyle:function(n){this.applyPointNormalStyle(n),this.applyPathNormalStyle(),this.applyAreaNormalStyle()},applyHoverStyle:function(n){this.applyPointHoverStyle(n),this.applyPathHoverStyle(),this.applyAreaHoverStyle()},applySelectionStyle:function(n){this.applyPointSelectionStyle(n),this.applyPathSelectionStyle(),this.applyAreaSelectionStyle()},animate:function(n){this.animateAreas(n),this.animatePaths()}}).include(i.AreaDrawerMixin).include(i.SeriesPointsDrawerMixin).include(i.LineDrawerMixin).include(i.AreaSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pathVisualizationMixin).include(i.areaVisualizationMixin).include(i.pointsAnimation).include(i.pathAnimation).include(i.areaAnimation).include(i.specialAreaMethodsMixin).include(i.SeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.BarSeries=i.BaseSeries.inherit({ctor:function(n,t,i){t.specificType=t.specificType||"bar",this.callBase(n,t,i),this.stackName="axis_"+(t.axis||"default")+"_stack_"+(t.stack||"default")},_applyClippings:function(n,t,i){this.paneClipRectID&&(n.clipId=this.paneClipRectID,i.clipId=this.paneClipRectID)},_applyTrackersClippings:function(){this.paneClipRectID&&this.options.markerTrackerGroup.applySettings({clipId:this.paneClipRectID})},drawSeriesData:function(t,i,u,f){var e=this;(e.points.length&&e.hoverPattern&&(e.styles.point.states.hover.fill=e.hoverPattern.id,e.styles.point.states.selected.fill=e.selectedPattern.id),n.each(e.styles.pointStyles,function(n,t){t&&t.hoverPattern&&(t.states.hover.fill=t.hoverPattern.id,t.states.selected.fill=t.selectedPattern.id)}),e.segments)&&(f&&(this.options.rotated?e.seriesGroup.applySettings({scale:{x:.001,y:1},translateX:this.translator.translateX("canvas_position_default")}):e.seriesGroup.applySettings({scale:{x:1,y:.001},translateY:this.translator.translateY("canvas_position_default")}),u.applySettings(r.hideGroup)),n.each(this.segments,function(n,t){e.drawPoints(i,u,t)}),f&&e.animate(function(){u.animate(r.showGroup,r.showDuration)}))},applyNormalStyle:function(n){this.applyPointNormalStyle(n)},applyHoverStyle:function(n){this.applyPointHoverStyle(n)},applySelectionStyle:function(n){this.applyPointSelectionStyle(n)},animate:function(n){var i=this,t=this.seriesGroup;t.animate({scale:{x:1,y:1},translate:{y:0,x:0}},{},n)}}).include(i.SeriesPointsDrawerMixin).include(i.BarSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pointsAnimation).redefine(i.specialBarMethodsMixin).redefine(i.SeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=t.utils.isDefined;i.CandleStickSeries=i.BaseSeries.inherit({ctor:function(n,t){t.specificType=t.specificType||"candlestick",this.callBase(n,t)},dispose:function(){var n=this;n.hoverPatternReduction=null,n.selectedPatternReduction=null,n.callBase()},drawSeriesData:function(t,i,r){var u=this,f=u.createMarkerGroups(i);return n.each(u.points,function(n,t){switch(t.pointClassName){case"dx-candle-reduction":t.options.states.hover.fill=u.hoverPatternReduction.id,t.options.states.selected.fill=u.selectedPatternReduction.id,t.options.states.hover.stroke=u.hoverPatternReduction.id,t.options.states.selected.stroke=u.selectedPatternReduction.id;break;case"dx-candle-default":t.options.states.hover.fill=u.hoverPattern.id,t.options.states.selected.fill=u.selectedPattern.id,t.options.states.hover.stroke=u.hoverPattern.id,t.options.states.selected.stroke=u.selectedPattern.id;break;case"dx-candle-reduction dx-candle-positive":t.options.states.hover.stroke=u.hoverPatternReduction.id,t.options.states.selected.stroke=u.selectedPatternReduction.id;break;default:t.options.states.hover.stroke=u.hoverPattern.id,t.options.states.selected.stroke=u.selectedPattern.id}}),n.each(this.styles.pointStyles,function(n,t){t&&t.hoverPattern&&(t.states.hover.fill===t.states.hover.stroke&&(t.states.hover.fill=t.hoverPattern.id,t.states.selected.fill=t.selectedPattern.id),t.states.hover.stroke=t.hoverPattern.id,t.states.selected.stroke=t.selectedPattern.id)}),u.drawPoints(f,r,u.points),this},applyNormalStyle:function(n){this.applyPointNormalStyle(n)},applyHoverStyle:function(n){this.applyPointHoverStyle(n)},applySelectionStyle:function(n){this.applyPointSelectionStyle(n)},animate:function(){this.animatePoints()}}).include(i.SeriesPointsDrawerMixin).include(i.CandleStickSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pointsAnimation).redefine(i.specialCandleStickMethodsMixin).include(i.FinancialSeriesDataResamplerMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series;i.StockSeries=i.BaseSeries.inherit({ctor:function(n,t){t.specificType=t.specificType||"stock",this.callBase(n,t)},drawSeriesData:function(t,i,r){var u=this,f=u.styles.states.hover.stroke,e=u.styles.states.selected.stroke,o=u.styles.states.normal.stroke,s=u.styles.reduction.color,h=u.createMarkerGroups(i);return n.each(u.points,function(n,t){switch(t.pointClassName){case"dx-candle-reduction":case"dx-candle-reduction dx-candle-positive":t.options.states.hover.stroke=o===f?s:f,t.options.states.selected.stroke=o===e?s:e;break;default:t.options.states.hover.stroke=f,t.options.states.selected.stroke=e}}),n.each(this.styles.pointStyles,function(n,t){t&&t.hoverPattern&&(t.states.hover.stroke=t.hoverPattern.id,t.states.selected.stroke=t.selectedPattern.id)}),u.drawPoints(h,r,u.points),this},applyNormalStyle:function(n){this.applyPointNormalStyle(n)},applyHoverStyle:function(n){this.applyPointHoverStyle(n)},applySelectionStyle:function(n){this.applyPointSelectionStyle(n)},animate:function(){this.animatePoints()}}).include(i.SeriesPointsDrawerMixin).include(i.CandleStickSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pointsAnimation).redefine(i.specialCandleStickMethodsMixin).include(i.FinancialSeriesDataResamplerMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.SplineSeries=i.BaseSeries.inherit({ctor:function(n,t,i){t.specificType=t.specificType||"spline",this.callBase(n,t,i)},drawSeriesData:function(t,i,u,f){var e=this;(e.paths=[],e.segments)&&(f&&(u.applySettings(r.hideGroup),i.applySettings(r.hideGroup)),n.each(e.segments,function(n,r){e.prepareSegments(n);var o=f?e.getZeroPathPoints(n):e.preparedSegments[n];e.styles.attributes.strokeWidth>0&&e.drawSpline(t,n,o),e.drawPoints(i,u,r)}),f&&e.animate(function(){i.animate(r.showGroup,r.showDuration),u.animate(r.showGroup,r.showDuration)}))},_drawTrackersForSegment:function(n,t){this.drawSplineTracker(n),this.callBase(n,t)},applyNormalStyle:function(n){var t=this;t.paths&&(t.applyPathNormalStyle(),t.applyPointNormalStyle(n))},applyHoverStyle:function(n){var t=this;t.paths&&(t.applyPathHoverStyle(),t.applyPointHoverStyle(n))},applySelectionStyle:function(n){var t=this;t.paths&&(t.applyPathSelectionStyle(),t.applyPointSelectionStyle(n))},animate:function(n){this.animatePaths(n)}}).include(i.SplineDrawerMixin).include(i.SeriesPointsDrawerMixin).include(i.LineSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pathVisualizationMixin).include(i.pointsAnimation).include(i.pathAnimation).include(i.SeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.SplineAreaSeries=i.BaseSeries.inherit({ctor:function(n,t,i){t.specificType=t.specificType||"splinearea",this.callBase(n,t,i),this.areas=this.areas||[],this.areaSegments=this.areaSegments||[]},dispose:function(){var n=this;n.areas=null,n.areaSegments=null,n.paths=null,n.callBase()},drawSeriesData:function(t,i,u,f){var e=this,o,s;(e.paths=[],e.areas=[],e.segments)&&(f&&(u.applySettings(r.hideGroup),i.applySettings(r.hideGroup)),n.each(e.segments,function(n,r){e.prepareSegments(n),f?(o=e.getZeroPathPoints(n),s=e.getZeroAreaPoints(n)):(o=e.preparedSegments[n],s=e.areaSegments[n]),e.drawPoints(i,u,r),e.drawSplineArea(t,n,s),(e.styles.attributes.strokeWidth>0||e.styles.states.hover.strokeWidth>0||e.styles.states.selected.strokeWidth>0)&&e.drawSpline(t,n,o)}),e.hoverPattern&&(e.styles.area.states.hover.fill=e.hoverPattern.id,e.styles.area.states.selected.fill=e.selectedPattern.id,e.styles.states.hover.fill="none",e.styles.states.selected.fill="none"),f&&e.animate(function(){i.animate(r.showGroup,r.showDuration),u.animate(r.showGroup,r.showDuration)}))},_drawTrackersForSegment:function(n,t){this.drawSplineAreaTracker(n,t),this.callBase(n,t)},applyNormalStyle:function(n){this.applyPointNormalStyle(n),this.applyPathNormalStyle(),this.applyAreaNormalStyle()},applyHoverStyle:function(n){this.applyPointHoverStyle(n),this.applyPathHoverStyle(),this.applyAreaHoverStyle()},applySelectionStyle:function(n){this.applyPointSelectionStyle(n),this.applyPathSelectionStyle(),this.applyAreaSelectionStyle()},animate:function(n){this.animateAreas(n),this.animatePaths()}}).include(i.SplineDrawerMixin).include(i.SeriesPointsDrawerMixin).redefine(i.SplineAreaDrawerMixin).include(i.AreaSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pathVisualizationMixin).include(i.areaVisualizationMixin).include(i.pointsAnimation).include(i.pathAnimation).include(i.splineAreaAnimation).include(i.specialAreaMethodsMixin).include(i.SeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.ScatterSeries=i.BaseSeries.inherit({ctor:function(n,t){t.specificType=t.specificType||"scatter",this.callBase(n,t)},drawSeriesData:function(t,i,u,f){var e=this;e.segments&&(f&&u.applySettings(r.hideGroup),n.each(this.segments,function(n,t){e.drawPoints(i,u,t,f)}),f&&e.animate(function(){u.animate(r.showGroup,r.showDuration)}))},applyNormalStyle:function(n){this.applyPointNormalStyle(n)},applyHoverStyle:function(n){this.applyPointHoverStyle(n)},applySelectionStyle:function(n){this.applyPointSelectionStyle(n)},animate:function(n){this.animatePoints(n)}}).include(i.SeriesPointsDrawerMixin).include(i.pointVisualizationMixin).include(i.pointsAnimation).include(i.SeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.RangeAreaSeries=i.BaseSeries.inherit({ctor:function(n,t){t.specificType=t.specificType||"rangearea",this.callBase(n,t,!0),this.areaSegments=this.areaSegments||[]},drawSeriesData:function(t,i,u,f){var e=this;(e.areas=[],e.segments)&&(f&&(u.applySettings(r.hideGroup),i.applySettings(r.hideGroup)),n.each(e.segments,function(n,r){e.prepareSegments(n),e.drawPoints(i,u,r),e.drawArea(t,n,f?e.getZeroAreaPoints(n):e.areaSegments[n])}),f&&e.animate(function(){i.animate(r.showGroup,r.showDuration),u.animate(r.showGroup,r.showDuration)}))},_drawTrackersForSegment:function(n,t){this.drawAreaTracker(n,t),this.callBase(n,t)},applyNormalStyle:function(n){this.applyPointNormalStyle(n),this.applyAreaNormalStyle()},applyHoverStyle:function(n){this.applyPointHoverStyle(n),this.applyAreaHoverStyle()},applySelectionStyle:function(n){this.applyPointSelectionStyle(n),this.applyAreaSelectionStyle()},animate:function(n){this.animateAreas(n)}}).include(i.AreaDrawerMixin).include(i.SeriesPointsDrawerMixin).include(i.AreaSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.areaVisualizationMixin).include(i.pointsAnimation).include(i.areaAnimation).include(i.specialAreaMethodsMixin).include(i.RangeSeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.RangeBarSeries=i.BaseSeries.inherit({ctor:function(n,t){t.specificType=t.specificType||"rangebar",this.callBase(n,t,!0)},_applyClippings:function(n,t,i){this.paneClipRectID&&(n.clipId=this.paneClipRectID,i.clipId=this.paneClipRectID)},_applyTrackersClippings:function(){this.paneClipRectID&&this.options.markerTrackerGroup.applySettings({clipId:this.paneClipRectID})},drawSeriesData:function(t,i,u,f){var e=this;(e.points.length&&e.hoverPattern&&(e.styles.point.states.hover.fill=e.hoverPattern.id,e.styles.point.states.selected.fill=e.selectedPattern.id),n.each(e.styles.pointStyles,function(n,t){t&&t.hoverPattern&&(t.states.hover.fill=t.hoverPattern.id,t.states.selected.fill=t.selectedPattern.id)}),e.segments)&&(f&&(this.options.rotated?e.seriesGroup.applySettings({scale:{x:.001,y:1},translateX:this.translator.translateX("canvas_position_default")}):e.seriesGroup.applySettings({scale:{x:1,y:.001},translateY:this.translator.translateY("canvas_position_default")}),u.applySettings(r.hideGroup)),n.each(this.segments,function(n,t){e.drawPoints(i,u,t)}),f&&e.animate(function(){u.animate(r.showGroup,r.showDuration)}))},applyNormalStyle:function(n){this.applyPointNormalStyle(n)},applyHoverStyle:function(n){this.applyPointHoverStyle(n)},applySelectionStyle:function(n){this.applyPointSelectionStyle(n)},animate:function(n){this.seriesGroup.animate({scale:{x:1,y:1},translate:{y:0,x:0}},{},n)}}).include(i.SeriesPointsDrawerMixin).include(i.BarSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pointsAnimation).include(i.RangeSeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var f=t.viz.charts.series,e=f.consts.states,i=Math.round,r=t.utils.getCosAndSin,u=20;f.PiePoint=f.BasePoint.inherit({ctor:function(t){this.centerX=300,this.centerY=150,this.INDENT_FROM_PIE=30,this.radiusOuter=120,this.radiusInner=0,this.setLabelEllipsis=!1,this.callBase(t),this.minValue=0,this.tag=t.tag,this._pieTrackerAttrs=n.extend({},this._trackerAttrs,{inh:!1,fill:"grey"})},translate:function(n){var t=this,i=t.shiftedAngle||0;(t.translator=n=n||t.translator,t.translator)&&(t.fromAngle=n.translate(t.minValue)+i,t.toAngle=n.translate(t.value)+i,t.middleAngle=n.translate((t.value-t.minValue)/2+t.minValue)+i)},correctValue:function(n,t){var i=this;i.value+=n,i.minValue+=n,i.percent=t,i.labelFormatObject.percent=t},getTooltipCoords:function(){var n=r(this.middleAngle);return{x:this.centerX+(this.radiusInner+(this.radiusOuter-this.radiusInner)/2)*n.cos,y:this.centerY-(this.radiusInner+(this.radiusOuter-this.radiusInner)/2)*n.sin,offset:0}},correctPosition:function(n){var t=this;t.radiusInner=n.radiusInner,t.radiusOuter=n.radiusOuter,t.centerX=n.centerX,t.centerY=n.centerY},drawMarker:function(t,i,r){this.options.attributes.inh=!1;var u=r?n.extend({scale:{x:0,y:0},translateX:this.centerX,translateY:this.centerY},this.options.attributes):this.options.attributes;this.graphic=t.createArc(this.centerX,this.centerY,this.radiusOuter,this.radiusInner,this.toAngle,this.fromAngle,u).append(i),this._checkState()},drawTrackerMarker:function(n,t){this.trackerGraphic=n.createArc(this.centerX,this.centerY,this.radiusOuter,this.radiusInner,this.toAngle,this.fromAngle,this._pieTrackerAttrs).append(t),this.trackerGraphic.data({point:this})},correctLabel:function(n){this.correctLabelPosition(n),this.checkEllipsis(),this.correctBackgroundPosition(),this.rotateLabel(),this.checkLabelPosition()},correctLabelPosition:function(n){var t=this,a=t.label.getBBox(),v=t.options.label,o=r(t.middleAngle),s="center",e=t.radiusOuter+v.radialOffset,h=t.series.canvas,c=h.width-h.right,l=h.left,f,y;switch(v.position){case"outside":e+=t.INDENT_FROM_PIE,o.cos>.1?s="left":o.cos<-.1&&(s="right"),f=t.centerX+e*o.cos;break;case"inside":e-=t.INDENT_FROM_PIE,f=t.centerX+e*o.cos;break;case"columns":e+=u,o.cos>0?(s="right",f=n?t.centerX+e+n:c,f=f>c?c:f):o.cos<0&&(s="left",f=n?t.centerX-e-n:l,f=f<l?l:f)}y=i(t.label.settings.y+t.centerY-e*o.sin-a.y-a.height/2),t.label.applySettings({x:f,y:y,align:s})},correctConnectorPosition:function(){var n=this,c=n.options.label,y=c.position,f,l=n.series,p=n.connector,a=l.styles&&l.styles.attributes,h=n.radiusOuter,v,t,e,o,s=[];y!=="inside"&&p&&(f=r(i(n.middleAngle)),v=l.userOptions.containerBackgroundColor===a.stroke?i(a.strokeWidth/2):i(-a.strokeWidth/2),s.push({x:i(n.centerX+(h-v)*f.cos),y:i(n.centerY-(h-v)*f.sin)}),e=i(n.centerX+(h+c.radialOffset+u)*f.cos),y==="columns"?(t=n.insideLabelGroup.getBBox(),t.x=t.x+(n.insideLabelGroup.settings.translateX||0),t.y=t.y+(n.insideLabelGroup.settings.translateY||0),o=t.y+t.height/2,s.push({x:e,y:o}),n.labelBackground?e=t.x+t.width/2:f.cos<0?e=t.x+t.width:f.cos>0&&(e=t.x),s.push({x:e,y:o})):(o=i(n.centerY-(h+c.radialOffset+u)*f.sin),s.push({x:e,y:o})),p.applySettings({points:s}))},rotateLabel:function(){var n=this,t=n.options.label,o=n.radiusOuter+t.radialOffset*2+u,s=r(n.middleAngle),f,e,i=n.insideLabelGroup.getBBox();t.position==="inside"||t.position==="columns"?(f=i.x+i.width/2,e=i.y+i.height/2):(f=n.centerX+o*s.cos,e=n.centerY-o*s.sin),n.insideLabelGroup.applySettings({x:f,y:e,rotate:t.rotationAngle})},checkEllipsis:function(){var i=this,l,h=10,t,v,k=0,y=[],d=[],g,s,p,e,a,o,c=r(i.options.label.rotationAngle),f=i.series.canvas,nt=this.options.label,w=r(this.middleAngle),b=this.centerX+(this.radiusOuter+u)*w.cos;if(i.label.tspans&&i.setLabelEllipsis){if(t=i.label.getBBox(),e=t.x+t.width<i.centerX?t.x+t.width:t.x,a=t.y+t.height/2,o=t.x+t.width<i.centerX?-t.width:t.width,a+o*c.sin>f.height-f.bottom+h||a+o*c.sin<f.top-h||e+o*c.cos<f.left-h||e+o*c.cos>f.width-f.right+h||nt.position==="columns"&&(w.cos<0&&b<e||w.cos>0&&b>e))for(l=0;l<i.label.tspans.length;l++)k+=i.label.tspans[l].element.getNumberOfChars(),(!i.label.tspans[l+1]||i.label.tspans[l+1].settings.dy>0)&&(y.push(k),d.push(l),k=0);while(a+o*c.sin>f.height-f.bottom+h||a+o*c.sin<f.top-h||e+o*c.cos<f.left-h||e+o*c.cos>f.width-f.right+h||nt.position==="columns"&&(w.cos<0&&b<e||w.cos>0&&b>e)){if(g=Math.max.apply(null,y),g===0)break;p=n.inArray(g,y),s=d[p],i.label.tspans[s].element.textContent==="..."?i.label.tspans[s].settings.dy>0||!i.label.tspans[s-1]?y[p]=0:i.label.tspans[s-1]&&(i.label.tspans[s].element.textContent="",d[p]-=1,i.label.tspans[s-1].element.textContent+="..."):(v=i.label.tspans[s].element.textContent,v=v.substr(0,v.length-4)+"...",i.label.tspans[s].element.textContent=v,y[p]-=1),t=i.label.getBBox(),e=t.x+t.width<i.centerX?t.x+t.width:t.x,a=t.y+t.height/2,o=t.x+t.width<i.centerX?-t.width:t.width}}},checkLabelPosition:function(){var u=this,f=u.insideLabelGroup,n=f.getBBox(),t=u.series.canvas,i=0,r=0;n.y+n.height>t.height-t.bottom?r=t.height-n.y-n.height-t.bottom:n.y<t.top&&(r=t.top-n.y),n.x+n.width>t.width-t.right?i=t.width-t.right-n.x-n.width:n.x<t.left&&(i=t.left-n.x),f.move(i,r)},isInVisibleArea:function(){return!0},_populatePointShape:function(n,i){var u=this,r=t.utils.getCosAndSin(this.middleAngle);n.x=this.centerX-~~(i*r.cos),n.y=this.centerY+~~(i*r.sin),n.outerRadius=this.radiusOuter+i,n.innerRadius=this.radiusInner,n.startAngle=this.toAngle,n.endAngle=this.fromAngle},applyHoverStyle:function(){return this.graphic&&(this._populatePointShape(this.options.states.hover,0),this.graphic.applySettings(this.options.states.hover),this.graphic.toForeground(),this.graphic.addClass("dx-chart-hovered-point")),this.legend&&this.legend.applyHoverStyle(this),this},applyNormalStyle:function(){return this.graphic&&(this._populatePointShape(this.options.states.normal,0),this.graphic.applySettings(this.options.states.normal)),this.legend&&this.legend.applyNormalStyle(this),this},applySelectionStyle:function(){return this.graphic&&(this._populatePointShape(this.options.states.selected,0),this.graphic.applySettings(this.options.states.selected),this.graphic.toForeground(),this.graphic.addClass("dx-chart-selected-point")),this.legend&&this.legend.applySelectionStyle(this),this},animate:function(n,t,i){this.graphic.animate({scale:{x:1,y:1},translate:{y:0,x:0}},{partitionDuration:t,step:i},n)}})}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,u=20,r=i.consts.animations;i.PieSeries=i.BaseSeries.inherit({ctor:function(n,t){t.specificType=t.specificType||"pie",this.callBase(n,t),this.labelSpace=0,this.hoverSpace=0&&this.styles.point.states.enableHover?u:0,this.innerRadius=this.type==="pie"?0:t.innerRadius,this.outerRadius=t.radius,this.redraw=!1},createPatterns:function(){var t=this.renderer;n.each(this.points,function(n,i){i.hoverPatternColor||(i.hoverPatternColor=i.options.states.hover.fill,i.selectedPatternColor=i.options.states.selected.fill),i.hoverPattern||(i.hoverPattern=t.createPattern(i.hoverPatternColor,i.options.states.hover.hatching),i.selectedPattern=t.createPattern(i.selectedPatternColor,i.options.states.selected.hatching)),i.hoverPattern.append(),i.selectedPattern.append(),i.options.states.hover.fill=i.hoverPattern.id,i.options.states.selected.fill=i.selectedPattern.id}),this.styles.pointStyles=this.styles.pointStyles||[],n.each(this.styles.pointStyles,function(n,i){if(i){var r=i.states.hover,u=i.states.selected;i.hoverPatternColor||(i.hoverPatternColor=r.fill,i.selectedPatternColor=u.fill),i.hoverPattern||(i.hoverPattern=t.createPattern(i.hoverPatternColor,r.hatching),i.selectedPattern=t.createPattern(i.selectedPatternColor,u.hatching)),i.hoverPattern.append(),i.selectedPattern.append()}})},drawSeriesData:function(t,i,u,f){var e=this,o=e.canvas,w=e.styles.point.label,s=e.points,h=0,c=[],y=[],p,l,a,v;return n.each(e.styles.pointStyles,function(n,t){t&&t.hoverPattern&&(t.states.hover.fill=t.hoverPattern.id,t.states.selected.fill=t.selectedPattern.id)}),e.drawPoints(i,u,s,f),f&&u.applySettings(r.hideGroup),w.position==="columns"?(n.each(s,function(n,t){t.label&&c.push(t.label&&t.label.getBBox().width)}),c.length&&(p=Math.max.apply(null,c),n.each(s,function(n,t){t.label&&(t.correctLabel(p),t.correctConnectorPosition(),t.setLabelEllipsis=!0,y.push(t.insideLabelGroup.getBBox().width+t.INDENT_FROM_PIE+t.options.label.radialOffset))}),h=Math.max.apply(null,y),e.redraw=!0,l=o.height-o.top-o.bottom,a=o.width-o.left-o.right,v=a<l?a:l,e.labelSpace=h>v/2-h?v/2:2*h)):n.each(s,function(n,t){t.label&&(t.setLabelEllipsis=!0,t.correctLabel())}),f&&this.animate(function(){u.animate(r.showGroup,r.showDuration)}),this},drawTrackers:function(){this.drawPointTrackers(this.points)},applyNormalStyle:function(n){this.applyPointNormalStyle(n)},applyHoverStyle:function(n){this.applyPointHoverStyle(n)},applySelectionStyle:function(n){this.applyPointSelectionStyle(n)},animate:function(n){this.sequentialAnimatePoints(n)}}).include(i.SeriesPointsDrawerMixin).include(i.BarSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pointsAnimation).redefine(i.specialPieMethodsMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.StepLineSeries=i.BaseSeries.inherit({ctor:function(n,t,i){this.type=t.specificType=t.specificType||"stepline",this.callBase(n,t,i)},drawSeriesData:function(t,i,u,f){var e=this;e.segments&&(e.paths=[],f&&(u.applySettings(r.hideGroup),i.applySettings(r.hideGroup)),n.each(e.segments,function(n,r){e.prepareSegments(n);var o=f?e.getZeroPathPoints(n):e.preparedSegments[n];e.drawStepLine(t,n,o),e.drawPoints(i,u,r)}),f&&e.animate(function(){i.animate(r.showGroup,r.showDuration),u.animate(r.showGroup,r.showDuration)}))},_drawTrackersForSegment:function(n,t){this.drawStepLineTracker(n,t),this.callBase(n,t)},applyNormalStyle:function(n){var t=this;t.paths&&(t.applyPathNormalStyle(),t.applyPointNormalStyle(n))},applyHoverStyle:function(n){var t=this;t.paths&&(t.applyPathHoverStyle(),t.applyPointHoverStyle(n))},applySelectionStyle:function(n){var t=this;t.paths&&(t.applyPathSelectionStyle(),t.applyPointSelectionStyle(n))},animate:function(n){this.animatePaths(n)}}).include(i.SeriesPointsDrawerMixin).include(i.StepLineDrawerMixin).include(i.LineSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pathVisualizationMixin).include(i.pointsAnimation).include(i.pathAnimation).include(i.SeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,r=i.consts.animations;i.StepAreaSeries=i.BaseSeries.inherit({ctor:function(n,t,i){this.type=t.specificType=t.specificType||"steparea",this.areaSegments=this.areaSegments||[],this.callBase(n,t,i)},drawSeriesData:function(t,i,u,f){var e=this,o,s;(e.paths=[],e.areas=[],e.segments)&&(f&&(u.applySettings(r.hideGroup),i.applySettings(r.hideGroup)),n.each(e.segments,function(n,r){e.prepareSegments(n),f?(o=e.getZeroAreaPoints(n),s=e.getZeroPathPoints(n)):(s=e.preparedSegments[n],o=e.areaSegments[n]),e.drawPoints(i,u,r),e.drawStepArea(t,n,o),(e.styles.attributes.strokeWidth>0||e.styles.states.hover.strokeWidth>0||e.styles.states.selected.strokeWidth>0)&&e.drawStepLine(t,n,s)}),f&&e.animate(function(){i.animate(r.showGroup,r.showDuration),u.animate(r.showGroup,r.showDuration)}))},_drawTrackersForSegment:function(n,t){this.drawStepAreaTrackers(n,t),this.callBase(n,t)},applyNormalStyle:function(n){this.applyPointNormalStyle(n),this.applyPathNormalStyle(),this.applyAreaNormalStyle()},applyHoverStyle:function(n){this.applyPointHoverStyle(n),this.applyPathHoverStyle(),this.applyAreaHoverStyle()},applySelectionStyle:function(n){this.applyPointSelectionStyle(n),this.applyPathSelectionStyle(),this.applyAreaSelectionStyle()},animate:function(n){this.animateAreas(n),this.animatePaths()}}).include(i.SeriesPointsDrawerMixin).include(i.StepLineDrawerMixin).redefine(i.StepAreaDrawerMixin).include(i.AreaSeriesAdjustOptionsMixin).include(i.pointVisualizationMixin).include(i.pathVisualizationMixin).include(i.areaVisualizationMixin).include(i.pointsAnimation).include(i.pathAnimation).include(i.areaAnimation).include(i.specialAreaMethodsMixin).include(i.SeriesDataFilterMixin)}(jQuery,DevExpress),function(n,t){var i=t.viz.charts.series,e=t.utils.isDefined,o=t.utils,u=i.BaseSeries,r=i.consts.animations,f=u.inherit({ctor:function(n,t){t.specificType=t.specificType||"bubble",this.callBase(n,t)},_applyClippings:function(n,t,i){this.paneClipRectID&&(n.clipId=this.paneClipRectID,i.clipId=this.paneClipRectID,t.clipId=this.paneClipRectID)},drawSeriesData:function(t,i,u,f){this.points.length&&this.hoverPattern&&(this.styles.point.states.hover.fill=this.hoverPattern.id,this.styles.point.states.selected.fill=this.selectedPattern.id),n.each(this.styles.pointStyles,function(n,t){t&&t.hoverPattern&&(t.states.hover.fill=t.hoverPattern.id,t.states.selected.fill=t.selectedPattern.id)}),f&&u.applySettings(r.hideGroup),this.drawPoints(i,u,this.points,f),f&&this.animate(function(){u.animate(r.showGroup,r.showDuration)})},_applyTrackersClippings:function(){this.paneClipRectID&&this.options.markerTrackerGroup.applySettings({clipId:this.paneClipRectID})},drawTrackers:function(){this.trackerElements=[],this.drawPointTrackers(this.points),this._applyTrackersClippings()},applyNormalStyle:function(n){this.applyPointNormalStyle(n)},applyHoverStyle:function(n){this.applyPointHoverStyle(n)},applySelectionStyle:function(n){this.applyPointSelectionStyle(n)},animate:function(n){this.animatePoints(n)}}).include(i.SeriesPointsDrawerMixin).include(i.pointVisualizationMixin).redefine(i.specialBubbleMethodsMixin).include(i.BubleSeriesAdjustOptionsMixin).include(i.pointsAnimation).include(i.BubbleSeriesDataResamplerMixin);i.BubbleSeries=f}(jQuery,DevExpress),function(n,t){t.viz.charts.series.SeriesFamily=t.Class.inherit(function(){var h=function(t){var r=this,u=n.noop;n.extend(r,t),r.type=r.type.toLowerCase(),r.series=[];switch(r.type){case"bar":r.adjustSeriesDimensions=f,r.adjustSeriesValues=u,r.updateSeriesValues=y;break;case"rangebar":r.adjustSeriesDimensions=f,r.adjustSeriesValues=u,r.updateSeriesValues=u;break;case"fullstackedbar":r.fullStacked=!0,r.adjustSeriesDimensions=e,r.adjustSeriesValues=i,r.updateSeriesValues=s;break;case"stackedbar":r.adjustSeriesDimensions=e,r.adjustSeriesValues=i,r.updateSeriesValues=s;break;case"fullstackedarea":case"fullstackedline":r.fullStacked=!0,r.adjustSeriesDimensions=u,r.adjustSeriesValues=i,r.updateSeriesValues=u;break;case"stackedarea":case"stackedline":r.adjustSeriesDimensions=u,r.adjustSeriesValues=i,r.updateSeriesValues=u;break;case"candlestick":case"stock":r.adjustSeriesDimensions=p,r.adjustSeriesValues=u,r.updateSeriesValues=u;break;case"bubble":r.adjustSeriesDimensions=w,r.adjustSeriesValues=u,r.updateSeriesValues=u;break;default:r.adjustSeriesDimensions=u,r.adjustSeriesValues=u,r.updateSeriesValues=u}},c=function(){this.series=null,this.translator=null},l=function(t){var u=this,r,i;for(n.isArray(t)||(t=[t]),i=0;i<t.length;i++)r=t[i],r.type.toLowerCase()===u.type&&u.series.push(r)},r=function(t,i,r,u,f){var e,o,g,c,h,a,d,nt,p,l,w={},v={},b,y,s=Math.round,k;if(u)for(o=u.width&&u.width<0?0:u.width,e=u.spacing&&u.spacing<0?0:u.spacing,o&&!e?r>1?(e=s((i*.7-o*r)/(r-1)),e<1&&(e=1)):e=0:e&&!o?(o=s((i*.7-e*(r-1))/r),o<2&&(o=2)):e||o||(r>1?(e=s(i*.7/r*.2),e<1&&(e=1)):e=0,o=s((i*.7-e*(r-1))/r),o<2&&(o=2)),o*r+e*(r-1)>i&&(e=s((i*.7-o*r)/(r-1)),e<1&&(e=1,g=s((i*.7-e*(r-1))/r))),c=r/2,a=0;a<t.length;a++)h=f(a),nt=t[a].getPoints(),p=(h-c+.5)*(g||o)-(c-h-.5)*e,n.each(nt,function(n,t){t.correctCoordinates({width:o,offset:p})});else{n.each(t,function(n,t){l=t.getStackName&&t.getStackName(),l=l||n.toString(),v[l]||(v[l]=[]),v[l].push(t)}),n.each(t,function(t,i){n.each(i.getPoints(),function(n,t){var i=t.argument;w.hasOwnProperty(i)||(w[i]=1)})});for(k in w)w.hasOwnProperty(k)&&(b=[],n.each(v,function(t,i){n.each(i,function(n,i){return d=i.getPointByArg(k),d&&d.value?(b.push(t),!1):void 0})}),y=b.length,e=s(i*.7/y*.2),e<1&&(e=1),o=s((i*.7-e*(y-1))/y),o<2&&(o=2),c=y/2,n.each(v,function(t,i){(h=n.inArray(t,b),h!==-1)&&(p=(h-c+.5)*o-(c-h-.5)*e,n.each(i,function(n,t){var i=t.getPointByArg(k);i&&i.value&&i.correctCoordinates({width:o,offset:p})}))}))}},f=function(n){var t=this,i=t.series,e=t.equalBarWidth,f;t.translator=n,f=u(t),r(i,f,i.length,e,function(n){return n})},e=function(t){var i=this,o,f=i.series,e={},s=0,h=i.equalBarWidth;n.each(f,function(){var n=this.getStackName();e.hasOwnProperty(n)||(e[n]=s++)}),i.translator=t,o=u(i),r(f,o,s,h,function(n){return e[f[n].getStackName()]})},i=function(){var i=this,r=i.series,t={positive:{},negative:{}};n.each(r,function(i,r){var u=r.getPoints();n.each(u,function(n,i){var o=i.value,e=i.argument,s=r.getStackName?r.getStackName():"default",h=o>=0?"positive":"negative",f;t[h][s]=t[h][s]||{},f=t[h][s],f[e.valueOf()]?(u[n].correctValue(f[e.valueOf()]),f[e.valueOf()]+=o):f[e.valueOf()]=o})}),a(r,t,i.fullStacked)},a=function(t,i,r){n.each(t,function(t,u){var f=u.getPoints();n.each(f,function(n,t){var h=t.value,e=u.getStackName?u.getStackName():"default",o=h>=0?"positive":"negative",s;i[o][e]=i[o][e]||{},s=i[o][e],f[n].setPercentValue(s[t.argument.valueOf()],r)})})},o=function(n,t,i){var u=n.rotated,r=t.getCanvasVisibleArea();return i&&!u?Math.abs(t.untranslateY(r.minY)-t.untranslateY(r.minY+i)):i&&u?Math.abs(t.untranslateX(r.minX)-t.untranslateX(r.minX+i)):void 0},s=function(t){var i=this,u=i.series,r={positive:{},negative:{}};n.each(u,function(u,f){var e=f.getPoints(),s=f.styles&&f.styles.minBarSize;n.each(e,function(n,u){var v=u.value,p=u.minValue,y=u.argument,h,l,c,w=f.getStackName?f.getStackName():"default",b=v>=0?"positive":"negative",a;c=o(i,t,s),a=r[b][w]=r[b][w]||{},a[y.valueOf()]?(l=Math.abs(p-v),h=c&&l<c&&l!==0?c:v-p,e[n].minValue=a[y.valueOf()],e[n].value=a[y.valueOf()]+h,a[y.valueOf()]+=h):(l=v,h=c&&l<c&&l!==0?c:v,e[n].value=h,a[y.valueOf()]=h)})}),i.fullStacked&&v(u,r)},v=function(i,r){n.each(i,function(i,u){var e=u.getStackName?u.getStackName():"default",f=u.getPoints();n.each(f,function(n,i){var h=i.value,s=i.argument,u=h>=0?"positive":"negative",o;r[u][e]=r[u][e]||{},o=r[u][e],f[n].value=f[n].value/o[s.valueOf()]||0,t.utils.isNumber(f[n].minValue)&&(f[n].minValue=f[n].minValue/o[s.valueOf()]||0)})})},y=function(t){var i=this,r=i.series,u=i.rotated,f=t.getCanvasVisibleArea();n.each(r,function(r,u){var f=u.getPoints(),e=u.styles&&u.styles.minBarSize;n.each(f,function(n,r){var s=r.value,h,c,u;u=o(i,t,e),c=Math.abs(s),h=u&&c<u&&c!==0?s>0?u:-u:s,f[n].value=h})})},p=function(n){var t=this,i=t.series,f;t.translator=n,f=u(t),r(i,f,i.length,!0,function(n){return n})},u=function(n){return n.interval=n.rotated?n.translator.getIntervalY():n.translator.getIntervalX()},w=function(t){for(var l=this,f=l.series,e,h=2,i=Infinity,u=0,o,s=t.getCanvasVisibleArea(),c=Math.min(s.maxX-s.minX,s.maxY-s.minY),r=0;r<f.length;r++)e=f[r].getPoints(),n.each(e,function(n,t){u=u>t.size?u:t.size,i=i<t.size?i:t.size});for(i=i<0?0:i,r=0;r<f.length;r++)e=f[r].getPoints(),n.each(e,function(n,t){o=u===i?~~(c*.1):~~((1-(u-t.size)/(u-i))*c*.1),t.correctCoordinates(o<h?h:o)})};return{ctor:h,dispose:c,add:l}}())}(jQuery,DevExpress),function(n,t){var u=t.viz,f=u.core,r=u.charts,i=r.series;r.factory=function(){var n=function(n,t,r){r=r||{},r.specificType=null,n=(String(n)||"").toLowerCase();switch(n.toLowerCase()){case"line":return new i.LineSeries(t,r);case"fullstackedline":return r.specificType="fullstackedline",new i.LineSeries(t,r);case"stackedline":return r.specificType="stackedline",new i.LineSeries(t,r);case"area":return new i.AreaSeries(t,r);case"fullstackedarea":return r.specificType="fullstackedarea",new i.AreaSeries(t,r);case"stackedarea":return r.specificType="stackedarea",new i.AreaSeries(t,r);case"bar":return new i.BarSeries(t,r);case"fullstackedbar":return r.specificType="fullstackedbar",new i.BarSeries(t,r);case"stackedbar":return r.specificType="stackedbar",new i.BarSeries(t,r);case"spline":return new i.SplineSeries(t,r);case"splinearea":return new i.SplineAreaSeries(t,r);case"scatter":return new i.ScatterSeries(t,r);case"candlestick":return new i.CandleStickSeries(t,r);case"stock":return new i.StockSeries(t,r);case"rangearea":return new i.RangeAreaSeries(t,r);case"rangebar":return new i.RangeBarSeries(t,r);case"pie":return new i.PieSeries(t,r);case"doughnut":case"donut":return r.specificType="doughnut",new i.PieSeries(t,r);case"stepline":return new i.StepLineSeries(t,r);case"steparea":return new i.StepAreaSeries(t,r);case"bubble":return new i.BubbleSeries(t,r);default:return null}},t=function(n){return new i.SeriesFamily(n)},e=function(n,t){return new r.Axis(n,t)},o=function(n){return new u.renderers.Renderer(n)},s=function(n,t){return new r.ThemeManager(n,t)},h=function(n,t,i){return new r.Legend(n,t,i)},c=function(n,t){return new r.Tooltip(n,t)},l=function(n,t){return new r.LoadIndicator(n,t)},a=function(n,t,i,u){return new r.DataValidator(n,t,i,u)},v=function(n){return new r.Tracker(n)},y=function(n,t,i,u){return new r.ChartTitle(n,t,i,u)},p=function(){return new r.LayoutManager},w=function(){return f.tickProvider};return{createSeries:n,createSeriesFamily:t,createAxis:e,getAxisTickProvider:w,createRenderer:o,createThemeManager:s,createLegend:h,createTooltip:c,createLoadIndicator:l,createDataValidator:a,createTracker:v,createChartLayoutManager:p,createTitle:y}}()}(jQuery,DevExpress),DevExpress.MOD_VIZ_CORE=!0}if(!DevExpress.MOD_VIZ_CHARTS){if(!window.DevExpress)throw Error("Required module is not referenced: core");if(!DevExpress.MOD_VIZ_CORE)throw Error("Required module is not referenced: viz-core");(function(n,t){var f=10,e=Math,r=e.round,u=e.ceil;t.viz.charts.Legend=t.Class.inherit({ctor:function(n,t,i){this.legendGroup=t,this.trackerGroup=i,this._init(n)},update:function(n){this._init(n)},_disposeTrackers:function(){var t=this;n.each(t.trackers||[],function(n,t){t.removeData()}),t.trackers=null},dispose:function(){var n=this;n._disposeTrackers(),n.labelFormatObject=null,n.seriesGroups=null,n.insideLegendGroup=null,n.legendGroup=null,n.trackerGroup=null,n.renderer=null,n.series=null,n.options=null},_init:function(t){var i,r=[];this.renderer=t.renderer,t.renderer=null,typeof t.margin=="number"?(t.margin=t.margin>0?t.margin:f,t.margin={top:t.margin,bottom:t.margin,left:t.margin,right:t.margin}):(t.margin.top=t.margin.top>0?t.margin.top:f,t.margin.bottom=t.margin.bottom>0?t.margin.bottom:f,t.margin.left=t.margin.left>0?t.margin.left:f,t.margin.right=t.margin.right>0?t.margin.right:f),t.horizontalAlignment=(t.horizontalAlignment||"").toLowerCase(),t.horizontalAlignment!=="center"&&t.horizontalAlignment!=="right"&&t.horizontalAlignment!=="left"&&(t.horizontalAlignment="right"),t.verticalAlignment=(t.verticalAlignment||"").toLowerCase(),t.verticalAlignment!=="top"&&t.verticalAlignment!=="bottom"&&(t.horizontalAlignment==="center"&&(t.verticalAlignment="bottom"),(t.horizontalAlignment==="right"||t.horizontalAlignment==="left")&&(t.verticalAlignment="top")),t.orientation=(t.orientation||"").toLowerCase(),t.orientation!=="vertical"&&t.orientation!=="horizontal"&&(t.horizontalAlignment==="center"&&(t.orientation="horizontal"),(t.horizontalAlignment==="right"||t.horizontalAlignment==="left")&&(t.orientation="vertical")),t.itemTextPosition=t.itemTextPosition?t.itemTextPosition:t.orientation==="horizontal"?"bottom":"right",t.position=(t.position||"").toLowerCase(),t.position!=="outside"&&t.position!=="inside"&&(t.position="outside"),t.hoverMode=(t.hoverMode||"").toLowerCase(),t.customizeText=n.isFunction(t.customizeText)?t.customizeText:function(){return this.seriesName},this.series=n.map(t.series||[],function(n){return n.options.showInLegend?n:null}),t.series=null,this.options=t},formatLabel:function(n){return n.customizeText.call(this,this)},_clearLegendGroups:function(){this.legendGroup&&(this.legendGroup.clear(),this.trackerGroup.clear(),this.legendGroup.move(0,0),this.trackerGroup.move(0,0),this.clipRect&&this.legendGroup.applySettings({clipId:this.clipRect.id}))},_clearInsideLegendGroups:function(){this.insideLegendGroup&&(this.insideLegendGroup.detach(),this.insideLegendGroup.remove(),this.insideLegendGroup=this)},_createBackground:function(n){var t=this,i=t.options,r=i.position==="inside",u=i.backgroundColor,e=u||(r?i.containerBackgroundColor:"none"),f;return(r||u||n)&&(f=t.renderer.createRect(0,0,0,0,0,{fill:e,"class":"dxc-border"}).append(t.insideLegendGroup)),f},_adjustBackgroundSettings:function(n,t){var o=this,f=o.options,u=f.border,e=o.insideLegendGroup.getBBox(),i={x:r(e.x-f.paddingLeftRight),y:r(e.y-f.paddingTopBottom),width:r(e.width)+2*f.paddingLeftRight,height:r(e.height)+2*f.paddingTopBottom};t&&(i.strokeWidth=u.width,i.stroke=u.color,i.strokeOpacity=u.opacity,i.dashStyle=u.dashStyle,i.rx=u.cornerRadius||0,i.ry=u.cornerRadius||0),n.applySettings(i)},_createMarker:function(t,i){var u=this,p=u.options,s=p.markerSize,h=5,c=2,l,a,r,e,o,v,y,f;return f=u.renderer.createRect(0,0,s,s,0,{fill:t.styles.themeColor,"class":t.className}).append(i),t.markerPatterns?(t.markerPatterns.hoverPattern.append(),t.markerPatterns.selectedPattern.append(),t.markerPatterns.marker.dispose(),t.markerPatterns.marker=f):(r=t.styles.states||t.options.states,e=n.extend({},r.hover.hatching,{step:h,width:c}),l=r.hover.fill!=="none"&&e.direction!=="none",v=l?u.renderer.createPattern(r.hover.fill,e).append():{id:t.styles.themeColor,append:n.noop},o=n.extend({},r.selected.hatching,{step:h,width:c}),a=r.selected.fill!=="none"&&o.direction!=="none",y=a?u.renderer.createPattern(r.selected.fill,o).append():{id:t.styles.themeColor,append:n.noop},t.legend=u,t.markerPatterns={marker:f,hoverPattern:v,selectedPattern:y}),f},_createLabel:function(n,t){var i=this,r=i.options,u=r.itemTextPosition,o=u==="top"||u==="bottom"?"center":"left",f,e;return i.labelFormatObject={seriesName:n.name,seriesNumber:n.index,seriesColor:n.styles.themeColor},f=i.formatLabel.call(i.labelFormatObject,r),e=i.renderer.createText(f,0,0,{font:r.font,align:o}).append(t)},_locateLabelAndMarker:function(n,t){var c=this,o=7,l=4,a=2,f=0,e=0,s,h,u=n.getBBox(),i=t.getBBox();switch(c.options.itemTextPosition){case"left":e=r(i.y+i.height/2-(u.y+u.height/2)),s=u.width+o;break;case"right":f=i.x+i.width+o,e=r(i.y+i.height/2-(u.y+u.height/2));break;case"top":f=r(i.x+i.width/2-(u.x+u.width/2)),h=l;break;case"bottom":f=r(i.x+i.width/2-(u.x+u.width/2)),e=i.y+i.height+a-u.y}n.applySettings({x:f,y:e}),t.applySettings({x:s,y:h})},_getRowsColumns:function(n){var h=this,r=h.options,f=r.orientation==="horizontal",t=r.rowCount,e=u(n/t),i=r.columnCount,o=u(n/i),s;return i&&!t?t=o:!i&&t?i=e:i&&t?f&&i<e?i=e:!f&&t<o&&(t=o):(s=!0,f?(t=1,i=n):(i=1,t=n)),{rows:t,columns:i,autoEdit:s}},_locateRowsColumns:function(n,t,i,r){var f=this,c=f.options,v=c.itemTextPosition,s=f.canvas,l,y=f._getRowsColumns(i),e=y.rows,d=c.position==="inside",a=c.margin,p=r?c.paddingLeftRight:0,w=r?c.paddingTopBottom:0,b=s.width-s.right-s.left-a.left-a.right-2*p,k=s.height-s.top-s.bottom-a.top-a.bottom-2*w,o=y.columns,h,g;if(h=f.getDataRowsColumns(n,o,e),f.moveItems(h,n,f.insideLegendGroup,v,t),l=f.insideLegendGroup.getBBox(),y.autoEdit)if(e===1)while(l.width>b&&o>1)o=u(o/2),e=u(i/o),h=f.getDataRowsColumns(n,o,e),f.moveItems(h,n,f.insideLegendGroup,v,t),l=f.insideLegendGroup.getBBox();else if(o===1)while(l.height>k&&e>1)e=u(e/2),o=u(i/e),h=f.getDataRowsColumns(n,o,e),f.moveItems(h,n,f.insideLegendGroup,v,t),l=f.insideLegendGroup.getBBox()},draw:function(){var t=this,h=t.renderer,r=t.options,u=t.series||{},c=u.length,l=[],i,a,v,f,e,o=[],s=r.border,y=s.visible&&s.width&&s.color&&s.color!=="none",p=r.paddingLeftRight,w=r.paddingTopBottom;if(!(r.visible&&u&&c)){t._disposeTrackers();return}for(t.createClipRect(),t._clearLegendGroups(),t._clearInsideLegendGroups(),t.insideLegendGroup=h.createGroup().append(t.legendGroup),e=t._createBackground(y),i=0;i<c;i++)f=h.createGroup({"class":"dxc-item"}).append(t.insideLegendGroup),v=t._createMarker(u[i],f),a=t._createLabel(u[i],f),t._locateLabelAndMarker(a,v),o.push(h.createRect(0,0,0,0,0,{stroke:"none",fill:"grey",opacity:.0001,inh:!0})),l.push(f);t._locateRowsColumns(l,o,c,e),e&&(t._adjustBackgroundSettings(e,y),t.insideLegendGroup.move(p,w),n.each(o,function(n,t){t.move(p,w)})),t.seriesGroups=l,t.trackers=o,t.drawTrackers()},drawTrackers:function(){var t=this;t.trackerGroup.append(t.legendGroup),n.each(t.trackers||[],function(n,i){i.data({series:t.series[n],mode:t.options.hoverMode}),i.append(t.trackerGroup)})},applyNormalStyle:function(n){n.markerPatterns&&n.markerPatterns.marker.applySettings({fill:n.styles.themeColor})},applyHoverStyle:function(n){n.markerPatterns&&n.markerPatterns.marker.applySettings({fill:n.markerPatterns.hoverPattern.id})},applySelectionStyle:function(n){n.markerPatterns&&n.markerPatterns.marker.applySettings({fill:n.markerPatterns.selectedPattern.id})},getDataRowsColumns:function(n,t,i){for(var c=this,u,l=c.options,a=l.equalColumnWidth,v=c.series||{},e=[],s=0,h=0,o,f,r=0;r<t;r++)e[r]=0;for(r=0;r<i;r++)for(u=0;u<t;u++){if(o=i<t?n[r*t+u]:n[r+u*i],!o)break;f=o.getBBox(),h<f.height&&(h=f.height),a?s<f.width&&(s=f.width):e[u]<f.width&&(e[u]=f.width)}return{rows:i,cols:t,maxWidthPerColumn:e,maxWidthColumn:s,maxHeightRow:h}},moveItems:function(n,t,i,r,u){var d=this,y,l,w,b,a,v,f,e=0,o=0,s,k=d.options,h=k.columnItemSpacing,c=k.rowItemSpacing,tt=k.equalColumnWidth,it=d.renderer,g=[],nt=0,p=0;for(w=n.rows,b=n.cols,p=n.maxHeightRow,nt=n.maxWidthColumn,g=n.maxWidthPerColumn,y=0;y<w;y++){for(l=0;l<b;l++){if(a=w<b?y*b+l:y+l*w,v=t[a],!v)break;f=v.getBBox(),s=tt?nt:g[l],r==="right"?(v.move(e-f.x,o),u[a].applySettings({x:e-h/2,y:o+f.y-c/2,height:p+c,width:s+h})):r==="left"?(v.move(f.x+s-f.width+e-h/2,o),u[a].applySettings({x:f.x+s-f.width+e-h/2,y:o+f.y-c/2,height:p+c,width:s+h})):(v.move(e-f.x-f.width/2+s/2,o),u[a].applySettings({x:e-h/2,y:o+f.y-c/2,height:p+c,width:s+h})),e=e+s+h}o=o+p+c,e=0}},getBoundingRect:function(){return this.insideLegendGroup&&this.insideLegendGroup.getBBox()||{}},toForeground:function(){this.legendGroup&&this.legendGroup.toForeground()},createClipRect:function(){var t=this,n=t.canvas,i,r;n&&(i=n.height-n.top-n.bottom,r=n.width-n.left-n.right,i<0&&(i=0),r<0&&(r=0),t.clipRect?t.clipRect.updateRectangle({x:n.left,y:n.top,width:r,height:i}):t.clipRect=t.renderer.createClipRect(n.left,n.top,r,i).append())},updateClip:function(n){this.clipRect&&this.clipRect.updateRectangle({translateX:-n.translateX,translateY:-n.translateY}),this.legendGroup.update()},shift:function(n,t){var i={};n&&(i.translateX=n),t&&(i.translateY=t),this.legendGroup.applySettings(i),this.updateClip(i)}})})(jQuery,DevExpress),function(n,t){var r=t.utils.isDefined,f=function(n,t){return n.substr(n.length-t.length)===t},u=function(n,t){return n.indexOf(t)===0};t.viz.charts.ChartTitle=t.Class.inherit({ctor:function(n,t,i,r){var u=this;u._init(t,i),u.renderer=n,u.clipRect=u.createClipRect(),u.titleGroup=r,u.titleGroup&&u.clipRect&&u.titleGroup.applySettings({clipId:u.clipRect.id})},dispose:function(){var n=this;n.renderer=null,n.clipRect=null,n.title=null,n.innerTitleGroup=null,n.titleGroup=null,n.options=null,n.canvas=null},update:function(n,t){this._init(n,t)},_init:function(n,t){var i=this;t&&(i._parseAlignments(t),i.horizontalAlignment=t.horizontalAlignment,i.verticalAlignment=t.verticalAlignment,i.options=t),i.canvas=n||i.canvas},_parseAlignments:function(n){if(r(n.position)&&!(r(n.verticalAlignment)&&r(n.horizontalAlignment))){n.position=n.position.toLowerCase(),n.verticalAlignment=f(n.position,"top")?"top":"bottom",n.horizontalAlignment=u(n.position,"left")?"left":u(n.position,"center")&&"center"||"right";return}n.verticalAlignment=(n.verticalAlignment||"").toLowerCase(),n.horizontalAlignment=(n.horizontalAlignment||"").toLowerCase(),n.verticalAlignment!=="top"&&n.verticalAlignment!=="bottom"&&(n.verticalAlignment="top"),n.horizontalAlignment!=="left"&&n.horizontalAlignment!=="center"&&n.horizontalAlignment!=="right"&&(n.horizontalAlignment="center")},render:function(){var n=this,t=n.options,i=n.renderer,r;t.text&&(n.innerTitleGroup?n.innerTitleGroup.clear():n.innerTitleGroup=i.createGroup(),n.innerTitleGroup.append(n.titleGroup),r={font:t.font,align:n.horizontalAlignment,style:t.fontStyle},n.title=i.createText(t.text,n.canvas.left,n.canvas.top,r).append(n.innerTitleGroup),n.title.text=t.text,n.correctTitleLength())},correctTitleLength:function(){var n=this,t=n.canvas,i=n.title.text,r,u,f=t.width-t.right-t.left,e=n.getBoundingRect();f>e.width||i.indexOf("<br/>")!=-1||(u=i.length*f/e.width,r=i.substr(0,~~u-4)+"...",n.title.updateText(r),n.title.text=r)},getBoundingRect:function(){var t=this.options,n;return this.innerTitleGroup?(n=this.innerTitleGroup.getBBox(),r(t.placeholderSize)&&(n.height=t.placeholderSize),n):{width:0,height:0,x:0,y:0}},shift:function(n,t){this.innerTitleGroup.move(n,t)},createClipRect:function(){if(r(this.options.placeholderSize))return this.renderer.createClipRect(0,0,0,0)},setClipRectSettings:function(){var n=this.canvas,i=this.verticalAlignment,t=this.clipRect;t&&(t.append(),i==="top"?t.updateRectangle({x:0,y:0,width:n.width,height:n.top}):i==="bottom"&&t.updateRectangle({x:0,y:n.height-n.bottom,width:n.width,height:n.bottom}))}})}(jQuery,DevExpress),function(n,t,i){var r=t.utils,u=Math.abs,h=t.viz.core,y=h.ParseUtils,l=100,p=5,a=2,c=4,v="canvas_position_",f="canvas_position_bottom",e="canvas_position_top",o="canvas_position_left",s="canvas_position_right";t.viz.charts.Axis=t.Class.inherit(function(){var k=function(t,i){this.renderer=t,this.init(i),this._$axis=n(this)},d=function(){var t=this;t._axisElementsGroup&&t._axisElementsGroup.dispose(),n.each(t.labels||[],function(n,t){t.removeData()}),t._$axis=null,t.labels=null,t.title=null,t.stripLabels=null,t.stripRects=null,t.constantLineLabels=null,t.constantLines=null,t._axisStripGroup=null,t._axisConstantLineGroup=null,t._axisLineGroup=null,t._axisElementsGroup=null,t._axisGridGroup=null,t._axisGroup=null,t.axesContainerGroup=null,t.stripsGroup=null,t.constantLinesGroup=null,t._axisTitleGroup=null,t.renderer=null,t.translator=null,t.options=null,t.textOptions=null,t._tickValues=null,t._fullTickValues=null,t._fullTickPositions=null},g=function(n){var i=n.categories,t=n.label;n.hoverMode=n.hoverMode?n.hoverMode.toLowerCase():"none",this.hasLabelFormat=t.format!==""&&r.isDefined(t.format),this.options=n,this.staggered=t.staggered,t.minSpacing=r.isDefined(t.minSpacing)?t.minSpacing:p,ut(n),i&&(this.labelsNumber=i.length,this.ticksNumber=this.labelsNumber),n.range={min:n.min,max:n.max,categories:n.categories&&n.categories.slice(0)},this.pane=n.pane,this.textOptions={align:t.alignment,font:t.font,opacity:t.opacity,style:t.style},this.calcInterval=n.type==="logarithmic"?function(t,i){return r.getLog(t/i,n.logarithmBase)}:function(n,t){return n-t}},nt=function(n){var t,i,e=n.options,r=n.translator.getBusinessRange(),f;if(r&&r.getBoundRange&&!e.categories)for(i=n.getTickValues(),t=0;t<i.length-1;t++)f=u(i[t]-i[t+1]),e.isHorizontal?r.getBoundRange({intervalX:f}):r.getBoundRange({intervalY:f})},tt=function(n){this.translator=n,this.resetTicks(),nt(this)},it=function(){this._tickValues=this._tickPositions=this._fullTickValues=this._fullTickPositions=null},rt=function(n){var i=this,t=i.options;t.isHorizontal?(t.min=n.minVisibleX,t.max=n.maxVisibleX,t.categories=n.categoriesX,t.stubData=n.stubDataX):(t.min=n.minVisibleY,t.max=n.maxVisibleY,t.categories=n.categoriesY,t.stubData=n.stubDataY),this.resetTicks()},ut=function(n){var t=n.label,i="left",r="right",u="top",f="bottom";n.isHorizontal?n.position===f||n.position===u||(n.position=f):n.position===i||n.position===r||(n.position=i),n.position===r&&(t.indentFromAxis*=-1,t.userAlignment||(t.alignment=i)),n.position===u&&(t.indentFromAxis*=-1)},ft=function(n){var t=0;return n.delta&&(t=n.delta[n.options.position]||0),n.translator.translateX(v+n.options.position)+t},et=function(n){var t=0;return n.delta&&(t=n.delta[n.options.position]||0),n.translator.translateY(v+n.options.position)+t},ot=function(n,t){var i=n.translator,r=n.options,c=r,v={strokeWidth:c.width,stroke:c.color,strokeOpacity:c.opacity},a,l=n.axisPosition,u,h;c.visible&&(n.options.isHorizontal?(r.categories?(u=i.translateX(o),h=i.translateX(s)):(u=i.translateX(r.min),h=i.translateX(r.max)),a=n.renderer.createLine(u,l,h,l,v)):(r.categories?(u=i.translateY(e),h=i.translateY(f)):(u=i.translateY(r.min),h=i.translateY(r.max)),a=n.renderer.createLine(l,u,l,h,v)),a.append(t))},st=function(n,t,i){var r=this,u=r.renderer.createText(w(n,i),h.outOfScreen.x+r.translator.translateX(n),h.outOfScreen.y,r.textOptions).append(),f=r.renderer.createText(w(t,i),h.outOfScreen.x+r.translator.translateX(t),h.outOfScreen.y,r.textOptions).append(),e=u.getBBox(),s=f.getBBox(),o=Math.asin((e.height+i.minSpacing)/(s.x-e.x))*180/Math.PI;return u.remove(),f.remove(),isNaN(o)?90:Math.ceil(o)},ht=function(t,i){function h(n){switch(n){case"overlap":return"stagger";case"stagger":return"rotate";case"rotate":default:return"end"}}for(var r=this,f=!1,e=null,s=null,o=n.extend({},i),u="overlap";u!=="end";){f=r.options.tickProvider.isOverlappedTicks(t,o),f=e&&e!==90?!1:f,u=h(f?u:null);switch(u){case"stagger":o.screenDelta*=a,s=u;break;case"rotate":e=r._getOptimalRotationAngle(t[0],t[1],r.options.label),o.screenDelta=i.screenDelta,o.textOptions.rotate=e,s=u}}r.overlappingBehavior.isOverlapped=f,r.overlappingBehavior.mode=s,r.overlappingBehavior.rotationAngle=e},ct=function(t,i,h){var y=i.isHorizontal?[o,s]:[f,e],p=u(h.call(t.translator,y[1])-h.call(t.translator,y[0])),b=r.getSignificantDigitPosition(u(i.max-i.min)/p),l,c=i.min,a=i.max,k,v;return i.type==="logarithmic"&&(k=i.logarithmBase),r.isNumber(c)&&i.type!=="logarithmic"&&(c=r.roundValue(i.min,b),c<i.min&&(l=Math.pow(10,-b),c=r.applyPrecisionByMinDelta(c,l,c+l)),c>a&&(c=i.min)),v=t.options.stubData?function(){return""}:function(n){return w(n,i.label,{min:c,max:a})},{min:c,max:a,base:k,type:i.type,customTicks:n.isArray(i.categories)?i.categories:t._tickValues,useTicksAutoArrangement:!1,textOptions:t.textOptions,getText:v,renderer:t.renderer,textSpacing:t.options.label.minSpacing,translator:t.translator,tickInterval:t.options.stubData?null:i.tickInterval,screenDelta:p,gridSpacingFactor:i.axisDivisionFactor,isHorizontal:i.isHorizontal,setTicksAtUnitBeginning:i.setTicksAtUnitBeginning,incidentOccured:i.incidentOccured}},lt=function(){var i=this,o,f=i.options,s=f.isHorizontal?i.translator.translateX:i.translator.translateY,c=f.tickProvider,e=f.label,h=f.categories,u;return(u=ct(i,f,s),i._fullTickValues=i._tickValues=c.getTicks(u),(r.isDate(f.min)||r.isDate(h&&h[0]))&&!i.hasLabelFormat&&(f.label.format=t.formatHelper.getDateFormatByTicks(i._tickValues)),i.overlappingBehavior=e.overlappingBehavior?n.extend({},e.overlappingBehavior):null,i.overlappingBehavior&&(f.isHorizontal||i.overlappingBehavior.mode==="enlargeTickInterval"||(i.overlappingBehavior.mode="ignore"),u.useTicksAutoArrangement=i.overlappingBehavior.mode!=="ignore",i.overlappingBehavior.mode==="auto"&&(i.textOptions.rotate=0,i._applyOptimalOverlappingBehavior(i._fullTickValues,u),u.useTicksAutoArrangement=i.overlappingBehavior.isOverlapped),i.overlappingBehavior.mode==="rotate"?(i.textOptions.rotate=i.overlappingBehavior.rotationAngle,e.userAlignment||(i.textOptions.align="left")):e.userAlignment||(i.textOptions.align=e.alignment)),u.useTicksAutoArrangement&&(o=i._tickValues.length?s.call(i.translator,i._tickValues[i._tickValues.length-1])-s.call(i.translator,i._tickValues[0]):null,o?(u.screenDelta=Math.abs(o),u.ticksCount=i._tickValues.length-1):u.ticksCount=i._tickValues.length,i.overlappingBehavior&&i.overlappingBehavior.mode==="stagger"&&(u.screenDelta*=a),u.customTicks=i._tickValues,i._tickValues=c.getTicks(u)),i.options.stubData)?i._tickValues:(n.isArray(h)||(i._fullTickValues=i._tickValues),i._tickValues)},at=function(n){this.resetTicks(),this._fullTickValues=this._tickValues=n},vt=function(n){var f=n.options,t,r=[],u,i;for(u=f.isHorizontal?n.translator.translateX:n.translator.translateY,t=n.getTickValues(),(t.hideLabels||f.stubData)&&(r.hideLabels=!0),i=0;i<t.length;i++)r.push({text:t[i],pos:u.call(n.translator,t[i])});return r},yt=function(n,t){var i=n.options,f=n.translator,u,r;if(i.categories&&(i.discreteAxisDivisionMode!=="crossLabels"||!i.discreteAxisDivisionMode))for(i.isHorizontal?(u=f.getIntervalX()/2,i.valueMarginsEnabled||(t=t.slice(0,t.length-1))):(u=-f.getIntervalY()/2,i.valueMarginsEnabled||(t=t.slice(1,t.length))),r=0;r<t.length;r++)t[r].pos=t[r].pos+u;return t},b=function(n){var u=n.options,t=n._fullTickValues,r=[],f=u.isHorizontal?n.translator.translateX:n.translator.translateY,i;if(!n._fullTickPositions){for(t||(n.getTickValues(),t=n._fullTickValues||[]),i=0;i<t.length;i++)r.push({pos:f.call(n.translator,t[i])});n._fullTickPositions=yt(n,r)}return n._fullTickPositions},pt=function(n,t){var h=n.renderer,o=n.options,s=o.tick,l=o.categories,a=o.discreteAxisDivisionMode==="crossLabels"?0:.5,i,f=8,c={strokeWidth:1,stroke:s.color,strokeOpacity:s.opacity},v,e=n.axisPosition,y,p,r,u;if(s.visible)if(u=b(n),n.options.isHorizontal)for(i=0;i<u.length;i++)r=u[i],h.createLine(r.pos,e-f/2,r.pos,e+f/2,c).append(t);else for(i=0;i<u.length;i++)r=u[i],h.createLine(e-f/2,r.pos,e+f/2,r.pos,c).append(t)},w=function(n,i,r){var u={value:n,valueText:t.formatHelper.format(n,i.format,i.precision)||""};return r&&(u.min=r.min,u.max=r.max),i.customizeText?i.customizeText.call(u,u):u.valueText},wt=function(){var n=this.options.label;n.format||(n.format="percent",n.autoFormat=!0)},bt=function(){var n=this.options.label;n.autoFormat&&(delete n.format,delete n.autoFormat)},kt=function(n,t,i,r){return this.createText(n,i,t,r)},dt=function(n,t){var f,i=n.options,b=i.categories,c=n.renderer,l=n.axisPosition,h=i.label,a=h.indentFromAxis,u,e,o,v=[],y=i.isHorizontal?c.createText:kt,p=i.isHorizontal?l+a:l-a,s;if(h.visible){if(u=vt(n),u.length===0||u.hideLabels)return!0;for(f=0;f<u.length;f++)e=u[f],s=w(e.text,h,{min:i.min,max:i.max}),r.isDefined(s)&&s!==""&&(o=y.call(c,s,e.pos,p,n.textOptions),v.push(o),o.append(t),o.data({argument:e.text}));n.labels=v}},gt=function(){return this.options.multipleAxesSpacing||0},ni=function(n,t){var s,f=n.options,e=n.renderer,o=n.axisPosition,i=f.title,h=i.margin,r,u={font:i.font,opacity:i.opacity,align:"center","class":"dx-chart-axis-title"};i.text&&(f.isHorizontal?r=f.position==="bottom"?e.createText(i.text,n.translator.canvas.left+n.translator.width/2,o,u):e.createText(i.text,n.translator.canvas.left+n.translator.width/2,o,u):f.position==="left"?(u.rotate=270,r=e.createText(i.text,o,n.translator.canvas.top+n.translator.height/2,u)):(u.rotate=90,r=e.createText(i.text,o,n.translator.canvas.top+n.translator.height/2,u)),r.append(t),n.title=r)},ti=function(n,t,r){var nt=n.renderer,g=n.options,y=g.grid,it=g.categories,l=n.translator,rt=g.discreteAxisDivisionMode==="crossLabels"?0:.5,v,a,tt={strokeWidth:y.width,stroke:y.color,strokeOpacity:y.opacity},ut,ft=n.axisPosition,p,w,h,k,d,r=r||{visible:!1};if(y.visible)if(v=b(n),n.options.isHorizontal)for(p=l.translateY(f),w=l.translateY(e),k=r.visible&&r.left?l.translateX(o):i,d=r.visible&&r.right?l.translateX(s):i,a=0;a<v.length;a++)(h=v[a],u(h.pos-k)<c||u(h.pos-d)<c)||nt.createLine(h.pos,p,h.pos,w,tt).append(t);else for(p=l.translateX(o),w=l.translateX(s),k=r.visible&&r.top?l.translateY(e):i,d=r.visible&&r.bottom?l.translateY(f):i,a=0;a<v.length;a++)(h=v[a],u(h.pos-k)<c||u(h.pos-d)<c)||nt.createLine(p,h.pos,w,h.pos,tt).append(t)},ii=function(t,u){var nt=t.renderer,rt=t.options,tt=rt.constantLines,c=t.translator,a=t.options.isHorizontal,y,w=[],p=[],b,k,h,v=c.businessRange,d,ut=function(i){var e=a?function(n){return c.translateX(n)}:function(n){return c.translateY(n)},u=t.validateUnit(i,"Value of a constant line"),f=e(u),o=a?!!(v.minVisibleX||v.maxVisibleX):!!(v.minVisibleY||v.maxVisibleY),s=(a?v.categoriesX:v.categoriesY)||[];return!o&&n.inArray(i,s)===-1||!r.isDefined(f)?null:{value:f,parsedValue:u}};for(b=a?c.translateY(f):c.translateX(o),k=a?c.translateY(e):c.translateX(s),y=0;y<tt.length;y++)if(h=tt[y],h.value!==i){var g=ut(h.value),l=g&&g.value,it={stroke:h.color,strokeWidth:h.width,dashStyle:h.dashStyle};if(!l&&l!==0){w.push(null),h.label&&h.label.visible&&p.push(null);continue}d=a?nt.createLine(l,k,l,b,it):nt.createLine(b,l,k,l,it),d.append(u),w.push(d),h.label&&h.label.visible?p.push(ui(t,g.parsedValue,h.label,l,u)):p.push(null)}t.constantLines=w,t.constantLineLabels=p},ri=function(n,t){t.verticalAlignment=(t.verticalAlignment||"").toLowerCase(),t.horizontalAlignment=(t.horizontalAlignment||"").toLowerCase(),n.options.isHorizontal&&t.position==="outside"&&(t.verticalAlignment=t.verticalAlignment==="bottom"?"bottom":"top",t.horizontalAlignment="center"),n.options.isHorizontal&&t.position==="inside"&&(t.verticalAlignment=t.verticalAlignment==="center"?"center":t.verticalAlignment==="bottom"?"bottom":"top",t.horizontalAlignment=t.horizontalAlignment==="left"?"left":"right"),n.options.isHorizontal||t.position!=="outside"||(t.verticalAlignment="center",t.horizontalAlignment=t.horizontalAlignment==="left"?"left":"right"),n.options.isHorizontal||t.position!=="inside"||(t.verticalAlignment=t.verticalAlignment==="bottom"?"bottom":"top",t.horizontalAlignment=t.horizontalAlignment==="right"?"right":t.horizontalAlignment==="center"?"center":"left")},ui=function(t,i,u,f,e){var v=t.renderer,l=u.text,o=t.translator.canvas,s={align:"center",font:n.extend({},t.options.label.font,u.font)},a,h,c;if(ri(t,u),l=r.isDefined(l)?l:w(i,t.options.label),t.options.isHorizontal){h=f;switch(u.horizontalAlignment){case"left":s.align="right";break;case"right":s.align="left"}switch(u.verticalAlignment){case"bottom":c=o.height-o.bottom;break;case"center":c=(o.height-o.top-o.bottom)/2+o.top;break;case"top":c=o.top}}else{c=f;switch(u.horizontalAlignment){case"left":h=o.left,s.align=u.position==="inside"?"left":"right";break;case"center":h=(o.width-o.left-o.right)/2+o.left,s.align="center";break;case"right":h=o.width-o.right,s.align=u.position==="inside"?"right":"left"}}return a=v.createText(l,h,c,s),a.append(e),a},fi=function(n){var p=n.options,a=n.constantLines,c,v,s,y=n.translator.canvas,t,r,f,u,h,e,o=n.options.isHorizontal?{top:0,bottom:0}:{left:0,right:0},l=n.constantLineLabels;if(l!==i||a!==i){for(h=0;h<l.length;h++)if(f=u=0,t=p.constantLines[h],e=t.label,c=l[h],c!==null){if(v=a[h],r=c.getBBox(),s=v.getBBox(),n.options.isHorizontal)if(e.position==="inside"){switch(e.horizontalAlignment){case"left":f-=t.paddingLeftRight;break;default:f+=t.paddingLeftRight}switch(e.verticalAlignment){case"center":u+=s.y+s.height/2-r.y-r.height/2;break;case"bottom":u-=t.paddingTopBottom;break;default:u+=t.paddingTopBottom+r.height}}else switch(e.verticalAlignment){case"bottom":u+=r.height+t.paddingTopBottom-(r.y+r.height-y.height+y.bottom),o.bottom<r.height+t.paddingTopBottom&&(o.bottom=r.height+t.paddingTopBottom);break;default:u-=t.paddingTopBottom,o.top<t.paddingTopBottom+r.height&&(o.top=t.paddingTopBottom+r.height)}else if(e.position==="inside"){switch(e.horizontalAlignment){case"center":f+=s.x+s.width/2-r.x-r.width/2;break;case"right":f-=t.paddingLeftRight;break;default:f+=t.paddingLeftRight}switch(e.verticalAlignment){case"bottom":u+=s.y-r.y+t.paddingTopBottom;break;default:u-=t.paddingTopBottom}}else{u+=s.y+s.height/2-r.y-r.height/2;switch(e.horizontalAlignment){case"right":f+=t.paddingLeftRight,o.right<t.paddingLeftRight+r.width&&(o.right=t.paddingLeftRight+r.width);break;default:f-=t.paddingLeftRight,o.left<t.paddingLeftRight+r.width&&(o.left=t.paddingLeftRight+r.width)}}c.move(f,u)}n.padding=o}},ei=function(t,u){var d=t.renderer,g=t.options,nt=g.strips,a=t.translator,v,y=[],b=[],k,l=t.options.isHorizontal,c,p,w,h,tt;if(!g.stubData){for(tt=function(i,u,h){var w=l?!!(h.minVisibleX||h.maxVisibleX):!!(h.minVisibleY||h.maxVisibleY),b=(l?h.categoriesX:h.categoriesY)||[],c=l?function(n){return a.translateX(n)}:function(n){return a.translateY(n)},d=l?!!h.invertX:h.invertY,v=l?[o,s]:[f,e],g,y=c(t.validateUnit(i,"Start value of a strip")),p=c(t.validateUnit(u,"End value of a strip")),k=l?h.minVisibleX:h.maxVisibleY,nt=l?h.maxVisibleX:h.maxVisibleY;return(d&&v.reverse(),!w&&(n.inArray(i,b)===-1||n.inArray(u,b)===-1))?{stripFrom:0,stripTo:0}:(!r.isDefined(y)&&w&&(y=i<k?c(v[0]):c(v[1])),!r.isDefined(p)&&w&&(p=u<k?c(v[0]):c(v[1])),y<p?{stripFrom:y,stripTo:p}:{stripFrom:p,stripTo:y})},p=l?a.translateY(f):a.translateX(o),w=l?a.translateY(e):a.translateX(s),v=0;v<nt.length;v++)if(c=nt[v],c.startValue!==i&&c.endValue!==i&&c.color!==i){if(h=tt(c.startValue,c.endValue,a.businessRange),h.stripTo-h.stripFrom==0||!h.stripTo&&h.stripTo!==0||!h.stripFrom&&h.stripFrom!==0){b.push(null),c.label&&c.label.text&&y.push(null);continue}k=l?d.createRect(h.stripFrom,w,h.stripTo-h.stripFrom,p-w,0,{fill:c.color}):d.createRect(p,h.stripFrom,w-p,h.stripTo-h.stripFrom,0,{fill:c.color}),k.append(u),b.push(k),c.label&&c.label.text?y.push(oi(t,c.label,h.stripFrom,h.stripTo,u)):y.push(null)}t.stripLabels=y,t.stripRects=b}},oi=function(t,i,r,u,f){var l=t.renderer,a=i.text,e=t.translator.canvas,o={align:t.options.isHorizontal?"center":"left",font:n.extend({},t.options.label.font,i.font)},c,s,h;return t.options.isHorizontal?(i.horizontalAlignment==="center"?(s=r+(u-r)/2,o.align="center"):i.horizontalAlignment==="left"?(s=r,o.align="left"):i.horizontalAlignment==="right"&&(s=u,o.align="right"),i.verticalAlignment==="top"?h=e.top:i.verticalAlignment==="center"?h=(e.height-e.top-e.bottom)/2+e.top:i.verticalAlignment==="bottom"&&(h=e.height-e.bottom)):(i.horizontalAlignment==="center"?(s=(e.width-e.left-e.right)/2+e.left,o.align="center"):i.horizontalAlignment==="left"?(s=e.left,o.align="left"):i.horizontalAlignment==="right"&&(s=e.width-e.right,o.align="right"),i.verticalAlignment==="top"?h=r:i.verticalAlignment==="center"?h=u+(r-u)/2:i.verticalAlignment==="bottom"&&(h=u)),c=l.createText(a,s,h,o),c.append(f),c},si=function(n){n.axisPosition=n.options.isHorizontal?et(n):ft(n)},hi=function(n){var u=n.options,f=n.labels,a=u.label,r,o,c,l,i,s,e=n.padding&&n.padding[u.position]||0,h=n._axisElementsGroup&&n._axisElementsGroup.getBBox()||{},t;if(u.label.visible&&f&&f.length){for(i=0;i<f.length;i++)r=f[i],t=r.getBBox(),u.isHorizontal&&u.position==="bottom"?r.applySettings({y:2*r.settings.y-t.y+e}):u.isHorizontal?u.isHorizontal&&u.position==="top"&&r.applySettings({y:2*r.settings.y-t.y-t.height-e}):(s=u.position==="left"?n.textOptions.align==="right"?t.x+t.width-e:n.textOptions.align==="center"?t.x+t.width/2-e-(h.width/2||0):t.x-e-(h.width||0):n.textOptions.align==="center"?t.x+t.width/2+(h.width/2||0)+e:n.textOptions.align==="right"?t.x+t.width+(h.width||0)+e:t.x+e,r.applySettings({x:s,y:r.settings.y+~~(r.settings.y-t.y-t.height/2)}));if(c=u.isHorizontal&&n.overlappingBehavior&&n.overlappingBehavior.mode==="stagger",c){for(o=0,i=0;i<f.length;i=i+2)r=f[i],t=r.getBBox(),t.height>o&&(o=t.height);for(l=n.overlappingBehavior.staggeringSpacing,o=Math.round(o)+l,i=1;i<f.length;i=i+2)r=f[i],u.position==="bottom"?r.move(0,o):u.position==="top"&&r.move(0,-o);for(i=0;i<f.length;i++)f[i].rotate(0)}}},ci=function(n){var v=n.options,t,c=n.stripLabels,l=n.stripRects,a,e,r,o,s,u,h,f;if(c!==i||l!==i)for(r=0;r<c.length;r++)h=f=0,u=v.strips[r],t=u.label,e=c[r],e!==null&&(a=l[r],o=e.getBBox(),s=a.getBBox(),t.horizontalAlignment==="left"?h+=u.paddingLeftRight:t.horizontalAlignment==="right"&&(h-=u.paddingLeftRight),t.verticalAlignment==="top"?f+=s.y-o.y+u.paddingTopBottom:t.verticalAlignment==="center"?f+=s.y+s.height/2-o.y-o.height/2:t.verticalAlignment==="bottom"&&(f-=u.paddingTopBottom),e.move(h,f))},li=function(n,t){var f=n.options,e=f.title.margin,r,o,u=n.title;u&&(o=u.getBBox(),r=t.getBBox(),f.isHorizontal?f.position==="bottom"?u.applySettings({y:r.isEmpty?i:r.y+r.height,translateY:e+o.height}):u.applySettings({y:r.isEmpty?i:r.y,translateY:-e}):f.position==="left"?u.applySettings({x:r.isEmpty?i:r.x,translateX:-e}):u.applySettings({x:r.isEmpty?i:r.x+r.width,translateX:e}))},ai=function(n){var t=this,i=t.options.isHorizontal?"dxc-h-axis":"dxc-v-axis",r=t.options.isHorizontal?"dxc-h-strips":"dxc-v-strips",u=t.options.isHorizontal?"dxc-h-constant-lines":"dxc-v-constant-lines",f=t.clipRectID;n=n||{},t._axisGroup?(t._axisGroup.detach(),t._axisStripGroup.detach(),t._axisConstantLineGroup.detach(),t._axisTitleGroup.clear(),t._axisGridGroup.clear(),t._axisElementsGroup.clear(),t._axisLineGroup.clear(),t._axisStripGroup.clear(),t._axisConstantLineGroup.clear()):(t._axisGroup=t.renderer.createGroup({"class":i,clipId:f}),t._axisStripGroup=t.renderer.createGroup({"class":r}),t._axisGridGroup=t.renderer.createGroup({"class":"dxc-grid"}).append(t._axisGroup),t._axisElementsGroup=t.renderer.createGroup({"class":"dxc-elements"}).append(t._axisGroup),t._axisLineGroup=t.renderer.createGroup({"class":"dxc-line"}).append(t._axisGroup),t._axisTitleGroup=t.renderer.createGroup({"class":"dxc-title"}).append(t._axisGroup),t._axisConstantLineGroup=t.renderer.createGroup({"class":u})),si(t),t._virtual||(ot(t,t._axisLineGroup),pt(t,t._axisLineGroup),dt(t,t._axisElementsGroup),t.options.title.text&&ni(t,t._axisTitleGroup)),t.options.strips&&ei(t,t._axisStripGroup),t.options.constantLines&&ii(t,t._axisConstantLineGroup),ti(t,t._axisGridGroup,n.borderOptions),t._axisStripGroup.append(t.stripsGroup),t._axisConstantLineGroup.append(t.constantLinesGroup),t._axisGroup.append(t.axesContainerGroup),fi(t),hi(t),ci(t),li(t,t._axisElementsGroup)},vi=function(){var n=this,t=n._axisElementsGroup.getBBox(),o=n._axisLineGroup.getBBox(),s=n.options.placeholderSize,u,e=n.options.isHorizontal,i=e&&"y"||"x",f=e&&"height"||"width",h=n.options.position===(e&&"bottom"||"right"),r=n.title&&n._axisTitleGroup.getBBox()||t;return t.isEmpty&&r.isEmpty?t:(u=o[i]||n.axisPosition,h?(t[f]=s||r[i]+r[f]-u,t[i]=u):(t[f]=s||o[f]+u-r[i],t[i]=r[i]),t)},yi=function(n,t){var i={};n&&(i.translateX=n),t&&(i.translateY=t),this._axisGroup.applySettings(i)},pi=function(n){this._axisStripGroup.applySettings({clipId:n}),this._axisConstantLineGroup.applySettings({clipId:n})},wi=function(n,t){var i=this.options,u=new y,r=n?this.options.argumentType:this.options.valueType,f=r?u.getParser(r,"axis"):function(n){return n};this.parser=f,this.incidentOccured=t,this.options.axisType=r,this._errorMessages={unsupportedFieldMessage:function(n){return"The "+n+" field contains data of an unsupported axis type."},numericParsingMessage:function(n){return"The "+n+" cannot be parsed to the numeric axis type."},dateParsingMessage:function(n){return"The "+n+" cannot be parsed to the date axis type."}},i.min&&(i.min=this.validateUnit(i.min,"Value of the 'min' option")),i.max&&(i.max=this.validateUnit(i.max,"Value of the 'max' option")),i.range.min&&(i.range.min=this.validateUnit(i.range.min)),i.range.max&&(i.range.max=this.validateUnit(i.range.max))},bi=function(n,t){var r=this.options.axisType;return n=this.parser(n),n===i&&t&&(r==="datetime"&&this.incidentOccured(this._errorMessages.dateParsingMessage(t)),r==="numeric"&&this.incidentOccured(this._errorMessages.numericParsingMessage(t)),r!=="numeric"&&r!=="datetime"&&this.incidentOccured(this._errorMessages.unsupportedFieldMessage(t))),n},ki=function(){var n=this.options,t={},i,u,f=function(i,u){n.valueMarginsEnabled?r.isDefined(n[i])&&(t[i+u]=n[i],t[i+u+"Priority"]=l):(t[i+u]=0,t[i+u+"Priority"]=l)};return r.isDefined(n.range.min)&&r.isDefined(n.range.max)?(i=n.range.min<n.range.max?n.range.min:n.range.max,u=n.range.max>n.range.min?n.range.max:n.range.min):(i=n.range.min,u=n.range.max),n.isHorizontal?(t.minX=i,t.maxX=u,t.minVisibleX=n.range.min,t.maxVisibleX=n.range.max,f("minValueMargin","X"),f("maxValueMargin","X"),t.invertX=n.inverted,t.stickX=!n.valueMarginsEnabled,t.categoriesX=n.range.categories,t.axisTypeX=n.type,t.axisTypeX==="logarithmic"&&(t.baseX=n.logarithmBase)):(t.minY=i,t.maxY=u,t.minVisibleY=n.range.min,t.maxVisibleY=n.range.max,t.invertY=n.inverted||n.type==="discrete"&&n.oppositeDirectionYAxis,t.stickY=!n.valueMarginsEnabled,f("minValueMargin","Y"),f("maxValueMargin","Y"),t.categoriesY=n.range.categories,t.axisTypeY=n.type,t.axisTypeY==="logarithmic"&&(t.baseY=n.logarithmBase)),t},di=function(n,t,i){return this._$axis&&this._$axis.on(n,t,i),this},gi=function(n){return this._$axis&&this._$axis.off(n),this};return{_getOptimalRotationAngle:st,_applyOptimalOverlappingBehavior:ht,ctor:k,dispose:d,init:g,resetTicks:it,setTranslator:tt,getTickValues:lt,setTickValues:at,getRangeData:ki,getMultipleAxesSpacing:gt,setRange:rt,setPercentLabelFormat:wt,resetAutoLabelFormat:bt,draw:ai,getBoundingRect:vi,shift:yi,on:di,off:gi,validate:wi,applyClipRect:pi,validateUnit:bi}}())}(jQuery,DevExpress),function(n,t,i){var f=t.ui,u=t.viz.charts,r=t.utils,s=t.data.utils,c=100,h={animate:!1,isResize:!0},e=["processAxesOption","reinit","_reinitDataSource","_handleDataSourceChanged","force_render"],o=t.viz.core;u.BaseChart=f.Component.inherit({_defaultOptions:function(){return{done:n.noop,drawn:n.noop,redrawOnResize:!0,incidentOccured:n.noop,margin:{left:0,top:0,right:0,bottom:0},size:{width:i,height:i},title:{text:null},legend:{hoverMode:"includePoints"},animation:{enabled:!0,duration:1e3,easing:"easeOutCubic",maxPointCountSupported:300,asyncSeriesRendering:!0,asyncTrackersRendering:!0,trackerRenderingDelay:1200},seriesSelectionMode:"single",pointSelectionMode:"single",seriesClick:null,pointClick:null,legendClick:null,argumentAxisClick:null,seriesHover:null,pointHover:null,seriesSelected:null,pointSelected:null,seriesSelectionChanged:null,pointSelectionChanged:null,seriesHoverChanged:null,pointHoverChanged:null}},_init:function(){var n=this;n._checkAndSaveCanvasSize(),n._initRenderer(),n._createHtmlStructure(),n._needHandleRenderComplete=!0,n.layoutManager=u.factory.createChartLayoutManager(),n._reinit(),n._element().css({webkitUserSelect:"none"});n._element().on("contextmenu",function(n){(f.events.isTouchEvent(n)||f.events.isPointerEvent(n))&&n.preventDefault()});n._element().on("MSHoldVisual",function(n){n.preventDefault()})},_reinit:function(){var t=this;t.layoutManager.update(t),t.option("redrawOnResize")&&window?t._resizeHandlerCallback||(t._resizeHandlerCallback=t._resizeHandler(),r.windowResizeCallbacks.add(t._resizeHandlerCallback)):(r.windowResizeCallbacks.remove(t._resizeHandlerCallback),delete t._resizeHandlerCallback),n.isFunction(t.option("incidentOccured"))||t.option("incidentOccured",n.noop),t._createTracker(),t._reinitDataSource()},_createHtmlStructure:function(){var n=this,t=n.renderer;n._panesBackgroundGroup=t.createGroup({"class":"dxc-background"}),n._titleGroup=t.createGroup({"class":"dxc-title"}),n._legendGroup=t.createGroup({"class":"dxc-legend"}),n._stripsGroup=t.createGroup({"class":"dxc-strips-group"}),n._constantLinesGroup=t.createGroup({"class":"dxc-constant-lines-group"}),n._axesGroup=t.createGroup({"class":"dxc-axes-group"}),n._panesBorderGroup=t.createGroup({"class":"dxc-border"}),n._seriesGroup=t.createGroup({"class":"dxc-series-group"}),n._labelsGroup=t.createGroup({"class":"dxc-labels-group"}),n._tooltipGroup=t.createGroup({"class":"dxc-tooltip"}),n._trackerGroup=t.createGroup({"class":"dxc-trackers",opacity:.0001}),n._crosshairTrackerGroup=t.createGroup({"class":"dxc-crosshair-trackers",stroke:"none",fill:"grey"}).append(n._trackerGroup),n._seriesTrackerGroup=t.createGroup({"class":"dxc-series-trackers"}).append(n._trackerGroup),n._markerTrackerGroup=t.createGroup({"class":"dxc-markers-trackers",stroke:"none",fill:"grey"}).append(n._trackerGroup),n._legendTrackerGroup=t.createGroup({"class":"dxc-legend-trackers",stroke:"none",fill:"grey",opacity:.0001}).append(n._legendGroup),n._crossHairCursorGroup=t.createGroup({"class":"dxc-crosshair-cursor"})},_cleanHtmlStructure:function(){var n=this;n._panesBackgroundGroup&&n._panesBackgroundGroup.clear(),n._titleGroup&&n._titleGroup.clear(),n._legendGroup&&(n._legendGroup.detach(),n._legendTrackerGroup.clear(),n._legendGroup.clear()),n._stripsGroup&&(n._stripsGroup.detach(),n._stripsGroup.clear()),n._constantLinesGroup&&(n._constantLinesGroup.detach(),n._constantLinesGroup.clear()),n._axesGroup&&(n._axesGroup.detach(),n._axesGroup.clear()),n._seriesGroup&&(n._seriesGroup.detach(),n._seriesGroup.clear()),n._labelsGroup&&(n._labelsGroup.detach(),n._labelsGroup.clear()),n._trackerGroup&&(n._trackerGroup.detach(),n._seriesTrackerGroup.clear(),n._markerTrackerGroup.clear(),n._crosshairTrackerGroup.clear()),n._panesBorderGroup&&n._panesBorderGroup.clear(),n._tooltipGroup&&n._tooltipGroup.clear(),n._crossHairCursorGroup&&(n._crossHairCursorGroup.clear(),n._crossHairCursorGroup.detach())},_disposeObjectsInArray:function(t){n.each(this[t]||[],function(n,t){t&&t.dispose()}),this[t]=null},_dispose:function(){var t=this,n=function(n){t[n]&&t[n].dispose(),t[n]=null},i=function(n){t[n]&&t[n].detach()},u=this._disposeObjectsInArray;clearTimeout(t.delayedRedraw),t._resizeHandlerCallback&&(t._resizeHandlerCallback.stop(),r.windowResizeCallbacks.remove(t._resizeHandlerCallback),t._resizeHandlerCallback=null),t.callBase(),u.call(t,"businessRanges"),u.call(t,"translators"),u.call(t,"series"),n("layoutManager"),n("themeManager"),n("renderer"),n("tracker"),n("tooltip"),n("chartTitle"),t.paneAxis=null,t._userOptions=null,t.dirtyCanvas=null,t.canvas=null,i("_legendGroup"),i("_stripsGroup"),i("_constantLinesGroup"),i("_axesGroup"),i("_seriesGroup"),i("_labelsGroup"),i("_trackerGroup"),i("_crossHairCursorGroup"),n("canvasClipRect"),n("_panesBackgroundGroup"),n("_titleGroup"),n("_legendGroup"),n("_stripsGroup"),n("_constantLinesGroup"),n("_axesGroup"),n("_panesBorderGroup"),n("_seriesGroup"),n("_labelsGroup"),n("_tooltipGroup"),n("_crossHairCursorGroup"),n("_seriesTrackerGroup"),n("_markerTrackerGroup"),n("_legendTrackerGroup"),n("_crosshairTrackerGroup"),n("_trackerGroup"),t._disposeLoadIndicator()},_clean:function(){this.renderer&&this.renderer.stopAllAnimations(),this._cleanHtmlStructure(),this.callBase(),this._saveDirtyCanvas()},_initRenderer:function(){if(!this.renderer){var t=this,n=t.option("animation");n=n===!0?t._defaultOptions().animation:n,t.renderer=u.factory.createRenderer({animation:n,cssClass:"dxc dxc-chart"})}},_initSeries:function(){this.series=this.series||this._populateSeries()},_reinitDataSource:function(){this._refreshDataSource()},_initOptions:function(n){this._optionsInitializing=!0;var t=this,i=t._processTitleOption(n.title,t.option("title"));i&&(n.title=i),t._userOptions=n,t._processAxesOption(n),t._createThemeManager(n),t.option(t.themeManager.applyChartTheme(n)),delete t._userOptions.userCommonAxisSettings},_processTitleOption:function(n,t){if(r.isString(n)){var i=n;return n=t,n.text=i,n}},_processAxesOption:function(t){var e=n.isArray(t.argumentAxis)?t.argumentAxis:[t.argumentAxis],o=n.isArray(t.valueAxis)?t.valueAxis:[t.valueAxis],u=t.incidentOccured,f=function(t){for(var f,o,e=0,e=0;e<t.length;e++)(f=t[e],f)&&(f.title&&r.isString(f.title)&&(o=f.title,f.title={},f.title.text=o),(f.type==="logarithmic"&&f.logarithmBase<=0||f.logarithmBase&&!n.isNumeric(f.logarithmBase))&&(f.logarithmBase=i,u&&u.call&&u('The value passed to the "logarithmBase" option is not valid. The default value will be used.')),f.label&&(f.label.alignment&&(f.label.userAlignment=!0),f.label.overlappingBehavior||(f.label.staggered&&(f.label.overlappingBehavior={mode:"stagger",staggeringSpacing:f.label.staggeringSpacing}),f.label.rotationAngle&&(f.label.overlappingBehavior={mode:"rotate",rotationAngle:f.label.rotationAngle})),r.isString(f.label.overlappingBehavior)&&(f.label.overlappingBehavior={mode:f.label.overlappingBehavior}),f.label.overlappingBehavior&&f.label.overlappingBehavior.mode||(f.label.overlappingBehavior=f.label.overlappingBehavior||{})))};t.userCommonAxisSettings=this._userOptions.commonAxisSettings,f([t.commonAxisSettings]),f(e),f(o)},_checkAndSaveCanvasSize:function(){var n=this.option("size"),t=!1;return r.isDefined(n.width)&&(n.width<0?n.width=n.userWidth:(n.userWidth=n.width,t=!0)),r.isDefined(n.height)&&(n.height<0?n.height=n.userHeight:(n.userHeight=n.height,t=!0)),t},_saveDirtyCanvas:function(){this.dirtyCanvas=this._calculateCanvas()},_resizeHandler:function(){var n=this;return r.createResizeHandler(function(){n._render(h)})},_createThemeManager:function(n){n=n||{};var t=this;t.themeManager&&t.themeManager.dispose(),t.themeManager=u.factory.createThemeManager({theme:n.theme,palette:n.palette})},_calculateCanvas:function(){var t=this.option("size"),i=this._element();return r.isDefined(t.userWidth)||(t.width=i.width(),t.width||(t.width=400)),r.isDefined(t.userHeight)||(t.height=i.height(),t.height||(t.height=400)),n.extend({},t,this.option("margin"))},_createTracker:function(){var n=this,t=n.option("rotated"),i=n.option("tooltip")||{};n.tracker&&n.tracker.dispose(),n.tracker=u.factory.createTracker({series:n.series,valueAxis:t?n.horizontalAxes:n.verticalAxes,argumentAxis:t?n.verticalAxes:n.horizontalAxes,seriesSelectionMode:n.option("seriesSelectionMode"),pointSelectionMode:n.option("pointSelectionMode"),tooltipShown:n.option("tooltipShown"),tooltipHidden:n.option("tooltipHidden"),markerTrackerGroup:n._markerTrackerGroup,crossHairOptions:n._crossHairOptions,seriesTrackerGroup:n._seriesTrackerGroup,legendGroup:n._legendTrackerGroup,seriesGroup:n._seriesGroup,tooltipEnabled:i.enabled,renderer:n.renderer,events:{seriesClick:n.option("seriesClick"),pointClick:n.option("pointClick"),argumentAxisClick:n.option("argumentAxisClick"),seriesHover:n.option("seriesHover"),seriesSelected:n.option("seriesSelected"),pointHover:n.option("pointHover"),pointSelected:n.option("pointSelected"),legendClick:n.option("legendClick"),seriesSelectionChanged:n.option("seriesSelectionChanged"),pointSelectionChanged:n.option("pointSelectionChanged"),seriesHoverChanged:n.option("seriesHoverChanged"),pointHoverChanged:n.option("pointHoverChanged")}})},_updateTracker:function(){var n=this,t=n.option("rotated");n.tracker?n.tracker._reinit({series:n.series,valueAxis:t?n.horizontalAxes:n.verticalAxes,argumentAxis:t?n.verticalAxes:n.horizontalAxes}):n._createTracker()},_render:function(n){this._optionsInitializing=!1;var t=this,u=t.renderer,e=t.translators,r=t.canvas,s=this._element(),o=t._calculateCanvas(),f=t.dirtyCanvas;if(n=n||{recreateCanvas:!0},n.recreateCanvas=n.recreateCanvas||!u.isInitialized(),!n.force&&f&&f.width===o.width&&f.height===o.height&&!t.hiddenContainer){t.stopRedraw=!0;return}if(clearTimeout(t.delayedRedraw),n.recreateCanvas&&(r=t._calculateCanvas()),r.width&&r.height&&s.is(":visible"))t.hiddenContainer=!1;else{t.option("incidentOccured")("Chart cannot be drawn because its container is invisible."),t.hiddenContainer=!0,t.stopRedraw=!0,u.killContainer();return}n.recreateCanvas&&(t.canvas=r,u.recreateCanvas(t.canvas.width,t.canvas.height),u.draw(t._element()[0]),t._reappendLoadIndicator(),t._updateLoadIndicator(i,r.width,r.height),t._createCanvasClipRect(),e&&(e.length=0)),t.layoutManager.update(t),t._cleanGroups(n),t._saveDirtyCanvas()},_cleanGroups:function(n){var t=this;t._stripsGroup.detach(),t._constantLinesGroup.detach(),t._axesGroup.detach(),t._seriesGroup.detach(),t._labelsGroup.detach(),t._trackerGroup.detach(),t._tooltipGroup.detach(),t._crossHairCursorGroup.detach(),(!n||n.drawLegend)&&(t._legendGroup.detach(),t._legendGroup.clear()),t._stripsGroup.clear(),t._constantLinesGroup.clear(),t._axesGroup.clear(),t._seriesGroup.clear(),t._labelsGroup.clear(),t._tooltipGroup.clear(),t._crossHairCursorGroup.clear(),t._seriesTrackerGroup.clear(),t._markerTrackerGroup.clear(),t._legendTrackerGroup.clear(),t._crosshairTrackerGroup.clear()},_drawTitle:function(){var n=this;n.chartTitle?n.chartTitle.update(n.canvas,n.option("title")):n.chartTitle=u.factory.createTitle(n.renderer,n.canvas,n.option("title"),n._titleGroup),n.chartTitle.render()},_createTooltip:function(){var t=this,f=n.extend(!0,{renderer:t.renderer,canvasWidth:t.canvas.width,canvasHeight:t.canvas.height},t.option("tooltip")||{}),e,o=this.tracker.pointAtShownTooltip;!n.isFunction(f.customizeText)&&r.isDefined(f.customizeText)&&(t.option("incidentOccured").call(null,'The "customizeText" option cannot be applied because it is not a function.'),f.customizeText=i),t.tooltip?t.tooltip.update(f):t.tooltip=u.factory.createTooltip(f,t._tooltipGroup),t.tooltip.draw(),t.tracker.tooltip=t.tooltip,o&&(e=o.getTooltipCoords(),t.tooltip.move(~~e.x,~~e.y,e.offset,t.tooltip.tooltipText,t.tooltip.fillColor,t.tooltip.className),t.tooltip.show())},_prepareDrawOptions:function(t){var i=this.option("animation"),u;return i=i===!0?this._defaultOptions().animation:i,u=n.extend({},{force:!1,adjustAxes:!0,drawLegend:!0,drawTitle:!0,adjustSeriesLabels:!0,animate:i.enabled,animationPointsLimit:i.maxPointCountSupported,asyncSeriesRendering:i.asyncSeriesRendering,asyncTrackersRendering:i.asyncTrackersRendering,trackerRenderingDelay:i.trackerRenderingDelay},t),r.isDefined(u.recreateCanvas)||(u.recreateCanvas=!(!u.adjustAxes||!u.drawLegend||!u.drawTitle)),u},_processRefreshData:function(t){var i=n.inArray(this._currentRefreshData,e),r=n.inArray(t,e);(!this._currentRefreshData||i>=0&&r<i)&&(this._currentRefreshData=t)},_disposeSeries:function(){var t=this;t.tracker._clean(),n.each(t.series||[],function(n,t){t.dispose()}),t.series=null,n.each(t.seriesFamilies||[],function(n,t){t.dispose()}),t.seriesFamilies=null},_optionChanged:function(n,t,i){var r=this,u;if(r._optionsInitializing||(r._optionValuesEqual(n,r._userOptions[n],t),s.compileSetter(n)(r._userOptions,t,{functionsAsIs:!0,merge:!0})),n==="animation"){r.renderer.updateAnimationOptions(t);return}clearTimeout(r.delayedRedraw);switch(n){case"dataSource":r._needHandleRenderComplete=!0,r._processRefreshData("_reinitDataSource");break;case"palette":r.themeManager.updatePalette(t),r._disposeSeries(),r._needHandleRenderComplete=!0,r._processRefreshData("_handleDataSourceChanged");break;case"series":case"commonSeriesSettings":case"containerBackgroundColor":case"dataPrepareSettings":r._disposeSeries(),r._needHandleRenderComplete=!0,r._processRefreshData("_handleDataSourceChanged");break;case"legend":case"seriesTemplate":r._processRefreshData("_handleDataSourceChanged");break;case"title":if(u=r._processTitleOption(t,i),u){r.option("title",i);return}r._processRefreshData("force_render");break;case"valueAxis":case"argumentAxis":case"commonAxisSettings":r._needHandleRenderComplete=!0,r._processRefreshData("processAxesOption"),r._disposeSeries(),r.paneAxis={};break;case"panes":case"defaultPane":r._disposeSeries(),r.paneAxis={},r._needHandleRenderComplete=!0,r._processRefreshData("reinit");break;case"size":r._checkAndSaveCanvasSize()&&r._processRefreshData("force_render");break;case"rotated":case"equalBarWidth":case"customizePoint":case"customizeLabel":r._disposeSeries(),r._needHandleRenderComplete=!0,r._processRefreshData("reinit");break;case"theme":r._initOptions(r._userOptions),r._processRefreshData("reinit");break;case"loadingIndicator":r._updateLoadIndicator(r.option("loadingIndicator"));return;default:r._processRefreshData("reinit")}r._invalidate(),r.callBase.apply(r,arguments)},_refresh:function(){var n=this;if(this.renderer.stopAllAnimations(),n._currentRefreshData){switch(n._currentRefreshData){case"force_render":n._render({force:!0});break;case"processAxesOption":n._processAxesOption(n._options),n._reinit(!0);break;case"reinit":n._reinit(!0);break;default:n[n._currentRefreshData]&&n[n._currentRefreshData]()}delete n._currentRefreshData}else n._render({force:!0})},_dataSourceOptions:function(){return{paginate:!1,_preferSync:!0}},_createCanvasClipRect:function(){var t=this,n=t.canvas;t.canvasClipRect?t.canvasClipRect.updateRectangle({x:n.left,y:n.top,width:n.width-n.left-n.right,height:n.height-n.top-n.bottom}):t.canvasClipRect=t.renderer.createClipRect(n.left,n.top,n.width-n.left-n.right,n.height-n.top-n.bottom).append()},_getCanvasClipRectID:function(){return this.canvasClipRect.id},_handleDataSourceChanged:function(){clearTimeout(this.delayedRedraw),this._dataSpecificInit(!0)},_groupSeries:function(){this._groupedSeries=[this.series]},_dataSpecificInit:function(n){this._initSeries(),this._repopulateSeries(),this._handleSeriesPopulated(n)},_processSeriesTemplate:function(){var i=this,o=i.option("seriesTemplate"),v=r.isFunction(o.customizeSeries)?o.customizeSeries:n.noop,f=o.nameField||"series",h=i._dataSource,e,a,t;if(h){var s={},c=[],l=h.items(),u;for(e=0,a=l.length;e<a;e++)t=l[e],f in t&&(u=s[t[f]],u||(u=s[t[f]]={name:t[f],data:[]},c.push(u.name)),u.data.push(t));i._templatedSeries=n.map(c,function(t){var i=s[t],r=v.call(null,i.name);return n.extend(i,r)}),i._populateSeries(),delete i._templatedSeries}},_processSingleSeries:function(){},_repopulateSeries:function(){var t=this,r,s=t.option("rotated"),f=t.option("incidentOccured"),i=t._dataSource&&t._dataSource.items(),e=this.option("dataPrepareSettings"),o=this.option("seriesTemplate");this._dataSource&&o&&(this._processSeriesTemplate(),i=t.teamplateData||i),this._groupSeries(),t._dataValidator=u.factory.createDataValidator(i,t._groupedSeries,f,e),r=t._dataValidator.validate(),t.themeManager.resetPalette(),n.each(t.series,function(n,i){i.reinitData(r),t._processSingleSeries(i,i.userOptions)})},_handleRenderComplete:function(){var t=this,r=t.option("done"),i=!0;t._needHandleRenderComplete&&(n.each(t.series,function(n,t){i=i&&t.canRenderCompleteHandle()}),i&&(t._needHandleRenderComplete=!1,n.isFunction(r)&&r.call(t)))},getAllSeries:function(){return this.series.slice()},getSeriesByName:function(t){var i=null;return n.each(this.series,function(n,r){if(r.name===t)return i=r,!1}),i},getSeriesByPos:function(n){return this.series[n]},getSelectedSeries:function(){return null},clearSelection:function(){this.tracker.clearSelection()},hideTooltip:function(){this.tracker._hideTooltip()},render:function(n){this._render(n)}}).include(f.DataHelperMixin).include(o.loadIndicatorMixin.base).include(o.widgetMarkupMixin)}(jQuery,DevExpress),function(n,t,i){var h=t.viz.core,r=t.viz.charts,u=t.utils,o=5,e="default",s="defaultAxisName",f=.1;r.Chart=r.BaseChart.inherit({_defaultOptions:function(){return n.extend(!0,this.callBase(),{commonSeriesSettings:{type:"line",maxLabelCount:i,stack:"default",label:{visible:!1,alignment:"center",rotationAngle:0,horizontalOffset:0,verticalOffset:0,radialOffset:0,format:"",argumentFormat:"",precision:0,argumentPrecision:0,percentPrecision:0,customizeText:i,position:"outside",connector:{visible:!1,width:0}}},useAggregation:!1,defaultPane:e,adjustOnZoom:!0,rotated:!1,synchronizeMultiAxes:!0,equalBarWidth:!0,commonPaneSettings:{backgroundColor:"none",border:{visible:!1,top:!0,bottom:!0,left:!0,right:!0,dashStyle:"solid"}},panes:[{name:e,border:{}}],commonAxisSettings:{tickInterval:i,setTicksAtUnitBeginning:!0,valueMarginsEnabled:!0,placeholderSize:null,logarithmBase:10}})},_dispose:function(){var t=this,i=this._disposeObjectsInArray;t.callBase(),t.panes=null,t.legend&&(t.legend.dispose(),t.legend=null),i.call(t,"panesBackground"),i.call(t,"panesClipRects"),i.call(t,"horizontalAxes"),i.call(t,"verticalAxes"),i.call(t,"seriesFamilies"),n.each(t._paneTrackerGroups||[],function(n,t){t.paneSeriesGroup.dispose(),t.paneMarkerGroup.dispose()}),t._paneTrackerGroups=null},_init:function(){this.paneAxis={},this._crossHairOptions={},this.callBase()},_reinit:function(n){var t=this;t._disposeObjectsInArray("translators"),t.translators=[],t.panes=t._createPanes(),t._populateAxes(),t.callBase(),delete t._seriesInitializing,t.series?t._correctValueAxes():t._dataSpecificInit(),t._endLoading(function(){n&&t._render({force:!0})})},_correctBusinessRange:function(t,i,r,f){var e="min"+r,s="max"+r,o,h;return!i||!u.isDefined(t[e])||!u.isDefined(t[s])?!1:(o={},h=i,i=n.isNumeric(i)?i:u.convertDateTickIntervalToMilliseconds(i),i>=Math.abs(t[s]-t[e]))?(u.isDate(t[e])?(n.isNumeric(h)?(o[e]=new Date(t[e].valueOf()-i),o[s]=new Date(t[s].valueOf()+i)):(o[e]=u.addInterval(t[e],h,!0),o[s]=u.addInterval(t[s],h,!1)),f&&(u.correctDateWithUnitBeginning(o[s],h),u.correctDateWithUnitBeginning(o[e],h))):(o[e]=t[e]-i,o[s]=t[s]+i),t.getBoundRange(o),!0):!1},_populateBusinessRange:function(t){var e=this,ot=e.panes,a=[],lt,c,w,b,k,d,l,s=e.option("rotated"),v,g=s?e.horizontalAxes:e.verticalAxes,nt={},tt=s?e.verticalAxes:e.horizontalAxes,y=s&&"X"||"Y",h=s&&"Y"||"X",it="getBoundRange"+y,rt="getBoundRange"+h,ut=e.option("incidentOccured"),st=e.option("useAggregation"),at,vt=n.map(ot,function(n){return n.name}),yt=e.series,ft,et,ht=e.paneAxis,ct=e._groupedSeries,o,p;e._disposeObjectsInArray("businessRanges"),o=new r.Range,n.each(g,function(n,t){nt[t.name]=t}),n.each(ht,function(e,h){n.each(h,function(h){var ot=[],ht,nt=new r.Range({pane:e,axis:h,minValueMarginX:f,maxValueMarginX:f,minValueMarginY:f,maxValueMarginY:f}),lt,vt,at;for(n.each(ct,function(n,t){t[0].pane===e&&t[0].axis===h&&(ot=t)}),n.each(g,function(n,t){if(t.pane===e&&t.name===h)return ht=t,!1}),n.each(tt,function(n,t){t.validate(!0,ut),t.options.type=ot&&ot.length?ot[0].options.argumentAxisType:null,o=o[rt](t.getRangeData()),ft=t.options.tickInterval,et=t.options.setTicksAtUnitBeginning,vt=t.calcInterval}),ht.validate(!1,ut),ht.options.type=ot&&ot.length?ot[0].options.valueAxisType:null,at=new r.Range(ht.getRangeData()),at.applyEqualLimitsMargins(),lt=lt||ht.options.valueType==="datetime"?"datetime":i,nt=nt[it](at),w=s?nt.minX:nt.minY,b=s?nt.maxX:nt.maxY,l=0;l<ot.length;l++)t&&(t.minVal=w,t.maxVal=b,st&&!t.adjustOnZoom&&(c=ot[l]._originalBusinessRange,k=s?c.minX:c.minY,d=s?c.maxX:c.maxY,t.minVal=u.isDefined(t.minVal)?t.minVal:k,t.maxVal=u.isDefined(t.maxVal)?t.maxVal:d)),v=ot[l].getRangeData(t,vt),nt=nt[it](v),o=o[rt](v);nt["isDefined"+y]()||nt["setStubData"+y](lt),a.push(nt)})}),o["isDefined"+h]()||o["setStubData"+h](tt[0].options.argumentType),p=e._correctBusinessRange(o,ft,h,et),n.each(a,function(n,t){p&&t.applyValueMargins(),t=t.getBoundRange(o);var i=nt[t.axis];i&&i.options.showZero&&t.correctValueZeroLevel(),p||t.applyValueMargins(),t["stubData"+h]=o["stubData"+h],t.isDefined()||t.setStubData()}),e.businessRanges=a},_groupSeries:function(){var t=this,o=t.panes,u=t.option("rotated"),r=u?t.horizontalAxes:t.verticalAxes,l=u?t.verticalAxes:t.horizontalAxes,s=n.map(o,function(n){return n.name}),f=t.series,i=t.paneAxis,h=t._groupedSeries=[],c=function(n,t){for(var u,i=0;i<n.length;i++)if(n[i].pane===t){u=n[i].name;break}return u||(u=r[0].name),u},e;n.each(f,function(n,t){t.axis=t.axis||c(r,t.pane),t.axis&&(i[t.pane]=i[t.pane]||{},i[t.pane][t.axis]=!0)}),n.each(r,function(t,r){r.name&&r.pane&&n.inArray(r.pane,s)!=-1&&(i[r.pane]=i[r.pane]||{},i[r.pane][r.name]=!0)}),t._correctValueAxes(),e=function(i){var f=[],u;n.each(r,function(n,t){t.pane===i&&f.push(t)}),f.length>1&&t.option("synchronizeMultiAxes")&&n.each(f,function(n,t){var i=t.options.grid;u&&i&&i.visible?i.visible=!1:u=u?u:i&&i.visible})},n.each(i,function(t,i){e(t),n.each(i,function(i){var u=[];n.each(f,function(n,r){r.pane===t&&r.axis===i&&u.push(r)}),u.length&&h.push(u)})})},_createPanes:function(){var i=this,t=i.option("panes"),r;return n.each(i.panesClipRects||[],function(n,t){t.remove()}),i.panesClipRects=[],i.defaultPane=i.option("defaultPane"),t=n.isArray(t)?t:t?[t]:[],!i._doesPaneExists(t,i.defaultPane)&&t.length>0&&(r=t[t.length-1].name,i.option("incidentOccured")('The "'+i.defaultPane+'" pane does not exist. The "'+r+'" pane will be used.'),i.defaultPane=r),i.option("rotated")&&(t=t.reverse()),t},_doesPaneExists:function(t,i){var r=!1;return n.each(t,function(n,t){if(t.name===i)return r=!0,!1}),r},_populateSeries:function(){var t=this,v=!!t.option("seriesTemplate"),h=v?t._templatedSeries:t.option("series"),y=n.isArray(h)?h:h?[h]:[],c=t.option("argumentAxis"),e=t.option("valueAxis"),p=t.themeManager,w,i,b=t.option("commonSeriesSettings"),d=t._userOptions.commonSeriesSettings,o,g=t.option("rotated"),k=t.option("incidentOccured"),s,nt=n.map(t.panes,function(n){return n.name}),l,a,f;for(t.teamplateData=[],n.each(t._paneTrackerGroups||[],function(n,t){t.paneSeriesGroup.remove(),t.paneMarkerGroup.remove()}),t._paneTrackerGroups=[],n.each(t.panes,function(){var r=t.renderer.createGroup({"class":"dxc-pane-tracker"}),u=t.renderer.createGroup({"class":"dxc-pane-tracker"});t._paneTrackerGroups.push({paneSeriesGroup:r,paneMarkerGroup:u})}),t._disposeSeries(),t.series=[],p.resetPalette(),b.containerBackgroundColor=t.option("containerBackgroundColor"),s=0;s<y.length;s++)(i=y[s],i.type&&!u.isString(i.type)&&(i.type=""),w=i.data,i.data=null,i.rotated=g,i.customizePoint=t._userOptions.customizePoint,i.customizeLabel=t._userOptions.customizeLabel,c&&(i.argumentCategories=c.categories,i.argumentAxisType=c.type,i.argumentType=c.argumentType),e&&(u.isArray(e)?n.each(e,function(n,t){(i.axis||n)&&i.axis!==t.name||(i.valueCategories=t.categories,i.valueAxisType=t.type,i.valueType=t.valueType,i.showZero=t.showZero)}):(i.valueCategories=e.categories,i.valueAxisType=e.type,i.valueType=e.valueType,i.showZero=e.showZero)),i.incidentOccured=k,i.name||(i.name="Series "+(s+1).toString()),f=p.applyNextSeriesTheme(i,b,d),f.pane=f.pane||t.defaultPane,l=f.pane,a=t._getPaneIndex(l),n.inArray(l,nt)!==-1)&&(f.seriesGroup=t._seriesGroup,f.seriesLabelsGroup=t._labelsGroup,f.seriesTrackerGroup=t._paneTrackerGroups[a].paneSeriesGroup,f.markerTrackerGroup=t._paneTrackerGroups[a].paneMarkerGroup,o=r.factory.createSeries(f.type,t.renderer,f),o?(o.index=s,t.series.push(o)):k.call(null,"Unknown series type requested: "+f.type+"."),v&&(n.each(w,function(i,r){n.each(o.getTeamplatedFields(),function(n,t){r[t.teamplateField]=r[t.originalField]}),t.teamplateData.push(r)}),o.updateTeamplateFieldNames()));return t.series},_createValueAxis:function(t,i,u){var f=this,e;return t=n.extend({isHorizontal:i,tickProvider:u,incidentOccured:f.option("incidentOccured")},t),t=n.extend(!0,{},f.option("commonAxisSettings"),f.option(i?"horizontalAxis":"verticalAxis"),f.option("valueAxisStyle"),f.option("userCommonAxisSettings"),f.option("valueAxis"),t),t.strips&&n.each(t.strips,function(i){t.strips[i]=n.extend(!0,{},t.stripStyle,t.strips[i])}),t.constantLines&&n.each(t.constantLines,function(i,r){t.constantLines[i]=n.extend(!0,{},t.constantLineStyle,r)}),e=r.factory.createAxis(f.renderer,t),e.name=t.name,e.pane=e.pane||t.pane,e.priority=t.priority,e},_disposeAxes:function(){var t=this;n.each(t.horizontalAxes||[],function(n,t){t.dispose()}),n.each(t.verticalAxes||[],function(n,t){t.dispose()}),t.horizontalAxes=null,t.verticalAxes=null},_populateAxes:function(){var t=this,o=[],h=[],u=t.panes,f=t.option("rotated"),tt=t.themeManager,c=t.option("valueAxis")||{},l=t.option("argumentAxis")||{},a=n.isArray(l)?l:[l],b=n.isArray(c)?c:[c],it,e,y=[],rt,p=r.factory.getAxisTickProvider(),v,w;t._disposeAxes(),w=function(i,u){i=n.extend(!0,{isHorizontal:!f,tickProvider:p,pane:t.defaultPane,incidentOccured:t.option("incidentOccured")},i),i=n.extend(!0,{},t.option("commonAxisSettings"),t.option(f?"verticalAxis":"horizontalAxis"),t.option("argumentAxisStyle"),t.option("userCommonAxisSettings"),t.option("argumentAxis"),i),i.strips&&n.each(i.strips,function(t){i.strips[t]=n.extend(!0,{},i.stripStyle,i.strips[t])}),i.constantLines&&n.each(i.constantLines,function(t,r){i.constantLines[t]=n.extend(!0,{},i.constantLineStyle,r)}),e=r.factory.createAxis(t.renderer,i),e._virtual=u,i.isHorizontal?o.push(e):h.push(e)},v=f?a[0].position==="right"?u[u.length-1].name:u[0].name:a[0].position==="top"?u[0].name:u[u.length-1].name,n.each(u,function(t,i){var r=i.name,u=r!=v,f=n.extend(!0,{},{pane:r},a[0]);w(f,u)});var k=function(n){var i=t._createValueAxis(n,f,p);f?o.push(i):h.push(i)},d=0,g=function(){return s+d++},nt=function(t){for(var r={},u=t.length,i=0;i<u;i++)r[t[i]]=!0;return n.map(r,function(n,t){return t})};n.each(b,function(r,u){var f=[],e=u.name;if(e&&n.inArray(e,y)!=-1){t.option("incidentOccured").call(null,'The "valueAxis" configuration array contains axes with the same name.');return}e&&y.push(e),u.pane&&f.push(u.pane),u.panes&&u.panes.length&&(f=f.concat(u.panes.slice(0))),f=nt(f),f.length||f.push(i),n.each(f,function(t,i){k(n.extend(!0,{},u,{name:e||g(),pane:i,priority:r}))})}),t.horizontalAxes=o,t.verticalAxes=h},_correctValueAxes:function(){var i=this,s=i.option("rotated"),b=i.themeManager,e=i.option("valueAxis")||{},h=n.isArray(e)?e:[e],v=r.factory.getAxisTickProvider(),t=(s?i.horizontalAxes:i.verticalAxes)||[],y=t[0].name,f=i.paneAxis||{},o=i.panes,u,c={},p=function(t){var r;return n.each(i.paneAxis,function(i,u){n.each(u,function(n){if(t==n)return r=i,!1})}),r},w=n.map(t,function(n){return n.pane?null:n}),l,a;for(n.each(w,function(n,t){t.pane=p(t.name),t.pane||(t.pane=i.defaultPane,f[t.pane]=f[t.pane]||{},f[t.pane][t.name]=!0),t.options.pane=t.pane}),u=0;u<o.length;u++)f[o[u].name]||(f[o[u].name]={},f[o[u].name][y]=!0);l=function(n){for(var u,r=0;r<h.length;r++)if(h[r].name==n){u=e[r],u.priority=r;break}if(!u)for(r=0;r<t.length;r++)if(t[r].name==n){u=t[r].options,u.priority=t[r].priority;break}return u||(i.option("incidentOccured").call(null,'Value axis with the "'+n+'" name does not exist. It has been created automatically.'),u={name:n,priority:t.length}),u},a=function(n,i){var r;for(u=0;u<t.length;u++)if(r=t[u],r.name===i&&r.pane===n)return r},n.each(i.paneAxis,function(r,u){n.each(u,function(u){if(c[u+"-"+r]=!0,!a(r,u)){var e=l(u);e&&t.push(i._createValueAxis(n.extend(!0,{},e,{pane:r,name:u}),s,v))}})}),t=n.grep(t,function(n){return!!c[n.name+"-"+n.pane]}),t.sort(function(n,t){return n.priority-t.priority}),s?i.horizontalAxes=t:i.verticalAxes=t},_processSeriesFamilies:function(){var t=this,i=[],f=[],u,e=t.option("rotated");if(t.seriesFamilies&&t.seriesFamilies.length){n.each(t.seriesFamilies,function(n,t){t.adjustSeriesValues()});return}n.each(t.series,function(t,r){n.inArray(r.type,i)===-1&&i.push(r.type)}),n.each(t.panes,function(o,s){u=[],n.each(t.series,function(n,t){t.pane===s.name&&u.push(t)}),n.each(i,function(n,i){var o=r.factory.createSeriesFamily({type:i,pane:s.name,rotated:e,equalBarWidth:t.option("equalBarWidth")});o.add(u),o.adjustSeriesValues(),f.push(o)})}),t.seriesFamilies=f},_createLegend:function(){var t=this,i=n.extend(!0,{renderer:t.renderer,series:t.series,containerBackgroundColor:t.option("commonSeriesSettings").containerBackgroundColor},t.option("legend"));t.legend?t.legend.update(i):t.legend=r.factory.createLegend(i,t._legendGroup,t._legendTrackerGroup)},_createTranslator:function(n,i){return new t.viz.core.Translator2D(n,i)},_createPanesBorderOptions:function(){var i=this.option("commonPaneSettings").border,t={};return n.each(this.panes,function(r,u){var f=n.extend(!0,{},i,u.border);t[u.name]=f}),t},_render:function(i){var u=this,k=u.renderer,s=u.translators,c=u.option("rotated"),f,e=u.layoutManager,w=u.option("title"),l=0,a,b=new r.MultiAxesSynchronizer,h=u._createPanesBorderOptions(),v,y=function(n,t){for(var i,r,f,u=0;u<t.length;u++)r=t[u],a=r.pane,f=r.name,i=n._getTranslator(a,f),i&&(i.init(),r.setRange(i.getBusinessRange()),r.setTranslator(i))},p=function(){function c(n){var t=u._getPaneIndex(n.pane);n.paneClipRectID=u.panesClipRects[t].id,n.forceClipping=u._getPaneBorderVisibility(t)}function l(i,r){if(u.option("tooltip").shared){var e=i.getPoints(),f=i.getStackName();n.each(e,function(i,u){var e=u.argument,o;if(t.utils.isArray(r[e])||(r[e]=[],r[e][null]=[]),f&&!t.utils.isArray(r[e][f])&&(r[e][f]=[],n.each(r[e][null],function(n,t){t.stackName||r[e][f].push(t)})),f)r[e][f].push(u),r[e][null].push(u);else for(o in r[e])r[e][o].push(u);u.stackPoints=r[e][f],u.stackName=f})}}var r,f=u.panes,h=[],o,s;for(n.each(u.seriesFamilies||[],function(n,t){var i=u._getTranslator(t.pane);t.updateSeriesValues(i),t.adjustSeriesDimensions(i)}),u._createCrossHairCursor(),o=0;o<u.series.length;o++)r=u.series[o],l(r,h),c(r),r.adjustSeriesLabels=i.adjustSeriesLabels,r.draw(u._getTranslator(r.pane,r.axis),i.animate&&r.getPoints().length<=i.animationPointsLimit&&u.renderer.animationEnabled());u._trackerGroup.append(),i.drawLegend&&u.legend&&u.legend.options.position==="inside"?(u.legend.canvas=n.extend({},f[0].canvas,{right:f[f.length-1].canvas.right,bottom:f[f.length-1].canvas.bottom}),u._legendGroup.append(),u._tooltipGroup.append(),u.legend.draw(),e.applyLegendLayout()):u.legend.options.position=="inside"&&u.legend.toForeground(),v&&u.hideLoadingIndicator(),u.option("drawn")(),s=function(){var t;for(n.each(u._paneTrackerGroups||[],function(n,t){t.paneSeriesGroup.clear(),t.paneMarkerGroup.clear()}),t=0;t<u.series.length;t++)u.series[t].drawTrackers();u.legend&&u.legend.drawTrackers(),u.tracker._prepare(),n.each(u._paneTrackerGroups,function(n,t){t.paneSeriesGroup.append(u._seriesTrackerGroup),t.paneMarkerGroup.append(u._markerTrackerGroup)}),u._handleRenderComplete()},u._createTooltip(),i.asyncTrackersRendering?u.delayedRedraw=setTimeout(s,i.trackerRenderingDelay):s()};if(i=u._prepareDrawOptions(i),u.callBase(i),u.stopRedraw){u.stopRedraw=!1;return}if(u._createPanesBackground(),w.text&&i.drawTitle&&(u._titleGroup.append(),u._drawTitle(),e.applyTitleLayout()),i.drawLegend&&u.legend&&u.legend.options.position==="outside"&&(u.legend.canvas=u.canvas,u._legendGroup.append(),u.legend.draw(),e.applyLegendLayout(),e.isCanvasExceeded(!1))){u.option("incidentOccured")("The container is too small to draw a chart with current settings."),u._clean();return}u._setPanesClipRectPadding(h,c),i.recreateCanvas&&(e.createPanesCanvases(),n.each(u.paneAxis,function(t,i){n.each(i,function(n){var f=u._createTranslator(new r.Range(u._getBusinessRange(t,n)),u._getCanvasForPane(t));f.pane=t,f.axis=n,s.push(f)})})),u._options.useAggregation&&n.each(u.series,function(n,t){t._originalBusinessRange=t._originalBusinessRange||t.getRangeData(),t.resamplePoints(u._getTranslator(t.pane),u._zoomMinArg,u._zoomMaxArg)}),(u._zoomMinArg||u._zoomMaxArg)&&u._populateBusinessRange({adjustOnZoom:u.option("adjustOnZoom"),minArg:u._zoomMinArg,maxArg:u._zoomMaxArg}),n.each(s,function(n,t){t.updateBusinessRange(new r.Range(u._getBusinessRange(t.pane,t.axis))),delete t._originalBusinessRange,t.init()}),y(u,u.horizontalAxes),y(u,u.verticalAxes),u._stripsGroup.append(),u._constantLinesGroup.append(),u._axesGroup.append();do{for(f=0;f<u.horizontalAxes.length;f++)u.horizontalAxes[f].resetTicks();for(f=0;f<u.verticalAxes.length;f++)u.verticalAxes[f].resetTicks();for(u.option("synchronizeMultiAxes")&&b.synchronize(c?u.horizontalAxes:u.verticalAxes,c),f=0;f<u.horizontalAxes.length;f++)u.horizontalAxes[f].clipRectID=u._getCanvasClipRectID(),u.horizontalAxes[f].stripsGroup=u._stripsGroup,u.horizontalAxes[f].constantLinesGroup=u._constantLinesGroup,u.horizontalAxes[f].axesContainerGroup=u._axesGroup,u.horizontalAxes[f].draw({borderOptions:h[u.horizontalAxes[f].pane]});for(e.requireAxesRedraw=!1,i.adjustAxes&&(e.applyHorizontalAxesLayout(),n.each(s,function(n,t){t.init()})),f=0;f<u.verticalAxes.length;f++)u.verticalAxes[f].clipRectID=u._getCanvasClipRectID(),u.verticalAxes[f].stripsGroup=u._stripsGroup,u.verticalAxes[f].constantLinesGroup=u._constantLinesGroup,u.verticalAxes[f].axesContainerGroup=u._axesGroup,u.verticalAxes[f].draw({borderOptions:h[u.verticalAxes[f].pane]});if(i.adjustAxes&&(e.applyVerticalAxesLayout(),n.each(s,function(n,t){t.init()})),l=l+1,e.isCanvasExceeded(!0)){u.option("incidentOccured")("The container is too small to draw a chart with current settings."),u._clean();return}}while(e.requireAxesRedraw&&l<o);for(u.chartTitle&&u.chartTitle.setClipRectSettings(),u._drawPanesBorders(h),u._createClipRectsForPanes(),f=0;f<u.horizontalAxes.length;f++)u.horizontalAxes[f].applyClipRect(u._getElementsClipRectID(u.horizontalAxes[f].pane));for(f=0;f<u.verticalAxes.length;f++)u.verticalAxes[f].applyClipRect(u._getElementsClipRectID(u.verticalAxes[f].pane));u._fillPanesBackground(),u._seriesGroup.append(),u._labelsGroup.append(),u._tooltipGroup.append(),u._crossHairCursorGroup.append(),v=u._loadIndicator&&u._loadIndicator.isShown&&u._dataSource&&u._dataSource.isLoaded()&&!i.isResize,i.asyncSeriesRendering?u.delayedRedraw=setTimeout(p,25):p()},_isInBarTypes:function(n){return n.slice(-3)==="bar"?!0:!1},_setPanesClipRectPadding:function(t){var r=this,u=!0,f="";n.each(r.panes,function(n,i){u=u&&!!t[i.name].visible}),n.each(r.horizontalAxes,function(n,t){f+=t.options.position}),n.each(r.verticalAxes,function(n,t){f+=t.options.position})},_createCrossHairCursor:function(){var u=this,e=u.renderer,o=u.panes,i,r,t=u.option("crosshair")||{},s,h,c,l,f;if(t&&t.enabled){for(c={stroke:t.horizontalLine.color||t.color,strokeWidth:t.horizontalLine.width||t.width,dashStyle:t.horizontalLine.dashStyle||t.dashStyle,visibility:"hidden",opacity:t.horizontalLine.opacity||t.opacity},l={stroke:t.verticalLine.color||t.color,strokeWidth:t.verticalLine.width||t.width,dashStyle:t.verticalLine.dashStyle||t.dashStyle,visibility:"hidden",opacity:t.verticalLine.opacity||t.opacity},f=0;f<o.length;f++)r=o[f].canvas,i?(i.right=r.right,i.bottom=r.bottom):i=n.extend({},r),e.createRect(r.left,r.top,r.width-r.right-r.left,r.height-r.bottom-r.top,0).append(this._crosshairTrackerGroup);t.horizontalLine&&t.horizontalLine.visible&&(s=e.createLine(i.left,i.top,i.width-i.right,i.top,c).append(u._crossHairCursorGroup)),t.verticalLine&&t.verticalLine.visible&&(h=e.createLine(i.left,i.top,i.left,i.height-i.bottom,l).append(u._crossHairCursorGroup)),u._crossHairOptions.horizontalLine=s,u._crossHairOptions.verticalLine=h,u._crossHairOptions.canvas=i}},_createPanesBackground:function(){var n=this,f=n.option("commonPaneSettings").backgroundColor,t,e=n.renderer,u,i,r=[];for(n._panesBackgroundGroup&&n._panesBackgroundGroup.clear(),i=0;i<n.panes.length;i++){if(t=n.panes[i].backgroundColor||f,!t||t==="none"){r.push(null);continue}u=e.createRect(0,0,0,0,0,{fill:t,strokeWidth:0}).append(n._panesBackgroundGroup),r.push(u)}n.panesBackground=r,n._panesBackgroundGroup.append()},_fillPanesBackground:function(){var i=this,t;n.each(i.panes,function(n,r){t=r.borderCoords,i.panesBackground[n]!=null&&i.panesBackground[n].applySettings({x:t.left,y:t.top,width:t.width,height:t.height})})},_calcPaneBorderCoords:function(n){var r=n.canvas,i=n.borderCoords=n.borderCoords||{};i.left=r.left,i.top=r.top,i.right=r.width-r.right,i.bottom=r.height-r.bottom,i.width=i.right-i.left,i.height=i.bottom-i.top},_drawPanesBorders:function(t){var i=this,r=i.option("rotated");i._panesBorderGroup&&(i._panesBorderGroup.detach(),i._panesBorderGroup.clear()),n.each(i.panes,function(n,u){var e,f=t[u.name],o={fill:"none",stroke:f.color,strokeOpacity:f.opacity,strokeWidth:f.width,dashStyle:f.dashStyle};(i._calcPaneBorderCoords(u,r),f.visible)&&(e=u.borderCoords,i.renderer.createSegmentRect(e.left,e.top,e.width,e.height,0,f,o).append(i._panesBorderGroup))}),i._panesBorderGroup.append()},_createClipRectsForPanes:function(){var t=this;n.each(t.panes,function(n,i){var r=i.borderCoords,u=t.panesClipRects[n];u?u.updateRectangle({x:r.left,y:r.top,width:r.width,height:r.height}):(u=t.renderer.createClipRect(r.left,r.top,r.width,r.height).append(),t.panesClipRects.push(u))})},_getPaneIndex:function(t){var i;return n.each(this.panes,function(n,r){if(r.name===t)return i=n,!1}),i},_getPaneBorderVisibility:function(n){var i=this.option("commonPaneSettings").border.visible,r=this.panes[n]||{},t=r.border||{};return"visible"in t?t.visible:i},_getElementsClipRectID:function(n){return this.panesClipRects[this._getPaneIndex(n)].id},_getTranslator:function(n,t){for(var r=this.translators,f=r.length,u=null,i=0;i<f;i++)if(r[i].pane===n&&r[i].axis===t){u=r[i];break}if(!u)for(i=0;i<f;i++)if(r[i].pane===n){u=r[i];break}return u},_getCanvasForPane:function(n){for(var i=this.panes,r=i.length,t=0;t<r;t++)if(i[t].name===n)return i[t].canvas},_getBusinessRange:function(n,t){for(var r=this.businessRanges||[],f=r.length,u,i=0;i<f;i++)if(r[i].pane===n&&r[i].axis===t){u=r[i];break}if(!u)for(i=0;i<f;i++)if(r[i].pane===n){u=r[i];break}return u},_handleSeriesPopulated:function(n){var t=this;t._processSeriesFamilies(),t._createLegend(),t._populateBusinessRange(),t._processValueAxisFormat(),t._updateTracker(),t._endLoading(function(){n&&t._render({force:!0})})},_processValueAxisFormat:function(){var t=this,r=t.option("rotated")?t.horizontalAxes:t.verticalAxes,i=[];n.each(t.series,function(){this.isFullStackedSeries()&&n.inArray(this.axis,i)===-1&&i.push(this.axis)}),n.each(r,function(){n.inArray(this.name,i)!==-1?this.setPercentLabelFormat():this.resetAutoLabelFormat()})},zoomArgument:function(n,t){var i=this,u=i.option("rotated"),r=u?i.verticalAxes[0]:i.horizontalAxes[0];n=r.validateUnit(n),t=r.validateUnit(t),i._zoomMinArg=n,i._zoomMaxArg=t,i._render({force:!0,drawTitle:!1,drawLegend:!1,adjustAxes:!1,animate:!1,adjustSeriesLabels:!1,asyncSeriesRendering:!1})}})}(jQuery,DevExpress),function(n,t,i){var f=t.viz.core,r=t.viz.charts,u=t.utils,e=12;r.PieChart=r.BaseChart.inherit({_defaultOptions:function(){return n.extend(!0,this.callBase(),{commonSeriesSettings:{type:"pie",pie:{label:{percentPrecision:0}}},legend:{hoverMode:"markPoint"}})},_reinit:function(n){var t=this;t.callBase(),t.series||t._dataSpecificInit(),t._endLoading(function(){n&&t._render({force:!0})})},_populateBusinessRange:function(){var i=[],f=this.series,t=f[0],n,u;this._disposeObjectsInArray("businessRanges"),t&&(n=new r.Range({series:t}),u=t.getRangeData(),n=n.getBoundRange(u),n.isDefined()||n.setStubData(),i.push(n)),this.businessRanges=i},_createTranslator:function(n){return new DevExpress.viz.core.Translator1D(n.minY,n.maxY,360,0)},_populateSeries:function(){var t=this,y=t.renderer,p=!!t.option("seriesTemplate"),s=p?t._templatedSeries:t.option("series"),c=n.isArray(s)?s:s?[s]:[],l=t.themeManager,a,f,o,e,h,w=t.option("commonSeriesSettings"),b=t._userOptions.commonSeriesSettings,v=t.option("incidentOccured");return t._disposeSeries(),t.series=[],l.resetPalette(),c.length&&(f=c[0],f.type&&!u.isString(f.type)&&(f.type=""),a=f.data,f.data=null,f.incidentOccured=v,e=l.applyPieSeriesTheme(f,w,b),e.seriesGroup=t._seriesGroup,e.trackerGroup=t._trackerGroup,e.seriesLabelsGroup=t._labelsGroup,e.seriesTrackerGroup=t._seriesTrackerGroup,e.markerTrackerGroup=t._markerTrackerGroup,h=e.type!==i?e.type:t.option("commonSeriesSettings").type,o=r.factory.createSeries(h,y,e),o?(t._processSingleSeries(o,o.userOptions),t.series.push(o)):v.call(null,"Unknown series type requested: "+h),f.data=a),t.series},_processSingleSeries:function(t,r){var o=this.option("commonSeriesSettings"),f,s=r.seriesGroup,h=r.trackerGroup,c=r.seriesTrackerGroup,l=r.markerTrackerGroup,a=r.seriesLabelsGroup,u;for(t.arrangePoints(),f=t&&t.getPoints()||[],r.seriesGroup=null,r.trackerGroup=null,r.seriesTrackerGroup=null,r.markerTrackerGroup=null,r.seriesLabelsGroup=null,u=0;u<f.length;u++){t.options.customizePoint=this._userOptions.customizePoint,t.options.customizeLabel=this._userOptions.customizeLabel;var v=this.themeManager.applyNextPieSegmentTheme(r,o),e=t.parseStyleOptions(v),y=t._getPointStyle(t.styles.point,u,f[u].argument,f[u].originalValue,i,f[u].tag,{});e.point=n.extend(!0,{},e.point,y),f[u].setOptions(e.point),f[u].index=u}r.seriesGroup=s,r.trackerGroup=h,r.seriesTrackerGroup=c,r.markerTrackerGroup=l,r.seriesLabelsGroup=a},_handleSeriesPopulated:function(n){var t=this;t._populateBusinessRange(),t._createLegend(),t._updateTracker(),t._endLoading(function(){n&&t._render({force:!0,recreateCanvas:!0})})},_createLegend:function(){var t=this,i=n.extend(!0,{renderer:t.renderer,series:n.map(t.series[0]?t.series[0].getPoints():[],function(n){return n.name=n.argument,n.options.showInLegend=!0,n.styles={themeColor:n.options.attributes.fill},n})},t.option("legend"));i.position!=="outside"&&(i.position="outside"),t.legend=r.factory.createLegend(i,t._legendGroup,t._legendTrackerGroup)},_render:function(n){var t=this,u=t.option("title"),i=t.layoutManager,r="The container is too small to draw a chart with current settings.";if(n=t._prepareDrawOptions(n),t.callBase(n),t.stopRedraw){t.stopRedraw=!1;return}if(u.text&&n.drawTitle&&(t._titleGroup.append(),t._drawTitle(),i.applyTitleLayout()),n.drawLegend&&t.legend&&(t.legend.canvas=t.canvas,t._legendGroup.append(),t.legend.draw(),i.applyLegendLayout()),i.isCanvasExceeded(!1)){t.option("incidentOccured")(r),t._clean();return}if(t.chartTitle&&t.chartTitle.setClipRectSettings(),t.series&&t.series[0]){if(!i.applyPieChartSeriesLayout()){t.option("incidentOccured")(r),t._clean();return}t._seriesGroup.append(),t._labelsGroup.append(),t.series[0].canvas=t.canvas,t.series[0].draw(t._createTranslator(t.businessRanges[0],t.canvas),n.animate&&t.renderer.animationEnabled()),t.series[0].redraw&&(t._seriesGroup.detach(),t._trackerGroup.detach(),t._labelsGroup.detach(),t._seriesGroup.clear(),t._labelsGroup.clear(),t._seriesGroup.append(),t._labelsGroup.append(),i.applyPieChartSeriesLayout(),t.series[0].draw(t._createTranslator(t.businessRanges[0],t.canvas),n.animate&&t.renderer.animationEnabled())),t._tooltipGroup.append(),t._trackerGroup.append(),t._createTooltip(),t.series[0].drawTrackers(),t.tracker._prepare("pieChart")}t._dataSource&&t._dataSource.isLoaded()&&!n.isResize&&t.hideLoadingIndicator(),t._handleRenderComplete()},getSeries:function(){return this.series&&this.series[0]}})}(jQuery,DevExpress),function(n,t){var f=t.utils.isNumber,u=Math,e=80,r=u.round;t.viz.charts.LayoutManager=t.Class.inherit(function(){var y=function(n){this.chart=n,t(n&&n.canvas)},p=function(){this.chart=null},t=function(n){n&&(n.originalTop=n.top,n.originalBottom=n.bottom,n.originalLeft=n.left,n.originalRight=n.right)},w=function(){for(var l=this.chart,i=l.canvas,f=l.panes,t,e=f.length,a=i.height-i.top-i.bottom,v=i.width-i.left-i.right,o=0,y,p,s=f.padding||10,h=0,c=0,u=0;u<e;u++)t=f[u],t.weight=t.weight||1,o=o+t.weight;if(y=(a-s*(e-1))/o,p=(v-s*(e-1))/o,l.option("rotated"))for(u=0;u<e;u++)t=f[u],t.calcWidth=r(t.weight*p),t.canvas=n.extend({},i),t.canvas.left=t.canvas.originalLeft=i.left+c,t.canvas.right=t.canvas.originalRight=i.right+(v-t.calcWidth-c),c=c+t.calcWidth+s;else for(u=0;u<e;u++)t=f[u],t.calcHeight=r(t.weight*y),t.canvas=n.extend({},i),t.canvas.top=t.canvas.originalTop=i.top+h,t.canvas.bottom=t.canvas.originalBottom=i.bottom+(a-t.calcHeight-h),h=h+t.calcHeight+s},b=function(){var o=this.chart,n=o.canvas,u=o.chartTitle,i,s=15,h=10,f,e;if(u){i=u.getBoundingRect();switch(u.horizontalAlignment){case"left":f=r(s+n.left);break;case"center":f=r((n.width-n.left-n.right-i.width)/2+n.left)-i.x;break;case"right":f=r(n.width-n.right-i.x-i.width-s)}u.verticalAlignment==="top"?(e=r(n.top-i.y),n.top=n.top+i.height+h):(e=r(n.height-n.bottom-i.height-i.y),n.bottom=n.bottom+i.height+h),u.shift(f,e),t(n)}},k=function(){var f=this.chart,n=f.canvas,t=f.chartTitle,e=15,i,u,o=t.innerTitleGroup.settings.translateY||0;t.canvas=n,t.correctTitleLength(),i=t.getBoundingRect();switch(t.horizontalAlignment){case"left":u=r(e+n.left);break;case"center":u=r((n.width-n.right-n.left-i.width)/2+n.left-i.x);break;case"right":u=r(n.width-n.right-i.x-i.width-e)}t.shift(u,o)},d=function(i,u,f){var l=this,s=l.chart,e=s.canvas,v=s.chartTitle,y=s.legend.options,a=s.panes,o=y.margin,h=!(u||f),c;u&&(e=n.extend({},a[0].canvas),e.right=a[a.length-1].canvas.right);switch(y.horizontalAlignment){case"left":c=r(e.left+o.left),e.left=h?e.left+i.width+o.left+o.right:e.left,v&&h&&l.adjustTitleLayout();break;case"center":c=r((e.width-e.left-e.right-i.width)/2+e.left);break;case"right":c=r(e.width-e.right-i.width-o.right),e.right=h?e.right+i.width+o.left+o.right:e.right,v&&h&&l.adjustTitleLayout()}return t(e),c},g=function(i,u,f){var v=this,s=v.chart,e=s.canvas,p=s.chartTitle,h=s.legend.options,c=s.panes,y=h.horizontalAlignment==="center",a=!u&&(f||y),o=h.margin,l;u&&(e=n.extend({},c[0].canvas),e.bottom=c[c.length-1].canvas.bottom);switch(h.verticalAlignment){case"top":l=r(e.top+o.top),e.top=a?e.top+i.height+o.top+o.bottom:e.top;break;case"bottom":l=r(e.height-i.height-e.bottom-o.bottom),e.bottom=a?e.bottom+i.height+o.top+o.bottom:e.bottom}return t(e),l},nt=function(){var t=this,u=t.chart,c=u.canvas,i=u.legend,r=i.options,e=r.orientation==="horizontal",o=r.position==="inside",n=i.getBoundingRect(),s,h;r.visible&&f(n.width)&&f(n.height)&&(s=t._processLegendShiftX(n,o,e),h=t._processLegendShiftY(n,o,e),i.shift(s,h))},tt=function(){var c=this.chart,r=c.canvas,t=c.series[0]||{},o=r.height-r.top-r.bottom,s=r.width-r.left-r.right,l=s<o?s:o,h,v=t.outerRadius,i=t.type==="pie"?0:t.innerRadius||0,a;if(t&&t.correctPosition)return(t.type!=="pie"&&(f(i)?(i=Number(i),i<.2&&(i=.2),i>.8&&(i=.8)):i=.5),a=function(){var i;return t.styles.point.label.visible?i=t.labelSpace||e:n.each(t.points,function(n,r){if(r.options.label.visible)return i=t.labelSpace||e,!1}),i||0},t.labelSpace=t.styles.point.label.position!=="inside"?a():0,l<t.labelSpace)?!1:(h=v||(l-t.labelSpace-t.hoverSpace)/2,t.correctPosition({centerX:u.floor(s/2+r.left),centerY:u.floor(o/2+r.top),radiusInner:u.floor(h*i),radiusOuter:u.floor(h)}),!0)},o=function(n){return!!(n.x||n.y||n.width||n.height)},s=function(t,r,u){var o,f,s,e,h;return n.each(t,function(t,c){o=i(r,c.name),f=r[o.row][o.col],s=f.canvas,n.each(u,function(n,t){e="delta"+t,f[e]=Math.max(f[e]-(s[t.toLowerCase()]-s["original"+t]),0),f[e]>0&&(h=!0)})}),h},it=function(){for(var e=this,w=e.chart,u=w.verticalAxes,p,b,c,n,f,l,t,d,g=0,v,k,y=h(e,w.panes),r=0;r<u.length;r++)(t=u[r],c=t.options.position||"left",t.delta={},f=t.getBoundingRect(),o(f))&&(b=i(y,u[r].pane),n=y[b.row][b.col],p=n.canvas,c=="right"?(v="deltaRight",k=1,n.deltaLeft+=t.padding&&t.padding.left):(v="deltaLeft",k=-1,n.deltaRight+=t.padding&&t.padding.right),d=f.width,!t.delta[c]&&n[v]>0&&(n[v]+=u[r].getMultipleAxesSpacing()),u[r].delta[c]=u[r].delta[c]||0,u[r].delta[c]+=n[v]*k,n[v]+=d,f.isEmpty||(l=f.y+f.height-(p.height-p.originalBottom),l>0&&(e.requireAxesRedraw=!0,n.deltaBottom+=l),l=p.originalTop-f.y,l>0&&(e.requireAxesRedraw=!0,n.deltaTop+=l)));e.requireAxesRedraw=s(w.panes,y,["Left","Right"])||e.requireAxesRedraw,a(y)},rt=function(){for(var e=this,k=e.chart,d=k.panes,r=k.horizontalAxes,p,w,t,u,c,f,g,l,b,v,y=h(e,d),n=r.length-1;n>=0;n--)(f=r[n],v=f.options.position||"bottom",r[n].delta={},u=r[n].getBoundingRect(),o(u))&&(w=i(y,r[n].pane),t=y[w.row][w.col],p=t.canvas,v=="top"?(l="deltaTop",b=-1,t.deltaBottom+=f.padding&&f.padding.bottom):(l="deltaBottom",b=1,t.deltaTop+=f.padding&&f.padding.top),g=u.height,!f.delta[v]&&t[l]>0&&(t[l]+=r[n].getMultipleAxesSpacing()),r[n].delta[v]=r[n].delta[v]||0,r[n].delta[v]+=t[l]*b,t[l]+=g,u.isEmpty||(c=p.originalLeft-u.x,c>0&&(e.requireAxesRedraw=!0,t.deltaLeft+=c),c=u.x+u.width-(p.width-p.originalRight),c>0&&(e.requireAxesRedraw=!0,t.deltaRight=c)));e.requireAxesRedraw=s(d,y,["Bottom","Top"])||e.requireAxesRedraw,a(y)},h=function(n,t){for(var e=t.length,o,u=[],r=[],f=n.chart.option("rotated"),i=0;i<e;i++)f||(r=[]),r.push({canvas:t[i].canvas,pane:t[i].name,deltaLeft:0,deltaRight:0,deltaTop:0,deltaBottom:0}),f||u.push(r);return f&&u.push(r),u},i=function(n,t){for(var u,r=0;r<n.length;r++)for(u=0;u<n[r].length;u++)if(n[r][u].pane===t)return{row:r,col:u}},c=function(n,t,i){for(var r=0;r<n[t].length;r++)i(n[t][r].canvas)},l=function c(n,t,i){for(var r=0;r<n.length;r++)i(n[r][t].canvas)},a=function(n){for(var t,i,u=0,f=0,e=0,o=0,s=0,r=0;r<n.length;r++){for(e=0,o=0,i=n[r],i.length>s&&(s=i.length),t=0;t<i.length;t++)i[t]&&i[t].deltaTop>e&&(e=i[t].deltaTop),i[t]&&i[t].deltaBottom>o&&(o=i[t].deltaBottom);e&&c(n,r,function(n){n.top+=e}),o&&c(n,r,function(n){n.bottom+=o})}for(t=0;t<s;t++){for(u=0,f=0,r=0;r<n.length;r++)i=n[r],i[t]&&i[t].deltaLeft>u&&(u=i[t].deltaLeft),i[t]&&i[t].deltaRight>f&&(f=i[t].deltaRight);u&&l(n,t,function(n){n.left+=u}),f&&l(n,t,function(n){n.right+=f})}},v=function(n){if(n.left>n.width-n.right||n.right>n.width-n.left||n.top>n.height-n.bottom||n.bottom>n.height-n.top)return!0},ut=function(t){var i=this.chart,r=!1;return v(i.canvas)?!0:(t&&n.each(i&&i.panes||{},function(n,t){if(t.canvas&&v(t.canvas))return r=!0,!1}),r)};return{update:y,createPanesCanvases:w,applyLegendLayout:nt,_processLegendShiftX:d,_processLegendShiftY:g,applyTitleLayout:b,adjustTitleLayout:k,applyVerticalAxesLayout:it,applyHorizontalAxesLayout:rt,applyPieChartSeriesLayout:tt,isCanvasExceeded:ut,dispose:p}}())}(jQuery,DevExpress),function(n,t){var f=t.viz.charts,r=t.utils,u=Math;f.MultiAxesSynchronizer=t.Class.inherit(function(){var o=function(t){var i={};return n.each(t,function(){i[this.pane]||(i[this.pane]=[]),i[this.pane].push(this)}),i},s=function(n){var t;n.translator._originalBusinessRange?(t=new f.Range(n.translator._originalBusinessRange),n.translator.updateBusinessRange(t),n.setRange(t)):n.translator._originalBusinessRange=new f.Range(n.translator.getBusinessRange())},h={transform:function(n,t){return r.getLog(n,t)},addInterval:function(n,t){return n+t},getInterval:function(n,t){return t},adjustValue:u.floor},c={transform:function(n,t){return r.raiseTo(n,t)},addInterval:function(n,t){return n*t},getInterval:function(n,t){return u.pow(n,t)},adjustValue:r.adjustValue},i=function(n,t){if(n.isLogarithmic){var i=n.logarithmicBase,o=n.tickValues,r,f=[],e;for(n.minValue=t.transform(n.minValue,i),n.oldMinValue=t.transform(n.oldMinValue,i),n.maxValue=t.transform(n.maxValue,i),n.oldMaxValue=t.transform(n.oldMaxValue,i),n.tickInterval=u.round(n.tickInterval),n.tickInterval<1&&(n.tickInterval=1),e=t.getInterval(i,n.tickInterval),r=t.adjustValue(t.transform(n.tickValues[0],i));f.length<n.tickValues.length;r=t.addInterval(r,e))f.push(r);f.tickInterval=n.tickInterval,n.tickValues=f}},l=function(t,u){var f=[];return n.each(t,function(){var t,o,c,l,e,n,a,v=u&&"stubDataX"||"stubDataY";s(this),t=this.getTickValues(),t&&t.length>0&&r.isNumber(t[0])&&this.options.type!=="discrete"&&(n=this.translator.getBusinessRange(),o=u?n.minVisibleX:n.minVisibleY,c=u?n.maxVisibleX:n.maxVisibleY,l=u?n.invertX:n.invertY,a=u?n.baseX:n.baseY,e={axis:this,isLogarithmic:this.options.type==="logarithmic",logarithmicBase:a,tickValues:t,minValue:o,oldMinValue:o,maxValue:c,oldMaxValue:c,inverted:l,tickInterval:t.tickInterval,synchronizedValue:this.options.synchronizedValue},n[v]&&(e.stubData=!0,e.tickInterval=e.axis.options.tickInterval,e.isLogarithmic=!1),i(e,h),!e.tickInterval&&t.length>1&&(e.tickInterval=t[1]-t[0]),f.push(e))}),f},a=function(t){var i=0,f,e,o=0;n.each(t,function(){i=u.max(i,this.tickValues.length)}),n.each(t,function(){if(r.isDefined(this.synchronizedValue))this.baseTickValue=this.synchronizedValue,this.invertedBaseTickValue=this.synchronizedValue,this.tickValues=[this.baseTickValue];else{if(this.tickValues.length>1&&this.tickInterval){for(f=u.floor((i+1)/this.tickValues.length),e=f>1?u.floor((i+1)/f):i,o=u.floor((e-this.tickValues.length)/2);o>0&&this.tickValues[0]!==0;)this.tickValues.unshift(r.adjustValue(this.tickValues[0]-this.tickInterval)),o--;while(this.tickValues.length<e)this.tickValues.push(r.adjustValue(this.tickValues[this.tickValues.length-1]+this.tickInterval));this.tickInterval=this.tickInterval/f}this.baseTickValue=this.tickValues[0],this.invertedBaseTickValue=this.tickValues[this.tickValues.length-1]}})},t=function(n){return n.maxValue-n.minValue},e=function(n){for(var t=0;t<n.length;t++)if(!n[t].stubData)return n[t];return null},v=function(i){var u=e(i);n.each(i,function(){var f,n,i;this!==u&&(u.tickInterval&&this.tickInterval&&(this.stubData&&r.isDefined(this.synchronizedValue)&&(this.oldMinValue=this.minValue=this.baseTickValue-(u.baseTickValue-u.minValue)/u.tickInterval*this.tickInterval,this.oldMaxValue=this.maxValue=this.baseTickValue-(u.baseTickValue-u.maxValue)/u.tickInterval*this.tickInterval,this.stubData=!1),f=u.tickInterval/t(u)/this.tickInterval*t(this),this.maxValue=this.minValue+t(this)/f),i=u.inverted&&!this.inverted||!u.inverted&&this.inverted?u.maxValue-u.invertedBaseTickValue:u.baseTickValue-u.minValue,n=(i/t(u)-(this.baseTickValue-this.minValue)/t(this))*t(this),this.minValue-=n,this.maxValue-=n)})},y=function(i){var e,o,r=0,f=0;return n.each(i,function(){e=this.minValue>this.oldMinValue?(this.minValue-this.oldMinValue)/t(this):0,o=this.maxValue<this.oldMaxValue?(this.oldMaxValue-this.maxValue)/t(this):0,this.inverted?(r=u.max(r,o),f=u.max(f,e)):(r=u.max(r,e),f=u.max(f,o))}),{start:r,end:f}},p=function(i,f){var e;n.each(i,function(){e=t(this),this.inverted?(this.minValue-=f.end*e,this.maxValue+=f.start*e):(this.minValue-=f.start*e,this.maxValue+=f.end*e),this.minValue=u.min(this.minValue,r.adjustValue(this.minValue)),this.maxValue=u.max(this.maxValue,r.adjustValue(this.maxValue))})},w=function(t){var i=!1;n.each(t,function(){i=i||r.isDefined(this.synchronizedValue)}),n.each(t,function(){var n;if(i&&this.tickInterval){while(this.tickValues[0]-this.tickInterval>=this.minValue)this.tickValues.unshift(r.adjustValue(this.tickValues[0]-this.tickInterval));for(n=this.tickValues[this.tickValues.length-1];(n=n+this.tickInterval)<=this.maxValue;)this.tickValues.push(r.adjustValue(n))}while(this.tickValues[0]<this.minValue)this.tickValues.shift();while(this.tickValues[this.tickValues.length-1]>this.maxValue)this.tickValues.pop()})},b=function(t,i){var f,u,e=i&&"stubDataX"||"stubDataY";n.each(t,function(){f=this.axis,u=f.translator.getBusinessRange(),i?(u.minX===u.minVisibleX&&(u.minX=this.minValue),u.maxX===u.maxVisibleX&&(u.maxX=this.maxValue),u.minVisibleX=this.minValue,u.maxVisibleX=this.maxValue):(u.minY===u.minVisibleY&&(u.minY=this.minValue),u.maxY===u.maxVisibleY&&(u.maxY=this.maxValue),u.minVisibleY=this.minValue,u.maxVisibleY=this.maxValue),r.isDefined(this.stubData)&&(u[e]=this.stubData),u.minY>u.minVisibleY&&(u.minY=u.minVisibleY),u.maxY<u.maxVisibleY&&(u.maxY=u.maxVisibleY),u.minX>u.minVisibleX&&(u.minX=u.minVisibleX),u.maxX<u.maxVisibleX&&(u.maxX=u.maxVisibleX),f.translator.updateBusinessRange(u),f.setRange(u),f.setTickValues(this.tickValues)})};return{synchronize:function(t,r){var u;u=o(t),n.each(u,function(t,u){var f,o;if(u.length>1){if(f=l(u,r),f.length===0||!e(f))return;a(f),v(f),o=y(f),p(f,o),w(f),n.each(f,function(){i(this,c)}),b(f,r)}})}}}())}(jQuery,DevExpress),function(n,t){var h=t.viz.charts,f=h.series.consts.events,s=t.utils,c=s.isFunction,r=s.isDefined,u="multiple",e="single",o="allargumentpoints",l="allseriespoints",i=window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints||null,v=1e3,y=600,p=400,a="none";h.Tracker=t.Class.inherit({ctor:function(n){var t=this,i=n.events=n.events||{},r=function(n){return n&&n.call?n:null};t._reinit(n),t.pointSelectionMode=t._prepareMode(n.pointSelectionMode),t.seriesSelectionMode=t._prepareMode(n.seriesSelectionMode),t.hoverStartDelay=100,t.hoverHoldDelay=200,t.sensitivity=7,t.pointSelectionMode===u?(t._releaseSelectedPoint=t._releaseSelectedPointMultiMode,t.selectedPoint=[]):t._releaseSelectedPoint=t._releaseSelectedPointSingleMode,t.seriesSelectionMode===u?(t._releaseSelectedSeries=t._releaseSelectedSeriesMultiMode,t.selectedSeries=[]):t._releaseSelectedSeries=t._releaseSelectedSeriesSingleMode,t.tooltipEnabled=n.tooltipEnabled,t.tooltipShown=n.tooltipShown,t.tooltipHidden=n.tooltipHidden,t.seriesClick=r(i.seriesClick),t.pointClick=r(i.pointClick),t.legendClick=r(i.legendClick),t.argumentAxisClick=r(i.argumentAxisClick),t.seriesHover=r(i.seriesHover),t.seriesSelected=r(i.seriesSelected),t.pointHover=r(i.pointHover),t.seriesSelectionChanged=r(i.seriesSelectionChanged),t.pointSelectionChanged=r(i.pointSelectionChanged),t.seriesHoverChanged=r(i.seriesHoverChanged),t.pointHoverChanged=r(i.pointHoverChanged),t.pointSelected=r(i.pointSelected),t.renderer=n.renderer,t.seriesTrackerGroup=n.seriesTrackerGroup,t.markerTrackerGroup=n.markerTrackerGroup,t.seriesGroup=n.seriesGroup,t.legendGroup=n.legendGroup;t.seriesGroup.on(f.selectSeries,{tracker:t},t._selectSeries);t.seriesGroup.on(f.deselectSeries,{tracker:t},t._deselectSeries);t.seriesGroup.on(f.selectPoint,{tracker:t},t._selectPoint);t.seriesGroup.on(f.deselectPoint,{tracker:t},t._deselectPoint);t.seriesGroup.on(f.showPointTooltip,{tracker:t},t._showPointTooltip);t.seriesGroup.on(f.hidePointTooltip,{tracker:t},t._hidePointTooltip);t.crossHairOptions=n.crossHairOptions},_clean:function(){var n=this;n.selectedPoint=n.pointSelectionMode===u?[]:null,n.selectedSeries=n.seriesSelectionMode===u?[]:null,n.hoveredPoint=null,n.hoveredSeries=null,n._hideTooltip(n.pointAtShownTooltip),clearTimeout(n.tooltipHoldTimeout),clearTimeout(n.hoverStartTimeOut),clearTimeout(n.hoverHoldTimeOut)},_reinit:function(n){n=n||{},this.storedSeries=n.series||[],this.argumentAxis=n.argumentAxis||[],this._clean()},dispose:function(){var t=this;clearTimeout(t.tooltipHoldTimeout),clearTimeout(t.hoverStartTimeOut),clearTimeout(t.hoverHoldTimeOut),clearTimeout(t.unlockMouseTimer),clearTimeout(t.lockClickTimer),n.each(t.argumentAxis,function(n,t){t._axisElementsGroup&&t._axisElementsGroup.off()}),t.seriesTrackerGroup.off(),t.markerTrackerGroup.off(),t.legendGroup.off(),t.seriesGroup.off(),t.rootTracker&&t.rootTracker.off(),t.argumentAxis=null,t.seriesTrackerGroup=null,t.markerTrackerGroup=null,t.legendGroup=null,t.seriesGroup=null,t.crossHairOptions=null,t.selectedPoint=null,t.selectedSeries=null,t.hoveredSeries=null,t.hoveredPoint=null,t.storedSeries=null,t.argumentAxis=null,t.hoveredObject=null,t.pointAtShownTooltip=null},_prepareMode:function(n){return n=(n||"").toLowerCase(),n=n!==e&&n!==u?e:n},_prepare:function(t){var i=this;i.rootTracker=i.renderer.getRoot(),n.each(i.argumentAxis,function(n,t){i._eventHandler(t._axisElementsGroup,{parser:i._getOptionsAxis,condition:i._axisCondition,execute:i._axisEvent},{tracker:i,axis:t})}),i._eventHandler(i.seriesTrackerGroup,{parser:i._getOptionsPointSeries,condition:i._seriesCondition,execute:i._seriesEvent},{tracker:i}),i._eventHandler(i.markerTrackerGroup,{parser:i._getOptionsPointSeries,condition:i._pointCondition,execute:i._pointEvent},{tracker:i}),i._eventHandler(i.legendGroup,{parser:i._getOptionsPointSeries,condition:i._getLegendCondition(t),execute:i._getLegendEvent(t)},{tracker:i}),i._eventHandler(i.rootTracker,{parser:i._getOptionsCrossHair,execute:i._crossHairEvent},{tracker:i})},_getLegendCondition:function(n){var t;return t=n==="pieChart"?this._pointCondition:this._seriesCondition},_getLegendEvent:function(t){var r=this,i;return i=t==="pieChart"?n.extend({},this._pointEvent,{touchend:function(n,t,i,r){n.showHoldTooltip||n._legendClick(n,t,!0,r)||n._pointClick(n,t,!0,r),clearTimeout(n.tooltipHoldTimeout),n._clickLock(n),n._clearHover(n)},click:function(n,t,i,r){n._legendClick(n,t,!1,r)||n._pointClick(n,t,!1,r),n._clickLock(n)}}):n.extend({},this._seriesEvent,{click:function(n,t,i,r){n._legendClick(n,t,!1,r)||n._seriesClick(n,t,!1,r),n._clickLock(n)},touchend:function(n,t,i,r){n._legendClick(n,t,!0,r)||n._seriesClick(n,t,!0,r),n._clickLock(n)}})},_eventHandler:function(n,t,i){var r=this._designerHandlers(t);n.off(".dxc-tracker");n.on(r,i)},_designerHandlers:function(t){var r={},u=t.parser,i=t.condition,f=t.execute,e=function(n,t){i&&i[n]===null||(r[n+".dxc-tracker"]=function(r){var f=u?u(r):r;f&&(i&&i[n]&&i[n].call?i[n].apply(null,f.concat([t])):t.apply(null,f))})};return n.each(f,e),r},_getOptionsCrossHair:function(n){var t=n.data.tracker,i=s.getRootOffset(t.renderer),r=n.pageX-i.left,u=n.pageY-i.top;return[t,r,u]},_getOptionsPointSeries:function(t){var i=n(t.target).data("point")||n(t.target).data("series"),r=t.data.tracker,u=i&&(n(t.target).data("mode")||i.options.hoverMode);return t.type==="mousemove"?[r,t.pageX,t.pageY,t.offsetX,t.offsetY]:i?[r,i,u,t]:null},_getOptionsAxis:function(t){var u=t.data.tracker,i=t.data.axis,f=i.options.hoverMode,r;return(r=t.target.tagName==="tspan"?n(t.target).parent().data("argument"):n(t.target).data("argument"),t.type==="mousemove")?[u,t.pageX,t.pageY]:i?[u,i,f,r,t]:null},_pointEvent:{mouseover:function(n,t,i){n.mouseLocked||(n._setHoveredPoint(t,i),n.tooltipEnabled&&t&&t.options&&n._showTooltip(n.tooltip,t))},mouseout:function(n){n.mouseLocked||n._clearHover(n)},touchmove:function(n){clearTimeout(n.tooltipHoldTimeout),n.tooltipHoldTimeout=null,n.showHoldTooltip=!0},mousemove:function(n,t,i){n._getCurCoords(n,t,i)},touchstart:function(n,t){n.showHoldTooltip=!1,n._mouseLock(n),n.tooltipEnabled&&(n.tooltipHoldTimeout=setTimeout(function(){n.showHoldTooltip=!0,n._showTooltip(n.tooltip,t)},p))},touchend:function(n,t,i,r){n.showHoldTooltip||n._pointClick(n,t,!0,r),clearTimeout(n.tooltipHoldTimeout),n._clickLock(n),n._clearHover(n)},click:function(n,t,i,r){n._pointClick(n,t,!1,r)},mousedown:function(n,t,i){n._pointEvent.touchstart(n,t,i)},mouseup:function(n,t,i,r){n._pointEvent.touchend(n,t,i,r)}},_pointCondition:{mouseover:function(n,t,i,r,u){if(i===o&&n.hoveredPoint&&n.hoveredPoint.argument===t.argument){n.hoverHoldTimeOut=clearTimeout(n.hoverHoldTimeOut),n.hoveredObject=t,u(n,t,i);return}n._setHover(n,t,i,u)},mouseout:function(n,t,i,r,u){n._releaseHover(n,t,i,u)},touchstart:!i,touchend:!i,mousedown:i,mouseup:i},_seriesEvent:{mouseover:function(n,t,i){n.mouseLocked||n._setHoveredSeries(t,i)},mouseout:function(n){n._clearHover(n)},mousemove:function(n,t,i){n._getCurCoords(n,t,i)},touchstart:function(n){n._mouseLock(n)},touchend:function(n,t,i,r){n._seriesClick(n,t,!0,r),n._clickLock(n)},click:function(n,t,i,r){n._seriesClick(n,t,!1,r)},mousedown:function(n,t,i){n._seriesEvent.touchstart(n,t,i)},mouseup:function(n,t,i){n._seriesEvent.touchend(n,t,i)}},_crossHairEvent:{mousemove:function(n,t,i){if(n.eventType){if(n.eventType==="touch")return;n.eventType==="mouse"&&(n._moveCrossHair(n,t,i),n.eventType=null)}else{n.eventType="mouse";return}},mouseout:function(n){n._hideCrossHair(n),n.eventType=null},touchstart:function(n){n.eventType="touch"},touchend:function(n){n.eventType=null},mousedown:function(n,t,i){n._crossHairEvent.touchstart(n,t,i)},mouseup:function(n,t,i){n._crossHairEvent.touchend(n,t,i)}},_hideCrossHair:function(n){if(n.crossHairOptions){var t=n.crossHairOptions.horizontalLine,i=n.crossHairOptions.verticalLine;t&&t.applySettings({visibility:"hidden"}),i&&i.applySettings({visibility:"hidden"})}},_moveCrossHair:function(n,t,i){if(n.crossHairOptions){var u=n.crossHairOptions.horizontalLine,f=n.crossHairOptions.verticalLine,r=n.crossHairOptions.canvas||{};t>r.left&&t<r.width-r.right&&i>r.top&&i<r.height-r.bottom?(u&&u.applySettings({visibility:"visible"}),f&&f.applySettings({visibility:"visible"}),u&&u.applySettings({translateY:i-r.top}),f&&f.applySettings({translateX:t-r.left})):(u&&u.applySettings({visibility:"hidden"}),f&&f.applySettings({visibility:"hidden"}))}},_seriesCondition:{mouseover:function(n,t,i,r,u){n._setHover(n,t,i,u)},mouseout:function(n,t,i,r,u){n._releaseHover(n,t,i,u)},touchstart:!i,touchend:!i,mousedown:i,mouseup:i},_axisEvent:{mouseover:function(t,i,u){t.mouseLocked||r(t.hoveredArgument)&&t.hoveredArgument===u||(t._clearHover(t),r(t.hoveredArgument)&&t._toAllArgumentPoints(t.hoveredArgument,"releasePointHoverState"),t._toAllArgumentPoints(u,"setPointHoverState"),t.hoveredArgument=u,n(i).trigger("testmousehoveraxis"))},mouseout:function(n){!n.mouseLocked&&r(n.hoveredArgument)&&(n._toAllArgumentPoints(n.hoveredArgument,"releasePointHoverState"),n.hoveredArgument=null)},mousemove:function(n,t,i){n._getCurCoords(n,t,i)},touchstart:function(n){n._mouseLock(n)},touchend:function(n,t,i,r,u){n._argumentAxisClick(n,t,r,!0,u),n._clearHover(n),n._clickLock(n)},click:function(n,t,i,r,u){n._clearHover(n),n._argumentAxisClick(n,t,r,!1,u),n._clickLock(n)},mousedown:function(n){n._axisEvent.touchstart(n)},mouseup:function(n,t,i,r,u){n._axisEvent.touchend(n,t,i,r,u)}},_axisCondition:{mouseover:function(n,t,i,r,u,f){n._hideCrossHair(n),i===o&&n._setHover(n,t,r,f)},mouseout:function(n,t,i,r,u,f){n._releaseHover(n,t,r,f)},touchstart:!i,touchend:!i,mousedown:i,mouseup:i},_setHover:function(n,t,i,r){(t!==n.hoveredObject||(n.hoverHoldTimeOut=clearTimeout(n.hoverHoldTimeOut),i!==t.lastHoverMode))&&(n.mouseLocked||(n.hoverStartTimeOut=setTimeout(function(){n._compareCoords(t,n,i,r)},n.hoverStartDelay)))},_releaseHover:function(n,t,i,r){n.mouseLocked||(n.hoverStartTimeOut=clearTimeout(n.hoverStartTimeOut),t===n.hoveredObject&&(n.hoverHoldTimeOut=setTimeout(function(){n.hoveredObject=null,r(n,t,i)},n.hoverHoldDelay)))},_compareCoords:function(n,t,i,r){if(clearTimeout(t.hoverStartTimeOut),Math.abs(t.pX-t.cX)+Math.abs(t.pY-t.cY)<t.sensitivity){if(t.mouseLocked)return;clearTimeout(t.hoverHoldTimeOut),t.hoveredObject=n,r(t,n,i)}else t.pX=t.cX,t.pY=t.cY,t.hoverStartTimeOut=setTimeout(function(){t._compareCoords(n,t,i,r)},t.hoverStartDelay)},_seriesClick:function(n,t,i,r){(!n.lockClick||i)&&n.seriesClick&&n.seriesClick.call(t,t,r)},_legendClick:function(n,t,i,r){var u=n.legendClick;return n.lockClick&&!i?!0:u?(u.call(t,t,r),!0):!1},_pointClick:function(n,t,i,r){var u=t.series;if(!n.lockClick||i){if(n.pointClick){n.pointClick.call(t,t,r);return}n.seriesClick&&n.seriesClick.call(u,u,r);return}},_argumentAxisClick:function(n,t,i,r,u){(!n.lockClick||r)&&n.argumentAxisClick&&n.argumentAxisClick.call(t,t,i,u)},_selectSeries:function(n,t){n.data.tracker._setSelectedSeries(n.target,t)},_deselectSeries:function(n,t){n.data.tracker._releaseSelectedSeries(n.target,t)},_selectPoint:function(n,t){n.data.tracker._setSelectedPoint(t)},_deselectPoint:function(n,t){n.data.tracker._releaseSelectedPoint(t)},_showPointTooltip:function(n,t){var i=n.data.tracker;i._showTooltip(i.tooltip,t)},_hidePointTooltip:function(n,t){n.data.tracker._hideTooltip(t)},_hideTooltip:function(n){var t=this&&this.tooltip;t&&(!n||this.pointAtShownTooltip===n)&&(n=n||this.pointAtShownTooltip,t.hide(),this.pointAtShownTooltip&&(this.pointAtShownTooltip=null,c(this.tooltipHidden)&&this.tooltipHidden.call(n,n)))},_showTooltip:function(n,t){var u=t.getTooltipFormatObject(n),i,f;if((r(u.valueText)||u.points)&&(this.pointAtShownTooltip&&this._hideTooltip(this.pointAtShownTooltip),t&&t.options)){if(i=t.getTooltipCoords(),f=n.formatTooltip.call(u,n.options),!r(f)||!r(i.x)||!r(i.y)||!n)return;n.show(),n.move(~~i.x,~~i.y,i.offset,f,t.getColor(),t.getClassName()),!this.pointAtShownTooltip&&c(this.tooltipShown)&&this.tooltipShown.call(t,t),this.pointAtShownTooltip=t}},_setHoveredSeries:function(n,t){var i=this;(t!==a&&i.hoveredSeries!==n||n.lastHoverMode!==t)&&(i._clearHover(i),i.hoveredSeries=n,n.setHoverState(t),i.seriesHover&&i.seriesHover.call(n,n),i.seriesHoverChanged&&i.seriesHoverChanged.call(n,n))},_setSelectedSeries:function(t,i){var r=this,f=!1;this.seriesSelectionMode===u?n.each(r.selectedSeries,function(n,i){if(i==t)return f=!0,!1}):r.selectedSeries==t&&(f=!0),f&&t.lastSelectionMode===i||(r.seriesSelectionMode===e?(this._releaseSelectedSeries(),r.selectedSeries=t):r.selectedSeries.push(t),t.setSelectedState(i),r.seriesSelected&&r.seriesSelected.call(t,t),r.seriesSelectionChanged&&r.seriesSelectionChanged.call(t,t))},_setHoveredPoint:function(n,t){var i=this;(i.hoveredPoint!==n||n.series)&&(i._clearHover(i),i.hoveredPoint=n,n&&n.options&&i._setHoverStylePointWithMode(n,"setPointHoverState",t||n.options.hoverMode,i.pointHoverChanged),i.pointHover&&i.pointHover.call(n,n))},_toAllArgumentPoints:function(t,i,r){var u=this;n.each(u.storedSeries,function(n,u){var f=u.getPointByArg(t);f&&(u[i](f),r&&r.call(f,f))})},_setHoverStylePointWithMode:function(t,i,r,u){var f=this;switch(r){case o:this._toAllArgumentPoints(t.argument,i,u);break;case l:n.each(t.series.points,function(n,t){t.series[i](t),u&&u.call(t,t)});break;case a:break;default:t.series[i](t),u&&u.call(t,t)}},_setSelectedPoint:function(t){var i=this,r=!1;this.pointSelectionMode===u?(n.each(i.selectedPoint,function(n,i){if(i==t)return r=!0,!1}),r||i.selectedPoint.push(t)):i.selectedPoint!==t?(this._releaseSelectedPoint(),i.selectedPoint=t):r=!0,r||(i._setHoverStylePointWithMode(t,"setPointSelectedState",t.options.selectionMode,i.pointSelectionChanged),i.pointSelected&&i.pointSelected.call(t,t))},_releaseHoveredSeries:function(){this.hoveredSeries&&(this.hoveredSeries.releaseHoverState(),this.seriesHoverChanged&&this.seriesHoverChanged.call(this.hoveredSeries,this.hoveredSeries),this.hoveredSeries=null)},_releaseSelectedSeriesMultiMode:function(t){this.selectedSeries&&(t.releaseSelectedState(),this.seriesSelectionChanged&&this.seriesSelectionChanged.call(t,t),this.selectedSeries=n.map(this.selectedSeries,function(n){if(n!==t)return n}))},_releaseSelectedSeriesSingleMode:function(){var n=this.selectedSeries;n&&(n.releaseSelectedState(),this.seriesSelectionChanged&&this.seriesSelectionChanged.call(n,n),this.selectedSeries=null)},_releaseHoveredPoint:function(){var t=this,i=t.hoveredPoint;i&&i.options&&(i.options.hoverMode===l?n.each(i.series.points,function(n,i){i.series.releasePointHoverState(i),t.pointHoverChanged&&t.pointHoverChanged.call(i,i)}):i.options.hoverMode===o?t._toAllArgumentPoints(i.argument,"releasePointHoverState",t.pointHoverChanged):(i.releaseHoverState(),t.pointHoverChanged&&t.pointHoverChanged.call(i,i)),t.tooltipEnabled&&!t.showHoldTooltip&&t._hideTooltip(i),t.hoveredPoint=null)},_releaseSelectedPointMultiMode:function(t){var i=this,r=i.selectedPoint;r&&(i._setHoverStylePointWithMode(t,"releasePointSelectedState",t.options.selectionMode,i.pointSelectionChanged),this.selectedPoint=n.map(this.selectedPoint,function(n){if(n!==t)return n}))},_releaseSelectedPointSingleMode:function(){var n=this,t=n.selectedPoint;t&&(n._setHoverStylePointWithMode(t,"releasePointSelectedState",t.options.selectionMode,n.pointSelectionChanged),this.selectedPoint=null)},clearSelection:function(){var t=this;this.pointSelectionMode===e?this._releaseSelectedPoint():n.each(this.selectedPoint,function(n,i){t._releaseSelectedPoint(i)}),this.seriesSelectionMode===e?this._releaseSelectedSeries():n.each(this.selectedSeries,function(n,i){t._releaseSelectedSeries(i)})},_mouseLock:function(n){n.unlockMouseTimer&&clearTimeout(n.unlockMouseTimer),n.mouseLocked=!0,n.unlockMouseTimer=setTimeout(function(){n.mouseLocked=!1},v)},_clickLock:function(n){n.lockClick=!0,n.lockClickTimer&&clearTimeout(n.lockClickTimer),n.lockClickTimer=setTimeout(function(){n.lockClick=!1},y)},_getCurCoords:function(n,t,i){n.cX=t,n.cY=i},_clearHover:function(n){n._releaseHoveredSeries(),n._releaseHoveredPoint()}})}(jQuery,DevExpress),function(n,t){var r=t.ui,u=t.viz;r.registerComponent("dxChart",u.charts.Chart)}(jQuery,DevExpress),function(n,t){var r=t.ui,u=t.viz;r.registerComponent("dxPieChart",u.charts.PieChart)}(jQuery,DevExpress),DevExpress.MOD_VIZ_CHARTS=!0}if(!DevExpress.MOD_VIZ_GAUGES){if(!window.DevExpress)throw Error("Required module is not referenced: core");if(!DevExpress.MOD_VIZ_CORE)throw Error("Required module is not referenced: viz-core");(function(n){n.viz.gauges={__internals:{circularNeedles:{},circularMarkers:{},linearNeedles:{},linearMarkers:{}}}})(DevExpress),function(n,t,i){var r=n.viz.gauges.__internals,u=r.circularNeedles,e=r.circularMarkers,f=r.linearNeedles,o=r.linearMarkers,s=window.String,h=n.utils.isString;n.viz.gauges.__factory={createTranslator:function(t,i,r,u){return new n.viz.core.Translator1D(r,u,t,i)},createRenderer:function(t){return new n.viz.renderers.Renderer(t)},createCircularValueIndicator:function(n){var t=u.RectangleNeedle;switch(s(n).toLowerCase()){case"rectangleneedle":case"rectangle":t=u.RectangleNeedle;break;case"triangleneedle":case"triangle":t=u.TriangleNeedle;break;case"twocolorneedle":case"twocolorrectangle":t=u.TwoColorRectangleNeedle;break;case"rangebar":t=r.CircularRangeBar}return new t},createLinearValueIndicator:function(n){var t=r.LinearRangeBar;switch(s(n).toLowerCase()){case"rectangle":t=f.RectangleNeedle;break;case"rhombus":t=f.RhombusNeedle;break;case"circle":t=f.CircleNeedle;break;case"rangebar":t=r.LinearRangeBar}return new t},createCircularSubvalueIndicator:function(n){var t=e.TriangleMarker;switch(s(n).toLowerCase()){case"trianglemarker":case"triangle":t=e.TriangleMarker;break;case"textcloud":t=e.TextCloudMarker}return new t},createLinearSubvalueIndicator:function(n){var t=o.TriangleMarker;switch(s(n).toLowerCase()){case"trianglemarker":case"triangle":t=o.TriangleMarker;break;case"textcloud":t=o.TextCloudMarker}return new t},createCircularValueIndicatorInHardMode:function(n){var t=null;switch(s(n).toLowerCase()){case"rectangleneedle":t=u.RectangleNeedle;break;case"triangleneedle":t=u.TriangleNeedle;break;case"twocolorneedle":t=u.TwoColorRectangleNeedle;break;case"rangebar":t=r.CircularRangeBar;break;case"trianglemarker":t=e.TriangleMarker;break;case"textcloud":t=e.TextCloudMarker}return t?new t:null},createLinearValueIndicatorInHardMode:function(n){var t=null;switch(s(n).toLowerCase()){case"rectangle":t=f.RectangleNeedle;break;case"rhombus":t=f.RhombusNeedle;break;case"circle":t=f.CircleNeedle;break;case"rangebar":t=r.LinearRangeBar;break;case"trianglemarker":t=o.TriangleMarker;break;case"textcloud":t=o.TextCloudMarker}return t?new t:null},createCircularNeedle:function(n){if(h(n))switch(n.toLowerCase()){case"rectangleneedle":case"rectangle":return new u.RectangleNeedle;case"twocolorneedle":case"twocolorrectangle":return new u.TwoColorRectangleNeedle;case"triangleneedle":case"triangle":return new u.TriangleNeedle;case"rangebar":return new r.CircularRangeBar}return i},createLinearNeedle:function(n){if(h(n))switch(n.toLowerCase()){case"rectangle":return new f.RectangleNeedle;case"rhombus":return new f.RhombusNeedle;case"circle":return new f.CircleNeedle;case"rangebar":return new r.LinearRangeBar}return i},createCircularMarker:function(n){if(h(n))switch(n.toLowerCase()){case"trianglemarker":case"triangle":return new e.TriangleMarker;case"textcloud":return new e.TextCloudMarker}return i},createLinearMarker:function(n){if(h(n))switch(n.toLowerCase()){case"trianglemarker":case"triangle":return new o.TriangleMarker;case"textcloud":return new o.TextCloudMarker}return i},createCircularRangeBar:function(){return new r.CircularRangeBar},createLinearRangeBar:function(){return new r.LinearRangeBar},createCircularScale:function(){return new r.CircularScale},createLinearScale:function(){return new r.LinearScale},createCircularRangeContainer:function(){return new r.CircularRangeContainer},createLinearRangeContainer:function(){return new r.LinearRangeContainer},createTitle:function(){return new r.Title},createIndicator:function(){return r.Indicator&&new r.Indicator||null},createTooltip:function(n){return new r.Tooltip(n)},createLayoutManager:function(){return new r.LayoutManager},createThemeManager:function(n){return new r.ThemeManager(n)},createTracker:function(n){return new r.Tracker(n)}};var c=n.utils.isFunction,s=window.String,l=t.extend,a=n.formatHelper;r.formatValue=function(n,t,i){var r,u;return(t=t||{},r=a.format(n,t.format,t.precision),c(t.customizeText))?(u=l({value:n,valueText:r},i),s(t.customizeText.call(u,u))):r},r.getSampleText=function(n,t){var i=r.formatValue(n.getDomainStart(),t),u=r.formatValue(n.getDomainEnd(),t);return i.length>=u.length?i:u}}(DevExpress,jQuery),function(n,t,i){function h(n,t){var i=0,r=t.length-1,e=t[i]-t[r]<0,u,f=-1;for(t[i]===n&&(f=i),t[r]===n&&(f=r);f<0&&i<=r;)u=~~((i+r)/2),t[u]===n?f=u:t[u]-n<0===e?i=u+1:r=u-1;return f}function rt(n,t){var i,r,f;return n>t&&(f=t,t=n,n=f),i=0<=n&&n<=180?u(90-n):u(270-n),i=n<90&&90<t||n<270&&270<t?0:i,r=0<t&&t<180?u(90-t):u(270-t),i<r?i:r}var w=n.formatHelper,c=n.utils.getCosAndSin,l=n.utils.normalizeAngle,b=n.utils.convertAngleToRendererSpace,a=n.utils.isDefined,v=n.utils.isString,k=n.utils.isFunction,e=n.utils.isArray,d=window.isNaN,r=window.Number,g=window.String,o=Math.max,ut=Math.min,u=Math.abs,nt=Math.atan,tt=Math.acos,y=Math.ceil,it=t.extend,f=t.map,s=Math.PI,p=n.viz.core.tickProvider;n.viz.gauges.__internals.BaseScale=n.Class.inherit({setup:function(n){var t=this;return t._renderer=n.renderer,t._translator=n.translator,t._owner=n.owner,t._incidentOccured=n.incidentOccured,t._rootElement=t._renderer.createGroup({"class":"dxg-scale"}),t._majorTicks=t._renderer.createGroup({"class":"dxg-major-ticks"}).append(t._rootElement),t._minorTicks=t._renderer.createGroup({"class":"dxg-minor-ticks"}).append(t._rootElement),t._labels=t._renderer.createGroup({"class":"dxg-labels"}).append(t._rootElement),t._options={},t},dispose:function(){var n=this;return delete n._renderer,delete n._translator,delete n._owner,delete n._incidentOccured,delete n._rootElement,delete n._majorTicks,delete n._minorTicks,delete n._labels,delete n._options,n},init:function(n){var t=this;return it(!0,t._options,n),t._options.majorTick||(t._options.majorTick={}),t._options.minorTick||(t._options.minorTick={}),n&&n.majorTick&&a(n.majorTick.customTickValues)&&(t._options.majorTick.customTickValues=e(n.majorTick.customTickValues)?n.majorTick.customTickValues.slice(0):null),n&&n.minorTick&&a(n.minorTick.customTickValues)&&(t._options.minorTick.customTickValues=e(n.minorTick.customTickValues)?n.minorTick.customTickValues.slice(0):null),delete t._processed,t},_getCustomValues:function(n,t){var u=this._translator,i=[];return e(n)&&(i=f(n,function(n){return d(u.translate(n))?null:r(n)}).sort(t),i=f(i,function(n,t){return n!==i[t-1]?n:null})),i},_generateTicks:function(){var n=this,u=n._translator,f=n._getGridSpacingFactor(),t={tickInterval:n._options.majorTick.tickInterval>0?r(n._options.majorTick.tickInterval):i,gridSpacingFactor:f.majorTicks,numberMultipliers:[1,2,5]},e={tickInterval:n._options.minorTick.tickInterval>0?r(n._options.minorTick.tickInterval):i,gridSpacingFactor:f.minorTicks,numberMultipliers:[1,2,5]},o;return n._options.majorTick.useTicksAutoArrangement&&(t.useTicksAutoArrangement=!0,t.renderer=n._renderer,t.translator={translateX:function(n){return u.translate(n)}},t.getCustomAutoArrangementStep=function(t){return n._getCuttingFactor(t.length,{width:n._textWidth,height:n._textHeight})}),o=p.getFullTicks(u.getDomainStart(),u.getDomainEnd(),n._getScreenDelta(),t,e),n=u=t=e=null,o},_getTicks:function(){var t=this,r=t._options,u=t._translator,s=u.getDomainStart()<u.getDomainEnd()?function(n,t){return n-t}:function(n,t){return t-n},c=t._generateTicks(),e,i,n,o,l;return e=r.majorTick.showCalculatedTicks?c.majorTicks:[],n=t._getCustomValues(r.majorTick.customTickValues,s),n=f(n,function(n){return h(n,e)===-1?n:null}),i=r.minorTick.showCalculatedTicks?c.minorTicks:[],i=f(i,function(t){return h(t,n)===-1?t:null}),o=t._getCustomValues(r.minorTick.customTickValues,s),l=e.concat(i,n).sort(s),o=f(o,function(n){return h(n,l)===-1?n:null}),{major:f(e.concat(n),function(n){return{value:n,position:u.translate(n)}}),minor:f(i.concat(o),function(n){return{value:n,position:u.translate(n)}})}},_renderContent:function(n){var t=this,r=t._options,i,u,f,e,o,h,s;if(t._majorTickLength&&t._majorTickWidth)for(t._majorTicks.applySettings({fill:v(r.majorTick.color)?r.majorTick.color:"none"}),e=t._getTickPoints(t._majorTickLength,t._majorTickWidth),i=0,u=n.major.length,r.hideFirstTick===!0&&++i,r.hideLastTick===!0&&--u;i<u;++i)f=n.major[i],o=t._renderer.createArea(e),t._moveTick(o,f),o.append(t._majorTicks);if(t._minorTickLength&&t._minorTickWidth)for(t._minorTicks.applySettings({fill:v(r.minorTick.color)?r.minorTick.color:"none"}),e=t._getTickPoints(t._minorTickLength,t._minorTickWidth),i=0,u=n.minor.length;i<u;++i)f=n.minor[i],o=t._renderer.createArea(e),t._moveTick(o,f),o.append(t._minorTicks);if(t._textIndent)for(t._labels.applySettings({align:t._getLabelAlign(t._textIndent),font:r.label.font}),h=t._getLabelPosition(t._majorTickLength||0,t._textIndent),i=0,u=n.major.length,r.hideFirstLabel===!0&&++i,r.hideLastLabel===!0&&--u;i<u;++i)f=n.major[i],s=t._formatValue(f.value),e=t._getLabelOptions(s,h,t._textIndent,f),t._renderer.createText(s,e.x,e.y+t._textVerticalOffset).append(t._labels)},_processOptions:function(){var n=this,t=n._options;n._processed||(n._processed=!0,n._setupOrientation(),n._majorTickLength=n._majorTickWidth=n._minorTickLength=n._minorTickWidth=n._textIndent=0,t.majorTick.visible&&(t.majorTick.length>0?n._majorTickLength=r(t.majorTick.length):n._incidentOccured('Major ticks have not been drawn because the value of the "majorTick.length" option is not valid.'),t.majorTick.width>0?n._majorTickWidth=r(t.majorTick.width):n._incidentOccured('Major ticks have not been drawn because the value of the "majorTick.width" option is not valid.')),t.minorTick.visible&&(t.minorTick.length>0?n._minorTickLength=r(t.minorTick.length):n._incidentOccured('Minor ticks have not been drawn because the value of the "minorTick.length" option is not valid.'),t.minorTick.width>0?n._minorTickWidth=r(t.minorTick.width):n._incidentOccured('Minor ticks have not been drawn because the value of the "minorTick.width" option is not valid.')),t.label.visible&&(r(t.label.indentFromTick)!==0?(n._textIndent=r(t.label.indentFromTick),n._measureText()):n._incidentOccured('Labels have not been drawn because the value of the "label.indentFromTick"" option is not valid.')))},clean:function(){var n=this;return n._rootElement.detach(),n._majorTicks.clear(),n._minorTicks.clear(),n._labels.clear(),n._rendered=!1,n},render:function(){var n=this,t;return n._processOptions(),n._isVisible()&&(n._rendered=!0,n._rootElement.append(n._owner),t=n._getTicks(),n._renderContent(t)),n},_formatValue:function(n){var i=this._options.label,t=w.format(n,i.format,i.precision);return k(i.customizeText)&&(t={value:n,valueText:t},t=g(i.customizeText.call(t,t))),t},_getSampleText:function(){for(var n=this,h=n._translator.getDomainStart(),c=n._translator.getDomainEnd(),l=[],t,f=0,e="",o=p.getTicks({min:h,max:c,tickInterval:n._options.majorTick.tickInterval>0?r(n._options.majorTick.tickInterval):i,screenDelta:n._options.approximateScreenDelta,gridSpacingFactor:n._getGridSpacingFactor().majorTicks}),u=0,s=o.length;u<s;++u)t=n._formatValue(o[u]),t.length>f&&(e=t)&&(f=t.length);return e},_measureText:function(){var n=this,i=n._getSampleText(),r=n._renderer.createText(i,0,0,{font:n._options.label.font}).append(n._labels),t;n._rendered||n._rootElement.append(n._owner),t=r.getBBox(),n._rendered||n._rootElement.detach(),r.remove(),n._textVerticalOffset=-t.y-t.height/2,n._textWidth=t.width,n._textHeight=t.height,n._textLength=i.length}}),n.viz.gauges.__internals.CircularScale=n.viz.gauges.__internals.BaseScale.inherit({_getGridSpacingFactor:function(){return{majorTicks:17,minorTicks:5}},_getScreenDelta:function(){var n=this;return(n._translator.getCodomainStart()-n._translator.getCodomainEnd())*n._options.radius*s/180},_getCuttingFactor:function(n,t){var i=this,it=i._options,w=i._translator.getCodomainStart(),b=i._translator.getCodomainEnd(),f=i._getLabelPosition(i._majorTickLength||0,i._textIndent),e=rt(l(w),l(b)),h=c(e),k=(w-b)/n,a,v,d,p,r,g=1;return d=(h.sin*f+t.width)/(h.cos*f),v=u(e-nt(d)*180/s),r=h.cos-t.height/f,p=-1>r||r>1?90:u(e-tt(r)*180/s),a=v<p?v:p,k<a&&(g=y(a/k)),o(1,g)},_setupOrientation:function(){var n=this,t=0,i=0;switch(n._options.orientation){case"inside":t=1;break;case"center":t=i=.5;break;default:n._options.orientation!=="outside"&&n._incidentOccured('The value of the "orientation" option is not valid.'),i=1}n._inner=t,n._outer=i},_getTickPoints:function(n,t){var i=this._options,r=i.x-t/2,u=i.x+t/2,f=i.y-i.radius-n*this._outer,e=i.y-i.radius+n*this._inner;return[r,f,u,f,u,e,r,e]},_moveTick:function(n,t){n.rotate(b(t.position),this._options.x,this._options.y)},_getLabelPosition:function(n,t){return this._options.radius+n*(t>=0?this._outer:-this._inner)+t},_getLabelAlign:function(){return"center"},_getLabelOptions:function(n,t,i,r){var u=this,s=u._options,f=c(r.position),e=s.x+f.cos*t,o=s.y-f.sin*t,h=f.cos*(n.length/u._textLength)*u._textWidth/2,l=f.sin*u._textHeight/2;return i>0?(e+=h,o-=l):(e-=h,o+=l),{x:e,y:o}},_isVisible:function(){var n=this,t=n._majorTickLength||0,i=n._options.radius,r=i-n._inner*t,u=i+n._outer*t;return r>0&&u>r},measure:function(){var n=this,i=n._options,t={min:i.radius,max:i.radius};return n._processOptions(),n._majorTickLength&&(t.min-=n._inner*n._majorTickLength,t.max+=n._outer*n._majorTickLength),n._textIndent&&(n._textIndent>=0?(t.horizontalOffset=n._textIndent+n._textWidth,t.verticalOffset=n._textIndent+n._textHeight):(t.horizontalOffset=0,t.verticalOffset=0,t.min+=n._textIndent-o(n._textWidth,n._textHeight)),t.inverseHorizontalOffset=n._textWidth/2,t.inverseVerticalOffset=n._textHeight/2),t}}),n.viz.gauges.__internals.LinearScale=n.viz.gauges.__internals.BaseScale.inherit({_getGridSpacingFactor:function(){return{majorTicks:25,minorTicks:5}},_getScreenDelta:function(){return u(this._translator.getCodomainEnd()-this._translator.getCodomainStart())},_getCuttingFactor:function(n,t){var i=this,r=i._vertical?t.height:t.width,f=u(i._translator.getCodomainEnd()-i._translator.getCodomainStart());return o(1,y(n*r/(f+r)))},_setupOrientation:function(){var n=this,t=0,i=0;if(n._vertical=n._options.orientation==="vertical",n._vertical)switch(n._options.horizontalOrientation){case"left":t=1;break;case"center":t=i=.5;break;default:n._options.horizontalOrientation!=="right"&&n._incidentOccured('The value of the "horizontalOrientation" option is not valid.'),i=1}else switch(n._options.verticalOrientation){case"top":t=1;break;case"middle":t=i=.5;break;default:n._options.verticalOrientation!=="bottom"&&n._incidentOccured('The value of the "verticalOrientation" option is not valid.'),i=1}n._inner=t,n._outer=i},_getTickPoints:function(n,t){var i=this._options,r,u,f,e;return this._vertical?(r=i.x-n*this._inner,u=i.x+n*this._outer,f=-t/2,e=t/2):(r=-t/2,u=t/2,f=i.y-n*this._inner,e=i.y+n*this._outer),[r,f,u,f,u,e,r,e]},_moveTick:function(n,t){var u=this._options,i=0,r=0;this._vertical?r=t.position:i=t.position,n.move(i,r)},_getLabelPosition:function(n,t){var r=this._options,i=n*(t>=0?this._outer:-this._inner)+t;return i+=this._vertical?r.x:r.y+(t>=0?1:-1)*this._textVerticalOffset},_getLabelAlign:function(n){return this._vertical?n>0?"left":"right":"center"},_getLabelOptions:function(n,t,i,r){var u,f;return this._vertical?(u=t,f=r.position):(u=r.position,f=t),{x:u,y:f}},_isVisible:function(){return!0},measure:function(){var n=this,i=n._options,t;return n._processOptions(),n._vertical?(t={min:i.x,max:i.x},n._majorTickLength&&(t.min-=n._inner*n._majorTickLength,t.max+=n._outer*n._majorTickLength),n._textIndent&&(n._textIndent>=0?t.max+=n._textIndent+n._textWidth:t.min+=n._textIndent-n._textWidth,t.indent=n._textHeight/2)):(t={min:i.y,max:i.y},n._majorTickLength&&(t.min-=n._inner*n._majorTickLength,t.max+=n._outer*n._majorTickLength),n._textIndent&&(n._textIndent>=0?t.max+=n._textIndent+n._textHeight:t.min+=n._textIndent-n._textHeight,t.indent=n._textWidth/2)),t}})}(DevExpress,jQuery),function(n,t){var r=window.isFinite,u=window.Number,f=t.extend;n.viz.gauges.__internals.BaseIndicator=n.Class.inherit({setup:function(n){var t=this;return t._renderer=n.renderer,t._translator=n.translator,t._owner=n.owner,t._tracker=n.tracker,t._className=n.className,t._options={},t._rootElement=t._createRoot(),t},dispose:function(){var n=this;return n._renderer=n._owner=n._translator=n._tracker=n._options=n._rootElement=null,n},init:function(n){return f(!0,this._options,n),this},_setupAnimation:function(){var n=this;n._options.animation?(n._animation||(n._animation={step:function(t){n._actualValue=n._animation.start+n._animation.delta*t,n._actualPosition=n._translator.translate(n._actualValue),n._move()}}),n._animation.duration=n._options.animation.duration>0?u(n._options.animation.duration):0,n._animation.easing=n._options.animation.easing):delete n._animation},_runAnimation:function(n){var i=this,t=i._animation;t.start=i._actualValue,t.delta=n-i._actualValue,i._rootElement.animate({_:0},{step:t.step,duration:t.duration,easing:t.easing})},_createRoot:function(){return this._renderer.createGroup({"class":this._className})},_createTracker:function(){return this._renderer.createArea()},_getTrackerSettings:function(){},clean:function(){var n=this;return n._animation&&n._rootElement.stopAnimation()&&(n._animation=null),n._rootElement.detach(),n._rootElement.clear(),n._visible=!1,n._clear(),n._trackerElement&&(n._tracker.detach(n._trackerElement),n._trackerElement=null),n},render:function(){var n=this;return n._actualValue=n._currentValue=n._translator.adjust(n._options.currentValue),n._actualPosition=n._translator.translate(n._actualValue),n._visible=n._isVisible(),n._visible&&(n._setupAnimation(),n._rootElement.applySettings({fill:n._options.color}),n._rootElement.append(n._owner),n._render(),n._trackerElement=n._trackerElement||n._createTracker(),n._trackerElement.applySettings(n._getTrackerSettings()),n._tracker.attach(n._trackerElement,n,n._trackerInfo),n._move()),n},update:function(n){return this.init(n),this._update(),this},_update:t.noop,value:function(n,t){var i=this,u;return arguments.length?(u=i._translator.adjust(n),i._currentValue!==u&&r(u)&&(i._currentValue=u,i._visible&&(i._animation&&!t?i._runAnimation(u):(i._actualValue=u,i._actualPosition=i._translator.translate(u),i._move()))),i):i._currentValue}})}(DevExpress,jQuery),function(n){var i=n.viz.core.TextCloud,r=n.viz.gauges.__internals.formatValue,u=n.viz.gauges.__internals.getSampleText;n.viz.gauges.__internals.BaseTextCloudMarker=n.viz.gauges.__internals.BaseIndicator.inherit({_move:function(){var n=this,u,t=new i,f=n._getTextCloudOptions();n._text.applySettings({text:r(n._actualValue,n._options.text)}),u=n._text.getBBox(),t.setup({x:f.x,y:f.y,textWidth:u.width,textHeight:u.height,horMargin:n._options.horizontalOffset,verMargin:n._options.verticalOffset,tailLength:n._options.arrowLength,type:f.type}),n._text.applySettings({x:t.cx(),y:t.cy()+n._textVerticalOffset}),n._cloud.applySettings({points:t.points()}),n._trackerElement&&n._trackerElement.applySettings({points:t.points()})},_measureText:function(){var n=this,i,r,t;n._textVerticalOffset||(i=n._createRoot().append(n._owner),r=n._renderer.createText(u(n._translator,n._options.text),0,0,{align:"center",font:n._options.text.font}).append(i),t=r.getBBox(),i.remove(),n._textVerticalOffset=-t.y-t.height/2,n._textWidth=t.width,n._textHeight=t.height,n._textFullWidth=n._textWidth+2*n._options.horizontalOffset,n._textFullHeight=n._textHeight+2*n._options.verticalOffset)},_render:function(){var n=this;n._measureText(),n._cloud=n._cloud||n._renderer.createArea().append(n._rootElement),n._text=n._text||n._renderer.createText().append(n._rootElement),n._text.applySettings({align:"center",font:n._options.text.font})},_clear:function(){delete this._cloud,delete this._text},getTooltipParameters:function(){var n=this._getTextCloudOptions();return{x:n.x,y:n.y,value:this._currentValue,color:this._options.color}}})}(DevExpress),function(n,t){var r=t.extend,u=n.viz.gauges.__internals.formatValue,f=n.viz.gauges.__internals.getSampleText;n.viz.gauges.__internals.BaseRangeBar=n.viz.gauges.__internals.BaseIndicator.inherit({_measureText:function(){var n=this,i,r,t;n._hasText=n._isTextVisible(),n._hasText&&!n._textVerticalOffset&&(i=n._createRoot().append(n._owner),r=n._renderer.createText(f(n._translator,n._options.text),0,0,{"class":"dxg-text",align:"center",font:n._options.text.font}).append(i),t=r.getBBox(),i.remove(),n._textVerticalOffset=-t.y-t.height/2,n._textWidth=t.width,n._textHeight=t.height)},_move:function(){var n=this;n._updateBarItemsPositions(),n._hasText&&(n._text.applySettings({text:u(n._actualValue,n._options.text)}),n._updateTextPosition(),n._updateLinePosition())},_updateBarItems:function(){var n=this,r=n._options,t,i;n._setBarSides(),n._startPosition=n._translator.translate(n._translator.getDomainStart()),n._endPosition=n._translator.translate(n._translator.getDomainEnd()),n._basePosition=n._translator.translate(r.baseValue),n._space=n._getSpace(),t=r.backgroundColor||"none",t!=="none"&&n._space>0?i=r.containerBackgroundColor||"none":(n._space=0,i="none"),n._backItem1.applySettings({fill:t}),n._backItem2.applySettings({fill:t}),n._spaceItem1.applySettings({fill:i}),n._spaceItem2.applySettings({fill:i})},_getSpace:function(){return 0},_updateTextItems:function(){var n=this;n._hasText?(n._line=n._line||n._renderer.createPath([],{"class":"dxg-main-bar"}).append(n._rootElement),n._text=n._text||n._renderer.createText("",0,0,{"class":"dxg-text"}).append(n._rootElement),n._text.applySettings({align:n._getTextAlign(),font:n._getFontOptions()}),n._setTextItemsSides()):(n._line&&(n._line.remove(),delete n._line),n._text&&(n._text.remove(),delete n._text))},_isTextVisible:function(){return!1},_getTextAlign:function(){return"center"},_getFontOptions:function(){var t=this._options,n=t.text.font;return n&&n.color||(n=r({},n,{color:t.color})),n},_updateBarItemsPositions:function(){var n=this,t=n._getPositions();n._backItem1.applySettings(n._buildItemSettings(t.start,t.back1)),n._backItem2.applySettings(n._buildItemSettings(t.back2,t.end)),n._spaceItem1.applySettings(n._buildItemSettings(t.back1,t.main1)),n._spaceItem2.applySettings(n._buildItemSettings(t.main2,t.back2)),n._mainItem.applySettings(n._buildItemSettings(t.main1,t.main2)),n._trackerElement&&n._trackerElement.applySettings(n._buildItemSettings(t.main1,t.main2))},_render:function(){var n=this;n._measureText(),n._backItem1||(n._backItem1=n._createBarItem(),n._backItem1.applySettings({"class":"dxg-back-bar"})),n._backItem2||(n._backItem2=n._createBarItem(),n._backItem2.applySettings({"class":"dxg-back-bar"})),n._spaceItem1||(n._spaceItem1=n._createBarItem(),n._spaceItem1.applySettings({"class":"dxg-space-bar"})),n._spaceItem2||(n._spaceItem2=n._createBarItem(),n._spaceItem2.applySettings({"class":"dxg-space-bar"})),n._mainItem||(n._mainItem=n._createBarItem(),n._mainItem.applySettings({"class":"dxg-main-bar"})),n._updateBarItems(),n._updateTextItems()},_clear:function(){var n=this;delete n._backItem1,delete n._backItem2,delete n._spaceItem1,delete n._spaceItem2,delete n._mainItem,delete n._hasText,delete n._line,delete n._text},_update:function(){this._render(),this._move(),this._rootElement.applySettings({fill:this._options.color})},getTooltipParameters:function(){var n=this._getTooltipPosition();return{x:n.x,y:n.y,value:this._currentValue,color:this._options.color,offset:0}}})}(DevExpress,jQuery),function(n){var i=n.viz.gauges.__internals.circularNeedles;i.SimpleIndicator=n.viz.gauges.__internals.BaseIndicator.inherit({_move:function(){var t=this,i=t._options,r=n.utils.convertAngleToRendererSpace(t._actualPosition);t._rootElement.rotate(r,i.x,i.y),t._trackerElement&&t._trackerElement.rotate(r,i.x,i.y)},_isVisible:function(){var n=this._options;return n.width>0&&n.radius-n.indentFromCenter>0},_getTrackerSettings:function(){var n=this._options,r=n.x,u=n.y-(n.radius+n.indentFromCenter)/2,t=n.width/2,i=(n.radius-n.indentFromCenter)/2;return t>10||(t=10),i>10||(i=10),{points:[r-t,u-i,r-t,u+i,r+t,u+i,r+t,u-i]}},_renderSpindle:function(){var n=this,t=n._options,i;t.spindleSize>0?(i=Number(t.spindleGapSize)||0,i>0&&(i=i<=t.spindleSize?i:t.spindleSize),n._spindleOuter=n._spindleOuter||n._renderer.createCircle().append(n._rootElement),n._spindleInner=n._spindleInner||n._renderer.createCircle().append(n._rootElement),n._spindleOuter.applySettings({"class":"dxg-spindle-border",cx:t.x,cy:t.y,r:t.spindleSize/2}),n._spindleInner.applySettings({"class":"dxg-spindle-hole",cx:t.x,cy:t.y,r:i/2,fill:t.containerBackgroundColor})):n._clearSpindle()},_render:function(){var n=this,t=n._options;n._renderPointer(),n._renderSpindle()},_clearSpindle:function(){delete this._spindleOuter,delete this._spindleInner},_clearPointer:function(){delete this._element},_clear:function(){this._clearPointer(),this._clearSpindle()},measure:function(){var n=this._options,t={max:n.radius};return n.indentFromCenter<0&&(t.inverseHorizontalOffset=t.inverseVerticalOffset=-n.indentFromCenter),t},getTooltipParameters:function(){var t=this._options,i=n.utils.getCosAndSin(this._actualPosition),r=(t.radius+t.indentFromCenter)/2;return{x:t.x+i.cos*r,y:t.y-i.sin*r,value:this._currentValue,color:t.color,offset:t.width/2}}}),i.RectangleNeedle=i.SimpleIndicator.inherit({_renderPointer:function(){var t=this,n=t._options,r=n.y-n.radius,u=n.y-n.indentFromCenter||n.y,i=n.x-n.width/2||n.x,f=i+n.width||n.x;t._element=t._element||t._renderer.createArea().append(t._rootElement),t._element.applySettings({points:[i,u,i,r,f,r,f,u]})}}),i.TriangleNeedle=i.SimpleIndicator.inherit({_renderPointer:function(){var t=this,n=t._options,r=n.y-n.radius,i=n.y-n.indentFromCenter||n.y,u=n.x-n.width/2||n.x,f=n.x+n.width/2||n.x;t._element=t._element||t._renderer.createArea().append(t._rootElement),t._element.applySettings({points:[u,i,n.x,r,f,i]})}}),i.TwoColorRectangleNeedle=i.SimpleIndicator.inherit({_renderPointer:function(){var n=this,t=n._options,i=t.x-t.width/2||t.x,r=t.x+t.width/2||t.x,f=t.y-t.radius,o=t.y-t.indentFromCenter||t.y,u=f+(o-f)*t.secondFraction||f,e=u+t.space||u;n._firstElement=n._firstElement||n._renderer.createArea().append(n._rootElement),n._spaceElement=n._spaceElement||n._renderer.createArea().append(n._rootElement),n._secondElement=n._secondElement||n._renderer.createArea().append(n._rootElement),n._firstElement.applySettings({points:[i,o,i,e,r,e,r,o]}),n._spaceElement.applySettings({points:[i,e,i,u,r,u,r,e],"class":"dxg-hole",fill:t.containerBackgroundColor}),n._secondElement.applySettings({points:[i,u,i,f,r,f,r,u],"class":"dxg-part",fill:t.secondColor})},_clearPointer:function(){delete this._firstElement,delete this._secondElement,delete this._spaceElement}})}(DevExpress),function(n){var i=n.viz.gauges.__internals.linearNeedles;i.SimpleIndicator=n.viz.gauges.__internals.BaseIndicator.inherit({_move:function(){var n=this,t=n._actualPosition-n._zeroPosition;n._rootElement.move(n._vertical?0:t,n._vertical?t:0),n._trackerElement&&n._trackerElement.move(n._vertical?0:t,n._vertical?t:0)},_isVisible:function(){var n=this._options;return n.length>0&&n.width>0},_getTrackerSettings:function(){var n=this._options,u,f,e,o,t=n.width/2,i=n.length/2,r=this._zeroPosition;return t>10||(t=10),i>10||(i=10),this._vertical?(u=n.x-i,f=n.x+i,e=r+t||r,o=r-t||r):(u=r-t,f=r+t,e=n.y+i,o=n.y-i),{points:[u,e,u,o,f,o,f,e]}},_render:function(){var n=this;n._zeroPosition=n._translator.getCodomainStart()},_clear:function(){delete this._element},init:function(n){var t=this;return t.callBase(n),t._vertical=t._options.orientation==="vertical",t},measure:function(){var n=this._options,t=this._vertical?n.x:n.y;return{min:t-n.length/2,max:t+n.length/2}},getTooltipParameters:function(){var n=this,t=n._options,r=n._actualPosition,i={x:r,y:r,value:n._currentValue,color:t.color,offset:t.width/2};return n._vertical?i.x=t.x:i.y=t.y,i}}),i.RectangleNeedle=i.SimpleIndicator.inherit({_render:function(){var t=this,n=t._options,i,r,u,f,e;t.callBase(),i=t._zeroPosition,t._vertical?(r=n.x-n.length/2||n.x,u=n.x+n.length/2||n.x,f=i+n.width/2||i,e=i-n.width/2||i):(r=i-n.width/2||i,u=i+n.width/2||i,f=n.y+n.length/2||n.y,e=n.y-n.length/2||n.y),t._element=t._element||t._renderer.createArea().append(t._rootElement),t._element.applySettings({points:[r,f,r,e,u,e,u,f]})}}),i.RhombusNeedle=i.SimpleIndicator.inherit({_render:function(){var n=this,t=n._options,i,r,u,f;n.callBase(),n._vertical?(i=t.x,r=n._zeroPosition,u=t.length/2||0,f=t.width/2||0):(i=n._zeroPosition,r=t.y,u=t.width/2||0,f=t.length/2||0),n._element=n._element||n._renderer.createArea().append(n._rootElement),n._element.applySettings({points:[i-u,r,i,r-f,i+u,r,i,r+f]})}}),i.CircleNeedle=i.SimpleIndicator.inherit({_render:function(){var n=this,t=n._options,i,r,u;n.callBase(),n._vertical?(i=t.x,r=n._zeroPosition):(i=n._zeroPosition,r=t.y),u=t.length/2||0,n._element=n._element||n._renderer.createCircle().append(n._rootElement),n._element.applySettings({cx:i,cy:r,r:u})}})}(DevExpress),function(n){var i=n.viz.gauges.__internals.circularMarkers;i.TriangleMarker=n.viz.gauges.__internals.circularNeedles.SimpleIndicator.inherit({_isVisible:function(){var n=this._options;return n.length>0&&n.width>0&&n.radius>0},_render:function(){var t=this,n=t._options,r=n.x,u=n.y-n.radius,f=n.width/2||0,e=u-n.length,i;t._element=t._element||t._renderer.createArea().append(t._rootElement),i={points:[r,u,r-f,e,r+f,e],stroke:"none",strokeWidth:0},n.space>0&&(i.strokeWidth=Math.min(n.space,n.width/4)||0,i.stroke=i.strokeWidth>0?n.containerBackgroundColor||"none":"none"),t._element.applySettings(i)},_clear:function(){delete this._element},_getTrackerSettings:function(){var n=this._options,r=n.x,u=n.y-n.radius-n.length/2,t=n.width/2,i=n.length/2;return t>10||(t=10),i>10||(i=10),{points:[r-t,u-i,r-t,u+i,r+t,u+i,r+t,u-i]}},measure:function(){var n=this._options;return{min:n.radius,max:n.radius+n.length||n.radius}},getTooltipParameters:function(){var t=this._options,r=n.utils.getCosAndSin(this._actualPosition),u=t.radius+t.length/2,i=this.callBase();return i.x=t.x+r.cos*u,i.y=t.y-r.sin*u,i.offset=t.length/2,i}}),i.TextCloudMarker=n.viz.gauges.__internals.BaseTextCloudMarker.inherit({_isVisible:function(){return this._options.radius>0},_getTextCloudOptions:function(){var t=this,r=n.utils.getCosAndSin(t._actualPosition),i=n.utils.normalizeAngle(t._actualPosition);return{x:t._options.x+r.cos*t._options.radius,y:t._options.y-r.sin*t._options.radius,type:i>270?"left-top":i>180?"top-right":i>90?"right-bottom":"bottom-left"}},measure:function(){var n=this;return n._measureText(),{min:n._options.radius,max:n._options.radius,horizontalOffset:n._textFullWidth+n._options.arrowLength,verticalOffset:n._textFullHeight+n._options.arrowLength}}})}(DevExpress),function(n){var i=n.viz.gauges.__internals.linearMarkers;i.TriangleMarker=n.viz.gauges.__internals.linearNeedles.SimpleIndicator.inherit({_render:function(){var t=this,n=t._options,i,f,r,e,u={stroke:"none",strokeWidth:0};t.callBase(),t._vertical?(i=n.x,r=t._zeroPosition,f=i+(t._inverted?n.length:-n.length),u.points=[i,r,f,r-n.width/2,f,r+n.width/2]):(r=n.y,i=t._zeroPosition,e=r+(t._inverted?n.length:-n.length),u.points=[i,r,i-n.width/2,e,i+n.width/2,e]),n.space>0&&(u.strokeWidth=Math.min(n.space,n.width/4)||0,u.stroke=u.strokeWidth>0?n.containerBackgroundColor||"none":"none"),t._element=t._element||t._renderer.createArea().append(t._rootElement),t._element.applySettings(u)},_getTrackerSettings:function(){var n=this,o=n._options,u=o.width/2,f=o.length,t,i,r,e,s;return u>10||(u=10),f>20||(f=20),n._vertical?(t=i=o.x,i=t+(n._inverted?f:-f),r=n._zeroPosition+u,e=n._zeroPosition-u,s=[t,r,i,r,i,e,t,e]):(r=o.y,e=r+(n._inverted?f:-f),t=n._zeroPosition-u,i=n._zeroPosition+u,s=[t,r,t,e,i,e,i,r]),{points:s}},init:function(n){var t=this;return t.callBase(n),t._inverted=t._vertical?t._options.horizontalOrientation==="right":t._options.verticalOrientation==="bottom",t},measure:function(){var r=this,i=r._options,n,t,u=i.width/2||0;return r._vertical?(n=t=i.x,r._inverted?t=n+i.length||n:n=t-i.length||t):(n=t=i.y,r._inverted?t=n+i.length||n:n=t-i.length||t),{min:n,max:t,indent:u}},getTooltipParameters:function(){var n=this,i=n._options,r=(n._inverted?i.length:-i.length)/2,t=n.callBase();return n._vertical?t.x+=r:t.y+=r,t.offset=i.length/2,t}}),i.TextCloudMarker=n.viz.gauges.__internals.BaseTextCloudMarker.inherit({_isVisible:function(){return!0},_getTextCloudOptions:function(){var n=this,i=n._actualPosition,r=n._actualPosition,t;return n._vertical?(i=n._options.x,t=n._inverted?"top-left":"top-right"):(r=n._options.y,t=n._inverted?"right-top":"right-bottom"),{x:i,y:r,type:t}},init:function(n){var t=this;return t.callBase(n),t._vertical=t._options.orientation==="vertical",t._inverted=t._vertical?t._options.horizontalOrientation==="right":t._options.verticalOrientation==="bottom",t},measure:function(){var t=this,n=t._options,i,r,u;return t._measureText(),t._vertical?(u=t._textFullHeight,t._inverted?(i=n.x,r=n.x+n.arrowLength+t._textFullWidth):(i=n.x-n.arrowLength-t._textFullWidth,r=n.x)):(u=t._textFullWidth,t._inverted?(i=n.y,r=n.y+n.arrowLength+t._textFullHeight):(i=n.y-n.arrowLength-t._textFullHeight,r=n.y)),{min:i,max:r,indent:u}}})}(DevExpress),function(n){var i=n.utils.getCosAndSin,r=n.utils.convertAngleToRendererSpace,u=Math.max,f=Math.min;n.viz.gauges.__internals.CircularRangeBar=n.viz.gauges.__internals.BaseRangeBar.inherit({_isVisible:function(){var n=this._options;return n.size>0&&n.radius-n.size>0},_createBarItem:function(){return this._renderer.createArc().append(this._rootElement)},_createTracker:function(){return this._renderer.createArc()},_setBarSides:function(){var n=this,t=n._options;n._minSide=t.radius-t.size,n._maxSide=t.radius},_getSpace:function(){var n=this._options;return n.space>0?n.space*180/n.radius/Math.PI:0},_isTextVisible:function(){var n=this._options.text||{};return n.indent>0},_setTextItemsSides:function(){var n=this,t=n._options;n._lineFrom=t.y-t.radius,n._lineTo=n._lineFrom-t.text.indent,n._textRadius=t.radius+t.text.indent},_getPositions:function(){var n=this,r=n._basePosition,e=n._actualPosition,t,i,o=n._space;return r>=e?(t=r,i=e):(t=e,i=r),{start:n._startPosition,end:n._endPosition,main1:t,main2:i,back1:f(t+o,n._startPosition),back2:u(i-o,n._endPosition)}},_buildItemSettings:function(n,t){var i=this;return{x:i._options.x,y:i._options.y,innerRadius:i._minSide,outerRadius:i._maxSide,startAngle:t,endAngle:n}},_updateTextPosition:function(){var n=this,t=i(n._actualPosition),r=n._options.x+n._textRadius*t.cos,u=n._options.y-n._textRadius*t.sin;r+=t.cos*n._textWidth*.6,u-=t.sin*n._textHeight*.6,n._text.applySettings({x:r,y:u+n._textVerticalOffset})},_updateLinePosition:function(){var n=this,t=n._options.x,i,u;n._basePosition>n._actualPosition?(i=t-2,u=t):n._basePosition<n._actualPosition?(i=t,u=t+2):(i=t-1,u=t+1),n._line.applySettings({points:[i,n._lineFrom,i,n._lineTo,u,n._lineTo,u,n._lineFrom]}),n._line.rotate(r(n._actualPosition),t,n._options.y)},_getTooltipPosition:function(){var n=this,t=i((n._basePosition+n._actualPosition)/2),r=(n._minSide+n._maxSide)/2;return{x:n._options.x+t.cos*r,y:n._options.y-t.sin*r}},measure:function(){var n=this,t=n._options,i={min:t.radius-t.size||t.radius,max:t.radius};return n._measureText(),n._hasText&&(i.max+=t.text.indent,i.horizontalOffset=n._textWidth,i.verticalOffset=n._textHeight),i}})}(DevExpress),function(n){n.viz.gauges.__internals.LinearRangeBar=n.viz.gauges.__internals.BaseRangeBar.inherit({_isVisible:function(){var n=this._options;return n.size>0},init:function(n){var t=this;return t.callBase(n),t._vertical=t._options.orientation==="vertical",t._inverted=t._vertical?t._options.horizontalOrientation==="right":t._options.verticalOrientation==="bottom",t},_createBarItem:function(){return this._renderer.createArea().append(this._rootElement)},_createTracker:function(){return this._renderer.createArea()},_setBarSides:function(){var t=this,n=t._options,i,r;t._vertical?t._inverted?(i=n.x,r=n.x+n.size):(i=n.x-n.size,r=n.x):t._inverted?(i=n.y,r=n.y+n.size):(i=n.y-n.size,r=n.y),t._minSide=i,t._maxSide=r,t._minBound=i,t._maxBound=r},_getSpace:function(){var n=this._options;return n.space>0?Number(n.space):0},_isTextVisible:function(){var n=this._options.text||{};return n.indent>0||n.indent<0},_getTextAlign:function(){return this._vertical?this._options.text.indent>0?"left":"right":"center"},_setTextItemsSides:function(){var n=this,t=Number(n._options.text.indent);t>0?(n._lineStart=n._maxSide,n._lineEnd=n._maxSide+t,n._textPosition=n._lineEnd+(n._vertical?2:n._textHeight/2),n._maxBound=n._textPosition+(n._vertical?n._textWidth:n._textHeight/2)):t<0&&(n._lineStart=n._minSide,n._lineEnd=n._minSide+t,n._textPosition=n._lineEnd-(n._vertical?2:n._textHeight/2),n._minBound=n._textPosition-(n._vertical?n._textWidth:n._textHeight/2))},_getPositions:function(){var i=this,c=i._options,s=i._startPosition,h=i._endPosition,f=i._space,r=i._basePosition,u=i._actualPosition,n,t,e,o;return s<h?(r<u?(n=r,t=u):(n=u,t=r),e=n-f,o=t+f):(r>u?(n=r,t=u):(n=u,t=r),e=n+f,o=t-f),{start:s,end:h,main1:n,main2:t,back1:e,back2:o}},_buildItemSettings:function(n,t){var u=this,i=u._minSide,r=u._maxSide,f=u._vertical?[i,n,i,t,r,t,r,n]:[n,i,n,r,t,r,t,i];return{points:f}},_updateTextPosition:function(){var n=this;n._text.applySettings(n._vertical?{x:n._textPosition,y:n._actualPosition+n._textVerticalOffset}:{x:n._actualPosition,y:n._textPosition+n._textVerticalOffset})},_updateLinePosition:function(){var n=this,t=n._actualPosition,i,r,u;n._vertical?(n._basePosition>=t?(i=t,r=t+2):(i=t-2,r=t),u=[n._lineStart,i,n._lineStart,r,n._lineEnd,r,n._lineEnd,i]):(n._basePosition<=t?(i=t-2,r=t):(i=t,r=t+2),u=[i,n._lineStart,i,n._lineEnd,r,n._lineEnd,r,n._lineStart]),n._line.applySettings({points:u})},_getTooltipPosition:function(){var n=this,i=(n._minSide+n._maxSide)/2,r=(n._basePosition+n._actualPosition)/2,t={};return t=n._vertical?{x:i,y:r}:{x:r,y:i}},measure:function(){var t=this,n=t._options,i,r,u;return t._measureText(),t._vertical?(i=r=n.x,t._inverted?r=r+n.size||r:i=i-n.size||i,t._hasText&&(u=t._textHeight/2,n.text.indent>0&&(r+=n.text.indent+t._textWidth),n.text.indent<0&&(i+=n.text.indent-t._textWidth))):(i=r=n.y,t._inverted?r=r+n.size||r:i=i-n.size||i,t._hasText&&(u=t._textWidth/2,n.text.indent>0&&(r+=n.text.indent+t._textHeight),n.text.indent<0&&(i+=n.text.indent-t._textHeight))),{min:i,max:r,indent:u}}})}(DevExpress),function(n,t){function y(n,t,i,r){var u;return i>n&&r<t?u=[{start:n,end:i},{start:r,end:t}]:i>=t||r<=n?u=[{start:n,end:t}]:i<=n&&r>=t?u=[]:i>n?u=[{start:n,end:i}]:r<t&&(u=[{start:r,end:t}]),u}function p(n,t,i,r){var u;return i<n&&r>t?u=[{start:n,end:i},{start:r,end:t}]:i<=t||r>=n?u=[{start:n,end:t}]:i>=n&&r<=t?u=[]:i<n?u=[{start:n,end:i}]:r>t&&(u=[{start:r,end:t}]),u}function w(n,t,i){return t-n>=i}function b(n,t,i){return n-t>=i}var s=n.utils.isDefined,e=n.utils.isString,h=n.utils.isArray,u=window.Number,o=window.isFinite,f=Math.max,c=Math.abs,r=t.each,l=t.map,a=t.extend,v=n.viz.core.Palette;n.viz.gauges.__internals.BaseRangeContainer=n.Class.inherit({setup:function(n){var t=this;return t._renderer=n.renderer,t._translator=n.translator,t._owner=n.owner,t._incidentOccured=n.incidentOccured,t._rootElement=t._renderer.createGroup({"class":"dxg-range-container"}),t._options={},t},dispose:function(){var n=this;return n._renderer=n._owner=n._translator=n._incidentOccured=n._options=n._rootElement=null,n},init:function(n){var t=this;return a(!0,t._options,n),n&&s(n.ranges)&&(t._options.ranges=h(n.ranges)?n.ranges.slice(0):null),t},_getRanges:function(){var a=this,n=a._options,t=a._translator,k=t.getDomainStart(),tt=t.getDomainEnd(),s=tt-k,ut=s>=0?w:b,it=s>=0?y:p,g=[],i=[],d=[{start:k,end:tt}],ft=c(s)/1e4,et=new v(n.palette,{type:"indicatingSet",theme:n.themeName}),ot=e(n.backgroundColor)?n.backgroundColor:"none",f=n.width||{},h=u(f>0?f:f.start),nt=u(f>0?f:f.end),rt=nt-h;return n.ranges?h>=0&&nt>=0&&h+nt>0?(g=l(n.ranges,function(n,i){n=n||{};var r=t.adjust(n.startValue),u=t.adjust(n.endValue);return o(r)&&o(u)&&ut(r,u,ft)?{start:r,end:u,color:n.color,classIndex:i}:null}),r(g,function(n,t){var i=et.getNextColor();t.color=e(t.color)&&t.color||i||"none",t.className="dxg-range dxg-range-"+t.classIndex,delete t.classIndex}),r(g,function(n,t){for(var r,e,u,o=[],h=[],f=0,s=i.length;f<s;++f)u=i[f],e=it(u.start,u.end,t.start,t.end),(r=e[0])&&(r.color=u.color)&&(r.className=u.className)&&o.push(r),(r=e[1])&&(r.color=u.color)&&(r.className=u.className)&&o.push(r);for(o.push(t),i=o,f=0,s=d.length;f<s;++f)u=d[f],e=it(u.start,u.end,t.start,t.end),(r=e[0])&&h.push(r),(r=e[1])&&h.push(r);d=h}),r(d,function(n,t){t.color=ot,t.className="dxg-range dxg-background-range",i.push(t)}),r(i,function(n,i){i.startPosition=t.translate(i.start),i.endPosition=t.translate(i.end),i.startWidth=(i.start-k)/s*rt+h,i.endWidth=(i.end-k)/s*rt+h}),i):(a._incidentOccured('The range container has not been drawn because the value of the "width" option is not valid.'),null):(a._incidentOccured('The range container has not been drawn because the value of the "ranges" option is not valid.'),null)},clean:function(){return this._rootElement.detach(),this._rootElement.clear(),this},render:function(){var n=this,t,i;return t=n._getRanges(),i=t?n._getRenderSettings():null,i&&(n._rootElement.append(n._owner),r(t,function(t,r){var u=n._createRange(r,i);u.applySettings({fill:r.color,"class":r.className}),u.append(n._rootElement)})),n}}),n.viz.gauges.__internals.CircularRangeContainer=n.viz.gauges.__internals.BaseRangeContainer.inherit({_getRenderSettings:function(){var n=this._options,r=n.radius,t=0,i=0,u=n.width>0?n.width:f(n.width.start,n.width.end);switch(n.orientation){case"inside":t=1;break;case"outside":i=1;break;case"center":t=i=.5;break;default:this._incidentOccured('The range container has not been drawn because the value of the "orientation" option is not valid.')}return(t||i)&&r+i*u>0&&r-t*u>0?{x:n.x,y:n.y,r:r,inner:t,outer:i}:null},_createRange:function(n,t){var i=(n.startWidth+n.endWidth)/2;return this._renderer.createArc(t.x,t.y,t.r+t.outer*i,t.r-t.inner*i,n.endPosition,n.startPosition)},measure:function(){var r=this._options,t=r.radius,n=r.width||{},i=null;n=u(n)||f(n.start,n.end,0)||0;switch(r.orientation){case"inside":i={min:t-n,max:t};break;case"outside":i={min:t,max:t+n};break;case"center":i={min:t-n/2,max:t+n/2}}return i}}),n.viz.gauges.__internals.LinearRangeContainer=n.viz.gauges.__internals.BaseRangeContainer.inherit({_getRenderSettings:function(){var r=this,i=r._options,u,f,n=0,t=0;if(i.orientation==="vertical"){f=i.x,u=!0;switch(i.horizontalOrientation){case"left":n=1;break;case"right":t=1;break;case"center":n=t=.5;break;default:r._incidentOccured('The range container has not been drawn because the value of the "horizontalOrientation" option is not valid.')}}else{f=i.y,u=!1;switch(i.verticalOrientation){case"top":n=1;break;case"bottom":t=1;break;case"middle":n=t=.5;break;default:r._incidentOccured('The range container has not been drawn because the value of the "verticalOrientation" option is not valid.')}}return n||t?{position:f,vertical:u,inner:n,outer:t}:null},_createRange:function(n,t){var r=t.inner,u=t.outer,i=t.position,f;return f=t.vertical?[i-n.startWidth*r,n.startPosition,i-n.endWidth*r,n.endPosition,i+n.endWidth*u,n.endPosition,i+n.startWidth*u,n.startPosition]:[n.startPosition,i+n.startWidth*u,n.startPosition,i-n.startWidth*r,n.endPosition,i-n.endWidth*r,n.endPosition,i+n.endWidth*u],this._renderer.createArea(f)},measure:function(){var i=this._options,n=i.width||{},t=null;if(n=u(n)||f(n.start,n.end,0)||0,i.orientation==="vertical"){t={min:i.x,max:i.x};switch(i.horizontalOrientation){case"left":t.min-=n;break;case"right":t.max+=n;break;case"center":t.min-=n/2,t.max+=n/2}}else{t={min:i.y,max:i.y};switch(i.verticalOrientation){case"top":t.min-=n;break;case"bottom":t.max+=n;break;case"middle":t.min-=n/2,t.max+=n/2}}return t}})}(DevExpress,jQuery),function(n,t){var o=n.viz.core.Rectangle,u=n.utils.isString,s=n.utils.isDefined,h=Math.min,c=Math.max,f=Math.floor,r=Math.ceil,e=t.extend;n.viz.gauges.__internals.Title=n.Class.inherit({ctor:function(){this._options={title:{},subtitle:{}}},_measureTexts:function(){var t=this,n=t._mainText?t._mainText.getBBox():null,i=t._subText?t._subText.getBBox():null,u;t._location={x:0,y:0},n&&i?(t._subText.applySettings({y:r(-i.y)}),t._rect=new o({left:f(h(n.x,i.x)),right:r(c(n.x+n.width,i.x+i.width)),top:f(n.y),bottom:r(i.height)})):(n||i)&&(n=n||i,t._rect=new o({left:f(n.x),right:r(n.x+n.width),top:f(n.y),bottom:r(n.y+n.height)}))},render:function(n){var t=this;return e(!0,t._options,n),t._root=t._root||t._renderer.createGroup({"class":"dxg-title",align:"center"}).append(t._owner),u(t._options.title.text)?(t._mainText=t._mainText||t._renderer.createText().append(t._root),t._mainText.applySettings({x:0,y:0,font:t._options.title.font,text:t._options.title.text})):(t._mainText&&t._mainText.remove(),delete t._mainText),u(t._options.subtitle.text)?(t._subText=t._subText||t._renderer.createText().append(t._root),t._subText.applySettings({x:0,y:0,font:t._options.subtitle.font,text:t._options.subtitle.text})):(t._subText&&t._subText.remove(),delete t._subText),t._mainText||t._subText?t._measureTexts():(t._root&&t._root.remove(),delete t._root),t},processTitleOptions:function(n){return u(n)?{text:n}:s(n)?(n=e({},n),n.layout=e({},n.layout,{position:n.position}),n):{text:null}},processSubtitleOptions:function(n){return u(n)?{text:n}:s(n)?e({},n):{text:null}},isVisible:function(){return!!(this._mainText||this._subText)},getBoundingRect:function(){return this._rect.clone()},getLayoutOptions:function(){return this._options.title.layout||{}},move:function(n,t){var i=this;return i._root.move(i._location.x+=n,i._location.y+=t),i._rect=i._rect.move(n,t),i}})}(DevExpress,jQuery),function(n){function r(n){n=n||{};var t=(i(n)?n:n.position||"").split("-");return{primary:i(t[0])?t[0].toLowerCase():"",secondary:i(t[1])?t[1].toLowerCase():"",overlay:n.overlay>0?Number(n.overlay):0}}var u=Math.min,f=Math.max,i=n.utils.isString,e=n.viz.core.Rectangle;n.viz.gauges.__internals.LayoutManager=n.Class.inherit({setRect:function(n){return this._rect=n.clone(),this},getRect:function(){return this._rect.clone()},applyLayout:function(n,t){var h=0,o=0,i=this._rect,e=n.clone(),c=r(t),s=e.height()-c.overlay;switch(c.primary){case"top":s>=0?(o=i.top-e.top,i.top=u(i.top+s,i.bottom)):o=i.top-e.top-s;break;case"bottom":s>=0?(o=i.bottom-e.bottom,i.bottom=f(i.bottom-s,i.top)):o=i.bottom-e.bottom+s}switch(c.secondary){case"":case"center":h=i.horizontalMiddle()-e.horizontalMiddle();break;case"left":h=i.left-e.left;break;case"right":h=i.right-e.right}return e=e.move(h,o),{rect:e,dx:h,dy:o}},dock:function(n,t){var o=0,u=0,f=this._rect,i=n.clone(),e=r(t);switch(e.primary){case"top":u=f.top-i.bottom+e.overlay,f.top-=i.height();break;case"bottom":u=f.bottom-i.top-e.overlay,f.bottom+=i.height()}return i=i.move(o,u),{rect:i,dx:o,dy:u}},selectRectByAspectRatio:function(n,t){var i=this._rect.clone(),f,r=0,u=0;return t=t||{},n>0&&(i.left+=t.left||0,i.right-=t.right||0,i.top+=t.top||0,i.bottom-=t.bottom||0,i.width()>0&&i.height()>0?(f=i.height()/i.width(),f>1?n<f?r=i.width():u=i.height():n>f?u=i.height():r=i.width(),r>0||(r=u/n),u>0||(u=r*n),r=(i.width()-r)/2,u=(i.height()-u)/2,i.left+=r,i.right-=r,i.top+=u,i.bottom-=u):(i.left=i.right=i.horizontalMiddle(),i.top=i.bottom=i.verticalMiddle())),i},selectRectBySizes:function(n,t){var i=this._rect.clone(),r;return t=t||{},n&&(i.left+=t.left||0,i.right-=t.right||0,i.top+=t.top||0,i.bottom-=t.bottom||0,n.width>0&&(r=(i.width()-n.width)/2,r>0&&(i.left+=r,i.right-=r)),n.height>0&&(r=(i.height()-n.height)/2,r>0&&(i.top+=r,i.bottom-=r))),i}})}(DevExpress,jQuery),function(n){n.viz.gauges.__internals.ThemeManager=n.viz.core.BaseThemeManager.inherit({_themeSection:"gauge",_initializeTheme:function(){var n=this;n._initializeFont(n._theme.scale.label.font),n._initializeFont(n._theme.valueIndicator.rangebar.text.font),n._initializeFont(n._theme.subvalueIndicator.textcloud.text.font),n._initializeFont(n._theme.valueIndicators.rangebar.text.font),n._initializeFont(n._theme.valueIndicators.textcloud.text.font),n._initializeFont(n._theme.title.font),n._initializeFont(n._theme.subtitle.font),n._initializeFont(n._theme.tooltip.font),n._initializeFont(n._theme.indicator.text.font),n._initializeFont(n._theme.loadingIndicator.font)},getPartialTheme:function(n){return this._theme[n]||{}}})}(DevExpress),function(n,t,i){function tt(n){for(var h=n._valueIndicators||[],f=n.option("valueIndicators"),e=[],t=0,i=s(f)?f.length:0;t<i;++t)e.push(f[t]);for(i=h.length;t<i;++t)e.push(null);var o=n._defaultSettings.valueIndicators,c=n._themeManager.getPartialTheme("valueIndicators"),v={renderer:n._renderer,owner:n._rootElement,translator:n._translator,tracker:n._tracker},l=[];u(e,function(t,i){var u=h[t],f,e;if(!i){u&&u.dispose();return}f=a(i.type||o._type).toLowerCase(),u&&f!==u._options.type&&(u.dispose(),u=null),u||(u=n._createValueIndicatorInHardMode(f),u&&u.setup(v)),u&&(e=r(!0,{},o._default,o[f],c._default,c[f],i,{type:f,animation:n._animationSettings,containerBackgroundColor:n._containerBackgroundColor}),n._updateIndicatorSettings(e),u.init(e),u._trackerInfo={index:t},n._mainElements.push(u),n._measureElements.push(u),l.push(u))}),n._valueIndicators=l}function it(n){b(n,"_rangeBars","_createRangeBar",{user:n.option("rangeBars"),common:n.option("commonRangeBarSettings"),_default:n._defaultSettings.valueIndicator,theme:n._themeManager.getPartialTheme("valueIndicator"),preset:{},type:"rangebar",className:"dxg-value-indicator"}),b(n,"_needles","_createNeedle",{user:n.option("needles"),common:n.option("commonNeedleSettings"),_default:n._defaultSettings.valueIndicator,theme:n._themeManager.getPartialTheme("valueIndicator"),preset:n._getPreset().commonNeedleSettings,className:"dxg-value-indicator"}),b(n,"_markers","_createMarker",{user:n.option("markers"),common:n.option("commonMarkerSettings"),_default:n._defaultSettings.subvalueIndicator,theme:n._themeManager.getPartialTheme("subvalueIndicator"),preset:n._getPreset().commonMarkerSettings,className:"dxg-subvalue-indicator"})}function b(n,t,i,f){for(var v=n[t]||[],h=[],e=0,o=s(f.user)?f.user.length:0;e<o;++e)h.push(f.user[e]);for(o=v.length;e<o;++e)h.push(null);var c=f._default,y=f.theme,w=f.preset,p=f.common||{},b={renderer:n._renderer,owner:n._rootElement,translator:n._translator,tracker:n._tracker,className:f.className},l=[];u(h,function(t,u){var e=v[t],o,s;if(!u){e&&e.dispose();return}o=a(u.type||p.type||w.type||c.type).toLowerCase(),e&&e._options.type!==o&&(e.dispose(),e=null),e||(e=n[i](o),e.setup(b)),e&&(o=f.type||o,s=r(!0,{},c._default,c[o],y._default,y[o],p,u),delete s.spindleSize,s.animation=n._animationSettings,s.containerBackgroundColor=n._containerBackgroundColor,n._updateIndicatorSettings(s),e.init(s),n._mainElements.push(e),n._measureElements.push(e),l.push(e))}),l.length?n[t]=l:delete n[t]}function y(n,t){var r=(n||[])[t[0]];return t.length>1?(r&&r.value(t[1]),this._resizing||this.hideLoadingIndicator(),this):r?r.value():i}function rt(n,t){if(n===t)return!0;if(s(n)&&s(t)&&n.length===t.length){for(var i=0,r=n.length;i<r;++i)if(n[i]!==t[i])return!1;return!0}return!1}var e=n.viz.gauges.__factory,g=n.viz.core.Rectangle,s=n.utils.isArray,nt=n.utils.isFunction,c=window.isFinite,f=window.Number,a=window.String,ut=window.setTimeout,v=n.utils.windowResizeCallbacks,r=t.extend,u=t.each,k=t.map,l=t.noop,p=n.viz.core,ft=500,h="value",o="subvalues",w="loadingIndicator",d;n.viz.gauges.__internals.BASE_GAUGE_SETTINGS={size:{width:i,height:i},margin:{left:0,top:0,right:0,bottom:0},redrawOnResize:!0,incidentOccured:l,theme:i,title:{text:i,layout:{position:"top-center",overlay:0}},subtitle:{text:i},indicator:{hasPositiveMeaning:!0,text:{format:"fixedPoint",precision:0,customizeText:t.none,useDefaultColor:!1},layout:{position:"bottom-center",overlay:0}},tooltip:{enabled:!1,format:i,precision:i,customizeText:i,horizontalPadding:22,verticalPadding:6,arrowLength:10}},d={scale:{majorTick:{visible:!0,tickInterval:i,length:5,width:2,showCalculatedTicks:!0,useTicksAutoArrangement:!0,customTickValues:[]},minorTick:{visible:!1,tickInterval:i,length:3,width:1,showCalculatedTicks:!0,customTickValues:[]},label:{visible:!0,format:i,precision:i,customizeText:i}},rangeContainer:{offset:0,width:5,ranges:[]},valueIndicator:{rangebar:{baseValue:i,space:2,size:10,text:{indent:0,customizeText:i,format:i,precision:i}}},subvalueIndicator:{trianglemarker:{space:2,length:14,width:13},triangle:{space:2,length:14,width:13},textcloud:{arrowLength:5,horizontalOffset:6,verticalOffset:3,text:{format:i,precision:i,customizeText:i}}},valueIndicators:{rangebar:{baseValue:i,space:2,size:10,text:{indent:0,customizeText:i,format:i,precision:i}},trianglemarker:{space:2,length:14,width:13},textcloud:{arrowLength:5,horizontalOffset:6,verticalOffset:3,text:{format:i,precision:i,customizeText:i}}}},n.viz.gauges.Gauge=n.ui.Component.inherit({_themeManagerType:n.viz.gauges.__internals.ThemeManager,_init:function(){var n=this;n._initRenderer(),n._themeManager=new n._themeManagerType,n._translator=e.createTranslator(0,0,0,0),n._tracker=e.createTracker({renderer:n._renderer,container:n._rootElement}),n._layoutManager=e.createLayoutManager(),n._defaultSettings=n._getDefaultSettings(),n._mainElements=[],n._externalElements=[],n._measureElements=[],n._initResizeHandler(),n._selectMode()},_dispose:function(){var n=this;n.callBase.apply(n,arguments),n._scale&&n._scale.dispose()&&delete n._scale,n._rangeContainer&&n._rangeContainer.dispose()&&delete n._rangeContainer,n._disposeValueIndicators(),n._tooltip&&n._tooltip.dispose()&&delete n._tooltip,n._tracker.dispose()&&delete n._tracker,n._disposeResizeHandler(),n._disposeRenderer(),n._themeManager.dispose()&&delete n._themeManager,delete n._layoutManager,delete n._defaultSettings,delete n._mainElements,delete n._externalElements,delete n._measureElements,n._animationSettings=null,n._disposeLoadIndicator()},_disposeValueIndicators:function(){var n=this;n._valueIndicator&&n._valueIndicator.dispose()&&delete n._valueIndicator,n._subvalueIndicatorsSet&&n._subvalueIndicatorsSet.dispose()&&delete n._subvalueIndicatorsSet},_selectMode:function(){var n=this;n.option(h)===i&&n.option(o)===i&&(n.option("needles")!==i||n.option("markers")!==i||n.option("rangeBars")!==i?(n._value=n._subvalues=n.value=n.subvalues=l,n._updateActiveElements=function(){var n=this._noAnimation;u([].concat(this._needles||[],this._markers||[],this._rangeBars||[]),function(t,i){i.value(i._options.value,n)}),this._resizing||this.hideLoadingIndicator()},n._prepareValueIndicators=function(){it(this)},n._disposeValueIndicators=function(){u([].concat(this._needles||[],this._markers||[],this._rangeBars||[]),function(n,t){t.dispose()}),delete this._needles,delete this._markers,delete this._rangeBars},n._cleanValueIndicators=function(){u([].concat(this._needles||[],this._markers||[],this._rangeBars||[]),function(n,t){t.clean()})},n.needleValue=function(){return y.call(this,this._needles,arguments)},n.markerValue=function(){return y.call(this,this._markers,arguments)},n.rangeBarValue=function(){return y.call(this,this._rangeBars,arguments)}):n.option("valueIndicators")!==i&&(n._value=n._subvalues=n.value=n.subvalues=l,n._updateActiveElements=function(){var n=this._noAnimation;u(this._valueIndicators,function(t,i){i.value(i._options.value,n)}),this._resizing||this.hideLoadingIndicator()},n._prepareValueIndicators=function(){tt(this)},n._disposeValueIndicators=function(){u(this._valueIndicators,function(n,t){t.dispose()}),delete this._valueIndicators},n._cleanValueIndicators=function(){u(this._valueIndicators,function(n,t){t.clean()})},n.indicatorValue=function(){return y.call(this,this._valueIndicators,arguments)}))},_initRenderer:function(){var n=this;n._canvas={width:1,height:1,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0},n._renderer=e.createRenderer({width:1,height:1}),n._rootElement=n._renderer.getRoot(),n._rootElement.applySettings({"class":"dxg "+n._rootClass})},_disposeRenderer:function(){var n=this;n._renderer.killContainer(),delete n._renderer,delete n._canvas,n._rootElement.remove(),delete n._rootElement},_initResizeHandler:function(){var t=this;t._resizeHandler=n.utils.createResizeHandler(function(){t._updateCanvas()&&(t._resizing=t._noAnimation=!0,t._clean(),t._renderCore(),delete t._resizing)}),t._resizeHandler.dispose=function(){return t=null,this}},_disposeResizeHandler:function(){v.remove(this._resizeHandler.stop().dispose()),delete this._resizeHandler},_trackWindowResize:function(){var n=this,t=n.option("redrawOnResize");t=t!==i?!!t:n._defaultSettings.redrawOnResize,t?v.has(n._resizeHandler)||v.add(n._resizeHandler):v.remove(n._resizeHandler)},_getDefaultSettings:function(){return r(!0,{},n.viz.gauges.__internals.BASE_GAUGE_SETTINGS,d)},_getIncidentOccured:function(){var n=this.option("incidentOccured");return nt(n)||(n=this._defaultSettings.incidentOccured),function(){n.apply(null,arguments)}},_setupAnimationSettings:function(){var t=this,n=t.option("animation");t._animationSettings=null,(n===i||n)&&(n===i&&(n={enabled:t.option("animationEnabled"),duration:t.option("animationDuration")}),n=r({enabled:!0,duration:1e3,easing:"easeOutCubic"},n),n.enabled&&n.duration>0&&(t._animationSettings={duration:f(n.duration),easing:n.easing}))},_getDefaultFormatOptions:function(){return n.utils.getAppropriateFormat(this._area.startValue,this._area.endValue,this._getApproximateScreenRange())},_getCanvas:function(){var i=this,t=i.option("size")||{},n=i.option("margin")||{},c=i._getDefaultContainerSize(),r=t.width>=0?f(t.width):i._element().width(),u=t.height>=0?f(t.height):i._element().height(),e=n.left>0?f(n.left):0,o=n.top>0?f(n.top):0,s=n.right>0?f(n.right):0,h=n.bottom>0?f(n.bottom):0;return r||f(t.width)===0||(r=c.width),u||f(t.height)===0||(u=c.height),e+s>=r&&(e=s=0),o+h>=u&&(o=h=0),{width:r,height:u,marginLeft:e,marginTop:o,marginRight:s,marginBottom:h}},_updateVisibility:function(n){var t=this;return n.width-n.marginLeft-n.marginRight>=2&&n.height-n.marginTop-n.marginBottom>=2&&t._element().is(":visible")?!0:(t._incidentOccured("Gauge cannot be drawn because its container is either too small or invisible."),!1)},_getArea:function(){var i=this,t=i.option("scale")||{},n={};return n.startValue=c(t.startValue)?f(t.startValue):0,n.endValue=c(t.endValue)?f(t.endValue):100,n.baseValue=Math.min(n.startValue,n.endValue),i._setupArea(n),i._translator.setup({codomainStart:n.startCoord,codomainEnd:n.endCoord,domainStart:n.startValue,domainEnd:n.endValue}),n},_renderTitle:function(){var n=this,t=n.option("title"),i=n.option("subtitle");n._title||(n._title=e.createTitle(),n._title._renderer=n._renderer,n._title._owner=n._rootElement),t=r(!0,{},n._defaultSettings.title,n._themeManager.getPartialTheme("title"),n._title.processTitleOptions(t)),i=r(!0,{},n._defaultSettings.subtitle,n._themeManager.getPartialTheme("subtitle"),n._title.processSubtitleOptions(i)),n._title.render({title:t,subtitle:i}),n._title.isVisible()&&n._externalElements.push(n._title)},_renderDeltaIndicator:function(){var n=this,t=n.option("indicator");n._indicator||(n._indicator=e.createIndicator(),n._indicator&&(n._indicator._renderer=n._renderer,n._indicator._owner=n._rootElement)),n._indicator&&(t=r(!0,{},n._defaultSettings.indicator,n._themeManager.getPartialTheme("indicator"),t),n._indicator.render(t),n._indicator.isVisible()&&n._externalElements.push(n._indicator))},_renderTooltip:function(){var n=this,t=r(!0,{},n._defaultSettings.tooltip,n._themeManager.getPartialTheme("tooltip"),n.option("tooltip"));n._tooltip||(n._tooltip=e.createTooltip({renderer:n._renderer,container:n._rootElement,tracker:n._tracker})),n._tooltip.init(t).setRect(n._rootRect).render()},_updateCanvas:function(n){var i=this._canvas,t=this._getCanvas();return this._updateVisibility(t)?t.width===i.width&&t.height===i.height&&!n?!1:(this._canvas=t,!0):!1},_renderCore:function(){var n=this,t=n._canvas;n._renderer.container||n._renderer.draw(n._element().get(0)),n._renderer.resize(t.width,t.height),n._rootRect=new g({left:t.marginLeft,top:t.marginTop,right:t.width-t.marginRight,bottom:t.height-t.marginBottom}),n._layoutManager.setRect(n._rootRect),n._mainRect=n._rootRect.clone(),n._area=n._getArea(),n._defaultFormatOptions=n._getDefaultFormatOptions(),n._mainElements.length=0,n._externalElements.length=0,n._measureElements.length=0,n._renderTitle(),n._renderDeltaIndicator(),n._externalElements.reverse(),u(n._externalElements,function(t,i){var r=n._layoutManager.applyLayout(i.getBoundingRect(),i.getLayoutOptions());i.move(r.dx,r.dy)}),n._mainRect=n._layoutManager.getRect(),n._prepareMainElements(),u(n._measureElements,function(t,i){n._updateElementPosition(i)}),n._applyMainLayout(),n._renderMainElements(),u(n._externalElements,function(t,i){var r=n._layoutManager.dock(i.getBoundingRect(),i.getLayoutOptions());i.move(r.dx,r.dy)}),n._renderTooltip(),n._tracker.activate(),n._updateLoadIndicator(i,n._canvas.width,n._canvas.height),n._updateActiveElements(),delete n._noAnimation},_updateIndicatorSettings:function(n){var t=this;n.baseValue=c(t._translator.translate(n.baseValue))?f(n.baseValue):t._area.baseValue,n.currentValue=n.baseValue,!n.text||n.text.format||n.text.precision||(n.text.format=t._defaultFormatOptions.format,n.text.precision=t._defaultFormatOptions.precision)},_prepareValueIndicatorSettings:function(){var n=this,i=n.option("valueIndicator")||{},t=r(!0,{},n._defaultSettings.valueIndicator,n._themeManager.getPartialTheme("valueIndicator")),u=a(i.type||t.type).toLowerCase();n._valueIndicatorSettings=r(!0,t._default,t[u],i,{type:u,animation:n._animationSettings,containerBackgroundColor:n._containerBackgroundColor}),n._updateIndicatorSettings(n._valueIndicatorSettings)},_prepareSubvalueIndicatorSettings:function(){var n=this,i=n.option("subvalueIndicator")||{},t=r(!0,{},n._defaultSettings.subvalueIndicator,n._themeManager.getPartialTheme("subvalueIndicator")),u=a(i.type||t.type).toLowerCase();n._subvalueIndicatorSettings=r(!0,t._default,t[u],i,{type:u,animation:n._animationSettings,containerBackgroundColor:n._containerBackgroundColor}),n._updateIndicatorSettings(n._subvalueIndicatorSettings)},_renderMainElements:function(){var n=this;n._translator.setup({domainStart:n._area.startValue,domainEnd:n._area.endValue,codomainStart:n._area.startCoord,codomainEnd:n._area.endCoord}),u(n._mainElements,function(t,i){n._updateElementPosition(i),i.render()})},_clean:function(){var n=this;n._tracker.deactivate(),n._scale&&n._scale.clean(),n._rangeContainer&&n._rangeContainer.clean(),n._cleanValueIndicators()},_cleanValueIndicators:function(){this._valueIndicator&&this._valueIndicator.clean(),this._subvalueIndicatorsSet&&this._subvalueIndicatorsSet.clean()},_render:function(){var n=this;n._themeManager.setTheme(n.option("theme")),n._incidentOccured=n._getIncidentOccured(),n._setupAnimationSettings(),n._containerBackgroundColor=n.option("containerBackgroundColor")||n._themeManager.getPartialTheme("containerBackgroundColor")||n._defaultSettings.containerBackgroundColor,n._updateCanvas(!0)&&n._renderCore(),n._trackWindowResize()},_prepareMainElements:function(){this._prepareRangeContainer(),this._prepareScale(),this._prepareValueIndicators()},_prepareValueIndicators:function(){this._prepareValueIndicator(),this._prepareSubvalueIndicators()},_updateActiveElements:function(){var n=this;n._value(n.option(h)),n._subvalues(n.option(o))},_prepareScale:function(){var n=this,t=n._scale;t||(t=n._scale=n._createScale(),t.setup({renderer:n._renderer,translator:n._translator,owner:n._rootElement,incidentOccured:n._incidentOccured})),t.init(r(!0,{},n._defaultSettings.scale,n._themeManager.getPartialTheme("scale"),n.option("scale"),{offset:0,approximateScreenDelta:n._getApproximateScreenRange()})),n._mainElements.push(t),n._measureElements.push(t)},_prepareRangeContainer:function(){var n=this,t=n._rangeContainer;t||(t=n._rangeContainer=n._createRangeContainer(),t.setup({renderer:n._renderer,translator:n._translator,owner:n._rootElement,incidentOccured:n._incidentOccured})),t.init(r({},n._defaultSettings.rangeContainer,n._themeManager.getPartialTheme("rangeContainer"),n.option("rangeContainer"),{themeName:n._themeManager.themeName()})),n._mainElements.push(t),n._measureElements.push(t)},_prepareValueIndicator:function(){var n=this,t=n._valueIndicator,i;n._prepareValueIndicatorSettings(),t&&n._valueIndicatorType!==n._valueIndicatorSettings.type&&t.dispose()&&(t=null),n._valueIndicatorType=n._valueIndicatorSettings.type,t||(t=n._valueIndicator=n._createValueIndicator(n._valueIndicatorType),t?(t.setup({renderer:n._renderer,translator:n._translator,owner:n._rootElement,tracker:n._tracker,className:"dxg-value-indicator"}),t._trackerInfo={type:"value-indicator"}):n._incidentOccured("Value indicator has not been created because its specified type is unknown.")),t.init(n._valueIndicatorSettings),n._mainElements.push(t),n._measureElements.push(t)},_prepareSubvalueIndicators:function(){var t=this,i=t._subvalueIndicatorsSet,r;i||(i=t._subvalueIndicatorsSet=new n.viz.gauges.__internals.ValueIndicatorsSet({renderer:t._renderer,translator:t._translator,owner:t._rootElement,tracker:t._tracker,className:"dxg-subvalue-indicators",indicatorClassName:"dxg-subvalue-indicator",trackerType:"subvalue-indicator",createIndicator:function(){return t._createSubvalueIndicator(t._subvalueIndicatorType)}})),t._prepareSubvalueIndicatorSettings(),r=t._subvalueIndicatorSettings.type!==t._subvalueIndicatorType,t._subvalueIndicatorType=t._subvalueIndicatorSettings.type,t._createSubvalueIndicator(t._subvalueIndicatorType)?(i.setSettings(t._subvalueIndicatorSettings,t.option(o)).prepare(r),t._measureElements.push(i),t._mainElements.push(i)):t._incidentOccured("Subvalue indicator has not been created because its specified type is unknown.")},_value:function(n){var t=this;return arguments.length?(t._valueIndicator.value(n,t._noAnimation),t._resizing||t.hideLoadingIndicator(),t):t._valueIndicator.value()},_subvalues:function(n){var t=this;return arguments.length?(t._subvalueIndicatorsSet.values(n,t._noAnimation),t._resizing||t.hideLoadingIndicator(),t):t._subvalueIndicatorsSet.values()},_refresh:function(){var n=this,t=n.callBase;n._endLoading(function(){t.call(n)})},render:function(n){return n&&n.animate!==i&&!n.animate&&(this._noAnimation=!0),this._refresh(),this},value:function(n){var t=this;return arguments.length?(t._value(n),t.option(h,t._value()),t):t._value()},subvalues:function(n){var t=this;return arguments.length?(t._subvalues(n),t.option(o,t._subvalues()),t):t._subvalues()},_optionChanged:function(n,t){var u=this;switch(n){case h:return u._value(t),u.option(h,u._value()),null;case o:return u._subvalues(t),u.option(o,u._subvalues()),null;case w:return u._updateLoadIndicator(r(!0,{},u._themeManager.getPartialTheme(w),u.option(w))),null;default:return u._invalidate(),u.callBase.apply(u,arguments)}},_optionValuesEqual:function(n,t,i){switch(n){case h:return t===i;case o:return rt(t,i);default:return this.callBase.apply(this,arguments)}}}).include(p.widgetMarkupMixin).include(p.loadIndicatorMixin.base).redefine(p.loadIndicatorMixin.gauge),n.viz.gauges.__internals.ValueIndicatorsSet=n.Class.inherit({ctor:function(n){var t=this;t._parameters=n,t._createIndicator=t._parameters.createIndicator||l,t._getIndicatorSettings=t._parameters.getIndicatorSettings||l,t._root=t._parameters.renderer.createGroup({"class":t._parameters.className})},dispose:function(){var n=this;return n._indicators&&u(n._indicators,function(n,t){t.dispose()}),n._parameters=n._createIndicator=n._getIndicatorSettings=n._root=n._options=n._indicators=null,n},setSettings:function(n,t){var i=this;return i._indicatorSettings=n,i._enabled=t!==null&&(s(t)||c(t)),i._options={offset:n.offset},i},init:function(n){return r(!0,this._options,n),this},prepare:function(n){var t=this;return t._enabled&&(t._root.append(t._parameters.owner),t._indicatorParameters=t._indicatorParameters||{renderer:t._parameters.renderer,translator:t._parameters.translator,owner:t._root,tracker:t._parameters.tracker,className:t._parameters.indicatorClassName},t._indicators=t._indicators||[],t._createIndicator()&&(t._indicators=k(t._indicators,function(i,r){return n&&(i.dispose(),i=t._createIndicator(),i.setup(t._indicatorParameters),i._trackerInfo={type:t._parameters.trackerType,index:r}),i.init(t._indicatorSettings),i}))),t},measure:function(){var n=this,t=n._createIndicator(),i=null;return t&&n._enabled&&(t.setup(n._indicatorParameters).init(n._indicatorSettings).init(n._options),i=t.measure(),t.clean().dispose()),i},clean:function(){var n=this;return n._root.detach(),n._enabled&&u(n._indicators,function(n,t){t.clean()}),n},render:function(){var n=this;return n._enabled&&(n._root.append(n._parameters.owner),u(n._indicators,function(t,i){i.init(n._options).init(n._getIndicatorSettings(t)).render()})),n},_adjustIndicatorsCount:function(n){var i=this,r=i._indicators,t,f,e,u;if(r.length>n){for(t=n,f=r.length;t<f;++t)r[t].clean().dispose();i._indicators=r.slice(0,n)}else if(r.length<n)for(t=r.length,f=n;t<f;++t)u=i._createIndicator(),u.setup(i._indicatorParameters),u._trackerInfo={type:i._parameters.trackerType,index:t},u.init(i._indicatorSettings).init(i._options).init(i._getIndicatorSettings(t)).render(),r.push(u)},values:function(n,t){var i=this;if(i._enabled)return arguments.length?(s(n)||(n=c(n)?[f(n)]:null),n&&(i._adjustIndicatorsCount(n.length),u(i._indicators,function(i,r){r.value(n[i],t)})),i):k(i._indicators,function(n){return n.value()})}})}(DevExpress,jQuery),function(n,t,i){function w(n,t){var s=c(n),h=c(t),i=s.cos,u=s.sin,e=h.cos,o=h.sin;return{left:u<=0&&o>=0||u<=0&&o<=0&&i<=e||u>=0&&o>=0&&i>=e?-1:f(i,e,0),right:u>=0&&o<=0||u>=0&&o>=0&&i>=e||u<=0&&o<=0&&i<=e?1:r(i,e,0),up:i<=0&&e>=0||i<=0&&e<=0&&u>=o||i>=0&&e>=0&&u<=o?-1:-r(u,o,0),down:i>=0&&e<=0||i>=0&&e>=0&&u<=o||i<=0&&e<=0&&u>=o?1:-f(u,o,0)}}var u=n.viz.gauges.__factory,o=window.isFinite,s=window.Number,h=n.utils.normalizeAngle,c=n.utils.getCosAndSin,l=Math.abs,r=Math.max,f=Math.min,e=Math.round,b=Array.prototype.slice,a=t.extend,v=t.each,y=Math.PI,p={geometry:{startAngle:225,endAngle:-45,totalRadius:i},scale:{orientation:"outside",label:{indentFromTick:10}},rangeContainer:{orientation:"outside"},valueIndicator:{type:"rectangleneedle",_default:{offset:20,indentFromCenter:0,width:2,spindleSize:14,spindleGapSize:10},triangleneedle:{width:4},triangle:{width:4},twocolorneedle:{space:2,secondFraction:.4},twocolorrectangle:{space:2,secondFraction:.4},rangebar:{offset:30}},subvalueIndicator:{type:"trianglemarker",trianglemarker:{offset:6},triangle:{offset:6},textcloud:{offset:-6}},valueIndicators:{_type:"rectangleneedle",_default:{offset:20,indentFromCenter:0,width:2,spindleSize:14,spindleGapSize:10},triangleneedle:{width:4},twocolorneedle:{space:2,secondFraction:.4},rangebar:{offset:30},trianglemarker:{offset:6},textcloud:{offset:-6}}};n.viz.gauges.CircularGauge=n.viz.gauges.Gauge.inherit({_rootClass:"dxg-circular-gauge",_getDefaultSettings:function(){return a(!0,this.callBase(),p)},_selectMode:function(){this.callBase.apply(this,arguments),typeof this.indicatorValue=="function"&&(this._createValueIndicatorInHardMode=function(n){return u.createCircularValueIndicatorInHardMode(n)})},_setupArea:function(n){var r=this,u=r.option("geometry")||{},i=u.startAngle,t=u.endAngle,f;i=o(i)?h(i):r._defaultSettings.geometry.startAngle,t=o(t)?h(t):r._defaultSettings.geometry.endAngle,l(i-t)<1?(t-=360,n.sides={left:-1,up:-1,right:1,down:1}):(i<t&&(t-=360),n.sides=w(i,t)),n.x=0,n.y=0,n.radius=100,n.startCoord=i,n.endCoord=t,n.scaleRadius=u.scaleRadius>0?s(u.scaleRadius):r._defaultSettings.geometry.scaleRadius},_measureMainElements:function(){var s=this,n=0,u=Infinity,t=0,i=0,e=0,o=0;return v(s._measureElements,function(s,h){var c=h.measure();c&&(c.min>0&&(u=f(u,c.min)),c.max>0&&(n=r(n,c.max)),c.horizontalOffset>0&&(t=r(t,c.max+c.horizontalOffset)),c.verticalOffset>0&&(i=r(i,c.max+c.verticalOffset)),c.inverseHorizontalOffset>0&&(e=r(e,c.inverseHorizontalOffset)),c.inverseVerticalOffset>0&&(o=r(o,c.inverseVerticalOffset)))}),t=r(t-n,0),i=r(i-n,0),{minRadius:u,maxRadius:n,horizontalMargin:t,verticalMargin:i,inverseHorizontalMargin:e,inverseVerticalMargin:o}},_applyMainLayout:function(){var s=this,i=s._measureMainElements(),r=s._area,n=r.sides,u={left:(n.left<-.1?i.horizontalMargin:i.inverseHorizontalMargin)||0,right:(n.right>.1?i.horizontalMargin:i.inverseHorizontalMargin)||0,top:(n.up<-.1?i.verticalMargin:i.inverseVerticalMargin)||0,bottom:(n.down>.1?i.verticalMargin:i.inverseVerticalMargin)||0},t=s._layoutManager.selectRectByAspectRatio((n.down-n.up)/(n.right-n.left),u),o=f(t.width()/(n.right-n.left),t.height()/(n.down-n.up)),c,l,h=(i.maxRadius-r.radius+r.scaleRadius)/o;0<h&&h<1&&(t=t.scale(h),o*=h),o=o-i.maxRadius+r.radius,c=t.left-t.width()*n.left/(n.right-n.left),l=t.top-t.height()*n.up/(n.down-n.up),r.x=e(c),r.y=e(l),r.radius=o,t.left-=u.left,t.right+=u.right,t.top-=u.top,t.bottom+=u.bottom,s._layoutManager.setRect(t)},_updateElementPosition:function(n){var t=this._area;n.init({x:t.x,y:t.y,radius:e(t.radius-(s(n._options.offset)||0))})},_createScale:function(){return u.createCircularScale()},_createRangeContainer:function(){return u.createCircularRangeContainer()},_createValueIndicator:function(n){return u.createCircularValueIndicator(n)},_createSubvalueIndicator:function(n){return u.createCircularSubvalueIndicator(n)},_getApproximateScreenRange:function(){var i=this,n=i._area,t=f(i._mainRect.width()/(n.sides.right-n.sides.left),i._mainRect.height()/(n.sides.down-n.sides.up));return t>n.totalRadius&&(t=n.totalRadius),t=.8*t,-i._translator.getCodomainRange()*t*y/180},_getDefaultContainerSize:function(){return{width:300,height:300}},_getPreset:function(){var t=this.option("preset"),n;return n=t==="preset2"?{commonNeedleSettings:{type:"twocolorrectangle"},commonMarkerSettings:{type:"triangle"}}:t==="preset3"?{commonNeedleSettings:{type:"rectangle"},commonMarkerSettings:{type:"triangle"}}:{commonNeedleSettings:{type:"rectangle"},commonMarkerSettings:{type:"textcloud"}}},_createNeedle:function(n){return u.createCircularNeedle(n)},_createMarker:function(n){return u.createCircularMarker(n)},_createRangeBar:function(){return u.createCircularRangeBar()},_prepareMainElements:function(){this.callBase(),this._prepareObsoleteSpindle()},_renderMainElements:function(){this.callBase(),this._renderObsoleteSpindle()},_prepareObsoleteSpindle:function(){var n=this,t=n.option("spindle")||{},f=n._needles&&("visible"in t?!!t.visible:!0),r,i;if(f&&(r=n._defaultSettings.valueIndicator._default,i=t.size||r.spindleSize,f=i>0),f){var e=n._themeManager.getPartialTheme("valueIndicator")._default,u=t.gapSize||r.spindleGapSize,o=t.color||e.color||r.color;u=u<=i?u:i,n._spindle=n._spindle||n._renderer.createGroup({"class":"dxg-value-indicator"}),n._spindleOuter=n._spindleOuter||n._renderer.createCircle(0,0,0,{"class":"dxg-spindle-border",stroke:"none",strokeWidth:0}).append(n._spindle),n._spindleInner=n._spindleInner||n._renderer.createCircle(0,0,0,{"class":"dxg-spindle-hole",stroke:"none",strokeWidth:0}).append(n._spindle),n._spindleOuter.applySettings({cx:n._area.x,cy:n._area.y,r:i/2,fill:o}),n._spindleInner.applySettings({cx:n._area.x,cy:n._area.y,r:u/2,fill:n._containerBackgroundColor})}else n._spindle&&n._spindle.remove(),delete n._spindle,delete n._spindleOuter,delete n._spindleInner},_renderObsoleteSpindle:function(){var n=this;n._spindle&&(n._spindleOuter.applySettings({cx:n._area.x,cy:n._area.y}),n._spindleInner.applySettings({cx:n._area.x,cy:n._area.y}),n._spindle.append(n._rootElement))}})}(DevExpress,jQuery),function(n,t,i){var r=n.viz.gauges.__factory,f=Math.max,e=Math.min,u=Math.round,c=Array.prototype.slice,o=t.extend,s=t.each,h={geometry:{orientation:"horizontal",totalSize:i},scale:{horizontalOrientation:"right",verticalOrientation:"bottom",label:{indentFromTick:-10}},rangeContainer:{horizontalOrientation:"right",verticalOrientation:"bottom"},valueIndicator:{type:"rangebar",_default:{offset:2.5,length:15,width:15},rectangle:{width:10},rangebar:{offset:10,horizontalOrientation:"right",verticalOrientation:"bottom"}},subvalueIndicator:{type:"trianglemarker",_default:{offset:-1,horizontalOrientation:"left",verticalOrientation:"top"}},valueIndicators:{_type:"rectangle",_default:{offset:2.5,length:15,width:15},rectangle:{width:10},rangebar:{offset:10,horizontalOrientation:"right",verticalOrientation:"bottom"},trianglemarker:{offset:-1,horizontalOrientation:"left",verticalOrientation:"top"},textcloud:{offset:-1,horizontalOrientation:"left",verticalOrientation:"top"}}};n.viz.gauges.LinearGauge=n.viz.gauges.Gauge.inherit({_rootClass:"dxg-linear-gauge",_getDefaultSettings:function(){return o(!0,this.callBase(),h)},_selectMode:function(){this.callBase.apply(this,arguments),typeof this.indicatorValue=="function"&&(this._createValueIndicatorInHardMode=function(n){return r.createLinearValueIndicatorInHardMode(n)})},_setupArea:function(n){var t=this.option("geometry")||{};n.vertical=t.orientation==="vertical",n.x=0,n.y=0,n.startCoord=-100,n.endCoord=100,n.scaleSize=t.scaleSize>0?Number(t.scaleSize):this._defaultSettings.geometry.scaleSize},_measureMainElements:function(){var r=this,n=1e3,t=0,i=0;return s(r._measureElements,function(r,u){var o=u.measure();o&&(t=f(t,o.max),n=e(n,o.min),o.indent>0&&(i=f(i,o.indent)))}),{minBound:n,maxBound:t,indent:i}},_applyMainLayout:function(){var r=this,n=r._measureMainElements(),t=r._area,i,f,e=t.scaleSize+2*n.indent;t.vertical?(i=r._layoutManager.selectRectBySizes({width:n.maxBound-n.minBound,height:e}),f=i.horizontalMiddle()-(n.minBound+n.maxBound)/2,t.startCoord=i.bottom-n.indent,t.endCoord=i.top+n.indent,t.x=u(t.x+f)):(i=r._layoutManager.selectRectBySizes({height:n.maxBound-n.minBound,width:e}),f=i.verticalMiddle()-(n.minBound+n.maxBound)/2,t.startCoord=i.left+n.indent,t.endCoord=i.right-n.indent,t.y=u(t.y+f)),r._layoutManager.setRect(i)},_updateElementPosition:function(n){var t=this._area;n.init({x:u(t.x+(Number(n._options.offset)||0)),y:u(t.y+(Number(n._options.offset)||0)),orientation:t.vertical?"vertical":"horizontal"})},_createScale:function(){return r.createLinearScale()},_createRangeContainer:function(){return r.createLinearRangeContainer()},_createValueIndicator:function(n){return r.createLinearValueIndicator(n)},_createSubvalueIndicator:function(n){return r.createLinearSubvalueIndicator(n)},_getApproximateScreenRange:function(){var t=this,i=t._area,n=i.vertical?t._mainRect.height():t._mainRect.width();return n>i.totalSize&&(n=i.totalSize),n=n*.8},_getDefaultContainerSize:function(){var n=this.option("geometry")||{};return n.orientation==="vertical"?{width:100,height:300}:{width:300,height:100}},_getPreset:function(){var t=this.option("preset"),n;return n=t==="preset2"?{commonNeedleSettings:{type:"rhombus"},commonMarkerSettings:{type:"triangle"}}:{commonNeedleSettings:{type:"circle"},commonMarkerSettings:{type:"textcloud"}}},_createNeedle:function(n){return r.createLinearNeedle(n)},_createMarker:function(n){return r.createLinearMarker(n)},_createRangeBar:function(){return r.createLinearRangeBar()}})}(DevExpress,jQuery),function(n,t,i){function a(n,t){var i=this;i._context=t,i._background=t.renderer.createArc().append(t.group),i._background.applySettings({fill:t.backgroundColor}),i._bar=t.renderer.createArc().append(t.group),t.textEnabled&&(i._line=t.renderer.createPath([],{strokeWidth:t.lineWidth}).append(t.group),i._text=t.renderer.createText("",0,0,t.textOptions).append(t.group)),i._tracker=t.renderer.createArc(),t.tracker.attach(i._tracker,i,{index:n}),i._index=n,i._angle=t.baseAngle,i._settings={x:t.x,y:t.y,startAngle:t.baseAngle,endAngle:t.baseAngle}}function v(n,t,i){n.startAngle=t<i?t:i,n.endAngle=t<i?i:t}function tt(n,t){if(n===t)return!0;if(s(n)&&s(t)&&n.length===t.length){for(var i=0,r=n.length;i<r;++i)if(n[i]!==t[i])return!1;return!0}return!1}var y=Math.PI,h=300,c=300,u=window.Number,e=window.isFinite,o=Math.round,p=Math.floor,s=n.utils.isArray,w=n.utils.convertAngleToRendererSpace,l=n.utils.getCosAndSin,r=t.noop,f=t.extend,b=n.viz.gauges.__internals.getSampleText,k=n.viz.gauges.__internals.formatValue,d=n.viz.core.Palette,g=n.viz.gauges.CircularGauge.prototype._setupArea,nt=n.viz.gauges.CircularGauge.prototype._applyMainLayout;n.viz.gauges.BarGauge=n.viz.gauges.Gauge.inherit({_rootClass:"dxbg-bar-gauge",_getDefaultSettings:function(){return{redrawOnResize:!0,incidentOccured:r,geometry:{startAngle:225,endAngle:-45}}},_init:function(){var n=this;n.callBase.apply(n,arguments),n._barsGroup=n._renderer.createGroup({"class":"dxbg-bars"}),n._values=[],n._context={renderer:n._renderer,translator:n._translator,tracker:n._tracker,group:n._barsGroup},n._animateStep=function(t){for(var r=n._bars,i=0,u=r.length;i<u;++i)r[i].animate(t)},n._animateComplete=function(){for(var i=n._bars,t=0,r=i.length;t<r;++t)i[t].endAnimation()}},_dispose:function(){var n=this;n.callBase.apply(n,arguments),n._barsGroup=n._values=n._context=n._animateStep=n._animateComplete=null},_getCanvas:function(){var r=this,f=r.option("size")||{},n=u(f.width),t=u(f.height),i;return n>=0&&t>=0||(i=r._element(),n=n>=0?n:i.width()||h,t=t>=0?t:i.height()||c,r._renderer.resize(n,t),n=i.width()===n?n:h,t=i.height()===t?t:c,r._renderer.resize(n,t)),{width:n,height:t,marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}},_getArea:function(){var t=this,n={};return n.startValue=e(n.startValue=t.option("startValue"))?u(n.startValue):0,n.endValue=e(n.endValue=t.option("endValue"))?u(n.endValue):100,g.call(t,n),delete n.scaleRadius,t._translator.setup({domainStart:n.startValue,domainEnd:n.endValue,codomainStart:n.startCoord,codomainEnd:n.endCoord}),n.baseValue=e(t._translator.adjust(n.baseValue=t.option("baseValue")))?n.baseValue:n.startValue<n.endValue?n.startValue:n.endValue,n},_getApproximateScreenRange:function(){var n=this,t=n._area.sides,i=n._mainRect.width()/(t.right-t.left),r=n._mainRect.height()/(t.down-t.up),u=i<r?i:r;return-n._translator.getCodomainRange()*u*y/180},_setupAnimationSettings:function(){this.callBase(),this._animationSettings&&f(this._animationSettings,{step:this._animateStep,complete:this._animateComplete})},_clean:function(){var n=this,t,i;for(n._barsGroup.detach(),n._animationSettings&&n._barsGroup.stopAnimation(),t=0,i=n._bars.length;t<i;++t)n._bars[t].dispose();n._palette=n._bars=null,n.callBase.apply(n,arguments)},_prepareMainElements:r,_measureMainElements:function(){var n=this,e={maxRadius:n._area.radius},t=n.option("label"),o,r;return n._barsGroup.append(n._rootElement),n._context.textEnabled=t===i||t&&(!("visible"in t)||t.visible),n._context.textEnabled&&(t=f(!0,{},n._themeManager.theme().label,t),n._context.formatOptions={format:t.format!==i||t.precision!==i?t.format:n._defaultFormatOptions.format,precision:t.format!==i||t.precision!==i?t.precision:n._defaultFormatOptions.precision,customizeText:t.customizeText},n._context.textOptions={font:f({},n._themeManager.theme().label.font,t.font,{color:null}),align:"center"},n._textIndent=t.indent>0?u(t.indent):0,n._context.lineWidth=t.connectorWidth>0?u(t.connectorWidth):0,o=n._renderer.createText(b(n._translator,n._context.formatOptions),0,0,n._context.textOptions).append(n._barsGroup),r=o.getBBox(),o.detach(),n._context.textVerticalOffset=-r.y-r.height/2,e.maxRadius+=n._textIndent,e.horizontalMargin=n._context.textWidth=r.width,e.verticalMargin=n._context.textHeight=r.height),e},_applyMainLayout:nt,_renderMainElements:function(){var n=this,t=f({},n._themeManager.theme(),n.option()),i;n._palette=new d(t.palette,{stepHighlight:50,theme:n._themeManager.themeName()}),i=t.relativeInnerRadius>0&&t.relativeInnerRadius<1?u(t.relativeInnerRadius):.1,n._outerRadius=o(n._area.radius),n._innerRadius=o(n._outerRadius*i),n._barSpacing=t.barSpacing>0?u(t.barSpacing):0,f(n._context,{backgroundColor:t.backgroundColor,x:n._area.x,y:n._area.y,startAngle:n._area.startCoord,endAngle:n._area.endCoord,baseAngle:n._translator.translate(n._area.baseValue)}),n._bars=[],n._updateValues(n.option("values"))},_setBarsCount:function(n){var t=this,i,r;if(t._bars.length>n){for(i=n,r=t._bars.length;i<r;++i)t._bars[i].dispose();t._bars.splice(n,r-n),t._arrangeBars()}else if(t._bars.length<n){for(i=t._bars.length,r=n;i<r;++i)t._bars.push(new a(i,t._context));t._arrangeBars()}t._bars.length>0?t._dummyBackground&&(t._dummyBackground.detach(),t._dummyBackground=null):t._dummyBackground||(t._dummyBackground=t._renderer.createArc().append(t._barsGroup),t._dummyBackground.applySettings({x:t._context.x,y:t._context.y,outerRadius:t._outerRadius,innerRadius:t._innerRadius,startAngle:t._context.endAngle,endAngle:t._context.startAngle,fill:t._context.backgroundColor}))},_arrangeBars:function(){var n=this,t=0,r=n._bars.length,u=p((n._outerRadius-n._innerRadius+n._barSpacing)/r),i=n._outerRadius;for(n._context.barSize=u-n._barSpacing,n._context.textRadius=i+n._textIndent,n._palette.reset();t<r;++t)n._bars[t].arrange({color:n._palette.getNextColor(),radius:i}),i-=u},_updateBars:function(){for(var t=this,n=0,i=t._bars.length;n<i;++n)t._bars[n].setValue(t._values[n])},_animateBars:function(){var n=this,t=0,i=n._bars.length;if(i>0){for(;t<i;++t)n._bars[t].beginAnimation(n._values[t]);n._barsGroup.animate({_:0},n._animationSettings)}},_updateValues:function(n){var i=this,f=s(n)&&n||e(n)&&[n]||[],r=0,o=f.length,u;for(i._values=[];r<o;++r)u=i._translator.adjust(f[r]),e(u)&&i._values.push(u);i._animationSettings&&i._barsGroup.stopAnimation(),i._setBarsCount(i._values.length),i._animationSettings&&!i._noAnimation?i._animateBars():i._updateBars(),i.option("values",i._values),i.hideLoadingIndicator()},values:function(n){return n!==i?(this._updateValues(n),this):this._values.slice(0)},_optionChanged:function(n,t){switch(n){case"values":tt(t,this._values)||this._updateValues(t);break;default:this.callBase.apply(this,arguments)}},_selectMode:r,_renderDeltaIndicator:r,_updateElementPosition:r,_disposeValueIndicators:r,_cleanValueIndicators:r,_updateActiveElements:r,_updateIndicatorSettings:null,_prepareValueIndicatorSettings:null,_prepareSubvalueIndicatorSettings:null,_prepareScale:null,_prepareRangeContainer:null,_prepareValueIndicators:null,_prepareValueIndicator:null,_prepareSubvalueIndicators:null,_createScale:null,_createRangeContainer:null,_createSubvalueIndicator:null,_value:null,_subvalues:null,value:null,subvalues:null}),n.viz.gauges.BarGauge.prototype._themeManagerType=n.viz.gauges.__internals.ThemeManager.inherit({_themeSection:"barGauge",_initializeTheme:function(){var n=this;n._initializeFont(n._theme.label.font),n._initializeFont(n._theme.title.font),n._initializeFont(n._theme.tooltip.font),n._initializeFont(n._theme.loadingIndicator.font)}}),f(a.prototype,{dispose:function(){var n=this;return n._background.detach(),n._bar.detach(),n._context.textEnabled&&(n._line.detach(),n._text.detach()),n._context.tracker.detach(n._tracker),n._context=n._settings=n._background=n._bar=n._line=n._text=n._tracker=null,n},arrange:function(n){var t=this;return t._settings.outerRadius=n.radius,t._settings.innerRadius=n.radius-t._context.barSize,t._background.applySettings(f({},t._settings,{startAngle:t._context.endAngle,endAngle:t._context.startAngle})),t._bar.applySettings(t._settings),t._tracker.applySettings(t._settings),t._color=n.color,t._bar.applySettings({fill:n.color}),t._context.textEnabled&&(t._line.applySettings({points:[t._context.x,t._context.y-t._settings.innerRadius,t._context.x,t._context.y-t._context.textRadius],stroke:n.color}),t._text.applySettings({font:{color:n.color}})),t},getTooltipParameters:function(){var n=this,t=l((n._angle+n._context.baseAngle)/2);return{x:o(n._context.x+(n._settings.outerRadius+n._settings.innerRadius)/2*t.cos),y:o(n._context.y-(n._settings.outerRadius+n._settings.innerRadius)/2*t.sin),offset:0,color:n._color,value:n._value}},setValue:function(n){var t=this,i;return t._value=n,t._angle=t._context.translator.translate(n),v(t._settings,t._context.baseAngle,t._angle),t._bar.applySettings(t._settings),t._tracker.applySettings(t._settings),t._context.textEnabled&&(t._line.rotate(w(t._angle),t._context.x,t._context.y),i=l(t._angle),t._text.applySettings({text:k(n,t._context.formatOptions,{index:t._index}),x:t._context.x+(t._context.textRadius+t._context.textWidth*.6)*i.cos,y:t._context.y-(t._context.textRadius+t._context.textHeight*.6)*i.sin+t._context.textVerticalOffset})),t},beginAnimation:function(n){var t=this;t._value=n,t._delta=t._context.translator.translate(n)-t._angle,t._delta!==0?t._context.textEnabled&&(t._line.applySettings({visibility:"hidden"}),t._text.applySettings({visibility:"hidden"})):(t.setValue(t._value),t.animate=r)},animate:function(n){var t=this,i=t._angle+t._delta*n;v(t._settings,t._context.baseAngle,i),t._bar.applySettings(t._settings)},endAnimation:function(){var n=this;n._delta!==0?(n._context.textEnabled&&(n._line.applySettings({visibility:null}),n._text.applySettings({visibility:null})),n.setValue(n._value)):delete n.animate,delete n._delta}}),n.ui.registerComponent("dxBarGauge",n.viz.gauges.BarGauge)}(DevExpress,jQuery),function(n,t,i){var u=n.formatHelper,f=window.String,e=n.utils.isFunction,r=t.extend;n.viz.gauges.__internals.Tooltip=n.Class.inherit({_innerType:n.viz.charts.Tooltip,ctor:function(n){var t=this;t._container=n.container,t._tracker=n.tracker,t._root=n.renderer.createGroup({"class":"dxg-tooltip"}),t._inner=new t._innerType({renderer:n.renderer},t._root),t._inner.draw(),t._inner.text.applySettings({"class":"dxg-text"}),t._options={};var i=function(n,i){return t._prepare(n,i)},r=function(){return t._show()},u=function(){return t._hide()};t._dispose=function(){t=r=u=i=t._dispose=null},t._tracker.setCallbacks({"tooltip-prepare":i,"tooltip-show":r,"tooltip-hide":u})},dispose:function(){var n=this;return n._dispose(),n.clear(),n._root.clear(),n._root.dispose(),n._inner.dispose(),n._root=n._inner=n._container=n._tracker=n._options=null,n},init:function(n){return r(!0,this._options,n),this},render:function(){var n=this,t=n._options;return n._root.detach(),n._inner.update({canvasWidth:n._width,canvasHeight:n._height,arrowLength:t.arrowLength,paddingLeftRight:t.horizontalPadding,paddingTopBottom:t.verticalPadding,color:t.color}),n._inner.text.applySettings({font:t.font}),n._tracker.setTooltipState(n._options.enabled),n._options.enabled&&n._root.append(n._container),n},clear:function(){return this._root.detach(),this._tracker.setTooltipState(!1),this},setRect:function(n){return this._width=n.width(),this._height=n.height(),this},_formatValue:function(n,t){var s=this._options,o=u.format(n,s.format,s.precision),h;return e(s.customizeText)&&(h=r({value:n,valueText:o},t),o=s.customizeText.call(h,h),o=o!==null&&o!==i?f(o):""),o},_prepare:function(n,t){var i=n.getTooltipParameters();return(i.text=this._formatValue(i.value,t))&&(this._parameters=i),!!i.text},_show:function(){var n=this._parameters;this._parameters=null,this._inner.move(n.x,n.y,n.offset,n.text,n.color),this._inner.show()},_hide:function(){this._inner.hide()}})}(DevExpress,jQuery),function(n,t){function y(n){var t=n.data.tracker;t._x=n.pageX,t._y=n.pageY;t._element.off(e).on(e,n.data);t._showTooltip(n,h)}function p(n){var t=n.data.tracker;(t._showTooltipTimeout&&s(n.pageX-t._x)>4||s(n.pageY-t._y)>4)&&(t._x=n.pageX,t._y=n.pageY,t._showTooltip(n,h))}function w(n){var t=n.data.tracker;t._element.off(e),t._hideTooltip(a)}function b(n){n.preventDefault();var t=r;t&&t!==n.data.tracker&&t._hideTooltip(f),t=r=n.data.tracker,t._showTooltip(n,v),t._touch=!0}function k(){var t=r;t&&(t._touch||(t._hideTooltip(f),r=null),t._touch=null)}function d(){var t=r;t&&t._showTooltipTimeout&&(t._hideTooltip(f),r=null)}var o=window.setTimeout,u=window.clearTimeout,g=t.extend,s=Math.abs,h=300,a=300,v=400,f=300,r;n.viz.gauges.__internals.Tracker=n.Class.inherit({ctor:function(n){var t=this;t._container=n.container,t._element=n.renderer.createGroup({"class":"dxg-tracker",stroke:"none",strokeWidth:0,fill:"#000000",opacity:.0001}),t._showTooltipCallback=function(){t._showTooltipTimeout=null;var n=t._tooltipEvent.target;t._targetEvent=null,t._tooltipTarget!==n&&(t._tooltipTarget=n,t._callbacks["tooltip-show"]())},t._hideTooltipCallback=function(){t._hideTooltipTimeout=null,t._targetEvent=null,t._tooltipTarget&&(t._callbacks["tooltip-hide"](),t._tooltipTarget=null)},t._dispose=function(){t=t._showTooltipCallback=t._hideTooltipCallback=t._dispose=null}},dispose:function(){var n=this;return n._dispose(),n.deactivate(),n._element.off(),n._container=n._element=n._context=n._callbacks=null,n},activate:function(){return this._element.append(this._container),this},deactivate:function(){return this._element.detach(),this._element.clear(),this},attach:function(n,t,i){return n.data({target:t,info:i}),n.append(this._element),this},detach:function(n){return n.detach(),n.removeData(),this},setTooltipState:function(n){var t=this,i;if(t._element.off(c).off(l),n){i={tracker:t};t._element.on(c,i).on(l,i)}return t},setCallbacks:function(n){return this._callbacks=n,this},_showTooltip:function(n,i){var r=this,f=t(n.target).data();(r._tooltipTarget===n.target||r._callbacks["tooltip-prepare"](f.target,f.info))&&(u(r._hideTooltipTimeout),r._hideTooltipTimeout=null,u(r._showTooltipTimeout),r._tooltipEvent=n,r._showTooltipTimeout=o(r._showTooltipCallback,i))},_hideTooltip:function(n){var t=this;u(t._showTooltipTimeout),t._showTooltipTimeout=null,u(t._hideTooltipTimeout),t._hideTooltipTimeout=o(t._hideTooltipCallback,n)}});var c={"mouseover.gauge-tooltip":y,"mouseout.gauge-tooltip":w},e={"mousemove.gauge-tooltip":p},l={"touchstart.gauge-tooltip":b};r=null;t(window.document).on({"touchstart.gauge-tooltip":k,"touchend.gauge-tooltip":d})}(DevExpress,jQuery),function(n){n.ui.registerComponent("dxCircularGauge",n.viz.gauges.CircularGauge)}(DevExpress),function(n){n.ui.registerComponent("dxLinearGauge",n.viz.gauges.LinearGauge)}(DevExpress),DevExpress.MOD_VIZ_GAUGES=!0}if(!DevExpress.MOD_VIZ_RANGESELECTOR){if(!window.DevExpress)throw Error("Required module is not referenced: core");if(!DevExpress.MOD_VIZ_CORE)throw Error("Required module is not referenced: viz-core");(function(n){n.viz.rangeSelector={utils:{}}})(DevExpress),function(n){DevExpress.viz.rangeSelector.BaseVisualElement=n.Class.inherit({ctor:function(n){this._renderer=n,this._isDrawn=!1},applyOptions:function(n){this._options=n||{},this._applyOptions(this._options)},_applyOptions:function(){},redraw:function(n){var t=this;t._isDrawn?t._update(n||t._group):(t._isDrawn=!(t._draw(n||t._group)===!1),n&&(t._group=n))},isDrawn:function(){return!!this._isDrawn},isInitialized:function(){return!!this._options},_draw:function(){},_update:function(n){n.clear(),this._draw(n)}})}(DevExpress),function(n,t,i){var u=t.viz.rangeSelector,r=t.utils,s=t.data.utils,f=u.utils,h=t.viz.core.ParseUtils,e=t.formatHelper,o=t.viz.core,c=100;u.consts={fontHeightRatio:.55,emptySliderMarkerText:". . ."},u.formatValue=function(n,t){var i={value:n,valueText:e.format(n,t.format,t.precision)};return String(r.isFunction(t.customizeText)?t.customizeText.call(i,i):i.valueText)},u.RangeSelector=t.ui.Component.inherit(function(){var y=5,p={size:i,margin:{left:0,top:0,right:0,bottom:0},scale:{showCustomBoundaryTicks:!0,showMinorTicks:!0,startValue:i,endValue:i,minorTickCount:i,minorTickInterval:i,majorTickInterval:i,useTicksAutoArrangement:!0,setTicksAtUnitBeginning:!0,minRange:i,maxRange:i,placeholderHeight:i,valueType:i,label:{visible:!0,format:i,precision:i,customizeText:i},marker:{visible:!0,label:{format:i,precision:i,customizeText:i}}},selectedRange:i,sliderMarker:{visible:!0,format:i,precision:i,customizeText:i,placeholderSize:i},behavior:{snapToTicks:!0,animationEnabled:!0,moveSelectedRangeByClick:!0,manualRangeSelectionEnabled:!0,allowSlidersSwap:!0,callSelectedRangeChanged:"onMovingComplete"},background:{color:"#C0BAE1",visible:!0,image:{url:i,location:"full"}},chart:{commonSeriesSettings:{type:"area",label:{visible:!1},hoverMode:"none"},equalBarWidth:!0,topIndent:.1,bottomIndent:0,valueAxis:{min:i,max:i,inverted:!1},series:i},dataSource:i,dataSourceField:"arg",redrawOnResize:!0,theme:i,selectedRangeChanged:null,incidentOccured:n.noop},o=function(n,t,r){var o=t===i?u.consts.emptySliderMarkerText:u.formatValue(t,r),e=f.getTextBBox(n,o,r.font);return{width:Math.ceil(e.width)+2*r.padding,height:Math.ceil(e.height*u.consts.fontHeightRatio)+2*r.padding+r.pointerSize}},c=function(n,t,i){var r=u.formatValue(t,i.label),e=f.getTextBBox(n,r,i.label.font);return Math.ceil(e.width/2)},w=function(n,t,i){var r={left:t.left+i.left,top:t.top+i.top,width:n.width-t.left-t.right-i.left-i.right,height:n.height-t.top-t.bottom-i.top-i.bottom};return r.width<=0&&(r.width=1),r},b=function(n){var t,i,u;return r.isNumber(n)?t=i=u=n:n&&(r.isNumber(n.height)&&(u=n.height),r.isNumber(n.width)?t=i=n.width:n.width&&(r.isNumber(n.width.left)&&(t=n.width.left),r.isNumber(n.width.right)&&(i=n.width.right))),{widthLeft:t,widthRight:i,height:u}},k=function(n,t,i,r){var h,a=0,v=0,l,y,u=0,f=0,e=0,s;return s=b(r.placeholderSize),u=s.widthLeft||0,f=s.widthRight||0,e=s.height||0,r.visible&&(h=o(n,i.startValue,r),u||(u=h.width),l=o(n,i.endValue,r),f||(f=l.width),e||(e=Math.max(h.height,l.height))),i.label.visible&&(a=c(n,i.startValue,i),v=c(n,i.endValue,i)),u=Math.max(u,a),f=Math.max(f,v),{left:u,right:f,top:e,bottom:0}},d=function(n){n&&n.empty()},g=function(n){return n._element()},nt=function(n){return u.rangeSelectorFactory.createRangeContainer(n)},tt=function(n,t){return u.rangeSelectorFactory.createTranslator(n,t)},it=function(n,t,i){return{left:t.left,top:t.top,right:n.width-t.width-t.left,bottom:n.height-t.height-t.top+i,width:n.width,height:n.height}},rt=function(n){var t=n.option("renderer");return t?t:t=u.rangeSelectorFactory.createRenderer()},ut=function(n){return u.rangeSelectorFactory.createThemeManager(n)},l=function(t,i){var r=[n.type(t),n.type(i)];return n.inArray(),n.inArray("date",r)!=-1?"datetime":n.inArray("number",r)!=-1?"numeric":""},ft=function(n){var r,f=n._dataSource&&n._dataSource.items(),t=n.option("scale"),i=t.valueType;return i||(i=l(t.startValue,t.endValue)),(f||n.option("chart").series)&&(r=new u.SeriesDataSource({renderer:n.renderer,dataSource:f,valueType:(i||"").toLowerCase(),chart:n.option("chart"),dataSourceField:n.option("dataSourceField"),backgroundColor:n._userBackgroundColor,incidentOccured:n.option("incidentOccured")})),r},et=function(n,i,u){var o,f,e,s=!1,h;return r.isDefined(u.startValue)&&r.isDefined(u.endValue)?(s=u.inverted=u.startValue>u.endValue,f=s?u.endValue:u.startValue,e=s?u.startValue:u.endValue):(r.isDefined(u.startValue)||r.isDefined(u.endValue))&&(f=u.startValue,e=u.endValue),o=i?i.getBoundRange():new t.viz.charts.Range,h=r.isDate(f)&&r.isDate(e)&&f.getTime()===e.getTime(),f===e||h||(o.invertX=s,o.getBoundRange({minX:f,maxX:e,minVisibleX:f,maxVisibleX:e})),o.isDefinedX()||(h&&(u.valueType="numeric"),o.setStubDataX(u.valueType)),o},ot=function(n,t,i){var r,u=t.label.visible;return t.placeholderHeight?t.placeholderHeight:(r=f.getTextBBox(n,"0",t.label.font),(u?t.label.topIndent+r.height:0)+(i?t.marker.topIndent+t.marker.separatorHeight:0))},st=function(n,t,i,f){var e=t.isEmpty,a=u.rangeSelectorFactory.getTickProvider(),o,s,h,c,l=i.getBusinessRange();return o={tickInterval:e?0:n.option("scale").minorTickInterval,showCustomBoundaryTicks:t.showCustomBoundaryTicks,minorTickCount:t.minorTickCount},s={textOptions:{align:"center",font:t.label.font},renderer:n.renderer,getText:function(n){return u.formatValue(n,t.label)},translator:i,isStartTickGenerated:!r.isDefined(n.option("scale").majorTickInterval),tickInterval:t.majorTickInterval,textSpacing:y,setTicksAtUnitBeginning:t.setTicksAtUnitBeginning,useTicksAutoArrangement:t.useTicksAutoArrangement,hideLabels:e},h=e?l.minX:t.startValue,c=e?l.maxX:t.endValue,a.getFullTicks(h,c,f,s,o)},ht=function(n,t,i){var f=u.rangeSelectorFactory.getTickProvider(),r=f.getTickIntervals(n.startValue,n.endValue,t,{tickInterval:n.majorTickInterval,incidentOccured:i},{tickInterval:n.minorTickInterval,incidentOccured:i});n.minorTickInterval=r.minorTickInterval,n.majorTickInterval=r.majorTickInterval},ct=function(n,t,u,f,o){var s=r.isDefined(u.minVisibleX)?u.minVisibleX:u.minX,h=r.isDefined(u.maxVisibleX)?u.maxVisibleX:u.maxX,c;t&&!t.isEmpty()&&(o.startValue=o.inverted?h:s,o.endValue=o.inverted?s:h),c=r.isDate(o.startValue)&&r.isDate(o.endValue)&&o.startValue.getTime()===o.endValue.getTime()||o.startValue===o.endValue,o.isEmpty=!r.isDefined(o.startValue)||!r.isDefined(o.endValue)||c||o.valueType==="string",o.isEmpty?o.startValue=o.endValue=i:(ht(o,f,n.option("incidentOccured")),o.valueType!=="datetime"||r.isDefined(o.label.format)||(o.label.format=o.marker.visible?r.getDateUnitInterval(o.majorTickInterval):e.getDateFormatByTickInterval(o.startValue,o.endValue,o.majorTickInterval)))},lt=function(t,i,u){var f=n.extend(!0,{},t.option("sliderMarker")),o;return f.format||(!t.option("behavior").snapToTicks&&r.isNumber(i.startValue)&&(o=Math.abs(i.endValue-i.startValue),f.format="fixedPoint",f.precision=r.getSignificantDigitPosition(o/u)),i.valueType==="datetime"&&(i.marker.visible?f.format=r.getDateUnitInterval(r.isDefined(i.minorTickInterval)&&i.minorTickInterval!==0?i.minorTickInterval:i.majorTickInterval):r.isDefined(i.startValue)&&r.isDefined(i.endValue)&&(f.format=e.getDateFormatByTickInterval(i.startValue,i.endValue,i.minorTickInterval!==0?i.minorTickInterval:i.majorTickInterval)))),f},at=function(n){return n.valueType=="datetime"&&n.marker.visible},vt=function(n,t){var i=t.minorTickInterval||t.majorTickInterval;n=n.getBoundRange({intervalX:i})},yt=function(t,u){var f=n.extend(!0,{},t.option("scale")),s=t.option("incidentOccured"),e=0,a=new h({incidentOccured:s}),o=a.correctValueType((f.valueType||"").toLowerCase()),c;return(u&&(o=u.getCalculatedValueType()||o),o||(o=l(f.startValue,f.endValue)||"numeric"),f.valueType=o,f.valueType==="string")?(s("The type of the arguments from the data source is not supported."),f):(c=a.getParser(o,"scale"),r.isDefined(f.startValue)&&(e=c(f.startValue),r.isDefined(e)?f.startValue=e:(f.startValue=i,s.call(null,'The value of the "startValue" option is not valid.'))),r.isDefined(f.endValue)&&(e=c(f.endValue),r.isDefined(e)?f.endValue=e:(f.endValue=i,s.call(null,'The value of the "endValue" option is not valid.'))),f.parser=c,f)},pt=function(n,t,i){var r=n.option("size")||{};t.height||r.height===0||(t.height=i.valueType==="datetime"&&i.marker.visible!==!1?160:120),t.width||r.width===0||(t.width=400)},wt=function(n){var u,r,f,e,t,o,s,h,c=n.container,l;if(n._isUpdating=!0,t=v(n),n._actualSize=t,r=ft(n),n._scaleOptions=yt(n,r),pt(n,t,n._scaleOptions),t.width&&t.height&&c.is(":visible"))n.stopRedraw=!1;else{n.stopRedraw=!0,n.option("incidentOccured")("RangeSelector can not be drawn as container is not visible");return}bt(n,t),n._updateLoadIndicator(i,n.canvas.width,n.canvas.height),f=et(n,r,n._scaleOptions),ct(n,r,f,t.width,n._scaleOptions),vt(f,n._scaleOptions),s=lt(n,n._scaleOptions,t.width),h=dt(n,n._scaleOptions),o=k(n.renderer,t,n._scaleOptions,s),u=w(t,n.option("margin"),o),e=ot(n.renderer,n._scaleOptions,at(n._scaleOptions)),n.translator=tt(f,it(t,u,e)),n._scaleOptions.ticksInfo=st(n,n._scaleOptions,n.translator,u.width),r&&r.adjustSeriesDimensions(n.translator),n.rangeContainer.applyOptions({canvas:u,scaleLabelsAreaHeight:e,sliderMarkerSpacing:o,translator:n.translator,selectedRange:h,scale:n._scaleOptions,behavior:n.option("behavior"),background:n.option("background"),chart:n.option("chart"),seriesDataSource:r,sliderMarker:s,sliderHandle:n.option("sliderHandle"),shutter:n.option("shutter"),selectedRangeChanged:a(n),setSelectedRange:function(t){n.setSelectedRange(t)}}),n._isUpdating=!1},a=function(n){return function(t,i){var r=n.option("selectedRangeChanged");n.option("selectedRange",t),r&&!i&&r(t)}},v=function(n){var i=n.container,r=n.option("size")||{},t={width:r.width,height:r.height};return i&&(t.width||(t.width=i.width()),t.height||(t.height=i.height())),n.canvas=t,t},bt=function(n,t){var i=n.renderer;i.isInitialized()?i.getRoot().applySettings({width:t.width,height:t.height}):(i.recreateCanvas(t.width,t.height),i.draw(n.container[0]))},kt=function(n,t){var i;!n.option("chart").theme&&t&&t.theme&&(i=t.theme,i&&(typeof i=="object"&&(i=i.chart||{},i.name=t.theme.name),n.option("chart").theme=i))},dt=function(n,t){var i=n.option("selectedRange"),f=t.parser||function(){return null},u=function(i,u){var e,o=t[u];return r.isDefined(i)&&(e=f(i)),r.isDefined(e)?o=e:n.option("incidentOccured").call(null,"The "+u+' field of the "selectedRange" configuration object is not valid.'),o};return i?{startValue:u(i.startValue,"startValue"),endValue:u(i.endValue,"endValue")}:{startValue:t.startValue,endValue:t.endValue}},gt=function(n){var t=n._actualSize,i=v(n);return t&&(t.width!==i.width||t.height!==i.height)},ni=function(n){return t.utils.createResizeHandler(function(){gt(n)&&n._render(!0)})};return{_defaultOptions:function(){return p},_dataSourceOptions:function(){return{paginate:!1,_preferSync:!0}},_init:function(){var t=this;t.container=g(t),d(t.container),t.renderer=rt(t),t.rangeContainer=nt(t.renderer),t.option("redrawOnResize")===!0&&r.windowResizeCallbacks.add(ni(t)),n.isFunction(t.option("incidentOccured"))||t.option("incidentOccured",n.noop),t._reinitDataSource()},_reinitDataSource:function(){this._refreshDataSource()},_initOptions:function(t){var i=this,r;this._optionsInitializing=!0,t=t||{},i._userOptions=n.extend(!0,{},t),r=ut(t.theme),r.setBackgroundColor(t.containerBackgroundColor),i.option(r.applyRangeSelectorTheme(t)),kt(i,t),t.background&&(i._userBackgroundColor=t.background.color)},_refresh:function(){var n=this,t=n.callBase;n._endLoading(function(){t.call(n)})},_render:function(n){this._optionsInitializing=!1;var t=this,r,i;wt(t),t.stopRedraw||(n?(i=t.option("behavior"),r=i.animationEnabled,i.animationEnabled=!1,t.rangeContainer.redraw(),i.animationEnabled=r):t.rangeContainer.redraw(),!n&&(!t._dataSource||t._dataSource&&t._dataSource.isLoaded())&&t.hideLoadingIndicator())},_optionChanged:function(n,t){var r=this;this._optionsInitializing||s.compileSetter(n)(r._userOptions,t,{functionsAsIs:!0,merge:!0}),n==="dataSource"?(r._reinitDataSource(),r._invalidate()):n==="selectedRange"?r.setSelectedRange(r.option("selectedRange")):n==="selectedRangeChanged"?r.rangeContainer.slidersContainer.selectedRangeChanged=a(r):n==="containerBackgroundColor"||n==="theme"?(this._initOptions(r._userOptions),r._invalidate()):n==="loadingIndicator"?r._updateLoadIndicator(r.option("loadingIndicator")):r._invalidate()},_handleDataSourceChanged:function(){var n=this;n._endLoading(function(){n.renderer.isInitialized()&&n._render()})},getSelectedRange:function(){var t=this,n=t.rangeContainer.slidersContainer.getSelectedRange();return{startValue:n.startValue,endValue:n.endValue}},setSelectedRange:function(n){var i=this,t;!i._isUpdating&&n&&((t=i.rangeContainer.slidersContainer.getSelectedRange(),t&&t.startValue===n.startValue&&t.endValue===n.endValue)||i.rangeContainer.slidersContainer.setSelectedRange(n))},resetSelectedRange:function(n){var t=this;t.setSelectedRange({startValue:t._scaleOptions.startValue,endValue:t._scaleOptions.endValue,blockSelectedRangeChanged:n})},render:function(n){return this._render(n),this}}}()).include(t.ui.DataHelperMixin).include(o.loadIndicatorMixin.base).include(o.widgetMarkupMixin)}(jQuery,DevExpress),function(n,t){var r=t.viz.rangeSelector;r.RangeContainer=r.BaseVisualElement.inherit(function(){var t=function(n){this.callBase(n),this.slidersContainer=u(n),this.rangeView=e(n),this.scale=f(n)},i=function(n){var t=this,i=n.scale.isEmpty,r={left:n.canvas.left,top:n.canvas.top,width:n.canvas.width,height:n.canvas.height>=n.scaleLabelsAreaHeight?n.canvas.height-n.scaleLabelsAreaHeight:0};t._viewCanvas=r,t.slidersContainer.applyOptions({canvas:r,translator:n.translator,scale:n.scale,selectedRange:n.selectedRange,sliderMarker:n.sliderMarker,sliderHandle:n.sliderHandle,shutter:n.shutter,behavior:n.behavior,selectedRangeChanged:n.selectedRangeChanged,isEmpty:i}),t.rangeView.applyOptions({canvas:r,translator:n.translator,background:n.background,chart:n.chart,seriesDataSource:n.seriesDataSource,behavior:n.behavior,isEmpty:i}),t.scale.applyOptions({canvas:n.canvas,translator:n.translator,scale:n.scale,hideLabels:i,scaleLabelsAreaHeight:n.scaleLabelsAreaHeight,setSelectedRange:n.setSelectedRange})},u=function(n){return r.rangeSelectorFactory.createSlidersContainer(n)},f=function(n){return r.rangeSelectorFactory.createScale(n)},e=function(n){return r.rangeSelectorFactory.createRangeView(n)},n=function(n,t){return{left:n.left-t.left,top:n.top-t.top,width:n.width+t.right+t.left,height:n.height+t.bottom+t.top}},o=function(){var t=this,i,e,o,s,r,h=t._options.size,u=n(t._options.canvas,t._options.sliderMarkerSpacing),f=t._viewCanvas;t._clipRect=t._renderer.createClipRect(u.left,u.top,u.width,u.height).append(),i=t._renderer.createGroup({"class":"rangeContainer",clipId:t._clipRect.id}).append(),t._viewClipRect=t._renderer.createClipRect(f.left,f.top,f.width,f.height).append(),e=t._renderer.createGroup({"class":"view",clipId:t._viewClipRect.id}),e.append(i),t.rangeView.redraw(e),o=t._renderer.createGroup({"class":"slidersContainer"}),o.append(i),t.slidersContainer.redraw(o),s=t._renderer.createGroup({"class":"scale"}),s.append(i),t.scale.redraw(s),r=t._renderer.createGroup({"class":"trackers"}),r.append(i),t._trackersGroup=r,t.slidersContainer.appendTrackers(r)},s=function(){var t=this,i=n(t._options.canvas,t._options.sliderMarkerSpacing),r=t._viewCanvas;t._clipRect.updateRectangle({x:i.left,y:i.top,width:i.width,height:i.height}),t._viewClipRect.updateRectangle({x:r.left,y:r.top,width:r.width,height:r.height}),t.rangeView.redraw(),t.slidersContainer.redraw(),t.slidersContainer.appendTrackers(t._trackersGroup),t.scale.redraw()};return{ctor:t,_applyOptions:i,_draw:o,_update:s}}())}(jQuery,DevExpress),function(n,t,i){var u=t.viz.rangeSelector,f=t.formatHelper,r=t.utils,e=5;u.Scale=u.BaseVisualElement.inherit({_setupDateUnitInterval:function(t){var f,o=function(t){var i=0;return n.each(t,function(){return++i<2}),i===1},e,i=t.ticksInfo.majorTickInterval,u=t.ticksInfo.majorTicks;if(t.valueType==="datetime"){if(r.isObject(i)&&!o(i)&&r.logger.warn('More than one field is specified within the object assigned to the "tickInterval" option. Assign an object with a single field specified (days, hours or a similar one).'),u&&u.autoArrangementStep>1){r.isString(i)&&(i=r.getDateIntervalByString(i));for(f in i)i[f]*=u.autoArrangementStep,e=r.convertDateTickIntervalToMilliseconds(i);i=r.convertMillisecondsToDateUnits(e)}this.dateUnitInterval=r.getDateUnitInterval(i)}},_prepareDatesDifferences:function(n,t){var i=t,u,f;if(i==="week"&&(i="day"),i==="quarter"&&(i="month"),n[i])for(f=0;f<r.dateUnitIntervals.length;f++)if(u=r.dateUnitIntervals[f],n[u]&&(n[u]=!1,n.count--),u===i)break},_getMarkerDate:function(n,t){var i=new Date(n.getTime()),r=0;switch(t){case"quarter":r=f.getFirstQuarterMonth(n.getMonth());case"month":i.setMonth(r);case"week":case"day":i.setDate(1);case"hour":i.setHours(0,0,0,0);break;case"millisecond":i.setMilliseconds(0);break;case"second":i.setSeconds(0,0);break;case"minute":i.setMinutes(0,0,0)}return i},_drawDateMarker:function(n,t){var r,u,f,i,e;if(t.x!==null)return i=this._options.scale,this.lineOptions["class"]="dx-range-selector-date-marker",this._renderer.createLine(t.x,t.y,t.x,t.y+i.marker.separatorHeight,this.lineOptions).append(t.group),f=this._getLabel(n,t.label),r=t.x+i.tick.width+i.marker.textLeftIndent,u=t.y+i.marker.textTopIndent+i.label.font.size,this.textOptions.align="left",e=this._renderer.createText(f,r,u,this.textOptions).append(t.group),r+e.getBBox().width},_drawDateMarkers:function(n,t){var c,i,e,o,u,h=-1,s;if(this._options.scale.valueType==="datetime"&&this.visibleMarkers&&(s=[],n.length>1)){for(i=1;i<n.length;i++)e=r.getDatesDifferences(n[i-1],n[i]),this._prepareDatesDifferences(e,this.dateUnitInterval),e.count>0&&(o=this._getMarkerDate(n[i],this.dateUnitInterval),u=this.translator.translateX(o),u>h&&(u!==null&&s.push({date:o,posX:u}),h=this._drawDateMarker(o,{group:t,y:this._options.canvas.top+this._options.canvas.height-this.markersAreaHeight+this._options.scale.marker.topIndent,x:u,label:this._getLabelFormatOptions(f.getDateFormatByDifferences(e))})));this._initializeMarkersEvents(s,t)}},_getLabelFormatOptions:function(t){return r.isDefined(this._options.scale.marker.label.format)?this._options.scale.marker.label:n.extend({},this._options.scale.marker.label,{format:t})},_calculateRangeByMarkerPosition:function(n,t,i){var r={},f,u;for(f in t)u=t[f],i.inverted?n<u.posX?r.endValue=u.date:r.startValue||(r.startValue=u.date):n>=u.posX?r.startValue=u.date:r.endValue||(r.endValue=u.date);return r.startValue=r.startValue||i.startValue,r.endValue=r.endValue||i.endValue,r},_initializeMarkersEvents:function(n,t){var i=this,s=this._options.canvas.top+this._options.canvas.height-this.markersAreaHeight+this._options.scale.marker.topIndent,r,f,h,e,o;if(n.length>0){r=i._renderer.createRect(i._options.canvas.left,s,i._options.canvas.width,i._options.scale.marker.separatorHeight,0,{fill:"grey",stroke:"grey",opacity:.0001}),r.append(t);r.on(u.events.start,function(t){f=u.utils.getRootOffsetLeft(i._renderer),e=u.utils.getEventPageX(t)-f,o=i._calculateRangeByMarkerPosition(e,n,i._options.scale),i._options.setSelectedRange(o)});i._markersTracker=r}},_getLabel:function(n,t){var i={value:n,valueText:f.format(n,t.format,t.precision)};return String(r.isFunction(t.customizeText)?t.customizeText.call(i,i):i.valueText)},_drawLabel:function(n,t){var i=this._options.canvas.top+this._options.canvas.height-this.markersAreaHeight,r=this._renderer.createText(this._getLabel(n,this._options.scale.label),this.translator.translateX(n),i,this.textOptions);r.append(t)},_drawTick:function(n,t){this.lineOptions["class"]="dx-range-selector-tick";var r=this._options.canvas.top+this._options.canvas.height-this.scaleLabelsAreaHeight,i=this.translator.translateX(n),u=this._renderer.createLine(i,this._options.canvas.top,i,r,this.lineOptions).append(t)},_redraw:function(n){for(var r=this,u=r._options.scale,e=r._renderer.createGroup(),o=r._renderer.createGroup().append(n),f=u.ticksInfo.majorTicks,s=u.ticksInfo.minorTicks,h=u.ticksInfo.customBoundaryTicks,c=r._options.hideLabels||f.hideLabels||!u.label.visible,i=0;i<f.length;i++)c||r._drawLabel(f[i],o),r._drawTick(f[i],e);if(u.showMinorTicks)for(i=0;i<s.length;i++)r._drawTick(s[i],e);for(i=0;i<h.length;i++)r._drawTick(h[i],e);e.append(n),r._drawDateMarkers(f,o)},_applyOptions:function(n){var t=n.scale,r;this.textOptions={align:"center","class":"dx-range-selector-scale",font:t.label.font,style:{"-webkit-user-select":"none"}},this.lineOptions={strokeWidth:t.tick.width,stroke:t.tick.color,strokeOpacity:t.tick.opacity},this._setupDateUnitInterval(t),this.visibleMarkers=t.marker.visible===i?!0:t.marker.visible,r=t.label.visible?t.label.topIndent+t.label.font.size:0,this.scaleLabelsAreaHeight=n.scaleLabelsAreaHeight,this.markersAreaHeight=this.scaleLabelsAreaHeight-r,this.translator=n.translator},_draw:function(n){this._redraw(n,!1)},_update:function(n){var t=this.callBase;this._markersTracker&&this._markersTracker.off(u.events.start,"**"),this.callBase=t,this.callBase(n)}})}(jQuery,DevExpress),function(n,t){var r=t.viz.rangeSelector,u=t.viz.renderers;r.rangeSelectorFactory=function(){return{createRenderer:function(n){return new u.Renderer(n)},createTranslator:function(n,i){return new t.viz.core.Translator2D(n,i)},getTickProvider:function(){return t.viz.core.tickProvider},createRangeContainer:function(n){return new r.RangeContainer(n)},createSlidersContainer:function(n){return new r.SlidersContainer(n)},createScale:function(n){return new r.Scale(n)},createSliderMarker:function(n){return new r.SliderMarker(n)},createRangeView:function(n){return new r.RangeView(n)},createThemeManager:function(n){return new r.ThemeManager(n)},createSlider:function(n,t){return new r.Slider(n,t)},createSlidersEventsManager:function(n,t,i){return new r.SlidersEventsManager(n,t,i)},createSlidersController:function(n){return new r.SlidersController(n)}}}()}(jQuery,DevExpress),function(n,t){var r=t.viz.rangeSelector,h=t.utils,e=window.navigator.msPointerEnabled||window.navigator.pointerEnabled,u=t.utils.isNumber,f=t.utils.isDate,o=0,s=1;r.SlidersContainer=r.BaseVisualElement.inherit(function(){return{_drawAreaTracker:function(n){var t=this,i,r;i=t._renderer.createRect(t._options.canvas.left,t._options.canvas.top,t._options.canvas.width,t._options.canvas.height,0,{fill:"grey",stroke:"grey",opacity:.0001}),i.append(n),r=t._renderer.createRect(t._options.canvas.left,t._options.canvas.top,t._options.canvas.width,t._options.canvas.height,0,{fill:"grey",stroke:"grey",opacity:.0001,style:{cursor:"pointer"}}),r.append(n),t._controller.setAreaTrackers(i,r)},_processSelectionChanged:function(n,t){var i=this,u=function(n){return n&&i._lastSelectedRange.startValue===n.startValue&&i._lastSelectedRange.endValue===n.endValue},r=i.getSelectedRange();n&&(i._options.behavior.callSelectedRangeChanged||"").toLowerCase()!=="onmoving"||!i._options.selectedRangeChanged||u(r)||(i._updateLastSelectedRange(r),typeof i._options.selectedRangeChanged=="function"&&i._options.selectedRangeChanged.call(null,r,t),n||u(r)||i.setSelectedRange(r))},_updateLastSelectedRange:function(n){n=n||this._options.selectedRange,this._lastSelectedRange={startValue:n.startValue,endValue:n.endValue}},_createSlider:function(n){return r.rangeSelectorFactory.createSlider(this._renderer,n)},_createSlidersController:function(n){return r.rangeSelectorFactory.createSlidersController(n)},_createSlidersEventsManager:function(n){var t=this;return r.rangeSelectorFactory.createSlidersEventsManager(t._renderer,n,function(n){t._processSelectionChanged(n)})},ctor:function(n){var t=this,i;t.callBase(n),i=[t._createSlider(o),t._createSlider(s)],t._controller=t._createSlidersController(i),t._eventsManager=t._createSlidersEventsManager(t._controller),t._lastSelectedRange={}},getSelectedRange:function(){return this._controller.getSelectedRange()},setSelectedRange:function(n){var t=this,i=t._options.scale,r,e,o=t._options.selectedRange;n&&(r=n.startValue,e=n.endValue),(u(i.startValue)&&u(r)||f(i.startValue)&&f(r))&&(o.startValue=r),(u(i.endValue)&&u(e)||f(i.endValue)&&f(e))&&(o.endValue=e),t._controller.applySelectedRange(o),t._controller.applyPosition(),t._processSelectionChanged(!1,n&&n.blockSelectedRangeChanged)},appendTrackers:function(n){this._controller.appendTrackers(n)},_applyOptions:function(n){var t=this;t._controller.applyOptions({translator:n.translator,canvas:n.canvas,sliderMarker:n.sliderMarker,sliderHandle:n.sliderHandle,shutter:n.shutter,scale:n.scale,behavior:n.behavior}),t._eventsManager.applyOptions({behavior:n.behavior})},_draw:function(n){var t=this,i;e&&(i=t._renderer.getRoot(),i&&(i.element.style.msTouchAction="pinch-zoom")),t._controller.redraw(n),t._drawAreaTracker(n),t._eventsManager.initialize(),t._update()},_update:function(){var n=this,t=n._options.isEmpty;n._eventsManager.setEnabled(!t),n._controller.applySelectedRange(t?{}:n._options.selectedRange),n._controller.applyPosition(n.isDrawn()),n._updateLastSelectedRange(),n._controller.redraw()}}}())}(jQuery,DevExpress),function(n,t,i){var f=t.viz.rangeSelector,e=t.utils,r=0,u=1;f.SlidersController=t.Class.inherit(function(){return{ctor:function(n){this._sliders=n,n[r].setAnotherSlider(n[u]),n[u].setAnotherSlider(n[r])},setAreaTrackers:function(n,t){this._areaTracker=n,this._selectedAreaTracker=t},applyOptions:function(n){var i=this,t=null;i._options=n,i.getSlider(r).applyOptions(n),i.getSlider(u).applyOptions(n),n.behavior.snapToTicks&&(t=n.scale.ticksInfo.fullTicks,t.length>1&&t[0]>t[t.length-1]&&(t=t.reverse())),i.getSlider(r).setAvailableValues(t),i.getSlider(u).setAvailableValues(t)},processDocking:function(n){var t=this;n!==i?t.getSlider(n).processDocking():(t.getSlider(r).processDocking(),t.getSlider(u).processDocking()),t.setTrackersCursorStyle("default"),t.applyAreaTrackersPosition()},getSelectedRangeInterval:function(){var n=this;return f.utils.getInterval(n.getSlider(r).getValue(),n.getSlider(u).getValue())},moveSliders:function(n,t){var i=this;i.getSlider(r).setPosition(i.getSlider(r).getPosition()+n,!1,t),i.applyPosition(!0)},moveSlider:function(n,t,i,u,f,e){var o=this,s=o.getSlider(n),h=s.getAnotherSlider(),l=h.getIndex(),c;s.canSwap()&&(n===r?i>h.getPosition():i<h.getPosition())&&(c=t,t||Math.abs(u)>=Math.abs(f)&&u*f<0&&(c=!0,i+=2*f,e(-f)),c&&(o.swapSliders(),h.applyPosition(!0))),s.setPosition(i,!0),s.applyPosition(!0),o.applyAreaTrackersPosition(),o.setTrackersCursorStyle("w-resize")},applySelectedAreaCenterPosition:function(n){var t=this,i=(t.getSlider(u).getPosition()-t.getSlider(r).getPosition())/2,f=t.getSelectedRangeInterval();t.getSlider(r).setPosition(n-i,!1,f),t.applyPosition(),t.processDocking()},processManualSelection:function(n,t,i){var e=this,o,f,s=[Math.min(n,t),Math.max(n,t)];o=n<t?r:u,f=n<t?u:r,e.getSlider(f).setPosition(s[f]),e.getSlider(o).setPosition(s[o]),e.getSlider(f).setPosition(s[f],!0),e.getSlider(f).startEventHandler(i),e.getSlider(o).processDocking(),e.getSlider(f).applyPosition(!0)},applySelectedRange:function(n){var t=this,i=t._options.scale.inverted;!i&&n.startValue>n.endValue||i&&n.startValue<n.endValue?(t.getSlider(r).setValue(n.endValue),t.getSlider(u).setValue(n.startValue)):(t.getSlider(r).setValue(n.startValue),t.getSlider(u).setValue(n.endValue))},getSelectedRange:function(){var n=this;return{startValue:n.getSlider(r).getValue(),endValue:n.getSlider(u).getValue()}},swapSliders:function(){var n=this;n._sliders.reverse(),n.getSlider(r).changeLocation(),n.getSlider(u).changeLocation()},applyAreaTrackersPosition:function(){var n=this,t=n.getSelectedRange(),i=n._options.scale,f=n.getSlider(u).getPosition()-n.getSlider(r).getPosition(),e={x:n.getSlider(r).getPosition(),width:f<0?0:f,y:n._options.canvas.top,height:n._options.canvas.height,style:{cursor:i.endValue-i.startValue==t.endValue-t.startValue?"default":"pointer"}};n._selectedAreaTracker.applySettings(e),n._areaTracker.applySettings({x:n._options.canvas.left,width:n._options.canvas.width,y:n._options.canvas.top,height:n._options.canvas.height})},applyPosition:function(n){var t=this;t.getSlider(r).applyPosition(n),t.getSlider(u).applyPosition(n),t.applyAreaTrackersPosition()},redraw:function(n){var t=this;t.getSlider(r).redraw(n),t.getSlider(u).redraw(n)},appendTrackers:function(n){var t=this;t._areaTracker&&t._selectedAreaTracker&&(t._areaTracker.append(n),t._selectedAreaTracker.append(n)),t.getSlider(r).appendTrackers(n),t.getSlider(u).appendTrackers(n)},getSlider:function(n){return this._sliders[n]},getAreaTracker:function(){return this._areaTracker},getSelectedAreaTracker:function(){return this._selectedAreaTracker},setTrackersCursorStyle:function(n){var t=this;t._selectedAreaTracker.applySettings({style:{cursor:n}}),t._areaTracker.applySettings({style:{cursor:n}})}}}())}(jQuery,DevExpress),function(n,t,i){var r=t.viz.rangeSelector,s=t.utils,e=function(){var n=window,t="ontouchstart"in n,i=n.navigator.msPointerEnabled,u=n.navigator.pointerEnabled;r.events={start:u?"pointerdown":i?"MSPointerDown":t?"touchstart mousedown":"mousedown",move:u?"pointermove":i?"MSPointerMove":t?"touchmove mousemove":"mousemove",end:u?"pointerup pointercancel":i?"MSPointerUp MSPointerCancel":t?"touchend mouseup":"mouseup"}};e();var f=10,u=0,o=1;r.SlidersEventsManager=t.Class.inherit(function(){var h=function(n){return r.utils.getRootOffsetLeft(n._renderer)},t=function(n){return r.utils.getEventPageX(n)},e=function(n){var r=n||window.event,t=r.originalEvent,f=r.touches,u=t?t.pointerType:!1,e=t?t.touches:!1,o=r.which===i&&r.button===1,s=t&&u!==i&&(u===(t.MSPOINTER_TYPE_TOUCH||"touch")||u===(t.MSPOINTER_TYPE_MOUSE||"mouse")&&t.buttons===1),h=o||r.which===1,c=f&&f.length>0||e&&e.length>0;return h||s||c},c=function(n){var t=n.originalEvent,i=n.touches,r=t?t.touches:!1;return i&&i.length>1||r&&r.length>1||null},s=function(n){return n&&n.type&&n.type.indexOf("touch")===0},l=function(i,u){var w=i._renderer,y,l=i._slidersController,v=i._processSelectionChanged,f=l.getSlider(u),b=f.getAnotherSlider(),p,a,o;f.startEventHandler=function(n){i._enabled&&e(n)&&!o&&(p=this===f.getSliderTracker().element,o=!0,y=s(n),a=t(n)-f.getPosition()-h(i),c(n)||(n.stopPropagation(),n.preventDefault()))};f.on(r.events.start,f.startEventHandler);n(document).on(r.events.end,function(){o&&(o=!1,l.processDocking(),v(!1))});n(document).on(r.events.move,function(n){var d,r,u,w=h(i),b,k=f.getIndex();y===s(n)&&(!e(n,!0)&&o?(o=!1,l.processDocking(),v(!1)):o&&(c(n)||n.preventDefault(),r=t(n),b=r-a-w,u=r-f.getPosition()-w,l.moveSlider(k,p,b,u,a,function(n){a=n}),v(!0)))})},a=function(i){var p=i._renderer,l,f=i._slidersController,h=i._processSelectionChanged,y=f.getSelectedAreaTracker(),o=!1,a,v;y.on(r.events.start,function(n){i._enabled&&e(n)&&!o&&(o=!0,l=s(n),a=t(n)-f.getSlider(u).getPosition(),v=f.getSelectedRangeInterval(),c(n)||(n.stopPropagation(),n.preventDefault()))});n(document).on(r.events.end,function(){o&&(o=!1,f.processDocking(),h(!1))});n(document).on(r.events.move,function(n){var i,r;l===s(n)&&(o&&!e(n)&&(o=!1,f.processDocking(),h(!1)),o&&(c(n)||n.preventDefault(),r=t(n),i=r-f.getSlider(u).getPosition()-a,f.moveSliders(i,v),h(!0)))})},v=function(i){var y=i._renderer,a,c=i._slidersController,l=i._processSelectionChanged,v=c.getAreaTracker(),u=!1,p=!1,o;v.on(r.events.start,function(n){i._enabled&&e(n)&&!u&&(u=!0,a=s(n),o=t(n))});n(document).on(r.events.end,function(n){var r;u&&(r=t(n),i._options.behavior.moveSelectedRangeByClick&&Math.abs(o-r)<f&&c.applySelectedAreaCenterPosition(r-h(i)),u=!1,l(!1))});n(document).on(r.events.move,function(n){var r,v,y,p=h(i);a===s(n)&&(u&&!e(n)&&(u=!1,l(!1)),u&&(r=t(n),i._options.behavior.manualRangeSelectionEnabled&&Math.abs(o-r)>=f&&(v=o-p,y=r-p,c.processManualSelection(v,y,n),u=!1,l(!0))))})};return{ctor:function(n,t,i){this._renderer=n,this._slidersController=t,this._processSelectionChanged=i,this._enabled=!0},applyOptions:function(n){this._options=n},initialize:function(){var n=this;n._renderer.isInitialized()&&(a(n),v(n),l(n,u),l(n,o))},setEnabled:function(n){this._enabled=n}}}())}(jQuery,DevExpress),function(n,t,i){var f=t.viz.rangeSelector,r=t.utils,h="ontouchstart"in window,c=window.navigator.msPointerEnabled||window.navigator.pointerEnabled,o={duration:250},s=8,l=20,u=0,e=1;f.Slider=f.BaseVisualElement.inherit(function(){return{_createSlider:function(){var n=this,i,t,r=n._options.sliderHandle;return t=n._renderer.createGroup({"class":"slider"}),t.applySettings({translateX:n._options.canvas.left,translateY:n._options.canvas.top}),i=n._renderer.createLine(0,0,0,n._options.canvas.height,{"class":"dx-range-selector-slider",strokeWidth:r.width,stroke:r.color,strokeOpacity:r.opacity}),i.append(t),t.setValid=function(t){i.applySettings({stroke:t?n._options.sliderHandle.color:n._options.sliderMarker.invalidRangeColor})},t.updateHeight=function(){i.applySettings({points:[0,0,0,n._options.canvas.height]})},t.applyOptions=function(n){i.applySettings(n)},t},_createSliderTracker:function(){var n=this,r=n._options.sliderHandle.width,f=s<r?r:s,u=h||c?l:f,i,t;return i=n._renderer.createRect(-u/2,0,u,n._options.canvas.height,0,{fill:"grey",stroke:"grey",opacity:.0001,style:{cursor:"w-resize"}}),t=n._renderer.createGroup({"class":"sliderTracker"}),t.applySettings({translateX:0,translateY:n._options.canvas.top}),i.append(t),t.updateHeight=function(){i.applySettings({height:n._options.canvas.height})},t},_drawSliderTracker:function(n){var i=this,t=i._createSliderTracker();t&&(t.append(n),i._sliderTracker=t)},_createSliderMarker:function(n){return f.rangeSelectorFactory.createSliderMarker(n)},_setPosition:function(n,t){var i=this,r=i._correctPosition(n),u=i._options.translator.untranslateX(r);i.setValue(u,t,!1),i._position=r},_setPositionForBothSliders:function(n,t){var u=this,o,f,e,s,h=u._options.scale.inverted;o=u.getAnotherSlider(),n=u._correctBounds(n),f=u._options.translator.untranslateX(n),e=r.addInterval(f,t),!h&&e>u._options.scale.endValue||h&&e<u._options.scale.endValue?(e=u._options.scale.endValue,s=u._options.canvas.left+u._options.canvas.width,f=r.addInterval(e,t,!0),n=u._options.translator.translateX(f)):s=u._options.translator.translateX(e),u._values&&((h?f>u._values[u._values.length-1]:f<u._values[0])?(f=u._correctBusinessValueByAvailableValues(f,!1),e=r.addInterval(f,t)):(e=u._correctBusinessValueByAvailableValues(e,!1),f=r.addInterval(e,t,!0))),o.setValue(e,i,!1),u.setValue(f,i,!1),u._position=n,o._position=s},_correctPosition:function(n){var i=this,t=i._correctInversion(n);return t=i._correctBounds(t)},_correctInversion:function(n){var i=this,r=n,t=i.getAnotherSlider().getPosition(),f=i.getIndex()===u?n>t:n<t;return f&&(r=t),r},_correctBounds:function(n){var r=this,i=n,t=r._options.canvas;return n<t.left&&(i=t.left),n>t.left+t.width&&(i=t.left+t.width),i},_correctBusinessValue:function(n,t,i){var u=this,r=u._correctBusinessValueByAvailableValues(n,i);return t&&(r=u._correctBusinessValueByMinMaxRangeFromAnotherSlider(r)),r=u._correctBusinessValueByMinRangeFromStartEndValues(r)},_correctBusinessValueByAvailableValues:function(n,t){var i=this._values;return!t&&i?f.utils.findNearValue(i,n):n},_correctBusinessValueByMinMaxRangeFromAnotherSlider:function(n){var h=this,c=n,t=h._options.scale,l=h._values,y=h.getIndex(),a=h.getAnotherSlider().getValue(),v=!0,o,s;return!t.inverted&&y===u||t.inverted&&y===e?(t.maxRange&&(o=r.addInterval(a,t.maxRange,!0)),t.minRange&&(s=r.addInterval(a,t.minRange,!0))):(t.maxRange&&(s=r.addInterval(a,t.maxRange)),t.minRange&&(o=r.addInterval(a,t.minRange))),s!==i&&c>s?(c=l?f.utils.findLessOrEqualValue(l,s):s,v=!1):o!==i&&c<o&&(c=l?f.utils.findGreaterOrEqualValue(l,o):o,v=!1),h._setValid(v),c},_correctBusinessValueByMinRangeFromStartEndValues:function(n){var f=this,h=f._values,o,s,c=!0,t=f._options.scale,i=n;return t.minRange&&(f.getIndex()===e?(o=r.addInterval(t.startValue,t.minRange,t.inverted),(!t.inverted&&i<o||t.inverted&&i>o)&&(i=o)):f.getIndex()===u&&(s=r.addInterval(t.endValue,t.minRange,!t.inverted),(!t.inverted&&i>s||t.inverted&&i<s)&&(i=s))),i},_applySliderPosition:function(n,t){var i=this,f=i._options.behavior.animationEnabled&&!t,r=i._options.canvas.top,u=i._slider;f||u.inAnimation?(u.inAnimation=!0,u.animate({translate:{x:n,y:r}},f?o:{duration:0},function(){u.inAnimation=!1}),i._sliderTracker.animate({translate:{x:n,y:r}},f?o:{duration:0})):(i._slider.applySettings({translateX:n,translateY:r}),i._sliderTracker.applySettings({translateX:n,translateY:r})),i._sliderTracker.updateHeight(),i._slider.updateHeight()},_applyShutterPosition:function(n,t){var i=this,r,f=i._shutter,s=i._options.behavior.animationEnabled&&!t,h=i.getIndex();h==u?r={x:i._options.canvas.left,y:i._options.canvas.top,width:n-i._options.canvas.left,height:i._options.canvas.height}:h==e&&(r={x:n+1,y:i._options.canvas.top,width:i._options.canvas.left+i._options.canvas.width-n,height:i._options.canvas.height}),r&&(s||f.inAnimation?(f.inAnimation=!0,f.animate(r,s?o:{duration:0},function(){f.inAnimation=!1})):f.applySettings(r))},_setValid:function(n){var t=this;t._marker&&t._marker.setValid(n),t._slider.setValid(n)},_setText:function(n){var t=this;t._marker&&t._marker.setText(n)},ctor:function(n,t){var i=this;i.callBase(n),i._index=t},getIndex:function(){return this._index},setAvailableValues:function(n){this._values=n},setAnotherSlider:function(n){this._anotherSlider=n},getAnotherSlider:function(){return this._anotherSlider},appendTrackers:function(n){var t=this;t._sliderTracker&&t._sliderTracker.append(n)},getSliderTracker:function(){return this._sliderTracker},changeLocation:function(){var n=this;n._marker&&n._marker.changeLocation(),n._index=this._index===u?e:u,n._lastPosition=null},setPosition:function(n,t,r){var f=this,e;r!==i?(e=f.getIndex()===u?f:f.getAnotherSlider(),e._setPositionForBothSliders(n,r)):f._setPosition(n,t)},getPosition:function(){return this._position},_applyOptions:function(){this._lastPosition=null},setValue:function(n,t,e){var o=this;n===i?(o._value=i,o._valuePosition=o._position=o.getIndex()===u?o._options.canvas.left:o._options.canvas.left+o._options.canvas.width,o._setText(f.consts.emptySliderMarkerText)):(o._value=o._correctBusinessValue(n,t,r.isDefined(e)?!!e:!0),o._valuePosition=o._position=o._options.translator.translateX(o._value),o._setText(f.formatValue(o._value,o._options.sliderMarker)))},getValue:function(){return this._value},canSwap:function(){var i=this,n=i._options.scale,f,e,t;if(i._options.behavior.allowSlidersSwap){if(n.minRange)if(t=i.getAnotherSlider().getValue(),i.getIndex()===u){if(e=r.addInterval(n.endValue,n.minRange,!n.inverted),!n.inverted&&t>e||n.inverted&&t<e)return!1}else if(f=r.addInterval(n.startValue,n.minRange,n.inverted),!n.inverted&&t<f||n.inverted&&t>f)return!1;return!0}return!1},processDocking:function(){var n=this;n._position=n._valuePosition,n.applyPosition(!1),n._setValid(!0)},applyPosition:function(n){var t=this,i=t.getPosition();t._lastPosition!==i&&(t._applySliderPosition(i,n),t._applyShutterPosition(i,n),t._lastPosition=i)},on:function(n,t){var i=this;i._sliderTracker.on(n,t);if(i._marker)i._marker.getTracker().on(n,t)},_update:function(){var n=this;n._marker&&n._marker.applyOptions(n._options.sliderMarker),n._shutter&&n._shutter.applySettings({fill:n._options.shutter.color,fillOpacity:n._options.shutter.opacity}),n._slider&&n._slider.applyOptions({strokeWidth:n._options.sliderHandle.width,stroke:n._options.sliderHandle.color,strokeOpacity:n._options.sliderHandle.opacity})},_draw:function(n){var t=this,i,o,f,r,h,c,s=t.getIndex();f=t._renderer.createGroup({"class":"sliderArea"}),f.append(n),s===u?r=t._renderer.createRect(t._options.canvas.left,t._options.canvas.top,0,t._options.canvas.height,0):s===e&&(r=t._renderer.createRect(t._options.canvas.left,t._options.canvas.top,t._options.canvas.width,t._options.canvas.height,0)),r&&(r.append(f),i=t._createSlider(),i&&i.append(f),t._options.sliderMarker.visible&&(o=t._createSliderMarker({renderer:t._renderer,isLeftPointer:s===e,sliderMarkerOptions:t._options.sliderMarker}),o.draw(i)),t._shutter=r,t._slider=i,t._marker=o),t._drawSliderTracker(n)}}}())}(jQuery,DevExpress),function(n,t){var r=t.viz.rangeSelector;r.SliderMarker=t.Class.inherit(function(){var u=function(n){this._renderer=n.renderer,this._text=n.text,this._isLeftPointer=n.isLeftPointer,this._options=n.sliderMarkerOptions,this._isValid=!0,t(this,{width:10,height:10})},f=function(n){this._options=n,this.update()},n=function(n,t){return{width:Math.round(2*n._options.padding+t.width),height:Math.round(2*n._options.padding+t.height*r.consts.fontHeightRatio)}},t=function(t,i){var r=n(t,i);t._points=[],t._isLeftPointer?(t._points.push({x:0,y:0}),t._points.push({x:r.width,y:0}),t._points.push({x:r.width,y:r.height}),t._points.push({x:t._options.pointerSize,y:r.height}),t._points.push({x:0,y:r.height+t._options.pointerSize})):(t._points.push({x:0,y:0}),t._points.push({x:r.width,y:0}),t._points.push({x:r.width,y:r.height+t._options.pointerSize}),t._points.push({x:r.width-t._options.pointerSize,y:r.height}),t._points.push({x:0,y:r.height}))},e=function(t,i){var r=n(t,i);return t._isLeftPointer?{x:0,y:r.height+t._options.pointerSize}:{x:r.width-1,y:r.height+t._options.pointerSize}},o=function(n){var t=this,i=t._options.padding;t._sliderMarkerGroup=t._renderer.createGroup({"class":"sliderMarker"}),t._sliderMarkerGroup.append(n),t._area=t._renderer.createArea(t.points,{fill:t._options.color}),t._area.append(t._sliderMarkerGroup),t._label=t._renderer.createText(t._text,i,i,{font:t._options.font,style:{"-webkit-user-select":"none"}}),t._label.append(t._sliderMarkerGroup),t._tracker=t._renderer.createRect(0,0,2*i,2*i+t._options.pointerSize,0,{fill:"grey",stroke:"grey",opacity:.0001,style:{cursor:"pointer"}}),t._tracker.append(t._sliderMarkerGroup),t._drawn=!0,t.update()},s=function(n){var t=n._label.getBBox();return!n._textHeight&&isFinite(t.height)&&(n._textHeight=t.height),{width:t.width,height:n._textHeight}},i=function(r){var u=this,f,o,h;(u._interval&&clearInterval(u._interval),delete u._interval,u._drawn)&&(u._label.updateText(u._text),f=s(u),r?delete u._textSize:(u._textSize=u._textSize||f,u._textSize=f.width>u._textSize.width||f.height>u._textSize.height?f:u._textSize,f=u._textSize,u._interval=setInterval(function(){i.call(u,[!0])},75)),o=n(u,f),h=e(u,f),u._sliderMarkerGroup.applySettings({translateX:-h.x,translateY:-h.y}),t(u,f),u._area.applySettings({points:u._points,fill:u._isValid?u._options.color:u._options.invalidRangeColor}),u._tracker.applySettings({width:o.width,height:o.height+u._options.pointerSize}),u._label.applySettings({x:u._options.padding,y:o.height-u._options.padding}))},h=function(){var n=this;return n._text},c=function(n){var t=this;t._text!==n&&(t._text=n,t.update())},l=function(n){var t=this;t._isValid=n,t.update()},a=function(){var n=this;n._isLeftPointer=!n._isLeftPointer,n.update()},v=function(){var n=this;return n._tracker};return{ctor:u,draw:o,update:i,getText:h,setText:c,changeLocation:a,applyOptions:f,getTracker:v,setValid:l}}())}(jQuery,DevExpress),function(n,t){var r=t.viz.rangeSelector;r.RangeView=r.BaseVisualElement.inherit(function(){var n=function(n){return t.viz.charts.factory.createThemeManager(n.chart.theme)};return{_draw:function(n){var f=this,s,h,e,u,r,o,i,t=f._options,c=t.isEmpty;if(o=t.seriesDataSource&&t.seriesDataSource.isShowChart()&&!c,i=t.canvas,o?e=t.seriesDataSource.getBackgroundColor():!c&&t.background.visible&&(e=t.background.color),t.background.visible&&e&&(s=f._renderer.createRect(i.left,i.top,i.width+1,i.height,0,{fill:e,"class":"dx-range-selector-background"}),s.append(n)),t.background.visible&&t.background.image&&t.background.image.url&&(h=f._renderer.createImage(i.left,i.top,i.width+1,i.height,t.background.image.url,{location:t.background.image.location}),h.append(n)),o)for(u=t.seriesDataSource.getSeries(),t.seriesDataSource.adjustSeriesDimensions(t.translator,t.chart.useAggregation),r=0;r<u.length;r++)u[r].options.seriesGroup=n,u[r].options.seriesLabelsGroup=n,u[r].options.trackerGroup=n,u[r].draw(t.translator,t.behavior&&t.behavior.animationEnabled&&f._renderer.animationEnabled())}}}())}(jQuery,DevExpress),function(n,t,i){var u=t.viz.rangeSelector,r=t.viz.charts;u.SeriesDataSource=t.Class.inherit(function(){var u=function(n){return r.factory.createThemeManager(n,"rangeSelector.chart")},f=function(i){return n.isArray(i)&&i.length>0&&(t.utils.isNumber(i[0])||t.utils.isDate(i[0]))},e=function(t){return n.map(t,function(n,t){return{arg:n,val:t}})},o=function(t,o){var l=[],c,b,v,k,tt,d=u(o.chart),s=o.chart.series,nt=o.chart.valueAxis&&o.chart.valueAxis.valueType,y,a,h,p,w,g;for(o.dataSource&&!s&&(f(o.dataSource)&&(o.dataSource=e(o.dataSource)),y=o.dataSourceField||"arg",s={argumentField:y,valueField:y},t._hideChart=!0),s=n.isArray(s)?s:s?[s]:[],a=n.extend(!0,{},d.theme(),o.chart),n.extend(a.commonSeriesSettings,{argumentType:o.valueType,valueType:y?o.valueType:nt,incidentOccured:o.incidentOccured}),p=a.commonSeriesSettings,t._backgroundColor=o.backgroundColor!==i?o.backgroundColor:a.backgroundColor,h=0;h<s.length;h++)c=s[h],c.rotated=!1,c.argumentField=c.argumentField||p.argumentField||o.dataSourceField,v=o.dataSource,b=d.applyNextSeriesTheme(c,p),v&&v.length>0&&(w=r.factory.createSeries(c.type||p.type,o.renderer,b),w._suppressTrackers=!0,l.push(w));for(t._dataValidator=r.factory.createDataValidator(v,[l],o.incidentOccured,a.dataPrepareSettings),k=t._dataValidator.validate(),h=0;h<l.length;h++)g=l[h],g.reinitData(k);return l},s=function(t,i){var f=[],u=[];return n.each(t,function(t,i){n.inArray(i.type,u)===-1&&u.push(i.type)}),n.each(u,function(n,u){var e=new r.factory.createSeriesFamily({type:u,equalBarWidth:i});e.add(t),e.adjustSeriesValues(),f.push(e)}),f};return{ctor:function(n){var t=this;t._indent={top:n.chart.topIndent>=0&&n.chart.topIndent<1?n.chart.topIndent:0,bottom:n.chart.bottomIndent>=0&&n.chart.bottomIndent<1?n.chart.bottomIndent:0},t._valueAxis=n.chart.valueAxis||{},t._hideChart=!1,t._series=o(t,n),t._seriesFamilies=s(t._series,n.chart.equalBarWidth)},adjustSeriesDimensions:function(t,i){var r=this;i&&n.each(r._series||[],function(n,i){i.resamplePoints(t)}),n.each(r._seriesFamilies,function(){this.adjustSeriesDimensions(t)})},getBoundRange:function(){for(var u=this,l,c,t=new r.Range({minY:u._valueAxis.min,minVisibleY:u._valueAxis.min,maxY:u._valueAxis.max,maxVisibleY:u._valueAxis.max}),o,f,s,h,e=0;e<u._series.length;e++)c=u._series[e].getRangeData(),t=t.getBoundRange(c);return t.isDefined()&&(s=u._valueAxis.inverted?u._indent.top:u._indent.bottom,h=u._valueAxis.inverted?u._indent.bottom:u._indent.top,o=t.maxY-t.minY,f=(n.isNumeric(t.maxVisibleY)?t.maxVisibleY:t.maxY)-(n.isNumeric(t.minVisibleY)?t.minVisibleY:t.minY),t.minY-=o*s,t.maxY+=o*h,n.isNumeric(f)&&(t.maxVisibleY=t.maxVisibleY?t.maxVisibleY+f*h:i,t.minVisibleY=t.minVisibleY?t.minVisibleY-f*s:i),t.invertY=u._valueAxis.inverted,t.applyEqualLimitsMargins()),t},getSeries:function(){var n=this;return n._series},getBackgroundColor:function(){var n=this;return n._backgroundColor},isEmpty:function(){var n=this;return n.getSeries().length===0},isShowChart:function(){var n=this;return!n.isEmpty()&&!n._hideChart},getCalculatedValueType:function(){var n=this,t;return n._series.length&&(t=n._series[0].options.argumentType),t}}}())}(jQuery,DevExpress),function(n,t){var o=t.viz.rangeSelector,r=o.utils,u=t.utils,e=-1e3,f=function(n,t){var u;if(!n||n.length===0)return-1;for(var r=0,i=n.length-1,u=0;i-r>1;)u=r+i>>1,n[u]>t?i=u:r=u;return n[i]<=t?i:r},s=function(n,t){var i=f(n,t);return n&&i>=0&&i<n.length?n[i]:t},h=function(n,t){var i=f(n,t);return n&&i>=0&&i<n.length?(i+1<n.length&&(u.isDate(t)?n[i+1].getTime()-t.getTime()<t.getTime()-n[i].getTime()&&i++:n[i+1]-t<t-n[i]&&i++),n[i]):t},c=function(n,t){var i=f(n,t);return n&&i>=0&&i<n.length?(n[i]<t&&i+1<n.length&&i++,n[i]):t},l=function(n,t,i){var r,f,e,o,s;return u.isDate(n)?i==="year"||i==="quarter"||i==="month"?{months:t.getFullYear()*12+t.getMonth()-n.getFullYear()*12-n.getMonth()}:{milliseconds:t.valueOf()-n.valueOf()}:t-n},a=function(n){return u.getRootOffset(n).left||0},v=function(n){var t=0;return n.pageX?t=n.pageX:n.originalEvent&&n.originalEvent.pageX&&(t=n.originalEvent.pageX),n.originalEvent&&n.originalEvent.touches&&(n.originalEvent.touches.length>0?t=n.originalEvent.touches[0].pageX:n.originalEvent.changedTouches.length>0&&(t=n.originalEvent.changedTouches[0].pageX)),t},y=function(n,t,i){var r=n.createText(t,e,e,{font:i}).append(),u=r.getBBox();return r.remove(),u};r.findLessOrEqualValue=s,r.findNearValue=h,r.findGreaterOrEqualValue=c,r.getInterval=l,r.getRootOffsetLeft=a,r.getEventPageX=v,r.getTextBBox=y}(jQuery,DevExpress),function(n,t){t.viz.rangeSelector=t.viz.rangeSelector,t.viz.rangeSelector.ThemeManager=t.viz.core.BaseThemeManager.inherit({_themeSection:"rangeSelector",ctor:function(n){this.setTheme(n)},_initializeTheme:function(){this._initializeFont(this._theme.scale.label.font),this._initializeFont(this._theme.sliderMarker.font),this._initializeFont(this._theme.loadingIndicator.font)},applyRangeSelectorTheme:function(t){var r=this,u={dataSource:t.dataSource},i;return delete t.dataSource,i=n.extend(!0,{},r._theme,t),i.dataSource=u.dataSource,i},setBackgroundColor:function(n){var t=this._theme;n&&(t.containerBackgroundColor=n),t.shutter.color=t.shutter.color||t.containerBackgroundColor}})}(jQuery,DevExpress),function(n,t){var r=t.ui,u=t.viz;r.registerComponent("dxRangeSelector",u.rangeSelector.RangeSelector)}(jQuery,DevExpress),DevExpress.MOD_VIZ_RANGESELECTOR=!0}if(!DevExpress.MOD_VIZ_VECTORMAP){if(!window.DevExpress)throw Error("Required module is not referenced: core");if(!DevExpress.MOD_VIZ_CORE)throw Error("Required module is not referenced: viz-core");(function(n,t,i){function s(n,t){n.data("index",t)}function u(n){return n.data("index")}function tt(n){return this._projection.parseAreaData(n.coordinates)}function it(n){if(n.geometry){var i=n.geometry.type,t=n.geometry.coordinates;if(t&&(i==="Polygon"||i==="MultiPolygon"))return i==="MultiPolygon"&&(t=[].concat.apply([],t)),this._projection.parseAreaGeoJsonData(t)}return[]}function rt(){var n=this._projection.getZoom();this._projection.setCenter(null).setZoom(null),this._applyTransform(n!==this._projection.getZoom())}function ut(n,t){this._projection.moveCenter(n,t),this._applyTransform()}function ft(n){this._projection.setZoom(n),this._applyTransform(!0)}function et(n){n.data=u(n.$target),this._controlBar.processStart(n)}function ot(n){n.data=u(n.$target),this._controlBar.processMove(n)}function st(n){n.data=u(n.$target),this._controlBar.processEnd(n)}function ht(n){this._controlBar.processWheel(n)}function ct(n){var t=u(n.$target);switch(n.category){case"areas":this._setAreaHover(this._areasInfo[t],!0);break;case"markers":this._setMarkerHover(this._markersInfo[t],!0)}}function lt(n){var t=u(n.$target);switch(n.category){case"areas":this._setAreaHover(this._areasInfo[t],!1);break;case"markers":this._setMarkerHover(this._markersInfo[t],!1)}}function at(n){var t=this,f=u(n.$target),i,r;switch(n.category){case"areas":i=t._areaClickCallback,r=t._areasInfo[f].proxy;break;case"markers":i=t._markerClickCallback,r=t._markersInfo[f].proxy}i&&i.call(r,r)}function vt(n){var i=u(n.$target),t;switch(n.category){case"areas":t=this._areasInfo[i];break;case"markers":t=this._markersInfo[i]}return this._tooltip.check(t.proxy)}function yt(){this._tooltip.show()}function pt(n){var t=b(this._renderer);this._tooltip.move({x:n.x-t.left,y:n.y-t.top})}function wt(){this._tooltip.hide()}n.viz.map={};var h=window.Number,a=window.String,v=Math.round,bt=n.utils.isArray,f=n.utils.isFunction,p=n.utils.isString,y=n.utils.windowResizeCallbacks,w=n.utils.createResizeHandler,b=n.utils.getRootOffset,k=t.ajax,d=t.extend,g=800,nt=400,e="none",r="single",o="multiple",c=1,l=2;n.viz.map.Map=n.ui.Component.inherit({_rendererType:n.viz.renderers.Renderer,_init:function(){var n=this;n.callBase(),n._renderer=new n._rendererType,n._renderer.recreateCanvas(1,1),n._renderer.draw(n._element().get(0)),n._themeManager=new n._themeManagerType,n._projection=new n._projectionType,n._tracker=new n._trackerType,n._root=n._renderer.getRoot(),n._root.applySettings({"class":"dxm",stroke:"none",strokeWidth:0,fill:"none",align:"center",cursor:"default",style:{overflow:"hidden"}}),n._background=n._renderer.createRect(0,0,0,0,0,{"class":"dxm-background"}),n._tracker.attachRoot(n._root),n._tracker.setCallbacks(n,{start:et,move:ot,end:st,wheel:ht,"hover-on":ct,"hover-off":lt,click:at,"tooltip-check":vt,"tooltip-show":yt,"tooltip-move":pt,"tooltip-hide":wt}),n._initAreas(),n._initMarkers(),n._controlBar=new n._controlBarType({container:n._root,renderer:n._renderer,context:n,resetCallback:rt,moveCallback:ut,zoomCallback:ft}),n._tooltip=new n._tooltipType({container:n._root,renderer:n._renderer}),n._legend=new n._legendType({container:n._root,renderer:n._renderer,themeManager:n._themeManager}),n._initResizing()},_initAreas:function(){var n=this;n._areasGroup=n._renderer.createGroup({"class":"dxm-areas"}),n._areasCancelLock=0,n._tracker.attachGroup("areas",n._areasGroup)},_initMarkers:function(){var n=this,t=d({},n.option("marker"));n._markersGroup=n._renderer.createGroup({"class":"dxm-markers"}),n._markerShapesGroup=n._renderer.createGroup(),n._markerTextsGroup=n._renderer.createGroup({"class":"dxm-marker-texts"}),n._markerCoversGroup=n._renderer.createGroup({stroke:"none",strokeWidth:0,fill:"#000000",opacity:.0001}),n._markerShadowFilter=n._renderer.createFilter("shadow").applySettings({id:"marker-shadow-filter",x:"-40%",y:"-40%",width:"180%",height:"200%",color:"#000000",opacity:.2,dx:0,dy:1,blur:1}).append(),n._markersCancelLock=0,n._tracker.attachGroup("markers",n._markersGroup)},_initResizing:function(){var n=this;n._resizeHandler=w(function(){n._resize()}),n._resizeHandler.dispose=function(){return n=null,this},y.add(n._resizeHandler)},_dispose:function(){var n=this;n.callBase(),delete n._root,delete n._background,n._themeManager.dispose()&&delete n._themeManager,n._tracker.detachRoot(),n._disposeAreas(),n._disposeMarkers(),n._controlBar.dispose()&&delete n._controlBar,n._tooltip.dispose()&&delete n._tooltip,n._legend.dispose()&&delete n._legend,n._renderer.dispose(),delete n._renderer,delete n._projection,n._tracker.dispose()&&delete n._tracker,delete n._readyCallback,n._disposeResizing(),n._remoteDataCache=null,n._disposeLoadIndicator()},_disposeAreas:function(){var n=this;n._areasGroup=n._areasInfo=n._mapData=null,n._tracker.detachGroup("areas")},_disposeMarkers:function(){var n=this;n._markersGroup.clear(),n._markerShadowFilter.dispose(),n._markersGroup=n._markerShapesGroup=n._markerTextsGroup=n._markerCoversGroup=n._markerShadowFilter=n._markersDataItems=null,n._tracker.detachGroup("markers")},_disposeResizing:function(){var n=this;y.remove(n._resizeHandler),n._resizeHandler.dispose()&&delete n._resizeHandler},_adjustSize:function(n){var t=this,f=t.option("size")||{},r=f.width>=0?h(f.width):t._element().width(),u=f.height>=0?h(f.height):t._element().height(),e;return r===0&&h(f.width)!==0&&(r=g),u===0&&h(f.height)!==0&&(u=nt),e=t._width!==r||t._height!==u,(e||n)&&(t._renderer.resize(r,u),t._projection.setSize(r,u),t._applyTransform(),t._tooltip.setSize(r,u),t._legend.setSize(r,u),t._background.applySettings({x:0,y:0,width:r,height:u}),t._width=r,t._height=u,t._updateLoadIndicator(i,r,u)),e},_clean:function(){var n=this;n._resizeHandler.stop(),n._themeManager.reset(),n._background.detach(),n._cleanAreas(),n._cleanMarkers(),n._controlBar.clean(),n._legend.clean(),n._tooltip.clean(),n._tracker.clean()},_render:function(){var n=this;n._projection.setBounds(n.option("bounds")).setMaxZoom(n.option("maxZoomFactor")).setZoom(n.option("zoomFactor")).setCenter(n.option("center")),n._adjustSize(!0),n._themeManager.setTheme(n.option("theme")),n._tooltip.setOptions(n._themeManager.getTooltipSettings(n.option("tooltip"))),n._legend.setOptions(n._themeManager.getLegendSettings(n.option("legend"))),n._tracker.setOptions(n._getTrackerSettings()),n._controlBar.setData({minZoom:n._projection.getMinZoom(),maxZoom:n._projection.getMaxZoom()}).setZoom(n._projection.getZoom()).setOptions(n._themeManager.getControlBarSettings(n.option("controlBar"))),f(n._readyCallback=n.option("ready"))||(n._readyCallback=null),n._background.applySettings(n._themeManager.getBackgroundSettings(n.option("background"))),n._background.append(n._root),n._renderAreas(),n._renderMarkers(),n._controlBar.render(),n._legend.render(),n._tooltip.render(),n._tracker.render(),n._contentReady=!0,n._raiseReady()},_getTrackerSettings:function(){var n=this.option("interaction"),t={};return n===i||n?(n=n||{},t.enabled=!0,t.touchEnabled=n.touchEnabled!==i?!!n.touchEnabled:!0,t.wheelEnabled=n.wheelEnabled!==i?!!n.wheelEnabled:!0,t.tooltipEnabled=this._tooltip.enabled()):t.enabled=!1,t},_optionChanged:function(n,t){switch(n){case"zoomFactor":this._updateZoomFactor(t);break;case"center":this._updateCenter(t);break;case"loadingIndicator":this._updateLoadIndicator(this._themeManager.getLoadIndicatorSettings(this.option("loadingIndicator")));break;default:this._invalidate()}},_updateZoomFactor:function(n){var t=this,i=t._projection.getZoom();t._projection.setZoom(n),i!==t._projection.getZoom()&&(t._controlBar.setZoom(t._projection.getZoom()),t._applyTransform(!0))},_updateCenter:function(n){var t=this;t._projection.setCenter(n),t._applyTransform()},_resize:function(){var n=this;n._adjustSize()&&(n._applyTransform(),n._parseAreas(),n._redrawAreas(),n._parseMarkers(),n._redrawMarkers())},_raiseReady:function(){var n=this;n._areasReady&&n._markersReady&&n._contentReady&&(n._areasReady=n._markersReady=n._contentReady=null,n._readyCallback&&n._readyCallback(),n.hideLoadingIndicator())},_loadData:function(n,t){if(p(n)){var i=this._remoteDataCache=this._remoteDataCache||{};i[n]?t(i[n]):k({url:n,dataType:"json",type:"GET",success:function(r){i[n]=r,t(i[n])},error:function(n,i,r){t([],r)}})}else n?t(n):t([])},_cleanAreas:function(){var n=this,t,i,r;if(n._areaCustomizeCallback=n._areaClickCallback=n._areaSelectionChangedCallback=n._selectedAreas=null,n._areasGroup.detach(),n._areasGroup.clear(),t=n._areasInfo,t){for(i=0,r=t.length;i<r;++i)t[i].proxy._dispose();n._areasInfo=null}else++n._areasCancelLock},_renderAreas:function(){var n=this,t=n.option("areaSettings")||{},i;n._themeManager.initCommonAreaSettings(t),n._areaCustomizeCallback=f(t.customize)?t.customize:null,n._areaClickCallback=f(t.click)?t.click:null,n._areaSelectionChangedCallback=f(t.selectionChanged)?t.selectionChanged:null,n._areaHoverEnabled="hoverEnabled"in t?!!t.hoverEnabled:!0,i=a(t.selectionMode).toLowerCase(),n._areaSelectionMode=i===e||i===r||i===o?i:r,n._selectedAreas=n._areaSelectionMode===o?{}:null,n._areasGroup.append(n._root),n._loadData(n.option("mapData"),function(t){n._areasCancelLock===0?n._createAreas(t):--n._areasCancelLock,n=null})},_parseAreas:function(){for(var t=this._areasInfo,i=this._mapData,n=0,r=i.length;n<r;++n)(t[n]=t[n]||{}).coordinates=this._parseAreaCoordinates(i[n]||{})},_createAreas:function(n){var t=this,v=t._areasInfo=[],l=n.type==="FeatureCollection",k=l?"properties":"attributes",d=t._mapData=l?n.features:n;t._parseAreaCoordinates=l?it:tt,t._parseAreas();var y=t._areasGroup,g=t._renderer,p=t._themeManager,nt=t._projection,w=t._areaCustomizeCallback,i,h,u=0,f=v.length,a=[],o,b;for(y.applySettings(p.getCommonAreaSettings().common);u<f;++u)i=v[u],h=d[u]||{},o=null,i.attributes=h[k]||{},i.options=(w?w.call(h,h):null)||{},b=nt.projectArea(i.coordinates),i.styles=p.getAreaSettings(i.options),i.element=o=g.createSimplePath({d:b}),o.applySettings(i.styles.normal),i.index=u,s(o.$element,u),i.options.isSelected&&a.push(i),i.proxy=new t._proxyType(t,i,{type:"area",setSelectionCallback:t._setAreaSelection}),o.append(y);for(f=t._areaSelectionMode!==e?a.length:0,u=f>0&&t._areaSelectionMode===r?f-1:0;u<f;++u)t._setAreaSelection(a[u],!0,c);t._areasReady=!0,t._raiseReady()},_redrawAreas:function(){for(var i=this._areasInfo,r=this._projection,n,t=0,u=i.length;t<u;++t)n=i[t],n.element.applySettings({d:r.projectArea(n.coordinates)})},_cleanMarkers:function(){var n=this,t,i,r;if(n._markerCustomizeCallback=n._markerClickCallback=n._markerSelectionChangedCallback=n._selectedMarkers=null,n._markersGroup.detach(),n._markerShapesGroup.detach(),n._markerTextsGroup.detach(),n._markerCoversGroup.detach(),n._markerShapesGroup.clear(),n._markerTextsGroup.clear(),n._markerCoversGroup.clear(),t=n._markersInfo,t){for(i=0,r=t.length;i<r;++i)t[i].proxy._dispose();n._markersInfo=null}else++n._markersCancelLock},_renderMarkers:function(){var n=this,t=n.option("markerSettings")||{},u=n.option("markers"),i;n._themeManager.initCommonMarkerSettings(t),n._markerCustomizeCallback=f(t.customize)?t.customize:null,n._markerClickCallback=f(t.click)?t.click:null,n._markerSelectionChangedCallback=f(t.selectionChanged)?t.selectionChanged:null,n._markerHoverEnabled="hoverEnabled"in t?!!t.hoverEnabled:!0,i=a(t.selectionMode).toLowerCase(),n._markerSelectionMode=i===e||i===r||i===o?i:r,n._selectedMarkers=n._markerSelectionMode===o?{}:null,n._markersGroup.append(n._root),n._loadData(u,function(t){n._markersDataItems=t,n._markersCancelLock===0?n._createMarkers():--n._markersCancelLock,n=null})},_parseMarkers:function(){for(var t=this._markersInfo,i=this._markersDataItems,r=this._projection,n=0,u=i.length;n<u;++n)(t[n]=t[n]||{}).coordinates=r.parsePointData((i[n]||{}).coordinates)},_createMarkers:function(){var t=this,k=t._markersInfo=[];t._parseMarkers();var a=t._markersGroup,v=t._markerShapesGroup,y=t._markerTextsGroup,d=t._markerCoversGroup,p=t._renderer,h=t._themeManager,nt=t._projection,tt=t._markersDataItems,g=t._markerCustomizeCallback,n,u,i=0,f=k.length,w=[],o,b,l;for(v.applySettings(h.getCommonMarkerSettings().common),y.applySettings(h.getCommonMarkerSettings().text),h.getCommonMarkerSettings().normal.filter=t._markerShadowFilter.ref;i<f;++i)n=k[i],u=tt[i]||{},n.attributes=u.attributes=u.attributes||{},n.options=(g?g.call(u,u):null)||{},n.styles=h.getMarkerSettings(n.options),o=b=l=null,n.location=nt.projectPoint(n.coordinates),n.index=i,o=p.createCircle(n.location.x,n.location.y).append(v),o.applySettings({r:n.styles.size}).applySettings(n.styles.normal),s(o.$element,i),n.options.text&&(b=p.createText(n.options.text,n.location.x,n.location.y).append(y),l=p.createRect().append(d),s(l.$element,i)),n.shape=o,n.text=b,n.cover=l,n.options.isSelected&&w.push(n),n.proxy=new t._proxyType(t,n,{type:"marker",setSelectionCallback:t._setMarkerSelection});for(v.append(a),y.append(a),d.append(a),t._arrangeMarkers(),f=t._markerSelectionMode!==e?w.length:0,i=f>0&&t._markerSelectionMode===r?f-1:0;i<f;++i)t._setMarkerSelection(w[i],!0,c);t._markersReady=!0,t._raiseReady()},_arrangeMarkers:function(){for(var r=this,o=r._markersInfo,s=o.length,n,h=[],u,i,f,e,t=0;t<s;++t)n=o[t],u=null,n.text&&(i=n.text.getBBox(),f=n.location.x,e=n.location.y,n.textOffsetX=v(f-i.x+n.styles.selectedSize)+2,n.textOffsetY=v(e-i.y-i.height/2)-1,n.trackerOffsetX=n.textOffsetX+i.x-f-1,n.trackerOffsetY=n.textOffsetY+i.y-e-1,n.trackerWidth=i.width+2,n.trackerHeight=i.height+2,u={text:{x:f+n.textOffsetX,y:e+n.textOffsetY},cover:{x:f+n.trackerOffsetX,y:e+n.trackerOffsetY,width:n.trackerWidth,height:n.trackerHeight}}),h.push(u);for(r._markerTextsGroup.detach(),r._markerCoversGroup.detach(),t=0;t<s;++t)n=o[t],n.text&&(u=h[t],n.text.applySettings(u.text),n.cover.applySettings(u.cover));r._markerTextsGroup.append(r._markersGroup),r._markerCoversGroup.append(r._markersGroup)},_redrawMarkers:function(){for(var u=this._markersInfo,f=this._projection,n,r=0,e=u.length,t,i;r<e;++r)n=u[r],n.location=f.projectPoint(n.coordinates),t=n.location.x,i=n.location.y,n.shape.applySettings({cx:t,cy:i}),n.extra&&n.extra.applySettings({cx:t,cy:i}),n.options.text&&(n.text.applySettings({x:t+n.textOffsetX,y:i+n.textOffsetY}),n.cover.applySettings({x:t+n.trackerOffsetX,y:i+n.trackerOffsetY}))},_applyTransform:function(n){var t=this,i=t._projection.getTransform();t._areasGroup.applySettings(i),t._markersGroup.applySettings(i),n&&(t._redrawAreas(),t._redrawMarkers())},_setAreaHover:function(n,t){this._areaHoverEnabled&&(n.hovered=!!t,n.selected||(n.element.applySettings(n.styles[t?"hovered":"normal"]),t?n.element.toForeground():n.element.toBackground()))},_setMarkerHover:function(n,t){this._markerHoverEnabled&&(n.hovered=!!t,n.selected||(n.hovered?(n.extra||(n.extra=this._renderer.createCircle(n.location.x,n.location.y),s(n.extra.$element,n.index)),n.shape.applySettings({r:n.styles.hoveredSize}).applySettings(n.styles.hovered),n.extra.applySettings({r:n.styles.hoveredExtraSize}).applySettings(n.styles.extraHovered),n.extra.insertBefore(n.shape)):(n.shape.applySettings({r:n.styles.size}).applySettings(n.styles.normal),n.extra.detach(),n.extra.dispose(),n.extra=null)))},_setAreaSelection:function(n,t,i){var u=this;u._areaSelectionMode!==e&&(n.selected=!!t,n.element.applySettings(n.styles[t?"selected":n.hovered?"hovered":"normal"]),n.selected?n.hovered||n.element.toForeground():n.hovered||n.element.toBackground(),i&c||!u._areaSelectionChangedCallback||u._areaSelectionChangedCallback.call(n.proxy,n.proxy),i&l||(u._areaSelectionMode===r?(n.selected&&u._selectedAreas&&u._setAreaSelection(u._selectedAreas,!1,i|l),u._selectedAreas=n.selected?n:null):n.selected?u._selectedAreas[n.index]=n:delete u._selectedAreas[n.index]))},_setMarkerSelection:function(n,t,i){var u=this;u._markerSelectionMode!==e&&(n.selected=!!t,n.selected?(n.extra||(n.extra=u._renderer.createCircle(n.location.x,n.location.y),s(n.extra.$element,n.index)),n.shape.applySettings({r:n.styles.selectedSize}).applySettings(n.styles.selected),n.extra.applySettings({r:n.styles.selectedExtraSize}).applySettings(n.styles.extraSelected),n.extra.insertBefore(n.shape)):n.hovered?(n.shape.applySettings({r:n.styles.hoveredSize}).applySettings(n.styles.hovered),n.extra.applySettings({r:n.styles.hoveredExtraSize}).applySettings(n.styles.extraHovered)):(n.shape.applySettings({r:n.styles.size}).applySettings(n.styles.normal),n.extra.detach(),n.extra.dispose(),n.extra=null),i&c||!u._markerSelectionChangedCallback||u._markerSelectionChangedCallback.call(n.proxy,n.proxy),i&l||(u._markerSelectionMode===r?(n.selected&&u._selectedMarkers&&u._setMarkerSelection(u._selectedMarkers,!1,i|l),u._selectedMarkers=n.selected?n:null):n.selected?u._selectedMarkers[n.index]=n:delete u._selectedMarkers[n.index]))},_refresh:function(){var n=this,t=n.callBase;n._endLoading(function(){t.call(n)})},render:function(n){return n==="resize"?this._resize():this._refresh(),this},getAreas:function(){for(var t=this._areasInfo,n=0,r=t.length,i=[];n<r;++n)i.push(t[n].proxy);return i},getMarkers:function(){for(var t=this._markersInfo,n=0,r=t.length,i=[];n<r;++n)i.push(t[n].proxy);return i},clearAreaSelection:function(){var n=this,t=n._selectedAreas,i;if(n._areaSelectionMode===r)t&&n._setAreaSelection(t,!1);else if(n._areaSelectionMode===o)for(i in t)n._setAreaSelection(t[i],!1);return n},clearMarkerSelection:function(){var n=this,t=n._selectedMarkers,i;if(n._markerSelectionMode===r)t&&n._setMarkerSelection(t,!1);else if(n._markerSelectionMode===o)for(i in t)n._setMarkerSelection(t[i],!1);return n},clearSelection:function(){return this.clearAreaSelection().clearMarkerSelection()}}).include(n.viz.core.widgetMarkupMixin).include(n.viz.core.loadIndicatorMixin.base).redefine(n.viz.core.loadIndicatorMixin.map),n.viz.map._utils={getElementData:u,setElementData:s},n.ui.registerComponent("dxVectorMap",n.viz.map.Map),n.viz.map.sources={}})(DevExpress,jQuery),function(n){var i=Number,l=Math.tan,a=Math.atan,v=Math.exp,o=Math.round,y=Math.log,s=n.utils.isArray,p=n.viz.renderers.buildPath,w=Math.PI*2,b=Math.PI/2,k=Math.PI/4,r=Math.PI/180,d=1,h=-180,c=180,u=-90,f=90,e=1,g=32,nt=n.Class.inherit({setBounds:function(n){n=n||{};var t=this;return t._minlon=n.minLon>=h?i(n.minLon):h,t._maxlon=n.maxLon<=c?i(n.maxLon):c,t._minlat=n.minLat>=u?i(n.minLat):u,t._maxlat=n.maxLat<=f?i(n.maxLat):f,t},setSize:function(n,t){var i=this;return i._width=n,i._height=t,i._setupBounds(),i._adjustZoom(),i._adjustCenter(),i},_setupBounds:function(){var n=this,e=n._width,o=n._height,u=o/e;if(u=u<=d?o:e,n._radius=u/w,n._x0=e/2,n._y0=o/2,n._miny=n._y0-u/2,n._maxy=n._y0+u/2,!(n._maxlon-n._minlon>=360)||!(n._maxlat-n._minlat>=180)){var f=n._project(n._minlon,n._maxlat),s=n._project(n._maxlon,n._minlat),t=e/(s.x-f.x),r=o/(s.y-f.y),i=t;t<r?(i=t,t=(f.y+s.y)/2,r=o/i/2,f.y=t-r,s.y=t+r):t>r&&(i=r,r=(f.x+s.x)/2,t=e/i/2,f.x=r-t,s.x=r+t),n._x0=-f.x*i+e*i/2,n._y0=-f.y*i+o*i/2,n._radius*=i,u*=i,n._miny=n._y0-u/2,n._maxy=n._y0+u/2}},_project:function(n,t,i){var e=this,h=n*r,s,c=e._radius*h+e._x0,o;return t<=u?o=e._maxy:t>=f?o=e._miny:(s=t*r,o=e._radius*-y(l(k+s/2))+e._y0),i||(o<=e._miny&&(o=e._miny),o>=e._maxy&&(o=e._maxy)),{x:c,y:o}},_invproject:function(n,t){var i=this,u=(n-i._x0)/i._radius,f=2*a(v((i._y0-t)/i._radius))-b;return{lat:f/r,lon:u/r}},parseAreaData:function(n){for(var h=this,r=0,c=s(n)?n.length:0,t,i,u,f,e,o=[];r<c;++r)if(t=n[r],i=0,u=s(t)?t.length:0,u){for(f=[];i<u;)e=h._project(t[i++],t[i++]),f.push(e.x,e.y);o.push(f)}return o},parseAreaGeoJsonData:function(n){for(var s=this,u=0,h=n?n.length:0,i,r,e,f,o=[],t;u<h;++u){for(i=n[u],f=[],r=0,e=i?i.length:0;r<e;++r)t=i[r],t=s._project(t[0],t[1]),f.push(t.x,t.y);o.push(f)}return o},parsePointData:function(n){return n?this._project(n[0],n[1]):{}},projectArea:function(n){for(var r=0,s=n.length,i,t,f,e=[],u,o=this._zoom,h=this._xzoom,c=this._yzoom;r<s;++r){for(i=n[r],u=[],t=0,f=i.length;t<f;t+=2)u.push(o*i[t]-h,o*i[t+1]-c);e.push(p(u))}return e.join(" ")},projectPoint:function(n){return{x:o(this._zoom*n.x-this._xzoom),y:o(this._zoom*n.y-this._yzoom)}},_adjustZoom:function(){var n=this;n._xzoom=n._width*(n._zoom-1)/2,n._yzoom=n._height*(n._zoom-1)/2},_adjustCenter:function(){var n=this,t=n._project(n._loncenter,n._latcenter,!0);n._dxcenter=(n._x0-(n._xcenter=t.x))*n._zoom,n._dycenter=(n._y0-(n._ycenter=t.y))*n._zoom},getZoom:function(){return this._zoom},setZoom:function(n){var t=this,r=i(n);return r<t._minZoom&&(r=t._minZoom),r>t._maxZoom&&(r=t._maxZoom),t._zoom=t._minZoom<=r&&r<=t._maxZoom?r:e,t._adjustZoom(),t._adjustCenter(),t},setMaxZoom:function(n){return this._minZoom=e,this._maxZoom=n>=e?i(n):g,this},getMinZoom:function(){return 1},getMaxZoom:function(){return this._maxZoom},setCenter:function(n){return n=n||{},this._latcenter=i(n.lat)||0,this._loncenter=i(n.lon)||0,this._adjustCenter(),this},moveCenter:function(n,t){var i=this,r=i._xcenter+n/i._zoom,u=i._ycenter+t/i._zoom,f=i._invproject(r,u);return i.setCenter(f)},getTransform:function(){return{translateX:this._dxcenter,translateY:this._dycenter}}});n.viz.map.Map.include({_projectionType:nt})}(DevExpress),function(n,t){function u(n){delete n._owner,n.update=function(){},n.finish=function(){}}function v(n,t){this._owner=n,this._x=t.x,this._y=t.y}function y(n,t){this._owner=n,this._command=t.data}function p(n,t){function u(){n._move(i,r),f=k(u,e)}this._command=t.data;var f=null,e=100,i=0,r=0;switch(this._command){case s:r=-10;break;case h:i=10;break;case c:r=10;break;case l:i=-10}this._stop=function(){return d(f),this._stop=n=u=null,this},t=null,u()}function w(n,t){function i(){n._adjustZoom(n._zoomFactor+f),r=k(i,u)}this._owner=n,this._command=t.data;var r=null,u=150,f=this._command===a?n._zoomFactorStep:-n._zoomFactorStep;this._stop=function(){return d(r),this._stop=n=i=null,this},t=null,i()}function b(n,t){this._owner=n,this._pos=t.y}var f=n.viz.renderers.buildPath,k=setTimeout,d=clearTimeout,g=Math.round,nt=Math.pow,e=Math.log,r=n.viz.map._utils.setElementData,o=Math.LN2,tt="command-reset",s="command-move-up",h="command-move-right",c="command-move-down",l="command-move-left",a="command-zoom-in",it="command-zoom-out",rt="command-zoom-drag",i={},ut;i[tt]=y,i[s]=i[h]=i[c]=i[l]=p,i[a]=i[it]=w,i[rt]=b,ut=n.Class.inherit({ctor:function(n){var t=this;t._container=n.container,t._createElements(n.renderer);var i=n.context,r=n.resetCallback,u=n.moveCallback,f=n.zoomCallback;t._reset=function(){r.call(i)},t._move=function(n,t){u.call(i,n,t)},t._zoom=function(n){f.call(i,n)},t._dispose=function(){delete this._reset,delete this._move,delete this._zoom,delete this._dispose,i=r=u=f=null},n=null},_createElements:function(n){var t=this._root=n.createGroup({"class":"dxm-control-bar"}),i=n.createGroup({"class":"dxm-control-buttons"}).append(t),u=n.createGroup({stroke:"none",strokeWidth:0,fill:"#000000",opacity:.0001,cursor:"pointer"}).append(t),r={bigCircleSize:58,smallCircleSize:28,buttonSize:10,arrowButtonOffset:20,incdecButtonSize:11,incButtonOffset:66,decButtonOffset:227,sliderLineStartOffset:88.5,sliderLineEndOffset:205.5,sliderLength:20,sliderWidth:8,trackerGap:4};this._buttonsGroup=i,this._createButtons(n,i,r),this._createTrackers(n,u,r),t.applySettings({translateX:50.5,translateY:50.5})},_createButtons:function(n,t,i){var r=i.buttonSize/2,u=i.arrowButtonOffset-r,o=i.arrowButtonOffset,e=i.incdecButtonSize/2;n.createCircle(0,0,i.bigCircleSize/2).append(t),n.createCircle(0,0,r).append(t),n.createPath([-r,-u,0,-o,r,-u]).append(t),n.createPath([u,-r,o,0,u,r]).append(t),n.createPath([r,u,0,o,-r,u]).append(t),n.createPath([-u,r,-o,0,-u,-r]).append(t),n.createCircle(0,i.incButtonOffset,i.smallCircleSize/2).append(t),n.createSimplePath({d:f([-e,i.incButtonOffset,e,i.incButtonOffset])+" "+f([0,i.incButtonOffset-e,0,i.incButtonOffset+e])}).append(t),n.createCircle(0,i.decButtonOffset,i.smallCircleSize/2).append(t),n.createSimplePath({d:f([-e,i.decButtonOffset,e,i.decButtonOffset])}).append(t),n.createSimplePath({d:f([0,i.sliderLineStartOffset,0,i.sliderLineEndOffset])}).append(t),this._zoomDrag=n.createRect(-i.sliderLength/2,i.sliderLineEndOffset-i.sliderWidth/2,i.sliderLength,i.sliderWidth).append(t),this._sliderLineLength=i.sliderLineEndOffset-i.sliderLineStartOffset},_createTrackers:function(n,t,i){var f=g((i.arrowButtonOffset-i.trackerGap)/2),o=i.arrowButtonOffset-f,v=g(nt(i.bigCircleSize*i.bigCircleSize/4-f*f,.5)),e=v-o,u;u=n.createRect(-f,-f,f*2,f*2).append(t),r(u.$element,tt),u=n.createRect(-f,-v,f*2,e).append(t),r(u.$element,s),u=n.createRect(o,-f,e,f*2).append(t),r(u.$element,h),u=n.createRect(-f,o,f*2,e).append(t),r(u.$element,c),u=n.createRect(-v,-f,e,f*2).append(t),r(u.$element,l),u=n.createCircle(0,i.incButtonOffset,i.smallCircleSize/2).append(t),r(u.$element,a),u=n.createCircle(0,i.decButtonOffset,i.smallCircleSize/2).append(t),r(u.$element,it),u=this._zoomDragCover=n.createRect(-i.sliderLength/2,i.sliderLineEndOffset-i.sliderWidth/2,i.sliderLength,i.sliderWidth).append(t),r(u.$element,rt)},dispose:function(){var n=this;return delete n._container,n._dispose(),n._root.clear(),delete n._root,delete n._buttonsGroup,delete n._zoomDrag,delete n._zoomDragCover,n},setData:function(n){var t=this;return t._minZoomFactor=e(n.minZoom)/o,t._maxZoomFactor=e(n.maxZoom)/o,t._zoomCoeff=t._sliderLineLength/(t._maxZoomFactor-t._minZoomFactor),t._zoomFactorStep=(t._maxZoomFactor-t._minZoomFactor)/10,t},setZoom:function(n){return this._adjustZoom(e(n)/o),this},setOptions:function(n){return n=n||{},this._enabled=n.enabled!==t?!!n.enabled:!0,this._buttonsGroup.applySettings(n.shape),this},clean:function(){return this._enabled&&this._root.detach(),this},render:function(){return this._enabled&&this._root.append(this._container),this},_adjustZoom:function(n){var t=this,i=n,r;i<=t._maxZoomFactor||(i=t._maxZoomFactor),i>=t._minZoomFactor||(i=t._minZoomFactor),t._zoomFactor=i,r=-i*t._zoomCoeff,t._zoomDrag.applySettings({translateY:r}),t._zoomDragCover.applySettings({translateY:r})},_applyZoom:function(){this._zoom(nt(2,this._zoomFactor))},processStart:function(n){var t=i[n.data]||v;return this._command=new t(this,n),this},processMove:function(n){return this._command.update(n),this},processEnd:function(n){return this._command.finish(n),this},processWheel:function(n){var t=this;return t._adjustZoom(t._zoomFactor+n.delta*t._zoomFactorStep),t._applyZoom(),this}}),v.prototype.update=function(n){var t=this;t._owner._move(t._x-n.x,t._y-n.y),t._x=n.x,t._y=n.y},v.prototype.finish=function(){u(this)},y.prototype.update=function(n){n.data!==this._command&&u(this)},y.prototype.finish=function(){this._owner._reset(),this._owner._adjustZoom(this._owner._minZoomFactor),u(this)},p.prototype.update=function(n){this._command!==n.data&&this.finish()},p.prototype.finish=function(){u(this._stop())},w.prototype.update=function(n){this._command!==n.data&&this.finish()},w.prototype.finish=function(){this._owner._applyZoom(),u(this._stop())},b.prototype.update=function(n){this._owner._adjustZoom(this._owner._zoomFactor+(this._pos-n.y)/this._owner._zoomCoeff),this._pos=n.y},b.prototype.finish=function(){this._owner._applyZoom(),u(this)},n.viz.map.Map.include({_controlBarType:ut})}(DevExpress),function(n,t,i){var u=Math.max,r=Math.min,f=n.Class.inherit({ctor:function(n){var t=this;t._container=n.container,t._renderer=n.renderer,t._themeManager=n.themeManager,t._root=t._renderer.createGroup({"class":"dxm-legend"}),t._background=t._renderer.createRect(0,0,0,0,0,{"class":"dxm-legend-background"}).append(t._root),t._itemsGroup=t._renderer.createGroup().append(t._root),t._clip=t._renderer.createClipRect().append(),t._itemsGroup.applySettings({clipId:t._clip.id})},dispose:function(){var n=this;return n._root.clear(),n._clip.dispose(),n._root=n._background=n._itemsGroup=n._clip=n._container=n._renderer=null,n},setSize:function(n,t){var i=this;return i._containerWidth=n,i._containerHeight=t,i._hasItems&&i._adjustLocation(),i},setOptions:function(n){n=n||{};var t=this;return t._items=n.items&&n.items.length>0?n.items:[],t._enabled=(n.enabled!==i?!!n.enabled:!0)&&t._items.length>0,t._metrics=n.metrics,t._backgroundSettings=n.background,t._textSettings=n.text,t},_createItems:function(){for(var n=this,i=n._metrics,v=n._renderer,b=n._themeManager,k=n._textSettings,o=n._itemsGroup,s=n._items,y=s.length,g,h=[],e,p=i.horizontalPadding,c=i.verticalPadding,f=i.itemSize,w=i.itemSpacing,d=i.textIndent,l,a,t=0;t<y;++t)h.push(v.createText(s[t].text,0,0,k).append(o));for(t=0;t<y;++t)e=h[t].getBBox(),l=u(f,e.height),a=c+l/2,v.createRect(p,a-f/2,f,f,0,b.getLegendItemSettings(s[t])).append(o),h[t].applySettings({x:p+f+d,y:a-e.y-e.height/2}),c+=l+w;n._totalWidth=r(n._metrics.maxWidth,o.getBBox().width+2*i.horizontalPadding),n._totalHeight=r(n._metrics.maxHeight,c+i.verticalPadding-w),n._background.applySettings({x:0,y:0,width:n._totalWidth,height:n._totalHeight}),n._clip.updateRectangle({x:0,y:0,width:n._totalWidth,height:n._totalHeight}),n._adjustLocation(),n._hasItems=!0},_adjustLocation:function(){var n=this;n._root.applySettings({translateX:n._containerWidth-n._totalWidth-n._metrics.horizontalIndent,translateY:n._containerHeight-n._totalHeight-n._metrics.verticalIndent})},clean:function(){var n=this;return n._enabled&&(n._root.detach(),n._itemsGroup.clear(),n._hasItems=null),n},render:function(){var n=this;return n._enabled&&(n._background.applySettings(n._backgroundSettings),n._root.append(n._container),n._createItems()),n}});n.viz.map.Map.include({_legendType:f})}(DevExpress,jQuery),function(n,t,i){function d(){var i=window,n=i.navigator.pointerEnabled,t=i.navigator.msPointerEnabled,e="ontouchstart"in i;r.start=f(n?"pointerdown":t?"MSPointerDown":e?"touchstart mousedown":"mousedown",u),r.move=f(n?"pointermove":t?"MSPointerMove":e?"touchmove mousemove":"mousemove",u),r.end=f(n?"pointerup":t?"MSPointerUp":e?"touchend mouseup":"mouseup",u),r.over=f(n?"pointerover":t?"MSPointerOver":"mouseover",u),r.out=f(n?"pointerout":t?"MSPointerOut":"mouseout",u),r.wheel=f("mousewheel DOMMouseScroll",u)}function s(n){var t=n.originalEvent,i=t.changedTouches?t.changedTouches[0]:{};return{x:n.pageX||t.pageX||i.pageX,y:n.pageY||t.pageY||i.pageY}}var f=n.ui.events.addNamespace,e=function(n){var t=n.originalEvent.type,i=n.originalEvent.pointerType;return/^touch/.test(t)||/^MSPointer/.test(t)&&i!==4||/^pointer/.test(t)&&i!=="mouse"},h=Math.abs,l=t.now,a=setTimeout,o=clearTimeout,b=n.viz.map._utils.getElementData,c=t(document),u="dxVectorMap",r={},v=300,y=300,k=400,p=300;d();var g="start",nt="move",tt="end",it="wheel",rt="hover-on",w="hover-off",ut="click",ft="tooltip-check",et="tooltip-show",ot="tooltip-hide",st="tooltip-move",ht=n.Class.inherit({ctor:function(){var n=this;n._groups={},n._createCallbacks(),n._resetState()},dispose:function(){var n=this;return n._dispose(),n._groups=n._context=n._callbacks=null,n},_resetState:function(){var n=this;o(n._tooltip_showTimeout),o(n._tooltip_hideTimeout),n._touchLock=n._moving=n._click_time=n._hover_event=n._tooltip_target=n._tooltip_showTimeout=n._tooltip_hideTimeout=null},_createCallbacks:function(){var n=this;n._rootEvents={},n._rootEvents[r.start]=function(t){var i=e(t);(!i||n._touchEnabled)&&(t.preventDefault(),n._touchLock=i,n._processStart(t),i&&n._processTooltipRootTouchStart(t))},n._documentEventsMoveEnd={},n._documentEventsMoveEnd[r.move]=function(t){n._touchLock===e(t)&&n._processMove(t)},n._documentEventsMoveEnd[r.end]=function(t){n._touchLock===e(t)&&(n._touchLock=null,n._processEnd(t))},n._rootEvents[r.wheel]=function(t){n._wheelEnabled&&(t.preventDefault(),n._processWheel(t))},n._groupEvents={},n._groupEvents[r.start]=function(t){var i=e(t);(!i||n._touchEnabled)&&(n._processClickStart(t),i&&n._processTooltipTouchStart(t))},n._groupClickEventsEnd={},n._groupClickEventsEnd[r.end]=function(t){n._processClickEnd(t)},n._groupEvents[r.over]=function(t){n._touchLock||e(t)||(n._processHoverOn(t),n._processTooltipMouseOver(t))},n._groupEvents[r.out]=function(t){n._touchLock||e(t)||(n._processHoverOff(t),n._processTooltipMouseOut(t))},n._groupTooltipEventsMouseMove={},n._groupTooltipEventsMouseMove[r.move]=function(t){n._processTooltipMouseMove(t)},n._groupTooltipEventsTouchMoveEnd={},n._groupTooltipEventsTouchMoveEnd[r.move]=function(t){n._processTooltipTouchMove(t)},n._groupTooltipEventsTouchMoveEnd[r.end]=function(t){n._processTooltipTouchEnd(t)},n._showTooltipCallback=function(){n._showTooltipCore()},n._hideTooltipCallback=function(){n._hideTooltipCore()},n._dispose=function(){var n=this;n=n._dispose=n._rootEvents=n._documentEventsMoveEnd=n._groupEvents=n._groupClickEventsEnd=n._groupTooltipEventsMouseMove=n._groupTooltipEventsTouchMoveEnd=n._showTooltipCallback=n._hideTooltipCallback=null}},_processStart:function(n){var i=this,r=s(n);i._start_x=i._x=r.x,i._start_y=i._y=r.y,i._callbacks[g].call(i._context,{$target:t(n.target),x:i._x,y:i._y});c.off(i._documentEventsMoveEnd).on(i._documentEventsMoveEnd,n.data)},_processMove:function(n){var i=this,r=s(n);(i._moving||h(i._start_x-r.x)>3||h(i._start_y-r.y)>3)&&(i._moving=!0,i._x=r.x,i._y=r.y,i._callbacks[nt].call(i._context,{$target:t(n.target),x:i._x,y:i._y}))},_processEnd:function(n){var i=this;c.off(i._documentEventsMoveEnd),i._callbacks[tt].call(i._context,{$target:t(n.target),x:i._x,y:i._y}),i._moving=i._start_x=i._start_y=i._x=i._y=null},_processWheel:function(n){var i=n.originalEvent.wheelDelta/120||n.originalEvent.detail/-3||0;this._callbacks[it].call(this._context,{$target:t(n.target),delta:i})},_processHoverOn:function(n){var i=this;i._hover_event&&i._hover_event.target===n.target||(i._hover_event&&i._callbacks[w].call(i._context,{$target:t(i._hover_event.target),category:i._hover_event.data.category}),i._hover_event=n,i._callbacks[rt].call(i._context,{$target:t(i._hover_event.target),category:i._hover_event.data.category}))},_processHoverOff:function(n){var r=this;b(t(n.target))!==i&&(r._hover_event&&r._callbacks[w].call(r._context,{$target:t(r._hover_event.target),category:r._hover_event.data.category}),r._hover_event=null)},_processClickStart:function(n){this._click_time=l();n.data.container.off(this._groupClickEventsEnd).on(this._groupClickEventsEnd,n.data)},_processClickEnd:function(n){var i=this;i._click_time&&!i._moving&&l()-i._click_time<=500&&i._callbacks[ut].call(i._context,{$target:t(n.target),category:n.data.category}),i._click_time=null,n.data.container.off(i._groupClickEventsEnd)},_processTooltipMouseOver:function(n){var t=this,i;if(t._tooltipEnabled&&t._isTooltipAvailable(n)){i=s(n),t._tooltip_x=i.x,t._tooltip_y=i.y;n.data.container.off(t._groupTooltipEventsMouseMove).on(t._groupTooltipEventsMouseMove,n.data);t._showTooltip(n,t._tooltip_target?null:v)}},_processTooltipMouseMove:function(n){var t=this,i;t._isTooltipAvailable(n)?t._tooltip_target?t._showTooltip(n):(i=s(n),(h(t._tooltip_x-i.x)>3||h(t._tooltip_y-i.y)>3)&&t._showTooltip(n,v)):(n.data.container.off(t._groupTooltipEventsMouseMove),t._hideTooltip(y))},_processTooltipMouseOut:function(n){this._tooltipEnabled&&(n.data.container.off(this._groupTooltipEventsMouseMove),this._hideTooltip(y))},_processTooltipTouchStart:function(n){var t=this;if(t._tooltipEnabled&&t._isTooltipAvailable(n)){t._showTooltip(n,k);n.data.container.off(t._groupTooltipEventsTouchMoveEnd).on(t._groupTooltipEventsTouchMoveEnd,n.data);t._skipTouchStart=!0}},_processTooltipRootTouchStart:function(){this._skipTouchStart||this._hideTooltip(p),this._skipTouchStart=null},_processTooltipTouchMove:function(n){this._moving&&(this._hideTooltip(),n.data.container.off(this._groupTooltipEventsTouchMoveEnd))},_processTooltipTouchEnd:function(n){this._tooltip_showTimeout&&this._hideTooltip(p),n.data.container.off(this._groupTooltipEventsTouchMoveEnd)},_isTooltipAvailable:function(n){var i=this,r=!i._moving;return r&&(!i._tooltip_event||i._tooltip_event.target!==n.target)&&(r=i._callbacks[ft].call(i._context,{$target:t(n.target),category:n.data.category})),r},_showTooltip:function(n,t){var i=this;o(i._tooltip_hideTimeout),i._tooltip_hideTimeout=null,o(i._tooltip_showTimeout),i._tooltip_event=n,t>0?i._tooltip_showTimeout=a(i._showTooltipCallback,t):i._showTooltipCallback()},_hideTooltip:function(n){var t=this;o(t._tooltip_showTimeout),t._tooltip_showTimeout=null,n>0?t._tooltip_hideTimeout=t._tooltip_hideTimeout||a(t._hideTooltipCallback,n):(o(t._tooltip_hideTimeout),t._hideTooltipCallback())},_showTooltipCore:function(){var n=this,i=n._tooltip_event,r=s(i);n._tooltip_target||n._callbacks[et].call(n._context,{$target:t(i.target),category:i.data.category}),n._tooltip_target=i.target,n._callbacks[st].call(n._context,{$target:t(n._tooltip_target),category:i.data.category,x:r.x,y:r.y}),n._tooltip_showTimeout=null},_hideTooltipCore:function(){var n=this,i=n._tooltip_event;n._tooltip_target&&n._callbacks[ot].call(n._context,{$target:t(n._tooltip_target),category:i.data.category}),n._tooltip_target=n._tooltip_hideTimeout=n._tooltip_event=null},attachRoot:function(n){return this._root=n,this},detachRoot:function(){return this._root=null,this},attachGroup:function(n,t){return this._groups[n]=t,this},detachGroup:function(n){return this._groups[n]=null,this},setCallbacks:function(n,t){return this._context=n,this._callbacks=t,this},setOptions:function(n){n=n||{};var t=this;return t._enabled=n.enabled,t._touchEnabled=n.touchEnabled,t._wheelEnabled=n.wheelEnabled,t._tooltipEnabled=n.tooltipEnabled,t},render:function(){var n=this,i,t;if(!n._enabled)return n;if(n._touchEnabled){n._root.on(f("MSHoldVisual",u),function(n){n.preventDefault()}).on(f("contextmenu",u),function(n){e(n)&&n.preventDefault()});n._root.applySettings({style:{"touch-action":"none","-ms-touch-action":"none","-webkit-user-select":"none"}})}n._root.on(n._rootEvents,{container:n._root});for(i in n._groups)t=n._groups[i],t&&t.on(n._groupEvents,{category:i,container:t});return n},clean:function(){var n=this,i,t;if(!n._enabled)return n;n._touchEnabled&&n._root.applySettings({style:{"touch-action":"","-ms-touch-action":"","-webkit-user-select":""}}),n._root.off("."+u),c.off(n._documentEventsMoveEnd);for(i in n._groups)t=n._groups[i],t&&t.off("."+u);return n._resetState(),n}});n.viz.map.Map.include({_trackerType:ht})}(DevExpress,jQuery),function(n,t){var i=n.utils.isFunction,r=String,u=n.Class.inherit({ctor:function(t){var i=this;i._container=t.container,i._root=t.renderer.createGroup({"class":"dxm-tooltip"}),i._renderer=t.renderer,i._inner=new n.viz.charts.Tooltip({renderer:t.renderer,arrowLength:10,paddingLeftRight:12,paddingTopBottom:10},i._root),i._inner.draw(),i._inner.text.applySettings({"class":"dxm-tooltip-text"}),i._enabled=!1},dispose:function(){var n=this;return n._inner.dispose(),delete n._inner,delete n._container,n._root.clear(),delete n._root,n},enabled:function(){return this._enabled},setSize:function(n,t){return this._inner.update({canvasWidth:n,canvasHeight:t}),this},setOptions:function(n){var t=this;return n=n||{},t._enabled=!!n.enabled,t._inner.update({color:n.color||null}),t._inner.cloud.applySettings(n.shape),t._inner.text.applySettings(n.text),t._customizeText=i(n.customizeText)?n.customizeText:null,t},clean:function(){return this._root.detach(),this._inner.hide(),this},render:function(){return this._root.append(this._container),this},check:function(n){if(this._enabled){var i=this._customizeText?this._customizeText.call(n,n):null;return!!(this._text=i!==null&&i!==t?r(i):"")}return!1},show:function(){return this._inner.show(),this},hide:function(){return this._inner.hide(),this},move:function(n){return this._inner.move(n.x,n.y,12,this._text),this}});n.viz.map.Map.include({_tooltipType:u})}(DevExpress),function(n,t){function i(n,i,r){var u=this,f,e;u.selected=function(u){var f=!!i.selected;return u!==t?(!!u!==f&&r.setSelectionCallback.call(n,i,!f),this):f},u.type=r.type,f=i.attributes,u.attribute=function(n){return f[n]},e=i.options,u.option=function(n){return e[n]},u._dispose=function(){n=i=f=e=null}}n.viz.map.Map.include({_proxyType:i})}(DevExpress),function(n,t,i){var u=Number,r=t.extend,f=n.viz.core.GradientPalette,e=n.viz.core.BaseThemeManager.inherit({_themeSection:"map",_initializeTheme:function(){var n=this;n._initializeFont(n._theme.marker.font),n._initializeFont(n._theme.tooltip.font),n._initializeFont(n._theme.legend.font),n._initializeFont(n._theme.loadingIndicator.font)},reset:function(){return this._commonAreaSettings=this._commonMarkerSettings=this._palette=null,this},getBackgroundSettings:function(n){var t=this._theme.background,i=r({},t,n);return{strokeWidth:t.borderWidth,stroke:i.borderColor,fill:i.color}},initCommonAreaSettings:function(n){var i=this._theme.area,t=r({},i,n);return this._commonAreaSettings={common:{strokeWidth:i.borderWidth,stroke:t.borderColor,fill:t.color},normal:{"class":null,strokeWidth:null,stroke:null,fill:null},hovered:{"class":t.hoveredClass,strokeWidth:i.hoveredBorderWidth,stroke:t.hoveredBorderColor,fill:t.hoveredColor},selected:{"class":t.selectedClass,strokeWidth:i.selectedBorderWidth,stroke:t.selectedBorderColor,fill:t.selectedColor}},this._palette=new f(t.palette,t.paletteSize),this},getCommonAreaSettings:function(){return this._commonAreaSettings},getAreaSettings:function(n){n=n||{},n.color===i&&n.paletteIndex>=0&&(n.color=this._palette.getColor(n.paletteIndex)||i);var t={"class":n["class"],fill:n.color,stroke:n.borderColor};return{normal:r({},this._commonAreaSettings.normal,t),hovered:r({},this._commonAreaSettings.hovered,t,{"class":n.hoveredClass,fill:n.hoveredColor,stroke:n.hoveredBorderColor}),selected:r({},this._commonAreaSettings.selected,t,{"class":n.selectedClass,fill:n.selectedColor,stroke:n.selectedBorderColor})}},initCommonMarkerSettings:function(n){var i=this._theme.marker,t=r({},i,n);return this._commonMarkerSettings={size:u(t.size),selectedStep:u(t.selectedStep),extraStep:u(t.extraStep),text:{strokeWidth:0,stroke:"none",fill:"none",font:r({},i.font,t.font)},normal:{"class":t["class"],strokeWidth:i.borderWidth,stroke:t.borderColor,fill:t.color},hovered:{"class":t.hoveredClass,strokeWidth:i.borderWidth,stroke:t.hoveredBorderColor||t.borderColor,fill:t.hoveredColor||t.color},selected:{"class":t.selectedClass,strokeWidth:i.borderWidth,stroke:t.selectedBorderColor||t.borderColor,fill:t.selectedColor||t.color},extraHovered:{strokeWidth:0,stroke:"none",fill:i.extraColor,opacity:i.extraOpacity},extraSelected:{strokeWidth:0,stroke:"none",fill:i.extraColor,opacity:i.extraOpacity}},this},getCommonMarkerSettings:function(){return this._commonMarkerSettings},getMarkerSettings:function(n){n=n||{};var f={"class":n["class"],fill:n.color,stroke:n.borderColor},t=this._commonMarkerSettings,i={normal:r({},t.normal,f),hovered:r({},t.hovered,f,{"class":n.hoveredClass,fill:n.hoveredColor,stroke:n.hoveredBorderColor}),selected:r({},t.selected,f,{"class":n.selectedClass,fill:n.selectedColor,stroke:n.selectedBorderColor}),extraHovered:t.extraHovered,extraSelected:t.extraSelected};return i.selectedSize=i.hoveredSize=i.size=n.size>0?u(n.size):t.size,i.selectedSize+=n.selectedStep>0?n.selectedStep:t.selectedStep,i.hoveredExtraSize=i.hoveredSize+(n.extraStep>0?n.extraStep:t.extraStep),i.selectedExtraSize=i.selectedSize+(n.extraStep>0?n.extraStep:t.extraStep),i},getControlBarSettings:function(n){var t=this._theme.controlBar,i=r({},t,n);return r({},n,{shape:{strokeWidth:t.borderWidth,stroke:i.borderColor,fill:i.color}})},getLoadIndicatorSettings:function(n){var t=this._theme.loadingIndicator;return r(!0,{},t,n)},getTooltipSettings:function(n){var t=this._theme.tooltip,i=r({},t,n);return r({},n,{shape:{strokeWidth:t.borderWidth,stroke:i.borderColor,fill:i.color},text:{strokeWidth:0,stroke:"none",fill:"none",font:r({},t.font,i.font)}})},getLegendSettings:function(n){var i=this._theme.legend,t=r({},i,n);return r({},n,{background:{strokeWidth:i.borderWidth,stroke:t.borderColor,fill:t.color,opacity:i.opacity},text:{strokeWidth:0,stroke:"none",fill:"none",align:"left",font:r({},i.font,t.font),"class":"dxm-legend-text"},metrics:{horizontalIndent:i.horizontalIndent,verticalIndent:i.verticalIndent,horizontalPadding:t.horizontalPadding,verticalPadding:t.verticalPadding,textIndent:t.textIndent,itemSize:t.itemSize,itemSpacing:t.itemSpacing,maxWidth:t.maxWidth,maxHeight:t.maxHeight}})},getLegendItemSettings:function(n){var t=n.color;return t===i&&n.paletteIndex>=0&&(t=this._palette.getColor(n.paletteIndex)),{strokeWidth:0,stroke:"none",fill:t}}});n.viz.map.Map.include({_themeManagerType:e})}(DevExpress,jQuery),DevExpress.MOD_VIZ_VECTORMAP=!0}if(!DevExpress.MOD_VIZ_SPARKLINES){if(!window.DevExpress)throw Error("Required module is not referenced: core");if(!DevExpress.MOD_VIZ_CORE)throw Error("Required module is not referenced: viz-core");(function(n,t){var k=t.viz.charts,s=100,d=10,g=6,r=200,nt=1e3,l=Math,a=n.extend,v=setTimeout,u=clearTimeout,y=l.abs,tt=String,i=Number,f=l.round,o=t.viz.core;t.viz.sparklines={},t.viz.sparklines.BaseSparkline=t.ui.Component.inherit({render:function(){return this._refresh(),this},_rendererType:t.viz.renderers.Renderer,_clean:function(){this._tooltipShown&&(this._tooltip.dispose(),this._tooltip=null,this._tooltipShown=null,this._tooltipGroup.clear()),this._tooltipContainer.detach(),this._cleanWidgetElements()},_optionChanged:function(n,t){if(n==="size"&&this._allOptions){if(this._clean(),this._canvas=this._calculateCanvas(),this._renderer.resize(this._canvas.width,this._canvas.height),!this._isContainerVisible())return;this._allOptions.size=t,this._redrawWidgetElements(),this._prepareTooltipContainer()}else n==="dataSource"?this._refreshDataSource():(this._invalidate(),this.callBase.apply(this,arguments))},_init:function(){this._renderer=new this._rendererType({cssClass:this._widgetClass+" "+this._widgetClass+"-"+this._widgetType}),this._renderer.recreateCanvas(1,1),this._createHtmlElements(),this._createTooltipGroups(),this._initTooltipEvents(),this._drawContainer()},_dispose:function(){this.callBase(),this._disposeWidgetElements(),this._disposeTooltipEvents(),this._renderer.killContainer(),this._tooltipRenderer.killContainer(),delete this._renderer,delete this._tooltipRenderer,delete this._tooltipTrackerGroup,delete this._tooltipGroup,delete this._tooltipContainer},_render:function(){(this._canvas=this._calculateCanvas(),this._renderer.resize(this._canvas.width,this._canvas.height),this._isContainerVisible())&&(this._prepareOptions(),this._createWidgetElements(),this._drawWidgetElements())},_isContainerVisible:function(){var t=this,n=t._canvas,i=n.width-n.left-n.right>0,r=n.height-n.top-n.bottom>0;return n.height&&n.width&&r&&i},_createWidgetElements:function(){this._createRange(),this._createTranslator()},_prepareOptions:function(n){var u=this,f=u.option()||{},t,r,i;return r=o.findTheme("default"),r=r[this._widgetType],t=a(!0,{},n,f),typeof t.theme=="string"?(i=o.findTheme(t.theme),i=i[this._widgetType]):i=t.theme,a(!0,{},r,i,t)},_calculateCanvas:function(){var r=this,s={},n=r.option("size")||{},u=r.option("margin")||{},t=r._defaultSize,o=r._element(),f=n.width>=0?i(n.width):o.width(),e=n.height>=0?i(n.height):o.height();return f||i(n.width)===0||(f=t.width),e||i(n.height)===0||(e=t.height),{width:f,height:e,top:i(u.top)||t.top,bottom:i(u.bottom)||t.bottom,left:i(u.left)||t.left,right:i(u.right)||t.right}},_createTooltipGroups:function(){var t=this,i,u,r=t._widgetClass;t._tooltipRenderer=i=new t._rendererType({cssClass:r+" "+r+"-tooltip"}),i.recreateCanvas(1,1),t._tooltipContainer=n('<div style="position: relative">'),i.draw(t._tooltipContainer[0]),u=i.getRoot(),t._tooltipGroup=i.createGroup({"class":r+"-tooltip-group",style:{"z-index":"1"}}).append(u),t._tooltipTrackerGroup=i.createGroup({"class":r+"-tooltip-tracker-group"}).append(u),t._tooltipTracker=t._createTooltipTracker().append(t._tooltipTrackerGroup)},_createTooltipTracker:function(){return this._tooltipRenderer.createRect(0,0,0,0,0,{fill:"grey",opacity:0})},_initTooltipEvents:function(){var n=this,t={widget:n,container:n._tooltipTracker};n._showTooltipCallback=function(){n._showTooltipTimeout=null,n._tooltipShown||(n._tooltipShown=!0,n._showTooltip())},n._hideTooltipCallback=function(){n._hideTooltipTimeout=null,n._tooltipShown&&(n._tooltipShown=!1,n._hideTooltip())},n._disposeCallbacks=function(){n=n._showTooltipCallback=n._hideTooltipCallback=n._disposeCallbacks=null};n._tooltipTracker.on(rt,t).on(ut,t);n._tooltipTracker.on(it)},_disposeTooltipEvents:function(){u(this._showTooltipTimeout),u(this._hideTooltipTimeout),this._showTooltipTimeout=this._showTooltipTimeout=null,this._tooltipTracker.off(),this._disposeCallbacks()},_drawContainer:function(){this._renderer.draw(this._element()[0])},_createTranslator:function(){this._translator=new o.Translator2D(this._range,this._canvas)},_prepareTooltipOptions:function(){var i=this,o=i._canvas,t=i._allOptions.tooltip,u=i._getTooltipText(),r=i._getTooltipSize(!0),f={canvasWidth:r.width,canvasHeight:r.height,paddingLeftRight:t.paddingLeftRight,paddingTopBottom:t.paddingTopBottom,arrowLength:t.arrowLength,cloudHorizontalPosition:t.horizontalAlignment,cloudVerticalPosition:t.verticalAlignment,lineSpacing:t.font.lineSpacing!==undefined&&t.font.lineSpacing!==null?t.font.lineSpacing:g},e=n.extend(f,i._allOptions.tooltip);i._tooltipOptions={text:u,size:r,options:e}},_getTooltipText:function(){var i=this,u=i._allOptions.tooltip.customizeText,r=i._getTooltipData(),n,t;return typeof u=="function"?(t=u.call(r,r),n=t!==undefined&&t!==null&&t!==""?tt(t):null,i._allOptions.tooltip._justify&&(n=n.split("<br/>"))):(n=this._getDefaultTooltipText(r),i._allOptions.tooltip._justify=!0),n},_prepareTooltipContainer:function(){var n=this,t=n._canvas,i=t.width,r=t.height,u=n._tooltipRenderer;n._updateTooltipSizeToNormal(),n._tooltipTracker.applySettings({width:i,height:r}),n._tooltipContainer.appendTo(n._element()),n._tooltipInitializated=!1,n._canShowTooltip=n._allOptions.tooltip.enabled},_isTooltipVisible:function(){var n=this,i=n._allOptions.tooltip.enabled,r=n._tooltipOptions.text!==null,t;return t=n._widgetType==="sparkline"?n._dataSource.length!==0:!0,i&&r&&t},_createTooltip:function(){var n=this,r,u,i;n._prepareTooltipOptions(),r=n._allOptions.tooltip._justify,u=r?t.viz.sparklines.SparklineTooltip:k.Tooltip,n._tooltip=i=new u({renderer:n._tooltipRenderer},n._tooltipGroup),n._isTooltipVisible()?(i.update(n._tooltipOptions.options),i.draw(),n._updateTooltipSizeToWide(),n._checkTooltipSize(),n._updateTooltipSizeToNormal(),i.cloud.applySettings({opacity:n._allOptions.tooltip.opacity})):n._canShowTooltip=!1},_doShowTooltip:function(n){var t=this;t._canShowTooltip&&(u(t._hideTooltipTimeout),t._hideTooltipTimeout=null,u(t._showTooltipTimeout),t._showTooltipTimeout=v(t._showTooltipCallback,n))},_doHideTooltip:function(n){var t=this;t._canShowTooltip&&(u(t._showTooltipTimeout),t._showTooltipTimeout=null,u(t._hideTooltipTimeout),t._hideTooltipTimeout=v(t._hideTooltipCallback,n))},_getNormalTooltipSize:function(){var n={};return n.width=this._canvas.width,n.left=0,n.tooltipLeft=f(n.width/2),n},_getWideTooltipSize:function(n,t){var u=this,r=u._canvas,e=u._allOptions.tooltip.horizontalAlignment,o=n+t,i={};return i.width=r.width+o,i.left=-n,i.tooltipLeft=e==="right"?f(r.width/2):e==="left"?f(r.width/2)+o:f(i.width/2),i},_getTooltipSize:function(n,t,i,r){var e=this,o=e._canvas,h=!(e._allOptions.tooltip.verticalAlignment==="bottom"),u=!n&&(t||i)?e._getWideTooltipSize(t,i):e._getNormalTooltipSize(),c=r>0?r+s:s;return u.height=o.height+c,u.top=h?-u.height:-o.height,u.trackerY=h?c:0,u.tooltipY=h?f(o.height/2)+c-d:f(o.height/2),u},_checkTooltipSize:function(){var n=this,e=n._tooltipOptions.options,o=e.paddingLeftRight,c=e.paddingTopBottom,t=n._tooltip.text.getBBox(),h=t.x-o,l=h+t.width+2*o,a=t.height+2*c,v=n._allOptions.tooltip.allowContainerResizing,i=-h,r=l-n._canvas.width,u=a-s,f;(i>0||r>0||u>0)&&(v?(n._tooltipOptions.size=f=n._getTooltipSize(!1,i>0?i:0,r>0?r:0,u>0?u:0),n._tooltipOptions.options.canvasWidth=f.width,n._tooltipOptions.options.canvasHeight=f.height,n._tooltip.update(n._tooltipOptions.options),n._updateTooltipSizeToWide()):n._canShowTooltip=!1)},_updateTooltipSizeToWide:function(){var t=this,n=t._tooltipOptions.size,i=t._tooltipRenderer;i.resize(n.width,n.height),i.getRoot().applySettings({style:{left:n.left,top:n.top,position:"absolute"}}),t._tooltipTracker.applySettings({y:n.trackerY,x:-n.left}),t._tooltip.move(n.tooltipLeft,n.tooltipY,0,t._tooltipOptions.text)},_updateTooltipSizeToNormal:function(){var n=this,i=n._tooltipRenderer,t=n._canvas;i.resize(t.width,t.height),i.getRoot().applySettings({style:{left:0,top:-t.height,position:"absolute"}}),n._tooltipTracker.applySettings({y:0,x:0})},_showTooltip:function(){(this._tooltipInitializated||(this._createTooltip(),this._tooltipInitializated=!0,this._canShowTooltip))&&(this._updateTooltipSizeToWide(),this._tooltip.show())},_hideTooltip:function(){this._updateTooltipSizeToNormal(),this._tooltip.hide()}}).include(o.widgetMarkupMixin);var it={"contextmenu.sparkline-tooltip":function(n){(t.ui.events.isTouchEvent(n)||t.ui.events.isPointerEvent(n))&&n.preventDefault()},"MSHoldVisual.sparkline-tooltip":function(n){n.preventDefault()}},rt={"mouseover.sparkline-tooltip":function(n){c=!1;var t=n.data.widget;t._x=n.pageX,t._y=n.pageY;t._tooltipTracker.off(h).on(h,n.data);t._doShowTooltip(r)},"mouseout.sparkline-tooltip":function(n){if(!c){var t=n.data.widget;t._tooltipTracker.off(h),t._doHideTooltip(r)}}},h={"mousemove.sparkline-tooltip":function(n){var t=n.data.widget;t._showTooltipTimeout&&(y(t._x-n.pageX)>3||y(t._y-n.pageY)>3)&&(t._x=n.pageX,t._y=n.pageY,t._doShowTooltip(r))}},e=null,p=function(n){n.preventDefault();var t=e;t&&t!==n.data.widget&&t._doHideTooltip(r),t=e=n.data.widget,t._doShowTooltip(nt),t._touch=!0},w=function(){var n=e;n&&(n._touch||(n._doHideTooltip(r),e=null),n._touch=null)},b=function(){var n=e;n&&n._showTooltipTimeout&&(n._doHideTooltip(r),e=null)},c=!1,ut={"pointerdown.sparkline-tooltip":function(n){p(n)},"touchstart.sparkline-tooltip":function(n){p(n)}};n(document).on({"pointerdown.sparkline-tooltip":function(){c=!0,w()},"touchstart.sparkline-tooltip":function(){w()},"pointerup.sparkline-tooltip":function(){b()},"touchend.sparkline-tooltip":function(){b()}})})(jQuery,DevExpress),function(n,t){var r=t.viz.charts,u=1,f=50,a=4,v=250,y=30,e=5,o=3,s="dxsl-first-last-points",p="dxsl-min-point",w="dxsl-max-point",b="dxsl-positive-points",k="dxsl-negative-points",d={theme:"default",dataSource:[],size:{},margin:{},type:"line",argumentField:"arg",valueField:"val",winlossThreshold:0,showFirstLast:!0,showMinMax:!1},g={line:!0,spline:!0,stepline:!0,area:!0,steparea:!0,splinearea:!0,bar:!0,winloss:!0},h=n.map,nt=n.extend,tt=Math.abs,it=Math.round,rt=isFinite,c=Number,l=String,i=t.formatHelper;t.viz.sparklines.Sparkline=t.viz.sparklines.BaseSparkline.inherit({_widgetType:"sparkline",_widgetClass:"dxsl",_defaultSize:{width:v,height:y,left:e,right:e,top:o,bottom:o},_init:function(){this.callBase(),this._refreshDataSource()},_handleDataSourceChanged:function(){this._initialized&&(this._clean(),this._createWidgetElements(),this._drawWidgetElements())},_dataSourceOptions:function(){return{paginate:!1,_preferSync:!0}},_redrawWidgetElements:function(){this._createTranslator(),this._correctPoints(),this._series.draw(this._translator),this._seriesGroup.append(this._renderer.getRoot())},_disposeWidgetElements:function(){delete this._seriesGroup,delete this._seriesLabelGroup},_cleanWidgetElements:function(){this._seriesGroup.detach(),this._seriesLabelGroup.detach(),this._seriesGroup.clear(),this._seriesLabelGroup.clear()},_createWidgetElements:function(){this._createSeries(),this.callBase()},_drawWidgetElements:function(){this._dataSource&&this._dataSource.isLoaded()&&this._drawSeries()},_prepareOptions:function(){this._allOptions=this.callBase(d),this._allOptions.type=l(this._allOptions.type).toLowerCase(),g[this._allOptions.type]||(this._allOptions.type="line")},_createHtmlElements:function(){this._seriesGroup=this._renderer.createGroup({"class":"dxsl-series"}),this._seriesLabelGroup=this._renderer.createGroup({"class":"dxsl-series-labels"})},_createSeries:function(){var n=this,i=n._renderer,t;n._prepareDataSource(),n._prepareSeriesOptions(),n._series=r.factory.createSeries(n._seriesOptions.type,i,n._seriesOptions),t=r.factory.createDataValidator(n._simpleDataSource,[[n._series]],null,{checkTypeForAllData:!1,convertToAxisDataType:!0,sortingMethod:!0}),n._simpleDataSource=t.validate(),n._series.options.customizePoint=n._getCustomizeFunction(),n._series.reinitData(n._simpleDataSource)},_parseNumericDataSource:function(n,t,i){return h(n,function(n,r){var u=null,f;return n!==undefined&&(u={},f=rt(n),u[t]=f?l(r):n[t],u[i]=f?c(n):c(n[i]),u=u[t]!==undefined&&u[i]!==undefined?u:null),u})},_parseWinlossDataSource:function(n,t,i){var u=-1,f=0,e=1,o=.0001,r=this._allOptions.winlossThreshold;return h(n,function(n){var s={};return s[t]=n[t],s[i]=tt(n[i]-r)<o?f:n[i]>r?e:u,s})},_prepareDataSource:function(){var n=this,t=n._allOptions,r=t.argumentField,u=t.valueField,f=n._dataSource?n._dataSource.items():[],i=n._parseNumericDataSource(f,r,u);t.type==="winloss"?(n._winlossDataSource=i,n._simpleDataSource=n._parseWinlossDataSource(i,r,u)):n._simpleDataSource=i},_prepareSeriesOptions:function(){var n=this,t=n._allOptions,i={border:{},hoverStyle:{border:{}},selectionStyle:{border:{}}},r={size:t.pointSize,symbol:t.pointSymbol,border:{visible:!0,width:2},color:t.pointColor};n._seriesOptions={argumentField:t.argumentField,valueField:t.valueField,color:t.lineColor,width:t.lineWidth},n._seriesOptions.type=t.type==="winloss"?"bar":t.type,(t.type==="winloss"||t.type==="bar")&&(n._seriesOptions.argumentAxisType="discrete"),n._seriesOptions.seriesGroup=n._seriesGroup,n._seriesOptions.seriesLabelsGroup=n._seriesLabelGroup,n._seriesOptions.point=nt(i,r),n._seriesOptions.point.visible=!1,n._seriesOptions.border={color:n._seriesOptions.color,width:n._seriesOptions.width,visible:!0}},_createBarCustomizeFunction:function(n){var i=this,t=i._allOptions,r=i._winlossDataSource;return function(){var u=this.index,f=t.type==="winloss",e=f?t.winlossThreshold:0,o=f?r[u][t.valueField]:this.value,s=f?t.winColor:t.barPositiveColor,h=f?t.lossColor:t.barNegativeColor,i;return i=o>=e?s:h,(u===n.first||u===n.last)&&(i=t.firstLastColor),u===n.min&&(i=t.minColor),u===n.max&&(i=t.maxColor),{color:i}}},_createLineCustomizeFunction:function(n){var i=this,t=i._allOptions;return function(){var i,r=this.index;return(r===n.first||r===n.last)&&(i=t.firstLastColor),r===n.min&&(i=t.minColor),r===n.max&&(i=t.maxColor),i?{visible:!0,border:{color:i}}:{}}},_getCustomizeFunction:function(){var n=this,i=n._allOptions,u=n._winlossDataSource||n._simpleDataSource,r=n._getExtremumPointsIndexes(u),t;return t=i.type==="winloss"||i.type==="bar"?n._createBarCustomizeFunction(r):n._createLineCustomizeFunction(r)},_getExtremumPointsIndexes:function(n){var t=this,r=t._allOptions,u=n.length-1,i={};return t._minMaxIndexes=t._findMinMax(n),r.showFirstLast&&(i.first=0,i.last=u),r.showMinMax&&(i.min=t._minMaxIndexes.minIndex,i.max=t._minMaxIndexes.maxIndex),i},_findMinMax:function(n){for(var h=this,r=h._allOptions.valueField,c=n[0]||{},u=c[r]||0,f=u,e=u,o=0,s=0,l=n.length,i,t=1;t<l;t++)i=n[t][r],i<f&&(f=i,o=t),i>e&&(e=i,s=t);return{minIndex:o,maxIndex:s}},_createRange:function(){var n=this,t=n._series,i=t.type==="bar",u=.15,f=i?.1:0,e={stickX:!i&&t.points.length>1,keepValueMarginsY:!0,minValueMarginY:u,maxValueMarginY:u,minValueMarginX:f,maxValueMarginX:f};n._range=new r.Range(e),n._range.getBoundRange(t.getRangeData()),n._range.applyValueMargins()},_getBarWidth:function(n){var r=this,i=r._canvas,e=n*a,o=i.width-i.left-i.right-e,t=it(o/n);return t<u&&(t=u),t>f&&(t=f),t},_preparePointsClasses:function(){var u=this,i=u._allOptions,f=i.type==="bar",e=f||i.type==="winloss",t=u._series.getAllPoints(),o=0,h=t.length-1,c=u._minMaxIndexes.minIndex,l=u._minMaxIndexes.maxIndex,a=f?0:i.winlossThreshold,r="";e&&(r=" dxsl-bar-point",n.each(t,function(n,i){var r;r=i.value>=a?b:k,t[n].options.attributes["class"]=r})),i.showFirstLast&&(t[o].options.attributes["class"]=s+r,t[h].options.attributes["class"]=s+r),i.showMinMax&&(t[c].options.attributes["class"]=p+r,t[l].options.attributes["class"]=w+r)},_correctPoints:function(){var t=this,i=t._allOptions.type,r=t._series.getPoints(),u=r.length,f,n;if(i==="bar"||i==="winloss")for(f=t._getBarWidth(u),n=0;n<u;n++)r[n].correctCoordinates({width:f,offset:0})},_drawSeries:function(){var n=this;n._simpleDataSource.length!==0&&(n._correctPoints(),n._series._segmentPoints(),n._series.styles.area&&(n._series.styles.area.opacity=n._allOptions.areaOpacity),n._preparePointsClasses(),n._series.createPatterns=function(){},n._series.draw(n._translator),n._seriesGroup.append(n._renderer.getRoot()),n._prepareTooltipContainer())},_getTooltipData:function(){var f=this,n=f._allOptions,r=n.tooltip.format,u=n.tooltip.precision,t=f._winlossDataSource||f._simpleDataSource;if(t.length===0)return{};var s=f._minMaxIndexes,e=n.valueField,h=t[0][e],c=t[t.length-1][e],l=t[s.minIndex][e],a=t[s.maxIndex][e],v=i.format(h,r,u),y=i.format(c,r,u),p=i.format(l,r,u),w=i.format(a,r,u),o={firstValue:v,lastValue:y,minValue:p,maxValue:w,originalFirstValue:h,originalLastValue:c,originalMinValue:l,originalMaxValue:a};return n.type==="winloss"&&(o.originalThresholdValue=n.winlossThreshold,o.thresholdValue=i.format(n.winlossThreshold,r,u)),o},_getDefaultTooltipText:function(n){return["Start:",n.firstValue,"End:",n.lastValue,"Min:",n.minValue,"Max:",n.maxValue]}}).include(t.ui.DataHelperMixin)}(jQuery,DevExpress),function(n,t){var r=15,u=Math.max,f=Math.round;t.viz.sparklines.SparklineTooltip=t.viz.charts.Tooltip.inherit({_createTextContent:function(){return this._textGroup=this.renderer.createGroup()},dispose:function(){this._tooltipTextArray=null,this._textGroup=null,this.callBase()},_checkWidthText:function(){},_getTextContentParams:function(){var n=this,t,r,i,u=n.tooltipText,e=u.length,f={width:[],height:[]};for(n._tooltipTextArray=[],t=0;t<e;t++)r=n.renderer.createText(u[t],0,0,n.textStyle).append(this._textGroup),n._tooltipTextArray.push(r),i=r.getBBox(),f.width.push(i.width);return n._lineHeight=-2*i.y-i.height,f},_calculateTextContent:function(){for(var i=this,o=i.tooltipText,s=o.length,f,h=[],c=[],e=[],t=i._getTextContentParams(),n=0;n<s;n+=2)f=t.width[n+1]?t.width[n]+r+t.width[n+1]:t.width[n],e.push(f);i._textContentWidth=u.apply(null,e)},_locateTextContent:function(n,t,i){var r=this,l=r._tooltipTextArray.length,o=r._textContentWidth,h=r.options.lineSpacing,a=h>0?h+r._lineHeight:r._lineHeight,s=t,e,c,u;for(e=i==="left"?n:i==="right"?n-o:f(n-o/2),c=e+o,u=l-1;u>=0;u-=2)r._tooltipTextArray[u].applySettings({x:c,y:s,align:"right"}),r._tooltipTextArray[u-1]&&r._tooltipTextArray[u-1].applySettings({x:e,y:s,align:"left"}),s-=a},_updateTextContent:function(){this._textGroup.clear(),this._calculateTextContent(),this._locateTextContent(0,0,"center")},_correctYTextContent:function(n){this._locateTextContent(0,n,"center");var t=this._textGroup.getBBox();return n-(t.y+t.height-n)},_adjustTextContent:function(n){this._locateTextContent(n.text.x,n.text.y,n.text.align)}})}(jQuery,DevExpress),function(n,t){var p=t.viz.charts,f=.02,e=.98,c=.1,l=.9,a=300,v=30,o=1,s=2,y={theme:"default",size:{},margin:{}},h=t.formatHelper,w=String,i=Number,r=Math.round,u=isFinite;t.viz.sparklines.Bullet=t.viz.sparklines.BaseSparkline.inherit({_widgetType:"bullet",_widgetClass:"dxb",_defaultSize:{width:a,height:v,left:o,right:o,top:s,bottom:s},_disposeWidgetElements:function(){delete this._zeroLevelPath,delete this._targetPath,delete this._barValuePath},_redrawWidgetElements:function(){this._createTranslator(),this._drawBarValue(),this._drawTarget(),this._drawZeroLevel()},_cleanWidgetElements:function(){this._zeroLevelPath.detach(),this._targetPath.detach(),this._barValuePath.detach()},_drawWidgetElements:function(){this._drawBullet()},_createHtmlElements:function(){var n=this._renderer;this._zeroLevelPath=n.createPath(undefined,{"class":"dxb-zero-level"}),this._targetPath=n.createPath(undefined,{"class":"dxb-target"}),this._barValuePath=n.createPath(undefined,{"class":"dxb-bar-value"})},_prepareOptions:function(){var n=this,t,f,e,o,r,u;n._allOptions=t=n.callBase(y),n._allOptions.value===undefined&&(n._allOptions.value=0),n._allOptions.target===undefined&&(n._allOptions.target=0),t.value=r=i(t.value),t.target=u=i(t.target),n._allOptions.startScaleValue===undefined&&(n._allOptions.startScaleValue=u<r?u:r,n._allOptions.startScaleValue=n._allOptions.startScaleValue<0?n._allOptions.startScaleValue:0),n._allOptions.endScaleValue===undefined&&(n._allOptions.endScaleValue=u>r?u:r),t.startScaleValue=f=i(t.startScaleValue),t.endScaleValue=e=i(t.endScaleValue),e<f&&(o=e,n._allOptions.endScaleValue=f,n._allOptions.startScaleValue=o,n._allOptions.inverted=!0)},_createRange:function(){var t=this,n=t._allOptions;t._range={invertX:n.inverted,minX:n.startScaleValue,maxX:n.endScaleValue,minY:0,maxY:1}},_drawBullet:function(){var t=this,n=t._allOptions,i=n.startScaleValue!==n.endScaleValue,r=u(n.startScaleValue),f=u(n.endScaleValue),e=u(n.value),o=u(n.target);i&&f&&r&&o&&e&&(this._drawBarValue(),this._drawTarget(),this._drawZeroLevel(),this._prepareTooltipContainer())},_getTargetParams:function(){var i=this,n=i._allOptions,t=i._translator,u=t.translateY(f),o=t.translateY(e),r=t.translateX(n.target),s=[{x:r,y:u},{x:r,y:o}];return{points:s,stroke:n.targetColor,strokeWidth:n.targetWidth}},_getBarValueParams:function(){var o=this,r=o._allOptions,u=o._translator,f=r.startScaleValue,e=r.endScaleValue,i=r.value,s=u.translateY(c),h=u.translateY(l),n,t;return i>0?(n=f<=0?0:f,t=i>=e?e:i):(n=e>=0?0:e,t=i>=f?i:f),n=u.translateX(n),t=u.translateX(t),{points:[{x:n,y:h},{x:t,y:h},{x:t,y:s},{x:n,y:s}],fill:r.color}},_getZeroLevelParams:function(){var t=this,r=t._allOptions,n=t._translator,u=n.translateY(f),o=n.translateY(e),i=n.translateX(0);return{points:[{x:i,y:u},{x:i,y:o}],stroke:r.targetColor,strokeWidth:1}},_drawZeroLevel:function(){var n=this,t=n._allOptions,i;0>t.endScaleValue||0<t.startScaleValue||!t.showZeroLevel||(i=n._getZeroLevelParams(),n._zeroLevelPath.applySettings(i),n._zeroLevelPath.append(n._renderer.getRoot()))},_drawTarget:function(){var n=this,t=n._allOptions,i=t.target,u=t.startScaleValue,f=t.endScaleValue,r;i>f||i<u||!t.showTarget||(r=n._getTargetParams(),n._targetPath.applySettings(r),n._targetPath.append(n._renderer.getRoot()))},_drawBarValue:function(){var n=this,t=n._getBarValueParams();n._barValuePath.applySettings(t),n._barValuePath.append(n._renderer.getRoot())},_getTooltipData:function(){var f=this,n=f._allOptions,t=n.tooltip.format,i=n.tooltip.precision,s=n.valueField,r=n.value,u=n.target,e=h.format(r,t,i),o=h.format(u,t,i);return{originalValue:r,originalTarget:u,value:e,target:o}},_getDefaultTooltipText:function(n){return["Actual Value:",n.value,"Target Value:",n.target]},_getNormalTooltipSize:function(){var n={},t=this._barValuePath.getBBox();return n.width=this._canvas.width,n.left=0,n.tooltipLeft=t.x+r(t.width/2),n},_getWideTooltipSize:function(n,t){var f=this,i=f._barValuePath.getBBox(),e=f._allOptions.tooltip.horizontalAlignment,u={};return u.width=n+t+f._canvas.width,u.left=-n,u.tooltipLeft=e==="right"?i.x+r(i.width/2):e==="left"?r(i.width/2)+n+t+i.x:r(i.width/2)+i.x+n,u}})}(jQuery,DevExpress),function(n,t){var r=t.ui,u=t.viz;r.registerComponent("dxSparkline",u.sparklines.Sparkline)}(jQuery,DevExpress),function(n,t){var r=t.ui,u=t.viz;r.registerComponent("dxBullet",u.sparklines.Bullet)}(jQuery,DevExpress),DevExpress.MOD_VIZ_SPARKLINES=!0}

var spinner;
var mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ? true : false;

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
	lvalue = parseFloat(lvalue);
	rvalue = parseFloat(rvalue);

	return {
		"+": lvalue + rvalue,
		"-": lvalue - rvalue,
		"*": lvalue * rvalue,
		"/": lvalue / rvalue,
		"%": lvalue % rvalue
	}[operator];
});

var browsers = {

		handlerData:function(resJSON){

			var templateSource   = $("#browser-template").html(),

			  template = Handlebars.compile(templateSource),
			  browserHTML = template(resJSON);

			   spinner.stop();
			   $("#container").append( template({browsers:resJSON}) );
			   $('.timer').countTo();
			   $('footer').addClass('active');

			   browsers.makeDonut(resJSON);

		},

		makeDonut:function(resJSON) {

		  var dataSource = [];
		  var total;
		  var totalCounted = 0;
		  var others;

		  $.each(resJSON, function(idx, obj) {

			dataSource.push({browserMarket: parseInt(obj.market), browserName: obj.browser});

		  });

		  // Colour palette for Chart
		  var browser_palette = [
			'#0d2671',
			'#0f2b80',
			'#11318f',
			'#d9ca00',
			'#b7ab00',
			'#c8ba00',
			'#514c00',
			'#958b00',
			'#a69b00',
			'#514c00',
			'#403c00',
			'#666'
		  ];

		  // Register palette
		  DevExpress.viz.core.registerPalette('mySuperPalette', browser_palette);

		  // Create pie chart
		  $("#browserdonut").dxPieChart({
			  size:{
				  width: 800,
				  height: 600
			  },
			  dataSource: dataSource,
			  tooltip: {
				enabled: true,
				percentPrecision: 4,
				customizeText: function() {
				  return this.argumentText + " - " +this.valueText + '%';
				}
			  },
			  palette: 'mySuperPalette',
			  legend: { visible: false },
			  series: [
				  {
					  argumentField: "browserName",
					  valueField: "browserMarket",
					  type: "doughnut",
					  label:{
						  visible: true,
						  customizeText: function(){
							return this.argumentText + ' - ' + this.valueText + '%';
						  },
						  connector:{
							  visible: true,
							  width: 1
						  }
					  }
				  }
			  ],
			  title: { visible: false }
		  });

		},

		// Get browser data
		getbrowserData : function(){
			$.ajax({
				url: "../browsers.json",
				dataType: 'json',
				method: 'get',
				success: this.handlerData

			})
		},

		// Capitalize
		toTitleCase: function(str) {
			return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		},

		// Live search, for desktop browsers
		quickSearch: function() {

			$('#comboBox').focus();

			if(!mobile) {

				$('#comboBox').on('keydown keypress keyup change', function() {
					var search = browsers.toTitleCase(this.value);
					var $li = $("li").hide();

					if ($(this).val() !== '') {
						$li.filter(function() {
							if($(this).text().indexOf(search) >= 0) {
								return $(this).text().indexOf(search) >= 0;
							}
						}).show();
					} else {
						console.log('empty');
						$("li").show();
						$("li").removeAttr( "style" );
					}
				});

			}

		}
};

$(function() {

  browsers.getbrowserData();
	browsers.quickSearch();

	var opts = {
	  lines: 9, // The number of lines to draw
	  length: 3, // The length of each line
	  width: 3, // The line thickness
	  radius: 5, // The radius of the inner circle
	  corners: 1, // Corner roundness (0..1)
	  rotate: 0, // The rotation offset
	  direction: 1, // 1: clockwise, -1: counterclockwise
	  color: '#fff', // #rgb or #rrggbb or array of colors
	  speed: 1.8, // Rounds per second
	  trail: 60, // Afterglow percentage
	  shadow: false, // Whether to render a shadow
	  hwaccel: false, // Whether to use hardware acceleration
	  className: 'spinner', // The CSS class to assign to the spinner
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  top: 'auto', // Top position relative to parent in px
	  left: 'auto' // Left position relative to parent in px
	};
	var target = document.getElementById('loader');
	spinner = new Spinner(opts).spin(target);

	if(window.location.href.indexOf("om") > -1) {
		$('footer').addClass('active');
	}

	// var pieChartDataSource = [
	//     {category: 'Oceania', value: 35},
	//     {category: 'Africa', value: 1016},
	//     {category: 'Americas', value: 936},
	//     {category: 'Asia', value: 4149},
	//     {category: 'Europe', value: 728}
	// ];



});

