這邊主要拿來放前後端安裝教學   
跟一些 DB 架構, 端口清單  
頁面連結: [https://contract-farming.github.io/](https://contract-farming.github.io/)  

----------  

有要塞東西就放在 [`_posts/`](_posts) 裡面以 markdown 為主  
執行 `bundle exec jekyll serve` 編譯成 html 後再提交  
網頁會在提交後自動構建  

----------  

這份安裝教學以 Win10 WSL2 環境為例，如果需要安裝 WSL2 請參考 Microsoft 官方的說明文件：https://docs.microsoft.com/zh-tw/windows/wsl/install  

安裝 Jekyll 所需的 Ruby 與相關套件，請執行以下指令：  

```bash
# 更新已安裝套件的資訊
sudo apt update -y

# 安裝 Ruby 及編譯工具
sudo apt-get install ruby-full build-essential dh-autoreconf -y

# 檢查 Ruby 版本，需 >= 2.6
ruby -v

# 更新 Ruby 套件
sudo gem update

# 安裝 Jekyll 及 Bundler
sudo gem install jekyll bundler

# 檢查 Bundler 版本
bundle -v

# 安裝專案所需的所有 Ruby 套件
sudo bundle install

# 檢查 Jekyll 版本
bundle exec jekyll -v

# 啟動 Jekyll
bundle exec jekyll serve
```


</br>
</br>
</br>
  
`不要靠近Jekyll，否則會變得不幸。`
