process.stdin.setEncoding('utf-8')

process.stdin.on('data', (data) => {
  const str = data.toString().replace(/[?？]/g, '').replace(/我/g, '你').replace(/你/g, '我').replace(/吗/g, '')
  const res = `AI：${str}\n`
  process.stdout.write(res)
})