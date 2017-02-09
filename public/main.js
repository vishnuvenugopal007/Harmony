/* eslint no-console: "error" */

const playlistCreate = document.querySelector('#playlist-create')

playlistCreate.addEventListener('submit', formSubmitted)

function formSubmitted(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = {
    name: formData.get('playlistName')
  }
  sendJSON(data)
  .then(result => console.log(result))
}

function sendJSON(data) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }
  const result = fetch('/playlists', options)
                    .then(res => res.json())
  return result
}
