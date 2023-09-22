# 獲取 契作合約 所有內容

獲取契作合約所有內容

PATH: `/api/contract/getAll`  
Method: `GET`


### 回傳格式

回傳 data 為陣列內含所有 契作合約 資料  

* `year`: 年度                     [`0-65535`]
* `no`: 期號 一年有三期             [`0-255`]
* `farmer`: 引用契作農民的 uuid
* `finish`: 是否結案 (Y/N)          [`0`, `1`]

[`StatusCode`](../types.md#statuscode)  
[`LoadType`](../types.md#loadtype)  

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "uuid": number,
            "year": number,
            "no": number,
            "farmer": number,
            "finish": number
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
            "uuid": 2,
            "year": 2023,
            "no": 3,
            "farmer": 201,
            "finish": 0
        }
    ]
}
```