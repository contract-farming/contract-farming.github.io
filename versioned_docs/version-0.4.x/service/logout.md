---
sidebar_position: 3
---


# 登出

登出  
用 sessionId 獲取資料  

PATH: `/api/service/logout`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無請求參數  


## 回傳格式
需在登入的狀態下才有用 (cookie 中有 sessionId)  

[`LoadType`](../types.md#loadtype)  
* `SUCCEED`
* `UNAUTHORIZED`


## 回傳範例
### 成功登出
```json
{
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### 未登入的狀態下請求
```json
{
    "loadType": LoadType.UNAUTHORIZED,
    "data": []
}
```