
const myResult = document.getElementById('myResult');





function button() {
    const value = parseFloat(document.getElementById('input_value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    

    let result;

    if (fromUnit === toUnit) {
        result = value;
    } else if (fromUnit === 'C') {
        result = toUnit === "D" ? (value * 9 / 5) + 32 : value + 273.15;
    } else if (fromUnit === "D") {
        result = toUnit === "C" ? (value - 32) * 5 / 9 : ((value - 32) * 5 / 9) + 273.15;
    } else if (fromUnit === "K") {
        result = toUnit === "C" ? value - 273.15 : value - 273.15 * 9 / 5 + 32;
    }

    myResult.value = ` ${value} °${fromUnit} is ${result.toFixed(2)} °${toUnit}`;

}