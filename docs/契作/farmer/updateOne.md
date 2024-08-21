# 更新一個 契作農民 資料

更新一個契作農民資料

PATH: `/api/farmer/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 契作農民的 id (`不可更新`) (`INT_UNSIGNED`)
* `identity_number`: 身分證 (`需剛好10個字`) (`VARCHAR(10)`)
* `name`: 農民名稱 (`VARCHAR(32)`)
* `phone`: 農民電話號碼 (家用或手機) (`VARCHAR(32)`)
* `address`: 農民地址 (`VARCHAR(255)`)

```js
{
    "id": number,
    "identity_number": string,
    "name": string,
    "phone": string,
    "address": string,
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
* `DATA_EXISTED`
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

### 在資料庫中已存在與待更新資料相同的資料  
`data[]` 為資料庫中相同的資料
```json
{
    "loadType": LoadType.DATA_EXISTED,
    "data": [
        {
            "id": 100,
            "identity_number": "T100424178",
            "name": "莊O城",
            "phone": "07-1234567",
            "address": "大樹區學城路一段1號"
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
