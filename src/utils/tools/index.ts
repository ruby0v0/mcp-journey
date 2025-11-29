import fs from 'fs'
import path from 'path';
export function sum({ a, b }: { a: number, b: number }) {
  return a + b;
}

export function createFile({ fileName, content }: { fileName: string, content: string }) {
  try {
    const __filename = path.join(process.cwd(), 'output', fileName);
    const __dirname = path.dirname(__filename);
    fs.mkdirSync(__dirname, { recursive: true })
    fs.writeFileSync(__filename, content);
    return 'File created successfully'
  }
  catch (reason) {
    return reason
  }
}

export const tools = {
  sum,
  createFile
}