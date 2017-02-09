const express = require('express')
const app = express()
const knex = require('knex')
const PORT = 3005
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const connect = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'vishnu',
    database: 'sample',
  }
})

app.use(express.static('public'))
app.listen(PORT)

console.log(`Listening on ${PORT} - I can hear you!`)

//User can create an empty playlist

app.get('/playlists/:id', (req, res) => {
  const query = connect('playlists')
    .where(req.params)
  query
    .then((playlists) => res.json(playlists[0]))
})





//User can create a playlist with a single song
app.use(jsonParser)
app.post('/playlists', (req, res) => {
  const query = connect('playlists')
    .insert(req.body)
    .returning([ 'id', 'name'])
  query
    .then((playlists) => res.json(playlists[0]))
})
