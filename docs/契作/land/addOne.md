# 增加一塊農地

增加一塊農地

PATH: `/api/land/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `no`: 地號        (`最大長度20`)
* `lot`: 地段       (`最大長度10`)
* `class`: 地目                 [`"田"`, `"旱"`, `null`]
* `owner_name`: 所有權人_姓名   (`最大長度10`)
* `owner_id`: 所有權人_身分證   (`身分證為10碼字串`)
* `area`: 本筆面積              (`小數點後六位`)
* `area_right`: 權利面積        (`小數點後六位或 null`)
* `area_arable`: 可耕面積       (`小數點後六位或 null`)
* `type`: 地段類型              [`1`, `2`, `3`]
* `contracting`: 契作中(Y/N)    [`0`, `1`]

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

回傳 data 為陣列內含成功新增的 農地 資料  

[`StatusCode`](../../types.md#statuscode)  
* 200
* 400
* 500

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_EXISTED"`
* `"QUERY_FAILED"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            uuid: number;
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
成功新增
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
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

參數錯誤
```json
{
    "status": 400,
    "loadType": "PARAMETER_ERROR",
    "data": []
}
```

已存在該資料  
待添加的資料已存在資料庫中  
`data[]` 為已存在資料庫的資料
```json
{
    "status": 200,
    "loadType": "DATA_EXISTED",
    "data": [
        {
            "uuid": 226,
            "no": "01080000",
            "lot": "新園仙隆",
            "class": "田",
            "owner_name": "林月秋",
            "owner_id": "T221962219",
            "area": 0.239987,
            "area_right": 0.239987,
            "area_arable": 0.239987,
            "type": 1,
            "contracting": 0
        }
    ]
}
```

Server 錯誤  
```json
{
    "status": 500,
    "loadType": "QUERY_FAILED",
    "data": []
}
```
