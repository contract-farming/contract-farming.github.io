---
sidebar_position: 2
---


全部程式都用 Nginx 反向代理出去  
這樣憑證寫在 Nginx 就好，不會髒到 code  

### Nginx 對外端口  

|對外端口|代理端口|用途|nginx設定檔|程式路徑|
|:-:|:-:|:-:|:-:|:-:|
| 57443 | 44301 | 學長舊的專題 | [old_db.conf](#old_dbconf) | /home/IoT/Desktop/Github/theweb |
| 58443 |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |




------------------------------  


### .conf 配置檔

#### old_db.conf
```conf
server {
    listen      57443 ssl http2;
    listen      [::]:57443 http2 ssl;
    server_name netlab.isu.edu.tw;


    location / {
        proxy_pass http://127.0.0.1:44301;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }


    ssl_certificate /etc/letsencrypt/live/netlab.isu.edu.tw/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/netlab.isu.edu.tw/privkey.pem; # managed by Certbot
}

```