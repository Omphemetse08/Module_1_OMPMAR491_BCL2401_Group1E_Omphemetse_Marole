function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  let result = ""; // Placeholder for validation result

  let pattern = /^pet_[A-Za-z0-9]+$/;

  if (pattern.test(input)) {
    result = 'Valid Syntax <span class="valid"></span>';
  } else {
    result = 'Invalid Syntax <span class="invalid"></span>';
  }

  document.getElementById("result").innerHTML = result;
}
