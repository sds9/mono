# Architecture Overview

This page demonstrates the architecture of our SDS9 Organization monorepo and shows how to use Mermaid diagrams in Docusaurus.

## Repository Structure

```mermaid
graph TD
    A[SDS9 Mono Repo] --> B[CDK Package]
    A --> C[Terraform Modules]
    A --> D[Documentation]
    
    B --> E[AWS Constructs]
    B --> F[Example Stack]
    
    C --> G[Example Module]
    
    D --> H[Docusaurus Site]
    D --> I[API Documentation]
    D --> J[User Guides]
```

## CDK Architecture Flow

```mermaid
flowchart LR
    A[Developer] --> B[CDK Code]
    B --> C[TypeScript Compilation]
    C --> D[AWS CloudFormation]
    D --> E[AWS Resources]
    
    F[CI/CD Pipeline] --> G[Build & Test]
    G --> H[Publish to NPM]
    H --> I[Deploy Documentation]
```

## Deployment Pipeline

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant GH as GitHub
    participant CI as CI/CD
    participant AWS as AWS
    participant Docs as GitHub Pages
    
    Dev->>GH: Push code
    GH->>CI: Trigger workflow
    CI->>CI: Run tests
    CI->>CI: Build CDK
    CI->>AWS: Deploy infrastructure
    CI->>Docs: Deploy documentation
    Docs-->>Dev: Updated docs available
```

## Technology Stack

```mermaid
mindmap
  root((SDS9 Stack))
    Infrastructure
      AWS CDK
      TypeScript
      CloudFormation
    Development
      GitHub Actions
      Release Please
      ESLint
    Documentation
      Docusaurus
      TypeDoc
      Mermaid
    Testing
      Vitest
      TypeScript
```

## API Documentation

The API documentation is automatically generated from TypeScript code using TypeDoc and integrated into this Docusaurus site. You can find it in the [API Reference section](/docs/api/).

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Run tests: `npm test`
5. Start the docs locally: `npm run start --workspace=docs`

For more detailed information, check out the [tutorial section](/docs/intro).
