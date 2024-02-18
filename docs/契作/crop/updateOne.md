# 更新一個 作物品種 資料

更新一個作物品種資料

PATH: `/api/crop/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 作物品種的 uuid (`不可更新`)
* `name`: 待更新的作物品種名稱 (`最大100個字`)
* `unit_yield`: 待更新的單位面積預估產量 (`INT`)
* `unit`: 待更新的產量單位 (`1: 台斤, 2: 公斤`)

```js
{
    "uuid": number,
    "name": string,
    "unit_yield": number,
    "unit": number,
}
```


## 回傳格式
[`StatusCode`](../../types.md#statuscode)  
* 200
* 400
* 500

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
* `DATA_EXISTED`
* `QUERY_FAILED`


## 回傳範例
### 成功更新
```json
{
    "status": 200,
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### 參數錯誤
```json
{
    "status": 400,
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 不存在該資料
```json
{
    "status": 200,
    "loadType": LoadType.DATA_NOT_FOUND,
    "data": []
}
```

### 在資料庫中已存在與待更新資料相同的資料  
`data[]` 為資料庫中相同的資料
```json
{
    "status": 200,
    "loadType": LoadType.DATA_EXISTED,
    "data": [
        {
            "uuid": 22,
            "name": "高雄147",
            "unit_yield": 50,
            "unit": 2
        }
    ]
}
```

### Server 錯誤  
```json
{
    "status": 500,
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
