# 獲取 農藥種類 所有內容

獲取農藥種類所有內容

PATH: `/api/pest/getAll`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含所有 農藥種類 資料  

* `target_pest`: 防治對象 (`VARCHAR(255)`)
* `common_name`: 普通名稱 (`VARCHAR(255)`)
* `product_name`: 商品名稱 (`VARCHAR(255)`)
* `specification`: 規格 (`INT_UNSIGNED`)
* `specification_unit`: 規格單位  (1: 毫升 (cc), 2: 公克 (g))
* `dosage_per_hectare`: 每公頃建議用量 (`VARCHAR(255)`)
* `safe_limit`: 安全容許量 (ppm) (`FLOAT`)
* `japan_limit`: 日本容許量 (ppm) (`FLOAT`)
* `safe_harvest_period`: 安全採收期 (天) (`SMALLINT_UNSIGNED`)
* `dilution_ratio`: 稀釋倍數 (`INT_UNSIGNED`)
* `manufacturer`: 廠商 (`VARCHAR(255)`)

[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `QUERY_FAILED`


## 回傳範例
### 成功回傳
格式
```js
{
    "loadType": LoadType,
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
