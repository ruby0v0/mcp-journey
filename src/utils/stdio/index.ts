import fs from 'fs'
export function sum({ a, b }: { a: number, b: number }) {
  return a + b;
}

export function createFile({ fileName, content }: { fileName: string, content: string }) {
  try {
    fs.writeFileSync(fileName, content);
    return 'File created successfully'
  }
  catch (reason) {
    return reason
  }
}