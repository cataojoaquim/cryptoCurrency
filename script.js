var amount = document.getElementById("amount");
var from = document.getElementById("from");
var to = document.getElementById("to");
var convert = document.getElementById("convert");
var result = document.getElementById("result");

var rates = {
    "DOGE": {
        "DOGE": 1,
        "ETH": 0.000029,
        "BTC": 0.0000009
    },
    "ETH": {
        "DOGE": 34383.32,
        "ETH": 1,
        "BTC": 0.0308
    },
    "BTC": {
        "DOGE": 11111111.11,
        "ETH": 32.47,
        "BTC": 1
    }
};

function convertValue() {
    var amountValue = parseFloat(amount.value);
    var fromValue = from.value;
    var toValue = to.value;

    if (isNaN(amountValue) || amountValue < 0) {
        alert("Por favor, digite um valor válido");
        return;
    }

    var convertedValue = amountValue * rates[fromValue][toValue];

    result.innerHTML = amountValue + " " + fromValue + " = " + convertedValue.toFixed(2) + " " + toValue;
}

convert.addEventListener("click", convertValue);