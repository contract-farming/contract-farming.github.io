# 更新一個 契作農民 資料

更新一個契作農民資料

PATH: `/api/farmer/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 契作農民的 uuid (`不可更新`)
* `id`: 待更新的身分證 (`需剛好10個字`)
* `name`: 待更新的農民名稱 (`最大20個字`)
* `phone`: 待更新的農民電話號碼 (家用或手機) (`最大20個字`)
* `address`: 待更新的農民地址 (`最大100個字`)

```js
{
    "uuid": number,
    "id": string,
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
            "uuid": 100,
            "id": "T100424178",
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
