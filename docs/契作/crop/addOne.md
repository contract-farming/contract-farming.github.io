# 增加一個 作物品種

增加一個作物品種

PATH: `/api/crop/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
* `name`: 作物品種名稱 (`最大100個字`)
* `unit_yield`: 單位面積預估產量 (`INT`)
* `unit`: 產量單位 (1: 台斤, 2: 公斤)

```js
{
    "name": string,
    "unit_yield": number,
    "unit": number
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `DATA_EXISTED`
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

### 已存在該資料  
待添加的資料已存在資料庫中  
`data[]` 為已存在資料庫的資料  
```json
{
    "loadType": LoadType.DATA_EXISTED,
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

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
