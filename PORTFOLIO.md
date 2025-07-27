# 📸 Portfolio 作品集功能

## 🎯 功能概述

你的 CV 網站現在包含一個作品集頁面，可以展示你的專業作品照片。

## 📁 檔案結構

```
public/
└── portfolio/          # 照片存放目錄
    ├── photo1.webp
    ├── photo2.webp
    └── ...
```

## 🚀 如何使用

### 1. 添加照片

1. **創建輸入目錄**：
   ```bash
   mkdir images
   ```

2. **放入原始照片**：
   - 將你的照片放入 `images/` 目錄
   - 支援格式：JPG, PNG, BMP, TIFF

3. **自動壓縮處理**：
   ```bash
   npm run process-images
   ```
   
   或者指定目錄：
   ```bash
   npm run process-images your-photos-folder
   ```

### 2. 更新作品集內容

編輯 `src/pages/Portfolio.tsx` 中的 `photoItems` 陣列：

```typescript
const photoItems: PhotoItem[] = [
  {
    id: "1",
    title: "你的作品標題",
    description: "作品描述",
    category: "分類",
    imageUrl: "/portfolio/your-photo.webp", // 指向處理後的圖片
    date: "2024"
  }
];
```

### 3. 訪問作品集

- **CV 主頁**：點擊頭部的 "Portfolio" 按鈕
- **直接訪問**：`https://your-domain.vercel.app/portfolio`

## 🛠️ 技術細節

### 圖片處理
- **格式**：自動轉換為 WebP（比 JPEG 小 25-35%）
- **尺寸**：預設寬度 800px（保持比例）
- **品質**：85%（平衡檔案大小和品質）

### 效能優化
- **懶加載**：只載入可見區域的圖片
- **響應式**：自動適應不同螢幕尺寸
- **快取**：瀏覽器會快取圖片

## 📱 響應式設計

- **桌面**：3 列網格
- **平板**：2 列網格  
- **手機**：1 列網格

## 🎨 自訂樣式

你可以修改 `src/pages/Portfolio.tsx` 來：
- 改變網格佈局
- 調整卡片樣式
- 添加更多互動效果
- 修改顏色主題

## 📊 檔案大小建議

- **單張照片**：建議 < 200KB
- **總作品集**：建議 < 5MB
- **載入速度**：目標 < 3 秒

## 🔧 故障排除

### 圖片無法顯示
1. 確認圖片路徑正確
2. 檢查圖片是否已處理
3. 確認檔案格式支援

### 處理失敗
1. 安裝 ImageMagick：
   ```bash
   # macOS
   brew install imagemagick
   
   # Ubuntu
   sudo apt-get install imagemagick
   ```

2. 確認輸入目錄存在
3. 檢查檔案格式支援

## 🚀 部署

當你 push 到 GitHub 時，Vercel 會自動：
1. 重新構建網站
2. 包含新的照片
3. 部署到線上

---

**現在你可以開始添加你的作品照片了！** 🎉 