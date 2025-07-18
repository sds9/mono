# SDS9 Organization Monorepo

This monorepo contains CDK constructs and Terraform modules.

## 📚 Documentation

For comprehensive documentation, visit our [documentation site](https://sds9.github.io/mono/).

## CDK Package

The CDK package (`@sds9/cdk`) is automatically published to GitHub Packages when code is pushed to the `main` branch.

#### Setup GitHub Packages

1. **Create the GitHub repository**: Ensure `https://github.com/sds9/mono` exists
2. **Enable GitHub Packages**: Go to repository Settings → Actions → General → Workflow permissions → Enable "Read and write permissions"
3. **Configure organization**: Ensure the `sds9` organization allows package publishing Organization infrastructure.

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

1. **Repository doesn't exist**: Create the repository at `https://github.com/sds9/mono`
2. **Organization permissions**: Ensure `sds9` organization exists and allows package publishing
3. **Package registry**: Enable GitHub Packages in repository settings
4. **Alternative**: Switch to npmjs.org by updating `publishConfig.registry` in `cdk/package.json`

### Terraform Module Publishing

Terraform modules are published via Git tags. Create a release tag to publish:

```bash
git tag -a terraform/example-module/v1.0.0 -m "Release example-module v1.0.0"
git push origin terraform/example-module/v1.0.0
```

## Releasing

This project uses [Release Please](https://github.com/googleapis/release-please) for automated versioning and releases.

### Automated Releases

1. **Use Conventional Commits**: Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification
2. **Merge to main**: Release Please analyzes commits and creates release PRs
3. **Merge release PR**: Automatically publishes packages and creates Git tags

### Release Types

```bash
# Examples of conventional commits:
git commit -m "feat(cdk): add new Lambda construct"     # Minor release
git commit -m "fix(terraform): correct variable type"   # Patch release  
git commit -m "feat!: breaking API change"              # Major release
```

### Published Artifacts

- **CDK Package**: Published to GitHub Packages as `@sds9/cdk`
- **Terraform Modules**: Tagged with `terraform-<module>-v<version>`

See [RELEASE_PLEASE.md](./RELEASE_PLEASE.md) for detailed documentation.

## License

MIT
