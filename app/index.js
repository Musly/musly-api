const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })
const logger = require('./logger')
const app = require('./app')

const port = app.get('port')
const server = app.listen(port)

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise ', p, reason)
})

server.on('listening', () => {
  logger.info('Musly API started on http://%s:%d', app.get('host'), port)
})
