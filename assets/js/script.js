"use strict";

///////////////////////
// Selecting Elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".userResult img");
const cpuResult = document.querySelector(".cpuResult img");
const resultText = document.querySelector(".resultText");
const optionImages = document.querySelectorAll(".optionImg");

///////////////////////////////////////////////
// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    // Initial Stage
    userResult.src = cpuResult.src = `/assets/images/rock.png`;
    resultText.textContent = `Wait...`;

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });

    // Onclicking button start animation
    gameContainer.classList.add("start");

    // Set a timeout to delay the result calclulations
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get Source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      // Generate a random number /W 0 & 2
      let randomNum = Math.floor(Math.random() * 3);

      // Array of CPU images option
      let cpuImages = [
        `/assets/images/rock.png`,
        `/assets/images/paper.png`,
        `/assets/images/scissors.png`,
      ];

      // Set CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNum];

      // Assign a letter value to CPU option
      let cpuValue = [`R`, `P`, `S`][randomNum];

      // Assign a letter value to User clicked option
      let userValue = [`R`, `P`, `S`][index];

      // Object of all outComes
      // FirstValue (User) & SecondValue (CPU)
      let outComes = {
        RR: `Draw`,
        PP: `Draw`,
        SS: `Draw`,
        RS: `User`,
        PR: `User`,
        SP: `User`,
        RP: `CPU`,
        PS: `CPU`,
        SR: `CPU`,
      };

      // Look up to outcome value based onn user & cpu options
      let outComeValue = outComes[userValue + cpuValue];

      // Display text result
      resultText.textContent =
        userValue === cpuValue ? `Match Draw` : `${outComeValue} Won!`;
    }, 2750);
  });
});
