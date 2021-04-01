// document.addEventListener("click", () => {
//   console.log("click");
// });

// setTimeout(() => {
//   console.log("time end");
// }, 1000);

// const interval = setInterval(() => {
//   console.log("ping");
// }, 2000);

// clearInterval(interval);

// we need to call "secondStep" only after "firstStep" ended
// function thirdStep() {
//   setTimeout(() => {
//     console.log("End of third step");
//   }, 500);
// }

// function firstStep() {
//   setTimeout(() => {
//     console.log("End of first step");
//     secondStep();
//   }, 2000);
// }

// function secondStep() {
//   setTimeout(() => {
//     console.log("End of second step");
//     thirdStep();
//   }, 1000);
// }

// firstStep();

// Promises

function firstStep(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("End of first step");

      resolve(number + 1);
    }, 2000);
  });
}

function secondStep(param) {
  console.log(param);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("End of second step");
      if (param % 2 === 1) {
        reject("We want even param");
      } else {
        resolve(param / 2);
      }
    }, 1000);
  });
}

function thirdStep(finalValue) {
  setTimeout(() => {
    console.log("End of third step");
    console.log("Final Value", finalValue);
  }, 500);
}

firstStep(1)
  .then(secondStep)
  .then(thirdStep)
  .catch((error) => {
    alert(`Promise chain has the following error: ${error}`);
  });

// fetch example
fetch("https://imple-json-server-scit.herokuapp.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });