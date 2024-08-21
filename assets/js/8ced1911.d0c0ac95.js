"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[4443],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(c,".").concat(u)]||d[u]||y[u]||l;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const l={},i="\u522a\u9664 blacklist \u4e2d\u7684 IP",o={unversionedId:"service/admin/blacklist/deleteOne",id:"service/admin/blacklist/deleteOne",title:"\u522a\u9664 blacklist \u4e2d\u7684 IP",description:"\u522a\u9664 blacklist \u4e2d\u7684 IP",source:"@site/docs/service/admin/blacklist/deleteOne.md",sourceDirName:"service/admin/blacklist",slug:"/service/admin/blacklist/deleteOne",permalink:"/docs/next/service/admin/blacklist/deleteOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/service/admin/blacklist/deleteOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0 IP \u81f3 blacklist \u4e2d",permalink:"/docs/next/service/admin/blacklist/addOne"},next:{title:"\u522a\u9664 blacklist \u4e2d\u7684 IP",permalink:"/docs/next/service/admin/blacklist/getAll"}},c={},p=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u522a\u9664",id:"\u6210\u529f\u522a\u9664",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],s={toc:p},d="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u522a\u9664-blacklist-\u4e2d\u7684-ip"},"\u522a\u9664 blacklist \u4e2d\u7684 IP"),(0,a.yg)("p",null,"\u522a\u9664 blacklist \u4e2d\u7684 IP",(0,a.yg)("br",{parentName:"p"}),"\n","\u7ba1\u7406\u54e1\u5f8c\u53f0\u7528",(0,a.yg)("br",{parentName:"p"}),"\n","\u6dfb\u52a0\u9032 blacklist \u7684 IP \u6240\u767c\u51fa\u7684\u8acb\u6c42\u90fd\u6703\u88ab\u5ffd\u7565  "),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/service/admin/blacklist/deleteOne"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"DELETE"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[Admin]"),"  "),(0,a.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ip"),": IP \u5730\u5740 (",(0,a.yg)("inlineCode",{parentName:"li"},"\u6700\u592745\u500b\u5b57"),")")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "ip": string\n}\n')),(0,a.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/next/types#userpermissions"},(0,a.yg)("inlineCode",{parentName:"a"},"UserPermissions")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Admin")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/next/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,a.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("h3",{id:"\u6210\u529f\u522a\u9664"},"\u6210\u529f\u522a\u9664"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}y.isMDXComponent=!0}}]);