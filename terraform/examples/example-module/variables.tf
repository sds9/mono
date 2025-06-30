variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "name_prefix" {
  description = "Name prefix for all resources"
  type        = string
  default     = "sds9-example"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "dev"
}
