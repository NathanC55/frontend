//we are going to make an EV. It will triger when the DOM is loaded

addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("https://beryl-water-dungeon.glitch.me/api/songs");
  const songs = await response.json();

  let html = "";

  for (let song of songs) {
    html += `<li>${song.title} - ${song.artist}</li>`;
  }

  document.querySelector("#addesong").innerHTML += html;
});
