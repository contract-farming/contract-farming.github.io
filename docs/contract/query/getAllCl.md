# 獲取其中一個 契作合約 下的所有契作農地

獲取其中一個 契作合約 下的所有契作農地

PATH: `/api/contract/query/getAllCl`  
Method: `GET`


### 請求格式
* `uuid`: 契作合約的 uuid


### 回傳格式

回傳 data 為陣列內含該 契作合約 下的所有 契作農地 資料  

* `contract`: 引用契作合約的 資料   外鍵(uuid)
* `land`: 引用農地的 資料           外鍵(uuid)
* `crop`: 引用作物品種的 資料       外鍵(uuid)

整地
* `prepare_confirm`: 確認           (Y/N) [`0`, `1`]
* `prepare_date`: 日期              (`YYYY-MM-DD`)

插秧
* `plant_confirm`: 確認             (Y/N) [`0`, `1`]
* `plant_recv_date`: 領苗日期       (`YYYY-MM-DD`)
* `plant_date`: 插秧日期            (`YYYY-MM-DD`)
* `plant_count`: 秧苗數量           
* `plant_name`: 秧苗領取人          (`最大長度20`)

除草
* `weed_confirm`: 確認              (Y/N) [`0`, `1`]
* `weed_date`: 日期                 (`YYYY-MM-DD`)
* `weed_pest`: 引用農藥種類的 資料   外鍵(uuid)
* `weed_amount`: 用量(公升)          (`小數點後六位或 null`)

噴藥
* `spray_confirm`: 確認             (Y/N) [`0`, `1`]
* `spray_date`: 日期                (`YYYY-MM-DD`)
* `spray_pest`: 引用農藥種類的 資料  外鍵(uuid)
* `spray_amount`: 用量(公升)         (`小數點後六位或 null`)

曬田
* `bask_confirm`: 確認              (Y/N) [`0`, `1`]
* `bask_date`: 日期                 (`YYYY-MM-DD`)

穗前肥
* `pre_fert_confirm`: 確認          (Y/N) [`0`, `1`]
* `pre_fert_date`: 日期             (`YYYY-MM-DD`)
* `pre_fert`: 引用肥料種類的 資料    外鍵(uuid)
* `pre_fert_amount`: 用量(公升)      (`小數點後六位或 null`)

穗後肥
* `post_fert_confirm`: 確認         (Y/N) [`0`, `1`]
* `post_fert_date`: 日期            (`YYYY-MM-DD`)
* `post_fert`: 引用肥料種類的 資料   外鍵(uuid)
* `post_fert_amount`: 用量(公升)     (`小數點後六位或 null`)

採收
* `harvest_confirm`: 確認           (Y/N) [`0`, `1`]
* `harvest_date`: 日期              (`YYYY-MM-DD`)

:::note
除了確認只能為 [`0`, `1`] 以外其他參數可為空值 (`null`)  
獲取內容時只會獲得到 null 而非 [**空值佔位符** (`'EMPTY_DATA'`)](../../types.md#requestparameterformat)
:::

:::note
getAll 會把有引用外鍵(uuid)的部分，一併把外鍵資料抽取出來合併到回傳的資料中  
但無法直接對外鍵中的資料進行直接操作修改，只能使用外鍵的 uuid 進行
:::

[`StatusCode`](../../types.md#statuscode)  
[`LoadType`](../../types.md#loadtype)  

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            uuid: number,
            contract: { } | null,               // 引用契作合約的 資料
            land: { } | null,                   // 引用農地的 資料
            crop: { } | null,                   // 引用作物品種的 資料

            // 整地
            prepare_confirm: number,            // 確認                     (Y/N) [0, 1]
            prepare_date: string | null,        // 日期                     Date (YYYY-MM-DD)

            // 插秧
            plant_confirm: number,              // 確認                     (Y/N) [0, 1]
            plant_recv_date: string | null,     // 領苗日期                 Date (YYYY-MM-DD)
            plant_date: string | null,          // 插秧日期                 Date (YYYY-MM-DD)
            plant_count: number | null,         // 秧苗數量                 (INT_UNSIGNED)
            plant_name: string | null,          // 秧苗領取人               string(20)

            // 除草
            weed_confirm: number,               // 確認                     (Y/N) [0, 1]
            weed_date: string | null,           // 日期                     Date (YYYY-MM-DD)
            weed_pest: { } | null,              // 引用農藥種類的 資料
            weed_amount: number | null,         // 用量(公升)               float

            // 噴藥
            spray_confirm: number,              // 確認                     (Y/N) [0, 1]
            spray_date: string | null,          // 日期                     Date (YYYY-MM-DD)
            spray_pest: { } | null,             // 引用農藥種類的 資料
            spray_amount: number | null,        // 用量(公升)               float

            // 曬田
            bask_confirm: number,               // 確認                     (Y/N) [0, 1]
            bask_date: string | null,           // 日期                     Date (YYYY-MM-DD)

            // 穗前肥
            pre_fert_confirm: number,           // 確認                     (Y/N) [0, 1]
            pre_fert_date: string | null,       // 日期                     Date (YYYY-MM-DD)
            pre_fert: { } | null,               // 引用肥料種類的 資料
            pre_fert_amount: number | null,     // 用量(公升)               float

            // 穗後肥
            post_fert_confirm: number,          // 確認                     (Y/N) [0, 1]
            post_fert_date: string | null,      // 日期                     Date (YYYY-MM-DD)
            post_fert: { } | null,              // 引用肥料種類的 資料
            post_fert_amount: number | null,    // 用量(公升)               float

            // 採收
            harvest_confirm: number,            // 確認                     (Y/N) [0, 1]
            harvest_date: string | null         // 日期                     Date (YYYY-MM-DD)
        }
    ]
}
```

### 回傳範例
回傳 契作合約 下的所有契作農地
```json
{
    "status": 200,
    "loadType": "SUCCEED",
    "data": [
        {
            "uuid": 3,
            "contract": {
                "uuid": 5,
                "year": 2023,
                "no": 2,
                "farmer": {
                    "uuid": 190,
                    "id": "T153864229",
                    "name": "黃華國",
                    "phone": "0948622783",
                    "address": "屏東縣新園鄉興農路39號"
                },
                "finish": 1
            },
            "land": { ... },
            "crop": { ... },
            "prepare_confirm": 0,
            "prepare_date": "2023-09-09",
            "plant_confirm": 0,
            "plant_recv_date": "2023-09-09",
            "plant_date": "2023-09-09",
            "plant_count": 10,
            "plant_name": "莊O城",
            "weed_confirm": 0,
            "weed_date": "2023-09-09",
            "weed_pest": { ... },
            "weed_amount": 10,
            "spray_confirm": 0,
            "spray_date": "2023-09-09",
            "spray_pest": { ... },
            "spray_amount": 10,
            "bask_confirm": 0,
            "bask_date": "2023-09-09",
            "pre_fert_confirm": 0,
            "pre_fert_date": "2023-09-09",
            "pre_fert": { ... },
            "pre_fert_amount": 10,
            "post_fert_confirm": 0,
            "post_fert_date": "2023-09-09",
            "post_fert": { ... },
            "post_fert_amount": 10,
            "harvest_confirm": 0,
            "harvest_date": "2023-09-09"
        },
        {
            "uuid": 5,
            "contract": {
                "uuid": 5,
                "year": 2023,
                "no": 2,
                "farmer": {
                    "uuid": 190,
                    "id": "T153864229",
                    "name": "黃華國",
                    "phone": "0948622783",
                    "address": "屏東縣新園鄉興農路39號"
                },
                "finish": 1
            },
            "land": { ... },
            "crop": { ... },
            "prepare_confirm": 0,
            "prepare_date": "2023-09-09",
            "plant_confirm": 0,
            "plant_recv_date": "2023-09-09",
            "plant_date": "2023-09-09",
            "plant_count": 10,
            "plant_name": "莊O城",
            "weed_confirm": 0,
            "weed_date": "2023-09-09",
            "weed_pest": { ... },
            "weed_amount": 10,
            "spray_confirm": 0,
            "spray_date": "2023-09-09",
            "spray_pest": { ... },
            "spray_amount": 10,
            "bask_confirm": 0,
            "bask_date": "2023-09-09",
            "pre_fert_confirm": 0,
            "pre_fert_date": "2023-09-09",
            "pre_fert": { ... },
            "pre_fert_amount": 10,
            "post_fert_confirm": 0,
            "post_fert_date": "2023-09-09",
            "post_fert": { ... },
            "post_fert_amount": 10,
            "harvest_confirm": 0,
            "harvest_date": "2023-09-09"
        },
    ]
}
```

參數錯誤
```json
{
    "status": 400,
    "loadType": "PARAMETER_ERROR",
    "data": []
}
```

該契作合約底下無契作農地
```json
{
    "status": 200,
    "loadType": "DATA_NOT_FOUND",
    "data": []
}
```

該契作合約不存在
```json
{
    "status": 200,
    "loadType": "FK_NOT_FOUND",
    "data": []
}
```