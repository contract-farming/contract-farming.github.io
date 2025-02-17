# 增加一個 契作合約

增加一個契作合約  
在合約下創建多個契作農地  

PATH: `/api/contract/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `year`: 年度                     (`SMALLINT_UNSIGNED`)
* `no`: 期號 一年有三期             [`1`, `2`, `3`]
* `farmer_id`: 引用契作農民的 id    (`INT_UNSIGNED`)
* `is_closed`: 是否結案 (Y/N)       [`0`, `1`]

```js
{
    "year": number;
    "no": number;       // [`1`, `2`, `3`]
    "farmer_id": number;
    "finish": number;   // [0, 1]   (Y/N)
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"FK_NOT_FOUND"` [`"CLMissingType"`](../../types.md#clmissingtype)
* `"QUERY_FAILED"`


## 回傳範例
### 成功新增
```json
{
    "loadType": "SUCCEED",
    "data": []
}
```

### 參數錯誤
```json
{
    "loadType": "PARAMETER_ERROR",
    "data": []
}
```

### 引用的 farmer 不存在  
如果引用的 farmer 不存在於資料庫中則回傳 `FK_NOT_FOUND`  
`data[]` 為不存在的 farmer id
```json
{
    "loadType": LoadType.FK_NOT_FOUND,
    "missingFK": MissingFK.FARMER_ID,
    "data": [
        {
            "id": 1000,
        }
    ]
}
```

### 已存在該資料  
**不檢查是否重複新增該資料，因為農民可能會開很多張同樣的合約**
(不確定是否需檢查重複合約)  

### Server 錯誤  
```json
{
    "loadType": "QUERY_FAILED",
    "data": []
}
```
