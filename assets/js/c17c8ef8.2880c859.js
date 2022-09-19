"use strict";(self.webpackChunkxia0hj_blog=self.webpackChunkxia0hj_blog||[]).push([[9459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),m=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(n),d=a,f=k["".concat(p,".").concat(d)]||k[d]||c[d]||r;return n?l.createElement(f,i(i({ref:t},s),{},{components:n})):l.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=n(7462),a=(n(7294),n(3905));const r={},i="CSS",o={unversionedId:"cs-notes/css",id:"cs-notes/css",title:"CSS",description:"1. \u76d2\u5b50\u6a21\u578b",source:"@site/docs/cs-notes/css.md",sourceDirName:"cs-notes",slug:"/cs-notes/css",permalink:"/docs/cs-notes/css",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cs-notes/css.md",tags:[],version:"current",frontMatter:{},sidebar:"csNotesSidebar",previous:{title:"\u804c\u4e1a\u89c4\u5212",permalink:"/docs/cs-notes/career"},next:{title:"index",permalink:"/docs/cs-notes/"}},p={},m=[{value:"1. \u76d2\u5b50\u6a21\u578b",id:"1-\u76d2\u5b50\u6a21\u578b",level:2},{value:"2. CSS \u5c45\u4e2d\u65b9\u6cd5",id:"2-css-\u5c45\u4e2d\u65b9\u6cd5",level:2},{value:"3. position \u5b9a\u4f4d",id:"3-position-\u5b9a\u4f4d",level:2},{value:"4. CSS \u9009\u62e9\u5668",id:"4-css-\u9009\u62e9\u5668",level:2},{value:"5. CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7",id:"5-css-\u9009\u62e9\u5668\u4f18\u5148\u7ea7",level:2},{value:"6. BFC",id:"6-bfc",level:2},{value:"7. \u9ad8\u5ea6\u574d\u584c / \u6e05\u9664\u6d6e\u52a8",id:"7-\u9ad8\u5ea6\u574d\u584c--\u6e05\u9664\u6d6e\u52a8",level:2},{value:"8. flex \u5f39\u6027\u5e03\u5c40",id:"8-flex-\u5f39\u6027\u5e03\u5c40",level:2},{value:"9. grid \u7f51\u683c\u5e03\u5c40",id:"9-grid-\u7f51\u683c\u5e03\u5c40",level:2},{value:"10. \u5723\u676f\u5e03\u5c40\u548c\u53cc\u98de\u7ffc\u5e03\u5c40",id:"10-\u5723\u676f\u5e03\u5c40\u548c\u53cc\u98de\u7ffc\u5e03\u5c40",level:2},{value:"11. CSS \u753b\u4e09\u89d2\u5f62",id:"11-css-\u753b\u4e09\u89d2\u5f62",level:2},{value:"12. margin \u91cd\u53e0\u95ee\u9898",id:"12-margin-\u91cd\u53e0\u95ee\u9898",level:2},{value:"13. SASS / SCSS \u7528\u6cd5",id:"13-sass--scss-\u7528\u6cd5",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css"},"CSS"),(0,a.kt)("h2",{id:"1-\u76d2\u5b50\u6a21\u578b"},"1. \u76d2\u5b50\u6a21\u578b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u76d2\u5b50\u6a21\u578b\u5206\u4e3a\u6807\u51c6\u76d2\u5b50\u548c IE \u76d2\u5b50\uff0c\u90fd\u662f\u7531 margin\uff0cborder\uff0cpadding\uff0ccontent \u7ec4\u6210\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u533a\u522b\u662f\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u6240\u5bf9\u5e94\u7684\u8303\u56f4\u4e0d\u540c\uff0c\u6807\u51c6\u76d2\u5b50\u7684\u5bbd\u9ad8\u53ea\u5305\u542b content\uff0cIE \u76d2\u5b50\u5305\u542b border\uff0cpadding\uff0ccontent\uff0c\u4e0d\u5305\u62ec margin\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u5143\u7d20\u7684 box-sizing \u5c5e\u6027\u6765\u6539\u53d8\u5143\u7d20\u7684\u76d2\u6a21\u578b\u3002")),(0,a.kt)("h2",{id:"2-css-\u5c45\u4e2d\u65b9\u6cd5"},"2. CSS \u5c45\u4e2d\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"// \u7b2c\u4e00\u79cd\u65b9\u6cd5\uff0c\u6c34\u5e73\u5c45\u4e2d\n// \u7ed9div\u8bbe\u7f6e\u4e00\u4e2a\u5bbd\u5ea6\uff0c\u5e76\u52a0\u4e0a margin: 0 auto\n// \u901a\u8fc7\u8ba9\u5b83\u7684\u5916\u8fb9\u8ddd\u81ea\u9002\u5e94\uff0c\u6765\u5b9e\u73b0\u6c34\u5e73\u5c45\u4e2d\n.div1 {\n  width: 100px;\n  margin: 0 auto;\n}\n\n// \u7b2c\u4e8c\u79cd\u65b9\u6cd5\uff0c\u6c34\u5e73\u5c45\u4e2d\n// \u7ed9\u5bb9\u5668\u5143\u7d20\u52a0\u4e0a text-align: center\uff0c\u7136\u540e\u8ba9\u8981\u5c45\u4e2d\u7684\u5143\u7d20\u53d8\u4e3a\u884c\u5185\u5143\u7d20\n.container {\n  text-align: center;\n  .div2 {\n    display: inline-block;\n  }\n}\n\n// \u7b2c\u4e09\u79cd\u65b9\u6cd5\uff0c\u6c34\u5e73\u5782\u76f4\u5c45\u4e2d\n// \u7edd\u5bf9\u5b9a\u4f4d\uff0c\u4e0a\u4e0b\u5de6\u53f3\u7684\u95f4\u8ddd\u8bbe\u4e3a 0\uff0c\u8ba9\u5b83\u5360\u6ee1\u7236\u5bb9\u5668\uff0c\u7136\u540e margin:auto \u81ea\u52a8\u8c03\u6574\u5916\u8fb9\u8ddd\u5b9e\u73b0\u5c45\u4e2d\n.div3{\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n// \u7b2c\u56db\u79cd\u65b9\u6cd5\uff0c\u6c34\u5e73\u5782\u76f4\u5c45\u4e2d\n// \u7edd\u5bf9\u5b9a\u4f4d\uff0cleft=top=50% \u8ba9\u5143\u7d20\u7684\u5de6\u4e0a\u89d2\u4e0e\u4e2d\u5fc3\u91cd\u5408\uff0c\u7136\u540e\u8981\u8c03\u6574\u5143\u7d20\u81ea\u8eab\u7684\u4f4d\u7f6e\u53bb\u5c45\u4e2d\n// \u5df2\u77e5\u5143\u7d20\u5bbd\u9ad8\uff0c\u53ef\u4ee5\u5c06 margin \u8bbe\u4e3a\u8d1f\u503c\u4f7f\u5176\u5f80\u5de6\u4e0a\u65b9\u79fb\u52a8\n// \u672a\u77e5\u5143\u7d20\u5bbd\u9ad8\uff0c\u53ef\u4ee5\u7528 transform: translate()\n.div4 {\n  width: $w;\n  height: $h;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  /* left \u548c top \u5c06 div \u5de6\u4e0a\u89d2\u79fb\u81f3\u4e2d\u5fc3 */\n\n  /* \u5df2\u77e5\u5bb9\u5668\u5bbd\u9ad8\uff0c\u901a\u8fc7 margin \u8bbe\u4e3a\u8d1f\u503c\u8ba9div\u5f80\u5de6\u4e0a\u65b9\u79fb\u52a8\uff0c\u4f7fdiv\u4e2d\u5fc3\u548c\u89c6\u56fe\u4e2d\u5fc3\u91cd\u5408 */\n  margin-left: -0.5 * $w;\n  margin-top: -0.5 * $h;\n\n  /* \u672a\u77e5\u5bb9\u5668\u5bbd\u9ad8 */\n  transform: translate(-50%, -50%)\n}\n\n// \u7b2c\u4e94\u79cd\u65b9\u6cd5\uff0c\u6c34\u5e73\u5782\u76f4\u5c45\u4e2d\n// flex \u5e03\u5c40\uff0c\u4fee\u6539\u5bb9\u5668\u7684 align-items \u548c justify-content\n.container {\n  display: flex;\n  align-items: center; // \u5782\u76f4\u5c45\u4e2d\n  justify-content: center; // \u6c34\u5e73\u5c45\u4e2d\n}\n")),(0,a.kt)("h2",{id:"3-position-\u5b9a\u4f4d"},"3. position \u5b9a\u4f4d"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"static\uff1a\u9ed8\u8ba4\u503c\uff0c\u672a\u5b9a\u4f4d"),(0,a.kt)("li",{parentName:"ol"},"absolute\uff1a\u76f8\u5bf9\u4e8e\u79bb\u5b83\u6700\u8fd1\u7684\u975e static \u7236\u5143\u7d20\u5b9a\u4f4d\uff0c\u5982\u679c\u6ca1\u6709\u5219\u76f8\u5bf9\u4e8e body \u5b9a\u4f4d\uff0c\u53d7\u6eda\u52a8\u5f71\u54cd\uff0c\u4f1a\u88ab\u7236\u5143\u7d20\u7684 padding \u5f71\u54cd\u521d\u59cb\u70b9"),(0,a.kt)("li",{parentName:"ol"},"fixed\uff1a\u76f8\u5bf9\u4e8e\u89c6\u56fe\u5b9a\u4f4d\uff0c\u4e0d\u53d7\u6eda\u52a8\u5f71\u54cd"),(0,a.kt)("li",{parentName:"ol"},"relative\uff1a\u76f8\u5bf9\u4e8e\u5143\u7d20\u81ea\u8eab\u7684\u539f\u4f4d\u7f6e\u5b9a\u4f4d"),(0,a.kt)("li",{parentName:"ol"},"inherit: \u4ece\u7236\u5143\u7d20\u7ee7\u627f position \u5c5e\u6027\u503c")),(0,a.kt)("h2",{id:"4-css-\u9009\u62e9\u5668"},"4. CSS \u9009\u62e9\u5668"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"id\u9009\u62e9\u5668\uff08#id\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u7c7b\u9009\u62e9\u5668\uff08.class\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6807\u7b7e\u9009\u62e9\u5668\uff08div, h1, p\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u540e\u4ee3\u9009\u62e9\u5668\uff08div p\uff09\uff1a\u7a7a\u683c\u9694\u5f00\uff0c\u8868\u793a\u9009\u62e9\u540e\u4ee3"),(0,a.kt)("li",{parentName:"ol"},"\u5b50\u5143\u7d20\u9009\u62e9\u5668\uff08div>p\uff09\uff1a\u5fc5\u987b\u662fdiv\u7684\u76f4\u63a5\u5b50\u5143\u7d20\uff0c\u4e0d\u80fd\u76f8\u9694"),(0,a.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u9009\u62e9\u5668\uff08a","[src]","\uff09\uff1a\u9009\u62e9\u5e26\u6709src\u5c5e\u6027\u7684a\u5143\u7d20\uff0c\u53ef\u6307\u5b9asrc\u7684\u503c\uff0c\u8fd9\u4e5f\u662f vue scoped \u7684\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("li",{parentName:"ol"},"\u4f2a\u7c7b\u9009\u62e9\u5668\uff08a:hover\uff09\uff1a\u5355\u5192\u53f7\uff0c\u5339\u914d\u5143\u7d20\u7684\u4e00\u4e9b\u7279\u6b8a\u72b6\u6001"),(0,a.kt)("li",{parentName:"ol"},"\u4f2a\u5143\u7d20\u9009\u62e9\u5668\uff08a::before\uff09\uff1a\u5339\u914d\u7279\u6b8a\u7684\u4f4d\u7f6e\uff0c\u5728\u8be5\u4f4d\u7f6e\u6dfb\u52a0\u4e00\u4e2a\u7279\u6b8a\u5b50\u5143\u7d20"),(0,a.kt)("li",{parentName:"ol"},"\u901a\u914d\u7b26\u9009\u62e9\u5668\uff08*\uff09\uff1a\u6240\u6709\u5143\u7d20")),(0,a.kt)("h2",{id:"5-css-\u9009\u62e9\u5668\u4f18\u5148\u7ea7"},"5. CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f53\u4e24\u4e2a\u89c4\u5219\u90fd\u4f5c\u7528\u5230\u540c\u4e00 DOM \u4e0a\uff0c\u4e14\u5176\u4e2d\u7684\u5c5e\u6027\u53d1\u751f\u51b2\u7a81\uff0c\u9996\u5148\u4f1a\u5224\u65ad\u662f\u5426\u6709 !important \u6700\u9ad8\u4f18\u5148\u7ea7\uff0c\u5426\u5219\u4f1a\u4f7f\u7528\u9009\u62e9\u5668\u4f18\u5148\u7ea7\u9ad8\u7684\u6837\u5f0f\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5668\u53ef\u4ee5\u5206\u4e3a 4 \u4e2a\u6743\u91cd",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u884c\u5185\u6837\u5f0f\uff081,0,0,0\uff09"),(0,a.kt)("li",{parentName:"ol"},"id \u9009\u62e9\u5668\uff080,1,0,0\uff09"),(0,a.kt)("li",{parentName:"ol"},"class \u9009\u62e9\u5668\u3001\u5c5e\u6027\u9009\u62e9\u5668\u3001\u4f2a\u7c7b\u9009\u62e9\u5668\uff080,0,1,0\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6807\u7b7e\u9009\u62e9\u5668\u3001\u4f2a\u5143\u7d20\u9009\u62e9\u5668\uff080,0,0,1\uff09"))),(0,a.kt)("li",{parentName:"ol"},"\u6837\u5f0f\u89c4\u5219\u6bcf\u51fa\u73b0\u4e00\u4e2a\u9009\u62e9\u5668\uff0c\u5c31\u5c06\u5b83\u4eec\u7684\u6743\u91cd\u8fdb\u884c\u540c\u7b49\u7ea7\u7684\u53e0\u52a0\uff0c\u4e0d\u80fd\u8fdb\u4f4d"),(0,a.kt)("li",{parentName:"ol"},"\u6bd4\u8f83\u4f18\u5148\u7ea7\u65f6\u4ece\u5de6\u5230\u53f3\u5f00\u59cb\u6bd4\u8f83\u53e0\u52a0\u6743\u91cd\u5927\u5c0f\uff0c\u5982\u679c\u4e24\u4e2a\u4f18\u5148\u7ea7\u76f8\u540c\uff0c\u5219\u6700\u540e\u51fa\u73b0\u7684\u4f18\u5148\u7ea7\u66f4\u9ad8\uff0c!important \u4e5f\u662f\u8fd9\u6837"),(0,a.kt)("li",{parentName:"ol"},"\uff01important \u4f18\u5148\u7ea7\u6700\u9ad8\uff0c\u901a\u914d\u7b26\u9009\u62e9\u5668\u548c\u7ee7\u627f\u6837\u5f0f\u662f\u6700\u4f4e\u7684\u4f18\u5148\u7ea7\uff0c\u4f46\u901a\u914d\u7b26\u6bd4\u7ee7\u627f\u9ad8\u4e00\u7ea7")),(0,a.kt)("h2",{id:"6-bfc"},"6. BFC"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"BFC \u6307\u7684\u662f\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587\uff0c\u4e00\u4e2a\u5143\u7d20\u5f62\u6210\u4e86 BFC \u4e4b\u540e\uff0c\u90a3\u4e48\u5b83\u5185\u90e8\u5143\u7d20\u4ea7\u751f\u7684\u5e03\u5c40\u4e0d\u4f1a\u5f71\u54cd\u5230\u5916\u90e8\u5143\u7d20\uff0c\u5916\u90e8\u5143\u7d20\u7684\u5e03\u5c40\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u5230 BFC \u4e2d\u7684\u5185\u90e8\u5143\u7d20\u3002\u4e00\u4e2a BFC \u5c31\u50cf\u662f\u4e00\u4e2a\u9694\u79bb\u533a\u57df\uff0c\u548c\u5176\u4ed6\u533a\u57df\u4e92\u4e0d\u5f71\u54cd\u3002BFC \u5143\u7d20\u4e0d\u4f1a\u88ab\u5916\u90e8\u6d6e\u52a8\u5143\u7d20\u5f71\u54cd\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u89e6\u53d1 BFC\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u4e00\u822c\u6765\u8bf4\u6839\u5143\u7d20\u662f\u4e00\u4e2a BFC \u533a\u57df"),(0,a.kt)("li",{parentName:"ol"},"\u6d6e\u52a8\uff0cfloat \u4e0d\u4e3a none"),(0,a.kt)("li",{parentName:"ol"},"\u7edd\u5bf9\u5b9a\u4f4d"),(0,a.kt)("li",{parentName:"ol"},"display \u4e3a inline-block \u6216 flex"),(0,a.kt)("li",{parentName:"ol"},"overflow \u4e0d\u4e3a visiable")))),(0,a.kt)("h2",{id:"7-\u9ad8\u5ea6\u574d\u584c--\u6e05\u9664\u6d6e\u52a8"},"7. \u9ad8\u5ea6\u574d\u584c / \u6e05\u9664\u6d6e\u52a8"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7236\u5143\u7d20\u6ca1\u6709\u8bbe\u7f6e\u9ad8\u5ea6\uff0c\u800c\u5b50\u5143\u7d20\u8bbe\u4e3a\u6d6e\u52a8\u8131\u79bb\u4e86\u6587\u6863\u6d41\uff0c\u6ca1\u6cd5\u6491\u5f00\u7236\u5143\u7d20\u7684\u9ad8\u5ea6\uff0c\u5bfc\u81f4\u7236\u5143\u7d20\u9ad8\u5ea6\u53d8\u4e3a 0\uff0c\u53d1\u751f\u9ad8\u5ea6\u574d\u584c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7528 clear \u5c5e\u6027\u6765\u6e05\u9664\u6d6e\u52a8\uff0cclear \u5c5e\u6027\u4e0d\u5141\u8bb8\u5de6\u4fa7\u6216\u53f3\u4fa7\u51fa\u73b0\u6d6e\u52a8\u5143\u7d20\uff0c\u5426\u5219\u81ea\u5df1\u5c31\u79fb\u52a8\u4e0b\u4e00\u884c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5b50\u5143\u7d20\u7684\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u4f2a\u5143\u7d20\uff0c\u8ba9\u5b83\u7531\u4e8e clear \u5bfc\u81f4\u4e0d\u80fd\u4e0e\u6d6e\u52a8\u5143\u7d20\u540c\u4e00\u884c\uff0c\u632a\u5230\u4e0b\u4e00\u884c\uff0c\u5b9e\u73b0\u4e86\u6491\u5f00\u7236\u5143\u7d20\u9ad8\u5ea6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* after\u5728\u5b50\u5143\u7d20\u7684\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a\u4f2a\u5143\u7d20 */\n.parent::after { \n  content: ''; /* \u5fc5\u9700 */\n  display: block; /* \u4f2a\u5143\u7d20\u9ed8\u8ba4\u662f\u884c\u5185\u5143\u7d20\uff0cclear\u53ea\u751f\u6548\u4e8e\u5757\u7ea7\u5143\u7d20 */\n  clear: both;\n}\n")),(0,a.kt)("h2",{id:"8-flex-\u5f39\u6027\u5e03\u5c40"},"8. flex \u5f39\u6027\u5e03\u5c40"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"flex \u662f CSS3 \u65b0\u589e\u7684\u5e03\u5c40\u65b9\u5f0f\uff0c\u5c06\u4e00\u4e2a\u5143\u7d20\u7684display \u5c5e\u6027\u8bbe\u4e3a flex \u4ece\u800c\u4f7f\u5b83\u6210\u4e3a flex \u5e03\u5c40\u5bb9\u5668\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bb9\u5668\u6709\u4e24\u6761\u8f74\uff0c\u4e00\u4e2a\u662f\u6c34\u5e73\u7684\u4e3b\u8f74\uff0c\u4e00\u4e2a\u4e0e\u4e3b\u8f74\u5782\u76f4\u7684\u4ea4\u53c9\u8f74\uff0c\u53ef\u901a\u8fc7 flex-direction \u5c5e\u6027\u6307\u5b9a\u4e3b\u8f74\u7684\u65b9\u5411\u3002"),(0,a.kt)("li",{parentName:"ol"},"justify-content \u53ef\u6307\u5b9a\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u6392\u5217\u65b9\u5f0f\uff1balign-items \u53ef\u6307\u5b9a\u5143\u7d20\u5728\u4ea4\u53c9\u8f74\u4e0a\u7684\u6392\u5217\u65b9\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u901a\u8fc7 flex-grow\u3001flex-shrink \u6765\u6307\u5b9a\u5f53\u6392\u5217\u7a7a\u95f4\u6709\u5269\u4f59\u65f6\uff0c\u5143\u7d20\u7684\u653e\u5927\u7f29\u5c0f\u6bd4\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5728\u5bb9\u5668\u4e0a\u7684\u5c5e\u6027\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"justify-content: \u5b50\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u6392\u5217\u65b9\u5f0f\uff0c\u5c45\u4e2d = center"),(0,a.kt)("li",{parentName:"ol"},"align-items: \u5b9a\u4e49\u4e3b\u8f74\u4e0a\u7684\u5143\u7d20\u5728\u4ea4\u53c9\u8f74\u4e0a\u5982\u4f55\u5bf9\u9f50\uff0c\u5c45\u4e2d = center"),(0,a.kt)("li",{parentName:"ol"},"flex-direction: \u4e3b\u8f74\u65b9\u5411"),(0,a.kt)("li",{parentName:"ol"},"flex-wrap: \u5f53\u4e00\u6839\u4e3b\u8f74\u653e\u4e0d\u4e0b\u65f6\u8be5\u5982\u4f55\u6362\u884c"),(0,a.kt)("li",{parentName:"ol"},"flex-flow: \u7b80\u5199 \u65b9\u5411+\u6362\u884c"),(0,a.kt)("li",{parentName:"ol"},"align-content: \u591a\u6839\u4e3b\u8f74\u5728\u5bb9\u5668\u4e2d\u5982\u4f55\u5bf9\u9f50"))),(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5728\u5143\u7d20\u4e0a\u7684\u5c5e\u6027\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"flex-grow: \u4e3b\u8f74\u7a7a\u95f4\u6709\u4f59\u65f6\u5143\u7d20\u653e\u5927\u6bd4\u4f8b\uff0c\u9ed8\u8ba4 0 \u4e0d\u653e\u5927"),(0,a.kt)("li",{parentName:"ol"},"flex-shrink: \u4e3b\u8f74\u7a7a\u95f4\u6709\u4f59\u65f6\u5143\u7d20\u7f29\u5c0f\u6bd4\u4f8b\uff0c\u9ed8\u8ba4 0 \u4e0d\u7f29\u5c0f"),(0,a.kt)("li",{parentName:"ol"},"flex-basis: \u4e3b\u8f74\u7a7a\u95f4\u5927\u5c0f\uff0c\u6839\u636e\u8fd9\u4e2a\u5c5e\u6027\u5224\u65ad\u662f\u5426\u6709\u591a\u4f59\u7a7a\u95f4\u8ba9\u5143\u7d20\u7f29\u653e\uff0c\u9ed8\u8ba4\u5360\u6ee1\u5bb9\u5668"),(0,a.kt)("li",{parentName:"ol"},"flex: \u7b80\u5199=\u653e\u5927+\u7f29\u5c0f+\u4e3b\u8f74\u7a7a\u95f4\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"flex: 1")," \u8868\u793a\u8be5\u5b50\u5143\u7d20\u6839\u636e\u5269\u4f59\u7a7a\u95f4\u81ea\u52a8\u653e\u5927\u7f29\u5c0f"),(0,a.kt)("li",{parentName:"ol"},"align-self: \u8986\u76d6\u5bb9\u5668\u7684 align-items\uff0c\u5141\u8bb8\u5355\u4e2a\u5143\u7d20\u6709\u4e0d\u540c\u7684\u4ea4\u53c9\u8f74\u5bf9\u9f50\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"order: \u6392\u5217\u987a\u5e8f\uff0c\u9ed8\u8ba4 0\uff0c\u5c0f\u7684\u5728\u524d")))),(0,a.kt)("h2",{id:"9-grid-\u7f51\u683c\u5e03\u5c40"},"9. grid \u7f51\u683c\u5e03\u5c40"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5728\u5bb9\u5668\u4e0a\u7684\u5c5e\u6027\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"grid-template-columns\uff1a\u5212\u5206\u5217\uff0c\u5c5e\u6027\u503c\u53ef\u4f7f\u7528\u5173\u952e\u5b57 repeat\uff0cauto-fill\uff0cauto\uff0cfr\uff0cminmax"),(0,a.kt)("li",{parentName:"ol"},"grid-template-rows\uff1a\u5212\u5206\u884c"),(0,a.kt)("li",{parentName:"ol"},"grid-auto-flow\uff1arow=\u5148\u884c\u540e\u5217\uff0ccolumn=\u5148\u5217\u540e\u884c"),(0,a.kt)("li",{parentName:"ol"},"justify-items\uff1a\u5355\u5143\u683c\u5185\u5bb9\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"align-items\uff1a\u5355\u5143\u683c\u5185\u5bb9\u5782\u76f4\u5bf9\u9f50\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"justify-content\uff1a\u6574\u4e2a\u5185\u5bb9\u533a\u57df\u5728\u5bb9\u5668\u5185\u7684\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"align-content\uff1a\u6574\u4e2a\u5185\u5bb9\u533a\u57df\u5728\u5bb9\u5668\u5185\u7684\u5782\u76f4\u5bf9\u9f50\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"place-content\uff1a\u7b80\u5199\uff0c\u6574\u4e2a\u5185\u5bb9\u533a\u57df\u5728\u5bb9\u5668\u5185\u7684\u6c34\u5e73\u5bf9\u9f50 + \u5782\u76f4\u5bf9\u9f50"))),(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5728\u5355\u5143\u683c\u4e0a\u7684\u5c5e\u6027\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"grid-column-start\uff1a\u4ece\u54ea\u4e00\u5217\u5f00\u59cb\uff0c\u53ef\u4f7f\u7528\u5173\u952e\u5b57 span \u8868\u793a\u8de8\u591a\u5c11\u4e2a\u683c"),(0,a.kt)("li",{parentName:"ol"},"grid-column-end\uff1a\u4ece\u54ea\u4e00\u5217\u7ed3\u675f"),(0,a.kt)("li",{parentName:"ol"},"grid-column\uff1a\u7b80\u5199\uff0c\u6240\u5360\u5217\u7684\u5f00\u59cb\u548c\u7ed3\u675f\uff0c\u4e2d\u95f4\u8981\u52a0\u659c\u6760 /"),(0,a.kt)("li",{parentName:"ol"},"grid-row-start\uff1a\u4ece\u54ea\u4e00\u884c\u5f00\u59cb"),(0,a.kt)("li",{parentName:"ol"},"grid-row-end\uff1a\u4ece\u54ea\u4e00\u884c\u7ed3\u675f"),(0,a.kt)("li",{parentName:"ol"},"grid-row\uff1a\u7b80\u5199\uff0c\u6240\u5360\u884c\u7684\u5f00\u59cb\u548c\u7ed3\u675f\uff0c\u4e2d\u95f4\u8981\u52a0\u659c\u6760 /"),(0,a.kt)("li",{parentName:"ol"},"justify-self\uff1a\u5355\u5143\u683c\u5185\u5bb9\u7684\u6c34\u5e73\u5bf9\u9f50\u65b9\u5f0f\uff0c\u8986\u76d6\u5bb9\u5668\u7684 justify-item"),(0,a.kt)("li",{parentName:"ol"},"align-self\uff1a\u5355\u5143\u683c\u5185\u5bb9\u7684\u5782\u76f4\u5bf9\u9f50\u65b9\u5f0f\uff0c\u8986\u76d6\u5bb9\u5668\u7684 align-item"),(0,a.kt)("li",{parentName:"ol"},"place-self\uff1a\u5355\u5143\u683c\u5185\u5bb9\u7684\u6c34\u5e73+\u5782\u76f4\u5bf9\u9f50\u65b9\u5f0f")))),(0,a.kt)("h2",{id:"10-\u5723\u676f\u5e03\u5c40\u548c\u53cc\u98de\u7ffc\u5e03\u5c40"},"10. \u5723\u676f\u5e03\u5c40\u548c\u53cc\u98de\u7ffc\u5e03\u5c40"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u76f8\u540c\u70b9\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u90fd\u662f\u5b9e\u73b0\u4e09\u5217\u5e03\u5c40\uff0c\u4e24\u8fb9\u56fa\u5b9a\u4e2d\u95f4\u81ea\u9002\u5e94"),(0,a.kt)("li",{parentName:"ol"},"\u90fd\u662f\u8ba9\u4e09\u5217\u6d6e\u52a8\uff0c\u7136\u540e\u901a\u8fc7\u8d1f\u5916\u8fb9\u8ddd\u5f62\u6210\u4e09\u5217\u5e03\u5c40"),(0,a.kt)("li",{parentName:"ol"},"\u90fd\u662f\u4e3b\u5217 dom \u653e\u5728\u6700\u524d\u9762\uff0c\u8ba9\u5b83\u4f18\u5148\u52a0\u8f7d"))),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5982\u4f55\u5904\u7406\u4e2d\u95f4\u4e3b\u5217\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5723\u676f\u5e03\u5c40\u662f\u5229\u7528\u7236\u5bb9\u5668\u7684\u5185\u8fb9\u8ddd + \u5de6\u53f3\u4e24\u5217\u76f8\u5bf9\u5b9a\u4f4d\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u53cc\u98de\u7ffc\u5e03\u5c40\u662f\u628a\u4e3b\u5217\u5185\u5bb9\u653e\u5728\u4e3b\u5217\u5b50\u5143\u7d20\u4e2d\uff0c\u5229\u7528\u8fd9\u4e2a\u5b50\u5143\u7d20\u7684\u5916\u8fb9\u8ddd\u8fdb\u884c\u8c03\u6574"))),(0,a.kt)("li",{parentName:"ol"},"\u7f3a\u70b9\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5723\u676f\u5e03\u5c40\u7f3a\u70b9\uff1acenter \u90e8\u5206\u7684\u6700\u5c0f\u5bbd\u5ea6\u4e0d\u80fd\u5c0f\u4e8e left \u90e8\u5206\u7684\u5bbd\u5ea6\uff0c\u5426\u5219\u4f1a left \u90e8\u5206\u6389\u5230\u4e0b\u4e00\u884c"),(0,a.kt)("li",{parentName:"ol"},"\u53cc\u98de\u7ffc\u5e03\u5c40\u7f3a\u70b9\uff1a\u591a\u52a0\u4e86\u4e00\u5c42 dom \u8282\u70b9\uff0c\u589e\u52a0\u4e86\u6e32\u67d3\u7684\u8ba1\u7b97\u91cf"))),(0,a.kt)("li",{parentName:"ol"},"\u5723\u676f\u5e03\u5c40\u6b65\u9aa4",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u5bb9\u5668\u548c\u5de6\u4e2d\u53f3\u5206\u522b\u8bbe\u7f6e\u7edf\u4e00\u9ad8\u5ea6\u548c\u5de6\u53f3\u56fa\u5b9a\u5bbd\u5ea6\uff0c\u4e2d\u5bbd\u5ea6 100%\uff0c\u82e5\u5bb9\u5668\u4e0d\u8bbe\u9ad8\u5ea6\u4f1a\u56e0\u4e3a\u5b50\u5143\u7d20\u5168\u90e8\u6d6e\u52a8\u5bfc\u81f4\u9ad8\u5ea6\u574d\u584c"),(0,a.kt)("li",{parentName:"ol"},"\u5de6\u4e2d\u53f3\u5168\u90e8 float:left\uff0c\u6b64\u65f6\u4e2d\u95f4\u72ec\u5360\u4e00\u884c\uff0c\u5de6\u53f3\u88ab\u6324\u5230\u4e0b\u4e00\u884c"),(0,a.kt)("li",{parentName:"ol"},"\u5de6\u5217\u7684 margin-left \u8bbe\u4e3a -100% \u8d34\u7740\u4e3b\u5217\u7684\u5de6\u8fb9\u7f18\uff1b\u53f3\u5217\u7684 margin-left \u8bbe\u4e3a\u8d1f\u7684\u81ea\u8eab\u5bbd\u5ea6\uff0c\u8d34\u7740\u4e3b\u5217\u7684\u53f3\u8fb9\u7f18\uff1b\u6b64\u65f6\u5de6\u53f3\u5217\u90fd\u5728\u4e3b\u5217\u5185\u90e8\uff0c\u906e\u6321\u4e86\u4e3b\u5217\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u5de6\u548c\u53f3\u8bbe\u7f6e\u76f8\u5bf9\u5b9a\u4f4d\uff0c\u5e76\u5206\u522b\u901a\u8fc7 left \u548c right \u8bbe\u8d1f\u503c\uff0c\u4f7f\u5176\u4e0d\u4e0e\u4e2d\u95f4\u90e8\u5206\u76f8\u4ea4"),(0,a.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u4e2d\u95f4 100% \u5bbd\u5ea6\u5c06\u5de6\u53f3\u6324\u5230\u89c6\u56fe\u5916\uff0c\u4e3a\u5bb9\u5668\u8bbe\u7f6e\u5185\u8fb9\u8ddd\u4e3a\u5de6\u53f3\u5217\u7684\u5bbd\u5ea6\uff0c\u4e3a\u5de6\u53f3\u817e\u51fa\u4f4d\u7f6e"))),(0,a.kt)("li",{parentName:"ol"},"\u53cc\u98de\u7ffc\u5e03\u5c40\u6b65\u9aa4",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u540c\u5723\u676f\u5e03\u5c40\u524d3\u6b65\uff0c\u4f7f left \u548c right \u4e0e center \u540c\u4e00\u884c\uff0c\u6b64\u65f6 left \u548c right \u4f1a\u906e\u6321 center \u90e8\u5206\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a center \u8bbe\u7f6e\u5b50\u5143\u7d20\uff0c\u5e76\u8bbe\u7f6e margin \u8ba9\u5b50\u5143\u7d20\u4e0d\u88ab\u5de6\u53f3\u5217\u906e\u6321")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"$h: 500px; //  \u7edf\u4e00\u9ad8\u5ea6\n$lw: 100px; // \u5de6\u56fa\u5b9a\u5bbd\u5ea6\n$rw: 200px; // \u53f3\u56fa\u5b9a\u5bbd\u5ea6\n\n.container{\n  height: $h; // \uff081\uff09\u8bbe\u5b9a\u9ad8\u5ea6\n  padding-left: $lw; // \uff085\uff09\u901a\u8fc7\u8bbe\u7f6e\u5185\u8fb9\u8ddd\u538b\u7f29center\u5bbd\u5ea6\uff0c\u4e3aleft\u817e\u51fa\u7a7a\u95f4\n  padding-right: $rw; // \uff085\uff09\u901a\u8fc7\u8bbe\u7f6e\u5185\u8fb9\u8ddd\u538b\u7f29center\u5bbd\u5ea6\uff0c\u4e3aright\u817e\u51fa\u7a7a\u95f4\n}\n.left{\n  height: $h; // \uff081\uff09\u8bbe\u5b9a\u9ad8\u5ea6\n  width: $lw; // \uff081\uff09\u8bbe\u5b9a\u5de6\u56fa\u5b9a\u5bbd\u5ea6\n  float: left; // \uff082\uff09\u5de6\u4e2d\u53f3\u5168\u90e8\u5411\u5de6\u6d6e\u52a8\n  margin-left: -100%; // \uff083\uff09center\u5bbd\u5ea6100%\uff0c\u4f7fleft\u7684\u5de6\u8fb9\u7f18\u4e0ecenter\u7684\u5de6\u8fb9\u7f18\u91cd\u5408\n  position: relative; // \uff084\uff09\u76f8\u5bf9\u5b9a\u4f4dleft\u5c5e\u6027\u624d\u4f1a\u751f\u6548\n  left: (-$lw); // \uff084\uff09left\u8bbe\u8d1f\u503c\u5411\u5de6\u79fb\u52a8\uff0c\u4f7fleft\u7684\u53f3\u8fb9\u7f18\u4e0ecenter\u5de6\u8fb9\u7f18\u91cd\u5408\n}\n.right{\n  height: $h; // \uff081\uff09\u8bbe\u5b9a\u9ad8\u5ea6\n  width: $rw; // \uff081\uff09\u8bbe\u5b9a\u53f3\u56fa\u5b9a\u5bbd\u5ea6\n  float: left; // \uff082\uff09\u5de6\u4e2d\u53f3\u5168\u90e8\u5411\u5de6\u6d6e\u52a8\n  margin-left: (-$rw); // \uff083\uff09\u5411\u5de6\u79fb\u52a8right\u7684\u5bbd\u5ea6\uff0c\u4f7fright\u7684\u53f3\u8fb9\u7f18\u4e0ecenter\u7684\u53f3\u8fb9\u7f18\u91cd\u5408\n  position: relative; // \uff084\uff09\u76f8\u5bf9\u5b9a\u4f4dright\u5c5e\u6027\u624d\u4f1a\u751f\u6548\n  right: (-$rw); // \uff084\uff09right\u8bbe\u8d1f\u503c\u5411\u53f3\u79fb\u52a8\uff0c\u4f7fright\u7684\u5de6\u8fb9\u7f18\u4e0ecenter\u7684\u53f3\u8fb9\u7f18\u91cd\u5408\n}\n.center{\n  height: $h; // \uff081\uff09\u8bbe\u5b9a\u9ad8\u5ea6\n  width: 100%; // \uff081\uff09center\u81ea\u9002\u5e94\u5bbd\u5ea6\n  float: left; // \uff082\uff09\u5de6\u4e2d\u53f3\u5168\u90e8\u5411\u5de6\u6d6e\u52a8\n}\n// \u5982\u679c\u4f7f\u7528\u53cc\u98de\u7ffc\u5e03\u5c40\uff0c\u9700\u8981\u4e3acenter\u6dfb\u52a0\u4e00\u4e2a\u5b50\u5143\u7d20\uff0c\u4e14\u4e0d\u6267\u884c\uff084\uff09\uff085\uff09\u8fd9\u4e24\u6b65\n.center .inner{\n  margin-left: $lw;\n  margin-right: $rw;\n}\n")),(0,a.kt)("h2",{id:"11-css-\u753b\u4e09\u89d2\u5f62"},"11. CSS \u753b\u4e09\u89d2\u5f62"),(0,a.kt)("p",null,"\u5229\u7528\u4e86\u5f53\u5bbd\u9ad8\u4e3a 0 \u65f6\uff0c\u56db\u4e2a\u8fb9\u6846\u5c31\u53d8\u6210\u4e86\u56db\u4e2a\u4e09\u89d2\u5f62"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".triangle {\n  /* \u5bbd\u9ad8\u8bbe\u4e3a 0 */\n  /* \u8bbe\u8fb9\u754c\u7684\u5bbd\u5ea6\u5e76\u8bbe\u4e3a\u900f\u660e */\n  /* \u8bbe\u7f6e\u60f3\u8981\u7684\u4e09\u89d2\u5f62\u7684\u989c\u8272 */\n  width: 0;\n  height: 0;\n  border: 60px solid transparent;\n  border-bottom-color: lightblue;\n}\n")),(0,a.kt)("h2",{id:"12-margin-\u91cd\u53e0\u95ee\u9898"},"12. margin \u91cd\u53e0\u95ee\u9898"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6307\u7684\u662f\u5782\u76f4\u65b9\u5411\u4e0a\u4e24\u4e2a\u76f8\u90bb\u5143\u7d20\u7684 margin \u53d1\u751f\u91cd\u53e0\uff0c\u5206\u4e3a\u56db\u79cd\u60c5\u51b5"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u79cd\u60c5\u51b5\uff1a\u76f8\u90bb\u5144\u5f1f\u5143\u7d20\u7684 margin \u91cd\u53e0\uff0c\u53ef\u4ee5\u53ea\u8bbe\u7f6e\u4e00\u4e2a\u60f3\u8981\u7684\u5916\u8fb9\u8ddd\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5176\u4e2d\u4e00\u4e2a\u5143\u7d20\u653e\u5165 BFC\uff0c\u591a\u52a0\u4e00\u5c42 div \u5e76\u8bbe\u65b0\u7684 div \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"overflow:auto"),"\uff0c\u4f46\u8fd9\u6837\u4f1a\u6539\u53d8\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u79cd\u60c5\u51b5\uff1a\u7236\u5143\u7d20\u548c\u5b50\u5143\u7d20\u7684 margin-top \u91cd\u53e0\uff0c\u53ef\u4ee5\u8ba9\u7236\u5143\u7d20\u5f62\u6210BFC\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u7236\u5143\u7d20\u8bbe\u7f6e padding-top\u3001border-top \u6765\u5c06\u5b83\u4eec\u5206\u9694\u5f00"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u79cd\u60c5\u51b5\uff1a\u9ad8\u5ea6\u4e3a auto \u7684\u7236\u5143\u7d20\u4e0e\u5b50\u5143\u7d20\u7684 margin-bottom \u91cd\u53e0\uff0c\u53ef\u4ee5\u6fc0\u6d3b\u7236\u5143\u7d20\u7684BFC\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u7236\u5143\u7d20\u8bbe\u7f6e padding-bottom\u3001border-bottom \u6765\u5c06\u5b83\u4eec\u5206\u9694\u5f00"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u56db\u79cd\u60c5\u51b5\uff1a\u6ca1\u6709\u5185\u5bb9\u7684\u5143\u7d20\uff0c\u81ea\u8eab\u7684 margin-top \u548c margin-bottom \u91cd\u53e0\uff0c\u53ef\u4ee5\u7ed9\u5b83\u8bbe\u7f6e border\u3001padding-top\u3001padding-bottom \u6216\u8005 height \u6765\u89e3\u51b3")),(0,a.kt)("h2",{id:"13-sass--scss-\u7528\u6cd5"},"13. SASS / SCSS \u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"// \u58f0\u660e\u53d8\u91cf\n$width: 100px;\n\n// \u5d4c\u5957\u9009\u62e9\u5668\n.parent {\n   // \u7528 & \u5f15\u7528\u7236\u7c7b\n   // \u76f8\u5f53\u4e8e .parent:hover\n   &:hover {\n\n   }\n}\n\n// \u652f\u6301\u53cc\u659c\u6760\u6ce8\u91ca\n\n// mixin \u58f0\u660e\u4e00\u6bb5\u53ef\u91cd\u7528\u7684\u6837\u5f0f\n@mixin center {}\n// include \u5f15\u5165\u53ef\u91cd\u7528\u7684\u6837\u5f0f\n.div {\n   @include center\n}\n")))}c.isMDXComponent=!0}}]);