# 刪除已登入的所有裝置

刪除該名使用者已登入的所有裝置  
用 sessionId 刪除資料  

PATH: `/api/service/user/deleteLoginDevices`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `session_id`: getLoginDevices API 所回傳的 session 編號


## 回傳格式

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `UNAUTHORIZED`
* `DATA_NOT_FOUND`
* `QUERY_FAILED`


## 回傳範例
### 成功刪除
```js
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

### sessionId 不存在 
(未登入或過期)  
```json
{
    "loadType": LoadType.UNAUTHORIZED,
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

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
