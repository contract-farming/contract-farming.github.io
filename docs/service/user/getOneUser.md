# 獲取指定使用者個人資料 (Admin)

獲取 User table 的一名使用者個人資料  
給管理員用的  
後台管理使用者  

PATH: `/api/service/user/getOneUser`  
Method: `GET`  
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

回傳 data 為陣列內含指定使用者個人資料  

* `username`: 使用者帳號
* `email`: 電子郵件
* `name`: 使用者姓名
* `user_permissions`: 使用者權限 (只有註冊未驗證為 null) (之後會改?)
* `telephone`: 家用電話 (可留空)
* `cellphone`: 手機號碼 (可留空)
* `address`: 地址 (可留空)
* `registered`: 是否已驗證註冊 (0: 未驗證, 1: 已驗證)

[`UserPermissions`](../../types.md#userpermissions)  
* Admin

[`StatusCode`](../../types.md#statuscode)  
* 200
* 500

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `ACCOUNT_NOT_EXISTS`
* `QUERY_FAILED`


## 回傳範例
### 成功獲取
格式
```js
{
    "status": StatusCode,
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "username": string,
            "email": string,
            "name": string,
            "user_permissions": number | null,
            "telephone": string | null,
            "cellphone": string | null,
            "address": string | null,
            "registered": boolean
        }
    ]
}
```
範例
```json
{
    "status": 200,
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "username": "admin",
            "email": "netlab@isu.edu.tw",
            "name": "管理員",
            "user_permissions": 1,
            "telephone": "8682260",
            "cellphone": "0981786780",
            "address": "新園鄉田南路143路\n",
            "registered": 1
        }
    ]
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
