import { renderBreedName } from './renderBreedName.js';

export function renderArticle(listOfBreeds) {
  console.log("lalaa");
    listOfBreeds = Object.keys(listOfBreeds.message);
    for (let breedName of listOfBreeds) {
      renderBreedName(breedName);
    }
  }