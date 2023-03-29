const calculateBtn = document.getElementById("calculateBtn");
const resultElement = document.getElementById("result");

calculateBtn.addEventListener("click", function() {
  const weight = document.getElementById("weightInput").value;
  const height = document.getElementById("heightInput").value;
  let bmi = (weight / (height * height)).toFixed(2);
  (bmi == "NaN")? bmi='0': bmi;
  resultElement.innerHTML = `Your BMI is <p>${bmi}</p>`;
});
