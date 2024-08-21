"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[9490],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=u(r),d=a,m=y["".concat(p,".").concat(d)]||y[d]||g[d]||l;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},625:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=r(8168),a=(r(6540),r(5680));const l={},i="\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e \u5167\u5bb9",o={unversionedId:"\u5951\u4f5c/crop/getOne",id:"\u5951\u4f5c/crop/getOne",title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e \u5167\u5bb9",description:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u4f5c\u7269\u54c1\u7a2e\u5167\u5bb9",source:"@site/docs/\u5951\u4f5c/crop/getOne.md",sourceDirName:"\u5951\u4f5c/crop",slug:"/\u5951\u4f5c/crop/getOne",permalink:"/docs/next/\u5951\u4f5c/crop/getOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/crop/getOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6 \u4f5c\u7269\u54c1\u7a2e \u6240\u6709\u5167\u5bb9",permalink:"/docs/next/\u5951\u4f5c/crop/getAll"},next:{title:"\u66f4\u65b0\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e \u8cc7\u6599",permalink:"/docs/next/\u5951\u4f5c/crop/updateOne"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u56de\u50b3",id:"\u6210\u529f\u56de\u50b3",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],c={toc:u},y="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b-\u4f5c\u7269\u54c1\u7a2e-\u5167\u5bb9"},"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e \u5167\u5bb9"),(0,a.yg)("p",null,"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u4f5c\u7269\u54c1\u7a2e\u5167\u5bb9"),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/crop/getOne"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"GET"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,a.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"uuid"),": \u4f5c\u7269\u54c1\u7a2e\u7684 uuid")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number\n}\n')),(0,a.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u7684 \u4f5c\u7269\u54c1\u7a2e \u8cc7\u6599  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name"),": \u4f5c\u7269\u54c1\u7a2e\u540d\u7a31"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"unit_yield"),": \u55ae\u4f4d\u9762\u7a4d\u9810\u4f30\u7522\u91cf"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"unit"),": \u7522\u91cf\u55ae\u4f4d (1: \u53f0\u65a4, 2: \u516c\u65a4)")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/next/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,a.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("h3",{id:"\u6210\u529f\u56de\u50b3"},"\u6210\u529f\u56de\u50b3"),(0,a.yg)("p",null,"\u683c\u5f0f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "uuid": number,\n            "name": string,\n            "unit_yield": number,\n            "unit": number\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"\u7bc4\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "uuid": 1,\n            "name": "\u9ad8\u96c4145",\n            "unit_yield": 30,\n            "unit": 1\n        }\n    ]\n}\n')),(0,a.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"},"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}g.isMDXComponent=!0}}]);