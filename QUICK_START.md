# 🚀 快速添加照片指南

## 📸 立即開始

### 1. 準備照片
將你的微縮模型照片放入 `images/` 目錄：
```bash
# 確保目錄存在
mkdir -p images

# 將你的照片複製到 images/ 目錄
# 支援格式：JPG, JPEG, PNG, BMP, TIFF, TIF
```

### 2. 處理照片
```bash
npm run process-images
```

### 3. 更新作品集
編輯 `src/pages/Portfolio.tsx`，將 `imageUrl` 改為你的照片檔案名稱：

```typescript
// 例如，如果你的照片是 photo1.jpg
imageUrl: "/portfolio/photo1.webp"

// 或者 fantasy-house.jpg
imageUrl: "/portfolio/fantasy-house.webp"
```

### 4. 部署
```bash
npm run build
git add .
git commit -m "Add portfolio photos"
git push origin main
```

## 📋 照片檔案名稱對應

根據你的照片描述，建議的檔案名稱：

1. `fantasy-hobbit-house.jpg` - 多層次奇幻小屋
2. `waterfront-workshop.jpg` - 水邊工作坊
3. `multi-story-bakery.jpg` - 多層麵包店
4. `magical-study.jpg` - 魔法書房
5. `walnut-shell.jpg` - 核桃殼微型房間
6. `magic-school.jpg` - 魔法學校
7. `cozy-living-room.jpg` - 溫馨客廳
8. `wizards-library.jpg` - 巫師圖書館
9. `bakery-interior.jpg` - 麵包店內部
10. `walnut-bedroom.jpg` - 核桃殼臥室
11. `coffee-bakery.jpg` - 咖啡麵包店
12. `classic-study.jpg` - 古典書房

## ⚡ 快速測試

如果你有 1-2 張照片想先測試：

1. 放入 `images/` 目錄
2. 運行 `npm run process-images`
3. 檢查 `public/portfolio/` 目錄是否有生成的 `.webp` 檔案
4. 更新 Portfolio.tsx 中的一個 `imageUrl`
5. 構建並部署

## 🎯 預期結果

- 照片檔案大小減少 60-80%
- 保持高品質視覺效果
- 快速網頁載入
- 支援所有現代瀏覽器 