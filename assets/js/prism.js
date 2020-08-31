"use strict";var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){function a(e,a,t,n,r){this.type=e,this.content=a,this.alias=t,this.length=0|(n||"").length,this.greedy=!!r}var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,r.util.encode(e.content),e.alias):Array.isArray(e)?e.map(r.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(a,t){var n,s,i=r.util.type(a);switch(t=t||{},i){case"Object":if(s=r.util.objId(a),t[s])return t[s];for(var l in n={},t[s]=n,a)a.hasOwnProperty(l)&&(n[l]=e(a[l],t));return n;case"Array":return s=r.util.objId(a),t[s]?t[s]:(n=[],t[s]=n,a.forEach(function(a,r){n[r]=e(a,t)}),n);default:return a}}},languages:{extend:function(e,a){var t=r.util.clone(r.languages[e]);for(var n in a)t[n]=a[n];return t},insertBefore:function(e,a,t,n){var s=(n=n||r.languages)[e],i={};for(var l in s)if(s.hasOwnProperty(l)){if(l==a)for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);t.hasOwnProperty(l)||(i[l]=s[l])}var u=n[e];return n[e]=i,r.languages.DFS(r.languages,function(a,t){t===u&&a!=e&&(this[a]=i)}),i},DFS:function e(a,t,n,s){s=s||{};var i=r.util.objId;for(var l in a)if(a.hasOwnProperty(l)){t.call(a,l,a[l],n||l);var o=a[l],u=r.util.type(o);"Object"!==u||s[i(o)]?"Array"!==u||s[i(o)]||(s[i(o)]=!0,e(o,t,l,s)):(s[i(o)]=!0,e(o,t,null,s))}}},plugins:{},highlightAll:function(e,a){r.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,t){var n={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",n);for(var s,i=n.elements||e.querySelectorAll(n.selector),l=0;s=i[l++];)r.highlightElement(s,!0===a,n.callback)},highlightElement:function(a,n,s){for(var i,l,o=a;o&&!t.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(t)||[,""])[1].toLowerCase(),l=r.languages[i]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i,a.parentNode&&(o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+i));var u={element:a,language:i,grammar:l,code:a.textContent},g=function(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),s&&s.call(u.element)};if(r.hooks.run("before-sanity-check",u),u.code)if(r.hooks.run("before-highlight",u),u.grammar)if(n&&e.Worker){var c=new Worker(r.filename);c.onmessage=function(e){g(e.data)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else g(r.highlight(u.code,u.grammar,u.language));else g(r.util.encode(u.code));else r.hooks.run("complete",u)},highlight:function(e,t,n){var s={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",s),s.tokens=r.tokenize(s.code,s.grammar),r.hooks.run("after-tokenize",s),a.stringify(r.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,n,s,i,l,o){for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==o)return;var g=n[u];g="Array"===r.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var d=g[c],p=d.inside,m=!!d.lookbehind,f=!!d.greedy,h=0,y=d.alias;if(f&&!d.pattern.global){var F=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,F+"g")}d=d.pattern||d;for(var b=s,k=i;b<t.length;k+=t[b].length,++b){var v=t[b];if(t.length>e.length)return;if(!(v instanceof a)){if(f&&b!=t.length-1){if(d.lastIndex=k,!(S=d.exec(e)))break;for(var w=S.index+(m?S[1].length:0),A=S.index+S[0].length,P=b,x=k,$=t.length;P<$&&(x<A||!t[P].type&&!t[P-1].greedy);++P)(x+=t[P].length)<=w&&(++b,k=x);if(t[b]instanceof a)continue;j=P-b,v=e.slice(k,x),S.index-=k}else{d.lastIndex=0;var S=d.exec(v),j=1}if(S){m&&(h=S[1]?S[1].length:0),A=(w=S.index+h)+(S=S[0].slice(h)).length;var _=v.slice(0,w),O=v.slice(A),N=[b,j];_&&(++b,k+=_.length,N.push(_));var z=new a(u,p?r.tokenize(S,p):S,y,S,f);if(N.push(z),O&&N.push(O),Array.prototype.splice.apply(t,N),1!=j&&r.matchGrammar(e,t,n,b,k,!0,u),l)break}else if(l)break}}}}},tokenize:function(e,a){var t=[e],n=a.rest;if(n){for(var s in n)a[s]=n[s];delete a.rest}return r.matchGrammar(e,t,a,0,0,!1),t},hooks:{all:{},add:function(e,a){var t=r.hooks.all;t[e]=t[e]||[],t[e].push(a)},run:function(e,a){var t=r.hooks.all[e];if(t&&t.length)for(var n,s=0;n=t[s++];)n(a)}},Token:a};if(e.Prism=r,a.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return a.stringify(e,t)}).join("");var n={type:e.type,content:a.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,s)}r.hooks.run("wrap",n);var i=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(i?" "+i:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",function(a){var t=JSON.parse(a.data),n=t.language,s=t.code,i=t.immediateClose;e.postMessage(r.highlight(s,r.languages[n],n)),i&&e.close()},!1)),r;var s=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return s&&(r.filename=s.src,r.manual||s.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(r.highlightAll):window.setTimeout(r.highlightAll,16):document.addEventListener("DOMContentLoaded",r.highlightAll))),r}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,a){var t={};t["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[a]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};n["language-"+a]={pattern:/[\s\S]+/,inside:Prism.languages[a]};var r={};r[e]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",r)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,function(e){var a=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+a.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+a.source+")*?(?=\\s*\\{)"),string:{pattern:a,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;