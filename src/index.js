import "./styles.css";

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
    <input id="generate" type="button" value="Generate">
  </div>
  <div id="result"></div>
  <div id="footer">
    <div id="footer-inner">
      <div>&copy; 2020 Tieler & Jon</div>
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
