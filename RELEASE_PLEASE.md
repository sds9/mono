# Release Please Setup

This monorepo uses [Release Please](https://github.com/googleapis/release-please) for automated versioning and releases.

## How It Works

Release Please automatically:
1. **Analyzes commits** using [Conventional Commits](https://www.conventionalcommits.org/)
2. **Determines version bumps** (patch, minor, major)
3. **Creates release PRs** with updated versions and changelogs
4. **Publishes releases** when PRs are merged

## Workspace Configuration

### CDK Package (`@sds9/cdk`)
- **Release Type**: `node` (follows npm semantic versioning)
- **Publishing**: Automatically published to GitHub Packages
- **Versioning**: Updates `package.json` version
- **Changelog**: Maintained in `cdk/CHANGELOG.md`

### Terraform Modules
- **Release Type**: `terraform-module` 
- **Publishing**: Git tags (e.g., `terraform-example-module-v1.2.3`)
- **Versioning**: Updates `version.tf` file
- **Changelog**: Maintained in `terraform/modules/*/CHANGELOG.md`

## Conventional Commits

Use these commit prefixes to trigger releases:

```bash
# Patch release (1.0.0 → 1.0.1)
fix: resolve S3 bucket naming issue
docs: update installation instructions

# Minor release (1.0.0 → 1.1.0)  
feat: add new Lambda construct
feat(terraform): add RDS module

# Major release (1.0.0 → 2.0.0)
feat!: change bucket construct API
BREAKING CHANGE: removed deprecated parameters

# No release
chore: update dependencies
ci: fix GitHub Actions workflow
```

## Release Process

### 1. Development
```bash
# Make changes with conventional commits
git commit -m "feat(cdk): add DynamoDB construct"
git commit -m "fix(terraform): correct variable validation"
git push origin feature-branch
```

### 2. Merge to Main
When PR is merged to `main`, Release Please automatically:
- Analyzes all commits since last release
- Determines if release is needed
- Creates/updates release PR with version bumps

### 3. Release PR
The release PR will:
- Update `package.json` versions (CDK)
- Update `version.tf` files (Terraform)
- Update `CHANGELOG.md` files
- Show exactly what will be released

### 4. Publish Release
When you merge the release PR:
- **CDK Package**: Published to GitHub Packages
- **Terraform Modules**: Tagged in Git (e.g., `terraform-example-module-v1.2.3`)
- **GitHub Release**: Created with release notes

## Using Released Terraform Modules

Reference modules by Git tags:

```hcl
module "example" {
  source = "git::https://github.com/sds9/mono.git//terraform/modules/example-module?ref=terraform-example-module-v1.2.3"
  
  # Module variables...
}
```

## Using Released CDK Package

Install from GitHub Packages:

```bash
npm install @sds9/cdk@1.2.3
```

## Manual Release (if needed)

```bash
# Trigger release manually
gh workflow run release-please.yml

# Create manual Terraform tag
git tag terraform-example-module-v1.2.3
git push origin terraform-example-module-v1.2.3
```

## Configuration Files

- `.release-please-config.json` - Release Please configuration
- `.release-please-manifest.json` - Current versions
- `.github/workflows/release-please.yml` - Release workflow
