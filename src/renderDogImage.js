import {displayImage} from './displayImage.js';

export function renderDogImage(event) {
    event.currentTarget.style.textDecoration = "underline";
    fetch("https://dog.ceo/api/breed/" + event.currentTarget.innerText + "/images/random/5")
      .then((r) => r.json())
      .then(displayImage);
  }