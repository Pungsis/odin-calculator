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

let first,
 second,
 operator,
 isPressed = false,
 resultado,
 valor;

d.addEventListener("click", (e) => {
 if (e.target.value === "sign") {
  // como cambio de - a " "? esto no sirve !!!
  if (isPressed) {
   $result2.prepend("-");
  }

  if (!isPressed) {
   console.log($result2.textContent);
   $result2.textContent = $result2.textContent.replace("-", "");
   $result2.prepend("");
  }
  isPressed ? (isPressed = false) : (isPressed = true);

  console.log(isPressed);
 }

 if (e.target.classList.contains("number")) {
  $result2.textContent += e.target.value;
 }

 if (
  e.target.classList.contains("operator") &&
  $result2.textContent != ""
 ) {
  isPressed
   ? (first = parseFloat($result2.textContent) * -1)
   : (first = parseFloat($result2.textContent));
  console.log(first);

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
  if (
   $result2.textContent.length == 0 &&
   $result.textContent.length > 0
  ) {
   console.log("hola");
   $result.textContent = "Error: missing argument";
  }
  if (
   $result2.textContent.length > 0 &&
   $result.textContent.length > 0
  ) {
   second = parseFloat($result2.textContent);
   $result.textContent = `${$result.textContent} ${second} =`;
   $result2.textContent = "";
   resultado = operate(window[operator], first, second);
   $result2.textContent = resultado;
   first = resultado;
  }
 }

 if (e.target.value === "AC") {
  $result2.textContent = "";
  $result.textContent = "";
  first = undefined;
  second = undefined;
 }
});
