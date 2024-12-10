document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.getElementById("calculate-score");
  const scoreInputs = document.querySelectorAll(".score-input");
  const totalScoreElement = document.getElementById("total-score");

  // Function to calculate the total score
  calculateButton.addEventListener("click", () => {
    let total = 0;
    scoreInputs.forEach(input => {
      const value = parseInt(input.value) || 0;
      total += value;
    });
    totalScoreElement.textContent = total;
  });
});
