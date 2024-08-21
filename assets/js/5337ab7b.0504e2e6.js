"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[8035],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),d=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=d(r),g=t,m=y["".concat(p,".").concat(g)]||y[g]||c[g]||l;return r?a.createElement(m,i(i({ref:n},u),{},{components:r})):a.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:t,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6307:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(8168),t=(r(6540),r(5680));const l={},i="\u66f4\u65b0\u4e00\u500b \u80a5\u6599\u7a2e\u985e \u8cc7\u6599",o={unversionedId:"\u5951\u4f5c/fert/updateOne",id:"version-0.4.0/\u5951\u4f5c/fert/updateOne",title:"\u66f4\u65b0\u4e00\u500b \u80a5\u6599\u7a2e\u985e \u8cc7\u6599",description:"\u66f4\u65b0\u4e00\u500b\u80a5\u6599\u7a2e\u985e\u8cc7\u6599",source:"@site/versioned_docs/version-0.4.0/\u5951\u4f5c/fert/updateOne.md",sourceDirName:"\u5951\u4f5c/fert",slug:"/\u5951\u4f5c/fert/updateOne",permalink:"/docs/\u5951\u4f5c/fert/updateOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/versioned_docs/version-0.4.0/\u5951\u4f5c/fert/updateOne.md",tags:[],version:"0.4.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u80a5\u6599\u7a2e\u985e \u5167\u5bb9",permalink:"/docs/\u5951\u4f5c/fert/getOne"},next:{title:"\u589e\u52a0\u4e00\u584a\u8fb2\u5730",permalink:"/docs/\u5951\u4f5c/land/addOne"}},p={},d=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u66f4\u65b0",id:"\u6210\u529f\u66f4\u65b0",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"\u5728\u8cc7\u6599\u5eab\u4e2d\u5df2\u5b58\u5728\u8207\u5f85\u66f4\u65b0\u8cc7\u6599\u76f8\u540c\u7684\u8cc7\u6599",id:"\u5728\u8cc7\u6599\u5eab\u4e2d\u5df2\u5b58\u5728\u8207\u5f85\u66f4\u65b0\u8cc7\u6599\u76f8\u540c\u7684\u8cc7\u6599",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],u={toc:d},y="wrapper";function c(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u66f4\u65b0\u4e00\u500b-\u80a5\u6599\u7a2e\u985e-\u8cc7\u6599"},"\u66f4\u65b0\u4e00\u500b \u80a5\u6599\u7a2e\u985e \u8cc7\u6599"),(0,t.yg)("p",null,"\u66f4\u65b0\u4e00\u500b\u80a5\u6599\u7a2e\u985e\u8cc7\u6599"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/fert/updateOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"PUT"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"uuid"),": \u80a5\u6599\u7a2e\u985e\u7684 uuid (",(0,t.yg)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u66f4\u65b0"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name"),": \u5f85\u66f4\u65b0\u7684\u80a5\u6599\u7a2e\u985e\u540d\u7a31 (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number,\n    "name": string\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATA_EXISTED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u66f4\u65b0"},"\u6210\u529f\u66f4\u65b0"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"},"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u5728\u8cc7\u6599\u5eab\u4e2d\u5df2\u5b58\u5728\u8207\u5f85\u66f4\u65b0\u8cc7\u6599\u76f8\u540c\u7684\u8cc7\u6599"},"\u5728\u8cc7\u6599\u5eab\u4e2d\u5df2\u5b58\u5728\u8207\u5f85\u66f4\u65b0\u8cc7\u6599\u76f8\u540c\u7684\u8cc7\u6599"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u8cc7\u6599\u5eab\u4e2d\u76f8\u540c\u7684\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_EXISTED,\n    "data": [\n        {\n            "uuid": 3,\n            "name": "\u80a5\u6599\u4e09\u865f"\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}c.isMDXComponent=!0}}]);