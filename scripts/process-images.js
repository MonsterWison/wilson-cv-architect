#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 檢查是否安裝了必要的工具
function checkDependencies() {
  try {
    execSync('which convert', { stdio: 'ignore' });
    console.log('✅ ImageMagick 已安裝');
  } catch (error) {
    console.log('❌ 需要安裝 ImageMagick');
    console.log('macOS: brew install imagemagick');
    console.log('Ubuntu: sudo apt-get install imagemagick');
    return false;
  }
  return true;
}

// 處理單張圖片
function processImage(inputPath, outputPath, options = {}) {
  const {
    width = 800,
    quality = 85,
    format = 'webp'
  } = options;

  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // 使用 ImageMagick 壓縮圖片
    const command = `convert "${inputPath}" -resize ${width}x -quality ${quality} "${outputPath}"`;
    execSync(command, { stdio: 'inherit' });
    
    // 獲取檔案大小
    const stats = fs.statSync(outputPath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    
    console.log(`✅ 處理完成: ${path.basename(inputPath)} -> ${sizeKB}KB`);
    return true;
  } catch (error) {
    console.error(`❌ 處理失敗: ${inputPath}`, error.message);
    return false;
  }
}

// 批量處理圖片
function processImages(inputDir, outputDir) {
  const supportedFormats = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff'];
  
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

  let successCount = 0;
  imageFiles.forEach((file, index) => {
    const inputPath = path.join(inputDir, file);
    const nameWithoutExt = path.parse(file).name;
    const outputPath = path.join(outputDir, `${nameWithoutExt}.webp`);
    
    console.log(`\n🔄 處理中 (${index + 1}/${imageFiles.length}): ${file}`);
    
    if (processImage(inputPath, outputPath)) {
      successCount++;
    }
  });

  console.log(`\n🎉 完成！成功處理 ${successCount}/${imageFiles.length} 張圖片`);
  console.log(`📁 輸出目錄: ${outputDir}`);
}

// 主函數
function main() {
  if (!checkDependencies()) {
    process.exit(1);
  }

  const inputDir = process.argv[2] || 'images';
  const outputDir = 'public/portfolio';

  console.log('🖼️  圖片處理工具');
  console.log('================');
  console.log(`📂 輸入目錄: ${inputDir}`);
  console.log(`📂 輸出目錄: ${outputDir}`);
  console.log('');

  processImages(inputDir, outputDir);
}

if (require.main === module) {
  main();
}

module.exports = { processImage, processImages }; 