# 國土測繪代理 API 請求格式


PATH: `/*`  
Method: `GET`  
LoginRequired: `true`  
AllowPermissions: `[]`  


## 請求格式
依照國土測繪所提供的 API 修改域名部分成代理 API 域名即可  
ex:  
國土測繪 API : `https://api.nlsc.gov.tw/dmaps/CadasMapPosition/B/0012/00010000`  
修改後  
代理 API : `https://nlsc-proxy.com/dmaps/CadasMapPosition/B/0012/00010000`  


## 回傳格式

* `proxyUrl`: 此次代理所請求的目標 API
* `data`: 國土測繪請求資料

[`LoadType`](../types.md#loadtype)  
* `SUCCEED`
* `UNAUTHORIZED`
* `PERMISSION_DENIED`


## 回傳範例
### 成功獲取
格式
```js
{
    "loadType": LoadType.SUCCEED,
    "proxyUrl": string,
    "data": string
}
```
範例  
國土測繪 API : `https://api.nlsc.gov.tw/dmaps/CadasMapPosition/B/0012/00010000`  
代理 API : `https://nlsc-proxy.com/dmaps/CadasMapPosition/B/0012/00010000`  
```json
{
    "loadType": LoadType.SUCCEED,
    "proxyUrl": "https://api.nlsc.gov.tw/dmaps/CadasMapPosition/B/0012/00010000",
    "data": "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<cadsPositionItem>\n    <repX>120.683585</repX>\n    <repY>24.142332</repY>\n    <ldX>120.683504</ldX>\n    <ldY>24.142254</ldY>\n    <rtX>120.683666</rtX>\n    <rtY>24.142408</rtY>\n</cadsPositionItem>\n"
}
```

### sessionId 不存在 
(未登入或過期)  
```json
{
    "loadType": LoadType.UNAUTHORIZED,
    "data": []
}
```

### 沒有權限  
請求的 API 路徑沒被國土測繪授權或路徑錯誤或授權過期，如果重複或多個 API 出現此問題請聯絡 冠雄.cc  
```json
{
    "loadType": LoadType.PERMISSION_DENIED,
    "data": []
}
```
