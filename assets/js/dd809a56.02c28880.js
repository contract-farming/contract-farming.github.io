"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[3203],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||l;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const l={},i="\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u5408\u7d04",o={unversionedId:"contract/addOne",id:"contract/addOne",title:"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u5408\u7d04",description:"\u589e\u52a0\u4e00\u500b\u5951\u4f5c\u5408\u7d04",source:"@site/docs/contract/addOne.md",sourceDirName:"contract",slug:"/contract/addOne",permalink:"/docs/contract/addOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/contract/addOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",permalink:"/docs/cl/updateOne"},next:{title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04",permalink:"/docs/contract/deleteOne"}},p={},c=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],u={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u589e\u52a0\u4e00\u500b-\u5951\u4f5c\u5408\u7d04"},"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u5408\u7d04"),(0,a.kt)("p",null,"\u589e\u52a0\u4e00\u500b\u5951\u4f5c\u5408\u7d04"),(0,a.kt)("p",null,"PATH: ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/contract/addOne"),(0,a.kt)("br",{parentName:"p"}),"\n","Method: ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")),(0,a.kt)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"year"),": \u5e74\u5ea6                     ","[",(0,a.kt)("inlineCode",{parentName:"li"},"0-65535"),"]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"no"),": \u671f\u865f \u4e00\u5e74\u6709\u4e09\u671f             ","[",(0,a.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),"]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"farmer"),": \u5f15\u7528\u5951\u4f5c\u8fb2\u6c11\u7684 uuid"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"finish"),": \u662f\u5426\u7d50\u6848 (Y/N)          ","[",(0,a.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "year": number;     // [`0-65535`]\n    "no": number;       // [`1`, `2`, `3`]\n    "farmer": number;   // farmer uuid\n    "finish": number;   // [0, 1]   (Y/N)\n}\n')),(0,a.kt)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.kt)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6210\u529f\u65b0\u589e\u7684 \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,a.kt)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"200"),(0,a.kt)("li",{parentName:"ul"},"400")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,a.kt)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"FK_NOT_FOUND"'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "year": number,\n            "no": number,\n            "farmer": number,\n            "finish": number\n        }\n    ]\n}\n')),(0,a.kt)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.kt)("p",null,"\u6210\u529f\u65b0\u589e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "year": 2023,\n            "no": 2,\n            "farmer": 190,\n            "finish": 0\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,a.kt)("p",null,"\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728\u65bc\u8cc7\u6599\u5eab\u4e2d\u5247\u56de\u50b3 ",(0,a.kt)("inlineCode",{parentName:"p"},"FK_NOT_FOUND"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u4e0d\u5b58\u5728\u7684 farmer uuid"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "FK_NOT_FOUND",\n    "data": [\n        {\n            "uuid": 1000,\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"\u5df2\u5b58\u5728\u8a72\u8cc7\u6599",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u6aa2\u67e5\u662f\u5426\u91cd\u8907\u65b0\u589e\u8a72\u8cc7\u6599\uff0c\u56e0\u70ba\u8fb2\u6c11\u53ef\u80fd\u6703\u958b\u5f88\u591a\u5f35\u540c\u6a23\u7684\u5408\u7d04")))}m.isMDXComponent=!0}}]);