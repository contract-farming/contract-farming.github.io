# 刪除其中一個 契作合約

刪除其中一個契作合約

PATH: `/api/contract/deleteOne`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 待刪除的 契作合約 uuid

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

### 該契作合約已被引用無法刪除
```json
{
    "loadType": LoadType.ROW_IS_REFERENCED,
    "data": []
}
```

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
