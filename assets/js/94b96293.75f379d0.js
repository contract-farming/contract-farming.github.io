"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[3547],{3982:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var r=a(8168),t=(a(6540),a(5680));const i={},l="\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9",o={unversionedId:"\u5951\u4f5c/land/getOne",id:"version-0.6.x/\u5951\u4f5c/land/getOne",title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9",description:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u8fb2\u5730\u5167\u5bb9",source:"@site/versioned_docs/version-0.6.x/\u5951\u4f5c/land/getOne.md",sourceDirName:"\u5951\u4f5c/land",slug:"/\u5951\u4f5c/land/getOne",permalink:"/docs/\u5951\u4f5c/land/getOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/versioned_docs/version-0.6.x/\u5951\u4f5c/land/getOne.md",tags:[],version:"0.6.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u4f5c\u7269\u8cc7\u6599",permalink:"/docs/\u5951\u4f5c/land/getCropData"},next:{title:"\u66f4\u65b0\u4e00\u584a\u8fb2\u5730",permalink:"/docs/\u5951\u4f5c/land/updateOne"}},p={},g=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u56de\u50b3",id:"\u6210\u529f\u56de\u50b3",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],y={toc:g},d="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,r.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b-\u8fb2\u5730-\u5167\u5bb9"},"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9"),(0,t.yg)("p",null,"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u8fb2\u5730\u5167\u5bb9"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/land/getOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"GET"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"id"),": \u8fb2\u5730\u7684 id")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "id": number\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u7684 \u8fb2\u5730 \u8cc7\u6599  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"no"),": \u5730\u865f (",(0,t.yg)("inlineCode",{parentName:"li"},"VARCHAR(20)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"city"),": \u7e23\u5e02       (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u592710\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"town"),": \u5340\u57df       (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u592710\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"section"),": \u8def\u6bb5       (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u592710\u500b\u5b57"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"subsection"),": \u5c0f\u6bb5       (",(0,t.yg)("inlineCode",{parentName:"li"},"\u6700\u592710\u500b\u5b57\u6216 null"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"owner_name"),": \u6240\u6709\u6b0a\u4eba_\u59d3\u540d   (",(0,t.yg)("inlineCode",{parentName:"li"},"VARCHAR(20)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"owner_id"),": \u6240\u6709\u6b0a\u4eba_\u8eab\u5206\u8b49   (",(0,t.yg)("inlineCode",{parentName:"li"},"\u9700\u525b\u597d10\u500b\u5b57"),") (",(0,t.yg)("inlineCode",{parentName:"li"},"VARCHAR(10)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area"),": \u672c\u7b46\u9762\u7a4d              (",(0,t.yg)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d"),") (",(0,t.yg)("inlineCode",{parentName:"li"},"DECIMAL(7, 6)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area_right"),": \u6b0a\u5229\u9762\u7a4d        (",(0,t.yg)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),") (",(0,t.yg)("inlineCode",{parentName:"li"},"DECIMAL(7, 6)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area_arable"),": \u53ef\u8015\u9762\u7a4d       (",(0,t.yg)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),") (",(0,t.yg)("inlineCode",{parentName:"li"},"DECIMAL(7, 6)"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"type"),": \u5730\u6bb5\u985e\u578b              ","[",(0,t.yg)("inlineCode",{parentName:"li"},"1"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"2"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"3"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"is_contracting"),": \u5951\u4f5c\u4e2d(Y/N)    ","[",(0,t.yg)("inlineCode",{parentName:"li"},"0"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"1"),"]")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("strong",{parentName:"p"},"\u5730\u6bb5\u985e\u578b")),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"1\uff1a\u7522\u92b7\u5c65\u6b77\uff1a\u4ee5\u7522\u92b7\u5c65\u6b77\u65b9\u5f0f\u7a2e\u690d\u7684\u5730\u6bb5"),(0,t.yg)("li",{parentName:"ul"},"2\uff1a\u65b0\u589e\u5730\u6bb5\uff1a\u65b0\u589e\u5730\u6bb5\uff0c\u5c1a\u7121\u6cd5\u4f5c\u7522\u92b7\u5c65\u6b77"),(0,t.yg)("li",{parentName:"ul"},"3\uff1a\u4e00\u822c\u5730\u6bb5\uff1a\u4e0d\u80fd\u4f5c\u7522\u92b7\u5c65\u6b77\u7684\u5730\u6bb5"))),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("inlineCode",{parentName:"p"},"\u672c\u7b46\u9762\u7a4d"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"\u6b0a\u5229\u9762\u7a4d"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"\u53ef\u8015\u9762\u7a4d")," \u4f7f\u7528 number \u683c\u5f0f\u8acb\u6c42\uff0c",(0,t.yg)("br",{parentName:"p"}),"\n","\u7372\u53d6\u8cc7\u6599\u6642\u6703\u56de\u50b3 string \u683c\u5f0f\uff0c\u524d\u7aef\u9700\u624b\u52d5\u8f49\u6210 number",(0,t.yg)("br",{parentName:"p"}),"\n","(\u56e0\u70ba DECIMAL() \u683c\u5f0f\u5f8c\u9762\u6703\u81ea\u52d5\u88dc 0 \u7684\u554f\u984c)")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u56de\u50b3"},"\u6210\u529f\u56de\u50b3"),(0,t.yg)("p",null,"\u683c\u5f0f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "id": number,\n            "no": string;\n            "city": string;\n            "town": string;\n            "section": string;\n            "subsection": string | null;\n            "owner_name": string;\n            "owner_id": string;\n            "area": number;\n            "area_right": number | null;\n            "area_arable": number | null;\n            "type": number;                 // [1, 2, 3]\n            "is_contracting": number;       // [0, 1]   (Y/N)\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"\u7bc4\u4f8b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "id": 1,\n            "no": "19620006",\n            "city": "\u5c4f\u6771\u7e23",\n            "town": "\u6f6e\u5dde",\n            "section": "\u5289\u539d\u5e84",\n            "subsection": null,\n            "owner_name": "\u674eO\u96f2",\n            "owner_id": "T125896357",\n            "area": "0.250000",\n            "area_right": "0.250000",\n            "area_arable": null,\n            "type": 1,\n            "is_contracting": 0\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"},"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}m.isMDXComponent=!0},5680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>c});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),g=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},y=function(e){var n=g(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=g(a),u=t,c=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return a?r.createElement(c,l(l({ref:n},y),{},{components:a})):r.createElement(c,l({ref:n},y))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:t,l[1]=o;for(var g=2;g<i;g++)l[g]=a[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);