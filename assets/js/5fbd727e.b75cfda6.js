"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[5626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>N});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(t),k=r,N=d["".concat(o,".").concat(k)]||d[k]||_[k]||l;return t?a.createElement(N,i(i({ref:n},u),{},{components:t})):a.createElement(N,i({ref:n},u))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>_,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const l={},i="\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",p={unversionedId:"cl/updateOne",id:"cl/updateOne",title:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",description:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",source:"@site/docs/cl/updateOne.md",sourceDirName:"cl",slug:"/cl/updateOne",permalink:"/docs/cl/updateOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/cl/updateOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u8fb2\u5730 \u5167\u5bb9",permalink:"/docs/cl/getOne"},next:{title:"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u5408\u7d04",permalink:"/docs/contract/addOne"}},o={},m=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],u={toc:m},d="wrapper";function _(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730"},"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730"),(0,r.kt)("p",null,"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730"),(0,r.kt)("p",null,"PATH: ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/cl/updateOne"),(0,r.kt)("br",{parentName:"p"}),"\n","Method: ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT"),(0,r.kt)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),(0,r.kt)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"  "),(0,r.kt)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uuid"),": \u5951\u4f5c\u8fb2\u5730\u7684 uuid (",(0,r.kt)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u66f4\u65b0"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contract"),": \u5f15\u7528\u5951\u4f5c\u5408\u7d04\u7684 uuid   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"land"),": \u5f15\u7528\u8fb2\u5730\u7684 uuid           "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crop"),": \u5f15\u7528\u4f5c\u7269\u54c1\u7a2e\u7684 uuid       ")),(0,r.kt)("p",null,"\u6574\u5730"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prepare_confirm"),": \u5f85\u66f4\u65b0\u7684\u78ba\u8a8d           (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prepare_date"),": \u5f85\u66f4\u65b0\u7684\u65e5\u671f              (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")")),(0,r.kt)("p",null,"\u63d2\u79e7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_confirm"),": \u5f85\u66f4\u65b0\u7684\u78ba\u8a8d             (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_recv_date"),": \u5f85\u66f4\u65b0\u7684\u9818\u82d7\u65e5\u671f       (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_date"),": \u5f85\u66f4\u65b0\u7684\u63d2\u79e7\u65e5\u671f            (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_count"),": \u5f85\u66f4\u65b0\u7684\u79e7\u82d7\u6578\u91cf           "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plant_name"),": \u5f85\u66f4\u65b0\u7684\u79e7\u82d7\u9818\u53d6\u4eba          (",(0,r.kt)("inlineCode",{parentName:"li"},"\u6700\u5927\u9577\u5ea620"),")")),(0,r.kt)("p",null,"\u9664\u8349"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed_confirm"),": \u5f85\u66f4\u65b0\u7684\u78ba\u8a8d              (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed_date"),": \u5f85\u66f4\u65b0\u7684\u65e5\u671f                 (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed_pest"),": \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 uuid   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weed_amount"),": \u5f85\u66f4\u65b0\u7684\u7528\u91cf(\u516c\u5347)          (",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")")),(0,r.kt)("p",null,"\u5674\u85e5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spray_confirm"),": \u5f85\u66f4\u65b0\u7684\u78ba\u8a8d             (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spray_date"),": \u5f85\u66f4\u65b0\u7684\u65e5\u671f                (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spray_pest"),": \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 uuid  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spray_amount"),": \u5f85\u66f4\u65b0\u7684\u7528\u91cf(\u516c\u5347)         (",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")")),(0,r.kt)("p",null,"\u66ec\u7530"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bask_confirm"),": \u5f85\u66f4\u65b0\u7684\u78ba\u8a8d              (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bask_date"),": \u5f85\u66f4\u65b0\u7684\u65e5\u671f                 (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")")),(0,r.kt)("p",null,"\u7a57\u524d\u80a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_fert_confirm"),": \u5f85\u66f4\u65b0\u7684\u78ba\u8a8d          (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_fert_date"),": \u5f85\u66f4\u65b0\u7684\u65e5\u671f             (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_fert"),": \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 uuid    "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pre_fert_amount"),": \u5f85\u66f4\u65b0\u7684\u7528\u91cf(\u516c\u5347)      (",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")")),(0,r.kt)("p",null,"\u7a57\u5f8c\u80a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_fert_confirm"),": \u5f85\u66f4\u65b0\u7684\u78ba\u8a8d         (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_fert_date"),": \u5f85\u66f4\u65b0\u7684\u65e5\u671f            (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_fert"),": \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 uuid   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post_fert_amount"),": \u5f85\u66f4\u65b0\u7684\u7528\u91cf(\u516c\u5347)     (",(0,r.kt)("inlineCode",{parentName:"li"},"\u5c0f\u6578\u9ede\u5f8c\u516d\u4f4d\u6216 null"),")")),(0,r.kt)("p",null,"\u63a1\u6536"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"harvest_confirm"),": \u5f85\u66f4\u65b0\u7684\u78ba\u8a8d           (Y/N) ","[",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"harvest_date"),": \u5f85\u66f4\u65b0\u7684\u65e5\u671f              (",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),")")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u4e86\u78ba\u8a8d\u53ea\u80fd\u70ba ","[",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"]"," \u4ee5\u5916\u5176\u4ed6\u53c3\u6578\u53ef\u70ba\u7a7a\u503c (",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u53c3\u6578\u8981\u8868\u793a\u7a7a\u503c\u5247\u9700\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/docs/types#requestparameterformat"},(0,r.kt)("strong",{parentName:"a"},"\u7a7a\u503c\u4f54\u4f4d\u7b26")," (",(0,r.kt)("inlineCode",{parentName:"a"},"'EMPTY_DATA'"),")")," \u4f86\u8868\u793a null")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number,\n    "contract": number | \'EMPTY_DATA\';          // \u5f15\u7528\u5951\u4f5c\u5408\u7d04\u7684 uuid      (INT)\n    "land": number | \'EMPTY_DATA\';              // \u5f15\u7528\u8fb2\u5730\u7684 uuid          (INT)\n    "crop": number | \'EMPTY_DATA\';              // \u5f15\u7528\u4f5c\u7269\u54c1\u7a2e\u7684 uuid      (INT)\n\n    // \u6574\u5730\n    "prepare_confirm": number;                  // \u78ba\u8a8d                     (Y/N) [0, 1]\n    "prepare_date": string | \'EMPTY_DATA\';      // \u65e5\u671f                     Date (YYYY-MM-DD)\n\n    // \u63d2\u79e7\n    "plant_confirm": number;                    // \u78ba\u8a8d                     (Y/N) [0, 1]\n    "plant_recv_date": string | \'EMPTY_DATA\';   // \u9818\u82d7\u65e5\u671f                 Date (YYYY-MM-DD)\n    "plant_date": string | \'EMPTY_DATA\';        // \u63d2\u79e7\u65e5\u671f                 Date (YYYY-MM-DD)\n    "plant_count": number | \'EMPTY_DATA\';       // \u79e7\u82d7\u6578\u91cf                 (INT_UNSIGNED)\n    "plant_name": string | \'EMPTY_DATA\';        // \u79e7\u82d7\u9818\u53d6\u4eba               string(20)\n\n    // \u9664\u8349\n    "weed_confirm": number;                     // \u78ba\u8a8d                     (Y/N) [0, 1]\n    "weed_date": string | \'EMPTY_DATA\';         // \u65e5\u671f                     Date (YYYY-MM-DD)\n    "weed_pest": number | \'EMPTY_DATA\';         // \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 uuid       (INT)\n    "weed_amount": number | \'EMPTY_DATA\';       // \u7528\u91cf(\u516c\u5347)               float\n\n    // \u5674\u85e5\n    "spray_confirm": number;                    // \u78ba\u8a8d                     (Y/N) [0, 1]\n    "spray_date": string | \'EMPTY_DATA\';        // \u65e5\u671f                     Date (YYYY-MM-DD)\n    "spray_pest": number | \'EMPTY_DATA\';        // \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 uuid       (INT)\n    "spray_amount": number | \'EMPTY_DATA\';      // \u7528\u91cf(\u516c\u5347)               float\n\n    // \u66ec\u7530\n    "bask_confirm": number;                     // \u78ba\u8a8d                     (Y/N) [0, 1]\n    "bask_date": string | \'EMPTY_DATA\';         // \u65e5\u671f                     Date (YYYY-MM-DD)\n\n    // \u7a57\u524d\u80a5\n    "pre_fert_confirm": number;                 // \u78ba\u8a8d                     (Y/N) [0, 1]\n    "pre_fert_date": string | \'EMPTY_DATA\';     // \u65e5\u671f                     Date (YYYY-MM-DD)\n    "pre_fert": number | \'EMPTY_DATA\';          // \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 uuid       (INT)\n    "pre_fert_amount": number | \'EMPTY_DATA\';   // \u7528\u91cf(\u516c\u5347)               float\n\n    // \u7a57\u5f8c\u80a5\n    "post_fert_confirm": number;                // \u78ba\u8a8d                     (Y/N) [0, 1]\n    "post_fert_date": string | \'EMPTY_DATA\';    // \u65e5\u671f                     Date (YYYY-MM-DD)\n    "post_fert": number | \'EMPTY_DATA\';         // \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 uuid       (INT)\n    "post_fert_amount": number | \'EMPTY_DATA\';  // \u7528\u91cf(\u516c\u5347)               float\n\n    // \u63a1\u6536\n    "harvest_confirm": number;                  // \u78ba\u8a8d                     (Y/N) [0, 1]\n    "harvest_date": string | \'EMPTY_DATA\';      // \u65e5\u671f                     Date (YYYY-MM-DD)\n}\n')),(0,r.kt)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,r.kt)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6210\u529f\u66f4\u65b0\u7684 \u5951\u4f5c\u8fb2\u5730 \u8cc7\u6599  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,r.kt)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"200"),(0,r.kt)("li",{parentName:"ul"},"400")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,r.kt)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"FK_NOT_FOUND"')," ",(0,r.kt)("a",{parentName:"li",href:"/docs/types#clmissingtype"},(0,r.kt)("inlineCode",{parentName:"a"},'"CLMissingType"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"SAME_DATA"'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n    \"status\": StatusCode,\n    \"loadType\": LoadType,\n    \"data\": [\n        {\n            uuid: number,\n            contract: number | 'EMPTY_DATA',            // \u5f15\u7528\u5951\u4f5c\u5408\u7d04\u7684 \u8cc7\u6599\n            land: number | 'EMPTY_DATA',                // \u5f15\u7528\u8fb2\u5730\u7684 \u8cc7\u6599\n            crop: number | 'EMPTY_DATA',                // \u5f15\u7528\u4f5c\u7269\u54c1\u7a2e\u7684 \u8cc7\u6599\n\n            // \u6574\u5730\n            prepare_confirm: number,                    // \u78ba\u8a8d                     (Y/N) [0, 1]\n            prepare_date: string | 'EMPTY_DATA',        // \u65e5\u671f                     Date (YYYY-MM-DD)\n\n            // \u63d2\u79e7\n            plant_confirm: number,                      // \u78ba\u8a8d                     (Y/N) [0, 1]\n            plant_recv_date: string | 'EMPTY_DATA',     // \u9818\u82d7\u65e5\u671f                 Date (YYYY-MM-DD)\n            plant_date: string | 'EMPTY_DATA',          // \u63d2\u79e7\u65e5\u671f                 Date (YYYY-MM-DD)\n            plant_count: number | 'EMPTY_DATA',         // \u79e7\u82d7\u6578\u91cf                 (INT_UNSIGNED)\n            plant_name: string | 'EMPTY_DATA',          // \u79e7\u82d7\u9818\u53d6\u4eba               string(20)\n\n            // \u9664\u8349\n            weed_confirm: number,                       // \u78ba\u8a8d                     (Y/N) [0, 1]\n            weed_date: string | 'EMPTY_DATA',           // \u65e5\u671f                     Date (YYYY-MM-DD)\n            weed_pest: number | 'EMPTY_DATA',           // \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 \u8cc7\u6599\n            weed_amount: number | 'EMPTY_DATA',         // \u7528\u91cf(\u516c\u5347)               float\n\n            // \u5674\u85e5\n            spray_confirm: number,                      // \u78ba\u8a8d                     (Y/N) [0, 1]\n            spray_date: string | 'EMPTY_DATA',          // \u65e5\u671f                     Date (YYYY-MM-DD)\n            spray_pest: number | 'EMPTY_DATA',          // \u5f15\u7528\u8fb2\u85e5\u7a2e\u985e\u7684 \u8cc7\u6599\n            spray_amount: number | 'EMPTY_DATA',        // \u7528\u91cf(\u516c\u5347)               float\n\n            // \u66ec\u7530\n            bask_confirm: number,                       // \u78ba\u8a8d                     (Y/N) [0, 1]\n            bask_date: string | 'EMPTY_DATA',           // \u65e5\u671f                     Date (YYYY-MM-DD)\n\n            // \u7a57\u524d\u80a5\n            pre_fert_confirm: number,                   // \u78ba\u8a8d                     (Y/N) [0, 1]\n            pre_fert_date: string | 'EMPTY_DATA',       // \u65e5\u671f                     Date (YYYY-MM-DD)\n            pre_fert: number | 'EMPTY_DATA',            // \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 \u8cc7\u6599\n            pre_fert_amount: number | 'EMPTY_DATA',     // \u7528\u91cf(\u516c\u5347)               float\n\n            // \u7a57\u5f8c\u80a5\n            post_fert_confirm: number,                  // \u78ba\u8a8d                     (Y/N) [0, 1]\n            post_fert_date: string | 'EMPTY_DATA',      // \u65e5\u671f                     Date (YYYY-MM-DD)\n            post_fert: number | 'EMPTY_DATA',           // \u5f15\u7528\u80a5\u6599\u7a2e\u985e\u7684 \u8cc7\u6599\n            post_fert_amount: number | 'EMPTY_DATA',    // \u7528\u91cf(\u516c\u5347)               float\n\n            // \u63a1\u6536\n            harvest_confirm: number,                    // \u78ba\u8a8d                     (Y/N) [0, 1]\n            harvest_date: string | 'EMPTY_DATA'         // \u65e5\u671f                     Date (YYYY-MM-DD)\n        }\n    ]\n}\n")),(0,r.kt)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,r.kt)("p",null,"\u6210\u529f\u66f4\u65b0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u6210\u529f\u66f4\u65b0\u5f8c\u7684\u8cc7\u6599  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 1,\n            "contract": 5,\n            "land": 100,\n            "crop": 41,\n            "prepare_confirm": 0,\n            "prepare_date": "2023-09-10",\n            "plant_confirm": 0,\n            "plant_recv_date": "2023-09-09",\n            "plant_date": "2023-09-09",\n            "plant_count": 10,\n            "plant_name": "\u838aO\u57ce",\n            "weed_confirm": 0,\n            "weed_date": "2023-09-09",\n            "weed_pest": 3,\n            "weed_amount": 10,\n            "spray_confirm": 0,\n            "spray_date": "2023-09-09",\n            "spray_pest": 3,\n            "spray_amount": 10,\n            "bask_confirm": 0,\n            "bask_date": "2023-09-09",\n            "pre_fert_confirm": 0,\n            "pre_fert_date": "2023-09-09",\n            "pre_fert": 21,\n            "pre_fert_amount": 10,\n            "post_fert_confirm": 0,\n            "post_fert_date": "2023-09-09",\n            "post_fert": 21,\n            "post_fert_amount": 10,\n            "harvest_confirm": 0,\n            "harvest_date": "2023-09-09"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,r.kt)("p",null,"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')),(0,r.kt)("p",null,"\u5f15\u7528\u7684 \u5916\u9375 \u4e0d\u5b58\u5728",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u5f15\u7528\u7684 \u5916\u9375 \u4e0d\u5b58\u5728\u65bc\u8cc7\u6599\u5eab\u4e2d\u5247\u4f9d\u7167\u7f3a\u5931\u7684\u5916\u9375\u56de\u50b3\u4ee5\u4e0b\u4e0d\u540c\u985e\u578b\u503c  "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types#clmissingtype"},"CLMissingType"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'CONTRACT_UUID'"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'LAND_UUID'"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'CROP_UUID'"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'WEED_PEST_UUID'"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'SPRAY_PEST_UUID'"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'PRE_FERT_UUID'"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"'POST_FERT_UUID'"),"  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loadType")," \u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},'"FK_NOT_FOUND"'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"missingType")," \u70ba \u7f3a\u5931\u7684\u5916\u9375\u985e\u578b  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "FK_NOT_FOUND",\n    "missingType": "CROP_UUID",\n    "data": []\n}\n')),(0,r.kt)("p",null,"\u5f85\u66f4\u65b0\u7684\u8cc7\u6599\u8207\u820a\u6709\u7684\u8cc7\u6599\u76f8\u540c",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u820a\u6709\u7684\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SAME_DATA",\n    "data": [\n        {\n            "uuid": 1,\n            "contract": 5,\n            "land": 100,\n            "crop": 41,\n            "prepare_confirm": 0,\n            "prepare_date": "2023-09-09",\n            "plant_confirm": 0,\n            "plant_recv_date": "2023-09-09",\n            "plant_date": "2023-09-09",\n            "plant_count": 10,\n            "plant_name": "\u838aO\u57ce",\n            "weed_confirm": 0,\n            "weed_date": "2023-09-09",\n            "weed_pest": 3,\n            "weed_amount": 10,\n            "spray_confirm": 0,\n            "spray_date": "2023-09-09",\n            "spray_pest": 3,\n            "spray_amount": 10,\n            "bask_confirm": 0,\n            "bask_date": "2023-09-09",\n            "pre_fert_confirm": 0,\n            "pre_fert_date": "2023-09-09",\n            "pre_fert": 21,\n            "pre_fert_amount": 10,\n            "post_fert_confirm": 0,\n            "post_fert_date": "2023-09-09",\n            "post_fert": 21,\n            "post_fert_amount": 10,\n            "harvest_confirm": 0,\n            "harvest_date": "2023-09-09"\n        }\n    ]\n}\n')))}_.isMDXComponent=!0}}]);