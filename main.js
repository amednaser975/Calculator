
document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('body'), {
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
  }, false);
  

var answerInput = document.getElementById("Answer");
var currentResult = 0;
var allOperation = "";
var currentOperator;
var oldValue;


function EnterNumber(value) {
    
    allOperation += `${value}`;
    if(answerInput.value == "")
        answerInput.value = value;
    else if(currentOperator && answerInput.value != "" && answerInput.value != oldValue)
        answerInput.value += value;
    else if(currentOperator)
        answerInput.value = value;
    else if (answerInput.value != "")
        answerInput.value += value;
}
function EnterOperator(operator) {
    allOperation += `${operator};`;
    oldValue = parseFloat(answerInput.value);
    currentOperator = operator;
}
function EnterEqual() {

    var operationParts;
    var currentResult;
    do {

        operationParts = allOperation.split(";");
        if(isNaN(operationParts[0].charAt(operationParts[0].length-1)))
        {
            if(operationParts[0].charAt(operationParts[0].length-1) == "*")
            {
                currentResult = parseFloat(operationParts[0]) * parseFloat(operationParts[1]);
                allOperation = allOperation.replace(operationParts[0]+";"+parseFloat(operationParts[1]), currentResult);
            } 
            else if(operationParts[0].charAt(operationParts[0].length-1) == "-")
            {
                currentResult = parseFloat(operationParts[0]) - parseFloat(operationParts[1]);
                allOperation = allOperation.replace(operationParts[0]+";"+parseFloat(operationParts[1]), currentResult);
            } 
            else if(operationParts[0].charAt(operationParts[0].length-1) == "+")
            {
                currentResult = parseFloat(operationParts[0]) + parseFloat(operationParts[1]);
                allOperation = allOperation.replace(operationParts[0]+";"+parseFloat(operationParts[1]), currentResult);
            }
            else if(operationParts[0].charAt(operationParts[0].length-1) == "/")
            {
                currentResult = parseFloat(operationParts[0]) / parseFloat(operationParts[1]);
                allOperation = allOperation.replace(operationParts[0]+";"+parseFloat(operationParts[1]), currentResult+";");
            }
        }
        
    } while(operationParts.length != 1);

    console.log(parseFloat(allOperation))
    answerInput.value = parseFloat(allOperation);
}

function EnterClear() {
    answerInput.value = "";
    allOperation = "";
}
