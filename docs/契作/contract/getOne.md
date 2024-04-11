# 獲取其中一個 契作合約 內容

獲取其中一個契作合約內容

PATH: `/api/contract/getOne`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 契作合約的 uuid

```js
{
    "uuid": number
}
```


## 回傳格式

回傳 data 為陣列內含指定的 契作合約 資料  

* `year`: 年度                     [`0-65535`]
* `no`: 期號 一年有三期             [`1`, `2`, `3`]
* `farmer`: 引用契作農民的 資料
* `finish`: 是否結案 (Y/N)          [`0`, `1`]
* `clCount`: 此合約的契作農地數量

[`StatusCode`](../../types.md#statuscode)  
* 200
* 500

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
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
            "year": number,
            "no": number,
            "farmer": {
                "uuid": number,
                "id": string,
                "name": string,
                "phone": PhoneNumber,
                "address": string
            },
            "finish": number,
            "clCount": number
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
            "uuid": 2,
            "year": 2023,
            "no": 3,
            "farmer": {
                "uuid": 35,
                "id": "A123456789",
                "name": "方O洋",
                "phone": "07-1234567",
                "address": "大樹區學城路一段1號"
            },
            "finish": 0,
            "clCount": 25
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
