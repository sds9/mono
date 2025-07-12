#!/usr/bin/env node

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function takeScreenshot() {
  console.log('Starting browser for screenshot...');
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to a standard desktop size
  await page.setViewportSize({ width: 1280, height: 720 });
  
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
      fullPage: false  // Just capture the viewport, not the full page
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