"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[5203],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(t),c=r,k=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={},i="\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11 \u8cc7\u6599",p={unversionedId:"farmer/updateOne",id:"farmer/updateOne",title:"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11 \u8cc7\u6599",description:"\u66f4\u65b0\u4e00\u500b\u5951\u4f5c\u8fb2\u6c11\u8cc7\u6599",source:"@site/docs/farmer/updateOne.md",sourceDirName:"farmer",slug:"/farmer/updateOne",permalink:"/docs/farmer/updateOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/farmer/updateOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b Farmer \u5167\u5bb9",permalink:"/docs/farmer/getOne"},next:{title:"\u589e\u52a0\u4e00\u500b \u80a5\u6599\u7a2e\u985e",permalink:"/docs/fert/addOne"}},o={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],d={toc:u},m="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u66f4\u65b0\u4e00\u500b-\u5951\u4f5c\u8fb2\u6c11-\u8cc7\u6599"},"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11 \u8cc7\u6599"),(0,r.kt)("p",null,"\u66f4\u65b0\u4e00\u500b\u5951\u4f5c\u8fb2\u6c11\u8cc7\u6599"),(0,r.kt)("p",null,"PATH: ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/farmer/updateOne"),(0,r.kt)("br",{parentName:"p"}),"\n","Method: ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")),(0,r.kt)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid"),": \u5951\u4f5c\u8fb2\u6c11\u7684 uuid (",(0,r.kt)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u66f4\u65b0"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": \u5f85\u66f4\u65b0\u7684\u8eab\u5206\u8b49 (",(0,r.kt)("inlineCode",{parentName:"li"},"\u9700\u525b\u597d10\u500b\u5b57"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": \u5f85\u66f4\u65b0\u7684\u8fb2\u6c11\u540d\u7a31 (",(0,r.kt)("inlineCode",{parentName:"li"},"\u6700\u592720\u500b\u5b57"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"phone"),": \u5f85\u66f4\u65b0\u7684\u8fb2\u6c11\u96fb\u8a71\u865f\u78bc (\u5bb6\u7528\u6216\u624b\u6a5f) (",(0,r.kt)("inlineCode",{parentName:"li"},"\u6700\u592720\u500b\u5b57"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address"),": \u5f85\u66f4\u65b0\u7684\u8fb2\u6c11\u5730\u5740 (",(0,r.kt)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number,\n    "id": string,\n    "name": string,\n    "phone": string,\n    "address": string,\n}\n')),(0,r.kt)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,r.kt)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6210\u529f\u66f4\u65b0\u7684 \u5951\u4f5c\u8fb2\u6c11 \u8cc7\u6599  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,r.kt)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"200"),(0,r.kt)("li",{parentName:"ul"},"400")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,r.kt)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"DATA_NOT_FOUND"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"DATA_CONFLICT"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"SAME_DATA"'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "uuid": number,\n            "id": string,\n            "name": string,\n            "phone": string,\n            "address": string,\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u6210\u529f\u66f4\u65b0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u6210\u529f\u66f4\u65b0\u5f8c\u7684\u8cc7\u6599  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 12,\n            "id": "A123456789",\n            "name": "\u65b9O\u6d0b",\n            "phone": "07-1234567",\n            "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,r.kt)("p",null,"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')),(0,r.kt)("p",null,"\u5f85\u66f4\u65b0\u7684\u8cc7\u6599\u8207\u539f\u6709\u8cc7\u6599\u5eab\u7684\u5176\u4ed6\u8cc7\u6599\u76f8\u540c",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u8cc7\u6599\u5eab\u4e2d\u76f8\u540c\u7684\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_CONFLICT",\n    "data": [\n        {\n            "uuid": 100,\n            "id": "T100424178",\n            "name": "\u838aO\u57ce",\n            "phone": "07-1234567",\n            "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u5f85\u66f4\u65b0\u7684\u8cc7\u6599\u8207\u820a\u6709\u7684\u8cc7\u6599\u76f8\u540c",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u820a\u6709\u7684\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SAME_DATA",\n    "data": [\n        {\n            "uuid": 207,\n            "id": "T100424178",\n            "name": "\u838aO\u57ce",\n            "phone": "07-1234567",\n            "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n        }\n    ]\n}\n')))}s.isMDXComponent=!0}}]);