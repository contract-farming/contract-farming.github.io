# 獲取 作物品種 所有內容

獲取作物品種所有內容

PATH: `/api/crop/getAll`  
Method: `GET`


### 回傳格式

回傳 data 為陣列內含所有 作物品種 資料  

* `name`: 作物品種名稱
* `unit_yield`: 單位面積預估產量
* `unit`: 產量單位 (1: 台斤, 2: 公斤)

[`StatusCode`](../types.md#statuscode)  
[`LoadType`](../types.md#loadtype)  

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "uuid": number,
            "name": string,
            "unit_yield": number,
            "unit": number
        }
    ]
}
```

### 回傳範例
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "uuid": 1,
            "name": "高雄145",
            "unit_yield": 30,
            "unit": 1
        }
    ]
}
```