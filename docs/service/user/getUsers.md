# 獲取 User table 的使用者列表 (Admin)

管理員後台用  
參數可選擇 registered  boolean    (是否已驗證註冊, 0: 未驗證, 1: 已驗證)  
來決定是 使用者列表 頁面  
還是 註冊確認頁面  
或全部顯示  

PATH: `/api/service/user/getUsers`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[Admin]`  


## 請求格式
* `type`: 選擇獲取的使用者內容 (0: 未驗證註冊, 1: 已驗證註冊, 2: 全部)

```js
{
    "type": number  // 0, 1, 2
}
```


## 回傳格式

回傳 data 為陣列內含指定使用者個人資料  

* `username`: 使用者帳號
* `email`: 電子郵件
* `name`: 使用者姓名
* `user_permissions`: 使用者權限
* `telephone`: 家用電話 (可留空)
* `cellphone`: 手機號碼 (可留空)
* `address`: 地址 (可留空)
* `registered`: 是否已驗證註冊 (0: 未驗證, 1: 已驗證)

[`UserPermissions`](../../types.md#userpermissions)  
* Admin

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `QUERY_FAILED`



## 回傳範例
### 成功回傳
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "username": string,
            "email": string,
            "name": string,
            "user_permissions": number,
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
        },
        {
            "username": "user",
            "email": "test1233@gmail.com",
            "name": "使用者",
            "user_permissions": 2,
            "telephone": "07-123456789",
            "cellphone": "0987654123",
            "address": "萬丹鄉大勇路299巷8號",
            "registered": 1
        },
        {
            "username": "user2",
            "email": "user1@gmail.com",
            "name": "使用者2",
            "user_permissions": 3,
            "telephone": "07-123456789",
            "cellphone": "0987654123",
            "address": "萬丹鄉大勇路299巷8號",
            "registered": 0
        }
    ]
}
```

### 參數錯誤
```json
{
    "loadType": LoadType.PARAMETER_ERROR,
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
