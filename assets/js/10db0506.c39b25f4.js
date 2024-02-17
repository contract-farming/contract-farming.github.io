"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[3729],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>s});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=u(t),g=a,s=y["".concat(i,".").concat(g)]||y[g]||d[g]||l;return t?r.createElement(s,o(o({ref:n},c),{},{components:t})):r.createElement(s,o({ref:n},c))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[y]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(8168),a=(t(6540),t(5680));const l={},o="\u589e\u52a0\u4e00\u500b \u80a5\u6599\u7a2e\u985e",p={unversionedId:"\u5951\u4f5c/fert/addOne",id:"\u5951\u4f5c/fert/addOne",title:"\u589e\u52a0\u4e00\u500b \u80a5\u6599\u7a2e\u985e",description:"\u589e\u52a0\u4e00\u500b\u80a5\u6599\u7a2e\u985e",source:"@site/docs/\u5951\u4f5c/fert/addOne.md",sourceDirName:"\u5951\u4f5c/fert",slug:"/\u5951\u4f5c/fert/addOne",permalink:"/docs/\u5951\u4f5c/fert/addOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/fert/addOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11 \u8cc7\u6599",permalink:"/docs/\u5951\u4f5c/farmer/updateOne"},next:{title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u80a5\u6599\u7a2e\u985e",permalink:"/docs/\u5951\u4f5c/fert/deleteOne"}},i={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:3},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:3}],c={toc:u},y="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u589e\u52a0\u4e00\u500b-\u80a5\u6599\u7a2e\u985e"},"\u589e\u52a0\u4e00\u500b \u80a5\u6599\u7a2e\u985e"),(0,a.yg)("p",null,"\u589e\u52a0\u4e00\u500b\u80a5\u6599\u7a2e\u985e"),(0,a.yg)("p",null,"PATH: ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/fert/addOne"),(0,a.yg)("br",{parentName:"p"}),"\n","Method: ",(0,a.yg)("inlineCode",{parentName:"p"},"POST"),(0,a.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),(0,a.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,a.yg)("h3",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"name"),": \u80a5\u6599\u7a2e\u985e\u540d\u7a31")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "name": string\n}\n')),(0,a.yg)("h3",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,a.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"200"),(0,a.yg)("li",{parentName:"ul"},"400"),(0,a.yg)("li",{parentName:"ul"},"500")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,a.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"SUCCEED"')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"PARAMETER_ERROR"')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"DATA_EXISTED"')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},'"QUERY_FAILED"'))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "status": StatusCode,\n    "loadType": LoadType,\n    "data": [\n        {\n            "name": string\n        }\n    ]\n}\n')),(0,a.yg)("h3",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,a.yg)("p",null,"\u6210\u529f\u65b0\u589e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "SUCCEED",\n    "data": [\n        {\n            "name": "\u80a5\u6599\u4e00\u865f"\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"\u53c3\u6578\u932f\u8aa4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": "PARAMETER_ERROR",\n    "data": []\n}\n')),(0,a.yg)("p",null,"\u5df2\u5b58\u5728\u8a72\u8cc7\u6599",(0,a.yg)("br",{parentName:"p"}),"\n","\u5f85\u6dfb\u52a0\u7684\u8cc7\u6599\u5df2\u5b58\u5728\u8cc7\u6599\u5eab\u4e2d",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u5df2\u5b58\u5728\u8cc7\u6599\u5eab\u7684\u8cc7\u6599"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": "DATA_EXISTED",\n    "data": [\n        {\n            "uuid": 11,\n            "name": "\u80a5\u6599\u4e94\u865f"\n        }\n    ]\n}\n')),(0,a.yg)("p",null,"Server \u932f\u8aa4  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": "QUERY_FAILED",\n    "data": []\n}\n')))}d.isMDXComponent=!0}}]);