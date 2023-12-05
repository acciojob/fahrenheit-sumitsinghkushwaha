function toFahrenheit(celsius) {
  // Check if the input temperature is within the valid range
  if (celsius < -273.15 || celsius > 1.8e9) {
    // Return an error message or handle it according to your requirements
    return "Invalid temperature value";
  }

  // Convert Celsius to Fahrenheit using the formula: F = (C * 9/5) + 32
  const fahrenheit = (celsius * 9/5) + 32;

  // Return the Fahrenheit temperature with two decimal points of precision
  return fahrenheit.toFixed(2);
}

// Example usage:
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
