# 刪除其中一個 肥料種類

刪除其中一個肥料種類

PATH: `/api/fert/deleteOne`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `name`: 待刪除的 肥料種類 uuid

```js
{
    "uuid": number
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
* `ROW_IS_REFERENCED`
* `QUERY_FAILED`


## 回傳範例
### 成功刪除  
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

### 未找到該資料
```json
{
    "loadType": LoadType.DATA_NOT_FOUND,
    "data": []
}
```

### 該肥料種類已被引用無法刪除
```json
{
    "loadType": LoadType.ROW_IS_REFERENCED,
    "data": []
}
```

### Server 錯誤  
```json
{
    "loadType": "QUERY_FAILED",
    "data": []
}
```
