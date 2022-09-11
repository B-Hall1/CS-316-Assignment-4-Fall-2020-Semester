var InputsArr;
var result;
var operation;

function generateResult() {
    operation = document.getElementById('operation_type').value;
    let user_inputs = document.getElementById('input_values').value;
    InputsArr = user_inputs.split(/[ ,]+/);
    InputsArr = InputsArr.filter(function (e) { return e });
    if (InputsArr.length == 0) {
        alert('Please enter the values');
        return
    }
    if (InputsArr.length > 20) {
        alert('Only twenty inputs are allowed');
        return;
    }
    switch (operation) {
        case 'minimum':
            minimum();
            break;
        case 'maximum':
            maximum();
            break;
        case 'sum':
            sum();
            break;
        case 'product':
            product();
            break;
        case 'average':
            average();
            break;
        case 'standard_deviation':
            standard_deviation();
            break;
        case 'median':
            median();
            break;
        case 'sort':
            sort();
            break;
        case 'reverse_sort':
            reverse_sort();
            break;
        default:
            alert('Please select the operation from the dropdown')
    }

}

function verifyInput(e) {
    var lastChar = e.substr(e.length - 1);
    if (isNaN(lastChar) && lastChar != ',') {
        alert('Only Intergers, Comma and spaces are allowed');
        document.querySelector("#input_values").value = e.slice(0, -1);
        return;
    }
    let user_inputs = document.getElementById('input_values').value;
    user_inputs = user_inputs.split(/[ ,]+/);
    InputsArr = user_inputs.filter(function (e) { return e });
    var intVal = InputsArr[InputsArr.length - 1];

    if (findDigitAmount(intVal) > 2) {
        alert('Only two digits number is allowed');
        document.querySelector("#input_values").value = e.slice(0, -1);
        return;
    }
}

function minimum() {
    result = Math.min(...InputsArr);
    printResult();
}
function maximum() {
    result = Math.max(...InputsArr);
    printResult();
}

function sum() {
    result = InputsArr.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);
    printResult();
}
function product() {
    result = InputsArr.reduce((a, b) => parseInt(a) * parseInt(b));
    printResult();
}
function average() {
    result = InputsArr.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0) / InputsArr.length;
    printResult();
}

function standard_deviation() {
    const n = InputsArr.length;
    const mean = InputsArr.reduce((a, b) => parseInt(a) + parseInt(b)) / n;
    result = Math.sqrt(InputsArr.map(x => Math.pow(x - mean, 2)).reduce((a, b) => parseInt(a) + parseInt(b)) / n);
    printResult();
}
function median() {
    var len = InputsArr.length;
    const arrSort = InputsArr.sort();
    const mid = Math.ceil(len / 2);
    result = len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
    printResult();
}

function sort() {
    result = InputsArr.sort((a, b) => parseInt(a) - parseInt(b));
    printResult();
}

function reverse_sort() {
    result = InputsArr.reverse();
    printResult();
}

function printResult() {
    document.getElementById('output').innerHTML = result;
    document.getElementById('operation_name').innerHTML = operation;
}

function findDigitAmount(num) {

    var positiveNumber = Math.sign(parseInt(num)) * parseInt(num);
    var lengthNumber = positiveNumber.toString();

    return lengthNumber.length;
}