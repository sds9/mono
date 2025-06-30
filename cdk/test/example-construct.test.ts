import { describe, it, expect } from 'vitest';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { ExampleConstruct } from '../src/constructs';

describe('ExampleConstruct', () => {
  it('should create an S3 bucket with correct name', () => {
    // Setup
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    
    // Act
    new ExampleConstruct(stack, 'TestConstruct', {
      namePrefix: 'test-prefix',
      environment: 'test'
    });
    
    // Assert
    const template = Template.fromStack(stack);
    
    // Verify S3 bucket is created
    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'test-prefix-example-bucket'
    });
    
    // Verify that there is at least one S3 bucket
    template.resourceCountIs('AWS::S3::Bucket', 1);
  });

  it('should handle optional environment parameter', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    
    new ExampleConstruct(stack, 'TestConstruct', {
      namePrefix: 'test-prefix'
    });
    
    const template = Template.fromStack(stack);
    
    // Should still create the bucket
    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'test-prefix-example-bucket'
    });
    
    // Verify that there is exactly one S3 bucket
    template.resourceCountIs('AWS::S3::Bucket', 1);
  });
});
