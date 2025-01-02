document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("noButton");
  const yesButton = document.getElementById("yesButton");

  // Event listener for "No" button
  noButton.addEventListener("click", function () {
    noButton.style.transform = "scale(0.8)"; // Shrinks the "No" button
    yesButton.style.transform = "scale(1.2)"; // Grows the "Yes" button
    yesButton.style.fontSize = "2em"; // Optional: increase font size of "Yes"
  });

  // Event listener for "Yes" button (optional)
  yesButton.addEventListener("click", function () {
    alert("Yay Swathi! I love you :) 💖");
    window.location.href = 'loveletter.html';
  });
});
