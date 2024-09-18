document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            console.log(value);
            display.value += value;
        });
    });

    equalsButton.addEventListener('click', () => {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
    });

    clearButton.addEventListener('click', () => {
        display.value = '';
    });
});
