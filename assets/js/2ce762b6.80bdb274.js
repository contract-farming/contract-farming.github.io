"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[2650],{5680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>c});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),y=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},g=function(e){var n=y(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=y(a),u=t,c=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?r.createElement(c,i(i({ref:n},g),{},{components:a})):r.createElement(c,i({ref:n},g))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:t,i[1]=o;for(var y=2;y<l;y++)i[y]=a[y];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4861:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>y});var r=a(8168),t=(a(6540),a(5680));const l={},i="\u66f4\u65b0\u4e00\u584a\u8fb2\u5730",o={unversionedId:"\u5951\u4f5c/land/updateOne",id:"\u5951\u4f5c/land/updateOne",title:"\u66f4\u65b0\u4e00\u584a\u8fb2\u5730",description:"\u66f4\u65b0\u4e00\u584a\u8fb2\u5730",source:"@site/docs/\u5951\u4f5c/land/updateOne.md",sourceDirName:"\u5951\u4f5c/land",slug:"/\u5951\u4f5c/land/updateOne",permalink:"/docs/next/\u5951\u4f5c/land/updateOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/land/updateOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9",permalink:"/docs/next/\u5951\u4f5c/land/getOne"},next:{title:"\u589e\u52a0\u4e00\u500b \u8fb2\u85e5\u7a2e\u985e",permalink:"/docs/next/\u5951\u4f5c/pest/addOne"}},p={},y=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u66f4\u65b0",id:"\u6210\u529f\u66f4\u65b0",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"\u5728\u8cc7\u6599\u5eab\u4e2d\u5df2\u5b58\u5728\u8207\u5f85\u66f4\u65b0\u8cc7\u6599\u76f8\u540c\u7684\u8cc7\u6599",id:"\u5728\u8cc7\u6599\u5eab\u4e2d\u5df2\u5b58\u5728\u8207\u5f85\u66f4\u65b0\u8cc7\u6599\u76f8\u540c\u7684\u8cc7\u6599",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],g={toc:y},d="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,r.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u66f4\u65b0\u4e00\u584a\u8fb2\u5730"},"\u66f4\u65b0\u4e00\u584a\u8fb2\u5730"),(0,t.yg)("p",null,"\u66f4\u65b0\u4e00\u584a\u8fb2\u5730"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/land/updateOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"PUT"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"uuid"),": \u8fb2\u5730\u7684 uuid (",(0,t.yg)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u66f4\u65b0"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"no"),": \u5f85\u66f4\u65b0\u7684\u5730\u865f        (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927\u9577\u5ea620"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"lot"),": \u5f85\u66f4\u65b0\u7684\u5730\u6bb5       (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927\u9577\u5ea610"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"class"),": \u5f85\u66f4\u65b0\u7684\u5730\u76ee                 ","[",(0,t.yg)("inlineCode",{parentName:"li"},'"\u7530"'),", ",(0,t.yg)("inlineCode",{parentName:"li"},'"\u65f1"'),", ",(0,t.yg)("inlineCode",{parentName:"li"},"null"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"owner_name"),": \u5f85\u66f4\u65b0\u7684\u6240\u6709\u6b0a\u4eba_\u59d3\u540d   (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u5927\u9577\u5ea610"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"owner_id"),": \u5f85\u66f4\u65b0\u7684\u6240\u6709\u6b0a\u4eba_\u8eab\u5206\u8b49   (",(0,t.yg)("inlineCode",{parentName:"li"},"\u8eab\u5206\u8b49\u70ba10\u78bc\u5b57\u4e32"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area"),": \u5f85\u66f4\u65b0\u7684\u672c\u7b46\u9762\u7a4d              (",(0,t.yg)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area_right"),": \u5f85\u66f4\u65b0\u7684\u6b0a\u5229\u9762\u7a4d        (",(0,t.yg)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area_arable"),": \u5f85\u66f4\u65b0\u7684\u53ef\u8015\u9762\u7a4d       (",(0,t.yg)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"type"),": \u5f85\u66f4\u65b0\u7684\u5730\u6bb5\u985e\u578b              ","[",(0,t.yg)("inlineCode",{parentName:"li"},"1"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"2"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"3"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"contracting"),": \u5f85\u66f4\u65b0\u7684\u5951\u4f5c\u4e2d(Y/N)    ","[",(0,t.yg)("inlineCode",{parentName:"li"},"0"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"1"),"]")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("strong",{parentName:"p"},"\u5730\u6bb5\u985e\u578b")),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"1\uff1a\u7522\u92b7\u5c65\u6b77\uff1a\u4ee5\u7522\u92b7\u5c65\u6b77\u65b9\u5f0f\u7a2e\u690d\u7684\u5730\u6bb5"),(0,t.yg)("li",{parentName:"ul"},"2\uff1a\u65b0\u589e\u5730\u6bb5\uff1a\u65b0\u589e\u5730\u6bb5\uff0c\u5c1a\u7121\u6cd5\u4f5c\u7522\u92b7\u5c65\u6b77"),(0,t.yg)("li",{parentName:"ul"},"3\uff1a\u4e00\u822c\u5730\u6bb5\uff1a\u4e0d\u80fd\u4f5c\u7522\u92b7\u5c65\u6b77\u7684\u5730\u6bb5"))),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("inlineCode",{parentName:"p"},"class"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"area_right"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"area_arable")," \u53ef\u4ee5\u70ba\u7a7a\u503c\n\u5982\u679c\u53c3\u6578\u8981\u8868\u793a\u7a7a\u503c\u5247\u9700\u4f7f\u7528 ",(0,t.yg)("a",{parentName:"p",href:"/docs/next/types#requestparameterformat"},(0,t.yg)("strong",{parentName:"a"},"\u7a7a\u503c\u4f54\u4f4d\u7b26")," (",(0,t.yg)("inlineCode",{parentName:"a"},"'EMPTY_DATA'"),")")," \u4f86\u8868\u793a null")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number,\n    "no": string;\n    "lot": string;\n    "class": "\u7530" | "\u65f1" | null;\n    "owner_name": string;\n    "owner_id": string;\n    "area": number;\n    "area_right": number | null;\n    "area_arable": number | null;\n    "type": number;           // [1, 2, 3]\n    "contracting": number;    // [0, 1]   (Y/N)\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/next/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATA_EXISTED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u66f4\u65b0"},"\u6210\u529f\u66f4\u65b0"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"},"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u5728\u8cc7\u6599\u5eab\u4e2d\u5df2\u5b58\u5728\u8207\u5f85\u66f4\u65b0\u8cc7\u6599\u76f8\u540c\u7684\u8cc7\u6599"},"\u5728\u8cc7\u6599\u5eab\u4e2d\u5df2\u5b58\u5728\u8207\u5f85\u66f4\u65b0\u8cc7\u6599\u76f8\u540c\u7684\u8cc7\u6599"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u8cc7\u6599\u5eab\u4e2d\u76f8\u540c\u7684\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_EXISTED,\n    "data": [\n        {\n            "uuid": 448,\n            "no": "18320000",\n            "lot": "\u65b0\u5712\u65b0\u5409",\n            "class": "\u7530",\n            "owner_name": "\u694a\u9806\u6b3d",\n            "owner_id": "E102863920",\n            "area": 0.219,\n            "area_right": 0.1095,\n            "area_arable": 0.1095,\n            "type": 1,\n            "contracting": 0\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}m.isMDXComponent=!0}}]);