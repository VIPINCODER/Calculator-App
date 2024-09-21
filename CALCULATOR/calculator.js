let display = document.getElementById('display');

function num(value) {
    display.value += value;
}

function del() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}

function cal() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
