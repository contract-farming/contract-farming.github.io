# 獲取指定使用者個人資料

獲取指定使用者個人資料  
使用者用  
用 sessionId 獲取資料  

PATH: `/api/service/user/getUser`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含指定使用者個人資料  

* `username`: 使用者帳號
* `email`: 電子郵件
* `name`: 使用者姓名
* `telephone`: 家用電話 (可留空)
* `cellphone`: 手機號碼 (可留空)
* `address`: 地址 (可留空)

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `QUERY_FAILED`


## 回傳範例
### 成功獲取
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "username": string,
            "email": string,
            "name": string,
            "telephone": string | null,
            "cellphone": string | null,
            "address": string | null
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
            "username": "user",
            "email": "test1233@gmail.com",
            "name": "使用者",
            "telephone": "07-123456789",
            "cellphone": "0987654123",
            "address": "萬丹鄉大勇路299巷8號"
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
