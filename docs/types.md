---
sidebar_position: 4
---


# 資料類型


### UserPermissions
| Code | value |
| :------ | :------ |
| None | 0 |
| Admin | 1 |
| Employee | 2 |
| Farmer | 3 |


### RequestParameterFormat
請求參數佔位符

| Code | Description |
| :------ | :------ |
| `"EMPTY_DATA"` | 表示該參數為 null |


### LoadType
回傳狀態類型

| Type | Description |
| :------ | :------ |
| `SUCCEED` | 成功回傳 |
| `UNAUTHORIZED` | 未登入或請求 header 沒帶 sessionID |
| `FORBIDDEN` | 此 sessionID 沒權限請求 |
| `PARAMETER_ERROR` | 請求參數錯誤 |
| `PATH_ERROR` | 請求路徑錯誤 (404) |
| `DISABLE` | 該 API 已被禁用 |
| `SERVER_ERROR` | 伺服器錯誤 (內部錯誤) |
| `QUERY_FAILED` | 資料庫查詢錯誤 (內部錯誤) |
| `DATA_EXISTED` | 資料庫已存在該資料 |
| `DATA_NOT_FOUND` | 資料庫未找到該資料 |
| `FK_NOT_FOUND` | 引用的外鍵未找到 (會多出 missingFK 值) |
| `ROW_IS_REFERENCED` | 此項資料已被引用 |
| `ACCOUNT_EXISTS` | 帳號已存在 |
| `ACCOUNT_NOT_EXISTS` | 帳號不存在 |
| `OLD_PASSWORD_ERROR` | 舊密碼錯誤  (更改密碼 api 會出現) |
| `BLOCKED_LOGIN` | 嘗試登入太多次 鎖定一段時間 |
| `FAILED_LOGIN` | 登入失敗 (帳號或密碼錯誤) |
| `SESSION_EXISTS` | 請求時已帶入有效的 sessionId 跳過登入 |
| `SESSION_INVALID` | 請求時帶入的 sessionId 無效 (可能閒置太久過期了), 可重定向至登入介面 |
| `SEND_FAIL` | 發送信件失敗 |
| - | - |
| `PERMISSION_DENIED` | 請求的 API 路徑沒被國土測繪授權或路徑錯誤或授權過期 |


### MissingFK
引用的外鍵未找到類型

| FK | Description |
| :------ | :------ |
| `CONTRACT_UUID` | 契作合約 uuid |
| `FARMER_UUID` | 農民 uuid |
| `LAND_UUID` | 農地 uuid |
| `CROP_UUID` | 作物品種 uuid |
| `WEED_PEST_UUID` | 除草的農藥種類 uuid |
| `SPRAY_PEST_UUID` | 噴藥的農藥種類 uuid |
| `PRE_FERT_UUID` | 穗前肥的肥料種類 uuid |
| `POST_FERT_UUID` | 穗後肥的肥料種類 uuid |


### PhoneNumber
電話號碼

:::note
參數帶入時應檢查家用電話開頭是否有加區碼
:::

```
"07-1234567" | "0987654321"
```