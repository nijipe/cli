import * as fs from 'fs';
import * as path from 'path';

export async function init() {
  console.log("Initializing Nijipe project...");
  
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, 'NIJIPE_API_KEY=\nNIJIPE_WEBHOOK_SECRET=\n');
    console.log("Created .env file with Nijipe variables.");
  } else {
    console.log(".env file already exists. Skipping creation.");
  }

  console.log("Project initialized. Don't forget to run `npm install @nijipe/sdk`.");
}
