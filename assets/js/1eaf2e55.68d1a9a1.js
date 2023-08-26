"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e",p={unversionedId:"crop/deleteOne",id:"crop/deleteOne",title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e",description:"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u4f5c\u7269\u54c1\u7a2e",source:"@site/docs/crop/deleteOne.md",sourceDirName:"crop",slug:"/crop/deleteOne",permalink:"/docs/crop/deleteOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/crop/deleteOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API \u6587\u6a94",permalink:"/docs/home"},next:{title:"\u7372\u53d6 \u4f5c\u7269\u54c1\u7a2e \u6240\u6709\u5167\u5bb9",permalink:"/docs/crop/getAll"}},i={},c=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],u={toc:c},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u522a\u9664\u5176\u4e2d\u4e00\u500b-\u4f5c\u7269\u54c1\u7a2e"},"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e"),(0,a.kt)("p",null,"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u4f5c\u7269\u54c1\u7a2e"),(0,a.kt)("p",null,"PATH: ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/crop/deleteOne"),(0,a.kt)("br",{parentName:"p"}),"\n","Method: ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": \u5f85\u522a\u9664\u7684 \u4f5c\u7269\u54c1\u7a2e \u540d\u7a31")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "name": string\n}\n')),(0,a.kt)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.kt)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6210\u529f\u522a\u9664\u7684 \u4f5c\u7269\u54c1\u7a2e \u8cc7\u6599  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,a.kt)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"200"),(0,a.kt)("li",{parentName:"ul"},"400")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,a.kt)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"DATA_NOT_FOUND"'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "uuid": number,\n            "name": string,\n            "unit_yield": number,\n            "unit": number\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u6210\u529f\u522a\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 1,\n            "name": "\u9ad8\u96c4145",\n            "unit_yield": 30,\n            "unit": 1\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,a.kt)("p",null,"\u672a\u627e\u5230\u8a72\u8cc7\u6599"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')))}s.isMDXComponent=!0}}]);