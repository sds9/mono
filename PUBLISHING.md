# Publishing Configuration

## GitHub Packages (Default)

The package is currently configured to publish to GitHub Packages. This requires:

1. A GitHub repository at `https://github.com/sds9/mono`
2. GitHub Packages enabled in the repository
3. Proper organization permissions for `sds9`

## Alternative: npmjs.org

If you prefer to publish to npmjs.org instead, update the `cdk/package.json`:

```json
{
  "name": "@sds9/cdk",
  "publishConfig": {
    "registry": "https://registry.npmjs.org",
    "access": "public"
  }
}
```

Then update the GitHub Actions workflow in `.github/workflows/ci.yml`:

```yaml
- name: Use Node.js from .nvmrc
  uses: actions/setup-node@v4
  with:
    node-version-file: .nvmrc
    cache: npm
    registry-url: https://registry.npmjs.org

- name: Publish to npm
  run: |
    cd cdk
    npm publish
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

And add your npm token as a repository secret named `NPM_TOKEN`.

## Manual Publishing Commands

```bash
# To GitHub Packages
cd cdk
npm login --registry=https://npm.pkg.github.com
npm publish --registry=https://npm.pkg.github.com

# To npmjs.org
cd cdk
npm login --registry=https://registry.npmjs.org
npm publish --registry=https://registry.npmjs.org
```
