//GRADE CALUCLATOR BY HARSHWEEN MULTANI - (PROOMPT SIDE)

// INUPUT
let clientSide1 = +prompt("Client-Side Scripting 1:");
let structuredProgramming1 = +prompt("Structured Programming 1:");
let structuredProgramming2 = +prompt("Structured Programming 2:");
let clientSide2 = +prompt("Client-Side Scripting 2:");
let projectA = +prompt("Project A:");
//PROCESS
let total =
  clientSide1 +
  structuredProgramming1 +
  structuredProgramming2 +
  clientSide2 +
  projectA;

// OUTPUT
alert(
  `${clientSide1} + ${structuredProgramming1} + ${structuredProgramming2} + ${clientSide2} + ${projectA} / 5 = ${
    total / 5
  }`
);
// -----------------------------------------------------------------------------------------------------------------------------------

// GRADE CALCULATOR BY HARSHWEEN MULTANI

// EVENT LISTENER
document.getElementById("btn").addEventListener("click", orderPercentage);
// EVENT FUNCTION
function orderPercentage() {
  // INUPUT
  let css1 = +document.getElementById("css1").value;
  let sp1 = +document.getElementById("sp1").value;
  let sp2 = +document.getElementById("sp2").value;
  let css2 = +document.getElementById("css2").value;
  let pa = +document.getElementById("pa").value;
  //PROCESS
  let finalGrade = (css1 + sp1 + sp2 + css2 + pa) / 5;

  // OUTPUT
  document.getElementById("sentance").innerHTML = finalGrade;
}
