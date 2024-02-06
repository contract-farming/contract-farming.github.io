# 刪除其中一塊契作農地

刪除其中一塊契作農地

PATH: `/api/cl/deleteOne`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `name`: 待刪除的 契作農地 uuid

```js
{
    "uuid": number
}
```


### 回傳格式

回傳 data 為陣列內含成功刪除的 契作農地 資料  

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
            "uuid": 3,
            "contract": 5,
            "land": 100,
            "prepare_confirm": 0,
            "prepare_date": "2023-09-08",
            "plant_confirm": 0,
            "plant_recv_date": "2023-09-08",
            "plant_date": "2023-09-08",
            "plant_count": 10,
            "plant_name": "莊O城",
            "weed_confirm": 0,
            "weed_date": "2023-09-08",
            "weed_pest": 3,
            "weed_amount": 10,
            "bask_confirm": 0,
            "bask_date": "2023-09-08",
            "pre_fert_confirm": 0,
            "pre_fert_date": "2023-09-08",
            "pre_fert": 21,
            "pre_fert_amount": 10,
            "post_fert_confirm": 0,
            "post_fert_date": "2023-09-08",
            "post_fert": 21,
            "post_fert_amount": 10,
            "spray_confirm": 0,
            "spray_date": "2023-09-08",
            "spray_pest": 3,
            "spray_amount": 10,
            "harvest_confirm": 0,
            "harvest_date": "2023-09-08",
            "crop": 41
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