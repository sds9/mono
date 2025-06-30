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
