var aString ;
var a ;


function onNumberClick(number){
    if (a == undefined){
       if (aString == undefined) aString="";
       aString += number
    }
    affiche()
}
function affiche(number){
    let affiche = document.getElementById("affiche");
    affiche.value = "";
    if(aString != undefined){
        affiche.value += aString;
    }
}