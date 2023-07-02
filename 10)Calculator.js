let screen = document.getElementById('screen');
// console.log(screen);
let buttons = document.querySelectorAll('button');
let finalValue = '';
for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            finalValue += buttonText;
            screen.value = finalValue;
        }
        else if (buttonText == 'C') {
            finalValue = "";
            screen.value = finalValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(finalValue);
        }
        else {
            finalValue += buttonText;
            screen.value = finalValue;
        }

    })
}