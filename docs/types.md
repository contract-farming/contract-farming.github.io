---
sidebar_position: 4
---


# 資料類型


### RequestParameterFormat
請求參數佔位符

| Code | Description |
| :------ | :------ |
| `"EMPTY_DATA"` | 表示該參數為 null |


### StatusCode
回傳狀態碼

| Code | Description |
| :------ | :------ |
| 200 | ok |
| 400 | 請求參數錯誤 |
| 401 | 請求未授權 |
| 403 | 請求權限不足 |
| 404 | 請求路徑錯誤 |
| 500 | Server 錯誤 |


### LoadType
回傳狀態類型

| Type | Description |
| :------ | :------ |
| `"SUCCEED"` | 成功回傳 |
| `"UNAUTHORIZED"` | 未登入或請求 header 沒帶 sessionID |
| `"FORBIDDEN"` | 此 sessionID 沒權限請求 |
| `"VERIFY_SESSION"` | 此 loadtype 表示為登入相關的狀態, 有多一個 authDetails 狀態碼 |
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


### AuthDetails
登入相關的狀態碼

| Type | Description |
| :------ | :------ |
| `"SUCCEED_LOGIN"` | 登入成功 |
| `"SUCCEED_LOGOUT"` | 登出成功 |
| `"LOGIN_FAILED"` | 登入失敗 (帳號或密碼錯誤) |
| `"BLOCKED_LOGIN"` | 嘗試登入太多次 鎖定一段時間 |
| `"SESSION_EXISTS"` | 請求時已帶入有效的 sessionId 跳過登入 |
| `"SESSION_INVALID"` | 請求時帶入的 sessionId 無效 (可能閒置太久過期了), 可重定向至登入介面 |


### CLMissingType
契作農地 引用的外鍵未找到類型

| Type | Description |
| :------ | :------ |
| `"CONTRACT_UUID"` | 契作合約 uuid |
| `"LAND_UUID"` | 農地 uuid |
| `"CROP_UUID"` | 作物品種 uuid |
| `"WEED_PEST_UUID"` | 除草的農藥種類 uuid |
| `"SPRAY_PEST_UUID"` | 噴藥的農藥種類 uuid |
| `"PRE_FERT_UUID"` | 穗前肥的肥料種類 uuid |
| `"POST_FERT_UUID"` | 穗後肥的肥料種類 uuid |


### PhoneNumber
電話號碼

:::note
參數帶入時應檢查家用電話開頭是否有加區碼
:::

```
"07-1234567" | "0987654321"
```