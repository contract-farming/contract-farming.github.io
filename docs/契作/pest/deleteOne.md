# 刪除其中一個 農藥種類

刪除其中一個農藥種類

PATH: `/api/pest/deleteOne`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 待刪除的 農藥種類 uuid

```js
{
    "uuid": number
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
* `ROW_IS_REFERENCED`
* `QUERY_FAILED`


## 回傳範例
### 成功刪除  
`data[]` 為成功刪除的資料
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

### 未找到該資料
```json
{
    "status": 200,
    "loadType": LoadType.DATA_NOT_FOUND,
    "data": []
}
```

### 該農藥種類已被引用無法刪除
```json
{
    "status": 200,
    "loadType": LoadType.ROW_IS_REFERENCED,
    "data": []
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
