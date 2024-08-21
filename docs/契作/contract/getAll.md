# 獲取 契作合約 所有內容

獲取契作合約所有內容

PATH: `/api/contract/getAll`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含所有 契作合約 資料  

* `year`: 年度                     (`SMALLINT_UNSIGNED`)
* `no`: 期號 一年有三期             [`1`, `2`, `3`]
* `farmer_id`: 引用契作農民的 id    (`INT_UNSIGNED`)
* `is_closed`: 是否結案 (Y/N)       [`0`, `1`]
* `clCount`: 此合約的契作農地數量

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `QUERY_FAILED`



## 回傳範例
### 成功獲取
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": number,
            "year": number,
            "no": number,
            "farmer": {
                "id": number,
                "identity_number": string,
                "name": string,
                "phone": PhoneNumber,
                "address": string
            },
            "is_closed": number,
            "clCount": number
        },
        { ... }
    ]
}
```
範例  
```json
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": 2,
            "year": 2023,
            "no": 3,
            "farmer": {
                "id": 35,
                "identity_number": "A123456789",
                "name": "方O洋",
                "phone": "07-1234567",
                "address": "大樹區學城路一段1號"
            },
            "is_closed": 0,
            "clCount": 25
        },
        { ... }
    ]
}
```

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
