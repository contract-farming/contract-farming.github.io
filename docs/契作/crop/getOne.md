# 獲取其中一個 作物品種 內容

獲取其中一個作物品種內容

PATH: `/api/crop/getOne`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


### 請求格式
* `uuid`: 作物品種的 uuid


### 回傳格式

回傳 data 為陣列內含指定的 作物品種 資料  

* `name`: 作物品種名稱
* `unit_yield`: 單位面積預估產量
* `unit`: 產量單位 (1: 台斤, 2: 公斤)

[`StatusCode`](../../types.md#statuscode)  
[`LoadType`](../../types.md#loadtype)  

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
存在該資料
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

參數錯誤
```json
{
    "status": 400,
    "loadType": "PARAMETER_ERROR",
    "data": []
}
```

不存在該資料
```json
{
    "status": 200,
    "loadType": "DATA_NOT_FOUND",
    "data": []
}
```