# 獲取流程清單內容

獲取其中一個 契作農地 的流程清單內容

PATH: `/api/cl/flowlist/getAll`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `id`: 契作農地的 id

```js
{
    "id": number
}
```


### 回傳格式

回傳 data 為陣列內含指定的 流程清單 資料  

* `contract_order`: 契作流程順序 (只有 cl_type 相同才可重複，ex: 噴藥在同個順序噴了多種藥) (`TINYINT_UNSIGNED`)
* `cl_type`: 契作流程類型 (`CLTypes`)
* `is_completed`: 是否已完成此流程 (Y/N) [`0`, `1`]
* `completion_date`: 完成時間 (`YYYY-MM-DD`)    (`DATE`)

插秧相關 (插秧的 CLTypes 才會出現該值)
* `recv_name`: 秧苗領取人 (`VARCHAR(32)`)
* `recv_date`: 領苗日期 (`YYYY-MM-DD`)    (`DATE`)
* `count`: 秧苗數量 (`INT_UNSIGNED`)

肥料相關 (肥料的 CLTypes 才會出現該值)
* `fertilizer_id`: 肥料的 id ，可為 null
* `amount`: 肥料的用量 (公斤(KG))

農藥相關 (農藥的 CLTypes 才會出現該值)
* `pesticide_id`: 農藥的 id ，可為 null
* `amount`: 農藥的用量 (毫升(ML))

[`LoadType`](../../../types.md#loadtype)  
* `PARAMETER_ERROR`
* `SUCCEED`
* `QUERY_FAILED`
* `DATA_NOT_FOUND`


## 回傳範例
### 成功獲取
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "id": number,
            "contract_order": number,           // 契作流程順序
            "cl_type": CLTypes,                 // 契作流程類型
            "is_completed": number,
            "completion_date": string | null,   // YYYY-MM-DD
            
            // 插秧相關
            "recv_name"?: string;
            "recv_date"?: string | null;           // YYYY-MM-DD
            "count"?: number;

            // 肥料相關
            "fertilizer_id"?: number | null;
            "amount"?: number;                     // kg

            // 農藥相關
            "pesticide_id"?: number | null;
            "amount"?: number;                     // ml
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
            "id": 15,
            "contract_order": 0,
            "cl_type": 200,             // CLTypes.FERT_BASE // 基肥
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "fertilizer_id": null,
            "amount": 0                 // kg
        },
        {
            "id": 16,
            "contract_order": 1,
            "cl_type": 100,             // CLTypes.LAND_PREPARATION // 整地
            "is_completed": 0,
            "completion_date": null     // YYYY-MM-DD
        },
        {
            "id": 17,
            "contract_order": 2,
            "cl_type": 101,             // CLTypes.LAND_IRRIGATION // 灌溉
            "is_completed": 0,
            "completion_date": null     // YYYY-MM-DD
        },
        {
            "id": 18,
            "contract_order": 3,
            "cl_type": 102,             // CLTypes.LAND_PLANT // 插秧
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "recv_name": "",
            "recv_date": null,          // YYYY-MM-DD
            "count": 0                  // 秧苗數
        },
        {
            "id": 19,
            "contract_order": 4,
            "cl_type": 202,             // CLTypes.FERT_TOP_ONE // 追肥(一)
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "fertilizer_id": null,
            "amount": 0                 // kg
        },
        {
            "id": 20,
            "contract_order": 5,
            "cl_type": 301,             // CLTypes.PEST_SPRAY_ONE // 噴藥(一)
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "pesticide_id": null,
            "amount": 0                 // ml
        },
        {
            "id": 21,
            "contract_order": 6,
            "cl_type": 203,             // CLTypes.FERT_TOP_TOW // 追肥(二)
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "fertilizer_id": null,
            "amount": 0                 // kg
        },
        {
            "id": 22,
            "contract_order": 7,
            "cl_type": 103,             // CLTypes.LAND_BASK // 曬田
            "is_completed": 0,
            "completion_date": null     // YYYY-MM-DD
        },
        {
            "id": 23,
            "contract_order": 8,
            "cl_type": 302,             // CLTypes.PEST_SPRAY_TWO // 噴藥(二)
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "pesticide_id": null,
            "amount": 0                 // ml
        },
        {
            "id": 24,
            "contract_order": 9,
            "cl_type": 201,             // CLTypes.FERT_SPROUT // 穗肥
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "fertilizer_id": null,
            "amount": 0                 // kg
        },
        {
            "id": 25,
            "contract_order": 10,
            "cl_type": 303,             // CLTypes.PEST_SPRAY_THREE // 噴藥(三)
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "pesticide_id": null,
            "amount": 0                 // ml
        },
        {
            "id": 26,
            "contract_order": 11,
            "cl_type": 304,             // CLTypes.PEST_SPRAY_FOUR // 噴藥(四)
            "is_completed": 0,
            "completion_date": null,    // YYYY-MM-DD
            "pesticide_id": null,
            "amount": 0                 // ml
        },
        {
            "id": 27,
            "contract_order": 12,
            "cl_type": 104,             // CLTypes.LAND_HARVEST // 採收
            "is_completed": 0,
            "completion_date": null     // YYYY-MM-DD
        }
    ]
}
```

參數錯誤
```json
{
    "loadType": "PARAMETER_ERROR",
    "data": []
}
```

不存在該資料
```json
{
    "loadType": "DATA_NOT_FOUND",
    "data": []
}
```

Server 錯誤  
```json
{
    "loadType": "QUERY_FAILED",
    "data": []
}
```
