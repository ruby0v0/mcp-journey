import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const serverPath = path.join(__dirname, 'server.ts')
const child = spawn("ts-node", [serverPath]);

child.stdout.on('data', (data) => {
  console.log(data.toString())
})

const msgs = ['你好', '你好吗？', '你妈妈好吗？']

msgs.forEach((msg, index) => {
  setTimeout(() => {
    console.log('------>', msg)
    child.stdin.write(msg + '\n')
  }, index * 1000);
})