#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 檢查是否安裝了必要的工具
function checkDependencies() {
  try {
    execSync('which convert', { stdio: 'ignore' });
    console.log('✅ ImageMagick 已安裝');
    return true;
  } catch (error) {
    console.log('❌ 需要安裝 ImageMagick');
    console.log('macOS: brew install imagemagick');
    console.log('Ubuntu: sudo apt-get install imagemagick');
    return false;
  }
}

// 獲取圖片尺寸
function getImageDimensions(imagePath) {
  try {
    const result = execSync(`identify -format "%wx%h" "${imagePath}"`, { encoding: 'utf8' });
    const [width, height] = result.trim().split('x').map(Number);
    return { width, height };
  } catch (error) {
    console.error(`無法獲取圖片尺寸: ${imagePath}`);
    return { width: 0, height: 0 };
  }
}

// 智能壓縮圖片
function processImage(inputPath, outputPath, options = {}) {
  const {
    maxWidth = 800,  // 降低到 800px
    maxHeight = 800, // 降低到 800px
    quality = 75,    // 降低品質到 75%
    format = 'webp',
    stripMetadata = true
  } = options;

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // 獲取原始圖片尺寸
    const { width, height } = getImageDimensions(inputPath);
    
    // 計算最佳尺寸（保持比例）
    let targetWidth = width;
    let targetHeight = height;
    
    if (width > maxWidth || height > maxHeight) {
      const ratio = Math.min(maxWidth / width, maxHeight / height);
      targetWidth = Math.round(width * ratio);
      targetHeight = Math.round(height * ratio);
    }

    // 構建 ImageMagick 命令
    let command = `convert "${inputPath}"`;
    
    // 調整尺寸
    command += ` -resize ${targetWidth}x${targetHeight}`;
    
    // 高質量重採樣
    command += ' -filter Lanczos';
    
    // 設置品質
    command += ` -quality ${quality}`;
    
    // 移除元數據以減少檔案大小
    if (stripMetadata) {
      command += ' -strip';
    }
    
    // 更激進的 WebP 優化設置
    command += ' -define webp:method=6';     // 最高壓縮方法
    command += ' -define webp:pass=10';      // 最高壓縮通道
    command += ' -define webp:target-size=0'; // 自動優化
    command += ' -define webp:auto-filter=true'; // 自動濾鏡
    command += ' -define webp:lossless=false';   // 有損壓縮
    command += ' -define webp:near-lossless=60'; // 近無損壓縮
    command += ' -define webp:sharp-yuv=true';   // 銳化 YUV
    command += ' -define webp:thread-level=1';   // 單線程（更穩定）
    
    // 輸出檔案
    command += ` "${outputPath}"`;
    
    // 執行命令
    execSync(command, { stdio: 'inherit' });
    
    // 獲取檔案大小
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);
    const compressionRatio = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✅ 處理完成: ${path.basename(inputPath)}`);
    console.log(`   📏 尺寸: ${width}x${height} → ${targetWidth}x${targetHeight}`);
    console.log(`   📦 大小: ${inputSizeKB}KB → ${outputSizeKB}KB (壓縮 ${compressionRatio}%)`);
    
    return true;
  } catch (error) {
    console.error(`❌ 處理失敗: ${inputPath}`, error.message);
    return false;
  }
}

// 處理分類資料夾
function processCategory(inputDir, outputDir, categoryName) {
  const supportedFormats = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif'];
  
  if (!fs.existsSync(inputDir)) {
    console.log(`📁 分類目錄不存在: ${inputDir}`);
    return { count: 0, inputSize: 0, outputSize: 0 };
  }

  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return supportedFormats.includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log(`📁 ${categoryName}: 沒有找到圖片檔案`);
    return { count: 0, inputSize: 0, outputSize: 0 };
  }

  console.log(`\n📸 ${categoryName}: 找到 ${imageFiles.length} 張圖片`);

  let successCount = 0;
  let totalInputSize = 0;
  let totalOutputSize = 0;

  imageFiles.forEach((file, index) => {
    const inputPath = path.join(inputDir, file);
    const nameWithoutExt = path.parse(file).name;
    const outputPath = path.join(outputDir, `${nameWithoutExt}.webp`);
    
    console.log(`\n🔄 處理中 (${index + 1}/${imageFiles.length}): ${file}`);
    
    // 獲取原始檔案大小
    const inputStats = fs.statSync(inputPath);
    totalInputSize += inputStats.size;
    
    if (processImage(inputPath, outputPath)) {
      successCount++;
      const outputStats = fs.statSync(outputPath);
      totalOutputSize += outputStats.size;
    }
  });

  return { count: successCount, inputSize: totalInputSize, outputSize: totalOutputSize };
}

// 批量處理所有分類
function processAllCategories(inputBaseDir, outputBaseDir) {
  const categories = [
    { name: 'Miniature Dioramas', folder: 'miniature-dioramas' },
    { name: 'Model Painting', folder: 'model-painting' },
    { name: 'Resin Crafts', folder: 'resin-crafts' },
    { name: 'Automotive', folder: 'automotive' },
    { name: 'Home Engineering', folder: 'home-engineering' },
    { name: 'Material Crafting', folder: 'material-crafting' }
  ];

  let totalInputSize = 0;
  let totalOutputSize = 0;
  let totalCount = 0;

  console.log('🖼️  分類作品集處理工具');
  console.log('========================');

  categories.forEach(category => {
    const inputDir = path.join(inputBaseDir, category.folder);
    const outputDir = path.join(outputBaseDir, category.folder);
    
    const result = processCategory(inputDir, outputDir, category.name);
    totalInputSize += result.inputSize;
    totalOutputSize += result.outputSize;
    totalCount += result.count;
  });

  if (totalCount > 0) {
    const totalInputSizeMB = (totalInputSize / (1024 * 1024)).toFixed(2);
    const totalOutputSizeMB = (totalOutputSize / (1024 * 1024)).toFixed(2);
    const totalCompressionRatio = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);

    console.log(`\n🎉 處理完成！`);
    console.log(`✅ 成功處理: ${totalCount} 張圖片`);
    console.log(`📁 輸出目錄: ${outputBaseDir}`);
    console.log(`📊 總大小: ${totalInputSizeMB}MB → ${totalOutputSizeMB}MB (壓縮 ${totalCompressionRatio}%)`);
    console.log(`💾 節省空間: ${(totalInputSize - totalOutputSize) / (1024 * 1024)}MB`);
    
    console.log('\n🚀 下一步：');
    console.log('1. 更新 src/pages/Portfolio.tsx 中的 imageUrl 路徑');
    console.log('2. 運行 npm run build');
    console.log('3. 推送到 GitHub 部署到 Vercel');
  } else {
    console.log('\n❌ 沒有找到任何圖片檔案');
    console.log('📋 支援的格式: JPG, JPEG, PNG, BMP, TIFF, TIF');
    console.log('📁 請將照片放入對應的分類目錄');
  }
}

// 主函數
function main() {
  if (!checkDependencies()) {
    process.exit(1);
  }

  const inputDir = process.argv[2] || 'images';
  const outputDir = 'public/portfolio';

  processAllCategories(inputDir, outputDir);
}

if (require.main === module) {
  main();
}

module.exports = { processImage, processCategory, processAllCategories }; 