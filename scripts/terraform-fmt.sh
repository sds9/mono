#!/bin/bash

# Terraform formatting script for local development

set -e

echo "🔧 Formatting Terraform files..."

# Check if terraform is installed
if ! command -v terraform &> /dev/null; then
    echo "❌ Terraform is not installed. Please install Terraform to format files."
    echo "   Visit: https://developer.hashicorp.com/terraform/downloads"
    exit 1
fi

# Format all Terraform files
terraform fmt -recursive terraform/

echo "✅ Terraform files formatted successfully!"

# Optional: Run validation
read -p "🔍 Do you want to validate the Terraform modules? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔍 Validating Terraform modules..."
    
    for module in terraform/modules/*/; do
        echo "Validating $module"
        cd "$module"
        terraform init -backend=false
        terraform validate
        cd - > /dev/null
    done
    
    echo "✅ All Terraform modules are valid!"
fi
