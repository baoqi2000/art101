const button = document.getElementById("my-button");
button.addEventListener("click", function() {
  const name = prompt("What is your name?");
  const greeting = document.getElementById("greeting");
  greeting.textContent = "Hello, " + name + "me";
});
