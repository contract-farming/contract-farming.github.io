# 檢查 session 是否還有效

檢查 session 是否還有效  
用 sessionId 獲取資料  

PATH: `/api/service/session/validSession`  
Method: `GET`  
LoginRequired: `false`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `UNAUTHORIZED`


## 回傳範例
### Session 有效
```json
{
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### Session 無效
```json
{
    "loadType": LoadType.UNAUTHORIZED,
    "data": []
}
```
