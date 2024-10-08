# 更新一個 肥料種類 資料

更新一個肥料種類資料

PATH: `/api/fert/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 肥料種類的 id (`不可更新`) (`INT_UNSIGNED`)
* `name`: 肥料種類名稱 (`VARCHAR(255)`)
* `weight`: 肥料重量 (KG) (`SMALLINT_UNSIGNED`)

```js
{
    "id": number,
    "name": string,
    "weight": number
}
```


## 回傳格式
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
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### 參數錯誤
```json
{
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 不存在該資料
```json
{
    "loadType": LoadType.DATA_NOT_FOUND,
    "data": []
}
```

### 在資料庫中已存在與待更新資料相同的資料  
`data[]` 為資料庫中相同的資料
```json
{
    "loadType": LoadType.DATA_EXISTED,
    "data": [
        {
            "id": 15,
            "name": "農友牌台肥43號",
            "weight": 500
        }
    ]
}
```

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
