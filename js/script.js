const exchangeRates = {
    "USD": {
        "EUR": 0.85,
        "GBP": 0.76
    },
    "EUR": {
        "USD": 1.18,
        "GBP": 0.89
    },
    "GBP": {
        "USD": 1.31,
        "EUR": 1.12
    }
};

function convert() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    const result = amount * exchangeRates[fromCurrency][toCurrency];
    
    document.getElementById("output").innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
