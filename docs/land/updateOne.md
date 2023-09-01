# 更新一塊農地

更新一塊農地

PATH: `/api/land/updateOne`  
Method: `PUT`


### 請求格式
* `uuid`: 農地的 uuid (`不可更新`)
* `no`: 待更新的地號        (`最大長度20`)
* `lot`: 待更新的地段       (`最大長度10`)
* `class`: 待更新的地目                 [`"田"`, `"旱"`, `null`]
* `owner_name`: 待更新的所有權人_姓名   (`最大長度10`)
* `owner_id`: 待更新的所有權人_身分證   (`身分證為10碼字串`)
* `area`: 待更新的本筆面積              (`小數點後六位`)
* `area_right`: 待更新的權利面積        (`小數點後六位或 null`)
* `area_arable`: 待更新的可耕面積       (`小數點後六位或 null`)
* `type`: 待更新的地段類型              [`1`, `2`, `3`]
* `contracting`: 待更新的契作中(Y/N)    [`0`, `1`]

```js
{
    "no": string;
    "lot": string;
    "class": "田" | "旱" | null;
    "owner_name": string;
    "owner_id": string;
    "area": number;
    "area_right": number | null;
    "area_arable": number | null;
    "type": number;           // [1, 2, 3]
    "contracting": number;    // [0, 1]   (Y/N)
}
```

### 回傳格式

回傳 data 為陣列內含成功更新的 農地 資料  

[`StatusCode`](../types.md#statuscode)  
* 200
* 400

[`LoadType`](../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_NOT_FOUND"`
* `"DATA_CONFLICT"`
* `"SAME_DATA"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            uuid?: number;
            no: string;
            lot: string;
            class: "田" | "旱" | null;
            owner_name: string;
            owner_id: string;
            area: number;
            area_right: number | null;
            area_arable: number | null;
            type: number;           // [1, 2, 3]
            contracting: number;    // [0, 1]   (Y/N)
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
            "uuid": 800,
            "no": "03400002",
            "lot": "東港",
            "class": "田",
            "owner_name": "莊劉",
            "owner_id": "A445684523",
            "area": 0.401871,
            "area_right": 0.100468,
            "area_arable": 0.100468,
            "type": 1,
            "contracting": 0
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

待更新的資料與原有資料庫的其他資料相同  
`data[]` 為資料庫中相同的資料
```json
{
    "status": 200,
    "loadType": "DATA_CONFLICT",
    "data": [
        {
            "uuid": 448,
            "no": "18320000",
            "lot": "新園新吉",
            "class": "田",
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

待更新的資料與舊有的資料相同  
`data[]` 為舊有的資料
```json
{
    "status": 200,
    "loadType": "SAME_DATA",
    "data": [
        {
            "uuid": 801,
            "no": "112233456545",
            "lot": "新園仙隆",
            "class": "田",
            "owner_name": "簡金璋",
            "owner_id": "T123456789",
            "area": 0.335341,
            "area_right": 0.010061,
            "area_arable": 0.244786,
            "type": 1,
            "contracting": 0
        }
    ]
}
```