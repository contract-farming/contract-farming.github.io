# 刪除 blacklist 中的 IP

獲取 IP blacklist  
管理員後台用  
添加進 blacklist 的 IP 所發出的請求都會被忽略  

PATH: `/api/service/admin/blacklist/getAll`  
Method: `DELETE`  
LoginRequired: `true`  
AllowPermissions: `[Admin]`  


## 請求格式
無參數  


## 回傳格式

回傳 data 為陣列內含所有 IP blacklist 資料  

* `ip`: IP 地址
* `created_at`: 添加時間    (`YYYY/MM/DD HH:MI:SS`)

[`UserPermissions`](../../../types.md#userpermissions)  
* Admin

[`LoadType`](../../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
* `QUERY_FAILED`


## 回傳範例
### 成功新增
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "data": [
        {
            "ip": string
            "created_at": string
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
            "ip": "192.168.55.6",
            "created_at": "2024/06/21 13:26:54"
        },
        { ... }
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

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
