# 增加一個 契作農民

增加一個契作農民

PATH: `/api/farmer/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `identity_number`: 身分證 (`需剛好10個字`) (`VARCHAR(10)`)
* `name`: 農民名稱 (`VARCHAR(32)`)
* `phone`: 農民電話號碼 (家用或手機) (`VARCHAR(32)`)
* `address`: 農民地址 (`VARCHAR(255)`)

```js
{
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
* `DATA_EXISTED`
* `QUERY_FAILED`


## 回傳範例
### 成功新增
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

### 已存在該資料  
待添加的資料已存在資料庫中  
`data[]` 為已存在資料庫的資料
```json
{
    "loadType": LoadType.DATA_EXISTED,
    "data": [
        {
            "id": 206,
            "identity_number": "A123457896",
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
