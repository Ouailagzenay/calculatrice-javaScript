var aNumber;
var bNumber;
var b ;
var a;
var operation;
var totale;

function onNumberClick(number){
    if (a == undefined){
        if (aNumber == undefined) aNumber = "";
        aNumber += number
    }else{
        if (bNumber == undefined) bNumber="";
        bNumber +=number
    }
    affiche()
}
function onOperationClick(ParaOperation){
    if (operation == undefined){
        operation = ParaOperation
        a =parseFloat(aNumber)
        affiche()
    }
}
function affiche(number){
    let affiche = document.getElementById("affiche")
    affiche.value = "";
    if (a != undefined && b != undefined && operation != undefined){
        affiche.value = number
    }else{
        if ( aNumber != undefined){
            affiche.value += aNumber
        }
        if (operation != undefined){
            affiche.value += operation
        }
        if (bNumber != undefined){
            affiche.value += bNumber
        }
    }
    
}
function equal(){
    a = parseFloat(aNumber)
    b = parseFloat(bNumber)
    totale = some(a , b, operation)
    affiche(totale)

}

function some(ParaA , ParaB , ParaOperation){
    let total = undefined
    switch(ParaOperation){
        case "+" :
            total = ParaA + ParaB
            break;
        case "-" :
             total = ParaA - ParaB
             break;
        default :
         break;
}
return total
}