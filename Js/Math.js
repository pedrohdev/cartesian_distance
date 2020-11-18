
const App = {}

App.calculate = (xA,yA,xB,yB) => {

    return Math.sqrt( Math.pow(xB-xA,2) + Math.pow(yB-yA,2) )

}

let button = document.querySelector('#button')

button.onclick = function() {

    var xA = document.querySelector('#xA').value;
    var yA = document.querySelector('#yA').value;
    
    var xB = document.querySelector('#xB').value;
    var yB = document.querySelector('#yB').value;

    var resultDisplay = document.querySelector('#result'); 

    if(xA != '' && yA != '' && xB != '' && yB != ''){
        resultDisplay.innerHTML = `<div class="notification is-link">A distância arredondada entre os dois pontos é de <strong>${Math.round(App.calculate(xA,yA,xB,yB))}</strong> e a distância original é de <strong>${App.calculate(xA,yA,xB,yB)}</strong> </div>`;
        

    }else{

        resultDisplay.innerHTML = '<div class="notification is-warning"><strong>Campos Vazios!</strong></div>';

    } 

    
}

