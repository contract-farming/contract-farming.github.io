---
sidebar_position: 3
---


# 登出

登出

PATH: `/api/service/logout`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
無請求參數  


### 回傳格式
需在登入的狀態下才有用 (cookie 中有 sessionId)  

[`StatusCode`](../types.md#statuscode)  
* 200
* 401

[`LoadType`](../types.md#loadtype)  
* `"SUCCEED"`

```js
{
    "status": StatusCode,
    "loadType": LoadType
    "data": []
}
```


### 回傳範例
成功登出
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": []
}
```

未登入的狀態下請求
```json
{
    "status": 401,
    "loadType": "UNAUTHORIZED",
    "data": []
}
```