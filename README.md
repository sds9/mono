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

The CDK package (`@sds9-org/cdk`) is automatically published to GitHub Packages when code is pushed to the `main` branch.

##### Setup GitHub Packages

1. **Create the GitHub repository**: Ensure `https://github.com/sds9-org/mono` exists
2. **Enable GitHub Packages**: Go to repository Settings → Actions → General → Workflow permissions → Enable "Read and write permissions"
3. **Configure organization**: Ensure the `sds9-org` organization allows package publishing

##### Manual Publishing

If automatic publishing fails, you can publish manually:

```bash
# Publish to GitHub Packages (recommended)
cd cdk
npm login --registry=https://npm.pkg.github.com
npm publish --registry=https://npm.pkg.github.com

# Or publish to npmjs.org (if you prefer)
npm login --registry=https://registry.npmjs.org
npm publish --registry=https://registry.npmjs.org
```

##### Troubleshooting Publishing

If you see "Permission permission_denied: The requested installation does not exist":

1. **Repository doesn't exist**: Create the repository at `https://github.com/sds9-org/mono`
2. **Organization permissions**: Ensure `sds9-org` organization exists and allows package publishing
3. **Package registry**: Enable GitHub Packages in repository settings
4. **Alternative**: Switch to npmjs.org by updating `publishConfig.registry` in `cdk/package.json`

### Terraform Module Publishing

Terraform modules are published via Git tags. Create a release tag to publish:

```bash
git tag -a terraform/example-module/v1.0.0 -m "Release example-module v1.0.0"
git push origin terraform/example-module/v1.0.0
```

## License

MIT
