# 獲取其中一個 肥料種類 內容

獲取其中一個肥料種類內容

PATH: `/api/fert/getOne`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `uuid`: 肥料種類的 uuid 

```js
{
    "uuid": number
}
```


## 回傳格式

回傳 data 為陣列內含指定的 肥料種類 資料  

* `name`: 肥料種類名稱

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
            "uuid": number,
            "name": string
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
            "uuid": 1,
            "name": "肥料一號"
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
