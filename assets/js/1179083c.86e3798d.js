"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[4931],{5680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>c});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),g=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},y=function(e){var n=g(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),m=g(a),u=t,c=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(c,i(i({ref:n},y),{},{components:a})):r.createElement(c,i({ref:n},y))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:t,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9412:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=a(8168),t=(a(6540),a(5680));const l={},i="\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9",o={unversionedId:"\u5951\u4f5c/land/getOne",id:"version-0.4.0/\u5951\u4f5c/land/getOne",title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9",description:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u8fb2\u5730\u5167\u5bb9",source:"@site/versioned_docs/version-0.4.0/\u5951\u4f5c/land/getOne.md",sourceDirName:"\u5951\u4f5c/land",slug:"/\u5951\u4f5c/land/getOne",permalink:"/docs/\u5951\u4f5c/land/getOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/versioned_docs/version-0.4.0/\u5951\u4f5c/land/getOne.md",tags:[],version:"0.4.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6 \u8fb2\u5730 \u6240\u6709\u5167\u5bb9",permalink:"/docs/\u5951\u4f5c/land/getAll"},next:{title:"\u66f4\u65b0\u4e00\u584a\u8fb2\u5730",permalink:"/docs/\u5951\u4f5c/land/updateOne"}},p={},g=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u56de\u50b3",id:"\u6210\u529f\u56de\u50b3",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],y={toc:g},m="wrapper";function d(e){let{components:n,...a}=e;return(0,t.yg)(m,(0,r.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b-\u8fb2\u5730-\u5167\u5bb9"},"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9"),(0,t.yg)("p",null,"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u8fb2\u5730\u5167\u5bb9"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/land/getOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"GET"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"uuid"),": \u8fb2\u5730\u7684 uuid")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u7684 \u8fb2\u5730 \u8cc7\u6599  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"no"),": \u5730\u865f"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"lot"),": \u5730\u6bb5"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"class"),": \u5730\u76ee                 ","[",(0,t.yg)("inlineCode",{parentName:"li"},'"\u7530"'),", ",(0,t.yg)("inlineCode",{parentName:"li"},'"\u65f1"'),", ",(0,t.yg)("inlineCode",{parentName:"li"},"null"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"owner_name"),": \u6240\u6709\u6b0a\u4eba_\u59d3\u540d"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"owner_id"),": \u6240\u6709\u6b0a\u4eba_\u8eab\u5206\u8b49"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area"),": \u672c\u7b46\u9762\u7a4d              ","[",(0,t.yg)("inlineCode",{parentName:"li"},"number"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area_right"),": \u6b0a\u5229\u9762\u7a4d        ","[",(0,t.yg)("inlineCode",{parentName:"li"},"number"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"null"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"area_arable"),": \u53ef\u8015\u9762\u7a4d       ","[",(0,t.yg)("inlineCode",{parentName:"li"},"number"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"null"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"type"),": \u5730\u6bb5\u985e\u578b              ","[",(0,t.yg)("inlineCode",{parentName:"li"},"1"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"2"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"3"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"contracting"),": \u5951\u4f5c\u4e2d(Y/N)    ","[",(0,t.yg)("inlineCode",{parentName:"li"},"0"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"1"),"]")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("strong",{parentName:"p"},"\u672c\u7b46\u9762\u7a4d(area)"),", ",(0,t.yg)("strong",{parentName:"p"},"\u6b0a\u5229\u9762\u7a4d(area_right)"),", ",(0,t.yg)("strong",{parentName:"p"},"\u53ef\u8015\u9762\u7a4d(area_arable)"),(0,t.yg)("br",{parentName:"p"}),"\n","\u7686\u70ba\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u7684\u503c",(0,t.yg)("br",{parentName:"p"}),"\n","\u5982\u679c\u770b\u5230\u5c0f\u65bc\u5f8c\u516d\u4f4d\u7684\u90fd\u662f\u88dc0\u88ab\u8cc7\u6599\u5eab\u6368\u68c4\u6389\u7684  "),(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("strong",{parentName:"p"},"\u6b0a\u5229\u9762\u7a4d(area_right)"),", ",(0,t.yg)("strong",{parentName:"p"},"\u53ef\u8015\u9762\u7a4d(area_arable)"),", ",(0,t.yg)("strong",{parentName:"p"},"\u5730\u76ee(class)")," \u6709\u53ef\u80fd\u662f null  ")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("strong",{parentName:"p"},"\u5730\u6bb5\u985e\u578b")),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"1\uff1a\u7522\u92b7\u5c65\u6b77\uff1a\u4ee5\u7522\u92b7\u5c65\u6b77\u65b9\u5f0f\u7a2e\u690d\u7684\u5730\u6bb5"),(0,t.yg)("li",{parentName:"ul"},"2\uff1a\u65b0\u589e\u5730\u6bb5\uff1a\u65b0\u589e\u5730\u6bb5\uff0c\u5c1a\u7121\u6cd5\u4f5c\u7522\u92b7\u5c65\u6b77"),(0,t.yg)("li",{parentName:"ul"},"3\uff1a\u4e00\u822c\u5730\u6bb5\uff1a\u4e0d\u80fd\u4f5c\u7522\u92b7\u5c65\u6b77\u7684\u5730\u6bb5"))),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u56de\u50b3"},"\u6210\u529f\u56de\u50b3"),(0,t.yg)("p",null,"\u683c\u5f0f"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            uuid: number;\n            no: string;\n            lot: string;\n            class: "\u7530" | "\u65f1" | null;\n            owner_name: string;\n            owner_id: string;\n            area: number;\n            area_right: number | null;\n            area_arable: number | null;\n            type: number;           // [1, 2, 3]\n            contracting: number;    // [0, 1]   (Y/N)\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"\u7bc4\u4f8b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": [\n        {\n            "uuid": 343,\n            "no": "05000000",\n            "lot": "\u6f6e\u5dde\u5289\u539d\u5e84",\n            "class": "\u7530",\n            "owner_name": "\u5289\u7a4e\u4ec1",\n            "owner_id": "T123958060",\n            "area": 0.422734,\n            "area_right": 0.140911,\n            "area_arable": null,\n            "type": 1,\n            "contracting": 0\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"},"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}d.isMDXComponent=!0}}]);