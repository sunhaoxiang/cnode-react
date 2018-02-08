const fs = require('fs')
const path = require('path')
const express = require('express')
const ReactSSR = require('react-dom/server')

const isDev = process.env.NODE_eNV === 'development'

const app = express()

if (!isDev) {
  const serverEntry = require('../dist/serverEntry.js').default
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))
  app.get('*', (req, res) => {
    const appString = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('<!-- app -->', appString))
  })
} else {
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.listen(3333, () => {
  console.log('Server listening on port 3333!');
});
