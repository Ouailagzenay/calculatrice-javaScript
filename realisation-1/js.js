var aString;
var bString;
var operation;

var a;
var b;

var total;

function onClickNumber(number) {

    if (a == undefined) {
        if (aString == undefined) {
            aString = ""
        }
        aString += number

    } else {
        if (bString == undefined) {
            bString = ""
        }
        bString += number
    }


    // if (aString == undefined) {
    //     aString = number
    // } else {
    //     bString = number
    // }

    display()
}

function display(number) {
    var display = document.getElementById("display")
    display.value = ''

    if (a != undefined && b != undefined && operation != undefined) {
        display.value = number
    } else {
        if (aString != undefined) {
            display.value += aString
        }
        if (operation != undefined) {
            display.value += operation
        }
        if (bString != undefined) {
            display.value += bString
        }
    }

}


function onClickOperation(operationParm) {
    if (operation == undefined) {
        operation = operationParm
        a = parseFloat(aString)
    }

    display()
}

function equal() {
    a = parseFloat(aString);
    b = parseFloat(bString);

    total = calculate(a, b, operation)

    display(total)

}

function calculate(aPara, bPara, operationPara) {
    var _total = undefined

    switch (operationPara) {
        case "+":
            _total = aPara + bPara
            break;
        case "-":
            _total = aPara - bPara
            break;
        case "*":
            _total = aPara * bPara
            break;
        case "/":
            _total = aPara / bPara
            break;

        default:
            break;
    }

    return _total
}

function resetValues() {
    aString = undefined;
    bString = undefined;
    a = undefined;
    b = undefined;
    operation = undefined;
    let display = document.getElementById("display");

    display.value = "";
}