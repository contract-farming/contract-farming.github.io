# 獲取 農藥種類 所有內容

獲取農藥種類所有內容

PATH: `/api/pest/getAll`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 回傳格式

回傳 data 為陣列內含所有 農藥種類 資料  

* `name`: 農藥種類名稱

[`StatusCode`](../types.md#statuscode)  
[`LoadType`](../types.md#loadtype)  

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "uuid": number,
            "name": string
        }
    ]
}
```


### 回傳範例
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "uuid": 1,
            "name": "農藥一號"
        }
    ]
}
```