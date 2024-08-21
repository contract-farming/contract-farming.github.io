# 獲取其中一個 農藥種類 內容

獲取其中一個農藥種類內容

PATH: `/api/pest/getOne`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `id`: 農藥種類的 id

```js
{
    "id": number
}
```


## 回傳格式

回傳 data 為陣列內含指定的 農藥種類 資料  

* `name`: 農藥種類名稱

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_NOT_FOUND`
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
            "target_pest": string,
            "common_name": string,
            "product_name": string,
            "specification": number,
            "specification_unit": number,
            "dosage_pre_hectare": string,
            "safe_limit": number,
            "japan_limit": number,
            "safe_harvest_period": number,
            "dilution_ratio": number,
            "manufacturer": string
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
            "target_pest": "稻熱病",
            "common_name": "芬諾尼",
            "product_name": "稻輝(20%水懸劑)",
            "specification": 250,
            "specification_unit": 1,
            "dosage_pre_hectare": "0.67公升",
            "safe_limit": 1,
            "japan_limit": 1,
            "safe_harvest_period": 21,
            "dilution_ratio": 1500,
            "manufacturer": "詣榮"
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

### 不存在該資料
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
