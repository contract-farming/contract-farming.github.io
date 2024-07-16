"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[5206],{5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>u});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(r),y=t,u=c["".concat(p,".").concat(y)]||c[y]||g[y]||i;return r?a.createElement(u,l(l({ref:n},d),{},{components:r})):a.createElement(u,l({ref:n},d))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:t,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7771:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(8168),t=(r(6540),r(5680));const i={sidebar_position:2},l="\u767b\u5165",o={unversionedId:"service/login",id:"service/login",title:"\u767b\u5165",description:"\u767b\u5165",source:"@site/docs/service/login.md",sourceDirName:"service",slug:"/service/login",permalink:"/docs/service/login",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/service/login.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u570b\u571f\u6e2c\u7e6a\u4ee3\u7406 API \u8acb\u6c42\u683c\u5f0f",permalink:"/docs/NLSC \u4ee3\u7406 API/getPermission"},next:{title:"\u767b\u51fa",permalink:"/docs/service/logout"}},p={},s=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u65b0\u589e",id:"\u6210\u529f\u65b0\u589e",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4",id:"\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4",level:3},{value:"\u8acb\u6c42\u6642\u4ee3\u5165\u7684 sessionId \u5df2\u5b58\u5728",id:"\u8acb\u6c42\u6642\u4ee3\u5165\u7684-sessionid-\u5df2\u5b58\u5728",level:3},{value:"\u5617\u8a66\u767b\u5165\u6642\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4\u592a\u591a\u6b21",id:"\u5617\u8a66\u767b\u5165\u6642\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4\u592a\u591a\u6b21",level:3}],d={toc:s},c="wrapper";function g(e){let{components:n,...r}=e;return(0,t.yg)(c,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u767b\u5165"},"\u767b\u5165"),(0,t.yg)("p",null,"\u767b\u5165",(0,t.yg)("br",{parentName:"p"}),"\n","\u672a\u9a57\u8b49\u8a3b\u518a\u4f7f\u7528\u8005\u7121\u6cd5\u767b\u5165  "),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/service/login"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"POST"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"username"),": \u5e33\u865f (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"password"),": \u5bc6\u78bc (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "username": string,\n    "password": string\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u767b\u5165\u6210\u529f\u7684 sessionId  "),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"FAILED_LOGIN")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SESSION_EXISTS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"BLOCKED_LOGIN"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u65b0\u589e"},"\u6210\u529f\u65b0\u589e"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "sessionId": "d88cb8d7fd367b7ddd66d00990c4f068f67f30b3fee3bcd7c07867a78b41e0ec"\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4"},"\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.FAILED_LOGIN,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u8acb\u6c42\u6642\u4ee3\u5165\u7684-sessionid-\u5df2\u5b58\u5728"},"\u8acb\u6c42\u6642\u4ee3\u5165\u7684 sessionId \u5df2\u5b58\u5728"),(0,t.yg)("p",null,"(\u53ef\u80fd\u662f\u5df2\u767b\u5165\u5f8c\u53c8\u8acb\u6c42 ",(0,t.yg)("inlineCode",{parentName:"p"},"/login")," \u9801\u9762\u4e4b\u985e\u7684)"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SESSION_EXISTS,\n    "data": [\n        {\n            "sessionId": "3151828716ac1b548564df436fedddaa153bafa8927292647d0fe345dbaf0e85"\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u5617\u8a66\u767b\u5165\u6642\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4\u592a\u591a\u6b21"},"\u5617\u8a66\u767b\u5165\u6642\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4\u592a\u591a\u6b21"),(0,t.yg)("p",null,"\u9396\u5b9a\u4e00\u6bb5\u6642\u9593 (\u6642\u9593\u7531\u5f8c\u7aef\u8a2d\u5b9a)"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.BLOCKED_LOGIN,\n    "data": []\n}\n')))}g.isMDXComponent=!0}}]);