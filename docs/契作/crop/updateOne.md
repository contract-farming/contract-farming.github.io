# 更新一個 作物品種 資料

更新一個作物品種資料

PATH: `/api/crop/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 作物品種的 id (`不可更新`) (`INT_UNSIGNED`)
* `name`: 作物品種名稱 (`VARCHAR(255)`)
* `unit_yield`: 單位面積預估產量 (`INT_UNSIGNED`)
* `unit`: 產量單位 (1: 台斤, 2: 公斤)
* `contract_order_list`: 該作物預設流程順序 (`VARCHAR(255)`)
* `estimated_time_list`: 每個流程順序的預估時間 (`VARCHAR(255)`)

:::note
`contract_order_list` 使用 **CLTypes** 數值 (創建契作農地時會讀取該數值進行預設流程創建)，
`estimated_time_list` 長度需與 `contract_order_list` 相同  
兩者中間都由 `,` 間隔。  
:::

```js
{
    "id": number,
    "name": string,
    "unit_yield": number,
    "unit": number,
    "contract_order_list": string,
    "estimated_time_list": string
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
* `DATA_EXISTED`
* `QUERY_FAILED`


## 回傳範例
### 成功更新
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

### 不存在該資料
```json
{
    "loadType": LoadType.DATA_NOT_FOUND,
    "data": []
}
```

### 在資料庫中已存在與待更新資料相同的資料  
`data[]` 為資料庫中相同的資料
```json
{
    "loadType": LoadType.DATA_EXISTED,
    "data": [
        {
            "id": 22,
            "name": "高雄147",
            "unit_yield": 50,
            "unit": 2,
            "contract_order_list": "200,100,101,102,202,301,203,103,302,201,303,304,104",
            "estimated_time_list": "0,0,3,0,15,15,0,15,0,20,10,15,0"
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
