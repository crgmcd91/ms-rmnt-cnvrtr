
//new//
function convertMeasurement(value, fromUnit, toUnit) {
    const conversionFactors = {
        'inch': { 'inch': 1, 'cm': 2.54, 'm': 0.0254, 'mm': 25.4, 'foot': 1 / 12, 'yard': 1 / 36, 'mile': 1 / 63360, 'km': 0.0000254 },
        'cm': { 'inch': 0.393701, 'cm': 1, 'm': 0.01, 'mm': 10, 'foot': 1 / 30.48, 'yard': 1 / 91.44, 'mile': 1 / 160934, 'km': 0.0001 },
        'm': { 'inch': 39.3701, 'cm': 100, 'm': 1, 'mm': 1000, 'foot': 3.28084, 'yard': 1.09361, 'mile': 1 / 1609, 'km': 0.001 },
        'mm': { 'inch': 0.03937008, 'cm': 0.1, 'm': 0.001, 'mm': 1, 'foot': 0.00328084, 'yard': 0.00109361, 'mile': 1 / 1.609e+6, 'km': 1e-6 },
        'foot': { 'inch': 12, 'cm': 30.48, 'm': 0.3048, 'mm': 304.8, 'foot': 1, 'yard': 1 / 3, 'mile': 1 / 5280, 'km': 0.0003048 },
        'yard': { 'inch': 36, 'cm': 91.44, 'm': 0.9144, 'mm': 914.4, 'foot': 3, 'yard': 1, 'mile': 1 / 1760, 'km': 0.0009144 },
        'mile': { 'inch': 63360, 'cm': 160934, 'm': 1609, 'mm': 1.609e+6, 'foot': 5280, 'yard': 1760, 'mile': 1, 'km': 1.609 },
        'km': { 'inch': 39370.1, 'cm': 100000, 'm': 1000, 'mm': 1e+6, 'foot': 3280.84, 'yard': 1093.61, 'mile': 0.621371, 'km': 1 },
        // Add more conversions as needed...
    };

    if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors)) {
        return 'Invalid units';
    }

    if (isNaN(value)) {
        return 'Invalid value';
    }

    const result = value * conversionFactors[fromUnit][toUnit];
    return result;
}

//new//


// Your conversion trigger function
function convert() {
    // Get user inputs
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    // Perform conversion
    const result = convertMeasurement(value, fromUnit, toUnit);

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `result: ${result}`;
}
