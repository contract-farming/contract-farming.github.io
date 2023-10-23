# 刪除其中一個 作契作農民

刪除其中一個作契作農民

PATH: `/api/farmer/deleteOne`  
Method: `DELETE`


### 請求格式
* `uuid`: 待刪除的 契作農民 uuid

```js
{
    "uuid": number
}
```

### 回傳格式

回傳 data 為陣列內含成功刪除的 契作農民 資料  

[`StatusCode`](../types.md#statuscode)  
* 200
* 400

[`LoadType`](../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_NOT_FOUND"`

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
成功刪除  
`data[]` 為成功刪除的資料
```json
{
    "status": 200,
    "loadType": "SUCCEED",
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

參數錯誤
```json
{
    "status": 400,
    "loadType": "PARAMETER_ERROR",
    "data": []
}
```

未找到該資料
```json
{
    "status": 200,
    "loadType": "DATA_NOT_FOUND",
    "data": []
}
```