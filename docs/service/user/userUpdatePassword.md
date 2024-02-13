# 使用者更新密碼

使用者更新密碼  
給使用者用的 (使用者編輯個人資料介面)  
用 sessionId 獲取資料  

PATH: `/api/service/user/userUpdatePassword`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `old_passwprd`: 舊密碼
* `new_password`: 新密碼

忘記密碼要管理員發重設密碼郵件  


### 回傳格式
[`StatusCode`](../../types.md#statuscode)  
* 200
* 401
* 500

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"TYPE_ACCOUNT"` [`"AccDetails"`](../../types.md#accdetails)
* `"QUERY_FAILED"`

[`"AccDetails"`](../../types.md#accdetails)
* `"ACCOUNT_NOT_EXISTS"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": []
}
```


### 回傳範例
更新成功
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": []
}
```

sessionId 不存在 (未登入或過期)
```json
{
    "status": 401,
    "loadType": "UNAUTHORIZED",
    "data": []
}
```

該 username 不存在
```json
{
    "status": 200,
    "loadType": "TYPE_ACCOUNT",
    "accDetails": "OLD_PASSWORD_ERROR",
    "data": [
        {
            "username": "user10",
            "old_passwprd": "00123",
            "new_passwprd": "789789"
        }
    ]
}
```

Server 錯誤  
```json
{
    "status": 500,
    "loadType": "QUERY_FAILED",
    "data": []
}
```
