"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[2609],{5680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>m});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=r.createContext({}),d=function(e){var n=r.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},y=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),c=d(a),u=t,m=c["".concat(o,".").concat(u)]||c[u]||g[u]||l;return a?r.createElement(m,i(i({ref:n},y),{},{components:a})):r.createElement(m,i({ref:n},y))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[c]="string"==typeof e?e:t,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},643:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(8168),t=(a(6540),a(5680));const l={},i="\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",p={unversionedId:"\u5951\u4f5c/cl/updateOne",id:"\u5951\u4f5c/cl/updateOne",title:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730",description:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730\u8cc7\u6599",source:"@site/docs/\u5951\u4f5c/cl/updateOne.md",sourceDirName:"\u5951\u4f5c/cl",slug:"/\u5951\u4f5c/cl/updateOne",permalink:"/docs/next/\u5951\u4f5c/cl/updateOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/cl/updateOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u8a72\u5951\u4f5c\u8fb2\u5730\u7684\u5408\u7d04\u5167\u5bb9",permalink:"/docs/next/\u5951\u4f5c/cl/getContractData"},next:{title:"\u589e\u52a0\u4e00\u500b \u5951\u4f5c\u5408\u7d04",permalink:"/docs/next/\u5951\u4f5c/contract/addOne"}},o={},d=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u66f4\u65b0",id:"\u6210\u529f\u66f4\u65b0",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"\u5f15\u7528\u7684 \u5916\u9375 \u4e0d\u5b58\u5728",id:"\u5f15\u7528\u7684-\u5916\u9375-\u4e0d\u5b58\u5728",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],y={toc:d},c="wrapper";function g(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,r.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730"},"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730"),(0,t.yg)("p",null,"\u66f4\u65b0\u4e00\u584a\u5951\u4f5c\u8fb2\u5730\u8cc7\u6599",(0,t.yg)("br",{parentName:"p"}),"\n","\u53ea\u80fd\u66f4\u65b0 \u5951\u4f5c\u5408\u7d04, \u8fb2\u5730, \u4f5c\u7269\u54c1\u7a2e \u6578\u503c  "),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/cl/updateOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"PUT"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"id"),": \u5951\u4f5c\u8fb2\u5730\u7684 id   (",(0,t.yg)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u66f4\u65b0"),") (",(0,t.yg)("inlineCode",{parentName:"li"},"INT_UNSIGNED"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"contract_id"),": \u5f15\u7528\u5951\u4f5c\u5408\u7d04\u7684 id    (",(0,t.yg)("inlineCode",{parentName:"li"},"INT_UNSIGNED"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"land_id"),": \u5f15\u7528\u8fb2\u5730\u7684 id            (",(0,t.yg)("inlineCode",{parentName:"li"},"INT_UNSIGNED"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"crop_id"),": \u5f15\u7528\u4f5c\u7269\u54c1\u7a2e\u7684 id        (",(0,t.yg)("inlineCode",{parentName:"li"},"INT_UNSIGNED"),")")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "id": number,\n    "contract_id": number;\n    "land_id": number;\n    "crop_id": number;\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/next/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"FK_NOT_FOUND")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u66f4\u65b0"},"\u6210\u529f\u66f4\u65b0"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"},"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u5f15\u7528\u7684-\u5916\u9375-\u4e0d\u5b58\u5728"},"\u5f15\u7528\u7684 \u5916\u9375 \u4e0d\u5b58\u5728"),(0,t.yg)("p",null,"\u5982\u679c\u5f15\u7528\u7684 \u5916\u9375 \u4e0d\u5b58\u5728\u65bc\u8cc7\u6599\u5eab\u4e2d\u5247\u4f9d\u7167\u7f3a\u5931\u7684\u5916\u9375\u56de\u50b3\u4ee5\u4e0b\u4e0d\u540c\u985e\u578b\u503c  "),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/next/types#missingfk"},"MissingFK"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"CONTRACT_ID"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"LAND_ID"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"CROP_ID"),"  "),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"loadType")," \u70ba ",(0,t.yg)("inlineCode",{parentName:"p"},'"FK_NOT_FOUND"'),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"missingFK")," \u70ba \u7f3a\u5931\u7684\u5916\u9375\u985e\u578b  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.FK_NOT_FOUND,\n    "missingType": MissingFK.CROP_ID,\n    "data": [\n        {\n            "id": 30 \n        }\n    ]\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}g.isMDXComponent=!0}}]);