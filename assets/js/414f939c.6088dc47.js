"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[8432],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>c});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=a.createContext({}),p=function(e){var n=a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),y=t,c=m["".concat(o,".").concat(y)]||m[y]||d[y]||i;return r?a.createElement(c,l(l({ref:n},u),{},{components:r})):a.createElement(c,l({ref:n},u))}));function c(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=y;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:t,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4618:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(8168),t=(r(6540),r(5680));const i={},l="\u66f4\u65b0 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005\u7684\u6b0a\u9650 (Admin)",s={unversionedId:"service/user/updateOneUserPermissions",id:"service/user/updateOneUserPermissions",title:"\u66f4\u65b0 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005\u7684\u6b0a\u9650 (Admin)",description:"\u66f4\u65b0 User table \u7684 \u4e00\u540d\u4f7f\u7528\u8005\u7684\u6b0a\u9650",source:"@site/docs/service/user/updateOneUserPermissions.md",sourceDirName:"service/user",slug:"/service/user/updateOneUserPermissions",permalink:"/docs/service/user/updateOneUserPermissions",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/service/user/updateOneUserPermissions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005 (Admin)",permalink:"/docs/service/user/updateOneUser"},next:{title:"\u4f7f\u7528\u8005\u66f4\u65b0\u500b\u4eba\u8cc7\u6599",permalink:"/docs/service/user/userUpdate"}},o={},p=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u66f4\u65b0",id:"\u6210\u529f\u66f4\u65b0",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u8a72 username \u4e0d\u5b58\u5728",id:"\u8a72-username-\u4e0d\u5b58\u5728",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],u={toc:p},m="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(m,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u66f4\u65b0-user-table-\u7684\u4e00\u540d\u4f7f\u7528\u8005\u7684\u6b0a\u9650-admin"},"\u66f4\u65b0 User table \u7684\u4e00\u540d\u4f7f\u7528\u8005\u7684\u6b0a\u9650 (Admin)"),(0,t.yg)("p",null,"\u66f4\u65b0 User table \u7684 \u4e00\u540d\u4f7f\u7528\u8005\u7684\u6b0a\u9650",(0,t.yg)("br",{parentName:"p"}),"\n","\u7d66\u7ba1\u7406\u54e1\u7528\u7684 (\u5f8c\u53f0\u66f4\u65b0\u4f7f\u7528\u8005)",(0,t.yg)("br",{parentName:"p"}),"\n","\u5f8c\u53f0\u78ba\u8a8d\u8a3b\u518a\u4f7f\u7528\u8005\u4e26\u767c\u653e\u6b0a\u9650\u6216\u4fee\u6539  "),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/service/user/updateOneUserPermissions"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"POST"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[Admin]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"username"),": \u4f7f\u7528\u8005\u5e33\u865f (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"user_permissions"),": \u4f7f\u7528\u8005\u6b0a\u9650"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"registered"),": \u662f\u5426\u5df2\u9a57\u8b49\u8a3b\u518a, (0: \u672a\u9a57\u8b49, 1: \u5df2\u9a57\u8b49)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "username": string,\n    "user_permissions": number,\n    "registered": number        // 0, 1\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#userpermissions"},(0,t.yg)("inlineCode",{parentName:"a"},"UserPermissions")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Admin")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,t.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"200"),(0,t.yg)("li",{parentName:"ul"},"400"),(0,t.yg)("li",{parentName:"ul"},"500")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ACCOUNT_NOT_EXISTS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u66f4\u65b0"},"\u6210\u529f\u66f4\u65b0"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u8a72-username-\u4e0d\u5b58\u5728"},"\u8a72 username \u4e0d\u5b58\u5728"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.ACCOUNT_NOT_EXISTS,\n    "data": [\n        {\n            "username": "user10"\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}d.isMDXComponent=!0}}]);