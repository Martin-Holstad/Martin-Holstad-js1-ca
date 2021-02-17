const url = document.querySelector(
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
);

async function games() {
  const response = await fetch(url);

  const results = await response.json();

  const cocktails = results.list;

  console.log(cocktails);
}
