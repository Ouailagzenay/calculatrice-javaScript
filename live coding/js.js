var aString ;
var bString ;
var a ;
var b;
var operation;
var totale



function onNumberClick(number){
    if (a == undefined){
       if (aString == undefined) aString="";
       aString += number
    }else{
        if (bString == undefined) bString =""
        bString += number
    }
    affiche()
}
function onOperationClick(ParaOperation){
    if (operation == undefined){
        operation = ParaOperation
        a = parseFloat(aString)
        affiche()
    }
}
function affiche(number){
    let affiche = document.getElementById("affiche");
    affiche.value = "";
    if(a != undefined && b != undefined && operation != undefined){
        affiche.value = number
    }
    else{
        if(aString != undefined){
            affiche.value += aString;
        }
        if (operation != undefined){
            affiche.value += operation
        }
        if (bString != undefined){
            affiche.value += bString
        }
    }
}
function equal(){
    
    b = parseFloat(bString);
    totale = some(a , b ,operation)
    affiche(totale)
}
function some (a ,b , operation){
    let total = undefined
    switch(operation){
        case '+' :
            total = a + b
            break;
        case '-' :
            total = a - b
            break;
        default :
        break ;
    }
    return total
}

