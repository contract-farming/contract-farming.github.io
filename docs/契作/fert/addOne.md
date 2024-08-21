# 增加一個 肥料種類

增加一個肥料種類

PATH: `/api/fert/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `name`: 肥料種類名稱 (`VARCHAR(255)`)
* `weight`: 肥料重量 (KG) (`SMALLINT_UNSIGNED`)

```js
{
    "name": string,
    "weight": number
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_EXISTED`
* `QUERY_FAILED`


## 回傳範例
### 成功新增
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

### 已存在該資料  
待添加的資料已存在資料庫中  
`data[]` 為已存在資料庫的資料
```json
{
    "loadType": LoadType.DATA_EXISTED,
    "data": [
        {
            "id": 11,
            "name": "肥料五號",
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
