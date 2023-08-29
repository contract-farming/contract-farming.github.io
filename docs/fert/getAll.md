# 獲取 肥料種類 所有內容

獲取肥料種類所有內容

PATH: `/api/fert/getAll`  
Method: `GET`


### 回傳格式

回傳 data 為陣列內含所有 肥料種類 資料  

* `name`: 肥料種類名稱

[`StatusCode`](../types.md#statuscode)  
[`LoadType`](../types.md#loadtype)  

```js
{
    "status": StatusCode,
    "loadType": LoadType,
    "data": [
        {
            "uuid": number,
            "name": string
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
            "name": "肥料一號"
        }
    ]
}
```