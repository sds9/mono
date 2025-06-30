#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ExampleStack } from './stacks';

const app = new cdk.App();

// Get configuration from context or environment
const environment = app.node.tryGetContext('environment') || process.env.ENVIRONMENT || 'dev';
const namePrefix = app.node.tryGetContext('namePrefix') || process.env.NAME_PREFIX || 'sds9';

new ExampleStack(app, `SDS9-${environment}-ExampleStack`, {
  environment,
  namePrefix,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
  },
});
