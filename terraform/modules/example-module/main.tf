locals {
  common_tags = merge(
    {
      Project     = "SDS9"
      Environment = var.environment
      ManagedBy   = "Terraform"
    },
    var.tags
  )

  bucket_name = "${var.name_prefix}-${var.environment}-example-bucket"
}

# Example S3 bucket
resource "aws_s3_bucket" "example" {
  bucket = local.bucket_name

  tags = local.common_tags
}

# S3 bucket versioning
resource "aws_s3_bucket_versioning" "example" {
  count  = var.bucket_versioning ? 1 : 0
  bucket = aws_s3_bucket.example.id

  versioning_configuration {
    status = "Enabled"
  }
}

# S3 bucket encryption
resource "aws_s3_bucket_server_side_encryption_configuration" "example" {
  count  = var.bucket_encryption ? 1 : 0
  bucket = aws_s3_bucket.example.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# Block public access
resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.example.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
