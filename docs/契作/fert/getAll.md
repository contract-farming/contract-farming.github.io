# 獲取 肥料種類 所有內容

獲取肥料種類所有內容

PATH: `/api/fert/getAll`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含所有 肥料種類 資料  

* `name`: 肥料種類名稱 (`VARCHAR(255)`)
* `weight`: 肥料重量 (KG) (`SMALLINT_UNSIGNED`)

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
            "weight": number
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
            "id": 1,
            "name": "農友牌台肥43號",
            "weight": 500   // KG
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
