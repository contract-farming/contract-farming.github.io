# 更新一個 農藥種類 資料

更新一個農藥種類資料

PATH: `/api/pest/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 農藥種類的 uuid (`不可更新`)
* `name`: 待更新的農藥種類名稱 (`最大100個字`)

```js
{
    "uuid": number,
    "name": string
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
`data[]` 為成功更新後的資料  
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
            "uuid": 3,
            "name": "農藥三號"
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
