# 刪除流程清單中的其中一個內容

刪除其中一個 契作農地 的流程清單中的一個內容

PATH: `/api/cl/flowlist/deleteOne`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `name`: 待刪除的 流程清單 id

```js
{
    "id": number
}
```


## 回傳格式
[`LoadType`](../../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
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

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
