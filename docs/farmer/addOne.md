# 增加一個 契作農民

增加一個契作農民

PATH: `/api/farmer/addOne`  
Method: `POST`


### 請求格式
* `id`: 身分證 (`需剛好10個字`)
* `name`: 農民名稱 (`最大20個字`)
* `phone`: 農民電話號碼 (家用或手機) (`最大20個字`)
* `address`: 農民地址 (`最大100個字`)

```js
{
    "id": string,
    "name": string,
    "phone": string,
    "address": string,
}
```

### 回傳格式

回傳 data 為陣列內含成功新增的 契作農民 資料  

[`StatusCode`](../types.md#statuscode)  
* 200
* 400

[`LoadType`](../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_EXISTED"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "id": string,
            "name": string,
            "phone": string,
            "address": string,
        }
    ]
}
```

### 回傳範例
成功新增
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "id": "A123457896",
            "name": "莊O城",
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

已存在該資料  
待添加的資料已存在資料庫中  
`data[]` 為已存在資料庫的資料
```json
{
    "status": 200,
    "loadType": "DATA_EXISTED",
    "data": [
        {
            "uuid": 206,
            "id": "A123457896",
            "name": "莊O城",
            "phone": "07-1234567",
            "address": "大樹區學城路一段1號"
        }
    ]
}
```