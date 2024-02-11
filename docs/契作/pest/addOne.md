# 增加一個 農藥種類

增加一個農藥種類

PATH: `/api/pest/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `name`: 農藥種類名稱

```js
{
    "name": string
}
```


### 回傳格式

回傳 data 為陣列內含成功新增的 農藥種類 資料  

* `name`: 農藥種類名稱

[`StatusCode`](../../types.md#statuscode)  
* 200
* 400
* 500

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_EXISTED"`
* `"QUERY_FAILED"`

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
            "name": "農藥一號"
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
            "name": "農藥五號"
        }
    ]
}
```

Server 錯誤  
```json
{
    "status": 500,
    "loadType": "QUERY_FAILED",
    "data": []
}
```
