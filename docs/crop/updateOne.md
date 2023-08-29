# 更新一個 作物品種 資料

更新一個作物品種資料

PATH: `/api/crop/updateOne`  
Method: `PUT`


### 請求格式
* `name`: 作物品種名稱
* `unit_yield`: 單位面積預估產量
* `unit`: 產量單位 (1: 台斤, 2: 公斤)

```js
{
    "name": string,
    "unit_yield": number,
    "unit": number,
}
```

### 回傳格式

回傳 data 為陣列內含成功更新的 作物品種 資料  

[`StatusCode`](../types.md#statuscode)  
* 200
* 400

[`LoadType`](../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_NOT_FOUND"`
* `"SAME_DATA"`

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
成功更新  
`data[]` 為成功更新後的資料  
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "name": "高雄145",
            "unit_yield": 25,
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

不存在該資料
```json
{
    "status": 200,
    "loadType": "DATA_NOT_FOUND",
    "data": []
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
            "name": "高雄155",
            "unit_yield": 30,
            "unit": 1
        }
    ]
}
```