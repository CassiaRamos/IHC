

function valida_campo (campo){
    if(document.getElementById(campo).value.length < 1){
       
    alert("Por favor, preencha o campo Horas");
    alert("Caso não seja utilizado gentileza informar Zero");

    document.getElementById(campo).focus();
    return false
    }
    }










function myFunction() {

 var tempoZap = timeStringToFloat(document.getElementById("wApp").value) ;
 var tempoInst = timeStringToFloat(document.getElementById("insTime").value) ;
 var tempoFB = timeStringToFloat(document.getElementById("fbTime").value) ;
 

if(tempoFB >=0 && tempoInst >= 0 && tempoZap >=0){


    var soma=tempoZap+tempoInst+tempoFB;
    if(soma>24){
        alert("Não é possivel dias com mais de 24 horas");
    }else if(soma<3){
        
        window.location.href = "nao-dependente.html";
    }else if(soma<6){
        window.location.href = "moderado.html";
    
    }else{
        window.location.href = "muito-dependente.html";

    }

}

 e.preventDefault();

}


function timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }

