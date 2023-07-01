function convertTemperature(inputField) {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");

  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = parseFloat(fahrenheitInput.value);

  if (inputField === "celsius" && !isNaN(celsius)) {
    fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  } else if (inputField === "fahrenheit" && !isNaN(fahrenheit)) {
    celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
  }
}