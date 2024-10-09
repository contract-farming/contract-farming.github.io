# 獲取其中一個 農地 作物資料

獲取該農地種植作物資料  

PATH: `/api/land/getCropData`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 農地的 id

```js
{
    "id": number
}
```


## 回傳格式

回傳 data 為陣列內含指定的 農地 資料  

* `no`: 地號 (`VARCHAR(20)`)
* `lot`: 地段 (`VARCHAR(20)`)
* `owner_name`: 所有權人_姓名   (`VARCHAR(20)`)
* `owner_id`: 所有權人_身分證   (`需剛好10個字`) (`VARCHAR(10)`)
* `area`: 本筆面積              (`小數點後六位`) (`DECIMAL(7, 6)`)
* `area_right`: 權利面積        (`小數點後六位或 null`) (`DECIMAL(7, 6)`)
* `area_arable`: 可耕面積       (`小數點後六位或 null`) (`DECIMAL(7, 6)`)
* `type`: 地段類型              [`1`, `2`, `3`]
* `is_contracting`: 契作中(Y/N)    [`0`, `1`]
* `crop`: 作物資料 (`is_contracting = 1` 時才會有資料) (`{id, name, unit_yield, unit} 或 null`)

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

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `QUERY_FAILED`


## 回傳範例
### 成功回傳
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": number,
            "no": string;
            "lot": string;
            "owner_name": string;
            "owner_id": string;
            "area": number;
            "area_right": number | null;
            "area_arable": number | null;
            "type": number;                 // [1, 2, 3]
            "is_contracting": number;       // [0, 1]   (Y/N)
            "crop": {
                "id": 9,
                "name": "台南 147",
                "unit_yield": 20,
                "unit": 1
            } | null
        }
    ]
}
```
範例
```json
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": 1,
            "no": "19620006",
            "lot": "新園新吉",
            "owner_name": "李O雲",
            "owner_id": "T125896357",
            "area": "0.250000",
            "area_right": "0.250000",
            "area_arable": null,
            "type": 1,
            "is_contracting": 1,
            "crop": {
                "id": 9,
                "name": "台南 147",
                "unit_yield": 20,
                "unit": 1
            }
        }
    ]
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
`is_contracting = 0` 時作物資料為 `null`  
```json
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": 1,
            "no": "19620006",
            "lot": "新園新吉",
            "owner_name": "李O雲",
            "owner_id": "T125896357",
            "area": "0.250000",
            "area_right": "0.250000",
            "area_arable": null,
            "type": 1,
            "is_contracting": 0,
            "crop": null
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
