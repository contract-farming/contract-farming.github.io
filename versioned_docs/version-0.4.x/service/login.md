---
sidebar_position: 2
---


# 登入

登入  
未驗證註冊使用者無法登入  

PATH: `/api/service/login`  
Method: `POST`  
LoginRequired: `false`  
AllowPermissions: `[]`  


## 請求格式
* `username`: 帳號 (`最大100個字`)
* `password`: 密碼 (`最大100個字`)

```js
{
    "username": string,
    "password": string
}
```


## 回傳格式

回傳 data 為陣列內含登入成功的 sessionId  

[`LoadType`](../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `FAILED_LOGIN`
* `SESSION_EXISTS`
* `BLOCKED_LOGIN`


## 回傳範例
### 成功新增
```json
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "sessionId": "d88cb8d7fd367b7ddd66d00990c4f068f67f30b3fee3bcd7c07867a78b41e0ec"
        }
    ]
}
```

### 參數錯誤
```json
{
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 帳號或密碼錯誤
```json
{
    "loadType": LoadType.FAILED_LOGIN,
    "data": []
}
```

### 請求時代入的 sessionId 已存在  
(可能是已登入後又請求 `/login` 頁面之類的)
```json
{
    "loadType": LoadType.SESSION_EXISTS,
    "data": [
        {
            "sessionId": "3151828716ac1b548564df436fedddaa153bafa8927292647d0fe345dbaf0e85"
        }
    ]
}
```

### 嘗試登入時帳號或密碼錯誤太多次  
鎖定一段時間 (時間由後端設定)
```json
{
    "loadType": LoadType.BLOCKED_LOGIN,
    "data": []
}
```