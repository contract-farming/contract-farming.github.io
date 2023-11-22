"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[6242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u80a5\u6599\u7a2e\u985e \u5167\u5bb9",p={unversionedId:"fert/getOne",id:"fert/getOne",title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u80a5\u6599\u7a2e\u985e \u5167\u5bb9",description:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u80a5\u6599\u7a2e\u985e\u5167\u5bb9",source:"@site/docs/fert/getOne.md",sourceDirName:"fert",slug:"/fert/getOne",permalink:"/docs/fert/getOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/fert/getOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6 \u80a5\u6599\u7a2e\u985e \u6240\u6709\u5167\u5bb9",permalink:"/docs/fert/getAll"},next:{title:"\u66f4\u65b0\u4e00\u500b \u80a5\u6599\u7a2e\u985e \u8cc7\u6599",permalink:"/docs/fert/updateOne"}},i={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],c={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b-\u80a5\u6599\u7a2e\u985e-\u5167\u5bb9"},"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u80a5\u6599\u7a2e\u985e \u5167\u5bb9"),(0,a.kt)("p",null,"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u80a5\u6599\u7a2e\u985e\u5167\u5bb9"),(0,a.kt)("p",null,"PATH: ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/fert/getOne"),(0,a.kt)("br",{parentName:"p"}),"\n","Method: ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uuid"),": \u80a5\u6599\u7a2e\u985e\u7684 uuid ")),(0,a.kt)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.kt)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u7684 \u80a5\u6599\u7a2e\u985e \u8cc7\u6599  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": \u80a5\u6599\u7a2e\u985e\u540d\u7a31")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,a.kt)("inlineCode",{parentName:"a"},"StatusCode")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,a.kt)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "uuid": number,\n            "name": string\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u5b58\u5728\u8a72\u8cc7\u6599"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 1,\n            "name": "\u80a5\u6599\u4e00\u865f"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,a.kt)("p",null,"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')))}d.isMDXComponent=!0}}]);