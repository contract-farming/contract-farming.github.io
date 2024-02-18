# 使用者更新個人資料

使用者更新個人資料  
給使用者用的 (使用者編輯個人資料介面)  
用 sessionId 獲取資料  

PATH: `/api/service/user/userUpdate`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `email`: 電子郵件 (`最大100個字`)
* `name`: 使用者姓名 (`最大100個字`)
* `telephone`: 家用電話 (可留空) (`最大50個字`)
* `cellphone`: 手機號碼 (可留空) (`最大50個字`)
* `address`: 地址 (可留空) (`最大100個字`)

空值需用 `'EMPTY_DATA'`  

```js
{
    "email": string,
    "name": string,
    "telephone": string | 'EMPTY_DATA',
    "cellphone": string | 'EMPTY_DATA',
    "address": string | 'EMPTY_DATA'
}
```


## 回傳格式
[`StatusCode`](../../types.md#statuscode)  
* 200
* 401
* 500

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `QUERY_FAILED`


## 回傳範例
### 更新成功
```json
{
    "status": 200,
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### sessionId 不存在 
(未登入或過期)  
```json
{
    "status": 401,
    "loadType": LoadType.UNAUTHORIZED,
    "data": []
}
```

### Server 錯誤  
```json
{
    "status": 500,
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
