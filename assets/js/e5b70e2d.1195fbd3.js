"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[9188],{5788:(e,n,a)=>{a.d(n,{Iu:()=>g,yg:()=>m});var r=a(1504);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),d=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=d(a),s=t,m=u["".concat(p,".").concat(s)]||u[s]||y[s]||l;return a?r.createElement(m,i(i({ref:n},g),{},{components:a})):r.createElement(m,i({ref:n},g))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:t,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8196:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(5072),t=(a(1504),a(5788));const l={},i="\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11",o={unversionedId:"\u5951\u4f5c/farmer/addOne",id:"\u5951\u4f5c/farmer/addOne",title:"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11",description:"\u589e\u52a0\u4e00\u500b\u5951\u4f5c\u8fb2\u6c11",source:"@site/docs/\u5951\u4f5c/farmer/addOne.md",sourceDirName:"\u5951\u4f5c/farmer",slug:"/\u5951\u4f5c/farmer/addOne",permalink:"/docs/\u5951\u4f5c/farmer/addOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/farmer/addOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e \u8cc7\u6599",permalink:"/docs/\u5951\u4f5c/crop/updateOne"},next:{title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u5951\u4f5c\u8fb2\u6c11",permalink:"/docs/\u5951\u4f5c/farmer/deleteOne"}},p={},d=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],g={toc:d},u="wrapper";function y(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,r.c)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u589e\u52a0\u4e00\u500b-\u5951\u4f5c\u8fb2\u6c11"},"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11"),(0,t.yg)("p",null,"\u589e\u52a0\u4e00\u500b\u5951\u4f5c\u8fb2\u6c11"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/farmer/addOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"POST"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"id"),": \u8eab\u5206\u8b49 (",(0,t.yg)("inlineCode",{parentName:"li"},"\u9700\u525b\u597d10\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name"),": \u8fb2\u6c11\u540d\u7a31 (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u592720\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"phone"),": \u8fb2\u6c11\u96fb\u8a71\u865f\u78bc (\u5bb6\u7528\u6216\u624b\u6a5f) (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u592720\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"address"),": \u8fb2\u6c11\u5730\u5740 (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "id": string,\n    "name": string,\n    "phone": string,\n    "address": string,\n}\n')),(0,t.yg)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,t.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"200"),(0,t.yg)("li",{parentName:"ul"},"400"),(0,t.yg)("li",{parentName:"ul"},"500")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"DATA_EXISTED"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"QUERY_FAILED"'))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "id": string,\n            "name": string,\n            "phone": string,\n            "address": string,\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("p",null,"\u6210\u529f\u65b0\u589e"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "id": "A123457896",\n            "name": "\u838aO\u57ce",\n            "phone": "07-1234567",\n            "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,t.yg)("p",null,"\u5df2\u5b58\u5728\u8a72\u8cc7\u6599",(0,t.yg)("br",{parentName:"p"}),"\n","\u5f85\u6dfb\u52a0\u7684\u8cc7\u6599\u5df2\u5b58\u5728\u8cc7\u6599\u5eab\u4e2d",(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u5df2\u5b58\u5728\u8cc7\u6599\u5eab\u7684\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_EXISTED",\n    "data": [\n        {\n            "uuid": 206,\n            "id": "A123457896",\n            "name": "\u838aO\u57ce",\n            "phone": "07-1234567",\n            "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"Server \u932f\u8aa4  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": "QUERY_FAILED",\n    "data": []\n}\n')))}y.isMDXComponent=!0}}]);