function calculateWindChill(temperature, windSpeed) {
  return (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)))
}

const temperature = parseFloat(document.getElementById('temperature').textContent)
const windSpeed = parseFloat(document.getElementById('wind').textContent)

if (temperature <= 50 && windSpeed > 3) {
  document.getElementById('windChill').innerHTML = calculateWindChill(temperature, windSpeed).toFixed(2) + "°C"
} else {
  document.getElementById('windChill').innerHTML = "N/A"
}
