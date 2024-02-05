"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[1092],{5788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>s});var r=t(1504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=u(t),g=a,s=y["".concat(p,".").concat(g)]||y[g]||d[g]||l;return t?r.createElement(s,o(o({ref:n},c),{},{components:t})):r.createElement(s,o({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(5072),a=(t(1504),t(5788));const l={},o="\u522a\u9664\u5176\u4e2d\u4e00\u500b \u80a5\u6599\u7a2e\u985e",i={unversionedId:"fert/deleteOne",id:"fert/deleteOne",title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u80a5\u6599\u7a2e\u985e",description:"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u80a5\u6599\u7a2e\u985e",source:"@site/docs/fert/deleteOne.md",sourceDirName:"fert",slug:"/fert/deleteOne",permalink:"/docs/fert/deleteOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/fert/deleteOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u589e\u52a0\u4e00\u500b \u80a5\u6599\u7a2e\u985e",permalink:"/docs/fert/addOne"},next:{title:"\u7372\u53d6 \u80a5\u6599\u7a2e\u985e \u6240\u6709\u5167\u5bb9",permalink:"/docs/fert/getAll"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],c={toc:u},y="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u522a\u9664\u5176\u4e2d\u4e00\u500b-\u80a5\u6599\u7a2e\u985e"},"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u80a5\u6599\u7a2e\u985e"),(0,a.yg)("p",null,"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u80a5\u6599\u7a2e\u985e"),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/fert/deleteOne"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"DELETE"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,a.yg)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name"),": \u5f85\u522a\u9664\u7684 \u80a5\u6599\u7a2e\u985e uuid")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number\n}\n')),(0,a.yg)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,"\u56de\u50b3 data \u70ba\u9663\u5217\u5167\u542b\u6210\u529f\u522a\u9664\u7684 \u80a5\u6599\u7a2e\u985e \u8cc7\u6599  "),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,a.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"200"),(0,a.yg)("li",{parentName:"ul"},"400")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"DATA_NOT_FOUND"'))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "uuid": number,\n            "name": string,\n            "unit_yield": number,\n            "unit": number\n        }\n    ]\n}\n')),(0,a.yg)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("p",null,"\u6210\u529f\u522a\u9664",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u6210\u529f\u522a\u9664\u7684\u8cc7\u6599"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "uuid": 11,\n            "name": "\u80a5\u6599\u4e94\u865f"\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,a.yg)("p",null,"\u672a\u627e\u5230\u8a72\u8cc7\u6599"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_NOT_FOUND",\n    "data": []\n}\n')))}d.isMDXComponent=!0}}]);