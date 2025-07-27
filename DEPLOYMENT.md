# 🚀 GitHub Pages 部署指南

這個指南將幫助你將你的CV網站部署到GitHub Pages上。

## 📋 前置要求

1. **GitHub帳戶** - 如果你還沒有，請在 [GitHub](https://github.com) 註冊
2. **Git** - 確保你的電腦已安裝Git
3. **Node.js** - 版本18或更高

## 🔧 步驟1: 創建GitHub倉庫

1. 登入你的GitHub帳戶
2. 點擊右上角的 "+" 按鈕，選擇 "New repository"
3. 倉庫名稱輸入: `wilson-cv-architect`
4. 選擇 "Private" (私人倉庫)
5. 不要勾選 "Add a README file" (我們已經有了)
6. 點擊 "Create repository"

## 📤 步驟2: 上傳代碼到GitHub

在你的本地項目目錄中執行以下命令：

```bash
# 初始化Git倉庫 (如果還沒有的話)
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Wilson Ho CV website"

# 添加遠程倉庫 (替換 YOUR_USERNAME 為你的GitHub用戶名)
git remote add origin https://github.com/YOUR_USERNAME/wilson-cv-architect.git

# 推送到GitHub
git push -u origin main
```

## ⚙️ 步驟3: 配置GitHub Pages

1. 在你的GitHub倉庫頁面，點擊 "Settings" 標籤
2. 在左側菜單中，點擊 "Pages"
3. 在 "Source" 部分，選擇 "Deploy from a branch"
4. 在 "Branch" 下拉菜單中，選擇 "gh-pages" 分支
5. 點擊 "Save"

## 🚀 步驟4: 部署網站

### 方法1: 使用自動部署腳本 (推薦)

```bash
# 運行部署腳本
./deploy.sh
```

### 方法2: 手動部署

```bash
# 安裝依賴
npm install

# 構建項目
npm run build

# 部署到GitHub Pages
npm run deploy
```

### 方法3: 使用GitHub Actions (自動化)

當你推送代碼到 `main` 分支時，GitHub Actions會自動構建和部署你的網站。

## 🌐 步驟5: 訪問你的網站

部署完成後，你的CV網站將在以下地址可用：

```
https://YOUR_USERNAME.github.io/wilson-cv-architect
```

**注意**: 首次部署可能需要5-10分鐘才能生效。

## 🔄 更新網站

當你想要更新網站內容時：

1. 修改你的代碼
2. 提交更改：
   ```bash
   git add .
   git commit -m "Update CV content"
   git push origin main
   ```
3. 重新部署：
   ```bash
   npm run deploy
   ```

## 🛠️ 故障排除

### 問題1: 網站顯示404錯誤
- 確保GitHub Pages設置正確
- 檢查倉庫名稱是否正確
- 等待5-10分鐘讓部署生效

### 問題2: 樣式或圖片不顯示
- 確保所有資源路徑都是相對路徑
- 檢查 `vite.config.ts` 中的 `base` 配置

### 問題3: 路由不工作
- 確保 `public/404.html` 文件存在
- 檢查 `index.html` 中的SPA路由腳本

### 問題4: 構建失敗
- 檢查 `package.json` 中的依賴是否正確
- 運行 `npm install` 重新安裝依賴
- 檢查控制台錯誤信息

## 📞 獲取幫助

如果你遇到問題：

1. 檢查GitHub Actions的構建日誌
2. 查看瀏覽器控制台的錯誤信息
3. 確保所有文件都已正確提交到GitHub

## 🎉 完成！

恭喜！你的CV網站現在已經成功部署到GitHub Pages。你可以：

- 分享你的網站鏈接給潛在雇主
- 在LinkedIn或其他專業平台上添加鏈接
- 定期更新內容以保持最新

---

**提示**: 考慮購買一個自定義域名來讓你的網站看起來更專業！ 