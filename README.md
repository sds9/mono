# SDS9 Organization Monorepo

This monorepo contains CDK constructs and Terraform modules for SDS9 Organization infrastructure.

## Structure

```
mono/
├── cdk/                    # NPM package with CDK constructs
│   ├── src/
│   ├── test/
│   ├── package.json
│   └── README.md
├── terraform/              # Terraform modules
│   ├── modules/
│   ├── examples/
│   └── README.md
├── package.json            # Root package.json with workspaces
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 23.0.0 (see `.nvmrc`)
- npm >= 9.0.0
- AWS CLI configured
- Terraform >= 1.0

### Installation

Install dependencies for all workspaces:

```bash
npm install
```

### CDK Package

The CDK package is located in `./cdk` and provides reusable constructs and stacks.

#### Building

```bash
cd cdk
npm run build
```

#### Testing

```bash
cd cdk
npm test
```

#### Publishing

```bash
cd cdk
npm publish
```

### Terraform Modules

Terraform modules are located in `./terraform/modules` and can be referenced directly from Git.

#### Usage

```hcl
module "example" {
  source = "git::https://github.com/sds9-org/mono.git//terraform/modules/example-module?ref=v1.0.0"
  
  name_prefix = "my-project"
  environment = "dev"
}
```

## Development

### Scripts

Available npm scripts at the root level:

- `npm run build`: Build all workspaces
- `npm run test`: Test all workspaces
- `npm run lint`: Lint all workspaces
- `npm run clean`: Clean all workspaces

### Publishing

#### CDK Package

The CDK package is published to GitHub Packages:

```bash
cd cdk
npm version patch  # or minor/major
npm publish --registry=https://npm.pkg.github.com
```

Or use the provided release script:

```bash
./scripts/release.sh
```

To install the published package:

```bash
# Configure registry for @sds9-org scope
npm config set @sds9-org:registry https://npm.pkg.github.com

# Install the package
npm install @sds9-org/cdk
```

#### Terraform Modules

Terraform modules are published via Git tags:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## License

MIT
