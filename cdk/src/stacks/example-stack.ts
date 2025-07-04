import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ExampleConstruct } from '../constructs';

export interface ExampleStackProps extends cdk.StackProps {
  /**
   * The environment name (dev, staging, prod)
   */
  readonly environment: string;
  
  /**
   * The name prefix for resources
   */
  readonly namePrefix: string;
}

/**
 * Example CDK stack for SDS9 Organization
 * 
 * This stack demonstrates how to compose multiple constructs into a deployable unit.
 * 
 * ## Stack Architecture
 * 
 * ```mermaid
 * graph TB
 *     subgraph "AWS Account"
 *         subgraph "ExampleStack"
 *             A[Example Construct] --> B[S3 Bucket]
 *             A --> C[CloudWatch Logs]
 *             
 *             D[Stack Outputs] --> E[Bucket Name]
 *             D --> F[Bucket ARN]
 *         end
 *         
 *         subgraph "AWS Services"
 *             B --> G[Amazon S3]
 *             C --> H[CloudWatch]
 *         end
 *     end
 * ```
 * 
 * ## Deployment Process
 * 
 * ```mermaid
 * flowchart LR
 *     A[CDK Deploy] --> B[Synthesize Template]
 *     B --> C[CloudFormation Stack]
 *     C --> D[Create Resources]
 *     D --> E[Stack Complete]
 *     
 *     F[Environment Config] --> A
 *     G[Name Prefix] --> A
 * ```
 * 
 * @example
 * ```typescript
 * const stack = new ExampleStack(app, 'MyExampleStack', {
 *   env: { account: '123456789012', region: 'us-east-1' },
 *   environment: 'production',
 *   namePrefix: 'my-app'
 * });
 * ```
 */
export class ExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ExampleStackProps) {
    super(scope, id, props);

    // Create the example construct
    new ExampleConstruct(this, 'ExampleConstruct', {
      namePrefix: props.namePrefix,
      environment: props.environment,
    });

    // Stack-level outputs
    new cdk.CfnOutput(this, 'StackName', {
      value: this.stackName,
      description: 'The name of this stack',
    });
  }
}
