# 更新 User table 的 一名使用者的權限

更新 User table 的 一名使用者的權限  
給管理員用的 (後台更新使用者)  
後台確認註冊使用者並發放權限或修改  

PATH: `/api/service/user/updateOneUserPermissions`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[Admin]`  


### 請求格式
* `username`: 使用者帳號
* `user_permissions`: 使用者權限
* `registered`: 是否已驗證註冊, (0: 未驗證, 1: 已驗證)


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
* `"QUERY_FAILED"`

[`"AccDetails"`](../../types.md#accdetails)
* `"ACCOUNT_NOT_EXISTS"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "accDetails"?: AccDetails,
    "data": []
}
```


### 回傳範例
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

Server 錯誤  
```json
{
    "status": 500,
    "loadType": "QUERY_FAILED",
    "data": []
}
```
