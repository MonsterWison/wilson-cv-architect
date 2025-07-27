#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 檢查 ImageMagick 是否安裝
try {
  execSync('convert --version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ ImageMagick 未安裝！請先安裝 ImageMagick:');
  console.error('   macOS: brew install imagemagick');
  console.error('   Ubuntu: sudo apt-get install imagemagick');
  console.error('   Windows: 下載並安裝 ImageMagick');
  process.exit(1);
}

// 超激進壓縮設置
function processImage(inputPath, outputPath, options = {}) {
  const {
    maxWidth = 600,    // 降低到 600px
    maxHeight = 600,   // 降低到 600px
    quality = 60,      // 降低品質到 60%
    format = 'webp',
    stripMetadata = true
  } = options;

  try {
    // 確保輸出目錄存在
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // 構建 ImageMagick 命令
    let command = `convert "${inputPath}"`;
    
    // 調整大小
    command += ` -resize ${maxWidth}x${maxHeight}>`;
    
    // 剝離元數據
    if (stripMetadata) {
      command += ' -strip';
    }
    
    // 超激進的 WebP 優化設置
    command += ' -define webp:method=6';     // 最高壓縮方法
    command += ' -define webp:pass=10';      // 最高壓縮通道
    command += ' -define webp:target-size=0'; // 自動優化
    command += ' -define webp:auto-filter=true'; // 自動濾鏡
    command += ' -define webp:lossless=false';   // 有損壓縮
    command += ' -define webp:near-lossless=40'; // 更激進的近無損壓縮
    command += ' -define webp:sharp-yuv=true';   // 銳化 YUV
    command += ' -define webp:thread-level=1';   // 單線程（更穩定）
    command += ' -define webp:use-sharp-yuv=true'; // 使用銳化 YUV
    command += ' -define webp:low-memory=true';   // 低記憶體模式
    command += ' -quality 60';                    // 60% 品質
    
    command += ` "${outputPath}"`;
    
    // 執行命令
    execSync(command, { stdio: 'pipe' });
    
    // 獲取文件大小
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const compressionRatio = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   📊 壓縮比: ${compressionRatio}% (${(inputStats.size/1024).toFixed(1)}KB → ${(outputStats.size/1024).toFixed(1)}KB)`);
    
    return {
      inputSize: inputStats.size,
      outputSize: outputStats.size,
      compressionRatio: parseFloat(compressionRatio)
    };
  } catch (error) {
    console.error(`❌ 處理 ${inputPath} 時出錯:`, error.message);
    return null;
  }
}

// 定義圖片類別
const imageCategories = [
  'miniature-dioramas',
  'model-painting', 
  'resin-crafts'
];

let totalInputSize = 0;
let totalOutputSize = 0;
let processedCount = 0;

console.log('🚀 開始超激進圖片壓縮...\n');

// 處理每個類別
imageCategories.forEach(category => {
  const inputDir = path.join('images', category);
  const outputDir = path.join('public', 'portfolio', category);
  
  if (!fs.existsSync(inputDir)) {
    console.log(`⚠️  跳過 ${category}: 目錄不存在`);
    return;
  }
  
  console.log(`📁 處理 ${category}...`);
  
  // 獲取所有圖片文件
  const files = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png|gif|bmp|tiff)$/i.test(file)
  );
  
  if (files.length === 0) {
    console.log(`   ⚠️  沒有找到圖片文件`);
    return;
  }
  
  // 處理每個文件
  files.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
    
    const result = processImage(inputPath, outputPath);
    if (result) {
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
      processedCount++;
    }
  });
  
  console.log('');
});

// 總結
if (processedCount > 0) {
  const totalCompressionRatio = ((totalInputSize - totalOutputSize) / totalInputSize * 100).toFixed(1);
  console.log('🎉 壓縮完成！');
  console.log(`📊 總計處理: ${processedCount} 個文件`);
  console.log(`📊 總壓縮比: ${totalCompressionRatio}%`);
  console.log(`📊 總大小節省: ${((totalInputSize - totalOutputSize) / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📊 最終大小: ${(totalOutputSize / 1024 / 1024).toFixed(2)}MB`);
} else {
  console.log('❌ 沒有處理任何文件');
} 