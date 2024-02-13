# 註冊 API

註冊 API  

PATH: `/api/service/user/register`  
Method: `POST`  
LoginRequired: `false`  
AllowPermissions: `[]`  


### 請求格式
* `username`: 使用者帳號
* `password`: 使用者密碼
* `email`: 電子郵件
* `name`: 使用者姓名
* `telephone`: 家用電話 (可留空)
* `cellphone`: 手機號碼 (可留空)
* `address`: 地址 (可留空)

空值需用 `'EMPTY_DATA'`  


### 回傳格式
[`StatusCode`](../../types.md#statuscode)  
* 200
* 400
* 500

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"TYPE_ACCOUNT"` [`"AccDetails"`](../../types.md#accdetails)
* `"QUERY_FAILED"`

[`"AccDetails"`](../../types.md#accdetails)
* `"DISABLE"`
* `"ACCOUNT_EXISTS"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "accDetails"?: AccDetails,
    "data": [
        {
            status: 200,
            loadType: 'SUCCEED',
            data: []
        }
    ]
}
```


### 回傳範例
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": []
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

註冊 API 已被禁用
```json
{
    "status": 200,
    "loadType": "TYPE_ACCOUNT",
    "accDetails": "DISABLE",
    "data": []
}
```

username 已被使用, 換其他 username 註冊
```json
{
    "status": 200,
    "loadType": "TYPE_ACCOUNT",
    "accDetails": "ACCOUNT_EXISTS",
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
