import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ExampleStack } from '../src/stacks';

describe('ExampleStack', () => {
  test('creates S3 bucket', () => {
    const app = new cdk.App();
    const stack = new ExampleStack(app, 'TestStack', {
      environment: 'test',
      namePrefix: 'test-sds9',
    });

    const template = Template.fromStack(stack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'test-sds9-example-bucket',
    });
  });
});
