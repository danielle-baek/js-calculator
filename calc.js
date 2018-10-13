var strDisplay = ''
var answer = ''

document.addEventListener('click', buttonClick)

function display(str, answer) {
  document.getElementById('lineOne').innerHTML = str
  document.getElementById('lineTwo').innerHTML = answer
}

function calc(n2, op) {  
  switch (op) {
    case '+' :
      answer = parseFloat(answer) + parseFloat(n2)
      break;
    case '-' :
      answer = answer - n2
      break;
    case '/' :
      answer = answer / n2
      break;
    case '*' :
      answer = answer * n2
      break;
  }
}

function reset(){
  strDisplay = ''
        numbers = []
        operations = []
        answer = ''
        display(strDisplay, "")
}

function buttonClick(e) {
  // when AC button is clicked
    if (e.target.id === 'clear') {
        reset()
    }
    
  // when operation button is clicked
    else if (e.target.className.includes('operator')) {
      var len = strDisplay.length
      var op = e.target.innerHTML
     
      if (strDisplay != '') {      
        //if 'equals' is clicked, reset and make last answer as first number
        if (strDisplay[len - 2] == "="){
          var ans = answer
          reset()
          strDisplay += ans
        }
        
        //if operation is clicked twice, change to last one
        if (strDisplay[len - 1] == " "){
          strDisplay = strDisplay.substring(0, len - 2) + op + " "
        }
        else {
          strDisplay += " " + op + " " 
        }
          
          //calculate
        var tempArray = strDisplay.split(" ")
        var aLen =  tempArray.length
        if (aLen > 3) {
          if (answer == "")
            answer = tempArray[0]
          calc(tempArray[aLen - 3], tempArray[aLen - 4])          
        }  
        display(strDisplay, answer)
      }
    }
  
  // when number button is clicked
    else if (e.target.type === 'button') {
      if (strDisplay[strDisplay.length - 2] == "=")
        reset()
      strDisplay += e.target.innerHTML 
        display(strDisplay, answer)
    }
}