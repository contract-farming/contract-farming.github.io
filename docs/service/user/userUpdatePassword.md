# 使用者更新密碼

使用者更新密碼  
給使用者用的 (使用者編輯個人資料介面)  
用 sessionId 獲取資料  

PATH: `/api/service/user/userUpdatePassword`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `old_password`: 舊密碼 (`最大100個字`)
* `new_password`: 新密碼 (`最大100個字`)

忘記密碼要管理員發重設密碼郵件  

```js
{
    "old_password": string,
    "new_password": string
}
```


## 回傳格式
[`StatusCode`](../../types.md#statuscode)  
* 200
* 401
* 500

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `ACCOUNT_NOT_EXISTS`
* `QUERY_FAILED`


## 回傳範例
### 更新成功
```json
{
    "status": 200,
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### sessionId 不存在 
(未登入或過期)  
```json
{
    "status": 401,
    "loadType": LoadType.UNAUTHORIZED,
    "data": []
}
```

### 舊密碼錯誤
```json
{
    "status": 200,
    "loadType": LoadType.OLD_PASSWORD_ERROR,
    "data": [
        {
            "username": "user10",
            "old_password": "00123",
            "new_passwprd": "789789"
        }
    ]
}
```

### Server 錯誤  
```json
{
    "status": 500,
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
