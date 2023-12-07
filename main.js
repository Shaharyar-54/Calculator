let input = document.getElementById('input');

function view(value) {
    if (value === 'x') {
        input.value += '*'; 
    } else if (value === '÷') {
        input.value += '/'; 
    } else {
        input.value += value;
    }
}

function clr() {
    input.value = '';
}

function compute() {
    let expression = input.value;
    let result = '';

    try {
        result = eval(expression);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            result = 'Error';
        }
    } catch (error) {
        result = 'Error';
    }

    input.value = result;
}
function toggleSign() {
    var display = document.getElementById('input');
    var currentValue = parseFloat(display.value);
    display.value = currentValue * -1;
}

function removeLastCharacter() {
    var display = document.getElementById('input');
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}