const formatMoney = (value) => {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return "$" + value;
}

const formatSplit = (value) => {
    if(value === "1") return value + " person";
    return value + " people";
}

const update = () => {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;
    
    let tipValue = bill * (tipPercent / 100);
    let tipEach = tipValue / split;
    let billEach = (bill + tipValue) / split;
    
    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalValue").innerHTML = formatMoney(bill + tipValue);
    document.getElementById("splitValue").innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = formatMoney(billEach);
    document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
}

let container = document.getElementById("container");
container.addEventListener("input", update);