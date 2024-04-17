# 更新 User table 的一名使用者的權限 (Admin)

更新 User table 的 一名使用者的權限  
給管理員用的 (後台更新使用者)  
後台確認註冊使用者並發放權限或修改  

PATH: `/api/service/user/updateOneUserPermissions`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[Admin]`  


## 請求格式
* `username`: 使用者帳號 (`最大100個字`)
* `user_permissions`: 使用者權限
* `registered`: 是否已驗證註冊, (0: 未驗證, 1: 已驗證)

```js
{
    "username": string,
    "user_permissions": number,
    "registered": number        // 0, 1
}
```


## 回傳格式
[`UserPermissions`](../../types.md#userpermissions)  
* Admin

[`StatusCode`](../../types.md#statuscode)  
* 200
* 400
* 500

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `ACCOUNT_NOT_EXISTS`
* `QUERY_FAILED`


## 回傳範例
### 成功更新
```json
{
    "status": 200,
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### 參數錯誤
```json
{
    "status": 400,
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 該 username 不存在
```json
{
    "status": 200,
    "loadType": LoadType.ACCOUNT_NOT_EXISTS,
    "data": [
        {
            "username": "user10"
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
