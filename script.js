const d = document,
 $result = d.querySelector(".result"),
 $result2 = d.querySelector(".result-2");

function add(a, b) {
 return a + b;
}
function subtract(a, b) {
 return a - b;
}
function multiply(a, b) {
 return a * b;
}
function divide(a, b) {
 return a / b;
}

const operate = (operator, a, b) => operator(a, b);

let first, second, operator;

d.addEventListener("click", (e) => {
 if (e.target.classList.contains("number")) {
  $result2.textContent += e.target.value;
 }

 if (
  e.target.classList.contains("operator") &&
  $result2.textContent != ""
 ) {
  first = parseInt($result2.textContent);
  operator = e.target.id;
  $result.textContent = `${$result2.textContent} ${e.target.value}`;
  $result2.textContent = "";
 }

 if (
  e.target.classList.contains("operator") &&
  $result2.textContent === "" &&
  e.target.id !== operator
 ) {
  operator = e.target.id;
  $result.textContent = `${first} ${e.target.value}`;
 }

 if (e.target.classList.contains("igual")) {
  second = parseInt($result2.textContent);
  $result.textContent = `${$result.textContent} ${second} =`;
  $result2.textContent = "";
  $result2.textContent = operate(window[operator], first, second);
 }
});
