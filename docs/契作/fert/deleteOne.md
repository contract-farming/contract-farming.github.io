# 刪除其中一個 肥料種類

刪除其中一個肥料種類

PATH: `/api/fert/deleteOne`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `name`: 待刪除的 肥料種類 uuid

```js
{
    "uuid": number
}
```


### 回傳格式

回傳 data 為陣列內含成功刪除的 肥料種類 資料  

[`StatusCode`](../../types.md#statuscode)  
* 200
* 400

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_NOT_FOUND"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "uuid": number,
            "name": string,
            "unit_yield": number,
            "unit": number
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
            "uuid": 11,
            "name": "肥料五號"
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