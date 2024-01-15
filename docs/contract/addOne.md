# 增加一個 契作合約

增加一個契作合約

PATH: `/api/contract/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `year`: 年度                     [`0-65535`]
* `no`: 期號 一年有三期             [`1`, `2`, `3`]
* `farmer`: 引用契作農民的 uuid
* `finish`: 是否結案 (Y/N)          [`0`, `1`]

```js
{
    "year": number;     // [`0-65535`]
    "no": number;       // [`1`, `2`, `3`]
    "farmer": number;   // farmer uuid
    "finish": number;   // [0, 1]   (Y/N)
}
```


### 回傳格式

回傳 data 為陣列內含成功新增的 契作合約 資料  

[`StatusCode`](../types.md#statuscode)  
* 200
* 400

[`LoadType`](../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"FK_NOT_FOUND"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "year": number,
            "no": number,
            "farmer": number,
            "finish": number
        }
    ]
}
```


### 回傳範例
成功新增
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "year": 2023,
            "no": 2,
            "farmer": 190,
            "finish": 0
        }
    ]
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

引用的 farmer 不存在  
如果引用的 farmer 不存在於資料庫中則回傳 `FK_NOT_FOUND`  
`data[]` 為不存在的 farmer uuid
```json
{
    "status": 200,
    "loadType": "FK_NOT_FOUND",
    "data": [
        {
            "uuid": 1000,
        }
    ]
}
```

已存在該資料  
**不檢查是否重複新增該資料，因為農民可能會開很多張同樣的合約**
