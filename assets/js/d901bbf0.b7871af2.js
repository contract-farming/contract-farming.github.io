"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[8429],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(t),s=r,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||l;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={},i="\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9",o={unversionedId:"land/getOne",id:"land/getOne",title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9",description:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u8fb2\u5730\u5167\u5bb9",source:"@site/docs/land/getOne.md",sourceDirName:"land",slug:"/land/getOne",permalink:"/docs/land/getOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/land/getOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6 \u8fb2\u5730 \u6240\u6709\u5167\u5bb9",permalink:"/docs/land/getAll"},next:{title:"\u66f4\u65b0\u4e00\u584a\u8fb2\u5730",permalink:"/docs/land/updateOne"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],m={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b-\u8fb2\u5730-\u5167\u5bb9"},"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u8fb2\u5730 \u5167\u5bb9"),(0,r.kt)("p",null,"\u7372\u53d6\u5176\u4e2d\u4e00\u500b\u8fb2\u5730\u5167\u5bb9"),(0,r.kt)("p",null,"PATH: ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/land/getOne"),(0,r.kt)("br",{parentName:"p"}),"\n","Method: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),(0,r.kt)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),(0,r.kt)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"  "),(0,r.kt)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid"),": \u8fb2\u5730\u7684 uuid")),(0,r.kt)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,r.kt)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6307\u5b9a\u7684 \u8fb2\u5730 \u8cc7\u6599  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"no"),": \u5730\u865f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lot"),": \u5730\u6bb5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"class"),": \u5730\u76ee                 ","[",(0,r.kt)("inlineCode",{parentName:"li"},'"\u7530"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},'"\u65f1"'),", ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner_name"),": \u6240\u6709\u6b0a\u4eba_\u59d3\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owner_id"),": \u6240\u6709\u6b0a\u4eba_\u8eab\u5206\u8b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"area"),": \u672c\u7b46\u9762\u7a4d              ","[",(0,r.kt)("inlineCode",{parentName:"li"},"number"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"area_right"),": \u6b0a\u5229\u9762\u7a4d        ","[",(0,r.kt)("inlineCode",{parentName:"li"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"area_arable"),": \u53ef\u8015\u9762\u7a4d       ","[",(0,r.kt)("inlineCode",{parentName:"li"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": \u5730\u6bb5\u985e\u578b              ","[",(0,r.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contracting"),": \u5951\u4f5c\u4e2d(Y/N)    ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u672c\u7b46\u9762\u7a4d(area)"),", ",(0,r.kt)("strong",{parentName:"p"},"\u6b0a\u5229\u9762\u7a4d(area_right)"),", ",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u8015\u9762\u7a4d(area_arable)"),(0,r.kt)("br",{parentName:"p"}),"\n","\u7686\u70ba\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u7684\u503c",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u770b\u5230\u5c0f\u65bc\u5f8c\u516d\u4f4d\u7684\u90fd\u662f\u88dc0\u88ab\u8cc7\u6599\u5eab\u6368\u68c4\u6389\u7684  "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u6b0a\u5229\u9762\u7a4d(area_right)"),", ",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u8015\u9762\u7a4d(area_arable)"),", ",(0,r.kt)("strong",{parentName:"p"},"\u5730\u76ee(class)")," \u6709\u53ef\u80fd\u662f null  ")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u5730\u6bb5\u985e\u578b")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"1\uff1a\u7522\u92b7\u5c65\u6b77\uff1a\u4ee5\u7522\u92b7\u5c65\u6b77\u65b9\u5f0f\u7a2e\u690d\u7684\u5730\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"2\uff1a\u65b0\u589e\u5730\u6bb5\uff1a\u65b0\u589e\u5730\u6bb5\uff0c\u5c1a\u7121\u6cd5\u4f5c\u7522\u92b7\u5c65\u6b77"),(0,r.kt)("li",{parentName:"ul"},"3\uff1a\u4e00\u822c\u5730\u6bb5\uff1a\u4e0d\u80fd\u4f5c\u7522\u92b7\u5c65\u6b77\u7684\u5730\u6bb5"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,r.kt)("inlineCode",{parentName:"a"},"StatusCode")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,r.kt)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            uuid: number;\n            no: string;\n            lot: string;\n            class: "\u7530" | "\u65f1" | null;\n            owner_name: string;\n            owner_id: string;\n            area: number;\n            area_right: number | null;\n            area_arable: number | null;\n            type: number;           // [1, 2, 3]\n            contracting: number;    // [0, 1]   (Y/N)\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u5b58\u5728\u8a72\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 343,\n            "no": "05000000",\n            "lot": "\u6f6e\u5dde\u5289\u539d\u5e84",\n            "class": "\u7530",\n            "owner_name": "\u5289\u7a4e\u4ec1",\n            "owner_id": "T123958060",\n            "area": 0.422734,\n            "area_right": 0.140911,\n            "area_arable": null,\n            "type": 1,\n            "contracting": 0\n        },\n        {\n            "uuid": 344,\n            "no": "01910000",\n            "lot": "\u65b0\u57e4\u5357\u5cb8",\n            "class": null,\n            "owner_name": "\u6797\u65b9\u610f",\n            "owner_id": "T221521905",\n            "area": 0.6421,\n            "area_right": 0.6421,\n            "area_arable": 0.6421,\n            "type": 1,\n            "contracting": 0\n        },\n        {\n            "uuid": 345,\n            "no": "05000000",\n            "lot": "\u6f6e\u5dde\u5289\u539d\u5e84",\n            "class": "\u7530",\n            "owner_name": "\u5289\u7a4e\u6587",\n            "owner_id": "T123356888",\n            "area": 0.422734,\n            "area_right": null,\n            "area_arable": null,\n            "type": 1,\n            "contracting": 0\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,r.kt)("p",null,"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')))}c.isMDXComponent=!0}}]);