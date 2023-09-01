# 增加一個 肥料種類

增加一個肥料種類

PATH: `/api/fert/addOne`  
Method: `POST`


### 請求格式
* `name`: 肥料種類名稱

```js
{
    "name": string
}
```

### 回傳格式

回傳 data 為陣列內含成功新增的 肥料種類 資料  

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
            "name": string
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
            "name": "肥料一號"
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
            "uuid": 11,
            "name": "肥料五號"
        }
    ]
}
```