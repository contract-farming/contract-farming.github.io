# 刪除 User table 的一名使用者 (Admin)

刪除 User table 的一名使用者  
給管理員用的  
後台刪除使用者  

PATH: `/api/service/user/deleteOneUser`  
Method: `DELETE`  
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
* `QUERY_FAILED`


## 回傳範例
### 成功刪除
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

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
