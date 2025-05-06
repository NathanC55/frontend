addEventListener("DOMContentLoaded", async function () {
  document.querySelector("#deleteBtn").addEventListener("click", deleteSong);
  getAllSongs();
});

async function getAllSongs() {
  const response = await fetch("https://recondite-ubiquitous-banon.glitch.me/api/songs/");
  if (response.ok) {
    const songs = await response.json();
    let html = "";
    for (let song of songs) {
      console.log("Song in dropdown:", song._id, song.title);
      html += `<option value = "${song._id}">${song.title}</option>`;
    }
    document.querySelector("#songDropDown").innerHTML = html;
  }
}

async function deleteSong() {
  const songId = document.querySelector("#songDropDown option:checked").value;
  console.log("Deleting song with ID:", songId);
  const response = await fetch("https://recondite-ubiquitous-banon.glitch.me/api/songs/" + songId, {
    method: "DELETE",
  });
  if (response.ok) {
    getAllSongs();
    alert("Song Deleted");
  } else {
    document.querySelector("#error").innerHTML = "Cannot Delete Song";
  }
}
