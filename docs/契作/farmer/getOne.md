# 獲取其中一個 Farmer 內容

獲取其中一個 Farmer 內容

PATH: `/api/farmer/getOne`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 契作農民的 id

```js
{
    "id": number
}
```


## 回傳格式

回傳 data 為陣列內含指定的 farmer 資料  

* `identity_number`: 身分證 (`需剛好10個字`) (`VARCHAR(10)`)
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
            "id": string,
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
            "id": "A123456789",
            "name": "方O洋",
            "phone": "07-1234567",
            "address": "大樹區學城路一段1號"
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

### 不存在該資料
```json
{
    "loadType": LoadType.DATA_NOT_FOUND,
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
