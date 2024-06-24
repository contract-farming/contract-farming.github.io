"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[9141],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>u});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(r),c=t,u=m["".concat(p,".").concat(c)]||m[c]||y[c]||l;return r?a.createElement(u,i(i({ref:n},d),{},{components:r})):a.createElement(u,i({ref:n},d))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8667:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(8168),t=(r(6540),r(5680));const l={},i="\u91cd\u8a2d\u6307\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc (Admin)",o={unversionedId:"service/admin/resetOneUserPassword",id:"service/admin/resetOneUserPassword",title:"\u91cd\u8a2d\u6307\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc (Admin)",description:"\u91cd\u8a2d\u6307\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc",source:"@site/docs/service/admin/resetOneUserPassword.md",sourceDirName:"service/admin",slug:"/service/admin/resetOneUserPassword",permalink:"/docs/service/admin/resetOneUserPassword",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/service/admin/resetOneUserPassword.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6 User table \u7684\u4f7f\u7528\u8005\u5217\u8868 (Admin)",permalink:"/docs/service/admin/getUsers"},next:{title:"\u66f4\u65b0 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005 (Admin)",permalink:"/docs/service/admin/updateOneUser"}},p={},s=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u91cd\u8a2d",id:"\u6210\u529f\u91cd\u8a2d",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u8a72 username \u4e0d\u5b58\u5728",id:"\u8a72-username-\u4e0d\u5b58\u5728",level:3},{value:"mail API \u5df2\u88ab\u7981\u7528",id:"mail-api-\u5df2\u88ab\u7981\u7528",level:3},{value:"mail \u767c\u9001\u5931\u6557 (mail server \u932f\u8aa4)",id:"mail-\u767c\u9001\u5931\u6557-mail-server-\u932f\u8aa4",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],d={toc:s},m="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(m,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u91cd\u8a2d\u6307\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc-admin"},"\u91cd\u8a2d\u6307\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc (Admin)"),(0,t.yg)("p",null,"\u91cd\u8a2d\u6307\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc",(0,t.yg)("br",{parentName:"p"}),"\n","\u7d66\u7ba1\u7406\u54e1\u7528\u7684 (\u5f8c\u53f0\u66f4\u65b0\u4f7f\u7528\u8005)",(0,t.yg)("br",{parentName:"p"}),"\n","\u81ea\u52d5\u767c\u9001\u91cd\u7f6e\u5f8c\u7684\u5bc6\u78bc\u5230\u4f7f\u7528\u8005\u90f5\u7bb1  "),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/service/admin/resetOneUserPassword"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"POST"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[Admin]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"username"),": \u4f7f\u7528\u8005\u5e33\u865f (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "username": string\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#userpermissions"},(0,t.yg)("inlineCode",{parentName:"a"},"UserPermissions")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Admin")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ACCOUNT_NOT_EXISTS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DISABLE")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SEND_FAIL")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u91cd\u8a2d"},"\u6210\u529f\u91cd\u8a2d"),(0,t.yg)("p",null,"\u4f7f\u7528\u8005\u4fe1\u7bb1\u6703\u6536\u5230\u65b0\u5bc6\u78bc"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u8a72-username-\u4e0d\u5b58\u5728"},"\u8a72 username \u4e0d\u5b58\u5728"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.ACCOUNT_NOT_EXISTS,\n    "data": [\n        {\n            "username": "user10"\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"mail-api-\u5df2\u88ab\u7981\u7528"},"mail API \u5df2\u88ab\u7981\u7528"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DISABLE,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"mail-\u767c\u9001\u5931\u6557-mail-server-\u932f\u8aa4"},"mail \u767c\u9001\u5931\u6557 (mail server \u932f\u8aa4)"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SEND_FAIL,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}y.isMDXComponent=!0}}]);