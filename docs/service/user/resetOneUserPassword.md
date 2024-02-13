# 重設指定使用者密碼

重設指定使用者密碼  
給管理員用的 (後台更新使用者)  
自動發送重置後的密碼到使用者郵箱  

PATH: `/api/service/user/resetOneUserPassword`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[Admin]`  


### 請求格式
* `username`: 使用者帳號


### 回傳格式
[`UserPermissions`](../../types.md#userpermissions)  
* Admin

[`StatusCode`](../../types.md#statuscode)  
* 200
* 400
* 500

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"TYPE_ACCOUNT"` [`"AccDetails"`](../../types.md#accdetails)
* `"TYPE_MAIL"` [`"MailDetails"`](../../types.md#mailDetails)
* `"QUERY_FAILED"`

[`"AccDetails"`](../../types.md#accdetails)
* `"ACCOUNT_NOT_EXISTS"`

[`"MailDetails"`](../../types.md#mailDetails)
* `"DISABLE"`
* `"SEND_FAIL"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "accDetails"?: AccDetails,
    "mailDetails"?: MailDetails,
    "data": []
}
```


### 回傳範例
使用者信箱會收到新密碼
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": []
}
```

參數錯誤
```json
{
    "status": 400,
    "loadType": "PARAMETER_ERROR",
    "data": []
}
```

該 username 不存在
```json
{
    "status": 200,
    "loadType": "TYPE_ACCOUNT",
    "accDetails": "ACCOUNT_NOT_EXISTS",
    "data": [
        {
            "username": "user10"
        }
    ]
}
```

mail API 已被禁用
```json
{
    "status": 200,
    "loadType": "TYPE_MAIL",
    "mailDetails": "DISABLE",
    "data": []
}
```

mail 發送失敗 (mail server 錯誤)
```json
{
    "status": 200,
    "loadType": "TYPE_MAIL",
    "mailDetails": "SEND_FAIL",
    "data": []
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
