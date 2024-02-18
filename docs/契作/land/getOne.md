# 獲取其中一個 農地 內容

獲取其中一個農地內容

PATH: `/api/land/getOne`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 農地的 uuid

```js
{
    "uuid": number
}
```


## 回傳格式

回傳 data 為陣列內含指定的 農地 資料  

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
* `SUCCEED`
* `QUERY_FAILED`


## 回傳範例
### 成功回傳
格式
```js
{
    "status": StatusCode,
    "loadType": LoadType.SUCCEED,
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
範例
```json
{
    "status": 200,
    "loadType": LoadType.SUCCEED,
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
        }
    ]
}
```

### 參數錯誤
```json
{
    "status": 400,
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 不存在該資料
```json
{
    "status": 200,
    "loadType": LoadType.DATA_NOT_FOUND,
    "data": []
}
```

### Server 錯誤  
```json
{
    "status": 500,
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
