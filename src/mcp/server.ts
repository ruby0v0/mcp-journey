import type { McpRequest, McpResponse } from './protocol.ts'
import { sum, createFile } from '../utils/stdio/index.ts'

process.stdin.setEncoding('utf-8')

// process.stdin.on('data', (data) => {
//   const str = data.toString().replace(/[?？]/g, '').replace(/我/g, '你').replace(/你/g, '我').replace(/吗/g, '')
//   const res = `AI：${str}\n`
//   process.stdout.write(res)
// })

process.stdin.on('data', (data) => {
  let result: any
  const json: McpRequest = JSON.parse(data.toString())
  const method = json.method
  const params = json.params
  if (method === 'sum') {
    result = sum(params)
  }
  else if (method === 'createFile') {
    result = createFile(params)
  }

  const res: McpResponse = {
    jsonrpc: '2.0',
    id: json.id,
    result,
  }
  process.stdout.write(JSON.stringify(res) + '\n')
})

// { "jsonrpc": "2.0", "id": 1, "method": "sum", "params": { "a": 10, "b": 2 } }
// { "jsonrpc": "2.0", "id": 1, "method": "createFile", "params": { "fileName": "test.txt", "content": "hello mcp" } }