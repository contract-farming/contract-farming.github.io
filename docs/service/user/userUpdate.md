# 使用者更新個人資料

使用者更新個人資料  
給使用者用的 (使用者編輯個人資料介面)  
用 sessionId 獲取資料  

PATH: `/api/service/user/userUpdate`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `email`: 電子郵件
* `name`: 使用者姓名
* `telephone`: 家用電話 (可留空)
* `cellphone`: 手機號碼 (可留空)
* `address`: 地址 (可留空)

空值需用 `'EMPTY_DATA'`  


### 回傳格式
[`StatusCode`](../../types.md#statuscode)  
* 200
* 401
* 500

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"QUERY_FAILED"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": []
}
```


### 回傳範例
更新成功
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": []
}
```

sessionId 不存在 (未登入或過期)
```json
{
    "status": 401,
    "loadType": "UNAUTHORIZED",
    "data": []
}
```

Server 錯誤  
```json
{
    "status": 500,
    "loadType": "QUERY_FAILED",
    "data": []
}
```
