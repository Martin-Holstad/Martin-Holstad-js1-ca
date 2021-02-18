const detailContainer = document.querySelector(".details-container");

const loader = document.querySelector(".loader");

const idString = document.location.search;

const newUrl = new URLSearchParams(idString);

const id = newUrl.get("id");

console.log(id);

const url = "https://finalspaceapi.com/api/v0/character/" + id;

console.log(url);

async function characterDetails() {
  const response = await fetch(url);

  const details = await response.json();

  loader.innerHTML = "";

  newHtml(details);
}

characterDetails();

function newHtml(details) {
  detailContainer.innerHTML = `<div>
                                <img class="image" src="${details.img_url}" alt="${details.name}"> 
                                </div>
                                <div class="details-text"> 
                                <h1> ${details.name} </h1>
                                <p> <strong> Abilities: </strong> ${details.abilities} </p> 
                                <p> <strong> Alias: </strong> ${details.alias} </p> 
                                <p> <strong> Gender: </strong> ${details.gender} </p> 
                                <p> <strong> Hair: </strong> ${details.hair} </p> 
                                <p> <strong> Species: </strong> ${details.species} </p>
                                <p> <strong> Status: </strong> ${details.status} </p> 
                                </div>`;
}
