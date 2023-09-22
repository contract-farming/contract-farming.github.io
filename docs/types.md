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
| `"PATH_ERROR"` | 請求路徑錯誤 (404) |
| `"DATA_EXISTED"` | 資料庫已存在該資料 |
| `"DATA_NOT_FOUND"` | 資料庫未找到該資料 |
| `"DATA_CONFLICT"` | 待更新的資料與原有資料庫的其他資料衝突(相同) |
| `"SAME_DATA"` | 新資料與舊資料相同 |
| `"FK_NOT_FOUND"` | 引用的外鍵未找到 |
| `"ROW_IS_REFERENCED"` | 此項資料已被引用 |
| `"QUERY_FAILED"` | 資料庫查詢錯誤 (內部錯誤) |
| `"SERVER_ERROR"` | 伺服器錯誤 (內部錯誤) |


### PhoneNumber
電話號碼

:::note
參數帶入時應檢查家用電話開頭是否有加區碼
:::

```
"07-1234567" | "0987654321"
```