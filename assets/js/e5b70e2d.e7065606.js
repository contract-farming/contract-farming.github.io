"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[3403],{5680:(e,n,r)=>{r.d(n,{xA:()=>y,yg:()=>u});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),d=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},y=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),m=d(r),c=t,u=m["".concat(p,".").concat(c)]||m[c]||g[c]||l;return r?a.createElement(u,i(i({ref:n},y),{},{components:r})):a.createElement(u,i({ref:n},y))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:t,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},863:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(8168),t=(r(6540),r(5680));const l={},i="\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11",o={unversionedId:"\u5951\u4f5c/farmer/addOne",id:"\u5951\u4f5c/farmer/addOne",title:"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11",description:"\u589e\u52a0\u4e00\u500b\u5951\u4f5c\u8fb2\u6c11",source:"@site/docs/\u5951\u4f5c/farmer/addOne.md",sourceDirName:"\u5951\u4f5c/farmer",slug:"/\u5951\u4f5c/farmer/addOne",permalink:"/docs/next/\u5951\u4f5c/farmer/addOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/farmer/addOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e \u8cc7\u6599",permalink:"/docs/next/\u5951\u4f5c/crop/updateOne"},next:{title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u5951\u4f5c\u8fb2\u6c11",permalink:"/docs/next/\u5951\u4f5c/farmer/deleteOne"}},p={},d=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u65b0\u589e",id:"\u6210\u529f\u65b0\u589e",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u5df2\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u5df2\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],y={toc:d},m="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(m,(0,a.A)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u589e\u52a0\u4e00\u500b-\u5951\u4f5c\u8fb2\u6c11"},"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11"),(0,t.yg)("p",null,"\u589e\u52a0\u4e00\u500b\u5951\u4f5c\u8fb2\u6c11"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/farmer/addOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"POST"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"identity_number"),": \u8eab\u5206\u8b49 (",(0,t.yg)("inlineCode",{parentName:"li"},"\u9700\u525b\u597d10\u500b\u5b57"),") (",(0,t.yg)("inlineCode",{parentName:"li"},"VARCHAR(10)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name"),": \u8fb2\u6c11\u540d\u7a31 (",(0,t.yg)("inlineCode",{parentName:"li"},"VARCHAR(32)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"phone"),": \u8fb2\u6c11\u96fb\u8a71\u865f\u78bc (\u5bb6\u7528\u6216\u624b\u6a5f) (",(0,t.yg)("inlineCode",{parentName:"li"},"VARCHAR(32)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"address"),": \u8fb2\u6c11\u5730\u5740 (",(0,t.yg)("inlineCode",{parentName:"li"},"VARCHAR(255)"),")")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "identity_number": string,\n    "name": string,\n    "phone": string,\n    "address": string,\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/next/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATA_EXISTED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u65b0\u589e"},"\u6210\u529f\u65b0\u589e"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u5df2\u5b58\u5728\u8a72\u8cc7\u6599"},"\u5df2\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("p",null,"\u5f85\u6dfb\u52a0\u7684\u8cc7\u6599\u5df2\u5b58\u5728\u8cc7\u6599\u5eab\u4e2d",(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u5df2\u5b58\u5728\u8cc7\u6599\u5eab\u7684\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_EXISTED,\n    "data": [\n        {\n            "id": 206,\n            "identity_number": "A123457896",\n            "name": "\u838aO\u57ce",\n            "phone": "07-1234567",\n            "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}g.isMDXComponent=!0}}]);