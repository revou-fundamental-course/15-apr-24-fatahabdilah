document.getElementById('temperatureForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    // Validate temperature
    if (isNaN(temperature)) {
        alert("Masukkan suhu yang valid.");
        return;
    }

    // Convert temperature
    let result, explanation;
    if (unit === 'celsius') {
        result = (temperature * 9 / 5) + 32;
        explanation = `${temperature} Celsius dikonversi menjadi Fahrenheit dengan rumus (${temperature} × 9/5) + 32 = ${result.toFixed(2)}.`;
        document.getElementById('result').innerHTML = `${temperature} Celsius sama dengan ${result.toFixed(2)} Fahrenheit.`;
    } else {
        result = (temperature - 32) * 5 / 9;
        explanation = `${temperature} Fahrenheit dikonversi menjadi Celsius dengan rumus (${temperature} - 32) × 5/9 = ${result.toFixed(2)}.`;
        document.getElementById('result').innerHTML = `${temperature} Fahrenheit sama dengan ${result.toFixed(2)} Celsius.`;
    }

    document.getElementById('explanation').innerHTML = explanation;
});

document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('temperatureForm').reset();
    document.getElementById('result').innerHTML = '';
    document.getElementById('explanation').innerHTML = '';
});
