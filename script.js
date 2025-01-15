document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("noButton");
  const yesButton = document.getElementById("yesButton");

  
  let noButtonScale = 1; 
  let yesButtonScale = 1; 
  
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes flashRed {
      0% { background-color: red; }
      100% { background-color: initial; }
    }
  `;
  document.head.appendChild(style);

  //"No" button
  noButton.addEventListener("click", function () {
    // Decrease the scale of the "No" button
    noButtonScale = Math.max(noButtonScale - 0.1, 0.4); // Prevent it from becoming too small
    noButton.style.transform = `scale(${noButtonScale})`;

    // Increase the size of the "Yes" button
    yesButtonScale = Math.min(yesButtonScale + 0.1, 2); // Prevent it from becoming too big
    yesButton.style.transform = `scale(${yesButtonScale})`;


    yesButton.style.fontSize = `${yesButtonScale}em`;

    // Flash the "No" button red with animation
    noButton.style.animation = "flashRed 0.3s";
    setTimeout(() => {
      noButton.style.animation = ""; 
    }, 300);
  });

  //"Yes" button
  yesButton.addEventListener("click", function () {
    <script src="confetti.js"></script>
    alert("Yay Swathi! I love you :) 💖");
    window.location.href = 'loveletter.html';
  });
});
