// Store the initial text of the h1 element in a variable
const originalText = document.querySelector("h1").innerText;

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.querySelector("h1").innerText = "Text Changed!";
  });

document.getElementById("resetButton").addEventListener("click", function () {
  // Use the stored original text to reset the h1 element
  document.querySelector("h1").innerText = originalText;
});
