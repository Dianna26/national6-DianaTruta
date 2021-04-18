import _ from 'lodash';
import './style.css';
import {renderArticle} from './renderArticle.js';

console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/dist/login.html";
}
let logout = document.getElementById("logout");
if (logout) {
  logout.addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    window.location = "/dist/";
  });
}

const listOfBreeds = document.getElementById("breeds");

function getData() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((r) => r.json())
    .then(renderArticle);
}


getData();

document.getElementById("forward").addEventListener("click", function () {
  let images = JSON.parse(localStorage.getItem("breedImages"));
  let index = localStorage.getItem("breedImageIndex");
  let breedImage = document.getElementById("breed-image");
  index = parseInt(index, 10);
  index = index + 1;

  if (index < images.length) {
    localStorage.setItem("breedImageIndex", index)
    breedImage.setAttribute("src", images[index]);
  }
})

document.getElementById("backward").addEventListener("click", function () {
  let images = JSON.parse(localStorage.getItem("breedImages"));
  let index = localStorage.getItem("breedImageIndex");
  let breedImage = document.getElementById("breed-image");

  index = parseInt(index, 10);
  index = index - 1;

  if (index >= 0) {
    localStorage.setItem("breedImageIndex", index)
    breedImage.setAttribute("src", images[index]);
  }
})