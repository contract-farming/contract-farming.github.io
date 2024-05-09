# 獲取指定使用者權限 (Admin)

獲取指定使用者權限  
前端用來檢查是否有指定 api 訪問權限  
用 sessionId 獲取資料  

PATH: `/api/service/user/getPermission`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含指定使用者個人資料  

* `user_permissions`: 使用者權限

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
            "user_permissions": number
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
            "user_permissions": 2
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
