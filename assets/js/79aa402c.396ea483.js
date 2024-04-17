"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[6608],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>d});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),o=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=o(r),y=t,d=g["".concat(p,".").concat(y)]||g[y]||m[y]||l;return r?a.createElement(d,i(i({ref:n},u),{},{components:r})):a.createElement(d,i({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=y;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[g]="string"==typeof e?e:t,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4250:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=r(8168),t=(r(6540),r(5680));const l={},i="\u7372\u53d6 User table \u7684\u4f7f\u7528\u8005\u5217\u8868 (Admin)",s={unversionedId:"service/user/getUsers",id:"service/user/getUsers",title:"\u7372\u53d6 User table \u7684\u4f7f\u7528\u8005\u5217\u8868 (Admin)",description:"\u7ba1\u7406\u54e1\u5f8c\u53f0\u7528",source:"@site/docs/service/user/getUsers.md",sourceDirName:"service/user",slug:"/service/user/getUsers",permalink:"/docs/service/user/getUsers",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/service/user/getUsers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u6307\u5b9a\u4f7f\u7528\u8005\u500b\u4eba\u8cc7\u6599",permalink:"/docs/service/user/getUser"},next:{title:"\u8a3b\u518a API",permalink:"/docs/service/user/register"}},p={},o=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u56de\u50b3",id:"\u6210\u529f\u56de\u50b3",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],u={toc:o},g="wrapper";function m(e){let{components:n,...r}=e;return(0,t.yg)(g,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u7372\u53d6-user-table-\u7684\u4f7f\u7528\u8005\u5217\u8868-admin"},"\u7372\u53d6 User table \u7684\u4f7f\u7528\u8005\u5217\u8868 (Admin)"),(0,t.yg)("p",null,"\u7ba1\u7406\u54e1\u5f8c\u53f0\u7528",(0,t.yg)("br",{parentName:"p"}),"\n","\u53c3\u6578\u53ef\u9078\u64c7 registered  boolean    (\u662f\u5426\u5df2\u9a57\u8b49\u8a3b\u518a, 0: \u672a\u9a57\u8b49, 1: \u5df2\u9a57\u8b49)",(0,t.yg)("br",{parentName:"p"}),"\n","\u4f86\u6c7a\u5b9a\u662f \u4f7f\u7528\u8005\u5217\u8868 \u9801\u9762",(0,t.yg)("br",{parentName:"p"}),"\n","\u9084\u662f \u8a3b\u518a\u78ba\u8a8d\u9801\u9762",(0,t.yg)("br",{parentName:"p"}),"\n","\u6216\u5168\u90e8\u986f\u793a  "),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/service/user/getUsers"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"GET"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[Admin]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"type"),": \u9078\u64c7\u7372\u53d6\u7684\u4f7f\u7528\u8005\u5167\u5bb9 (0: \u672a\u9a57\u8b49\u8a3b\u518a, 1: \u5df2\u9a57\u8b49\u8a3b\u518a, 2: \u5168\u90e8)")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "type": number  // 0, 1, 2\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u4f7f\u7528\u8005\u500b\u4eba\u8cc7\u6599  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"username"),": \u4f7f\u7528\u8005\u5e33\u865f"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"email"),": \u96fb\u5b50\u90f5\u4ef6"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name"),": \u4f7f\u7528\u8005\u59d3\u540d"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"user_permissions"),": \u4f7f\u7528\u8005\u6b0a\u9650"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"telephone"),": \u5bb6\u7528\u96fb\u8a71 (\u53ef\u7559\u7a7a)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"cellphone"),": \u624b\u6a5f\u865f\u78bc (\u53ef\u7559\u7a7a)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"address"),": \u5730\u5740 (\u53ef\u7559\u7a7a)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"registered"),": \u662f\u5426\u5df2\u9a57\u8b49\u8a3b\u518a (0: \u672a\u9a57\u8b49, 1: \u5df2\u9a57\u8b49)")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#userpermissions"},(0,t.yg)("inlineCode",{parentName:"a"},"UserPermissions")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Admin")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,t.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"200"),(0,t.yg)("li",{parentName:"ul"},"400"),(0,t.yg)("li",{parentName:"ul"},"500")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u56de\u50b3"},"\u6210\u529f\u56de\u50b3"),(0,t.yg)("p",null,"\u683c\u5f0f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "username": string,\n            "email": string,\n            "name": string,\n            "user_permissions": number,\n            "telephone": string | null,\n            "cellphone": string | null,\n            "address": string | null,\n            "registered": boolean\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"\u7bc4\u4f8b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "username": "admin",\n            "email": "netlab@isu.edu.tw",\n            "name": "\u7ba1\u7406\u54e1",\n            "user_permissions": 1,\n            "telephone": "8682260",\n            "cellphone": "0981786780",\n            "address": "\u65b0\u5712\u9109\u7530\u5357\u8def143\u8def\\n",\n            "registered": 1\n        },\n        {\n            "username": "user",\n            "email": "test1233@gmail.com",\n            "name": "\u4f7f\u7528\u8005",\n            "user_permissions": 2,\n            "telephone": "07-123456789",\n            "cellphone": "0987654123",\n            "address": "\u842c\u4e39\u9109\u5927\u52c7\u8def299\u5df78\u865f",\n            "registered": 1\n        },\n        {\n            "username": "user2",\n            "email": "user1@gmail.com",\n            "name": "\u4f7f\u7528\u80052",\n            "user_permissions": 3,\n            "telephone": "07-123456789",\n            "cellphone": "0987654123",\n            "address": "\u842c\u4e39\u9109\u5927\u52c7\u8def299\u5df78\u865f",\n            "registered": 0\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}m.isMDXComponent=!0}}]);