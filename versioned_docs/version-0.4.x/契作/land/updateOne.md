# 更新一塊農地

更新一塊農地

PATH: `/api/land/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 農地的 id (`不可更新`)
* `no`: 待更新的地號        (`最大長度20`)
* `owner_name`: 待更新的所有權人_姓名   (`最大長度10`)
* `owner_id`: 待更新的所有權人_身分證   (`身分證為10碼字串`)
* `area`: 待更新的本筆面積              (`小數點後六位`)
* `area_right`: 待更新的權利面積        (`小數點後六位或 null`)
* `area_arable`: 待更新的可耕面積       (`小數點後六位或 null`)
* `type`: 待更新的地段類型              [`1`, `2`, `3`]
* `contracting`: 待更新的契作中(Y/N)    [`0`, `1`]

:::note
**地段類型**
 * 1：產銷履歷：以產銷履歷方式種植的地段
 * 2：新增地段：新增地段，尚無法作產銷履歷
 * 3：一般地段：不能作產銷履歷的地段
:::

:::note
`class`, `area_right`, `area_arable` 可以為空值
如果參數要表示空值則需使用 [**空值佔位符** (`'EMPTY_DATA'`)](../../types.md#requestparameterformat) 來表示 null
:::

```js
{
    "id": number,
    "no": string;
    "owner_name": string;
    "owner_id": string;
    "area": number;
    "area_right": number | null;
    "area_arable": number | null;
    "type": number;           // [1, 2, 3]
    "contracting": number;    // [0, 1]   (Y/N)
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
            "id": 448,
            "no": "18320000",
            "owner_name": "楊順欽",
            "owner_id": "E102863920",
            "area": 0.219,
            "area_right": 0.1095,
            "area_arable": 0.1095,
            "type": 1,
            "contracting": 0
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
