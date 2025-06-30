#!/bin/bash

# Release script for the monorepo

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 SDS9 Monorepo Release Script${NC}"

# Check if we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo -e "${RED}❌ You must be on the main branch to release${NC}"
    exit 1
fi

# Check if working directory is clean
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}❌ Working directory is not clean. Please commit or stash changes.${NC}"
    exit 1
fi

# Pull latest changes
echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
git pull origin main

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Run tests
echo -e "${YELLOW}🧪 Running tests...${NC}"
npm test

# Build all packages
echo -e "${YELLOW}🏗️  Building packages...${NC}"
npm run build

# Ask for release type
echo -e "${YELLOW}❓ What type of release? (patch/minor/major/terraform)${NC}"
read -r release_type

case $release_type in
    patch|minor|major)
        echo -e "${YELLOW}📦 Releasing CDK package ($release_type) to GitHub Packages...${NC}"
        cd cdk
        npm version $release_type
        npm publish --registry=https://npm.pkg.github.com
        cd ..
        git add .
        git commit -m "chore: release CDK package v$(cd cdk && node -p 'require("./package.json").version')"
        git push origin main --tags
        echo -e "${GREEN}✅ CDK package released successfully to GitHub Packages!${NC}"
        ;;
    terraform)
        echo -e "${YELLOW}🏷️  Enter terraform version (e.g., v1.0.0):${NC}"
        read -r terraform_version
        git tag $terraform_version
        git push origin $terraform_version
        echo -e "${GREEN}✅ Terraform modules tagged as $terraform_version${NC}"
        ;;
    *)
        echo -e "${RED}❌ Invalid release type. Use patch, minor, major, or terraform${NC}"
        exit 1
        ;;
esac

echo -e "${GREEN}🎉 Release completed successfully!${NC}"
