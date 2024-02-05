"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[4536],{5788:(e,n,r)=>{r.d(n,{Iu:()=>c,yg:()=>g});var a=r(1504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),u=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=u(r),m=t,g=y["".concat(p,".").concat(m)]||y[m]||d[m]||l;return r?a.createElement(g,i(i({ref:n},c),{},{components:r})):a.createElement(g,i({ref:n},c))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:t,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5044:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(5072),t=(r(1504),r(5788));const l={},i="\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u5408\u7d04",o={unversionedId:"contract/addOne",id:"contract/addOne",title:"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u5408\u7d04",description:"\u589e\u52a0\u4e00\u500b\u5951\u4f5c\u5408\u7d04",source:"@site/docs/contract/addOne.md",sourceDirName:"contract",slug:"/contract/addOne",permalink:"/docs/contract/addOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/contract/addOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",permalink:"/docs/cl/updateOne"},next:{title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04",permalink:"/docs/contract/deleteOne"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],c={toc:u},y="wrapper";function d(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.c)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u589e\u52a0\u4e00\u500b-\u5951\u4f5c\u5408\u7d04"},"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u5408\u7d04"),(0,t.yg)("p",null,"\u589e\u52a0\u4e00\u500b\u5951\u4f5c\u5408\u7d04"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/contract/addOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"POST"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"year"),": \u5e74\u5ea6                     ","[",(0,t.yg)("inlineCode",{parentName:"li"},"0-65535"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"no"),": \u671f\u865f \u4e00\u5e74\u6709\u4e09\u671f             ","[",(0,t.yg)("inlineCode",{parentName:"li"},"1"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"2"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"3"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"farmer"),": \u5f15\u7528\u5951\u4f5c\u8fb2\u6c11\u7684 uuid"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"finish"),": \u662f\u5426\u7d50\u6848 (Y/N)          ","[",(0,t.yg)("inlineCode",{parentName:"li"},"0"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"1"),"]")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "year": number;     // [`0-65535`]\n    "no": number;       // [`1`, `2`, `3`]\n    "farmer": number;   // farmer uuid\n    "finish": number;   // [0, 1]   (Y/N)\n}\n')),(0,t.yg)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6210\u529f\u65b0\u589e\u7684 \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599  "),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,t.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"200"),(0,t.yg)("li",{parentName:"ul"},"400")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},'"FK_NOT_FOUND"'))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "year": number,\n            "no": number,\n            "farmer": number,\n            "finish": number\n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("p",null,"\u6210\u529f\u65b0\u589e"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "year": 2023,\n            "no": 2,\n            "farmer": 190,\n            "finish": 0\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,t.yg)("p",null,"\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728",(0,t.yg)("br",{parentName:"p"}),"\n","\u5982\u679c\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728\u65bc\u8cc7\u6599\u5eab\u4e2d\u5247\u56de\u50b3 ",(0,t.yg)("inlineCode",{parentName:"p"},"FK_NOT_FOUND"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u4e0d\u5b58\u5728\u7684 farmer uuid"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "FK_NOT_FOUND",\n    "data": [\n        {\n            "uuid": 1000,\n        }\n    ]\n}\n')),(0,t.yg)("p",null,"\u5df2\u5b58\u5728\u8a72\u8cc7\u6599",(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("strong",{parentName:"p"},"\u4e0d\u6aa2\u67e5\u662f\u5426\u91cd\u8907\u65b0\u589e\u8a72\u8cc7\u6599\uff0c\u56e0\u70ba\u8fb2\u6c11\u53ef\u80fd\u6703\u958b\u5f88\u591a\u5f35\u540c\u6a23\u7684\u5408\u7d04")))}d.isMDXComponent=!0}}]);