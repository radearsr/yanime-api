const inputIdAnime = document.querySelector("#form-add-src > div:nth-child(1) > input");
const currentEpisodeElement = document.querySelector("#episode")

inputIdAnime.addEventListener("change", () => {
  const animeId = inputIdAnime.value;
  console.log(animeId);
  fetch(`http://localhost:5000/dashboard/animes/${animeId}/current`)
  .then((response) => response.json())
  .then((result) => {
    currentEpisodeElement.value = result.data.episode;
  })
  .catch((error) => {
    console.log(error);
  })
});