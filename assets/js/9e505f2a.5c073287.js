"use strict";(self.webpackChunkcontract_farming_docs=self.webpackChunkcontract_farming_docs||[]).push([[5260],{5788:(n,e,t)=>{t.d(e,{Iu:()=>p,yg:()=>g});var a=t(1504);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var d=a.createContext({}),i=function(n){var e=a.useContext(d),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=i(n.components);return a.createElement(d.Provider,{value:e},n.children)},u="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,d=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=i(t),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(g,s(s({ref:e},p),{},{components:t})):a.createElement(g,s({ref:e},p))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=n,l[u]="string"==typeof n?n:r,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9860:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(5072),r=(t(1504),t(5788));const o={sidebar_position:4},s=void 0,l={permalink:"/blog/2023/02/16/\u5f8c\u7aefserver\u914d\u7f6e",editUrl:"https://github.com/contract-farming/contract-farming.github.io/blob/main/blog/2023-02-16-\u5f8c\u7aefserver\u914d\u7f6e/index.md",source:"@site/blog/2023-02-16-\u5f8c\u7aefserver\u914d\u7f6e/index.md",title:"\u5f8c\u7aefserver\u914d\u7f6e",description:"\u4f7f\u7528 RockyLinux 9 \u914d\u7f6e",date:"2023-02-16T00:00:00.000Z",formattedDate:"February 16, 2023",tags:[],readingTime:8.035,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:4},prevItem:{title:"\u8cc7\u6599\u5eab\u8a2d\u7f6e",permalink:"/blog/2023/03/01/\u8cc7\u6599\u5eab\u8a2d\u7f6e"},nextItem:{title:"\u524d\u7aef\u7b46\u8a18",permalink:"/blog/2023/01/01/\u524d\u7aef\u7b46\u8a18"}},d={authorsImageUrls:[]},i=[{value:"SSH \u7aef\u53e3\u8a2d\u7f6e",id:"ssh-\u7aef\u53e3\u8a2d\u7f6e",level:3},{value:"\u9060\u7aef\u684c\u9762(RDP)",id:"\u9060\u7aef\u684c\u9762rdp",level:3},{value:"nvm node.js \u7248\u672c\u7ba1\u7406",id:"nvm-nodejs-\u7248\u672c\u7ba1\u7406",level:3},{value:"VScode \u5b89\u88dd",id:"vscode-\u5b89\u88dd",level:3},{value:"MariaDB \u5b89\u88dd",id:"mariadb-\u5b89\u88dd",level:3},{value:"\u5982\u679c\u60a8\u60f3\u8981\u5728MariaDB\u4e0a\u4f7f\u7528\u81ea\u5b9a\u7fa9\u7aef\u53e3\uff0c\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f\uff1a",id:"\u5982\u679c\u60a8\u60f3\u8981\u5728mariadb\u4e0a\u4f7f\u7528\u81ea\u5b9a\u7fa9\u7aef\u53e3\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f",level:5},{value:"DBeaver \u5b89\u88dd",id:"dbeaver-\u5b89\u88dd",level:3},{value:"Nginx \u5b89\u88dd",id:"nginx-\u5b89\u88dd",level:3},{value:"\u5982\u679c\u60a8\u60f3\u8981\u5728Nginx\u4e0a\u4f7f\u7528\u81ea\u5b9a\u7fa9\u7aef\u53e3\uff0c\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f\uff1a",id:"\u5982\u679c\u60a8\u60f3\u8981\u5728nginx\u4e0a\u4f7f\u7528\u81ea\u5b9a\u7fa9\u7aef\u53e3\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f",level:5},{value:"Certbot \u5b89\u88dd",id:"certbot-\u5b89\u88dd",level:3},{value:"\u5982\u679c\u60a8\u60f3\u8981\u4f7f\u7528 crontab \u81ea\u52d5\u7e8c\u7d04\u6191\u8b49\uff0c\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f\uff1a",id:"\u5982\u679c\u60a8\u60f3\u8981\u4f7f\u7528-crontab-\u81ea\u52d5\u7e8c\u7d04\u6191\u8b49\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f",level:5}],p={toc:i},u="wrapper";function c(n){let{components:e,...t}=n;return(0,r.yg)(u,(0,a.c)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4f7f\u7528 RockyLinux 9 \u914d\u7f6e"),(0,r.yg)("h3",{id:"ssh-\u7aef\u53e3\u8a2d\u7f6e"},"SSH \u7aef\u53e3\u8a2d\u7f6e"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4efd\u958b\u555fSSH\u9023\u63a5\u57e0\u7684\u6307\u4ee4\u6559\u5b78\u3002\u9019\u4efd\u6559\u5b78\u5c07\u5f15\u5c0e\u60a8\u5b8c\u6210\u5fc5\u8981\u7684\u6b65\u9a5f\u4ee5\u958b\u555fSSH\u9023\u63a5\u57e0\u3002  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# \u7b2c\u4e00\u6b65\uff1a\u7de8\u8f2f SSH \u8a2d\u5b9a\u6a94\nsudo vim /etc/ssh/sshd_config\n\n# \u7b2c\u4e8c\u6b65\uff1a\u66f4\u6539 SSH \u9023\u63a5\u57e0\n\u5c07 "Port 22" \u6539\u70ba "Port 33000" \uff08\u6216\u60a8\u60f3\u8981\u4f7f\u7528\u7684\u7aef\u53e3\u865f\uff09\n\n# \u7b2c\u4e09\u6b65\uff1a\u8a2d\u7f6e SELinux \u898f\u5247\nsudo semanage port -a -t ssh_port_t -p tcp 33000\nsudo semanage port -l | grep ssh\n\n# \u7b2c\u56db\u6b65\uff1a\u8a2d\u7f6e\u9632\u706b\u7246\u898f\u5247\nsudo firewall-cmd --add-port=33000/tcp --permanent\nsudo firewall-cmd --reload\nsudo firewall-cmd --list-port\n\n# \u7b2c\u4e94\u6b65\uff1a\u91cd\u65b0\u555f\u52d5 SSH \u670d\u52d9\nsudo systemctl restart sshd\n\n# \u7b2c\u516d\u6b65\uff1a\u6aa2\u67e5 SSH \u670d\u52d9\u72c0\u614b\nsudo systemctl status sshd\n')),(0,r.yg)("h3",{id:"\u9060\u7aef\u684c\u9762rdp"},"\u9060\u7aef\u684c\u9762(RDP)"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4efd\u5b89\u88dd\u9060\u7aef\u684c\u9762(RDP)\u7684\u6307\u4ee4\u6559\u5b78\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u9019\u4efd\u6559\u5b78\u5728Linux\u7cfb\u7d71\u4e2d\u8a2d\u7f6eRDP\u4e26\u9023\u63a5\u5230\u9060\u7aef\u684c\u9762\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","\u9019\u4efd\u6559\u5b78\u5c07\u5f15\u5c0e\u60a8\u9032\u884c\u5fc5\u8981\u7684\u6b65\u9a5f\u4ee5\u8a2d\u7f6exRDP\uff0c\u5b83\u662f\u4e00\u500b\u5728Linux\u4e2d\u63d0\u4f9bRDP\u670d\u52d9\u7684\u8edf\u9ad4\u5957\u4ef6\u3002  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# \u7b2c\u4e00\u6b65\uff1a\u66f4\u65b0\u7cfb\u7d71\u5957\u4ef6\u5eab\nsudo dnf update -y\n\n# \u7b2c\u4e8c\u6b65\uff1a\u5b89\u88dd EPEL \u8edf\u9ad4\u5957\u4ef6\u5eab\nsudo dnf install epel-release -y\n\n# \u7b2c\u4e09\u6b65\uff1a\u5b89\u88dd xRDP\nsudo dnf install xrdp -y\n\n# \u7b2c\u56db\u6b65\uff1a\u7de8\u8f2f xRDP \u8a2d\u5b9a\u6a94\nsudo vim /etc/xrdp/xrdp.ini\n\n# \u7b2c\u4e94\u6b65\uff1a\u66f4\u6539 xRDP \u9023\u63a5\u57e0\n\u5c07 "port=3389" \u6539\u70ba "port=30389" \uff08\u6216\u60a8\u60f3\u8981\u4f7f\u7528\u7684\u7aef\u53e3\u865f\uff09\n\n# \u7b2c\u516d\u6b65\uff1a\u958b\u555f\u9632\u706b\u7246\u7684 30389/tcp \u9023\u63a5\u57e0\nsudo firewall-cmd --permanent --add-port=30389/tcp\n\n# \u7b2c\u4e03\u6b65\uff1a\u91cd\u65b0\u8f09\u5165\u9632\u706b\u7246\u8a2d\u5b9a\nsudo firewall-cmd --reload\n\n# \u7b2c\u516b\u6b65\uff1a\u78ba\u8a8d\u9632\u706b\u7246\u7684\u958b\u653e\u9023\u63a5\u57e0\nsudo firewall-cmd --list-ports\n\n# \u7b2c\u4e5d\u6b65\uff1a\u91cd\u65b0\u555f\u52d5\u7cfb\u7d71\nsudo reboot\n')),(0,r.yg)("h3",{id:"nvm-nodejs-\u7248\u672c\u7ba1\u7406"},"nvm node.js \u7248\u672c\u7ba1\u7406"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4efd\u4f7f\u7528nvm\u5b89\u88ddNode.js\u7684\u6307\u4ee4\u6559\u5b78\u3002\u9019\u4efd\u6559\u5b78\u5c07\u5f15\u5c0e\u60a8\u5b8c\u6210\u5fc5\u8981\u7684\u6b65\u9a5f\u4ee5\u5b89\u88ddnvm\u4e26\u900f\u904envm\u5b89\u88dd\u53ca\u7ba1\u7406Node.js\u7248\u672c\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","nvm GitHub\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b65\uff1a\u4e0b\u8f09\u4e26\u5b89\u88ddnvm\nsudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash\n\n# \u7b2c\u4e8c\u6b65\uff1a\u67e5\u770b\u6240\u6709\u53ef\u7528\u7684Node.js\u7248\u672c\nnvm list-remote\n\n# \u7b2c\u4e09\u6b65\uff1a\u5b89\u88dd\u6307\u5b9a\u7248\u672c\u7684Node.js\nnvm install <node version>\n\n# \u7b2c\u56db\u6b65\uff1a\u4f7f\u7528\u5df2\u5b89\u88dd\u7684Node.js\u7248\u672c\nnvm use <node version>\n\n# \u7b2c\u4e94\u6b65\uff1a\u5c07\u5df2\u5b89\u88dd\u7684Node.js\u7248\u672c\u8a2d\u70ba\u9810\u8a2d\u7248\u672c\nnvm alias default <node version>\n\n# \u7b2c\u516d\u6b65\uff1a\u6aa2\u67e5Node.js\u7248\u672c\nnode -v\n")),(0,r.yg)("h3",{id:"vscode-\u5b89\u88dd"},"VScode \u5b89\u88dd"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u5728Rocky Linux\u4e0a\u5b89\u88ddVisual Studio Code\u7684\u6307\u4ee4\u6559\u5b78\u3002\u9019\u4efd\u6559\u5b78\u5c07\u5f15\u5c0e\u60a8\u5b8c\u6210\u5fc5\u8981\u7684\u6b65\u9a5f\u4ee5\u5b89\u88dd\u4e26\u555f\u7528Visual Studio Code\u5b58\u5132\u5eab\uff0c",(0,r.yg)("br",{parentName:"p"}),"\n","\u4ee5\u53ca\u900f\u904ednf\u5b89\u88ddVisual Studio Code\u3002\u8acb\u6ce8\u610f\uff0c\u60a8\u53ef\u4ee5\u6839\u64da\u60a8\u7684\u9700\u6c42\u9078\u64c7\u4f7f\u7528\u4e0d\u540c\u7684Visual Studio Code\u7248\u672c\u3002  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# \u7b2c\u4e00\u6b65\uff1a\u66f4\u65b0\u7cfb\u7d71\u5957\u4ef6\u5eab\nsudo dnf update -y\n\n# \u7b2c\u4e8c\u6b65\uff1a\u532f\u5165Microsoft\u7684GPG\u91d1\u9470\nsudo rpm --import https://packages.microsoft.com/keys/microsoft.asc\n\n# \u7b2c\u4e09\u6b65\uff1a\u65b0\u589eVisual Studio Code\u5b58\u5132\u5eab\nprintf "[vscode]\\nname=packages.microsoft.com\\nbaseurl=https://packages.microsoft.com/yumrepos/vscode/\\nenabled=1\\ngpgcheck=1\\nrepo_gpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc\\nmetadata_expire=1h" | sudo tee -a /etc/yum.repos.d/vscode.repo\n\n# \u7b2c\u56db\u6b65\uff1a\u6aa2\u67e5Visual Studio Code\u5b58\u5132\u5eab\u8a2d\u5b9a\ncat /etc/yum.repos.d/vscode.repo\n\n# \u7b2c\u4e94\u6b65\uff1a\u5b89\u88ddVisual Studio Code (\u8acb\u4f9d\u7167\u9700\u6c42\u9078\u64c7\u5176\u4e2d\u4e00\u500b\u6307\u4ee4)\nsudo dnf install code -y      # \u5b89\u88dd\u7a69\u5b9a\u7248Visual Studio Code\nsudo dnf install code-insiders -y   # \u5b89\u88ddInsider Preview\u7248Visual Studio Code\nsudo dnf install code-exploration -y  # \u5b89\u88ddExploration\u7248Visual Studio Code\n')),(0,r.yg)("h3",{id:"mariadb-\u5b89\u88dd"},"MariaDB \u5b89\u88dd"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u5728Rocky Linux\u4e0a\u5b89\u88ddMariaDB\u7684\u6307\u4ee4\u6559\u5b78\u3002\u9019\u4efd\u6559\u5b78\u5c07\u5f15\u5c0e\u60a8\u5b8c\u6210\u5fc5\u8981\u7684\u6b65\u9a5f\u4ee5\u5b89\u88ddMariaDB\u548c\u555f\u7528MariaDB\u670d\u52d9\uff0c",(0,r.yg)("br",{parentName:"p"}),"\n","\u4ee5\u53ca\u4f7f\u7528mysql_secure_installation\u8a2d\u5b9aMariaDB\u7684\u5b89\u5168\u6027\u548c\u57fa\u672c\u914d\u7f6e\u3002  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b65\uff1a\u66f4\u65b0\u7cfb\u7d71\u5957\u4ef6\u5eab\nsudo dnf update -y\n\n# \u7b2c\u4e8c\u6b65\uff1a\u5b89\u88ddMariaDB\u53caMariaDB\u4f3a\u670d\u5668\nsudo dnf install mariadb mariadb-server -y\n\n# \u7b2c\u4e09\u6b65\uff1a\u555f\u52d5MariaDB\u4f3a\u670d\u5668\nsudo systemctl start mariadb\n\n# \u7b2c\u56db\u6b65\uff1a\u6aa2\u67e5MariaDB\u4f3a\u670d\u5668\u72c0\u614b\nsudo systemctl status mariadb\n\n# \u7b2c\u4e94\u6b65\uff1a\u8a2d\u5b9aMariaDB\u4f3a\u670d\u5668\u958b\u6a5f\u555f\u52d5\nsudo systemctl enable mariadb\n\n# \u7b2c\u516d\u6b65\uff1a\u4f7f\u7528mysql_secure_installation\u8a2d\u5b9aMariaDB\u7684\u5b89\u5168\u6027\u548c\u57fa\u672c\u914d\u7f6e\nsudo mysql_secure_installation\n\n# \u7b2c\u4e03\u6b65\uff1a\u6aa2\u67e5MariaDB\u7684\u7248\u672c\u8cc7\u8a0a\nmysqladmin -u root -p version\n")),(0,r.yg)("h5",{id:"\u5982\u679c\u60a8\u60f3\u8981\u5728mariadb\u4e0a\u4f7f\u7528\u81ea\u5b9a\u7fa9\u7aef\u53e3\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f"},"\u5982\u679c\u60a8\u60f3\u8981\u5728MariaDB\u4e0a\u4f7f\u7528\u81ea\u5b9a\u7fa9\u7aef\u53e3\uff0c\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b65\uff1a\u66f4\u6539\u9810\u8a2d\u7aef\u53e3\nsudo vim /etc/my.cnf.d/mariadb-server.cnf\n\n[server]\nport = 27483\n\n# \u7b2c\u4e8c\u6b65\uff1a\u8a2d\u7f6e SELinux \u898f\u5247\nsudo semanage port -a -t mysqld_port_t -p tcp 27483\nsudo semanage port -l | grep mysqld_port_t\n\n# \u7b2c\u4e09\u6b65\uff1a\u958b\u555f\u9632\u706b\u7246\u5c0d\u61c9\u7aef\u53e3\u4ee5\u53ca\u522a\u9664\u9810\u8a2d\u7aef\u53e3\nsudo firewall-cmd --permanent --add-port=27483/tcp\nsudo firewall-cmd --remove-port=3306/tcp --permanent\nsudo firewall-cmd --reload\nsudo firewall-cmd --list-ports\n\n# \u7b2c\u56db\u6b65\uff1a\u91cd\u65b0\u555f\u52d5MariaDB\u4f3a\u670d\u5668\nsudo systemctl restart mariadb\n")),(0,r.yg)("h3",{id:"dbeaver-\u5b89\u88dd"},"DBeaver \u5b89\u88dd"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u5728Rocky Linux\u4e0a\u5b89\u88ddDBeaver\u7684\u6307\u4ee4\u6559\u5b78\u3002\u9019\u4efd\u6559\u5b78\u5c07\u5f15\u5c0e\u60a8\u5b8c\u6210\u5fc5\u8981\u7684\u6b65\u9a5f\u4ee5\u5b89\u88ddsnap\u548cDBeaver\u3002  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b65\uff1a\u66f4\u65b0\u7cfb\u7d71\u5957\u4ef6\u5eab\nsudo dnf update -y\n\n# \u7b2c\u4e8c\u6b65\uff1a\u5b89\u88ddsnapd\nsudo dnf install snapd\n\n# \u7b2c\u4e09\u6b65\uff1a\u555f\u7528snapd socket\nsudo systemctl enable --now snapd.socket\n\n# \u7b2c\u56db\u6b65\uff1a\u555f\u7528snapd\nsudo systemctl enable --now snapd\n\n# \u7b2c\u4e94\u6b65\uff1a\u5b89\u88ddDBeaver\nsudo snap install dbeaver-ce\n")),(0,r.yg)("h3",{id:"nginx-\u5b89\u88dd"},"Nginx \u5b89\u88dd"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f\u5728Rocky Linux\u4e0a\u5b89\u88ddNginx\u7684\u6307\u4ee4\u6559\u5b78\u3002\u9019\u4efd\u6559\u5b78\u5c07\u5f15\u5c0e\u60a8\u5b8c\u6210\u5fc5\u8981\u7684\u6b65\u9a5f\u4ee5\u5b89\u88ddNginx\u4e26\u958b\u555f\u9632\u706b\u7246\u7aef\u53e3\u3002  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b65\uff1a\u66f4\u65b0\u7cfb\u7d71\u5957\u4ef6\u5eab\nsudo dnf update -y\n\n# \u7b2c\u4e8c\u6b65\uff1a\u5b89\u88ddNginx\nsudo dnf install nginx -y\n\n# \u7b2c\u4e09\u6b65\uff1a\u555f\u52d5Nginx\nsudo systemctl start nginx\n\n# \u7b2c\u56db\u6b65\uff1a\u958b\u6a5f\u555f\u52d5Nginx\nsudo systemctl enable nginx\n\n# \u7b2c\u4e94\u6b65\uff1a\u67e5\u770bNginx\u72c0\u614b\nsudo systemctl status nginx\n\n# \u7b2c\u516d\u6b65\uff1a\u958b\u555f\u9632\u706b\u7246\u7aef\u53e380\u548c443\nsudo firewall-cmd --permanent --add-port=80/tcp\nsudo firewall-cmd --permanent --add-port=443/tcp\nsudo firewall-cmd --reload\nsudo firewall-cmd --list-ports\n")),(0,r.yg)("h5",{id:"\u5982\u679c\u60a8\u60f3\u8981\u5728nginx\u4e0a\u4f7f\u7528\u81ea\u5b9a\u7fa9\u7aef\u53e3\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f"},"\u5982\u679c\u60a8\u60f3\u8981\u5728Nginx\u4e0a\u4f7f\u7528\u81ea\u5b9a\u7fa9\u7aef\u53e3\uff0c\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b65\uff1a\u958b\u555f\u81ea\u5b9a\u7fa9\u7aef\u53e360443\nsudo firewall-cmd --permanent --add-port=60443/tcp\n\n# \u7b2c\u4e8c\u6b65\uff1a\u8a2d\u5b9aSELinux http\u7aef\u53e360443\nsudo semanage port -a -t http_port_t -p tcp 60443\nsudo semanage port -l | grep http_port_t\n\n# \u7b2c\u4e09\u6b65\uff1a\u958b\u555fSELinux\u7684http\u9023\u7dda\nsudo setsebool -P httpd_can_network_connect 1\n")),(0,r.yg)("h3",{id:"certbot-\u5b89\u88dd"},"Certbot \u5b89\u88dd"),(0,r.yg)("p",null,"Certbot \u662f\u4e00\u500b\u81ea\u52d5\u5316\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5f9e Let's Encrypt \u53d6\u5f97\u514d\u8cbb\u7684 SSL \u6191\u8b49\uff0c\u4e26\u8b93\u4f60\u7684\u7db2\u7ad9\u555f\u7528 HTTPS\u3002",(0,r.yg)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u662f\u5b89\u88dd Certbot \u4ee5\u53ca\u901a\u904e Certbot \u53d6\u5f97 SSL \u6191\u8b49\u7684\u6b65\u9a5f\uff1a  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b65\uff1a\u66f4\u65b0\u7cfb\u7d71\u5957\u4ef6\u5eab\nsudo dnf update -y\n\n# \u7b2c\u4e8c\u6b65\uff1a\u5b89\u88dd Certbot \u8edf\u9ad4\u5305\nsudo dnf install certbot\nsudo dnf install python3-certbot-nginx\n\n# \u7b2c\u4e09\u6b65\uff1a\u4f7f\u7528 Certbot \u53d6\u5f97 SSL \u6191\u8b49\nsudo certbot --nginx -d your_domain_name\n\n# \u7b2c\u56db\u6b65\uff1a\u6e2c\u8a66\u6191\u8b49\u662f\u5426\u6b63\u5e38\nsudo certbot renew --dry-run\n")),(0,r.yg)("h5",{id:"\u5982\u679c\u60a8\u60f3\u8981\u4f7f\u7528-crontab-\u81ea\u52d5\u7e8c\u7d04\u6191\u8b49\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f"},"\u5982\u679c\u60a8\u60f3\u8981\u4f7f\u7528 crontab \u81ea\u52d5\u7e8c\u7d04\u6191\u8b49\uff0c\u8acb\u53c3\u7167\u4ee5\u4e0b\u6b65\u9a5f\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# \u7b2c\u4e00\u6b65\uff1a\u7de8\u8f2f crontab\nsudo crontab -e\n\n# \u6dfb\u52a0\u4ee5\u4e0b\u884c\n0 0,12 * * * certbot renew\n")),(0,r.yg)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u4e2d\uff0c0 0,12 * * * \u8868\u793a\u6bcf\u5929 0 \u9ede\u548c 12 \u9ede\u57f7\u884c\u3002\u66f4\u591a\u6709\u95dc cron \u8a2d\u5b9a\u7684\u8a73\u7d30\u8cc7\u6599\uff0c\u8acb\u53c3\u95b1\u76f8\u95dc\u6587\u4ef6\u3002"))}c.isMDXComponent=!0}}]);