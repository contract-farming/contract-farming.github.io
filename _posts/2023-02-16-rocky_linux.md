---
title: RockyLinux
author: hmes98318
date: 2023-02-16
category: Jekyll
layout: post
---



### SSH 端口設置
以下是一份開啟SSH連接埠的指令教學。這份教學將引導您完成必要的步驟以開啟SSH連接埠。  
```bash
# 第一步：編輯 SSH 設定檔
sudo vim /etc/ssh/sshd_config

# 第二步：更改 SSH 連接埠
將 "Port 22" 改為 "Port 33000" （或您想要使用的端口號）

# 第三步：設置 SELinux 規則
sudo semanage port -a -t ssh_port_t -p tcp 33000
sudo semanage port -l | grep ssh

# 第四步：設置防火牆規則
sudo firewall-cmd --add-port=33000/tcp --permanent
sudo firewall-cmd --reload
sudo firewall-cmd --list-port

# 第五步：重新啟動 SSH 服務
sudo systemctl restart sshd

# 第六步：檢查 SSH 服務狀態
sudo systemctl status sshd
```




### 遠端桌面(RDP)
以下是一份安裝遠端桌面(RDP)的指令教學，您可以使用這份教學在Linux系統中設置RDP並連接到遠端桌面。  
這份教學將引導您進行必要的步驟以設置xRDP，它是一個在Linux中提供RDP服務的軟體套件。  

```bash
# 第一步：更新系統套件庫
sudo dnf update -y

# 第二步：安裝 EPEL 軟體套件庫
sudo dnf install epel-release -y

# 第三步：安裝 xRDP
sudo dnf install xrdp -y

# 第四步：編輯 xRDP 設定檔
sudo vim /etc/xrdp/xrdp.ini

# 第五步：更改 xRDP 連接埠
將 "port=3389" 改為 "port=30389" （或您想要使用的端口號）

# 第六步：開啟防火牆的 30389/tcp 連接埠
sudo firewall-cmd --permanent --add-port=30389/tcp

# 第七步：重新載入防火牆設定
sudo firewall-cmd --reload

# 第八步：確認防火牆的開放連接埠
sudo firewall-cmd --list-ports

# 第九步：重新啟動系統
sudo reboot
```




### nvm node.js 版本管理
以下是一份使用nvm安裝Node.js的指令教學。這份教學將引導您完成必要的步驟以安裝nvm並透過nvm安裝及管理Node.js版本。  
nvm GitHub：[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)  

```bash
# 第一步：下載並安裝nvm
sudo wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# 第二步：查看所有可用的Node.js版本
nvm list-remote

# 第三步：安裝指定版本的Node.js
nvm install <node version>

# 第四步：使用已安裝的Node.js版本
nvm use <node version>

# 第五步：將已安裝的Node.js版本設為預設版本
nvm alias default <node version>

# 第六步：檢查Node.js版本
node -v
```




### VScode 安裝
以下是在Rocky Linux上安裝Visual Studio Code的指令教學。這份教學將引導您完成必要的步驟以安裝並啟用Visual Studio Code存儲庫，  
以及透過dnf安裝Visual Studio Code。請注意，您可以根據您的需求選擇使用不同的Visual Studio Code版本。  

```bash
# 第一步：更新系統套件庫
sudo dnf update -y

# 第二步：匯入Microsoft的GPG金鑰
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

# 第三步：新增Visual Studio Code存儲庫
printf "[vscode]\nname=packages.microsoft.com\nbaseurl=https://packages.microsoft.com/yumrepos/vscode/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc\nmetadata_expire=1h" | sudo tee -a /etc/yum.repos.d/vscode.repo

# 第四步：檢查Visual Studio Code存儲庫設定
cat /etc/yum.repos.d/vscode.repo

# 第五步：安裝Visual Studio Code (請依照需求選擇其中一個指令)
sudo dnf install code -y      # 安裝穩定版Visual Studio Code
sudo dnf install code-insiders -y   # 安裝Insider Preview版Visual Studio Code
sudo dnf install code-exploration -y  # 安裝Exploration版Visual Studio Code
```




### MariaDB 安裝
以下是在Rocky Linux上安裝MariaDB的指令教學。這份教學將引導您完成必要的步驟以安裝MariaDB和啟用MariaDB服務，  
以及使用mysql_secure_installation設定MariaDB的安全性和基本配置。  

```bash
# 第一步：更新系統套件庫
sudo dnf update -y

# 第二步：安裝MariaDB及MariaDB伺服器
sudo dnf install mariadb mariadb-server -y

# 第三步：啟動MariaDB伺服器
sudo systemctl start mariadb

# 第四步：檢查MariaDB伺服器狀態
sudo systemctl status mariadb

# 第五步：設定MariaDB伺服器開機啟動
sudo systemctl enable mariadb

# 第六步：使用mysql_secure_installation設定MariaDB的安全性和基本配置
sudo mysql_secure_installation

# 第七步：檢查MariaDB的版本資訊
mysqladmin -u root -p version
```




### DBeaver 安裝
以下是在Rocky Linux上安裝DBeaver的指令教學。這份教學將引導您完成必要的步驟以安裝snap和DBeaver。  

```bash
# 第一步：更新系統套件庫
sudo dnf update -y

# 第二步：安裝snapd
sudo dnf install snapd

# 第三步：啟用snapd socket
sudo systemctl enable --now snapd.socket

# 第四步：啟用snapd
sudo systemctl enable --now snapd

# 第五步：安裝DBeaver
sudo snap install dbeaver-ce
```




### Nginx 安裝
以下是在Rocky Linux上安裝Nginx的指令教學。這份教學將引導您完成必要的步驟以安裝Nginx並開啟防火牆端口。  

```bash
# 第一步：更新系統套件庫
sudo dnf update -y

# 第二步：安裝Nginx
sudo dnf install nginx -y

# 第三步：啟動Nginx
sudo systemctl start nginx

# 第四步：開機啟動Nginx
sudo systemctl enable nginx

# 第五步：查看Nginx狀態
sudo systemctl status nginx

# 第六步：開啟防火牆端口80和443
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --reload
sudo firewall-cmd --list-ports
```

##### 如果您想要在Nginx上使用自定義端口，請參照以下步驟：  

```bash
# 第一步：開啟自定義端口60443
sudo firewall-cmd --permanent --add-port=60443/tcp

# 第二步：設定SELinux http端口60443
sudo semanage port -a -t http_port_t -p tcp 60443
sudo semanage port -l | grep http_port_t

# 第三步：開啟SELinux的http連線
sudo setsebool -P httpd_can_network_connect 1
```




### Certbot 安裝
Certbot 是一個自動化的工具，可以從 Let's Encrypt 取得免費的 SSL 憑證，並讓你的網站啟用 HTTPS。  
以下是安裝 Certbot 以及通過 Certbot 取得 SSL 憑證的步驟：  

```bash
# 第一步：更新系統套件庫
sudo dnf update -y

# 第二步：安裝 Certbot 軟體包
sudo dnf install certbot
sudo dnf install python3-certbot-nginx

# 第三步：使用 Certbot 取得 SSL 憑證
sudo certbot --nginx -d your_domain_name

# 第四步：測試憑證是否正常
sudo certbot renew --dry-run
```

##### 如果您想要使用 crontab 自動續約憑證，請參照以下步驟：
```bash
# 第一步：編輯 crontab
sudo crontab -e

# 添加以下行
0 0,12 * * * certbot renew
```
以上命令中，0 0,12 * * * 表示每天 0 點和 12 點執行。更多有關 cron 設定的詳細資料，請參閱相關文件。  


