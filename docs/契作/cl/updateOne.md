# 更新一塊契作農地

更新一塊契作農地

PATH: `/api/cl/updateOne`  
Method: `PUT`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 契作農地的 uuid (`不可更新`)
* `contract`: 引用契作合約的 uuid   
* `land`: 引用農地的 uuid           
* `crop`: 引用作物品種的 uuid       

整地
* `prepare_confirm`: 待更新的確認           (Y/N) [`0`, `1`]
* `prepare_date`: 待更新的日期              (`YYYY-MM-DD`)

插秧
* `plant_confirm`: 待更新的確認             (Y/N) [`0`, `1`]
* `plant_recv_date`: 待更新的領苗日期       (`YYYY-MM-DD`)
* `plant_date`: 待更新的插秧日期            (`YYYY-MM-DD`)
* `plant_count`: 待更新的秧苗數量           
* `plant_name`: 待更新的秧苗領取人          (`最大長度20`)

除草
* `weed_confirm`: 待更新的確認              (Y/N) [`0`, `1`]
* `weed_date`: 待更新的日期                 (`YYYY-MM-DD`)
* `weed_pest`: 引用農藥種類的 uuid   
* `weed_amount`: 待更新的用量(公升)          (`小數點後六位或 null`)

噴藥
* `spray_confirm`: 待更新的確認             (Y/N) [`0`, `1`]
* `spray_date`: 待更新的日期                (`YYYY-MM-DD`)
* `spray_pest`: 引用農藥種類的 uuid  
* `spray_amount`: 待更新的用量(公升)         (`小數點後六位或 null`)

曬田
* `bask_confirm`: 待更新的確認              (Y/N) [`0`, `1`]
* `bask_date`: 待更新的日期                 (`YYYY-MM-DD`)

穗前肥
* `pre_fert_confirm`: 待更新的確認          (Y/N) [`0`, `1`]
* `pre_fert_date`: 待更新的日期             (`YYYY-MM-DD`)
* `pre_fert`: 引用肥料種類的 uuid    
* `pre_fert_amount`: 待更新的用量(公升)      (`小數點後六位或 null`)

穗後肥
* `post_fert_confirm`: 待更新的確認         (Y/N) [`0`, `1`]
* `post_fert_date`: 待更新的日期            (`YYYY-MM-DD`)
* `post_fert`: 引用肥料種類的 uuid   
* `post_fert_amount`: 待更新的用量(公升)     (`小數點後六位或 null`)

採收
* `harvest_confirm`: 待更新的確認           (Y/N) [`0`, `1`]
* `harvest_date`: 待更新的日期              (`YYYY-MM-DD`)

:::note
除了確認只能為 [`0`, `1`] 以外其他參數可為空值 (`null`)  
如果參數要表示空值則需使用 [**空值佔位符** (`'EMPTY_DATA'`)](../../types.md#requestparameterformat) 來表示 null
:::

```js
{
    "uuid": number,
    "contract": number | 'EMPTY_DATA';          // 引用契作合約的 uuid      (INT)
    "land": number | 'EMPTY_DATA';              // 引用農地的 uuid          (INT)
    "crop": number | 'EMPTY_DATA';              // 引用作物品種的 uuid      (INT)

    // 整地
    "prepare_confirm": number;                  // 確認                     (Y/N) [0, 1]
    "prepare_date": string | 'EMPTY_DATA';      // 日期                     Date (YYYY-MM-DD)

    // 插秧
    "plant_confirm": number;                    // 確認                     (Y/N) [0, 1]
    "plant_recv_date": string | 'EMPTY_DATA';   // 領苗日期                 Date (YYYY-MM-DD)
    "plant_date": string | 'EMPTY_DATA';        // 插秧日期                 Date (YYYY-MM-DD)
    "plant_count": number | 'EMPTY_DATA';       // 秧苗數量                 (INT_UNSIGNED)
    "plant_name": string | 'EMPTY_DATA';        // 秧苗領取人               string(20)

    // 除草
    "weed_confirm": number;                     // 確認                     (Y/N) [0, 1]
    "weed_date": string | 'EMPTY_DATA';         // 日期                     Date (YYYY-MM-DD)
    "weed_pest": number | 'EMPTY_DATA';         // 引用農藥種類的 uuid       (INT)
    "weed_amount": number | 'EMPTY_DATA';       // 用量(公升)               float

    // 噴藥
    "spray_confirm": number;                    // 確認                     (Y/N) [0, 1]
    "spray_date": string | 'EMPTY_DATA';        // 日期                     Date (YYYY-MM-DD)
    "spray_pest": number | 'EMPTY_DATA';        // 引用農藥種類的 uuid       (INT)
    "spray_amount": number | 'EMPTY_DATA';      // 用量(公升)               float

    // 曬田
    "bask_confirm": number;                     // 確認                     (Y/N) [0, 1]
    "bask_date": string | 'EMPTY_DATA';         // 日期                     Date (YYYY-MM-DD)

    // 穗前肥
    "pre_fert_confirm": number;                 // 確認                     (Y/N) [0, 1]
    "pre_fert_date": string | 'EMPTY_DATA';     // 日期                     Date (YYYY-MM-DD)
    "pre_fert": number | 'EMPTY_DATA';          // 引用肥料種類的 uuid       (INT)
    "pre_fert_amount": number | 'EMPTY_DATA';   // 用量(公升)               float

    // 穗後肥
    "post_fert_confirm": number;                // 確認                     (Y/N) [0, 1]
    "post_fert_date": string | 'EMPTY_DATA';    // 日期                     Date (YYYY-MM-DD)
    "post_fert": number | 'EMPTY_DATA';         // 引用肥料種類的 uuid       (INT)
    "post_fert_amount": number | 'EMPTY_DATA';  // 用量(公升)               float

    // 採收
    "harvest_confirm": number;                  // 確認                     (Y/N) [0, 1]
    "harvest_date": string | 'EMPTY_DATA';      // 日期                     Date (YYYY-MM-DD)
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `FK_NOT_FOUND`
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

### 引用的 外鍵 不存在  
如果引用的 外鍵 不存在於資料庫中則依照缺失的外鍵回傳以下不同類型值  

[MissingFK](../../types.md#missingfk)  
`CONTRACT_UUID`  
`LAND_UUID`  
`CROP_UUID`  
`WEED_PEST_UUID`  
`SPRAY_PEST_UUID`  
`PRE_FERT_UUID`  
`POST_FERT_UUID`  

`loadType` 為 `"FK_NOT_FOUND"`  
`missingFK` 為 缺失的外鍵類型  

```json
{
    "loadType": LoadType.FK_NOT_FOUND,
    "missingType": MissingFK.CROP_UUID,
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
