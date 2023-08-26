# 資料類型

### StatusCode
回傳狀態碼

| Code | Description |
| :------ | :------ |
| 200 | ok |
| 400 | 請求參數錯誤 |
| 404 | 請求路徑錯誤 |
| 500 | Server 錯誤 |


### LoadType
回傳狀態類型

| Type | Description |
| :------ | :------ |
| `"SUCCEED"` | 成功回傳 |
| `"PARAMETER_ERROR"` | 請求參數錯誤 |
| `"DATA_NOT_FOUND"` | 資料庫未找到該資料 |
| `"QUERY_FAILED"` | 資料庫查詢錯誤(內部錯誤) |


### PhoneNumber
電話號碼

:::note
參數帶入時應檢查家用電話開頭是否有加區碼
:::

```
"07-1234567" | "0987654321"
```