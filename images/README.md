# 📸 分類作品集目錄

## 🗂️ 資料夾結構

```
images/
├── miniature-dioramas/     # 微縮模型 (1:100 建築模型)
├── model-painting/         # 高細節模型繪畫 (壓克力/油畫技法)
├── resin-crafts/          # 樹脂工藝品 (裝飾品 & 文具)
├── automotive/            # 汽車工程 (功能升級 & 美觀改裝)
├── home-engineering/      # 家居工程 (家具組裝 & 電器維修)
└── material-crafting/     # 材料工藝 (石膏裝飾 & 工具改裝)
```

## 📋 各分類說明

### 🏠 Miniature Dioramas (微縮模型)
- **內容**：1:100 建築模型、場景製作
- **技術**：精確建模、場景佈置
- **檔案名稱建議**：`fantasy-house-1.jpg`, `workshop-scene-1.jpg`

### 🎨 Model Painting (模型繪畫)
- **內容**：高細節模型繪畫作品
- **技術**：壓克力/油畫技法、細節處理
- **檔案名稱建議**：`detailed-painting-1.jpg`, `miniature-art-1.jpg`

### 🌟 Resin Crafts (樹脂工藝)
- **內容**：裝飾品、文具、樹脂製品
- **技術**：樹脂澆注、模具製作
- **檔案名稱建議**：`resin-decor-1.jpg`, `stationery-1.jpg`

### 🚗 Automotive (汽車工程)
- **內容**：汽車改裝、功能升級
- **技術**：ODB 調校、監控系統、美觀改裝
- **檔案名稱建議**：`car-mod-1.jpg`, `lighting-system-1.jpg`

### 🏡 Home Engineering (家居工程)
- **內容**：家具組裝、電器維修、空間優化
- **技術**：結構強化、電路板更換、儲存解決方案
- **檔案名稱建議**：`furniture-1.jpg`, `appliance-repair-1.jpg`

### 🔧 Material Crafting (材料工藝)
- **內容**：石膏裝飾、工具改裝、精密測量
- **技術**：石膏製作、工具修改、組裝工作
- **檔案名稱建議**：`plaster-decor-1.jpg`, `custom-tool-1.jpg`

## 🚀 使用方法

### 1. 放入照片
將照片放入對應的分類資料夾：
```bash
# 例如：模型繪畫作品
cp your-painting-photos/*.jpg images/model-painting/
```

### 2. 處理照片
```bash
npm run process-images
```

### 3. 更新作品集
編輯 `src/pages/Portfolio.tsx`，更新 `imageUrl` 路徑：
```typescript
// 例如：模型繪畫作品
imageUrl: "/portfolio/model-painting/your-painting.webp"
```

## 📊 支援格式
- JPG / JPEG
- PNG
- BMP
- TIFF / TIF

## ⚡ 優化設置
- **格式**：WebP（比 JPEG 小 25-35%）
- **最大尺寸**：1200x1200 像素
- **品質**：85%（平衡檔案大小和品質）
- **壓縮**：最高級別 WebP 壓縮

## 🎯 預期效果
- 檔案大小減少 60-80%
- 保持高品質視覺效果
- 快速網頁載入
- 支援所有現代瀏覽器 