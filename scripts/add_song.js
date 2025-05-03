addEventListener("DOMContentLoaded", function () {
  this.document.querySelector("#addBtn").addEventListener("click", addSong);
});

// It has to be async function because we are calling data outside our server

async function addSong() {
  const song = {
    title: document.querySelector("#title").value,
    artist: document.querySelector("#artist").value,
    releaseDate: document.querySelector("#released").value,
    popularity: document.querySelector("#popularity").value,
    genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : [],
  };

  const response = await fetch("https://deep-conscious-pigment.glitch.me/api/songs/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });

  if (response.ok) {
    const results = await response.json();
    alert("Added song with ID of" + results._id);

    document.querySelector("form").reset();
  } else {
    document.querySelector("#error").innerHTML = "Cannot add song";
  }
}
