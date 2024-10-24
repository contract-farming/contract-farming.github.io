# 獲取該契作農地的合約內容

使用契作農地 id 獲取該契作農地的合約內容

PATH: `/api/cl/getContractData`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 契作農地的 id

```js
{
    "id": number
}
```


## 回傳格式

回傳 data 為陣列內含該 契作合約 下的所有 契作農地 資料  

* `farmer`: 該契作農地的農民資料
* `crop`: 該契作農地種植的作物品種資料
* `land`: 該契作農地所使用的農地資料
* `actual_yield`: 實際產量 (使用 string 紀錄)
* `actual_yield_unit`: 實際產量單位 (1: 台斤, 2: 公斤, 3: 分)


[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
* `QUERY_FAILED`



## 回傳範例
### 成功獲取
回傳 契作合約 下的所有契作農地  
格式  
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "cl_id": number,
            "contract_id": number,
            "year": number,
            "no": number,
            "actual_yield": string,
            "actual_yield_unit": number,
            "farmer": {
                "id": number,
                "identity_number": string,
                "name": string,
                "phone": string,
                "address": string
            },
            "crop": {
                "id": number,
                "name": string,
                "unit_yield": number,
                "unit": 1 | 2,
                "contract_order_list": string,  // "CLTypes,CLTypes, ..."
                "estimated_time": string        // "number,number, ..."
            },
            "land": {
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
            }
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
            "cl_id": 3,
            "contract_id": 1,
            "year": 2024,
            "no": 1,
            "actual_yield": "1004.32",
            "actual_yield_unit": 2,
            "farmer": {
                "id": 15,
                "identity_number": "A123456789",
                "name": "方O洋",
                "phone": "07-1234567",
                "address": "大樹區學城路一段1號"
            },
            "crop": {
                "id": 1,
                "name": "台南11",
                "unit_yield": 400,
                "unit": 2,
                "contract_order_list": "200,100,101,102,202,301,203,103,302,201,303,304,104",
                "estimated_time": "0,0,3,0,15,15,0,15,0,20,10,15,0"
            },
            "land": {
                "id": 1,
                "no": "19620006",
                "lot": "新園新吉",
                "owner_name": "李O雲",
                "owner_id": "T125896357",
                "area": "0.250000",
                "area_right": "0.250000",
                "area_arable": null,
                "type": 1,
                "is_contracting": 0
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

### 該契作農地不存在 或 不存在該契作合約
```json
{
    "loadType": LoadType.DATA_NOT_FOUND,
    "data": []
}
```

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
