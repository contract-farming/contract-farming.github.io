# 獲取已登入的所有裝置

獲取該名使用者已登入的所有裝置  
用 sessionId 獲取資料  

PATH: `/api/service/user/getLoginDevices`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含指定使用者個人資料  

* `id`: Session 編號
* `device`: 裝置名稱 (User-Agent)
* `last_refresh`: 最後刷新時間 (使用時間)

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `UNAUTHORIZED`
* `QUERY_FAILED`


## 回傳範例
### 成功獲取
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": number,
            "device": string,
            "last_refresh": string  // YYYY/MM/DD HH:mm:ss
        }
    ]
}
```
範例
```json
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": 137,
            "device": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            "last_refresh": "2024/06/24 21:50:50"
        }
    ]
}
```

### sessionId 不存在 
(未登入或過期)  
```json
{
    "loadType": LoadType.UNAUTHORIZED,
    "data": []
}
```

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
