import {renderDogImage} from './renderDogImage';

let breedNameGlobal;
export function renderBreedName(breedName) {
    breedNameGlobal = breedName;
    const breedNameParagraph = document.createElement("p");
    breedNameParagraph.innerText = breedName;
    breedNameParagraph.setAttribute("id", breedName);
    breedNameParagraph.addEventListener("click", renderDogImage);
    document.getElementById("breeds").appendChild(breedNameParagraph);
  }