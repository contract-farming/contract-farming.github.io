"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[831],{2898:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=r(8168),a=(r(6540),r(5680));const l={},i="\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u5167\u5bb9",o={unversionedId:"\u5951\u4f5c/contract/getOne",id:"version-0.4.x/\u5951\u4f5c/contract/getOne",title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u5167\u5bb9",description:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u5951\u4f5c\u5408\u7d04\u5167\u5bb9",source:"@site/versioned_docs/version-0.4.x/\u5951\u4f5c/contract/getOne.md",sourceDirName:"\u5951\u4f5c/contract",slug:"/\u5951\u4f5c/contract/getOne",permalink:"/docs/0.4.x/\u5951\u4f5c/contract/getOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/versioned_docs/version-0.4.x/\u5951\u4f5c/contract/getOne.md",tags:[],version:"0.4.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6 \u5951\u4f5c\u5408\u7d04 \u6240\u6709\u5167\u5bb9",permalink:"/docs/0.4.x/\u5951\u4f5c/contract/getAll"},next:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730",permalink:"/docs/0.4.x/\u5951\u4f5c/contract/query/getAllCl"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u56de\u50b3",id:"\u6210\u529f\u56de\u50b3",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],c={toc:u},y="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b-\u5951\u4f5c\u5408\u7d04-\u5167\u5bb9"},"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u5167\u5bb9"),(0,a.yg)("p",null,"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u5951\u4f5c\u5408\u7d04\u5167\u5bb9"),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/contract/getOne"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"GET"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,a.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"uuid"),": \u5951\u4f5c\u5408\u7d04\u7684 uuid")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number\n}\n')),(0,a.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u7684 \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"year"),": \u5e74\u5ea6                     ","[",(0,a.yg)("inlineCode",{parentName:"li"},"0-65535"),"]"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"no"),": \u671f\u865f \u4e00\u5e74\u6709\u4e09\u671f             ","[",(0,a.yg)("inlineCode",{parentName:"li"},"1"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"2"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"3"),"]"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"farmer"),": \u5f15\u7528\u5951\u4f5c\u8fb2\u6c11\u7684 \u8cc7\u6599"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"finish"),": \u662f\u5426\u7d50\u6848 (Y/N)          ","[",(0,a.yg)("inlineCode",{parentName:"li"},"0"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"1"),"]"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"clCount"),": \u6b64\u5408\u7d04\u7684\u5951\u4f5c\u8fb2\u5730\u6578\u91cf")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/0.4.x/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,a.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("h3",{id:"\u6210\u529f\u56de\u50b3"},"\u6210\u529f\u56de\u50b3"),(0,a.yg)("p",null,"\u683c\u5f0f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "uuid": number,\n            "year": number,\n            "no": number,\n            "farmer": {\n                "uuid": number,\n                "id": string,\n                "name": string,\n                "phone": PhoneNumber,\n                "address": string\n            },\n            "finish": number,\n            "clCount": number\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"\u7bc4\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "uuid": 2,\n            "year": 2023,\n            "no": 3,\n            "farmer": {\n                "uuid": 35,\n                "id": "A123456789",\n                "name": "\u65b9O\u6d0b",\n                "phone": "07-1234567",\n                "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n            },\n            "finish": 0,\n            "clCount": 25\n        }\n    ]\n}\n')),(0,a.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"},"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}g.isMDXComponent=!0},5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=u(r),d=a,m=y["".concat(p,".").concat(d)]||y[d]||g[d]||l;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);