var aString ;
var bString ;
var a ;
var b;
var operation;



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