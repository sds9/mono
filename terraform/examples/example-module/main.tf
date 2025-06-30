terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "example" {
  source = "../../modules/example-module"

  name_prefix = var.name_prefix
  environment = var.environment

  bucket_versioning = true
  bucket_encryption = true

  tags = {
    Team       = "Platform"
    CostCenter = "Infrastructure"
    Example    = "true"
  }
}

# Output the module results
output "bucket_name" {
  description = "Name of the created example bucket"
  value       = module.example.bucket_name
}

output "bucket_arn" {
  description = "ARN of the created example bucket"
  value       = module.example.bucket_arn
}
