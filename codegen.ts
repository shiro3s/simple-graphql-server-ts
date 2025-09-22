
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema/schema.graphql",
  generates: {
    "src/types/gen/graphql.ts": {
      plugins: [
        "typescript", 
        "typescript-resolvers"
      ]
    }
  }
};

export default config;
