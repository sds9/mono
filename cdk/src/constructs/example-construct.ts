import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';

export interface ExampleConstructProps {
  /**
   * The name prefix for resources created by this construct
   */
  readonly namePrefix: string;
  
  /**
   * Environment tag for all resources
   */
  readonly environment?: string;
}

/**
 * Example CDK construct for SDS9 Organization
 */
export class ExampleConstruct extends Construct {
  constructor(scope: Construct, id: string, props: ExampleConstructProps) {
    super(scope, id);

    // Add common tags to all resources
    cdk.Tags.of(this).add('Project', 'SDS9');
    if (props.environment) {
      cdk.Tags.of(this).add('Environment', props.environment);
    }

    // Example: Create an S3 bucket
    new cdk.aws_s3.Bucket(this, 'ExampleBucket', {
      bucketName: `${props.namePrefix}-example-bucket`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }
}
