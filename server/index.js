import path from 'path'
import express from 'express'
import { MongoClient } from 'mongodb'
import template from '../template'
import devBundle from './devBundle'

const app = express()
if (process.env.NODE_ENV === 'development') {
  devBundle.compile(app)
}

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
  res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})

try {
  const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSetup'
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      return
    }
    console.log("Connected successfully to mongodb server")
    db.close()
  })
} catch (e) {
  console.log(e)
}