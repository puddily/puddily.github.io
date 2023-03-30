let x;
let y;
let operator;



const equalsButton = document.querySelector(".equals")
equalsButton.addEventListener("click", calculateResult)

const numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", selectNumber)
})

const operatorButtons = document.querySelectorAll(".operator")
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", selectOperator)
})

const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", clear)
function clear(){
    x = undefined;
    y = undefined;
    operator = undefined;
    updateResultText();
}

function selectNumber(e){
    number = e.target.value
    if(!operator){
        if(!x){
            x = number
        }
        else{
            if(x.length<=10){
                x += number
            }
        }
    }
    else{
        if(!y){
            y = number
        }
        else{
            if(y.length<=10){
                y += number
            }
        }
    }
    updateResultText();
}

function selectOperator(e){
    if(!x){
        resultText.textContent = "Pick a number first :)"
    }
    else{
        if(operator === undefined){
            operator = e.target.value;
            updateResultText();
        }
        else{
            if(y){
                calculateResult()
            }
            operator = e.target.value;
            updateResultText();
        }
    }
}

resultText = document.querySelector("#result-text")
function updateResultText(){
    resultText.textContent = `${x ? x : ''}${operator ? " " + operator : ''}${y ? " " + y : ''}`;
}


function calculateResult(){
    if(x && y){
        numberX = parseFloat(x)
        numberY = parseFloat(y)
        if(operator==="+"){
            x = numberX+numberY;
            x = x.toString()
            y = undefined;
            operator = undefined;
        }
        if(operator==="-"){
            x = numberX-numberY;
            x = x.toString()
            y = undefined;
            operator = undefined;
        }
        if(operator==="*"){
            x = numberX*numberY;
            x = x.toString()
            y = undefined;
            operator = undefined;
        }
        updateResultText();
        
        if(operator==="/"){
            if(numberY===0){
                x = undefined;
                y = undefined;
                operator = undefined;
                resultText.textContent = "Nice try (:"
            }
            else{
                x = numberX/numberY;
                x = x.toString()
                y = undefined;
                operator = undefined;
                updateResultText();
            }
        }
    }
    else{
        updateResultText();
    }
}


function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
