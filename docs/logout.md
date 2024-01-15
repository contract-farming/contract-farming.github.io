# 登出

登出

PATH: `/api/logout`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
無請求參數  


### 回傳格式
需在登入的狀態下才有用 (cookie 中有 sessionId)  

[`StatusCode`](./types.md#statuscode)  
* 200
* 401

[`LoadType`](./types.md#loadtype)  
* `"PARAMETER_ERROR"`
* `"VERIFY_SESSION"`

[`AuthDetails`](./types.md#authdetails)  
* `"SUCCEED_LOGOUT"`
* `"UNAUTHORIZED"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "authDetails": AuthDetails,
    "data": []
}
```


### 回傳範例
成功登出
```json
{
    "status": 200,
    "loadType": "VERIFY_SESSION",
    "authDetails": "SUCCEED_LOGOUT",
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