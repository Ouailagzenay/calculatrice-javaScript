// Variables
let num1,num2,solution,operation;
let xString, yString;



// Métier
function Calculer(num1,num2,operation){
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = num1 + num2;
            break;
        case '-':
            _solution = num1-num2;
                break;
        default:
            break;
    }
    return _solution;
}


// Présentation
function ClickNumber(number){
    if(num1 == undefined){
        if(xString == undefined) xString = '';
        xString += number;
    } 
    else {
        if(yString == undefined) yString = '';
        yString += number;
    } 

    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(num1 != undefined && num2 != undefined && operation != undefined){

        afficheur.value = number;
    }else{
        if(xString != undefined)
        afficheur.value += xString 
        if(operation != undefined)
            afficheur.value += operation     
        if(yString != undefined)
            afficheur.value += yString 

        }
 
   
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        num1 = parseFloat(xString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}

function Egale(){
    // num1 = parseFloat(xString);
    num2 = parseFloat(yString);
    solution = Calculer(num1,num2,operation);
    Afficher(solution);
}

function Init(){
    num1 = undefined;
    num2 = undefined;
    xString = undefined;
    yString = undefined;
    operation = undefined;
    let afficheur = document.getElementById("afficheur");
    
    afficheur.value = "";
}