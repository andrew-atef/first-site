(function(t){function s(s){for(var a,n,i=s[0],o=s[1],l=s[2],m=0,p=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(s);while(p.length)p.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,s=0;s<c.length;s++){for(var e=c[s],a=!0,n=1;n<e.length;n++){var i=e[n];0!==r[i]&&(a=!1)}a&&(c.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},n={app:0},r={app:0},c=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"771f31a2"}[t]+".js"}function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var s=[],e={about:1};n[t]?s.push(n[t]):0!==n[t]&&e[t]&&s.push(n[t]=new Promise((function(s,e){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"810fecb8"}[t]+".css",r=o.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],m=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(m===a||m===r))return s()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],m=l.getAttribute("data-href");if(m===a||m===r)return s()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=s,u.onerror=function(s){var a=s&&s.target&&s.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete n[t],u.parentNode.removeChild(u),e(c)},u.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(u)})).then((function(){n[t]=0})));var a=r[t];if(0!==a)if(a)s.push(a[2]);else{var c=new Promise((function(s,e){a=r[t]=[s,e]}));s.push(a[2]=c);var l,m=document.createElement("script");m.charset="utf-8",m.timeout=120,o.nc&&m.setAttribute("nonce",o.nc),m.src=i(t);var p=new Error;l=function(s){m.onerror=m.onload=null,clearTimeout(u);var e=r[t];if(0!==e){if(e){var a=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",p.name="ChunkLoadError",p.type=a,p.request=n,e[1](p)}r[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:m})}),12e4);m.onerror=m.onload=l,document.head.appendChild(m)}return Promise.all(s)},o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],m=l.push.bind(l);l.push=s,l=l.slice();for(var p=0;p<l.length;p++)s(l[p]);var u=m;c.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},2485:function(t,s,e){},"2f54":function(t,s,e){"use strict";var a=e("9a3a"),n=e.n(a);n.a},3695:function(t,s,e){"use strict";var a=e("c2f6"),n=e.n(a);n.a},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("navcom")],1)},r=[],c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[t._m(0),e("router-link",{attrs:{to:"/mywork",exact:""}},[t._v("My Work")]),e("router-link",{attrs:{to:"/about"}},[t._v("About Me")]),e("router-link",{attrs:{to:"/features"}},[t._v("features")]),e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("router-view")],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._v("Andrew-"),e("span",[t._v("Atef")])])}],o={name:"navcom"},l=o,m=(e("6ddc"),e("2877")),p=Object(m["a"])(l,c,i,!1,null,null,null),u=p.exports,d={name:"nav",components:{navcom:u}},v=d,h=(e("5c0b"),Object(m["a"])(v,n,r,!1,null,null,null)),f=h.exports,y=(e("d3b7"),e("8c4f")),g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("HelloWorld"),e("contact")],1)},C=[],b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hello"},[e("div",{staticClass:"back"},[e("div",{staticClass:"overview"}),e("div",{staticClass:"social"},[e("div",{staticClass:"fa"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M10,0.5c-5.247,0-9.5,4.253-9.5,9.5c0,5.247,4.253,9.5,9.5,9.5c5.247,0,9.5-4.253,9.5-9.5C19.5,4.753,15.247,0.5,10,0.5 M10,18.637c-4.77,0-8.636-3.867-8.636-8.637S5.23,1.364,10,1.364S18.637,5.23,18.637,10S14.77,18.637,10,18.637 M10.858,7.949c0-0.349,0.036-0.536,0.573-0.536h0.719v-1.3H11c-1.38,0-1.866,0.65-1.866,1.743v0.845h-0.86V10h0.86v3.887h1.723V10h1.149l0.152-1.299h-1.302L10.858,7.949z"}})])]),e("div",{staticClass:"tw"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M14.467,6.707c-0.34,0.198-0.715,0.342-1.115,0.419c-0.318-0.335-0.775-0.545-1.279-0.545c-0.969,0-1.754,0.773-1.754,1.727c0,0.135,0.015,0.267,0.045,0.394C8.905,8.628,7.612,7.94,6.747,6.896C6.596,7.151,6.509,7.448,6.509,7.764c0,0.599,0.31,1.128,0.78,1.438C7.002,9.192,6.732,9.115,6.495,8.985c0,0.007,0,0.014,0,0.021c0,0.837,0.605,1.535,1.408,1.694c-0.147,0.04-0.302,0.06-0.462,0.06c-0.113,0-0.223-0.011-0.33-0.031c0.223,0.687,0.871,1.186,1.638,1.199c-0.6,0.464-1.356,0.739-2.179,0.739c-0.142,0-0.281-0.007-0.418-0.023c0.777,0.489,1.699,0.775,2.689,0.775c3.228,0,4.991-2.63,4.991-4.913c0-0.075-0.002-0.149-0.004-0.223c0.342-0.244,0.639-0.547,0.875-0.894c-0.316,0.137-0.652,0.23-1.008,0.272C14.057,7.448,14.336,7.11,14.467,6.707 M10,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.196,0,9.407-4.211,9.407-9.406C19.406,4.805,15.195,0.594,10,0.594 M10,18.552c-4.723,0-8.551-3.829-8.551-8.552S5.277,1.449,10,1.449c4.723,0,8.551,3.829,8.551,8.551S14.723,18.552,10,18.552"}})])]),e("div",{staticClass:"in"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M9.969,0.594c-5.195,0-9.406,4.211-9.406,9.406c0,5.195,4.211,9.406,9.406,9.406c5.195,0,9.406-4.211,9.406-9.406C19.375,4.805,15.164,0.594,9.969,0.594 M9.969,18.552c-4.723,0-8.551-3.829-8.551-8.552s3.829-8.551,8.551-8.551S18.521,5.277,18.521,10S14.691,18.552,9.969,18.552 M12.534,5.724H7.403c-0.944,0-1.71,0.766-1.71,1.71v5.131c0,0.944,0.766,1.71,1.71,1.71h5.131c0.944,0,1.71-0.766,1.71-1.71V7.435C14.244,6.49,13.479,5.724,12.534,5.724M11.679,7.007h1.283V8.29h-1.283V7.007z M9.969,8.29c0.944,0,1.71,0.766,1.71,1.71s-0.766,1.71-1.71,1.71s-1.71-0.766-1.71-1.71S9.024,8.29,9.969,8.29 M13.39,12.565c0,0.472-0.384,0.854-0.855,0.854H7.403c-0.472,0-0.855-0.383-0.855-0.854V9.573h0.898C7.423,9.712,7.403,9.854,7.403,10c0,1.417,1.149,2.565,2.565,2.565c1.416,0,2.565-1.148,2.565-2.565c0-0.146-0.02-0.288-0.043-0.427h0.898V12.565z"}})])]),e("div",{staticClass:"dr"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M10,4.784C7.12,4.784,4.784,7.12,4.784,10c0,2.881,2.335,5.216,5.216,5.216c2.881,0,5.216-2.335,5.216-5.216C15.216,7.12,12.881,4.784,10,4.784 M10,5.653c1.034,0,1.983,0.362,2.729,0.966c-0.705,0.566-1.475,1.056-2.303,1.442C9.94,7.257,9.356,6.52,8.702,5.852C9.111,5.723,9.548,5.653,10,5.653 M7.837,6.233c0.672,0.649,1.271,1.375,1.767,2.173c-1.205,0.451-2.503,0.709-3.863,0.72C5.994,7.888,6.775,6.844,7.837,6.233 M5.653,10c1.549,0,3.03-0.292,4.392-0.821c0.146,0.282,0.283,0.568,0.405,0.863c-1.5,0.563-2.761,1.603-3.616,2.93C6.104,12.194,5.653,11.151,5.653,10 M10,14.347c-0.934,0-1.796-0.298-2.504-0.798c0.753-1.221,1.892-2.179,3.253-2.691c0.338,1.04,0.527,2.145,0.547,3.292C10.887,14.277,10.452,14.347,10,14.347 M12.147,13.776c-0.051-1.102-0.238-2.166-0.562-3.172c0.47-0.107,0.956-0.169,1.458-0.169c0.434,0,0.852,0.059,1.261,0.141C14.122,11.949,13.302,13.118,12.147,13.776 M13.043,9.565c-0.606,0-1.193,0.082-1.757,0.22c-0.131-0.324-0.276-0.64-0.434-0.95c0.903-0.427,1.74-0.969,2.505-1.595c0.558,0.677,0.909,1.527,0.974,2.456C13.912,9.62,13.485,9.565,13.043,9.565 M10,0.438c-5.281,0-9.562,4.281-9.562,9.562S4.719,19.562,10,19.562c5.281,0,9.562-4.281,9.562-9.562S15.281,0.438,10,0.438 M10,18.693c-4.801,0-8.693-3.892-8.693-8.693c0-4.801,3.892-8.693,8.693-8.693c4.802,0,8.693,3.892,8.693,8.693C18.693,14.802,14.802,18.693,10,18.693"}})])])]),e("img",{staticClass:"h",attrs:{src:"https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w,%20https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260%201260w,%20https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%201880w,%20https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w"}}),t._m(0),e("div",{staticClass:"img"}),t._m(1)])])},_=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-text"},[e("span",[t._v("Hello, I'm")]),e("br"),t._v("Andrew Atef "),e("p",[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry."),e("br"),t._v(" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")]),e("button",[t._v("contact me")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"con"},[e("div",{staticClass:"main-body"})])}],w={name:"HelloWorld",props:{msg:String}},x=w,k=(e("7248"),Object(m["a"])(x,b,_,!1,null,"695d0f98",null)),L=k.exports,M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},I=[],j={name:"contact"},A=j,O=Object(m["a"])(A,M,I,!1,null,null,null),E=O.exports,z={name:"Home",components:{contact:E,HelloWorld:L}},S=z,B=Object(m["a"])(S,g,C,!1,null,null,null),P=B.exports,T=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("myworkcom")],1)},W=[],$=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"clear"},[e("h1",[t._v("my work")]),e("div",{staticClass:"con"},[e("div",{staticClass:"par"},[e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://themeforest.img.customer.envatousercontent.com/files/266320283/Images_themeforest/01_Preview%20Image.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=5b815703474dc6e3acaa17ea99105132",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 5600 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])]),e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQL42Xx2OYpPIUCV1ZoA2ofODXyMwXKVWt2xPmMabpQo30DrDb&usqp=CAU",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 5020 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])]),e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/7bd16b88895219.5de6eb37f0e40.png",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 2500 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])]),e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/projects/404/436fd996959755.Y3JvcCw4MDgsNjMyLDAsMA.jpg",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 6600 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])]),e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://cdn.dribbble.com/users/1107687/screenshots/6593778/neura_2x.jpg",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 7000 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])]),e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://image.freepik.com/free-vector/set-ui-ux-gui-screens-education-app-flat_9209-2030.jpg",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 14200 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])]),e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://cdn.dribbble.com/users/257709/screenshots/8905641/csgo_game_shot_2x.png",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 500 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])]),e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz-3B6gFITJ_n0O35GDO9F4QoMToR7KmUTumrI__OT7kCBgQkX&usqp=CAU",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 400 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])]),e("div",{staticClass:"post"},[e("img",{attrs:{src:"https://miro.medium.com/max/3200/1*Asobnxejkl99Pde8Td1ajg.png",alt:"my work"}}),e("div",{staticClass:"post-bar"},[e("span",{staticClass:"vi"},[e("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 20 20"}},[e("path",{attrs:{fill:"none",d:"M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"}}),e("circle",{attrs:{fill:"none",cx:"9.98",cy:"9.446",r:"1.629"}})]),e("br"),t._v(" 500 ")]),e("span",{staticClass:"title"},[t._v("What is Lorem Ipsum")]),e("span",{staticClass:"disc"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")])])])])])])},N=[],D={name:"my-work"},H=D,V=(e("2f54"),Object(m["a"])(H,$,N,!1,null,"c87a0a9a",null)),q=V.exports,J={name:"mywork",components:{myworkcom:q}},G=J,U=Object(m["a"])(G,T,W,!1,null,null,null),Q=U.exports,R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("featurescom")},F=[],X=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"con"},[e("h1",{staticClass:"features-h1"},[t._v("features")]),e("div",{staticClass:"features"},[e("div",{staticClass:"overview"}),e("div",[e("img",{attrs:{src:"https://ak.picdn.net/shutterstock/videos/28805065/thumb/1.jpg"}})]),e("div",[e("h3",[t._v("Clean Code")])]),e("div",{staticClass:"features-text"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")])]),e("div",{staticClass:"features"},[e("div",{staticClass:"overview"}),e("div",[e("img",{attrs:{src:"https://mir-s3-cdn-cf.behance.net/projects/404/dec13392584901.Y3JvcCw4MDgsNjMyLDAsMA.png"}})]),e("div",[e("h3",[t._v("Nice Designs")])]),e("div",{staticClass:"features-text"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")])]),e("div",{staticClass:"features"},[e("div",{staticClass:"overview"}),e("div",[e("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrrter-FREoRjR4_aNh4uL5Poy7DrpJyNPgYHvVG4L9kJG5L0T&usqp=CAU"}})]),e("div",[e("h3",[t._v("Low Price")])]),e("div",{staticClass:"features-text"},[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ")])])])}],K={name:"featurescom"},Z=K,tt=(e("3695"),Object(m["a"])(Z,X,Y,!1,null,"550228da",null)),st=tt.exports,et={name:"features",components:{featurescom:st}},at=et,nt=Object(m["a"])(at,R,F,!1,null,null,null),rt=nt.exports;a["a"].use(y["a"]);var ct=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/mywork",name:"mywork",component:Q},{path:"/features",name:"features",component:rt}],it=new y["a"]({mode:"history",base:"/",routes:ct}),ot=it,lt=e("2f62");a["a"].use(lt["a"]);var mt=new lt["a"].Store({state:{},mutations:{},actions:{},modules:{}});e("f5df1");a["a"].config.productionTip=!1,new a["a"]({router:ot,store:mt,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,s,e){"use strict";var a=e("9c0c"),n=e.n(a);n.a},"5ccd":function(t,s,e){},"6ddc":function(t,s,e){"use strict";var a=e("5ccd"),n=e.n(a);n.a},7248:function(t,s,e){"use strict";var a=e("2485"),n=e.n(a);n.a},"9a3a":function(t,s,e){},"9c0c":function(t,s,e){},c2f6:function(t,s,e){}});
//# sourceMappingURL=app.45931e27.js.map