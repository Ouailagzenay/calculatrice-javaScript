var aString ;
var a ;
var operation;


function onNumberClick(number){
    if (a == undefined){
       if (aString == undefined) aString="";
       aString += number
    }
    affiche()
}
function onOperationClick(ParaOperation){
    if (operation == undefined){
        operation = ParaOperation
        affiche()
    }
}
function affiche(number){
    let affiche = document.getElementById("affiche");
    affiche.value = "";
    if(aString != undefined){
        affiche.value += aString;
    }
    if (operation != undefined){
        affiche.value += operation
    }
}