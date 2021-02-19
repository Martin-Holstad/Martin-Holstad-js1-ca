const url = "https://finalspaceapi.com/api/v0/character";

const loader = document.querySelector(".loader");

const infoContainer = document.querySelector(".info-container");

const errorContainer = document.querySelector(".error");

async function finalSpace() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    loader.innerHTML = "";

    const characterInfo = results;

    console.log(characterInfo);

    characterInfo.forEach(function (characters) {
      infoContainer.innerHTML += `<a class="anchor" href="../details.html?id=${characters.id}?name=${characters.name}" 
                                <div  class="info" > 
                                <p class="name"> ${characters.name}</p>
                                <img class="image" src="${characters.img_url}" alt="${characters.name}">
                                <p class="gender"> <strong> Gender: </strong> ${characters.gender} </p>
                                <p class="status"> <strong> Status: </strong> ${characters.status} </p> 
                                </div> </a>`;
    });
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = message("An error occured", error);
  }
}

finalSpace();
