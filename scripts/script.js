//eventlistener,triggers when DOM is loaded
addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("https://deep-conscious-pigment.glitch.me/api/songs/");
  const songs = await response.json();

  let html = "";
  for (let song of songs) {
    let songID = song._id;
    //to make song title link, slot ${song.title} in place of "Details"
    html += `<li>${song.title} - ${song.artist} - ${song.username} || <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit Song</a></li>`;
  }
  document.querySelector("#list_of_songs").innerHTML = html;
});
