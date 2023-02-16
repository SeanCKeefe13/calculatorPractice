const buttons = document.querySelectorAll('.calc-button');
const display = document.querySelector('.current-val');
const totalDisplay = document.querySelector('.total');

buttons.forEach(button => button.addEventListener('click', updateDisplay))

    let currentValue = '';
function updateDisplay(e){
    const targetedValue = e.target.innerText;
    // console.log(targetedValue);
    if(targetedValue === '0' || targetedValue === '1' || targetedValue === '2' || targetedValue === '3' || targetedValue === '4' || targetedValue === '5' || targetedValue === '6' || targetedValue === '7' || targetedValue === '8' || targetedValue === '9' || targetedValue === '.'){
        display.innerText += targetedValue;
        currentValue += targetedValue;
        totalDisplay.innerText = math.evaluate(currentValue);
    }
    if(targetedValue === 'C'){
        display.innerText = '';
        currentValue = '';
        totalDisplay.innerText = '';
    }
    if(e.currentTarget.id === 'erase'){
        display.innerText = '';
        currentValue = currentValue.slice(0, currentValue.length - 1);
        totalDisplay.innerText = '';
    }
    if(targetedValue === ')'){
        display.innerText += ')';
        currentValue += ')';
        totalDisplay.innerText = math.evaluate(currentValue);
    }
    if(targetedValue === '+'){
        currentValue += `${targetedValue}`;
        display.innerText += '+';
    }
    if(targetedValue === '-'){
        currentValue += `${targetedValue}`;
        display.innerText += ' - ';
    }
    if(targetedValue === '÷'){
        currentValue += `/`;
        display.innerText += '÷';
    }
    if(targetedValue === 'x'){
        currentValue += ` * `;
        display.innerText += 'x';
    }
    if(targetedValue === '%'){
        currentValue += `${targetedValue}`;
        display.innerText += '%';
        totalDisplay.innerText = math.evaluate(currentValue);
    }
    if(targetedValue === '√x'){
        currentValue += `sqrt(`;
        display.innerText += '√(';
        totalDisplay.innerText = math.evaluate(currentValue);
    }
    if(targetedValue === 'x^2'){
        currentValue += `^2`;
        display.innerText += '^2';
        totalDisplay.innerText = math.evaluate(currentValue);
    }
    // if(targetedValue === '1/x'){
    //     currentValue += ` ${targetedValue} `;
    // }
    if (e.currentTarget.id === "negative") {
        const value = math.evaluate(currentValue) * -1;
        currentValue = String(value);
        display.innerText = currentValue;
      }
    if(targetedValue === '='){
    display.innerText = math.evaluate(currentValue);    
    totalDisplay.innerText = '';
    }
    console.log(currentValue)
}