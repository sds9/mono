# Example Module Usage

This example demonstrates how to use the `example-module`.

## Usage

1. Initialize Terraform:
   ```bash
   terraform init
   ```

2. Plan the deployment:
   ```bash
   terraform plan
   ```

3. Apply the configuration:
   ```bash
   terraform apply
   ```

## Configuration

You can customize the deployment by setting variables:

```bash
terraform apply -var="name_prefix=my-project" -var="environment=staging"
```

Or create a `terraform.tfvars` file:

```hcl
name_prefix = "my-project"
environment = "staging"
aws_region  = "us-west-2"
```

## Outputs

This example will output:
- `bucket_name`: The name of the created S3 bucket
- `bucket_arn`: The ARN of the created S3 bucket

## Cleanup

To destroy the resources:

```bash
terraform destroy
```
