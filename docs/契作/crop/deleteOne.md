# 刪除其中一個 作物品種

刪除其中一個作物品種

PATH: `/api/crop/deleteOne`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `uuid`: 待刪除的 作物品種 uuid

```js
{
    "uuid": number
}
```


### 回傳格式

回傳 data 為陣列內含成功刪除的 作物品種 資料  

[`StatusCode`](../../types.md#statuscode)  
* 200
* 400
* 500

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_NOT_FOUND"`
* `"ROW_IS_REFERENCED"`
* `"QUERY_FAILED"`

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
            "uuid": 1,
            "name": "高雄145",
            "unit_yield": 30,
            "unit": 1
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

該作物品種已被引用無法刪除
```json
{
    "status": 200,
    "loadType": "ROW_IS_REFERENCED",
    "data": []
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
