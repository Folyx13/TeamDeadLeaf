(()=>{var n={150:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,'* {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #1a1a1a;\n    color: #fff;\n}\n\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\nh1,\nh2,\nh3 {\n    color: #ff4500;\n}\n\nh1 {\n    font-size: 3em;\n    text-align: center;\n}\n\np {\n    font-size: 1.2em;\n    line-height: 1.6;\n}\n\n.discord>p {\n    width: 80%;\n    margin-top: 50px;\n    margin-bottom: 25px;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.discord>p>a {\n    color: #d43900;\n}\n\n\n\n.presentation,\n.image-text,\n.text {\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n\n.presentation h2,\n.image-text h2,\n.text h2,\n.formulaire h1 {\n    color: #ff4500;\n}\n\n.container>h2 {\n    text-align: center;\n    font-size: 3em;\n    padding-bottom: 80px;\n}\n\n\nimg {\n    max-width: 50%;\n    display: block;\n    margin: 0 auto;\n\n}\n\n\n.formulaire {\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 20px;\n    border: 2px solid #ff4500;\n    border-radius: 5px;\n    background-color: #1a1a1a;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.formulaire h1 {\n    color: #ff4500;\n    text-align: center;\n}\n\n.formulaire input {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 20px;\n    border: 2px solid #ff4500;\n    border-radius: 3px;\n    font-size: 1em;\n    background-color: #1a1a1a;\n    color: #fff;\n}\n\n.formulaire button[type="submit"] {\n    width: 100%;\n    padding: 10px;\n    background-color: #ff4500;\n    color: #fff;\n    border: none;\n    border-radius: 3px;\n    font-size: 1.2em;\n    cursor: pointer;\n}\n\n.formulaire button[type="submit"]:hover {\n    background-color: #d43900;\n}\n\n.formulaire .error {\n    color: #f00;\n    font-size: 1em;\n}\n\n.formulaire .obg {\n    font-size: 0.8em;\n}\n\n/* Style de la navbar */\n.navbar {\n    margin-bottom: 100px;\n    margin-top: 20px;\n    background-color: #1a1a1a;\n    color: #fff;\n    padding: 10px;\n    text-align: center;\n}\n\n.navbar ul {\n    list-style-type: none;\n    padding: 0;\n}\n\n.navbar li {\n    display: inline;\n    margin: 0 10px;\n}\n\n.navbar a {\n    text-decoration: none;\n    color: #fff;\n}\n\na {\n    text-decoration: none;\n    color: #fff;\n}\n\n\n\n.footer {\n    width: 100%;\n    background-color: #181615;\n    color: #fff;\n    text-align: left;\n    padding: 20px;\n    margin-top: 100px;\n\n}\n\n.footer p {\n    margin: 10px 0;\n\n}\n\n.footer a {\n    color: #d43900;\n    text-decoration: none;\n    margin: 0 10px;\n\n}\n\n\n@media screen and (max-width: 620px) {\n    .formulaire {\n        max-width: 80%;\n        padding: 10px;\n    }\n\n    .formulaire input[type="text"],\n    .formulaire input[type="number"],\n    .formulaire input[type="email"],\n    .formulaire input[type="password"] {\n        width: calc(100% - 20px);\n        padding: 8px;\n        font-size: 0.9em;\n    }\n\n    .formulaire button[type="submit"] {\n        padding: 8px;\n        font-size: 1em;\n    }\n\n    .flex-container {\n        max-width: 80%;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .centered-image img {\n        max-width: 100%;\n    }\n\n    .card {\n        margin: 10px auto;\n    }\n\n}\n\n.flex-container {\n    display: flex;\n    justify-content: center;\n}\n\n\n.card {\n    flex: 0 0 30%;\n    background-color: #333;\n    margin: 35px 10px;\n    padding: 20px;\n    border-radius: 5px;\n    text-align: center;\n}\n\n.card h3 {\n    color: #ff4500\n}',""]);const c=i},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},667:n=>{n.exports="img/logo_DeadLeaf.png"},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],u=r.base?d[0]+r.base:d[0],l=a[u]||0,s="".concat(u," ").concat(l);a[u]=l+1;var p=t(s),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:s,updater:m,references:1})}i.push(s)}return i}function o(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";t(667);var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),u=t(216),l=t.n(u),s=t(589),p=t.n(s),f=t(150),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l();e()(f.Z,m);f.Z&&f.Z.locals&&f.Z.locals;var x=document.getElementById("nom"),g=document.getElementById("prenom"),v=document.getElementById("age"),h=document.getElementById("email"),b=document.getElementById("nom-error"),y=document.getElementById("prenom-error"),C=document.getElementById("age-error"),w=document.getElementById("email-error");x.addEventListener("input",(function(){!function(n,e){var t,r=null===(t=n.value)||void 0===t?void 0:t.trim();e.textContent=""===r?"Champ obligatoire":""}(x,b)})),g.addEventListener("input",(function(){!function(n,e){var t,r=null===(t=n.value)||void 0===t?void 0:t.trim();e.textContent=""===r?"Champ obligatoire":""}(g,y)})),v.addEventListener("input",(function(){!function(n,e){var t,r=null===(t=n.value)||void 0===t?void 0:t.trim();""===r?e.textContent="Champ obligatoire":isNaN(r)||parseInt(r)<0?e.textContent="Âge invalide":e.textContent=""}(v,C)})),h.addEventListener("input",(function(){!function(n,e){var t,r=null===(t=n.value)||void 0===t?void 0:t.trim();""===r?e.textContent="Champ obligatoire":/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(r)?e.textContent="":e.textContent="Adresse e-mail invalide"}(h,w)})),document.getElementById("myForm").addEventListener("submit",(function(n){n.preventDefault(),""===b.textContent&&""===y.textContent&&""===C.textContent&&""===w.textContent?alert("Formulaire soumis avec succès !"):alert("Veuillez corriger les erreurs dans le formulaire.")}))})()})();