# 更新一個 農藥種類 資料

更新一個農藥種類資料

PATH: `/api/pest/updateOne`  
Method: `PUT`


### 請求格式
* `uuid`: 農藥種類的 uuid (不可更新)
* `name`: 待更新的農藥種類名稱

```js
{
    "uuid": number,
    "name": string
}
```

### 回傳格式

回傳 data 為陣列內含成功更新的 農藥種類 資料  

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
            "name": string
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
            "name": "農藥十號"
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
            "uuid": 3,
            "name": "農藥三號"
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
            "uuid": 12,
            "name": "農藥十號"
        }
    ]
}
```