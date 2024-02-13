"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[9836],{5788:(e,n,r)=>{r.d(n,{Iu:()=>g,yg:()=>s});var a=r(1504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),u=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},g=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=t,s=m["".concat(p,".").concat(c)]||m[c]||y[c]||l;return r?a.createElement(s,o(o({ref:n},g),{},{components:r})):a.createElement(s,o({ref:n},g))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:t,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4436:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(5072),t=(r(1504),r(5788));const l={},o="\u7372\u53d6\u5176\u4e2d\u4e00\u500b Farmer \u5167\u5bb9",i={unversionedId:"\u5951\u4f5c/farmer/getOne",id:"\u5951\u4f5c/farmer/getOne",title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b Farmer \u5167\u5bb9",description:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b Farmer \u5167\u5bb9",source:"@site/docs/\u5951\u4f5c/farmer/getOne.md",sourceDirName:"\u5951\u4f5c/farmer",slug:"/\u5951\u4f5c/farmer/getOne",permalink:"/docs/\u5951\u4f5c/farmer/getOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/farmer/getOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6 Farmer Table",permalink:"/docs/\u5951\u4f5c/farmer/getAll"},next:{title:"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11 \u8cc7\u6599",permalink:"/docs/\u5951\u4f5c/farmer/updateOne"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],g={toc:u},m="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(m,(0,a.c)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b-farmer-\u5167\u5bb9"},"\u7372\u53d6\u5176\u4e2d\u4e00\u500b Farmer \u5167\u5bb9"),(0,t.yg)("p",null,"\u7372\u53d6\u5176\u4e2d\u4e00\u500b Farmer \u5167\u5bb9"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/farmer/getOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"GET"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"uuid"),": \u5951\u4f5c\u8fb2\u6c11\u7684 uuid")),(0,t.yg)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u7684 farmer \u8cc7\u6599  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"id"),": \u8eab\u5206\u8b49"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name"),": \u8fb2\u6c11\u540d\u7a31"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"phone"),": \u8fb2\u6c11\u96fb\u8a71\u865f\u78bc (\u5bb6\u7528\u6216\u624b\u6a5f)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"address"),": \u8fb2\u6c11\u5730\u5740")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,t.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"200"),(0,t.yg)("li",{parentName:"ul"},"500")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"QUERY_FAILED"'))),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#phonenumber"},(0,t.yg)("inlineCode",{parentName:"a"},"PhoneNumber")),"  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "uuid": number,\n            "id": string,\n            "name": string,\n            "phone": PhoneNumber,\n            "address": string\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("p",null,"\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 35,\n            "id": "A123456789",\n            "name": "\u65b9O\u6d0b",\n            "phone": "07-1234567",\n            "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,t.yg)("p",null,"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')),(0,t.yg)("p",null,"Server \u932f\u8aa4  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": "QUERY_FAILED",\n    "data": []\n}\n')))}y.isMDXComponent=!0}}]);