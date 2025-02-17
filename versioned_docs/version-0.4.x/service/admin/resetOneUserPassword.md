# 重設指定使用者密碼 (Admin)

重設指定使用者密碼  
給管理員用的 (後台更新使用者)  
自動發送重置後的密碼到使用者郵箱  

PATH: `/api/service/admin/resetOneUserPassword`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[Admin]`  


## 請求格式
* `username`: 使用者帳號 (`最大100個字`)

```js
{
    "username": string
}
```


## 回傳格式
[`UserPermissions`](../../types.md#userpermissions)  
* Admin

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `ACCOUNT_NOT_EXISTS`
* `DISABLE`
* `SEND_FAIL`
* `QUERY_FAILED`


## 回傳範例
### 成功重設
使用者信箱會收到新密碼
```json
{
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### 參數錯誤
```json
{
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 該 username 不存在
```json
{
    "loadType": LoadType.ACCOUNT_NOT_EXISTS,
    "data": [
        {
            "username": "user10"
        }
    ]
}
```

### mail API 已被禁用
```json
{
    "loadType": LoadType.DISABLE,
    "data": []
}
```

### mail 發送失敗 (mail server 錯誤)
```json
{
    "loadType": LoadType.SEND_FAIL,
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
