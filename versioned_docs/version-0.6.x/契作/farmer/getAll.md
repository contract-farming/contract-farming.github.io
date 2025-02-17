# 獲取 Farmer Table

獲取 Farmer 所有內容

PATH: `/api/farmer/getAll`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含所有 farmer 資料  

* `identity_number`: 身分證 (`VARCHAR(10)`)
* `name`: 農民名稱 (`VARCHAR(32)`)
* `phone`: 農民電話號碼 (家用或手機) (`VARCHAR(32)`)
* `address`: 農民地址 (`VARCHAR(255)`)

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `QUERY_FAILED`

[`PhoneNumber`](../../types.md#phonenumber)  



## 回傳範例
### 成功回傳
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": number,
            "identity_number": string,
            "name": string,
            "phone": PhoneNumber,
            "address": string
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
            "id": 35,
            "identity_number": "A123456789",
            "name": "方O洋",
            "phone": "07-1234567",
            "address": "大樹區學城路一段1號"
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
