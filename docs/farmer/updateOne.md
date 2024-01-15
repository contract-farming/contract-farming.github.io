# 更新一個 契作農民 資料

更新一個契作農民資料

PATH: `/api/farmer/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `uuid`: 契作農民的 uuid (`不可更新`)
* `id`: 待更新的身分證 (`需剛好10個字`)
* `name`: 待更新的農民名稱 (`最大20個字`)
* `phone`: 待更新的農民電話號碼 (家用或手機) (`最大20個字`)
* `address`: 待更新的農民地址 (`最大100個字`)

```js
{
    "uuid": number,
    "id": string,
    "name": string,
    "phone": string,
    "address": string,
}
```


### 回傳格式

回傳 data 為陣列內含成功更新的 契作農民 資料  

[`StatusCode`](../types.md#statuscode)  
* 200
* 400

[`LoadType`](../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_NOT_FOUND"`
* `"DATA_CONFLICT"`
* `"SAME_DATA"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "uuid": number,
            "id": string,
            "name": string,
            "phone": string,
            "address": string,
        }
    ]
}
```


### 回傳範例
成功更新  
`data[]` 為成功更新後的資料  
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "uuid": 12,
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

待更新的資料與原有資料庫的其他資料相同  
`data[]` 為資料庫中相同的資料
```json
{
    "status": 200,
    "loadType": "DATA_CONFLICT",
    "data": [
        {
            "uuid": 100,
            "id": "T100424178",
            "name": "莊O城",
            "phone": "07-1234567",
            "address": "大樹區學城路一段1號"
        }
    ]
}
```

待更新的資料與舊有的資料相同  
`data[]` 為舊有的資料
```json
{
    "status": 200,
    "loadType": "SAME_DATA",
    "data": [
        {
            "uuid": 207,
            "id": "T100424178",
            "name": "莊O城",
            "phone": "07-1234567",
            "address": "大樹區學城路一段1號"
        }
    ]
}
```