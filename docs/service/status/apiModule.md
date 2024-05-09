# 檢查 server API 模塊是否啟用

檢查 server API 模塊是否啟用  
API: { 0: All, 1: NLSC, 2: 註冊, 3: Mail }  

PATH: `/api/service/status/apiModule`  
Method: `GET`  
LoginRequired: `false`  
AllowPermissions: `[]`  


## 請求格式
* `type`: 選擇獲取的 API 模塊狀態 (0: All, 1: NLSC, 2: 註冊, 3: Mail)

```js
{
    "type": number  // 0, 1, 2, 3
}
```


## 回傳格式
[`LoadType`](../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`


## 回傳範例
### 成功回傳
格式
```js
// 參數為 0 (All) 的回傳格式
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "nlsc": boolean,
            "register": boolean,
            "mailer": boolean
        }
    ]
}

// 其他的回傳格式
// enable 值為該 API 模塊是否啟用
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "enable": boolean
        }
    ]
}
```
範例
```json
{
    "loadType": LoadType.SUCCEED,
    "data": [{ "enable": true }]
}
```

### 參數錯誤
```json
{
    "loadType": LoadType.PARAMETER_ERROR,
    "data": []
}
```