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
 * 
 * This construct demonstrates how to create reusable AWS infrastructure components
 * using the AWS CDK with TypeScript.
 * 
 * ## Architecture
 * 
 * ```mermaid
 * graph TB
 *     A[ExampleConstruct] --> B[S3 Bucket]
 *     A --> C[Common Tags]
 *     
 *     B --> D[Auto Delete Objects]
 *     B --> E[Removal Policy: DESTROY]
 *     
 *     C --> F[Project: SDS9]
 *     C --> G[Environment Tag]
 * ```
 * 
 * ## Resource Flow
 * 
 * ```mermaid
 * sequenceDiagram
 *     participant Dev as Developer
 *     participant CDK as CDK App
 *     participant CF as CloudFormation
 *     participant S3 as S3 Service
 *     
 *     Dev->>CDK: Deploy stack
 *     CDK->>CF: Generate template
 *     CF->>S3: Create bucket
 *     S3-->>CF: Bucket created
 *     CF-->>CDK: Stack deployed
 *     CDK-->>Dev: Deployment complete
 * ```
 * 
 * @example
 * ```typescript
 * const exampleConstruct = new ExampleConstruct(this, 'MyExample', {
 *   namePrefix: 'my-app',
 *   environment: 'production'
 * });
 * ```
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
