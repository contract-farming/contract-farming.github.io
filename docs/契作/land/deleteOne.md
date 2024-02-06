# 刪除其中一塊農地

刪除其中一塊農地

PATH: `/api/land/deleteOne`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `name`: 待刪除的 農地 uuid

```js
{
    "uuid": number
}
```


### 回傳格式

回傳 data 為陣列內含成功刪除的 農地 資料  

[`StatusCode`](../../types.md#statuscode)  
* 200
* 400

[`LoadType`](../../types.md#loadtype)  
* `"SUCCEED"`
* `"PARAMETER_ERROR"`
* `"DATA_NOT_FOUND"`

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
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
成功刪除  
`data[]` 為成功刪除的資料
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

未找到該資料
```json
{
    "status": 200,
    "loadType": "DATA_NOT_FOUND",
    "data": []
}
```