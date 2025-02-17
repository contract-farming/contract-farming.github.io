# 添加 IP 至 blacklist 中

添加 IP 至 blacklist 中  
管理員後台用  
添加進 blacklist 的 IP 所發出的請求都會被忽略  

PATH: `/api/service/admin/blacklist/addOne`  
Method: `POST`  
LoginRequired: `true`  
AllowPermissions: `[Admin]`  


## 請求格式
* `ip`: IP 地址 (`最大45個字`)

```js
{
    "ip": string
}
```


## 回傳格式
[`UserPermissions`](../../../types.md#userpermissions)  
* Admin

[`LoadType`](../../../types.md#loadtype)  
* `SUCCEED`
* `PARAMETER_ERROR`
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

### Server 錯誤  
```json
{
    "loadType": LoadType.QUERY_FAILED,
    "data": []
}
```
