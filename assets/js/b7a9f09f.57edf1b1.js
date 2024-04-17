"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[4031],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,m=c["".concat(s,".").concat(y)]||c[y]||d[y]||l;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},638:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=r(8168),a=(r(6540),r(5680));const l={},i="\u522a\u9664 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005 (Admin)",o={unversionedId:"service/user/deleteOneUser",id:"service/user/deleteOneUser",title:"\u522a\u9664 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005 (Admin)",description:"\u522a\u9664 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005",source:"@site/docs/service/user/deleteOneUser.md",sourceDirName:"service/user",slug:"/service/user/deleteOneUser",permalink:"/docs/service/user/deleteOneUser",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/service/user/deleteOneUser.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6aa2\u67e5 server API \u6a21\u584a\u662f\u5426\u555f\u7528",permalink:"/docs/service/status/apiModule"},next:{title:"\u7372\u53d6\u6307\u5b9a\u4f7f\u7528\u8005\u500b\u4eba\u8cc7\u6599 (Admin)",permalink:"/docs/service/user/getOneUser"}},s={},p=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u522a\u9664",id:"\u6210\u529f\u522a\u9664",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u8a72 username \u4e0d\u5b58\u5728",id:"\u8a72-username-\u4e0d\u5b58\u5728",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u522a\u9664-user-table-\u7684\u4e00\u540d\u4f7f\u7528\u8005-admin"},"\u522a\u9664 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005 (Admin)"),(0,a.yg)("p",null,"\u522a\u9664 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005",(0,a.yg)("br",{parentName:"p"}),"\n","\u7d66\u7ba1\u7406\u54e1\u7528\u7684",(0,a.yg)("br",{parentName:"p"}),"\n","\u5f8c\u53f0\u522a\u9664\u4f7f\u7528\u8005  "),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/service/user/deleteOneUser"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"DELETE"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[Admin]"),"  "),(0,a.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"username"),": \u4f7f\u7528\u8005\u5e33\u865f (",(0,a.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "username": string\n}\n')),(0,a.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#userpermissions"},(0,a.yg)("inlineCode",{parentName:"a"},"UserPermissions")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Admin")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,a.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"200"),(0,a.yg)("li",{parentName:"ul"},"500")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ACCOUNT_NOT_EXISTS")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,a.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("h3",{id:"\u6210\u529f\u522a\u9664"},"\u6210\u529f\u522a\u9664"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"\u8a72-username-\u4e0d\u5b58\u5728"},"\u8a72 username \u4e0d\u5b58\u5728"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.ACCOUNT_NOT_EXISTS,\n    "data": [\n        {\n            "username": "user10"\n        }\n    ]\n}\n')),(0,a.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}d.isMDXComponent=!0}}]);