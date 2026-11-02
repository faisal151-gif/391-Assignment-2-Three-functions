
const fortunes = [
  "True wisdom comes not from knowledge, but from understanding.",
  "A small step taken today saves a long walk tomorrow.",
  "Your hard work is about to pay off. Keep going!",
  "The bug you are hunting is closer than you think.",
  "A pleasant surprise is waiting for you this week.",
  "Patience turns a difficult problem into an easy lesson.",
  "Good things come to those who refresh the page.",
  "An old friend will bring you good news soon.",
  "Curiosity is the engine of every great idea.",
  "Today is a good day to learn something new.",
  "Your kindness will return to you in unexpected ways.",
  "Every expert was once a beginner."
];


/* Find the HTML element we want to change, using its id */
const fortuneBox = document.getElementById("fortune-box");


/* Pick a random fortune and put it in the box */
function showRandomFortune() {

  const randomIndex = Math.floor(Math.random() * fortunes.length);

  fortuneBox.textContent = fortunes[randomIndex];
}


/*Change the look of the box*/
function changeFortuneStyle(textColor, backgroundColor, borderColor, fontSize, fontFamily) {
  fortuneBox.style.color = textColor;                 // font colour of the text
  fortuneBox.style.backgroundColor = backgroundColor; // background colour of the box
  fortuneBox.style.borderColor = borderColor;         // border colour of the box
  fortuneBox.style.fontSize = fontSize;               // font size (changes slightly)
  fortuneBox.style.fontFamily = fontFamily;           // font family
}


/*Connect each button to the function above*/
document.getElementById("green-button").addEventListener("click", function () {
  changeFortuneStyle("#1e4d12", "#e3f4dc", "#4e8c34", "20px", "Georgia, serif");
});

document.getElementById("yellow-button").addEventListener("click", function () {
  changeFortuneStyle("#c00000", "#ffd966", "#538135", "19px", "Calibri, 'Segoe UI', sans-serif");
});

document.getElementById("blue-button").addEventListener("click", function () {
  changeFortuneStyle("#1f3864", "#ddebf7", "#2e75b6", "18px", "'Trebuchet MS', sans-serif");
});

document.getElementById("orange-button").addEventListener("click", function () {
  changeFortuneStyle("#843c0c", "#fbe5d6", "#c55a11", "17px", "'Courier New', monospace");
});


/*When the page has finished loading, show a random fortune*/
window.addEventListener("load", showRandomFortune);
