"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[836],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),s=r,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},225:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={},i="\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599",o={unversionedId:"contract/updateOne",id:"contract/updateOne",title:"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599",description:"\u66f4\u65b0\u4e00\u500b\u5951\u4f5c\u5408\u7d04\u8cc7\u6599",source:"@site/docs/contract/updateOne.md",sourceDirName:"contract",slug:"/contract/updateOne",permalink:"/docs/contract/updateOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/contract/updateOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730",permalink:"/docs/contract/query/getAllCl"},next:{title:"\u589e\u52a0\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e",permalink:"/docs/crop/addOne"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],c={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u66f4\u65b0\u4e00\u500b-\u5951\u4f5c\u5408\u7d04-\u8cc7\u6599"},"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599"),(0,r.kt)("p",null,"\u66f4\u65b0\u4e00\u500b\u5951\u4f5c\u5408\u7d04\u8cc7\u6599"),(0,r.kt)("p",null,"PATH: ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/contract/updateOne"),(0,r.kt)("br",{parentName:"p"}),"\n","Method: ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid"),": \u5951\u4f5c\u5408\u7d04\u7684 uuid (",(0,r.kt)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u66f4\u65b0"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year"),": \u5e74\u5ea6                     ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0-65535"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no"),": \u671f\u865f \u4e00\u5e74\u6709\u4e09\u671f             ","[",(0,r.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"farmer"),": \u5f15\u7528\u5951\u4f5c\u8fb2\u6c11\u7684 uuid"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"finish"),": \u662f\u5426\u7d50\u6848 (Y/N)          ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number,\n    "year": number;     // [`0-65535`]\n    "no": number;       // [`1`, `2`, `3`]\n    "farmer": number;   // farmer uuid\n    "finish": number;   // [0, 1]   (Y/N)\n}\n')),(0,r.kt)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,r.kt)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6210\u529f\u66f4\u65b0\u7684 \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,r.kt)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"200"),(0,r.kt)("li",{parentName:"ul"},"400")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,r.kt)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"DATA_NOT_FOUND"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"FK_NOT_FOUND"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"SAME_DATA"'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "uuid": number,\n            "year": number,\n            "no": number,\n            "farmer": number,\n            "finish": number\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u6210\u529f\u66f4\u65b0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u6210\u529f\u66f4\u65b0\u5f8c\u7684\u8cc7\u6599  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 3,\n            "year": 2020,\n            "no": 2,\n            "farmer": 190,\n            "finish": 1\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,r.kt)("p",null,"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')),(0,r.kt)("p",null,"\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728\u65bc\u8cc7\u6599\u5eab\u4e2d\u5247\u56de\u50b3 ",(0,r.kt)("inlineCode",{parentName:"p"},"FK_NOT_FOUND"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u4e0d\u5b58\u5728\u7684 farmer uuid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "FK_NOT_FOUND",\n    "data": [\n        {\n            "uuid": 1000,\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u5f85\u66f4\u65b0\u7684\u8cc7\u6599\u8207\u820a\u6709\u7684\u8cc7\u6599\u76f8\u540c",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u820a\u6709\u7684\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SAME_DATA",\n    "data": [\n        {\n            "uuid": 4,\n            "year": 2020,\n            "no": 2,\n            "farmer": 190,\n            "finish": 1\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);