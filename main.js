// Magic 8 Ball by GD

// Button Event List
document.getElementById("btn").addEventListener("click", btnClicked);

// Input
function btnClicked() {
  let Question = document.getElementById("Question").value;
  console.log(Question);
  // Output
  if (Question === "Does a magic 8 ball actually work?") {
    document.getElementById("output").innerHTML = "How dare you doubt me!";
  } else if (Question === "Is JavaScript awesome?") {
    document.getElementById("output").innerHTML = "Of Course!";
  } else if (Question === "") {
    document.getElementById("output").innerHTML = "Please ask a question...";
  } else {
    let randNum = Math.random();
    if (randNum < 0.2) {
      document.getElementById("output").innerHTML = "Without a Doubt.";
    } else if (randNum < 0.4) {
      document.getElementById("output").innerHTML = "As I see it, yes.";
    } else if (randNum < 0.6) {
      document.getElementById("output").innerHTML =
        "Concentrate and ask again.";
    } else if (randNum < 0.8) {
      document.getElementById("output").innerHTML = "Don't count on it.";
    } else {
      document.getElementById("output").innerHTML = "Outlook not so good.";
    }
  }
}
