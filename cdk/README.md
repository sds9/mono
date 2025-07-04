# @sds9/cdk

CDK constructs and stacks for SDS9 Organization infrastructure.

## Installation

First, configure npm to use GitHub Packages for the @sds9 scope:

```bash
npm config set @sds9:registry https://npm.pkg.github.com
```

Then install the package:

```bash
npm install @sds9/cdk
```

### Authentication

To install from GitHub Packages, you'll need to authenticate with a GitHub personal access token:

```bash
npm login --scope=@sds9 --registry=https://npm.pkg.github.com
```

Or set your token in `.npmrc`:

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Usage

```typescript
import { ExampleStack, ExampleConstruct } from '@sds9/cdk';
import * as cdk from 'aws-cdk-lib';

const app = new cdk.App();

new ExampleStack(app, 'MyStack', {
  environment: 'dev',
  namePrefix: 'my-project',
});
```

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

#### Watch Mode

```bash
npm run test:watch
```

#### UI Mode

```bash
npm run test:ui
```

### Deploying

```bash
npm run deploy
```

## Available Constructs

- `ExampleConstruct`: Example construct that creates an S3 bucket

## Available Stacks

- `ExampleStack`: Example stack that demonstrates usage of constructs
