# 更新一個 契作合約 資料

更新一個契作合約資料

PATH: `/api/contract/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `uuid`: 契作合約的 uuid (`不可更新`)
* `year`: 年度                     [`0-65535`]
* `no`: 期號 一年有三期             [`1`, `2`, `3`]
* `farmer`: 引用契作農民的 uuid
* `finish`: 是否結案 (Y/N)          [`0`, `1`]

```js
{
    "uuid": number,
    "year": number;     // [`0-65535`]
    "no": number;       // [`1`, `2`, `3`]
    "farmer": number;   // farmer uuid
    "finish": number;   // [0, 1]   (Y/N)
}
```


### 回傳格式

回傳 data 為陣列內含成功更新的 契作合約 資料  

[`StatusCode`](../../types.md#statuscode)  
* 200
* 400

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_NOT_FOUND"`
* `"FK_NOT_FOUND"`
* `"SAME_DATA"`

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
成功更新  
`data[]` 為成功更新後的資料  
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "uuid": 3,
            "year": 2020,
            "no": 2,
            "farmer": 190,
            "finish": 1
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

不存在該資料
```json
{
    "status": 200,
    "loadType": "DATA_NOT_FOUND",
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

待更新的資料與舊有的資料相同  
`data[]` 為舊有的資料
```json
{
    "status": 200,
    "loadType": "SAME_DATA",
    "data": [
        {
            "uuid": 4,
            "year": 2020,
            "no": 2,
            "farmer": 190,
            "finish": 1
        }
    ]
}
```