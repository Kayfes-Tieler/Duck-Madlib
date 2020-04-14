import "./style-one.css";
//import "./style-two.css";

document.getElementById("app").innerHTML = `
<div id="header">
  <div id="header-text">
    <h1>Duck MadLib</h1>
  </div>
</div>
<div id="content">
  <div>
    <input id="noun1" type="text" placeholder="Noun">
    <input id="noun2" type="text" placeholder="Noun">
    <input id="noun3plural" type="text" placeholder="Noun (plural)">
    <input id="noun4plural" type="text" placeholder="Noun (plural)">
    <input id="verb1past" type="text" placeholder="Verb (past)">
  </div>
  <div id="generate-container">
  <input id="generate" class="btn" type="button" value="Generate">
  <input id="duck-btn" class="btn" type="button" value="Test Your Luck">
  
            
  </div>
  <div id="result"></div>
  <div id="modal">You Win</div>
  <div id="footer">
    <div id="footer-inner">
      <div>&copy; 2020 Tieler & Jon Inc</div>
      <div id="icons">
        <a href="https://www.youtube.com/channel/UCSFChNH2FUajo0P1JdAFXQg" title="Tieler's Youtube" target="_blank"><div class="socicon-youtube"></div></a>
        <a href="https://github.com/Kayfes-Tieler/duck-madlib" title="Tieler's GitHub" target="_blank" class="socicon-github"></a>
      </div>
    </div>
  </div>
</div>
`;

/* 
  This function 
  generates the madlib
*/
function generateMadLib() {
  // Elements
  let noun1HTML = document.getElementById("noun1");
  let noun2HTML = document.getElementById("noun2");
  let noun3HTML = document.querySelector("#noun3plural");
  let noun4HTML = document.querySelector("#noun4plural");
  let verb1HTML = document.querySelector("#verb1past");

  // Values
  let noun1 = noun1HTML.value;
  let noun2 = noun2HTML.value;
  let noun3plural = noun3HTML.value;
  let noun4plural = noun4HTML.value;
  let verb1past = verb1HTML.value;

  // Compile
  let resultHTML = document.getElementById("result");
  resultHTML.innerHTML = `There once was a
  ${noun1} that walked up to a ${noun2} and said, "Got any ${noun3plural}?"
  The ${noun2} replied, "No, but we have ${noun4plural}". So the ${noun1} said, 
  "That's okay" then the ${noun1} ${verb1past} away.`;
}

let generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", generateMadLib);

// this gets the duck button
const btn = document.querySelector("#duck-btn");

// this function returns a
// random color
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

let timeHandle = null;
btn.onclick = function() {
  if (timeHandle) {
    clearTimeout(timeHandle);
  }
  // get the modal
  let modal = document.querySelector("#modal");

  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  let num = random(15);
  if (num === 1) {
    // you win
    modal.innerText = "You Won";
  } else {
    // you lose
    modal.innerText = "You Lost";
  }
  // show modal
  modal.style.display = "block";

  // hide modal after 10 seconds
  const seconds = 5;
  const time = 1000 * seconds;
  timeHandle = setTimeout(function() {
    // do this after __ seconds
    modal.style.display = "none";
  }, time);

  document.body.style.backgroundColor = rndCol;
};
