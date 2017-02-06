const express = require('express')
const app = express()
const PORT = 3005
const playlist = {
  name: 'Monday Morning Vibes',
  id : 1,
}


//User can create a playlist

app.get('/newPlaylist', (req, res) => {
  res.send( {
    name: playlist.name,
    id: playlist.id
  })
})

app.listen(PORT)

console.log(`Listening on ${PORT} - I can hear you!`)

app.post('/newPlaylist', (req, res) => {
  res.send({
    name: 'playlist.name',
    id: playlist.id,
    song : {
        artist: 'Childish Gambino',
        song: 'Me and Your Mama',
        album: 'Awaken, My Love!',
        length: '6:19',
      }

  })
})
