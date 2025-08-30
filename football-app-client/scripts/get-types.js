import { generateEndpoints } from '@rtk-query/codegen-openapi';
import { generate } from 'openapi-typescript-codegen';
import path from 'path';
import fs from 'fs';

async function main() {
  try {
    console.log("⏳ Generating types from http://localhost:8080/swagger-json...");

    const outputDir = path.resolve(process.cwd(), 'src/api');
    const endpointsFile = path.resolve(outputDir, 'generated-api.ts');

    await generate({
      input: 'http://localhost:8080/swagger-json',
      output: outputDir,
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
      outputFile: endpointsFile,
      apiFile: './base-api.ts',
      apiImport: 'baseApi',
      exportName: 'generatedApi',
      hooks: true
    });

    // 🔧 Fix import path to always be './base-api'
    let content = fs.readFileSync(endpointsFile, 'utf8');
    content = content.replace(
      /import\s+\{[^}]+\}\s+from\s+["'][^"']+["'];?/,
      `import { baseApi as api } from "./base-api";`
    );
    fs.writeFileSync(endpointsFile, content);

    console.log("✅ Done!");
  } catch (err) {
    console.error("❌ Generation failed:", err);
  }
}

main();
