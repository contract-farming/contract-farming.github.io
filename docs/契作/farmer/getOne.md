# 獲取其中一個 Farmer 內容

獲取其中一個 Farmer 內容

PATH: `/api/farmer/getOne`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `uuid`: 契作農民的 uuid


### 回傳格式

回傳 data 為陣列內含指定的 farmer 資料  

* `id`: 身分證
* `name`: 農民名稱
* `phone`: 農民電話號碼 (家用或手機)
* `address`: 農民地址

[`StatusCode`](../../types.md#statuscode)  
[`LoadType`](../../types.md#loadtype)  
[`PhoneNumber`](../../types.md#phonenumber)  

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "uuid": number,
            "id": string,
            "name": string,
            "phone": PhoneNumber,
            "address": string
        }
    ]
}
```


### 回傳範例
存在該資料
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "uuid": 35,
            "id": "A123456789",
            "name": "方O洋",
            "phone": "07-1234567",
            "address": "大樹區學城路一段1號"
        }
    ]
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

不存在該資料
```json
{
    "status": 200,
    "loadType": "DATA_NOT_FOUND",
    "data": []
}
```