---
sidebar_position: 1
---


# API 文檔

:::note
    path: '/api/version';           // API 路徑  
    method: 'GET';                  // 請求方法  
    loginRequired: `false`;         // 此API調用是否需要登入  
    allowPermissions: `[1,2]`;      // 用陣列裝 允許的權限帳號 為空則為全都允許  
:::


| Path | Method | Description |
| :------ | :------ | :------ |
| 契作合約 |  |  |
| [`/api/contract/getAll`](./契作/contract/getAll.md)                       | **GET**       | 獲取所有 契作合約 資料  
| [`/api/contract/getOne`](./契作/contract/getOne.md)                       | **GET**       | 獲取其中一個 契作合約 資料  
| [`/api/contract/addOne`](./契作/contract/addOne.md)                       | **POST**      | 增加一個 契作合約  
| [`/api/contract/deleteOne`](./契作/contract/deleteOne.md)                 | **DELETE**    | 刪除其中一個 契作合約  
| [`/api/contract/updateOne`](./契作/contract/updateOne.md)                 | **PUT**       | 更新一個 契作合約 資料  
| [`/api/contract/query/getAllCl`](./契作/contract/query/getAllCl.md)       | **GET**       | 獲取其中一個 契作合約 下的所有契作農地  
| 契作農地 |  |  |
| [`/api/cl/addOne`](./契作/cl/addOne.md)                                   | **POST**      | 增加一個 契作農地  
| [`/api/cl/deleteOne`](./契作/cl/deleteOne.md)                             | **DELETE**    | 刪除其中一個 契作農地  
| [`/api/cl/updateOne`](./契作/cl/updateOne.md)                             | **PUT**       | 更新一個 契作農地 資料  
| 契作農地流程內容 |  |  |
| [`/api/cl/flowlist/getAll`](./契作/cl/flowlist/getAll.md)                 | **GET**       | 獲取其中一個 契作農地 的流程清單內容  
| [`/api/cl/flowlist/addOne`](./契作/cl/flowlist/addOne.md)                 | **POST**      | 添加流程清單中的一個內容  
| [`/api/cl/flowlist/deleteOne`](./契作/cl/flowlist/deleteOne.md)           | **DELETE**    | 刪除流程清單中的一個內容  
| [`/api/cl/flowlist/updateOne`](./契作/cl/flowlist/updateOne.md)           | **PUT**       | 修改流程清單中的一個內容  
| 契作農民 |  |  |
| [`/api/farmer/getAll`](./契作/farmer/getAll.md)                           | **GET**       | 獲取所有 契作農民 資料  
| [`/api/farmer/getOne`](./契作/farmer/getOne.md)                           | **GET**       | 獲取其中一個 契作農民 資料  
| [`/api/farmer/addOne`](./契作/farmer/addOne.md)                           | **POST**      | 增加一個 契作農民  
| [`/api/farmer/deleteOne`](./契作/farmer/deleteOne.md)                     | **DELETE**    | 刪除其中一個 契作農民  
| [`/api/farmer/updateOne`](./契作/farmer/updateOne.md)                     | **PUT**       | 更新一個 契作農民 資料  
| 農地 |  |  |
| [`/api/land/getAll`](./契作/land/getAll.md)                               | **GET**       | 獲取所有 農地 資料  
| [`/api/land/getOne`](./契作/land/getOne.md)                               | **GET**       | 獲取其中一個 農地 資料  
| [`/api/land/addOne`](./契作/land/addOne.md)                               | **POST**      | 增加一塊 農地  
| [`/api/land/deleteOne`](./契作/land/deleteOne.md)                         | **DELETE**    | 刪除其中一塊 農地  
| [`/api/land/updateOne`](./契作/land/updateOne.md)                         | **PUT**       | 更新一塊 農地 資料  
| 作物品種 |  |  |
| [`/api/crop/getAll`](./契作/crop/getAll.md)                               | **GET**       | 獲取所有 作物品種 資料  
| [`/api/crop/getOne`](./契作/crop/getOne.md)                               | **GET**       | 獲取其中一個 作物品種 資料  
| [`/api/crop/addOne`](./契作/crop/addOne.md)                               | **POST**      | 增加一個 作物品種  
| [`/api/crop/deleteOne`](./契作/crop/deleteOne.md)                         | **DELETE**    | 刪除其中一個 作物品種  
| [`/api/crop/updateOne`](./契作/crop/updateOne.md)                         | **PUT**       | 更新一個 作物品種 資料  
| 肥料種類 |  |  |
| [`/api/fert/getAll`](./契作/fert/getAll.md)                               | **GET**       | 獲取所有 肥料種類 資料  
| [`/api/fert/getOne`](./契作/fert/getOne.md)                               | **GET**       | 獲取其中一個 肥料種類 資料  
| [`/api/fert/addOne`](./契作/fert/addOne.md)                               | **POST**      | 增加一個 肥料種類  
| [`/api/fert/deleteOne`](./契作/fert/deleteOne.md)                         | **DELETE**    | 刪除其中一個 肥料種類  
| [`/api/fert/updateOne`](./契作/crop/updateOne.md)                         | **PUT**       | 更新一個 肥料種類 資料  
| 農藥種類 |  |  |
| [`/api/pest/getAll`](./契作/pest/getAll.md)                               | **GET**       | 獲取所有 農藥種類 資料  
| [`/api/pest/getOne`](./契作/pest/getOne.md)                               | **GET**       | 獲取其中一個 農藥種類 資料  
| [`/api/pest/addOne`](./契作/pest/addOne.md)                               | **POST**      | 增加一個 農藥種類  
| [`/api/pest/deleteOne`](./契作/pest/deleteOne.md)                         | **DELETE**    | 刪除其中一個 農藥種類  
| [`/api/pest/updateOne`](./契作/crop/updateOne.md)                         | **PUT**       | 更新一個 農藥種類 資料  

