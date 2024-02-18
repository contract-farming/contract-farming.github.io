# 增加一個 肥料種類

增加一個肥料種類

PATH: `/api/fert/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `name`: 肥料種類名稱 (`最大100個字`)

```js
{
    "name": string
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
* `DATA_EXISTED`
* `QUERY_FAILED`


## 回傳範例
### 成功新增
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

### 已存在該資料  
待添加的資料已存在資料庫中  
`data[]` 為已存在資料庫的資料
```json
{
    "status": 200,
    "loadType": LoadType.DATA_EXISTED,
    "data": [
        {
            "uuid": 11,
            "name": "肥料五號"
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
