const buttons = document.querySelectorAll('.calc-button');
const display = document.querySelector('.display');

buttons.forEach(button => button.addEventListener('click', updateDisplay))


function updateDisplay(e){
    const targetedValue = e.target.innerText;
    if(targetedValue === '0' || targetedValue === '1' || targetedValue === '2' || targetedValue === '3' || targetedValue === '4' || targetedValue === '5' || targetedValue === '6' || targetedValue === '7' || targetedValue === '8' || targetedValue === '9' || targetedValue === '.'){
        display.innerText += targetedValue;
    }
}