---
sidebar_position: 2
---


# 登入

登入  
未驗證註冊使用者無法登入  

PATH: `/api/login`  
Method: `POST`  
LoginRequired: `false`  
AllowPermissions: `[]`  


### 請求格式
* `username`: 帳號 (`最大100個字`)
* `password`: 密碼 (`最大100個字`)

```js
{
    "username": string,
    "password": string
}
```


### 回傳格式

回傳 data 為陣列內含登入成功的 sessionId  

[`StatusCode`](../types.md#statuscode)  
* 200
* 400
* 401

[`LoadType`](../types.md#loadtype)  
* `"PARAMETER_ERROR"`
* `"TYPE_SESSION"` [`"AuthDetails"`](../types.md#authdetails)

[`AuthDetails`](../types.md#authdetails)  
* `"SUCCEED_LOGIN"`
* `"FAILED_LOGIN"`
* `"SESSION_EXISTS"`
* `"BLOCKED_LOGIN"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "authDetails": AuthDetails,
    "data": [
        {
            "sessionId": "string"
        }
    ]
}
```


### 回傳範例
成功新增
```json
{
    "status": 200,
    "loadType": "VERIFY_SESSION",
    "authDetails": "SUCCEED_LOGIN",
    "data": [
        {
            "sessionId": "d88cb8d7fd367b7ddd66d00990c4f068f67f30b3fee3bcd7c07867a78b41e0ec"
        }
    ]
}
```

參數錯誤
```json
{
    "status": 400,
    "loadType": "PARAMETER_ERROR",
    "data": []
}
```

帳號或密碼錯誤
```json
{
    "status": 401,
    "loadType": "VERIFY_SESSION",
    "authDetails": "LOGIN_FAILED",
    "data": []
}
```

請求時代入的 sessionId 已存在  
(可能是已登入後又請求 `/login` 頁面之類的)
```json
{
    "status": 200,
    "loadType": "VERIFY_SESSION",
    "authDetails": "SESSION_EXISTS",
    "data": [
        {
            "sessionId": "3151828716ac1b548564df436fedddaa153bafa8927292647d0fe345dbaf0e85"
        }
    ]
}
```

嘗試登入時帳號或密碼錯誤太多次  
鎖定一段時間 (時間由後端設定)
```json
{
    "status": 401,
    "loadType": "VERIFY_SESSION",
    "authDetails": "BLOCKED_LOGIN",
    "data": []
}
```