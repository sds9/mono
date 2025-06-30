# SDS9 Organization Terraform Modules

This directory contains reusable Terraform modules for SDS9 Organization infrastructure.

## Module Structure

Each module follows the standard Terraform module structure:

```
terraform/
├── modules/
│   ├── example-module/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   ├── versions.tf
│   │   └── README.md
│   └── ...
└── examples/
    ├── example-module/
    │   ├── main.tf
    │   └── README.md
    └── ...
```

## Available Modules

- `example-module`: Example module demonstrating module structure

## Usage

```hcl
module "example" {
  source = "git::https://github.com/sds9-org/mono.git//terraform/modules/example-module?ref=v1.0.0"
  
  name_prefix = "my-project"
  environment = "dev"
}
```

## Publishing

Modules are published as part of this monorepo and can be referenced directly from Git.

## Development

### Testing

Each module should include examples and tests using tools like:
- Terratest
- terraform plan
- terraform validate

### Documentation

Each module should include:
- README.md with usage examples
- Input and output descriptions
- Examples directory
