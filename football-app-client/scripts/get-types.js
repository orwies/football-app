import { generateEndpoints } from '@rtk-query/codegen-openapi';
import { generate } from 'openapi-typescript-codegen';

async function main() {
  try {
    console.log("⏳ Generating types from http://localhost:8080/swagger-json...");
    await generate({
      input: 'http://localhost:8080/swagger-json',
      output: 'C:\\Users\\User\\coding_or\\code\\football-app\\football-app-client\\src\\api\\',
      httpClient: 'axios',
      useOptions: true,
      useUnionTypes: true,
      exportModels: true,
      exportSchemas: false,
      exportServices: false,
      exportCore: false,
    });
    await generateEndpoints({
      schemaFile: 'http://localhost:8080/swagger-json',
      outputFile: 'C:\\Users\\User\\coding_or\\code\\football-app\\football-app-client\\src\\api\\generated-api.ts',
      apiFile: 'C:\\Users\\User\\coding_or\\code\\football-app\\football-app-client\\src\\api\\base-api.ts',
      apiImport: 'baseApi',
      hooks: true
    })
    console.log("✅ Done!");
  } catch (err) {
    console.error("❌ Generation failed:", err);
  }
}

main()
