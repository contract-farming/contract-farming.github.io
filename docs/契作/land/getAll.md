# 獲取 農地 所有內容

獲取農地所有內容

PATH: `/api/land/getAll`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 回傳格式

回傳 data 為陣列內含所有 農地 資料  

* `no`: 地號
* `lot`: 地段
* `class`: 地目                 [`"田"`, `"旱"`, `null`]
* `owner_name`: 所有權人_姓名
* `owner_id`: 所有權人_身分證
* `area`: 本筆面積              [`number`]
* `area_right`: 權利面積        [`number`, `null`]
* `area_arable`: 可耕面積       [`number`, `null`]
* `type`: 地段類型              [`1`, `2`, `3`]
* `contracting`: 契作中(Y/N)    [`0`, `1`]

:::note
**本筆面積(area)**, **權利面積(area_right)**, **可耕面積(area_arable)**  
皆為小數點後六位的值  
如果看到小於後六位的都是補0被資料庫捨棄掉的  

**權利面積(area_right)**, **可耕面積(area_arable)**, **地目(class)** 有可能是 null  
:::

:::note
**地段類型**
 * 1：產銷履歷：以產銷履歷方式種植的地段
 * 2：新增地段：新增地段，尚無法作產銷履歷
 * 3：一般地段：不能作產銷履歷的地段
:::

[`StatusCode`](../../types.md#statuscode)  
* 200
* 500

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
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
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "uuid": 343,
            "no": "05000000",
            "lot": "潮州劉厝庄",
            "class": "田",
            "owner_name": "劉穎仁",
            "owner_id": "T123958060",
            "area": 0.422734,
            "area_right": 0.140911,
            "area_arable": null,
            "type": 1,
            "contracting": 0
        },
        {
            "uuid": 344,
            "no": "01910000",
            "lot": "新埤南岸",
            "class": null,
            "owner_name": "林方意",
            "owner_id": "T221521905",
            "area": 0.6421,
            "area_right": 0.6421,
            "area_arable": 0.6421,
            "type": 1,
            "contracting": 0
        },
        {
            "uuid": 345,
            "no": "05000000",
            "lot": "潮州劉厝庄",
            "class": "田",
            "owner_name": "劉穎文",
            "owner_id": "T123356888",
            "area": 0.422734,
            "area_right": null,
            "area_arable": null,
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
