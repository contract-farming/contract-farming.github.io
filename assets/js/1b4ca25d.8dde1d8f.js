"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[3870],{3905:(n,e,t)=>{t.d(e,{Zo:()=>m,kt:()=>s});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),u=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},m=function(n){var e=u(n.components);return a.createElement(o.Provider,{value:e},n.children)},d="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,o=n.parentName,m=p(n,["components","mdxType","originalType","parentName"]),d=u(t),k=r,s=d["".concat(o,".").concat(k)]||d[k]||c[k]||l;return t?a.createElement(s,i(i({ref:e},m),{},{components:t})):a.createElement(s,i({ref:e},m))}));function s(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=n,p[d]="string"==typeof n?n:r,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3203:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={},i="\u7372\u53d6 \u5951\u4f5c\u8fb2\u5730 \u6240\u6709\u5167\u5bb9",p={unversionedId:"cl/getAll",id:"cl/getAll",title:"\u7372\u53d6 \u5951\u4f5c\u8fb2\u5730 \u6240\u6709\u5167\u5bb9",description:"\u7372\u53d6\u5951\u4f5c\u8fb2\u5730\u6240\u6709\u5167\u5bb9",source:"@site/docs/cl/getAll.md",sourceDirName:"cl",slug:"/cl/getAll",permalink:"/docs/cl/getAll",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/cl/getAll.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u522a\u9664\u5176\u4e2d\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",permalink:"/docs/cl/deleteOne"},next:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u8fb2\u5730 \u5167\u5bb9",permalink:"/docs/cl/getOne"}},o={},u=[{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],m={toc:u},d="wrapper";function c(n){let{components:e,...t}=n;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7372\u53d6-\u5951\u4f5c\u8fb2\u5730-\u6240\u6709\u5167\u5bb9"},"\u7372\u53d6 \u5951\u4f5c\u8fb2\u5730 \u6240\u6709\u5167\u5bb9"),(0,r.kt)("p",null,"\u7372\u53d6\u5951\u4f5c\u8fb2\u5730\u6240\u6709\u5167\u5bb9"),(0,r.kt)("p",null,"PATH: ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/cl/getAll"),(0,r.kt)("br",{parentName:"p"}),"\n","Method: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),(0,r.kt)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),(0,r.kt)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"  "),(0,r.kt)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,r.kt)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6240\u6709 \u5951\u4f5c\u8fb2\u5730 \u8cc7\u6599  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract"),": \u5f15\u7528\u5951\u4f5c\u5408\u7d04\u7684 \u8cc7\u6599   \u5916\u9375(uuid)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"land"),": \u5f15\u7528\u8fb2\u5730\u7684 \u8cc7\u6599           \u5916\u9375(uuid)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crop"),": \u5f15\u7528\u4f5c\u7269\u54c1\u7a2e\u7684 \u8cc7\u6599       \u5916\u9375(uuid)")),(0,r.kt)("p",null,"\u6574\u5730"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prepare_confirm"),": \u78ba\u8a8d           (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prepare_date"),": \u65e5\u671f              (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")")),(0,r.kt)("p",null,"\u63d2\u79e7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_confirm"),": \u78ba\u8a8d             (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_recv_date"),": \u9818\u82d7\u65e5\u671f       (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_date"),": \u63d2\u79e7\u65e5\u671f            (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_count"),": \u79e7\u82d7\u6578\u91cf           "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_name"),": \u79e7\u82d7\u9818\u53d6\u4eba          (",(0,r.kt)("inlineCode",{parentName:"li"},"\u6700\u5927\u9577\u5ea620"),")")),(0,r.kt)("p",null,"\u9664\u8349"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed_confirm"),": \u78ba\u8a8d              (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed_date"),": \u65e5\u671f                 (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed_pest"),": \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 \u8cc7\u6599   \u5916\u9375(uuid)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed_amount"),": \u7528\u91cf(\u516c\u5347)          (",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")")),(0,r.kt)("p",null,"\u5674\u85e5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spray_confirm"),": \u78ba\u8a8d             (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spray_date"),": \u65e5\u671f                (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spray_pest"),": \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 \u8cc7\u6599  \u5916\u9375(uuid)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spray_amount"),": \u7528\u91cf(\u516c\u5347)         (",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")")),(0,r.kt)("p",null,"\u66ec\u7530"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bask_confirm"),": \u78ba\u8a8d              (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bask_date"),": \u65e5\u671f                 (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")")),(0,r.kt)("p",null,"\u7a57\u524d\u80a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_fert_confirm"),": \u78ba\u8a8d          (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_fert_date"),": \u65e5\u671f             (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_fert"),": \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 \u8cc7\u6599    \u5916\u9375(uuid)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_fert_amount"),": \u7528\u91cf(\u516c\u5347)      (",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")")),(0,r.kt)("p",null,"\u7a57\u5f8c\u80a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_fert_confirm"),": \u78ba\u8a8d         (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_fert_date"),": \u65e5\u671f            (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_fert"),": \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 \u8cc7\u6599   \u5916\u9375(uuid)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_fert_amount"),": \u7528\u91cf(\u516c\u5347)     (",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")")),(0,r.kt)("p",null,"\u63a1\u6536"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"harvest_confirm"),": \u78ba\u8a8d           (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"harvest_date"),": \u65e5\u671f              (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u78ba\u8a8d\u53ea\u80fd\u70ba ","[",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"]"," \u4ee5\u5916\u5176\u4ed6\u53c3\u6578\u53ef\u70ba\u7a7a\u503c (",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")",(0,r.kt)("br",{parentName:"p"}),"\n","\u7372\u53d6\u5167\u5bb9\u6642\u53ea\u6703\u7372\u5f97\u5230 null \u800c\u975e ",(0,r.kt)("a",{parentName:"p",href:"/docs/types#requestparameterformat"},(0,r.kt)("strong",{parentName:"a"},"\u7a7a\u503c\u4f54\u4f4d\u7b26")," (",(0,r.kt)("inlineCode",{parentName:"a"},"'EMPTY_DATA'"),")"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"getAll \u6703\u628a\u6709\u5f15\u7528\u5916\u9375(uuid)\u7684\u90e8\u5206\uff0c\u4e00\u4f75\u628a\u5916\u9375\u8cc7\u6599\u62bd\u53d6\u51fa\u4f86\u5408\u4f75\u5230\u56de\u50b3\u7684\u8cc7\u6599\u4e2d",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f46\u7121\u6cd5\u76f4\u63a5\u5c0d\u5916\u9375\u4e2d\u7684\u8cc7\u6599\u9032\u884c\u76f4\u63a5\u64cd\u4f5c\u4fee\u6539\uff0c\u53ea\u80fd\u4f7f\u7528\u5916\u9375\u7684 uuid \u9032\u884c")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,r.kt)("inlineCode",{parentName:"a"},"StatusCode")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,r.kt)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            uuid: number,\n            contract: { } | null,               // \u5f15\u7528\u5951\u4f5c\u5408\u7d04\u7684 \u8cc7\u6599\n            land: { } | null,                   // \u5f15\u7528\u8fb2\u5730\u7684 \u8cc7\u6599\n            crop: { } | null,                   // \u5f15\u7528\u4f5c\u7269\u54c1\u7a2e\u7684 \u8cc7\u6599\n\n            // \u6574\u5730\n            prepare_confirm: number,            // \u78ba\u8a8d                     (Y/N) [0, 1]\n            prepare_date: string | null,        // \u65e5\u671f                     Date (YYYY-MM-DD)\n\n            // \u63d2\u79e7\n            plant_confirm: number,              // \u78ba\u8a8d                     (Y/N) [0, 1]\n            plant_recv_date: string | null,     // \u9818\u82d7\u65e5\u671f                 Date (YYYY-MM-DD)\n            plant_date: string | null,          // \u63d2\u79e7\u65e5\u671f                 Date (YYYY-MM-DD)\n            plant_count: number | null,         // \u79e7\u82d7\u6578\u91cf                 (INT_UNSIGNED)\n            plant_name: string | null,          // \u79e7\u82d7\u9818\u53d6\u4eba               string(20)\n\n            // \u9664\u8349\n            weed_confirm: number,               // \u78ba\u8a8d                     (Y/N) [0, 1]\n            weed_date: string | null,           // \u65e5\u671f                     Date (YYYY-MM-DD)\n            weed_pest: { } | null,              // \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 \u8cc7\u6599\n            weed_amount: number | null,         // \u7528\u91cf(\u516c\u5347)               float\n\n            // \u5674\u85e5\n            spray_confirm: number,              // \u78ba\u8a8d                     (Y/N) [0, 1]\n            spray_date: string | null,          // \u65e5\u671f                     Date (YYYY-MM-DD)\n            spray_pest: { } | null,             // \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 \u8cc7\u6599\n            spray_amount: number | null,        // \u7528\u91cf(\u516c\u5347)               float\n\n            // \u66ec\u7530\n            bask_confirm: number,               // \u78ba\u8a8d                     (Y/N) [0, 1]\n            bask_date: string | null,           // \u65e5\u671f                     Date (YYYY-MM-DD)\n\n            // \u7a57\u524d\u80a5\n            pre_fert_confirm: number,           // \u78ba\u8a8d                     (Y/N) [0, 1]\n            pre_fert_date: string | null,       // \u65e5\u671f                     Date (YYYY-MM-DD)\n            pre_fert: { } | null,               // \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 \u8cc7\u6599\n            pre_fert_amount: number | null,     // \u7528\u91cf(\u516c\u5347)               float\n\n            // \u7a57\u5f8c\u80a5\n            post_fert_confirm: number,          // \u78ba\u8a8d                     (Y/N) [0, 1]\n            post_fert_date: string | null,      // \u65e5\u671f                     Date (YYYY-MM-DD)\n            post_fert: { } | null,              // \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 \u8cc7\u6599\n            post_fert_amount: number | null,    // \u7528\u91cf(\u516c\u5347)               float\n\n            // \u63a1\u6536\n            harvest_confirm: number,            // \u78ba\u8a8d                     (Y/N) [0, 1]\n            harvest_date: string | null         // \u65e5\u671f                     Date (YYYY-MM-DD)\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 1,\n            "contract": {\n                "uuid": 5,\n                "year": 2023,\n                "no": 2,\n                "farmer": {\n                    "uuid": 190,\n                    "id": "T153864229",\n                    "name": "\u9ec3\u83ef\u570b",\n                    "phone": "0948622783",\n                    "address": "\u5c4f\u6771\u7e23\u65b0\u5712\u9109\u8208\u8fb2\u8def39\u865f"\n                },\n                "finish": 1\n            },\n            "land": {\n                "uuid": 100,\n                "no": "22670000",\n                "lot": "\u65b0\u5712\u65b0\u5409",\n                "class": "\u65f1",\n                "owner_name": "\u4f59\u5764\u5ead",\n                "owner_id": "T121660334",\n                "area": 0.0682,\n                "area_right": 0.0682,\n                "area_arable": 0.0682,\n                "type": 1,\n                "contracting": 0\n            },\n            "crop": {\n                "uuid": 41,\n                "name": "\u7d05\u8c462",\n                "unit_yield": 65,\n                "unit": 1\n            },\n            "prepare_confirm": 0,\n            "prepare_date": "2023-09-09",\n            "plant_confirm": 0,\n            "plant_recv_date": "2023-09-09",\n            "plant_date": "2023-09-09",\n            "plant_count": 10,\n            "plant_name": "\u838aO\u57ce",\n            "weed_confirm": 0,\n            "weed_date": "2023-09-09",\n            "weed_pest": {\n                "uuid": 3,\n                "name": "\u8fb2\u85e5\u4e09\u5341\u865f"\n            },\n            "weed_amount": 10,\n            "spray_confirm": 0,\n            "spray_date": "2023-09-09",\n            "spray_pest": {\n                "uuid": 3,\n                "name": "\u8fb2\u85e5\u4e09\u5341\u865f"\n            },\n            "spray_amount": 10,\n            "bask_confirm": 0,\n            "bask_date": "2023-09-09",\n            "pre_fert_confirm": 0,\n            "pre_fert_date": "2023-09-09",\n            "pre_fert": {\n                "uuid": 21,\n                "name": "\u91d1\u5777\u62c9"\n            },\n            "pre_fert_amount": 10,\n            "post_fert_confirm": 0,\n            "post_fert_date": "2023-09-09",\n            "post_fert": {\n                "uuid": 21,\n                "name": "\u91d1\u5777\u62c9"\n            },\n            "post_fert_amount": 10,\n            "harvest_confirm": 0,\n            "harvest_date": "2023-09-09"\n        },\n        {\n            "uuid": 6,\n            "contract": {\n                "uuid": null,\n                "year": null,\n                "no": null,\n                "farmer": {\n                    "uuid": null,\n                    "id": null,\n                    "name": null,\n                    "phone": null,\n                    "address": null\n                },\n                "finish": null\n            },\n            "land": {\n                "uuid": 100,\n                "no": "22670000",\n                "lot": "\u65b0\u5712\u65b0\u5409",\n                "class": "\u65f1",\n                "owner_name": "\u4f59\u5764\u5ead",\n                "owner_id": "T121660334",\n                "area": 0.0682,\n                "area_right": 0.0682,\n                "area_arable": 0.0682,\n                "type": 1,\n                "contracting": 0\n            },\n            "crop": {\n                "uuid": 41,\n                "name": "\u7d05\u8c462",\n                "unit_yield": 65,\n                "unit": 1\n            },\n            "prepare_confirm": 0,\n            "prepare_date": null,\n            "plant_confirm": 0,\n            "plant_recv_date": null,\n            "plant_date": null,\n            "plant_count": 10,\n            "plant_name": "\u838aO\u57ce",\n            "weed_confirm": 0,\n            "weed_date": null,\n            "weed_pest": {\n                "uuid": 3,\n                "name": "\u8fb2\u85e5\u4e09\u5341\u865f"\n            },\n            "weed_amount": null,\n            "spray_confirm": 0,\n            "spray_date": "2023-09-09",\n            "spray_pest": {\n                "uuid": 3,\n                "name": "\u8fb2\u85e5\u4e09\u5341\u865f"\n            },\n            "spray_amount": 10,\n            "bask_confirm": 0,\n            "bask_date": "2023-09-09",\n            "pre_fert_confirm": 0,\n            "pre_fert_date": "2023-09-09",\n            "pre_fert": {\n                "uuid": 21,\n                "name": "\u91d1\u5777\u62c9"\n            },\n            "pre_fert_amount": 10,\n            "post_fert_confirm": 0,\n            "post_fert_date": "2023-09-09",\n            "post_fert": {\n                "uuid": 21,\n                "name": "\u91d1\u5777\u62c9"\n            },\n            "post_fert_amount": 10,\n            "harvest_confirm": 0,\n            "harvest_date": "2023-09-09"\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);