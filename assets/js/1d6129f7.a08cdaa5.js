"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[4381],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=u(t),d=a,m=y["".concat(p,".").concat(d)]||y[d]||g[d]||l;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(8168),a=(t(6540),t(5680));const l={},i="\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730",o={unversionedId:"\u5951\u4f5c/contract/query/getAllCl",id:"\u5951\u4f5c/contract/query/getAllCl",title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730",description:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730",source:"@site/docs/\u5951\u4f5c/contract/query/getAllCl.md",sourceDirName:"\u5951\u4f5c/contract/query",slug:"/\u5951\u4f5c/contract/query/getAllCl",permalink:"/docs/next/\u5951\u4f5c/contract/query/getAllCl",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/contract/query/getAllCl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u5167\u5bb9",permalink:"/docs/next/\u5951\u4f5c/contract/getOne"},next:{title:"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599",permalink:"/docs/next/\u5951\u4f5c/contract/updateOne"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u7372\u53d6",id:"\u6210\u529f\u7372\u53d6",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u8a72\u5951\u4f5c\u5408\u7d04\u5e95\u4e0b\u7121\u5951\u4f5c\u8fb2\u5730",id:"\u8a72\u5951\u4f5c\u5408\u7d04\u5e95\u4e0b\u7121\u5951\u4f5c\u8fb2\u5730",level:3},{value:"\u8a72\u5951\u4f5c\u5408\u7d04\u4e0d\u5b58\u5728",id:"\u8a72\u5951\u4f5c\u5408\u7d04\u4e0d\u5b58\u5728",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],c={toc:u},y="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b-\u5951\u4f5c\u5408\u7d04-\u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730"},"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730"),(0,a.yg)("p",null,"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730"),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/contract/query/getAllCl"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"GET"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,a.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"id"),": \u5951\u4f5c\u5408\u7d04\u7684 id")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "id": number\n}\n')),(0,a.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u8a72 \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709 \u5951\u4f5c\u8fb2\u5730 \u8cc7\u6599  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"land"),": \u5f15\u7528\u8fb2\u5730\u7684 \u8cc7\u6599"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"crop"),": \u5f15\u7528\u4f5c\u7269\u54c1\u7a2e\u7684 \u8cc7\u6599"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"actual_yield"),": \u5be6\u969b\u7522\u91cf (\u4f7f\u7528 string \u7d00\u9304)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"actual_yield_unit"),": \u5be6\u969b\u7522\u91cf\u55ae\u4f4d (1: \u53f0\u65a4, 2: \u516c\u65a4, 3: \u5206)")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"getAllCl \u6703\u628a\u6709\u5f15\u7528\u5916\u9375(id)\u7684\u90e8\u5206\uff0c\u4e00\u4f75\u628a\u5916\u9375\u8cc7\u6599\u62bd\u53d6\u51fa\u4f86\u5408\u4f75\u5230\u56de\u50b3\u7684\u8cc7\u6599\u4e2d",(0,a.yg)("br",{parentName:"p"}),"\n","\u4f46\u7121\u6cd5\u76f4\u63a5\u5c0d\u5916\u9375\u4e2d\u7684\u8cc7\u6599\u9032\u884c\u76f4\u63a5\u64cd\u4f5c\u4fee\u6539\uff0c\u53ea\u80fd\u4f7f\u7528\u5916\u9375\u7684 id \u9032\u884c")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/next/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"FK_NOT_FOUND")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,a.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("h3",{id:"\u6210\u529f\u7372\u53d6"},"\u6210\u529f\u7372\u53d6"),(0,a.yg)("p",null,"\u56de\u50b3 \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730",(0,a.yg)("br",{parentName:"p"}),"\n","\u683c\u5f0f  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "id": number,\n            "actual_yield": string,\n            "actual_yield_unit": number,\n            "crop": {\n                "id": number,\n                "name": string,\n                "unit_yield": number,\n                "unit": number,\n                "contract_order_list": string,  // "CLTypes,CLTypes, ..."\n                "estimated_time": string        // "number,number, ..."\n            },\n            "land": {\n                "id": number,\n                "no": string,\n                "city": string,\n                "town": string,\n                "section": string,\n                "subsection": string | null,\n                "owner_name": string,\n                "owner_id": string,\n                "area": number,\n                "area_right": number | null,\n                "area_arable": number | null,\n                "type": number,\n                "is_contracting": number\n            }\n        },\n        { ... }\n    ]\n}\n')),(0,a.yg)("p",null,"\u7bc4\u4f8b  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "id": 2,\n            "actual_yield": "1004.32",\n            "actual_yield_unit": 2,\n            "crop": {\n                "id": 15,\n                "name": "\u53f0\u535711",\n                "unit_yield": 400,\n                "unit": 2,\n                "contract_order_list": "200,100,101,102,202,301,203,103,302,201,303,304,104",\n                "estimated_time": "0,0,3,0,15,15,0,15,0,20,10,15,0"\n            },\n            "land": {\n                "id": 24,\n                "no": "19620006",\n                "city": "\u5c4f\u6771\u7e23",\n                "town": "\u65b0\u5712",\n                "section": "\u65b0\u5409",\n                "subsection": null,\n                "owner_name": "\u674e\u9cf3\u96f2",\n                "owner_id": "T221484747",\n                "area": 0.25,\n                "area_right": 0.25,\n                "area_arable": null,\n                "type": 1,\n                "is_contracting": 0\n            }\n        },\n        { ... }\n    ]\n}\n')),(0,a.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"\u8a72\u5951\u4f5c\u5408\u7d04\u5e95\u4e0b\u7121\u5951\u4f5c\u8fb2\u5730"},"\u8a72\u5951\u4f5c\u5408\u7d04\u5e95\u4e0b\u7121\u5951\u4f5c\u8fb2\u5730"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"\u8a72\u5951\u4f5c\u5408\u7d04\u4e0d\u5b58\u5728"},"\u8a72\u5951\u4f5c\u5408\u7d04\u4e0d\u5b58\u5728"),(0,a.yg)("p",null,"\u56de\u50b3\u4e0d\u5b58\u5728\u7684 contract id  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.FK_NOT_FOUND,\n    "missingFK": MissingFK.CONTRACT_ID,\n    "data": [\n        { \n            "id": 30 \n        }\n    ]\n}\n')),(0,a.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}g.isMDXComponent=!0}}]);