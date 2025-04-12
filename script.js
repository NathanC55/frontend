//we are going to make an EV. It will triger when the DOM is loaded

addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("https://fabulous-destiny-canid.glitch.me");
  const songs = await response.json();

  let html = "";

  for (let song of songs) {
    html += `<li>${song.title} - ${song.artist}</li>`;
  }

  document.querySelector("#addesong").innerHTML += html;
});
