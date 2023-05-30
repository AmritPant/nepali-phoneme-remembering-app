const generateButton = document.querySelector(".btn-main");
const sectionGenerateButton = document.querySelector(
  ".section__generate-letter"
);
const showButton = document.querySelector(".btn-secondary");
const headingSecondary = document.querySelector(".heading-secondary");
const sectionTable = document.querySelector(".section__table");
const placePara = document.querySelector("#place");
const tryPara = document.querySelector("#try");
const vibrationPara = document.querySelector("#vibration");
const powerPara = document.querySelector("#power");

let state = 0; //  0 -> Normal State
// 1 -> Generated but not shown
// 2 -> shown and generated
let randomValue;

const generateRandomLetter = function() {
     randomValue = Math.trunc(Math.random() * 29);
    const letter = phonemeArr[randomValue]?.letter;
    state = 1;
    headingSecondary.textContent = letter;
    generateButton.innerHTML = "New Letter";
    showButton.style.display = "inline";
}

generateButton.addEventListener("click", () => {
  if (state === 0) {
    generateRandomLetter();
} else if (state === 1) {
    generateRandomLetter();
  } else if (state === 2) {
    generateRandomLetter();
    
    state = 1;
    sectionTable.style.display = "none";
    showButton.textContent = "show";
    placePara.textContent = "स्थानका आघारमा: ";
    tryPara.textContent = "प्र्यतनका आघारम: ";
    vibrationPara.textContent = "घोषत्वका आघारम: ";
    powerPara.textContent = "पारणत्वका आघारम: ";}
});

showButton.addEventListener("click", () => {
  if (state == 1) {
    sectionTable.style.display = "block";
    const letterObj = phonemeArr[randomValue];

    phonemeDetails.forEach((el) => {
      if (el[0] === letterObj.place) {
        placePara.textContent = placePara.textContent + el[1];
      }
      if (el[0] === letterObj.try) {
        tryPara.textContent = tryPara.textContent + el[1];
      }
      if (el[0] === letterObj.power) {
        powerPara.textContent = powerPara.textContent + el[1];
      }
      if (el[0] === letterObj.vibration) {
        vibrationPara.textContent = vibrationPara.textContent + el[1];
      }
    });
    console.log(letterObj);

    state = 2;
    showButton.textContent = "hide";
  } else if (state == 2) {
    state = 1;
    sectionTable.style.display = "none";
    showButton.textContent = "show";
    placePara.textContent = "स्थानका आघारमा: ";
    tryPara.textContent = "प्र्यतनका आघारम: ";
    vibrationPara.textContent = "घोषत्वका आघारम: ";
    powerPara.textContent = "पारणत्वका आघारम: ";
  }
});
