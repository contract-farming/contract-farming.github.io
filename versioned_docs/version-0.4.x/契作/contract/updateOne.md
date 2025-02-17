# 更新一個 契作合約 資料

更新一個契作合約資料

PATH: `/api/contract/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
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
`data[]` 為不存在的 farmer uuid
```json
{
    "loadType": LoadType.FK_NOT_FOUND,
    "missingFK": MissingFK.FARMER_UUID,
    "data": [{ "uuid": 1000 }]
}
```

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
