#!/usr/bin/env node

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function takeScreenshot() {
  console.log('Starting browser for screenshot...');
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to a larger desktop size for full desktop view
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Set a desktop user agent to ensure desktop layout
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');
  
  try {
    // Navigate to the local server
    const url = process.env.SITE_URL || 'http://localhost:3000';
    console.log(`Navigating to ${url}`);
    
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Wait a bit more for any dynamic content to load
    await page.waitForTimeout(2000);
    
    // Take screenshot
    const screenshotPath = path.join(process.cwd(), 'docs-screenshot.png');
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: false,  // Just capture the viewport, not the full page
      clip: { x: 0, y: 0, width: 1920, height: 1080 }  // Ensure we get the full desktop viewport
    });
    
    console.log(`Screenshot saved to ${screenshotPath}`);
    
  } catch (error) {
    console.error('Error taking screenshot:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  takeScreenshot();
}

module.exports = { takeScreenshot };