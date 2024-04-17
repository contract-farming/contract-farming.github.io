# 更新 User table 的一名使用者 (Admin)

更新 User table 的 一名使用者  
給管理員用的 (後台更新使用者)  
未註冊驗證帳號也能更改  

PATH: `/api/service/user/updateOneUser`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[Admin]`  


## 請求格式
* `username`: 使用者帳號 (`最大100個字`)
* `user_permissions`: 使用者權限
* `email`: 電子郵件 (`最大100個字`)
* `name`: 使用者姓名 (`最大100個字`)
* `telephone`: 家用電話 (可留空) (`最大50個字`)
* `cellphone`: 手機號碼 (可留空) (`最大50個字`)
* `address`: 地址 (可留空) (`最大100個字`)

空值需用 `'EMPTY_DATA'`  

```js
{
    "username": string,
    "user_permissions": number,
    "email": string,
    "name": string,
    "telephone": string | 'EMPTY_DATA',
    "cellphone": string | 'EMPTY_DATA',
    "address": string | 'EMPTY_DATA'
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
