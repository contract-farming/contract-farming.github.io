# 增加一個 作物品種

增加一個作物品種

PATH: `/api/crop/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `name`: 作物品種名稱 (`VARCHAR(255)`)
* `unit_yield`: 單位面積預估產量 (`INT_UNSIGNED`)
* `unit`: 產量單位 (1: 台斤, 2: 公斤)
* `contract_order_list`: 該作物預設流程順序 (`VARCHAR(255)`)
* `estimated_time`: 每個流程順序的預估時間 (`VARCHAR(255)`)

```js
{
    "name": string,
    "unit_yield": number,
    "unit": number,
    "contract_order_list": string,
    "estimated_time": string
}
```
:::note
    `contract_order_list` 使用 **CLTypes** 數值 (創建契作農地時會讀取該數值進行預設流程創建)，
    `estimated_time` 長度需與 `contract_order_list` 相同  
    兩者中間都由 `,` 間隔。  
:::


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_EXISTED`
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

### 已存在該資料  
待添加的資料已存在資料庫中  
`data[]` 為已存在資料庫的資料  
```json
{
    "loadType": LoadType.DATA_EXISTED,
    "data": [
        {
            "id": 1,
            "name": "高雄145",
            "unit_yield": 30,
            "unit": 2,
            "contract_order_list": "200,100,101,102,202,301,203,103,302,201,303,304,104",
            "estimated_time": "0,0,3,0,15,15,0,15,0,20,10,15,0"
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
