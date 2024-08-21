# 獲取 作物品種 所有內容

獲取作物品種所有內容

PATH: `/api/crop/getAll`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含所有 作物品種 資料  

* `name`: 作物品種名稱 (`VARCHAR(255)`)
* `unit_yield`: 單位面積預估產量 (`INT_UNSIGNED`)
* `unit`: 產量單位 (1: 台斤, 2: 公斤)
* `contract_order_list`: 該作物預設流程順序 (`VARCHAR(255)`)
* `estimated_time`: 每個流程順序的預估時間 (`VARCHAR(255)`)

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
            "name": string,
            "unit_yield": number,
            "unit": number,
            "contract_order_list": string,  // "CLTypes,CLTypes, ..."
            "estimated_time": string        // "number,number, ..."
        },
        { ... }
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
            "name": "台南11",
            "unit_yield": 400,
            "unit": 2,
            "contract_order_list": "200,100,101,102,202,301,203,103,302,201,303,304,104",
            "estimated_time": "0,0,3,0,15,15,0,15,0,20,10,15,0"
        },
        { ... }
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
