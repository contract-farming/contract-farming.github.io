# 更新一個 契作合約 資料

更新一個契作合約資料

PATH: `/api/contract/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 契作合約的 id (`不可更新`)
* `year`: 年度                     (`SMALLINT_UNSIGNED`)
* `no`: 期號 一年有三期             [`1`, `2`, `3`]
* `farmer_id`: 引用契作農民的 id    (`INT_UNSIGNED`)
* `is_closed`: 是否結案 (Y/N)       [`0`, `1`]

```js
{
    "id": number,
    "year": number;         // [`0-65535`]
    "no": number;           // [`1`, `2`, `3`]
    "farmer_id": number;    // farmer id
    "is_closed": number;    // [0, 1]   (Y/N)
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
* `FK_NOT_FOUND`
* `QUERY_FAILED`


## 回傳範例
### 成功更新  
```json
{
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### 參數錯誤
```json
{
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 不存在該資料
```json
{
    "loadType": LoadType.DATA_NOT_FOUND,
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
            "id": 1000 
        }
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
