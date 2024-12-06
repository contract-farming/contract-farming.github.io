# 獲取其中一個 契作合約 下的所有契作農地

獲取其中一個 契作合約 下的所有契作農地

PATH: `/api/contract/query/getAllCl`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 契作合約的 id

```js
{
    "id": number
}
```


## 回傳格式

回傳 data 為陣列內含該 契作合約 下的所有 契作農地 資料  

* `land`: 引用農地的 資料
* `crop`: 引用作物品種的 資料
* `actual_yield`: 實際產量 (使用 string 紀錄)
* `actual_yield_unit`: 實際產量單位 (1: 台斤, 2: 公斤, 3: 分)

:::note
getAllCl 會把有引用外鍵(id)的部分，一併把外鍵資料抽取出來合併到回傳的資料中  
但無法直接對外鍵中的資料進行直接操作修改，只能使用外鍵的 id 進行
:::

[`LoadType`](../../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
* `FK_NOT_FOUND`
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
            "id": number,
            "actual_yield": string,
            "actual_yield_unit": number,
            "crop": {
                "id": number,
                "name": string,
                "unit_yield": number,
                "unit": number,
                "contract_order_list": string,  // "CLTypes,CLTypes, ..."
                "estimated_time": string        // "number,number, ..."
            },
            "land": {
                "id": number,
                "no": string,
                "city": string,
                "town": string,
                "section": string,
                "subsection": string | null,
                "owner_name": string,
                "owner_id": string,
                "area": number,
                "area_right": number | null,
                "area_arable": number | null,
                "type": number,
                "is_contracting": number
            }
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
            "id": 2,
            "actual_yield": "1004.32",
            "actual_yield_unit": 2,
            "crop": {
                "id": 15,
                "name": "台南11",
                "unit_yield": 400,
                "unit": 2,
                "contract_order_list": "200,100,101,102,202,301,203,103,302,201,303,304,104",
                "estimated_time": "0,0,3,0,15,15,0,15,0,20,10,15,0"
            },
            "land": {
                "id": 24,
                "no": "19620006",
                "city": "屏東縣",
                "town": "新園",
                "section": "新吉",
                "subsection": null,
                "owner_name": "李鳳雲",
                "owner_id": "T221484747",
                "area": 0.25,
                "area_right": 0.25,
                "area_arable": null,
                "type": 1,
                "is_contracting": 0
            }
        },
        { ... }
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

### 該契作合約底下無契作農地
```json
{
    "loadType": LoadType.DATA_NOT_FOUND,
    "data": []
}
```

### 該契作合約不存在
回傳不存在的 contract id  
```json
{
    "loadType": LoadType.FK_NOT_FOUND,
    "missingFK": MissingFK.CONTRACT_ID,
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
