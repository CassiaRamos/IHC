










function valida_campo (){

    var campo = ["wApp","insTime","fbTime","twTime","youTime","outras","inputIdade"];
    var campoLabel = ["What'up","Instagram","Face Book","Twitter","You tube","Outras rede Socias","Tempo redes socias"];
    var result = "Favor preencha(s) os campos ";
    var aux=0;

    for (let i = 0; i <campo.length ; i++) {
        if (document.getElementById(campo[i]).value.length < 1) {
            result+= campoLabel[i]+", ";
            aux++;
        }
    }
    if(aux>0) {
        alert(result);
        return false;
    }else{

        return true;
    }



    }










function myFunction() {
    var campo = ["wApp","insTime","fbTime","twTime","youTime","outras","inputIdade"];



    if(valida_campo()){
        var tempoZap = timeStringToFloat(document.getElementById(campo[0]).value);
        var tempoInst = timeStringToFloat(document.getElementById(campo[1]).value);
        var tempoFB = timeStringToFloat(document.getElementById(campo[2]).value);
        var tempoTW = timeStringToFloat(document.getElementById(campo[3]).value);
        var tempoYT = timeStringToFloat(document.getElementById(campo[4]).value);
        var tempoOutras = timeStringToFloat(document.getElementById(campo[5]).value);
        var idade = timeStringToFloat(document.getElementById(campo[6]).value);

        if(tempoFB >=0 && tempoInst >= 0 && tempoZap >=0 && tempoTW >=0 && tempoYT >=0 && tempoOutras >=0 && idade >=0){


            var soma=tempoZap+tempoInst+tempoFB+tempoTW+tempoYT+tempoOutras;
            console.log(soma);
            if(soma>24){
                alert("Não é possivel dias com mais de 24 horas");
            }else if(soma<3){

                window.location.href = "nao-dependente.html";
            }else if(soma<6){
                window.location.href = "moderado.html";

            }else{
                window.location.href = "muito-dependente.html";

            }
        } else {
            alert("Certifique-se de preencher todos os campos corretamente.");
        }



    }










}


function timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }

