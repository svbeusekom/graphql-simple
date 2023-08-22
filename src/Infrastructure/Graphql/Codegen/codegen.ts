
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/Infrastructure/Graphql/schema.graphql",
  generates: {
    "src/Infrastructure/Graphql/Generated/generated.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
