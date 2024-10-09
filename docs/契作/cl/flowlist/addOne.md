# 添加流程清單中的一個內容

添加一個 契作農地 的流程清單中的一個內容  

PATH: `/api/cl/flowlist/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `cl_id`: 契作農地的 id (`INT_UNSIGNED`)
* `contract_order`: 契作流程順序 (只有 cl_type 相同才可重複，ex: 噴藥在同個順序噴了多種藥) (`TINYINT_UNSIGNED`)
* `estimated_time`: 此流程順序的預估時間 (`TINYINT_UNSIGNED`)
* `cl_type`: 契作流程類型 (`CLTypes`)
* `is_completed`: 是否已完成此流程 (Y/N) [`0`, `1`]
* `completion_date`: 完成時間 (`YYYY-MM-DD`)    (`DATE`)

插秧相關 (插秧的 CLTypes 才能成功帶入以下值)
* `recv_name`: 秧苗領取人 (`VARCHAR(32)`)
* `recv_date`: 領苗日期 (`YYYY-MM-DD`)    (`DATE`)
* `count`: 秧苗數量 (`INT_UNSIGNED`)

肥料相關 (肥料的 CLTypes 才能成功帶入以下值)
* `fertilizer_id`: 肥料的 id ，可為 null (`INT_UNSIGNED`)
* `amount`: 肥料的用量 (公斤(KG)) (`INT_UNSIGNED`)

農藥相關 (農藥的 CLTypes 才能成功帶入以下值)
* `pesticide_id`: 農藥的 id ，可為 null (`INT_UNSIGNED`)
* `amount`: 農藥的用量 (毫升(ML)) (`INT_UNSIGNED`)

```js
{
    "contract_order": number,           // 契作流程順序
    "estimated_time": number,           // 契作流程預估時間
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
```


## 回傳格式
[`LoadType`](../../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `FK_NOT_FOUND`
* `QUERY_FAILED`


## 回傳範例
### 成功新增
```json
{
    "loadType": LoadType.SUCCEED,
    "data": []
}
```

### 參數錯誤
```json
{
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```

### 存在該資料
此契作順序已存在, 契作順序不能重複 (cl_type 相同可以重複)  
```json
{
    "loadType": LoadType.DATA_EXISTED,
    "data": []
}
```

### 引用的 外鍵 不存在  
如果引用的 外鍵 不存在於資料庫中則依照缺失的外鍵回傳以下不同類型值  

[MissingFK](../../../types.md#missingfk)  
`FERT_ID`  
`PEST_ID`  

`loadType` 為 `FK_NOT_FOUND`  
`missingFK` 為 缺失的外鍵類型  

```json
{
    "loadType": LoadType.FK_NOT_FOUND,
    "missingFK": MissingFK.FERT_ID,
    "data": [
        {
            "id": 30 
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
