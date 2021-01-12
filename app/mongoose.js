const mongoose = require('mongoose')
const logger = require('./logger')

module.exports = (app) => {
  mongoose.connect(
    app.get('mongodb'),
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
    .then(() => {
      console.log(`Connected to the database at ${process.env.MUSLY_API_DB_URL}`)
    })
    .catch((err) => {
      logger.error(err)
      process.exit(1)
    })

  app.set('mongooseClient', mongoose)
}
