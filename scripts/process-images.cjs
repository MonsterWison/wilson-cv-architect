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
    maxWidth = 1200,
    maxHeight = 1200,
    quality = 85,
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
    
    // 優化設置
    command += ' -define webp:method=6'; // 最高壓縮方法
    command += ' -define webp:pass=10';   // 最高壓縮通道
    command += ' -define webp:target-size=0'; // 自動優化
    command += ' -define webp:auto-filter=true'; // 自動濾鏡
    
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

// 批量處理圖片
function processImages(inputDir, outputDir) {
  const supportedFormats = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif'];
  
  if (!fs.existsSync(inputDir)) {
    console.log(`❌ 輸入目錄不存在: ${inputDir}`);
    return;
  }

  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return supportedFormats.includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log('❌ 沒有找到支援的圖片檔案');
    return;
  }

  console.log(`📸 找到 ${imageFiles.length} 張圖片`);
  console.log('🔄 開始處理...\n');

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

  const totalInputSizeMB = (totalInputSize / (1024 * 1024)).toFixed(2);
  const totalOutputSizeMB = (totalOutputSize / (1024 * 1024)).toFixed(2);
  const totalCompressionRatio = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);

  console.log(`\n🎉 處理完成！`);
  console.log(`✅ 成功處理: ${successCount}/${imageFiles.length} 張圖片`);
  console.log(`📁 輸出目錄: ${outputDir}`);
  console.log(`📊 總大小: ${totalInputSizeMB}MB → ${totalOutputSizeMB}MB (壓縮 ${totalCompressionRatio}%)`);
  console.log(`💾 節省空間: ${(totalInputSize - totalOutputSize) / (1024 * 1024)}MB`);
}

// 主函數
function main() {
  if (!checkDependencies()) {
    process.exit(1);
  }

  const inputDir = process.argv[2] || 'images';
  const outputDir = 'public/portfolio';

  console.log('🖼️  微縮模型照片處理工具');
  console.log('========================');
  console.log(`📂 輸入目錄: ${inputDir}`);
  console.log(`📂 輸出目錄: ${outputDir}`);
  console.log('🎯 優化設置: WebP格式, 高品質壓縮, 智能尺寸調整');
  console.log('');

  processImages(inputDir, outputDir);
}

if (require.main === module) {
  main();
}

module.exports = { processImage, processImages }; 