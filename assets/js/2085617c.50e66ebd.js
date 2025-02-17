"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[1761],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>s});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,s=d["".concat(p,".").concat(y)]||d[y]||g[y]||l;return r?t.createElement(s,i(i({ref:n},u),{},{components:r})):t.createElement(s,i({ref:n},u))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5904:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(8168),a=(r(6540),r(5680));const l={},i="\u7372\u53d6\u8a72\u5951\u4f5c\u8fb2\u5730\u7684\u5408\u7d04\u5167\u5bb9",o={unversionedId:"\u5951\u4f5c/cl/getContractData",id:"version-0.6.x/\u5951\u4f5c/cl/getContractData",title:"\u7372\u53d6\u8a72\u5951\u4f5c\u8fb2\u5730\u7684\u5408\u7d04\u5167\u5bb9",description:"\u4f7f\u7528\u5951\u4f5c\u8fb2\u5730 id \u7372\u53d6\u8a72\u5951\u4f5c\u8fb2\u5730\u7684\u5408\u7d04\u5167\u5bb9",source:"@site/versioned_docs/version-0.6.x/\u5951\u4f5c/cl/getContractData.md",sourceDirName:"\u5951\u4f5c/cl",slug:"/\u5951\u4f5c/cl/getContractData",permalink:"/docs/\u5951\u4f5c/cl/getContractData",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/versioned_docs/version-0.6.x/\u5951\u4f5c/cl/getContractData.md",tags:[],version:"0.6.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u6d41\u7a0b\u6e05\u55ae\u4e2d\u7684\u4e00\u500b\u5167\u5bb9",permalink:"/docs/\u5951\u4f5c/cl/flowlist/updateOne"},next:{title:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",permalink:"/docs/\u5951\u4f5c/cl/updateOne"}},p={},c=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u7372\u53d6",id:"\u6210\u529f\u7372\u53d6",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u8a72\u5951\u4f5c\u8fb2\u5730\u4e0d\u5b58\u5728 \u6216 \u4e0d\u5b58\u5728\u8a72\u5951\u4f5c\u5408\u7d04",id:"\u8a72\u5951\u4f5c\u8fb2\u5730\u4e0d\u5b58\u5728-\u6216-\u4e0d\u5b58\u5728\u8a72\u5951\u4f5c\u5408\u7d04",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],u={toc:c},d="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u7372\u53d6\u8a72\u5951\u4f5c\u8fb2\u5730\u7684\u5408\u7d04\u5167\u5bb9"},"\u7372\u53d6\u8a72\u5951\u4f5c\u8fb2\u5730\u7684\u5408\u7d04\u5167\u5bb9"),(0,a.yg)("p",null,"\u4f7f\u7528\u5951\u4f5c\u8fb2\u5730 id \u7372\u53d6\u8a72\u5951\u4f5c\u8fb2\u5730\u7684\u5408\u7d04\u5167\u5bb9"),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/cl/getContractData"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"GET"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,a.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"id"),": \u5951\u4f5c\u8fb2\u5730\u7684 id")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "id": number\n}\n')),(0,a.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u8a72 \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709 \u5951\u4f5c\u8fb2\u5730 \u8cc7\u6599  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"farmer"),": \u8a72\u5951\u4f5c\u8fb2\u5730\u7684\u8fb2\u6c11\u8cc7\u6599"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"crop"),": \u8a72\u5951\u4f5c\u8fb2\u5730\u7a2e\u690d\u7684\u4f5c\u7269\u54c1\u7a2e\u8cc7\u6599"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"land"),": \u8a72\u5951\u4f5c\u8fb2\u5730\u6240\u4f7f\u7528\u7684\u8fb2\u5730\u8cc7\u6599"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"actual_yield"),": \u5be6\u969b\u7522\u91cf (\u4f7f\u7528 string \u7d00\u9304)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"actual_yield_unit"),": \u5be6\u969b\u7522\u91cf\u55ae\u4f4d (1: \u53f0\u65a4, 2: \u516c\u65a4, 3: \u5206)")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,a.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("h3",{id:"\u6210\u529f\u7372\u53d6"},"\u6210\u529f\u7372\u53d6"),(0,a.yg)("p",null,"\u56de\u50b3 \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730",(0,a.yg)("br",{parentName:"p"}),"\n","\u683c\u5f0f  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "cl_id": number,\n            "contract_id": number,\n            "year": number,\n            "no": number,\n            "actual_yield": string,\n            "actual_yield_unit": number,\n            "farmer": {\n                "id": number,\n                "identity_number": string,\n                "name": string,\n                "phone": string,\n                "address": string\n            },\n            "crop": {\n                "id": number,\n                "name": string,\n                "unit_yield": number,\n                "unit": 1 | 2,\n                "contract_order_list": string,  // "CLTypes,CLTypes, ..."\n                "estimated_time": string        // "number,number, ..."\n            },\n            "land": {\n                "id": number,\n                "no": string;\n                "city": string;\n                "town": string;\n                "section": string;\n                "subsection": string | null;\n                "owner_name": string;\n                "owner_id": string;\n                "area": number;\n                "area_right": number | null;\n                "area_arable": number | null;\n                "type": number;                 // [1, 2, 3]\n                "is_contracting": number;       // [0, 1]   (Y/N)\n            }\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"\u7bc4\u4f8b  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "cl_id": 3,\n            "contract_id": 1,\n            "year": 2024,\n            "no": 1,\n            "actual_yield": "1004.32",\n            "actual_yield_unit": 2,\n            "farmer": {\n                "id": 15,\n                "identity_number": "A123456789",\n                "name": "\u65b9O\u6d0b",\n                "phone": "07-1234567",\n                "address": "\u5927\u6a39\u5340\u5b78\u57ce\u8def\u4e00\u6bb51\u865f"\n            },\n            "crop": {\n                "id": 1,\n                "name": "\u53f0\u535711",\n                "unit_yield": 400,\n                "unit": 2,\n                "contract_order_list": "200,100,101,102,202,301,203,103,302,201,303,304,104",\n                "estimated_time": "0,0,3,0,15,15,0,15,0,20,10,15,0"\n            },\n            "land": {\n                "id": 1,\n                "no": "19620006",\n                "city": "\u5c4f\u6771\u7e23",\n                "town": "\u65b0\u5712",\n                "section": "\u65b0\u5409",\n                "subsection": null,\n                "owner_name": "\u674eO\u96f2",\n                "owner_id": "T125896357",\n                "area": "0.250000",\n                "area_right": "0.250000",\n                "area_arable": null,\n                "type": 1,\n                "is_contracting": 0\n            }\n        }\n    ]\n}\n')),(0,a.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"\u8a72\u5951\u4f5c\u8fb2\u5730\u4e0d\u5b58\u5728-\u6216-\u4e0d\u5b58\u5728\u8a72\u5951\u4f5c\u5408\u7d04"},"\u8a72\u5951\u4f5c\u8fb2\u5730\u4e0d\u5b58\u5728 \u6216 \u4e0d\u5b58\u5728\u8a72\u5951\u4f5c\u5408\u7d04"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,a.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}g.isMDXComponent=!0}}]);