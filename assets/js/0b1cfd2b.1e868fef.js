"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[3219],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(r),d=a,y=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return r?t.createElement(y,l(l({ref:n},c),{},{components:r})):t.createElement(y,l({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2248:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=r(8168),a=(r(6540),r(5680));const i={},l="\u7372\u53d6\u5df2\u767b\u5165\u7684\u6240\u6709\u88dd\u7f6e",o={unversionedId:"service/user/getLoginDevices",id:"version-0.4.0/service/user/getLoginDevices",title:"\u7372\u53d6\u5df2\u767b\u5165\u7684\u6240\u6709\u88dd\u7f6e",description:"\u7372\u53d6\u8a72\u540d\u4f7f\u7528\u8005\u5df2\u767b\u5165\u7684\u6240\u6709\u88dd\u7f6e",source:"@site/versioned_docs/version-0.4.0/service/user/getLoginDevices.md",sourceDirName:"service/user",slug:"/service/user/getLoginDevices",permalink:"/docs/service/user/getLoginDevices",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/versioned_docs/version-0.4.0/service/user/getLoginDevices.md",tags:[],version:"0.4.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u522a\u9664\u5df2\u767b\u5165\u7684\u88dd\u7f6e",permalink:"/docs/service/user/deleteLoginDevices"},next:{title:"\u7372\u53d6\u6307\u5b9a\u4f7f\u7528\u8005\u6b0a\u9650",permalink:"/docs/service/user/getPermission"}},s={},p=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u7372\u53d6",id:"\u6210\u529f\u7372\u53d6",level:3},{value:"sessionId \u4e0d\u5b58\u5728",id:"sessionid-\u4e0d\u5b58\u5728",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],c={toc:p},g="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u7372\u53d6\u5df2\u767b\u5165\u7684\u6240\u6709\u88dd\u7f6e"},"\u7372\u53d6\u5df2\u767b\u5165\u7684\u6240\u6709\u88dd\u7f6e"),(0,a.yg)("p",null,"\u7372\u53d6\u8a72\u540d\u4f7f\u7528\u8005\u5df2\u767b\u5165\u7684\u6240\u6709\u88dd\u7f6e",(0,a.yg)("br",{parentName:"p"}),"\n","\u7528 sessionId \u7372\u53d6\u8cc7\u6599  "),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/service/user/getLoginDevices"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"GET"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,a.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("p",null,"\u7121\u53c3\u6578  "),(0,a.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u4f7f\u7528\u8005\u500b\u4eba\u8cc7\u6599  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"id"),": Session \u7de8\u865f"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"device"),": \u88dd\u7f6e\u540d\u7a31 (User-Agent)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"last_refresh"),": \u6700\u5f8c\u5237\u65b0\u6642\u9593 (\u4f7f\u7528\u6642\u9593)")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"UNAUTHORIZED")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,a.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("h3",{id:"\u6210\u529f\u7372\u53d6"},"\u6210\u529f\u7372\u53d6"),(0,a.yg)("p",null,"\u683c\u5f0f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "id": number,\n            "device": string,\n            "last_refresh": string  // YYYY/MM/DD HH:mm:ss\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"\u7bc4\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "id": 137,\n            "device": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",\n            "last_refresh": "2024/06/24 21:50:50"\n        }\n    ]\n}\n')),(0,a.yg)("h3",{id:"sessionid-\u4e0d\u5b58\u5728"},"sessionId \u4e0d\u5b58\u5728"),(0,a.yg)("p",null,"(\u672a\u767b\u5165\u6216\u904e\u671f)  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.UNAUTHORIZED,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}u.isMDXComponent=!0}}]);