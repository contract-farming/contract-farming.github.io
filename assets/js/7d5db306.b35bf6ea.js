"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[6938],{5680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>m});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),u=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},y=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),d=u(a),g=t,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||l;return a?r.createElement(m,i(i({ref:n},y),{},{components:a})):r.createElement(m,i({ref:n},y))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:t,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5998:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(8168),t=(a(6540),a(5680));const l={},i="\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599",o={unversionedId:"\u5951\u4f5c/contract/updateOne",id:"\u5951\u4f5c/contract/updateOne",title:"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599",description:"\u66f4\u65b0\u4e00\u500b\u5951\u4f5c\u5408\u7d04\u8cc7\u6599",source:"@site/docs/\u5951\u4f5c/contract/updateOne.md",sourceDirName:"\u5951\u4f5c/contract",slug:"/\u5951\u4f5c/contract/updateOne",permalink:"/docs/\u5951\u4f5c/contract/updateOne",draft:!1,editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/docs/\u5951\u4f5c/contract/updateOne.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7372\u53d6\u5176\u4e2d\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u4e0b\u7684\u6240\u6709\u5951\u4f5c\u8fb2\u5730",permalink:"/docs/\u5951\u4f5c/contract/query/getAllCl"},next:{title:"\u589e\u52a0\u4e00\u500b \u4f5c\u7269\u54c1\u7a2e",permalink:"/docs/\u5951\u4f5c/crop/addOne"}},p={},u=[{value:"\u8acb\u6c42\u683c\u5f0f",id:"\u8acb\u6c42\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u683c\u5f0f",id:"\u56de\u50b3\u683c\u5f0f",level:2},{value:"\u56de\u50b3\u7bc4\u4f8b",id:"\u56de\u50b3\u7bc4\u4f8b",level:2},{value:"\u6210\u529f\u66f4\u65b0",id:"\u6210\u529f\u66f4\u65b0",level:3},{value:"\u53c3\u6578\u932f\u8aa4",id:"\u53c3\u6578\u932f\u8aa4",level:3},{value:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599",level:3},{value:"\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728",id:"\u5f15\u7528\u7684-farmer-\u4e0d\u5b58\u5728",level:3},{value:"Server \u932f\u8aa4",id:"server-\u932f\u8aa4",level:3}],y={toc:u},d="wrapper";function c(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,r.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u66f4\u65b0\u4e00\u500b-\u5951\u4f5c\u5408\u7d04-\u8cc7\u6599"},"\u66f4\u65b0\u4e00\u500b \u5951\u4f5c\u5408\u7d04 \u8cc7\u6599"),(0,t.yg)("p",null,"\u66f4\u65b0\u4e00\u500b\u5951\u4f5c\u5408\u7d04\u8cc7\u6599"),(0,t.yg)("p",null,"PATH: ",(0,t.yg)("inlineCode",{parentName:"p"},"/api/contract/updateOne"),(0,t.yg)("br",{parentName:"p"}),"\n","Method: ",(0,t.yg)("inlineCode",{parentName:"p"},"PUT"),(0,t.yg)("br",{parentName:"p"}),"\n","LoginRequired: ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),(0,t.yg)("br",{parentName:"p"}),"\n","AllowPermissions: ",(0,t.yg)("inlineCode",{parentName:"p"},"[]"),"  "),(0,t.yg)("h2",{id:"\u8acb\u6c42\u683c\u5f0f"},"\u8acb\u6c42\u683c\u5f0f"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"uuid"),": \u5951\u4f5c\u5408\u7d04\u7684 uuid (",(0,t.yg)("inlineCode",{parentName:"li"},"\u4e0d\u53ef\u66f4\u65b0"),")"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"year"),": \u5e74\u5ea6                     ","[",(0,t.yg)("inlineCode",{parentName:"li"},"0-65535"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"no"),": \u671f\u865f \u4e00\u5e74\u6709\u4e09\u671f             ","[",(0,t.yg)("inlineCode",{parentName:"li"},"1"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"2"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"3"),"]"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"farmer"),": \u5f15\u7528\u5951\u4f5c\u8fb2\u6c11\u7684 uuid"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"finish"),": \u662f\u5426\u7d50\u6848 (Y/N)          ","[",(0,t.yg)("inlineCode",{parentName:"li"},"0"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"1"),"]")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},'{\n    "uuid": number,\n    "year": number;     // [`0-65535`]\n    "no": number;       // [`1`, `2`, `3`]\n    "farmer": number;   // farmer uuid\n    "finish": number;   // [0, 1]   (Y/N)\n}\n')),(0,t.yg)("h2",{id:"\u56de\u50b3\u683c\u5f0f"},"\u56de\u50b3\u683c\u5f0f"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#statuscode"},(0,t.yg)("inlineCode",{parentName:"a"},"StatusCode")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"200"),(0,t.yg)("li",{parentName:"ul"},"400"),(0,t.yg)("li",{parentName:"ul"},"500")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/types#loadtype"},(0,t.yg)("inlineCode",{parentName:"a"},"LoadType")),"  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"SUCCEED")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"PARAMETER_ERROR")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DATA_NOT_FOUND")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"FK_NOT_FOUND")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"QUERY_FAILED"))),(0,t.yg)("h2",{id:"\u56de\u50b3\u7bc4\u4f8b"},"\u56de\u50b3\u7bc4\u4f8b"),(0,t.yg)("h3",{id:"\u6210\u529f\u66f4\u65b0"},"\u6210\u529f\u66f4\u65b0"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.SUCCEED,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u53c3\u6578\u932f\u8aa4"},"\u53c3\u6578\u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 400,\n    "loadType": LoadType.PARAMETER_ERROR,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"},"\u4e0d\u5b58\u5728\u8a72\u8cc7\u6599"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.DATA_NOT_FOUND,\n    "data": []\n}\n')),(0,t.yg)("h3",{id:"\u5f15\u7528\u7684-farmer-\u4e0d\u5b58\u5728"},"\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728"),(0,t.yg)("p",null,"\u5982\u679c\u5f15\u7528\u7684 farmer \u4e0d\u5b58\u5728\u65bc\u8cc7\u6599\u5eab\u4e2d\u5247\u56de\u50b3 ",(0,t.yg)("inlineCode",{parentName:"p"},"FK_NOT_FOUND"),(0,t.yg)("br",{parentName:"p"}),"\n",(0,t.yg)("inlineCode",{parentName:"p"},"data[]")," \u70ba\u4e0d\u5b58\u5728\u7684 farmer uuid"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "loadType": LoadType.FK_NOT_FOUND,\n    "missingFK": MissingFK.FARMER_UUID,\n    "data": [{ "uuid": 1000 }]\n}\n')),(0,t.yg)("h3",{id:"server-\u932f\u8aa4"},"Server \u932f\u8aa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 500,\n    "loadType": LoadType.QUERY_FAILED,\n    "data": []\n}\n')))}c.isMDXComponent=!0}}]);