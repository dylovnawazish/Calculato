function getInputValues() {
    var input1 = document.getElementById('input1');
    var value1 = Number(input1.value);

    var input2 = document.getElementById('input2');
    var value2 = Number(input2.value);

    return{
        value1,
        value2
    }
}

function isError(value1, value2) {
    removeErrors();
    if (value1 == '') {
        var input1 = document.getElementById('input1');
        input1.classList.add('error');
        return true;
    }
    if (value2 == '') {
        var input2 = document.getElementById('input2');
        input2.classList.add('error');
        return true;
    }

}
function removeErrors() {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    input1.classList.remove('error');
    input2.classList.remove('error');
}
function add() {
    var { value1, value2 } = getInputValues();
    var error = isError(value1, value2);
    if (error)  {
        return;
    }
    var sum = value1 + value2;

    var valueDiv = document.getElementById('value');
    valueDiv.innerHTML = sum;

    valueDiv.document.write() = sum;

}
function subtract() {
    var { value1, value2 } = getInputValues();
    var error = isError(value1, value2);
    if (error) {
        return;
    }
    var subtract = value2 - value1;

    var valueDiv = document.getElementById('value');
    valueDiv.innerHTML = subtract;

    valueDiv.document.write() = subtract;
}
function product() {
    var { value1, value2 } = getInputValues();
    var error = isError(value1, value2);
    if (error) {
        return;
    }
    var product = value1 * value2;

    var valueDiv = document.getElementById('value');
    valueDiv.innerHTML = product;

    valueDiv.documnet.write() = product;
}
function division() {
    var { value1, value2 } = getInputValues();
    var error = isError(value1, value2);
    if (error) {
        return;
    }
    var division = value2 / value1;

    var valueDiv = document.getElementById('value');
    valueDiv.innerHTML = division;

    valueDiv.document.write() = division;
}

