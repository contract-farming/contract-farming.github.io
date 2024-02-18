# 註冊 API

註冊 API  

PATH: `/api/service/user/register`  
Method: `POST`  
LoginRequired: `false`  
AllowPermissions: `[]`  


## 請求格式
* `username`: 使用者帳號 (`最大100個字`)
* `password`: 使用者密碼 (`最大100個字`)
* `email`: 電子郵件 (`最大100個字`)
* `name`: 使用者姓名 (`最大100個字`)
* `telephone`: 家用電話 (可留空) (`最大50個字`)
* `cellphone`: 手機號碼 (可留空) (`最大50個字`)
* `address`: 地址 (可留空) (`最大100個字`)

空值需用 `'EMPTY_DATA'`  

```js
{
    "username": string,
    "password": string,
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
* 400
* 500

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DISABLE`
* `ACCOUNT_EXISTS`
* `QUERY_FAILED`


## 回傳範例
### 成功回傳
```json
{
    "status": 200,
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### 參數錯誤
```json
{
    "status": 400,
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 註冊 API 已被禁用
```json
{
    "status": 200,
    "loadType": LoadType.DISABLE,
    "data": []
}
```

### username 已被使用, 換其他 username 註冊
```json
{
    "status": 200,
    "loadType": LoadType.ACCOUNT_EXISTS,
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
