(function(t){function e(e){for(var n,c,l=e[0],i=e[1],s=e[2],u=0,f=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var l=a[c];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},o={app:0},r=[];function l(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2527901b"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={about:1};c[t]?e.push(c[t]):0!==c[t]&&a[t]&&e.push(c[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"f692fb8e"}[t]+".css",o=i.p+n,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var s=r[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===n||u===o))return e()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){s=f[l],u=s.getAttribute("data-href");if(u===n||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete c[t],p.parentNode.removeChild(p),a(r)},p.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){c[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(t);var f=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",f.name="ChunkLoadError",f.type=n,f.request=c,a[1](f)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/v-portfolio/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21bb":function(t,e,a){"use strict";var n=a("2dad"),c=a.n(n);c.a},"2dad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=(a("d3b7"),a("bc3a")),o=a.n(c),r={},l=o.a.create(r);l.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=l,window.axios=l,Object.defineProperties(t.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},n["a"].use(Plugin);Plugin;var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"},on:{click:function(e){t.burgerStatus=!1}}},[a("header",{attrs:{id:"nav"}},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"flex-space"}),a("div",{staticClass:"link",class:{navOn:t.burgerStatus}},[a("router-link",{attrs:{to:"/"}},[a("div",{on:{mouseover:function(e){t.navText.home="回到首頁"},mouseleave:function(e){t.navText.home="Home"}}},[t._v(t._s(t.navText.home))])]),a("router-link",{attrs:{to:"/about"}},[a("div",{on:{mouseover:function(e){t.navText.about="關於我"},mouseleave:function(e){t.navText.about="About"}}},[t._v(t._s(t.navText.about))])]),a("router-link",{attrs:{to:{name:"work"}}},[a("div",{on:{mouseover:function(e){t.navText.work="作品集"},mouseleave:function(e){t.navText.work="Work"}}},[t._v(t._s(t.navText.work))])]),a("router-link",{attrs:{to:{name:"contact"}}},[a("div",{on:{mouseover:function(e){t.navText.contact="與我聯絡"},mouseleave:function(e){t.navText.contact="Contact"}}},[t._v(t._s(t.navText.contact))])]),a("a",{attrs:{href:"https://www.cakeresume.com/s---6-pDbd0wNeoz_4_eYWL8Q--/cj3su3Kdj",target:"_blank"}},[a("div",{on:{mouseover:function(e){t.navText.exp="工作經歷"},mouseleave:function(e){t.navText.exp="Experience"}}},[t._v(t._s(t.navText.exp))])])],1),a("div",{staticClass:"burger",on:{click:function(e){e.stopPropagation(),t.burgerStatus=!t.burgerStatus}}},[a("span"),a("span"),a("span")])])]),a("main",{staticClass:"main"},[a("div",{staticClass:"container"},[a("transition",{attrs:{name:"zoom",mode:"out-in",appear:""}},[a("router-view")],1)],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticStyle:{display:"inline-block"},attrs:{href:""}},[a("div",{staticClass:"logo"},[a("span",{staticClass:"logo-line"}),a("span",{staticClass:"logo-line"}),a("span",{staticClass:"logo-line"}),a("span",{staticClass:"logo-line"})])])}],u={data:function(){return{navText:{home:"Home",about:"About",work:"Work",exp:"Experience",contact:"Contact"},burgerStatus:!1}},Mounted:function(){},watch:{burgerStatus:function(){}}},f=u,p=(a("5c0b"),a("2877")),v=Object(p["a"])(f,i,s,!1,null,null,null),d=v.exports,h=a("8c4f"),m=a("bb51");n["a"].use(h["a"]);var L=[{path:"/",name:"home",component:m["default"]},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/work",name:"work",component:function(){return a.e("about").then(a.bind(null,"f126"))}},{path:"/contact",name:"contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}}],b=new h["a"]({routes:L}),g=b,y=a("ca95"),w=a.n(y);n["a"].use(w.a,{name:"v-touch"}),window.$=window.jQuery=a("1157"),n["a"].config.productionTip=!1,new n["a"]({router:g,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),c=a.n(n);c.a},"777f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("p",{staticClass:"home-name"},[t._v("Jake Tsao")]),a("p",{staticClass:"home-class"},[t._v("Front-End Engineer")]),a("p",{staticClass:"home-motto"},[t._v("Stay Hungry, Stay Foolish.")]),t._m(0),a("div",{staticClass:"home-sm-pic"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"659",height:"611",viewBox:"0 0 659 611"}},[a("title",[t._v("bgd__pattern")]),a("g",{staticStyle:{opacity:"0.3000349998474121"}},[a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M174,328.49a35.73,35.73,0,0,0-66-1.71L4.45,559.16a34.78,34.78,0,0,0-.88,27.13A36.89,36.89,0,0,0,21.68,606a35.14,35.14,0,0,0,28.2,1.07l168-64.49a35.79,35.79,0,0,0,20.57-46.14L174,328.49Zm.71-.27,64.48,168a36.52,36.52,0,0,1-21,47.17l-168,64.47c-20.54,7.89-40.6-3.7-47.33-21.22a35.73,35.73,0,0,1,.9-27.71L107.25,326.45c13.24-29.71,55.78-28.59,67.43,1.77Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M184,309.68a36.88,36.88,0,0,0-68.19,1.68L22,557.06a36.11,36.11,0,0,0,.6,28.12A38.31,38.31,0,0,0,42.37,604.6a36.22,36.22,0,0,0,29.19-.4l169.51-75.47a37,37,0,0,0,18.65-48.85L183.93,309.67Zm.67-.32,75.78,170.21a37.71,37.71,0,0,1-19,49.85L71.85,604.9c-20.74,9.24-42-1.67-50-19.43a37,37,0,0,1-.61-28.69l93.77-245.7c12-31.41,55.91-32.5,69.6-1.73Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M193.25,291A37.72,37.72,0,0,0,156,270.1a37.29,37.29,0,0,0-33,26.24L40.11,554.85a37.46,37.46,0,0,0,2.17,29,39.76,39.76,0,0,0,21.47,19.07A37.27,37.27,0,0,0,93.81,601l170.44-86.84a38.24,38.24,0,0,0,16.49-51.44L193.26,291Zm.69-.33,87.47,171.68a39,39,0,0,1-16.83,52.47L94.15,601.63c-20.85,10.63-43.42.48-52.55-17.44a38.44,38.44,0,0,1-2.2-29.59l82.93-258.53c10.62-33.06,55.78-36.49,71.6-5.45Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M202.53,272.75A39.18,39.18,0,0,0,130.59,282L59.22,552.37A38.56,38.56,0,0,0,63,582.09a40.87,40.87,0,0,0,23.11,18.43,38.36,38.36,0,0,0,30.81-3.62l170.59-98.49a39.4,39.4,0,0,0,14.2-53.81l-99.2-171.81Zm.66-.34,99.19,171.78A40.12,40.12,0,0,1,287.89,499L117.3,597.53c-20.86,12.05-44.61,2.83-55-15.09a39.6,39.6,0,0,1-3.88-30.3l71.39-270.3c9.13-34.56,55.39-40.53,73.33-9.47Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M210.74,254.16c-9.29-14.3-25.33-21.22-41.88-18.08A39.35,39.35,0,0,0,137.2,267.4l-58,282.74a40.1,40.1,0,0,0,5.61,30.52,42.55,42.55,0,0,0,24.85,17.87,39.42,39.42,0,0,0,31.53-5.32l170-110.38c18.66-12.12,23.85-37.37,11.55-56.31L210.74,254.16Zm.64-.42L323.31,426.1c12.55,19.32,7.29,45-11.77,57.37l-170,110.38c-20.8,13.51-45.77,5.2-57.44-12.78A41.12,41.12,0,0,1,78.4,550l58-282.74c7.42-36.14,54.71-44.65,74.94-13.51Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M216.15,236.73c-10.34-14.23-27.2-20.59-44-16.49a40,40,0,0,0-30.5,33.69L98.82,547a41.59,41.59,0,0,0,7.52,31.08,44.15,44.15,0,0,0,26.47,17.14,40.06,40.06,0,0,0,32-7L332.18,466.58c18.4-13.36,22.22-39.56,8.53-58.4L216.15,236.73Zm.62-.44L341.33,407.73c13.94,19.19,10.07,45.84-8.7,59.47L165.22,588.84c-20.48,14.87-46.5,7.57-59.5-10.31a42.64,42.64,0,0,1-7.67-31.63L140.9,253.83c5.49-37.47,53.35-48.53,75.87-17.54Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M224.46,219.38c-11.42-14.11-29.08-19.65-46.1-14.55A41.1,41.1,0,0,0,149,241L120.58,544A42.7,42.7,0,0,0,130,575.47a45.33,45.33,0,0,0,28.09,16.16,41.18,41.18,0,0,0,32.47-8.92L355.77,448.9c18.14-14.69,20.69-41.82,5.63-60.42L224.46,219.38Zm.6-.48L362,388c15.37,19,12.78,46.48-5.74,61.47L191,583.28c-20.21,16.37-47.3,10.29-61.59-7.36a43.81,43.81,0,0,1-9.56-32L148.16,241C151.77,202.27,200.3,188.32,225.06,218.9Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M231.42,202.11a45.1,45.1,0,0,0-23.28-14,44,44,0,0,0-24.94,1.52c-16.65,6-27.42,20.84-28.15,38.69L142.69,540.88a44.65,44.65,0,0,0,11.39,31.85,46.79,46.79,0,0,0,29.76,15.13A42.24,42.24,0,0,0,216.6,577L378.84,430.91c17.84-16.06,19-44,2.45-62.34L231.42,202.11Zm.56-.51L381.86,368.06c16.8,18.65,15.68,47-2.51,63.42L217.11,577.56c-19.84,17.86-48,13-63.63-4.34A45.09,45.09,0,0,1,142,540.82l12.32-312.51c1.57-40,50.61-56.81,77.7-26.72Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M236.06,184.4a46.4,46.4,0,0,0-24.73-13.13,45.4,45.4,0,0,0-25.61,2.93c-16.74,7.09-27,22.92-26.79,41.29l4,321.83a45.9,45.9,0,0,0,13.4,32.13,48.05,48.05,0,0,0,31.4,13.95,43.53,43.53,0,0,0,33.14-12.94L399.83,411.55c17.47-17.47,17.11-46.27-.83-64.21L236.06,184.4Zm.54-.54L399.52,346.78c18.26,18.25,18.63,47.49.82,65.29L241.45,571c-19.44,19.43-48.61,16-65.6-1a46.34,46.34,0,0,1-13.63-32.65l-4-321.82c-.52-41.13,49-61.11,78.41-31.66Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M241.39,167.84a47.8,47.8,0,0,0-26.11-12.19A46.44,46.44,0,0,0,189.21,160c-16.71,8.13-26.3,24.84-25,43.6l22.3,329.16A47.39,47.39,0,0,0,202,565,49.65,49.65,0,0,0,235,577.65a44.43,44.43,0,0,0,33.21-14.94L421.85,392c16.92-18.79,14.91-48.26-4.46-65.71l-176-158.46Zm.52-.56,176,158.47c19.72,17.75,21.74,47.65,4.52,66.78L268.73,563.22c-18.8,20.88-48.85,18.86-67.21,2.33a47.81,47.81,0,0,1-15.78-32.72l-22.3-329.15c-2.86-42.07,46.67-65,78.48-36.39Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M246.21,152.87a49.43,49.43,0,0,0-27.45-11.16,47.47,47.47,0,0,0-26.47,5.82c-16.6,9.18-25.45,26.74-23.11,45.85l41.31,335.45A48.76,48.76,0,0,0,228.21,561a51.14,51.14,0,0,0,34.43,11.29,45.27,45.27,0,0,0,33.16-17L443.48,372.91c16.26-20.08,12.55-50.13-8.27-67l-189-153Zm.48-.59,189,153c21.18,17.15,24.92,47.64,8.39,68.06L296.4,555.76c-18.07,22.31-48.95,21.77-68.64,5.82a49.2,49.2,0,0,1-18-32.65L168.41,193.49C163.13,150.61,212.52,124.61,246.69,152.28Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M247.75,137.6A50.75,50.75,0,0,0,219,127.65a48.76,48.76,0,0,0-26.83,7.4,46,46,0,0,0-21.1,48.12l60.66,341.16a50.12,50.12,0,0,0,19.92,32,52.55,52.55,0,0,0,35.89,9.74,46.35,46.35,0,0,0,33-19.13L461.83,352.49c15.56-21.42,10.12-52-12.13-68.17L247.75,137.6Zm.45-.62L450.13,283.69c22.63,16.44,28.14,47.44,12.31,69.24L321.16,547.37c-17.28,23.79-48.9,24.83-70,9.53A50.56,50.56,0,0,1,231,524.42L170.3,183.26c-7.75-43.61,41.42-72.83,77.92-46.31Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M251.89,122.15a51.69,51.69,0,0,0-30-8.59,49.84,49.84,0,0,0-27.08,9.1,48,48,0,0,0-17,21.16,48.44,48.44,0,0,0-2.07,29.26l79.74,346a51.19,51.19,0,0,0,22,31.66,53.67,53.67,0,0,0,37.22,8,47.72,47.72,0,0,0,32.84-21.41L482,330.36c14.81-22.79,7.66-53.81-16-69.15l-214.11-139Zm.45-.63,214.06,139c24,15.58,31.24,47,16.18,70.21l-134.4,207c-16.44,25.31-48.75,28.15-71.08,13.65a51.65,51.65,0,0,1-22.36-32.12L175,173.24c-10.19-44.23,38.57-76.88,77.26-51.75Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M255.38,107.82a53.48,53.48,0,0,0-31.29-7.24,50.93,50.93,0,0,0-27.26,10.73,48.6,48.6,0,0,0-16.14,22.44,49.47,49.47,0,0,0-.44,29.95l101.4,349.12A52.88,52.88,0,0,0,306,544a55.4,55.4,0,0,0,38.59,6.28A48.45,48.45,0,0,0,377,526.78l125.85-218c13.87-24,4.77-55.35-20.28-69.82L255.38,107.82Zm.39-.66L483,238.34c25.46,14.7,34.67,46.43,20.56,70.86l-125.86,218c-15.4,26.67-48.33,31.21-72,17.53A53.3,53.3,0,0,1,280.92,513l-101.4-349.2c-13-44.63,35.13-80.41,76.21-56.7Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M258.43,94.44A54.87,54.87,0,0,0,226,88.66a52.29,52.29,0,0,0-27.31,12.4,49.64,49.64,0,0,0-15.24,23.78,50.41,50.41,0,0,0,1.18,30.63L307.3,506.85a54.21,54.21,0,0,0,26.64,30.62,56.85,56.85,0,0,0,39.85,4.41,49.6,49.6,0,0,0,31.87-25.75L522.52,286.76c12.89-25.29,1.87-56.81-24.55-70.27l-239.51-122Zm.37-.67,239.48,122c26.84,13.68,38,45.59,24.88,71.3L406.3,516.44c-14.29,28-47.72,34.43-72.71,21.69a54.6,54.6,0,0,1-27-31.06L183.94,155.67c-15.7-44.89,31.55-84,74.84-61.93Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M259.73,81.85a56.17,56.17,0,0,0-33.4-4.17A53.22,53.22,0,0,0,199.14,91.8a50.47,50.47,0,0,0-14.21,25,51.42,51.42,0,0,0,2.87,31.08l144,351.35A55.46,55.46,0,0,0,360.66,529a58.11,58.11,0,0,0,40.84,2.37,50.5,50.5,0,0,0,31.1-27.91L539.33,263.79c11.77-26.44-1.17-58-28.84-70.29L259.73,81.85Zm.31-.69L510.79,192.8c28.1,12.51,41.18,44.43,29.22,71.29L433.28,503.81c-13,29.32-46.81,37.56-72.95,25.92a55.85,55.85,0,0,1-29.22-30.2l-144-351.35c-18.43-45,27.62-87.21,73-67Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M261,68.91a57.46,57.46,0,0,0-34.39-2.47,54.44,54.44,0,0,0-27,15.9,51.7,51.7,0,0,0-13.14,26.27,52.6,52.6,0,0,0,4.63,31.55L357.25,491.08A56.76,56.76,0,0,0,388.32,520a59.53,59.53,0,0,0,41.87.25,51.54,51.54,0,0,0,30.26-30.09l96.09-250.32c10.6-27.61-4.31-59.11-33.28-70.22L261,68.92Zm.27-.7L523.54,168.87C552.92,180.15,568,212,557.25,240.08L461.18,490.36c-11.75,30.62-45.78,40.83-73.13,30.32a57.18,57.18,0,0,1-31.5-29.26l-166.16-351C169.15,95.61,213.9,50,261.3,68.21Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M262,58.78a58.9,58.9,0,0,0-35.3-.7,55.53,55.53,0,0,0-26.76,17.67,52.71,52.71,0,0,0-12,27.45,53.73,53.73,0,0,0,6.44,31.91L383,484.3a58.18,58.18,0,0,0,33.3,27.83,61.06,61.06,0,0,0,42.8-2,52.68,52.68,0,0,0,29.29-32.35L573,217.45c9.33-28.74-7.61-60.09-37.78-69.9L262,58.78Zm.24-.73,273.23,88.78c30.62,9.95,47.76,41.67,38.27,70.85l-84.6,260.38c-10.35,31.84-44.54,44.06-73.05,34.79a58.51,58.51,0,0,1-33.74-28.19L193.72,135.51C169.61,90.88,212.85,42,262.24,58.05Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M263.69,49.44a60.23,60.23,0,0,0-36.11,1.18A56.67,56.67,0,0,0,201.2,70.1a53.55,53.55,0,0,0-10.7,28.65,54.77,54.77,0,0,0,8.27,32.17L410.1,476.85a59.46,59.46,0,0,0,35.49,26.61,62.38,62.38,0,0,0,43.54-4.23,53.74,53.74,0,0,0,28.17-34.55l72.34-270c8-29.79-11-60.87-42.37-69.28l-283.58-76Zm.19-.74,283.67,76c31.79,8.52,51,40,42.91,70.21L518.13,464.86c-8.85,33-43.09,47.29-72.68,39.36a59.93,59.93,0,0,1-36-27l-211.37-346C171.11,87.1,212.6,35,263.88,48.7Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M264.11,38.94a61.58,61.58,0,0,0-36.82,3.13,57.91,57.91,0,0,0-25.85,21.28,54.6,54.6,0,0,0-9.35,29.74,55.84,55.84,0,0,0,10.19,32.32L436.51,466.75A60.87,60.87,0,0,0,474.18,492a63.82,63.82,0,0,0,44.25-6.66,54.79,54.79,0,0,0,26.9-36.7l59.28-278.91c6.55-30.79-14.52-61.46-47-68.36L264.11,38.94Zm.16-.75,293.55,62.4c32.91,7,54.18,38,47.54,69.26L546.07,448.78c-7.25,34.11-41.43,50.46-72.05,44a61.31,61.31,0,0,1-38.14-25.56L201.64,125.87C171.69,82.23,211.23,26.92,264.27,38.19Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M265.31,30.3a63.1,63.1,0,0,0-37.42,5.13,59,59,0,0,0-25.26,23.06,55.35,55.35,0,0,0-7.9,30.71,56.81,56.81,0,0,0,12.14,32.28L464.21,456A62.31,62.31,0,0,0,504,479.65a65.4,65.4,0,0,0,44.82-9.14,55.69,55.69,0,0,0,25.44-38.73l45.38-286.53c5-31.67-18.11-61.7-51.59-67L265.31,30.3Zm.12-.75L568.14,77.49c33.93,5.38,57.31,35.76,52.22,67.88L575,431.93c-5.56,35.05-39.52,53.47-71.1,48.47a62.67,62.67,0,0,1-40.28-23.94L206.27,121.94C173.38,79.17,210.7,20.88,265.43,29.55Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M264.45,23.55a64.29,64.29,0,0,0-37.91,7.23A60.25,60.25,0,0,0,202,55.63a56.5,56.5,0,0,0-6.41,31.68,57.91,57.91,0,0,0,14.1,32.21L490,446.42a63.71,63.71,0,0,0,41.84,22A66.79,66.79,0,0,0,577,456.76,56.77,56.77,0,0,0,600.9,416l30.92-294.2c3.42-32.51-21.78-61.88-56.2-65.5L264.45,23.55Zm.08-.76L575.69,55.5c34.88,3.66,60.35,33.36,56.88,66.34L601.65,416c-3.78,36-37.42,56.54-69.88,53.13a64,64,0,0,1-42.34-22.25L209.17,120C173.34,78.23,208.28,16.88,264.53,22.79Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M265.5,13.72a65.69,65.69,0,0,0-38.24,9.37,61.47,61.47,0,0,0-23.65,26.6,57.45,57.45,0,0,0-4.84,32.58,59,59,0,0,0,16.1,32L518,432.12a65.05,65.05,0,0,0,43.82,20.14A68.19,68.19,0,0,0,607.21,438a57.81,57.81,0,0,0,22.14-42.79L645.13,94.1c1.74-33.26-25.51-61.83-60.78-63.67L265.5,13.72Zm0-.78L584.38,29.65c35.74,1.87,63.29,30.74,61.52,64.49l-15.78,301.1c-1.93,36.83-35.12,59.55-68.38,57.8a65.35,65.35,0,0,1-44.33-20.39L214.33,114.85C175.59,74.22,207.91,9.92,265.54,12.94Z"}}),a("path",{staticStyle:{fill:"#07c280"},attrs:{d:"M266.53.8a66.89,66.89,0,0,0-38.45,11.6A62.7,62.7,0,0,0,205.4,40.79a58.83,58.83,0,0,0-3.18,33.49,60.26,60.26,0,0,0,18.1,31.81L546,414a66.28,66.28,0,0,0,45.7,18.2,69.53,69.53,0,0,0,45.53-17,59.06,59.06,0,0,0,20.26-44.82V62.48c0-34-29.28-61.68-65.3-61.68Zm0-.8H592.21c36.5,0,66.1,28,66.1,62.48V370.4c0,37.66-32.59,62.6-66.56,62.6a66.61,66.61,0,0,1-46.25-18.43L219.8,106.67C178.17,67.3,207.66,0,266.53,0Z"}})])])]),a("div",{staticClass:"home-icons"},[a("a",{staticClass:"home-icons-item",attrs:{target:"_blank",href:"https://github.com/Jackalob"}},[a("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"42",height:"42",viewBox:"0 0 172 172"}},[a("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"none","fill-rule":"none",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[a("path",{attrs:{d:"M0,172v-172h172v172z",fill:"none","fill-rule":"nonzero"}}),a("g",{attrs:{fill:"#333333","fill-rule":"evenodd"}},[a("path",{attrs:{d:"M86,21.5c-35.63037,0 -64.5,28.86963 -64.5,64.5c0,28.4917 18.47656,52.6792 44.11279,61.20361c3.2334,0.58789 4.40918,-1.38574 4.40918,-3.10742c0,-1.53271 -0.06299,-5.58496 -0.08398,-10.95996c-17.95166,3.88428 -21.73096,-8.65039 -21.73096,-8.65039c-2.93945,-7.45361 -7.15967,-9.44824 -7.15967,-9.44824c-5.85791,-3.98926 0.44092,-3.90528 0.44092,-3.90528c6.4668,0.46192 9.86817,6.63477 9.86817,6.63477c5.75293,9.86817 15.09619,7.0127 18.77051,5.375c0.58789,-4.17822 2.26758,-7.01269 4.09424,-8.62939c-14.31934,-1.6167 -29.37354,-7.15967 -29.37354,-31.87207c0,-7.05469 2.51953,-12.80761 6.63477,-17.32178c-0.65088,-1.6167 -2.87646,-8.18848 0.62989,-17.06982c0,0 5.41699,-1.72168 17.7417,6.61377c5.14404,-1.42773 10.66602,-2.1416 16.14599,-2.16259c5.47998,0.02099 11.00195,0.73486 16.14599,2.16259c12.32471,-8.33545 17.7207,-6.61377 17.7207,-6.61377c3.52734,8.88134 1.32276,15.45313 0.65088,17.06982c4.13623,4.51416 6.61377,10.26709 6.61377,17.32178c0,24.77539 -15.0752,30.21338 -29.43653,31.83008c2.30957,1.97364 4.36719,5.9209 4.36719,11.92578c0,8.6294 -0.06298,15.5791 -0.06298,17.69971c0,1.72168 1.15478,3.7373 4.43017,3.10742c25.61523,-8.54541 44.0708,-32.71192 44.0708,-61.20361c0,-35.63037 -28.86963,-64.5 -64.5,-64.5z"}})])])])]),a("a",{staticClass:"home-icons-item",attrs:{target:"_blank",href:"https://www.facebook.com/profile.php?id=100000345602347"}},[a("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"32",height:"32",viewBox:"0 0 172 172"}},[a("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[a("path",{attrs:{d:"M0,172v-172h172v172z",fill:"none"}}),a("g",{attrs:{fill:"#333333"}},[a("path",{attrs:{d:"M86,0c-47.4935,0 -86,38.5065 -86,86c0,43.11467 31.76267,78.71867 73.143,84.93933v-62.14933h-21.27783v-22.60367h21.27783v-15.04283c0,-24.90417 12.13317,-35.83333 32.8305,-35.83333c9.9115,0 15.1575,0.73817 17.63717,1.06783v19.72983h-14.11833c-8.78633,0 -11.85367,8.33483 -11.85367,17.72317v12.35533h25.74983l-3.49017,22.60367h-22.25967v62.3285c41.97517,-5.69033 74.36133,-41.581 74.36133,-85.1185c0,-47.4935 -38.5065,-86 -86,-86z"}})])])])]),a("a",{staticClass:"home-icons-item",attrs:{target:"_blank",href:"https://codepen.io/codacola/pens/"}},[a("svg",{staticStyle:{fill:"#000000"},attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"36",height:"36",viewBox:"0 0 172 172"}},[a("g",{staticStyle:{"mix-blend-mode":"normal"},attrs:{fill:"none","fill-rule":"nonzero",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10","stroke-dasharray":"","stroke-dashoffset":"0","font-family":"none","font-weight":"none","font-size":"none","text-anchor":"none"}},[a("path",{attrs:{d:"M0,172v-172h172v172z",fill:"none"}}),a("path",{attrs:{d:"M0,86c0,-47.49649 38.50351,-86 86,-86c47.49649,0 86,38.50351 86,86c0,47.49649 -38.50351,86 -86,86c-47.49649,0 -86,-38.50351 -86,-86zM86,165.12c43.69677,0 79.12,-35.42323 79.12,-79.12c0,-43.69677 -35.42323,-79.12 -79.12,-79.12c-43.69677,0 -79.12,35.42323 -79.12,79.12c0,43.69677 35.42323,79.12 79.12,79.12z",fill:"#333333"}}),a("g",{attrs:{fill:"#333333"}},[a("path",{attrs:{d:"M86,29.42813l-2.41875,1.6125l-51.6,34.53437l-1.88125,1.20938v38.43125l1.88125,1.20938l51.6,34.53438l2.41875,1.6125l2.41875,-1.6125l51.6,-34.53438l1.88125,-1.20938v-38.43125l-1.88125,-1.20938l-51.6,-34.53437zM81.7,42.59688v23.38125l-22.17187,14.91563l-17.33437,-11.69063zM90.3,42.59688l39.50625,26.60625l-17.33437,11.69063l-22.17187,-14.91563zM86,73.50313l18.67813,12.49687l-18.67813,12.49688l-18.67812,-12.49688zM38.7,77.13125l13.16875,8.86875l-13.16875,8.86875zM133.3,77.13125v17.7375l-13.16875,-8.86875zM59.6625,91.10625l22.0375,14.91563v23.38125l-39.50625,-26.60625zM112.3375,91.10625l17.46875,11.69063l-39.50625,26.60625v-23.38125z"}})]),a("path",{attrs:{d:"M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z",fill:"none"}}),a("path",{attrs:{d:"M86,168.56c-45.59663,0 -82.56,-36.96337 -82.56,-82.56v0c0,-45.59663 36.96337,-82.56 82.56,-82.56v0c45.59663,0 82.56,36.96337 82.56,82.56v0c0,45.59663 -36.96337,82.56 -82.56,82.56z",fill:"none"}}),a("path",{attrs:{d:"M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z",fill:"none"}}),a("path",{attrs:{d:"M86,168.56c-45.59663,0 -82.56,-36.96337 -82.56,-82.56v0c0,-45.59663 36.96337,-82.56 82.56,-82.56v0c45.59663,0 82.56,36.96337 82.56,82.56v0c0,45.59663 -36.96337,82.56 -82.56,82.56z",fill:"none"}}),a("path",{attrs:{d:"M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z",fill:"none"}}),a("path",{attrs:{d:"M86,168.56c-45.59663,0 -82.56,-36.96337 -82.56,-82.56v0c0,-45.59663 36.96337,-82.56 82.56,-82.56v0c45.59663,0 82.56,36.96337 82.56,82.56v0c0,45.59663 -36.96337,82.56 -82.56,82.56z",fill:"none"}}),a("path",{attrs:{d:"M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z",fill:"none"}}),a("path",{attrs:{d:"M86,165.12c-43.69677,0 -79.12,-35.42323 -79.12,-79.12v0c0,-43.69677 35.42323,-79.12 79.12,-79.12v0c43.69677,0 79.12,35.42323 79.12,79.12v0c0,43.69677 -35.42323,79.12 -79.12,79.12z",fill:"none"}}),a("path",{attrs:{d:"M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z",fill:"none"}}),a("path",{attrs:{d:"M86,161.68c-41.79691,0 -75.68,-33.88309 -75.68,-75.68v0c0,-41.79691 33.88309,-75.68 75.68,-75.68v0c41.79691,0 75.68,33.88309 75.68,75.68v0c0,41.79691 -33.88309,75.68 -75.68,75.68z",fill:"none"}}),a("path",{attrs:{d:"M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z",fill:"none"}}),a("path",{attrs:{d:"M86,165.12c-43.69677,0 -79.12,-35.42323 -79.12,-79.12v0c0,-43.69677 35.42323,-79.12 79.12,-79.12v0c43.69677,0 79.12,35.42323 79.12,79.12v0c0,43.69677 -35.42323,79.12 -79.12,79.12z",fill:"none"}}),a("path",{attrs:{d:"M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z",fill:"none"}}),a("path",{attrs:{d:"M86,165.12c-43.69677,0 -79.12,-35.42323 -79.12,-79.12v0c0,-43.69677 35.42323,-79.12 79.12,-79.12v0c43.69677,0 79.12,35.42323 79.12,79.12v0c0,43.69677 -35.42323,79.12 -79.12,79.12z",fill:"none"}})])])])])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-pic"},[n("img",{attrs:{draggable:"false",src:a("b5a0")}})])}];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return c}))},"7ad4":function(t,e,a){"use strict";var n=a("9cae"),c=a.n(n);e["default"]=c.a},"9c0c":function(t,e,a){},"9cae":function(t,e){},b5a0:function(t,e,a){t.exports=a.p+"img/illustration.2c1a6336.png"},bb51:function(t,e,a){"use strict";var n=a("777f"),c=a("7ad4"),o=(a("21bb"),a("2877")),r=Object(o["a"])(c["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}});
//# sourceMappingURL=app.b773210e.js.map