document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("noButton");
  const yesButton = document.getElementById("yesButton");

  // Initial scale values
  let noButtonScale = 1; // Initial size
  let yesButtonScale = 1; // Initial size

  // Event listener for "No" button
  noButton.addEventListener("click", function () {
    // Decrease the scale of the "No" button
    noButtonScale = Math.max(noButtonScale - 0.1, 0.4); // Prevent it from becoming too small
    noButton.style.transform = `scale(${noButtonScale})`;

    // Increase the scale of the "Yes" button
    yesButtonScale = Math.min(yesButtonScale + 0.1, 2); // Prevent it from becoming too big
    yesButton.style.transform = `scale(${yesButtonScale})`;

    // Optional: Adjust font size to make the growth more noticeable
    yesButton.style.fontSize = `${yesButtonScale}em`;
  });

  // Event listener for "Yes" button
  yesButton.addEventListener("click", function () {
    alert("Yay Swathi! I love you :) 💖");
    window.location.href = 'loveletter.html';
  });
});
