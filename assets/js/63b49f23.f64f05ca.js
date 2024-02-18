"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[5756],{5680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>m});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},g=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=t,m=u["".concat(p,".").concat(d)]||u[d]||y[d]||l;return r?a.createElement(m,i(i({ref:n},g),{},{components:r})):a.createElement(m,i({ref:n},g))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9243:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(8168),t=(r(6540),r(5680));const l={},i="\u8a3b\u518a API",o={unversionedId:"service/user/register",id:"service/user/register",title:"\u8a3b\u518a API",description:"\u8a3b\u518a API",source:"@site/docs/service/user/register.md",sourceDirName:"service/user",slug:"/service/user/register",permalink:"/docs/service/user/register",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/service/user/register.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6 User table \u7684 \u4f7f\u7528\u8005\u5217\u8868",permalink:"/docs/service/user/getUsers"},next:{title:"\u91cd\u8a2d\u6307\u5b9a\u4f7f\u7528\u8005\u5bc6\u78bc",permalink:"/docs/service/user/resetOneUserPassword"}},p={},s=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u56de\u50b3",id:"\u6210\u529f\u56de\u50b3",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u8a3b\u518a API \u5df2\u88ab\u7981\u7528",id:"\u8a3b\u518a-api-\u5df2\u88ab\u7981\u7528",level:3},{value:"username \u5df2\u88ab\u4f7f\u7528, \u63db\u5176\u4ed6 username \u8a3b\u518a",id:"username-\u5df2\u88ab\u4f7f\u7528-\u63db\u5176\u4ed6-username-\u8a3b\u518a",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],g={toc:s},u="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u8a3b\u518a-api"},"\u8a3b\u518a API"),(0,t.yg)("p",null,"\u8a3b\u518a API  "),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/service/user/register"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"POST"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"username"),": \u4f7f\u7528\u8005\u5e33\u865f (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"password"),": \u4f7f\u7528\u8005\u5bc6\u78bc (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"email"),": \u96fb\u5b50\u90f5\u4ef6 (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"name"),": \u4f7f\u7528\u8005\u59d3\u540d (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"telephone"),": \u5bb6\u7528\u96fb\u8a71 (\u53ef\u7559\u7a7a) (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u592750\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"cellphone"),": \u624b\u6a5f\u865f\u78bc (\u53ef\u7559\u7a7a) (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u592750\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"address"),": \u5730\u5740 (\u53ef\u7559\u7a7a) (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927100\u500b\u5b57"),")")),(0,t.yg)("p",null,"\u7a7a\u503c\u9700\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"'EMPTY_DATA'"),"  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "username": string,\n    "password": string,\n    "email": string,\n    "name": string,\n    "telephone": string | \'EMPTY_DATA\',\n    "cellphone": string | \'EMPTY_DATA\',\n    "address": string | \'EMPTY_DATA\'\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,t.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"200"),(0,t.yg)("li",{parentName:"ul"},"400"),(0,t.yg)("li",{parentName:"ul"},"500")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DISABLE")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ACCOUNT_EXISTS")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u56de\u50b3"},"\u6210\u529f\u56de\u50b3"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u8a3b\u518a-api-\u5df2\u88ab\u7981\u7528"},"\u8a3b\u518a API \u5df2\u88ab\u7981\u7528"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.DISABLE,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"username-\u5df2\u88ab\u4f7f\u7528-\u63db\u5176\u4ed6-username-\u8a3b\u518a"},"username \u5df2\u88ab\u4f7f\u7528, \u63db\u5176\u4ed6 username \u8a3b\u518a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.ACCOUNT_EXISTS,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}y.isMDXComponent=!0}}]);