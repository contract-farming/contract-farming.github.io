"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[1212],{5788:(e,n,r)=>{r.d(n,{Iu:()=>d,yg:()=>c});var a=r(1504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),u=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=u(r),s=t,c=g["".concat(i,".").concat(s)]||g[s]||y[s]||l;return r?a.createElement(c,o(o({ref:n},d),{},{components:r})):a.createElement(c,o({ref:n},d))}));function c(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=s;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[g]="string"==typeof e?e:t,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6296:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(5072),t=(r(1504),r(5788));const l={},o="\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u5951\u4f5c\u8fb2\u6c11",p={unversionedId:"\u5951\u4f5c/farmer/deleteOne",id:"\u5951\u4f5c/farmer/deleteOne",title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u5951\u4f5c\u8fb2\u6c11",description:"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u4f5c\u5951\u4f5c\u8fb2\u6c11",source:"@site/docs/\u5951\u4f5c/farmer/deleteOne.md",sourceDirName:"\u5951\u4f5c/farmer",slug:"/\u5951\u4f5c/farmer/deleteOne",permalink:"/docs/\u5951\u4f5c/farmer/deleteOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/farmer/deleteOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11",permalink:"/docs/\u5951\u4f5c/farmer/addOne"},next:{title:"\u7372\u53d6 Farmer Table",permalink:"/docs/\u5951\u4f5c/farmer/getAll"}},i={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],d={toc:u},g="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(g,(0,a.c)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u522a\u9664\u5176\u4e2d\u4e00\u500b-\u4f5c\u5951\u4f5c\u8fb2\u6c11"},"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u5951\u4f5c\u8fb2\u6c11"),(0,t.yg)("p",null,"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u4f5c\u5951\u4f5c\u8fb2\u6c11"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/farmer/deleteOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"DELETE"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"uuid"),": \u5f85\u522a\u9664\u7684 \u5951\u4f5c\u8fb2\u6c11 uuid")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number\n}\n')),(0,t.yg)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,t.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"200"),(0,t.yg)("li",{parentName:"ul"},"400"),(0,t.yg)("li",{parentName:"ul"},"500")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"DATA_NOT_FOUND"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"ROW_IS_REFERENCED"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"QUERY_FAILED"'))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "id": string,\n            "name": string,\n            "phone": string,\n            "address": string,\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("p",null,"\u6210\u529f\u522a\u9664",(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u6210\u529f\u522a\u9664\u7684\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 206,\n            "id": "A123457896",\n            "name": "\u838aO\u57ce",\n            "phone": "07-1234567",\n            "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,t.yg)("p",null,"\u672a\u627e\u5230\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')),(0,t.yg)("p",null,"\u8a72\u5951\u4f5c\u8fb2\u6c11\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "ROW_IS_REFERENCED",\n    "data": []\n}\n')),(0,t.yg)("p",null,"Server \u932f\u8aa4  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": "QUERY_FAILED",\n    "data": []\n}\n')))}y.isMDXComponent=!0}}]);