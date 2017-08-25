var playlist = {
  queen: 'Bohemian Rhapsody'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}
var playlist = {
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}
