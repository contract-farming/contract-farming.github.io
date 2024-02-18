# 獲取其中一個 農藥種類 內容

獲取其中一個農藥種類內容

PATH: `/api/pest/getOne`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 農藥種類的 uuid

```js
{
    "uuid": number
}
```


## 回傳格式

回傳 data 為陣列內含指定的 農藥種類 資料  

* `name`: 農藥種類名稱

[`StatusCode`](../../types.md#statuscode)  
* 200
* 500

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
* `QUERY_FAILED`


## 回傳範例
### 成功回傳
格式
```js
{
    "status": StatusCode,
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "uuid": number,
            "name": string
        }
    ]
}
```
範例
```json
{
    "status": 200,
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "uuid": 1,
            "name": "農藥一號"
        }
    ]
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

### 不存在該資料
```json
{
    "status": 200,
    "loadType": LoadType.DATA_NOT_FOUND,
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
