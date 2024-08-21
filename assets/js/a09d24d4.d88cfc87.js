"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[7821],{5680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var a=r(6540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),d=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),g=t,m=u["".concat(p,".").concat(g)]||u[g]||y[g]||l;return r?a.createElement(m,o(o({ref:n},c),{},{components:r})):a.createElement(m,o({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:t,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9249:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(8168),t=(r(6540),r(5680));const l={},o="\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u5951\u4f5c\u8fb2\u6c11",i={unversionedId:"\u5951\u4f5c/farmer/deleteOne",id:"\u5951\u4f5c/farmer/deleteOne",title:"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u5951\u4f5c\u8fb2\u6c11",description:"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u4f5c\u5951\u4f5c\u8fb2\u6c11",source:"@site/docs/\u5951\u4f5c/farmer/deleteOne.md",sourceDirName:"\u5951\u4f5c/farmer",slug:"/\u5951\u4f5c/farmer/deleteOne",permalink:"/docs/next/\u5951\u4f5c/farmer/deleteOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/farmer/deleteOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u8fb2\u6c11",permalink:"/docs/next/\u5951\u4f5c/farmer/addOne"},next:{title:"\u7372\u53d6 Farmer Table",permalink:"/docs/next/\u5951\u4f5c/farmer/getAll"}},p={},d=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u522a\u9664",id:"\u6210\u529f\u522a\u9664",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u672a\u627e\u5230\u8a72\u8cc7\u6599",id:"\u672a\u627e\u5230\u8a72\u8cc7\u6599",level:3},{value:"\u8a72\u5951\u4f5c\u8fb2\u6c11\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664",id:"\u8a72\u5951\u4f5c\u8fb2\u6c11\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],c={toc:d},u="wrapper";function y(e){let{components:n,...r}=e;return(0,t.yg)(u,(0,a.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u522a\u9664\u5176\u4e2d\u4e00\u500b-\u4f5c\u5951\u4f5c\u8fb2\u6c11"},"\u522a\u9664\u5176\u4e2d\u4e00\u500b \u4f5c\u5951\u4f5c\u8fb2\u6c11"),(0,t.yg)("p",null,"\u522a\u9664\u5176\u4e2d\u4e00\u500b\u4f5c\u5951\u4f5c\u8fb2\u6c11"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/farmer/deleteOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"DELETE"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"uuid"),": \u5f85\u522a\u9664\u7684 \u5951\u4f5c\u8fb2\u6c11 uuid")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/next/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ROW_IS_REFERENCED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u522a\u9664"},"\u6210\u529f\u522a\u9664"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u672a\u627e\u5230\u8a72\u8cc7\u6599"},"\u672a\u627e\u5230\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u8a72\u5951\u4f5c\u8fb2\u6c11\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664"},"\u8a72\u5951\u4f5c\u8fb2\u6c11\u5df2\u88ab\u5f15\u7528\u7121\u6cd5\u522a\u9664"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.ROW_IS_REFERENCED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}y.isMDXComponent=!0}}]);