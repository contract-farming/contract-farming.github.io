"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[8703],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),y=u(t),c=r,g=y["".concat(i,".").concat(c)]||y[c]||s[c]||l;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[y]="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));const l={},o="\u522a\u9664\u5176\u4e2d\u4e00\u500b \u8fb2\u85e5\u7a2e\u985e",p={unversionedId:"\u5951\u4f5c/pest/deleteOne",id:"\u5951\u4f5c/pest/deleteOne",title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u8fb2\u85e5\u7a2e\u985e",description:"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u8fb2\u85e5\u7a2e\u985e",source:"@site/docs/\u5951\u4f5c/pest/deleteOne.md",sourceDirName:"\u5951\u4f5c/pest",slug:"/\u5951\u4f5c/pest/deleteOne",permalink:"/docs/\u5951\u4f5c/pest/deleteOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/pest/deleteOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u589e\u52a0\u4e00\u500b \u8fb2\u85e5\u7a2e\u985e",permalink:"/docs/\u5951\u4f5c/pest/addOne"},next:{title:"\u7372\u53d6 \u8fb2\u85e5\u7a2e\u985e \u6240\u6709\u5167\u5bb9",permalink:"/docs/\u5951\u4f5c/pest/getAll"}},i={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u522a\u9664",id:"\u6210\u529f\u522a\u9664",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u672a\u627e\u5230\u8a72\u8cc7\u6599",id:"\u672a\u627e\u5230\u8a72\u8cc7\u6599",level:3},{value:"\u8a72\u8fb2\u85e5\u7a2e\u985e\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664",id:"\u8a72\u8fb2\u85e5\u7a2e\u985e\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],d={toc:u},y="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u522a\u9664\u5176\u4e2d\u4e00\u500b-\u8fb2\u85e5\u7a2e\u985e"},"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u8fb2\u85e5\u7a2e\u985e"),(0,r.yg)("p",null,"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u8fb2\u85e5\u7a2e\u985e"),(0,r.yg)("p",null,"PATH: ",(0,r.yg)("inlineCode",{parentName:"p"},"/api/pest/deleteOne"),(0,r.yg)("br",{parentName:"p"}),"\n","Method: ",(0,r.yg)("inlineCode",{parentName:"p"},"DELETE"),(0,r.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),(0,r.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,r.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,r.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"uuid"),": \u5f85\u522a\u9664\u7684 \u8fb2\u85e5\u7a2e\u985e uuid")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number\n}\n')),(0,r.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,r.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"200"),(0,r.yg)("li",{parentName:"ul"},"400"),(0,r.yg)("li",{parentName:"ul"},"500")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,r.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"ROW_IS_REFERENCED")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,r.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,r.yg)("h3",{id:"\u6210\u529f\u522a\u9664"},"\u6210\u529f\u522a\u9664"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u6210\u529f\u522a\u9664\u7684\u8cc7\u6599"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,r.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,r.yg)("h3",{id:"\u672a\u627e\u5230\u8a72\u8cc7\u6599"},"\u672a\u627e\u5230\u8a72\u8cc7\u6599"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,r.yg)("h3",{id:"\u8a72\u8fb2\u85e5\u7a2e\u985e\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664"},"\u8a72\u8fb2\u85e5\u7a2e\u985e\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.ROW_IS_REFERENCED,\n    "data": []\n}\n')),(0,r.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}s.isMDXComponent=!0}}]);