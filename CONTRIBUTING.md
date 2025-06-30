# Contributing to SDS9 Organization Monorepo

Thank you for your interest in contributing to our infrastructure code!

## Development Setup

1. **Prerequisites**
   - Node.js >= 23.0.0 (use `nvm use` if you have nvm)
   - npm >= 9.0.0
   - AWS CLI configured (for CDK development)
   - Terraform >= 1.0 (for Terraform module development)

2. **Clone and Install**
   ```bash
   git clone https://github.com/sds9-org/mono.git
   cd mono
   npm install
   ```

## Project Structure

- `cdk/` - CDK constructs and stacks (npm package)
- `terraform/` - Terraform modules
- `.github/` - GitHub Actions workflows

## Development Workflow

### CDK Development

1. Navigate to the CDK directory:
   ```bash
   cd cdk
   ```

2. Make your changes to constructs or stacks

3. Build and test:
   ```bash
   npm run build
   npm test
   ```

4. Test deployment (optional):
   ```bash
   npm run synth
   ```

### Terraform Development

1. Navigate to the module directory:
   ```bash
   cd terraform/modules/your-module
   ```

2. Make your changes

3. Validate the module:
   ```bash
   terraform init
   terraform validate
   terraform fmt
   ```

   Or use the provided script:
   ```bash
   ./scripts/terraform-fmt.sh
   ```

4. Test with examples:
   ```bash
   cd ../../examples/your-module
   terraform init
   terraform plan
   ```

## Testing

### CDK Testing
- Unit tests are located in `cdk/test/`
- Run tests with `npm test`
- Tests use Jest and CDK assertions

### Terraform Testing
- Example usage is in `terraform/examples/`
- Each module should have working examples
- Use `terraform plan` to validate examples

## Code Standards

### CDK
- Follow TypeScript best practices
- Use meaningful names for constructs and properties
- Include JSDoc comments for public APIs
- Export all public constructs from index files

### Terraform
- Follow Terraform best practices
- Use consistent variable and output naming
- Include descriptions for all variables and outputs
- Use validation blocks where appropriate

## Submitting Changes

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the development workflow above
   - Ensure all tests pass
   - Update documentation as needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Use the PR template
   - Include tests and documentation
   - Request review from maintainers

## Versioning

### CDK Package
- Uses semantic versioning (semver)
- Version bumps trigger GitHub Packages publishing
- Update version in `cdk/package.json`
- Published to GitHub Packages registry

### Terraform Modules
- Use Git tags for versioning
- Follow semver: `v1.0.0`, `v1.1.0`, etc.
- Reference specific versions in usage

## Release Process

1. **CDK Package**
   ```bash
   cd cdk
   npm version patch  # or minor/major
   npm publish --registry=https://npm.pkg.github.com
   git push origin main --tags
   ```

2. **Terraform Modules**
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

## Getting Help

- Create an issue for bugs or feature requests
- Use discussions for questions
- Contact maintainers for urgent issues
