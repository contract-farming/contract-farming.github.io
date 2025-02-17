# 更新一塊農地

更新一塊農地

PATH: `/api/land/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 農地的 id (`不可更新`) (`INT_UNSIGNED`)
* `no`: 地號 (`VARCHAR(20)`)
* `city`: 待更新的縣市       (`最大10個字`)
* `town`: 待更新的區域       (`最大10個字`)
* `section`: 待更新的路段       (`最大10個字`)
* `subsection`: 待更新的小段       (`最大10個字或 null`)
* `owner_name`: 所有權人_姓名   (`VARCHAR(20)`)
* `owner_id`: 所有權人_身分證   (`需剛好10個字`) (`VARCHAR(10)`)
* `area`: 本筆面積              (`小數點後六位`) (`DECIMAL(7, 6)`)
* `area_right`: 權利面積        (`小數點後六位或 null`) (`DECIMAL(7, 6)`)
* `area_arable`: 可耕面積       (`小數點後六位或 null`) (`DECIMAL(7, 6)`)
* `type`: 地段類型              [`1`, `2`, `3`]
* `is_contracting`: 契作中(Y/N)    [`0`, `1`]

:::note
**地段類型**
* 1：產銷履歷：以產銷履歷方式種植的地段
* 2：新增地段：新增地段，尚無法作產銷履歷
* 3：一般地段：不能作產銷履歷的地段
:::
:::note
`本筆面積`, `權利面積`, `可耕面積` 使用 number 格式請求，  
獲取資料時會回傳 string 格式，前端需手動轉成 number  
(因為 DECIMAL() 格式後面會自動補 0 的問題)
:::

```js
{
    "no": string;
    "city": string;
    "town": string;
    "section": string;
    "subsection": string | null;
    "owner_name": string;
    "owner_id": string;
    "area": number;
    "area_right": number | null;
    "area_arable": number | null;
    "type": number;           // [1, 2, 3]
    "is_contracting": number;    // [0, 1]   (Y/N)
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
            "id": 25,
            "no": "19620006",
            "city": "屏東縣",
            "town": "新園",
            "section": "新吉",
            "subsection": null,
            "owner_name": "李O雲",
            "owner_id": "T125896357",
            "area": "0.250000",
            "area_right": "0.250000",
            "area_arable": null,
            "type": 1,
            "is_contracting": 0
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
