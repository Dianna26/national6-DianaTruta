console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

const listOfBreeds = document.getElementById("breeds");

function getData() {
  fetch("https://dog.ceo/api/breeds/list/all")
  .then((r) => r.json())
  .then(renderArticle);
}


function renderArticle(listOfBreeds) {
  listOfBreeds =  Object.keys(listOfBreeds.message);
  for (let breedName of listOfBreeds) {
    renderBreedName(breedName);
  }
}

getData();

function renderBreedName(breedName) {
  breedNameGlobal = breedName;
  const breedNameParagraph = document.createElement("p");
  breedNameParagraph.innerText = breedName;
  breedNameParagraph.setAttribute("id", breedName);
  breedNameParagraph.addEventListener("click", renderDogImage);
  document.getElementById("breeds").appendChild(breedNameParagraph);
}

function renderDogImage(event) {
  event.currentTarget.style.textDecoration = "underline";
  fetch("https://dog.ceo/api/breed/"+ event.currentTarget.innerText +"/images/random/5")
  .then((r) => r.json())
  .then(displayImage);
}

function displayImage(result) {
  let breedImage = document.getElementById("breed-image");
  breedImage.setAttribute("src", result.message[0]);
  localStorage.setItem("breedImages", JSON.stringify(result.message));
  localStorage.setItem("breedImageIndex", 0);
}

document.getElementById("forward").addEventListener("click", function() {
  let images = JSON.parse(localStorage.getItem("breedImages"));
  let index = localStorage.getItem("breedImageIndex");
  let breedImage = document.getElementById("breed-image");
  index = parseInt(index, 10);
  index = index + 1;

  if (index < images.length){
    localStorage.setItem("breedImageIndex", index)
    breedImage.setAttribute("src", images[index]);
  }
})

document.getElementById("backward").addEventListener("click", function() {
  let images = JSON.parse(localStorage.getItem("breedImages"));
  let index = localStorage.getItem("breedImageIndex");
  let breedImage = document.getElementById("breed-image");

  index = parseInt(index, 10);
  index = index - 1;
  
  if (index >= 0){
    localStorage.setItem("breedImageIndex", index)
    breedImage.setAttribute("src", images[index]);
  }
})