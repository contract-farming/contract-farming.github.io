# 增加一塊契作農地

增加一塊契作農地  
會讀取 Crop.contract_order_list 創建預設流程清單  

PATH: `/api/cl/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `contract_id`: 引用契作合約的 id    (`INT_UNSIGNED`)
* `land_id`: 引用農地的 id            (`INT_UNSIGNED`)
* `crop_id`: 引用作物品種的 id        (`INT_UNSIGNED`)

```js
{
    "contract_id": number;
    "land_id": number;
    "crop_id": number;
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
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

### 引用的 外鍵 不存在  
如果引用的 外鍵 不存在於資料庫中則依照缺失的外鍵回傳以下不同類型值  

[MissingFK](../../types.md#missingfk)  
`CONTRACT_ID`  
`LAND_ID`  
`CROP_ID`  

`loadType` 為 `FK_NOT_FOUND`  
`missingFK` 為 缺失的外鍵類型  

```json
{
    "loadType": LoadType.FK_NOT_FOUND,
    "missingFK": MissingFK.CROP_ID,
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
