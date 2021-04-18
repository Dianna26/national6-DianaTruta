export function displayImage(result) {
    let breedImage = document.getElementById("breed-image");
    breedImage.setAttribute("src", result.message[0]);
    localStorage.setItem("breedImages", JSON.stringify(result.message));
    localStorage.setItem("breedImageIndex", 0);
  }

