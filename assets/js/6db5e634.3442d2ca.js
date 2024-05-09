"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[7750],{5680:(e,r,n)=>{n.d(r,{xA:()=>d,yg:()=>g});var a=n(6540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),p=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=t,g=u["".concat(s,".").concat(y)]||u[y]||c[y]||l;return n?a.createElement(g,o(o({ref:r},d),{},{components:n})):a.createElement(g,o({ref:r},d))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:t,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9669:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(8168),t=(n(6540),n(5680));const l={},o="\u4f7f\u7528\u8005\u66f4\u65b0\u5bc6\u78bc",i={unversionedId:"service/user/userUpdatePassword",id:"service/user/userUpdatePassword",title:"\u4f7f\u7528\u8005\u66f4\u65b0\u5bc6\u78bc",description:"\u4f7f\u7528\u8005\u66f4\u65b0\u5bc6\u78bc",source:"@site/docs/service/user/userUpdatePassword.md",sourceDirName:"service/user",slug:"/service/user/userUpdatePassword",permalink:"/docs/service/user/userUpdatePassword",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/service/user/userUpdatePassword.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u8005\u66f4\u65b0\u500b\u4eba\u8cc7\u6599",permalink:"/docs/service/user/userUpdate"},next:{title:"\u589e\u52a0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",permalink:"/docs/\u5951\u4f5c/cl/addOne"}},s={},p=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u66f4\u65b0\u6210\u529f",id:"\u66f4\u65b0\u6210\u529f",level:3},{value:"sessionId \u4e0d\u5b58\u5728",id:"sessionid-\u4e0d\u5b58\u5728",level:3},{value:"\u820a\u5bc6\u78bc\u932f\u8aa4",id:"\u820a\u5bc6\u78bc\u932f\u8aa4",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],d={toc:p},u="wrapper";function c(e){let{components:r,...n}=e;return(0,t.yg)(u,(0,a.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u4f7f\u7528\u8005\u66f4\u65b0\u5bc6\u78bc"},"\u4f7f\u7528\u8005\u66f4\u65b0\u5bc6\u78bc"),(0,t.yg)("p",null,"\u4f7f\u7528\u8005\u66f4\u65b0\u5bc6\u78bc",(0,t.yg)("br",{parentName:"p"}),"\n","\u7d66\u4f7f\u7528\u8005\u7528\u7684 (\u4f7f\u7528\u8005\u7de8\u8f2f\u500b\u4eba\u8cc7\u6599\u4ecb\u9762)",(0,t.yg)("br",{parentName:"p"}),"\n","\u7528 sessionId \u7372\u53d6\u8cc7\u6599  "),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/service/user/userUpdatePassword"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"POST"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"old_password"),": \u820a\u5bc6\u78bc (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"new_password"),": \u65b0\u5bc6\u78bc (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")")),(0,t.yg)("p",null,"\u5fd8\u8a18\u5bc6\u78bc\u8981\u7ba1\u7406\u54e1\u767c\u91cd\u8a2d\u5bc6\u78bc\u90f5\u4ef6  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "old_password": string,\n    "new_password": string\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ACCOUNT_NOT_EXISTS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u66f4\u65b0\u6210\u529f"},"\u66f4\u65b0\u6210\u529f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"sessionid-\u4e0d\u5b58\u5728"},"sessionId \u4e0d\u5b58\u5728"),(0,t.yg)("p",null,"(\u672a\u767b\u5165\u6216\u904e\u671f)  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.UNAUTHORIZED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u820a\u5bc6\u78bc\u932f\u8aa4"},"\u820a\u5bc6\u78bc\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.OLD_PASSWORD_ERROR,\n    "data": [\n        {\n            "username": "user10",\n            "old_password": "00123",\n            "new_passwprd": "789789"\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}c.isMDXComponent=!0}}]);