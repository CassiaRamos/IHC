const campo = ["wApp", "insTime", "fbTime", "twTime", "youTime", "outras", "inputIdade"];
const campoLabel = ["What'up", "Instagram", "Face Book", "Twitter", "You tube", "Outras rede Socias", "Tempo redes socias"];

function valida_campo() {


    var result = "Favor preencha(s) os campos ";
    var aux = 0;

    for (let i = 0; i < campo.length; i++) {
        if (document.getElementById(campo[i]).value.length < 1) {
            result += campoLabel[i] + ", ";
            aux++;
        }
    }
    if (aux > 0) {
        alert(result);
        return false;
    } else {

        return true;
    }



}

function clearCache() {

    localStorage.clear();
}



function carregaDadosDiarios() {
    var nomes;
    var result;
    var valor;
    var totalTempo;
    var resultadoTotal;
    var no;

    var lista = document.getElementById('lista');
    var listaTotal = document.getElementById('lista-total');

    for (let ls = 0; ls < localStorage.length; ls++) {



        var elementoList = document.createElement("li");
        elementoList.setAttribute('class', 'list-group-item font-weight-bold');
        var elementoListTotal = document.createElement("li");
        elementoListTotal.setAttribute('class', 'list-group-item font-weight-bold');


        nomes = localStorage.key(ls);


        if (nomes != "Tempo redes socias") {
            tempoDiario = localStorage.getItem(nomes);

            result = nomes + " - " + tempoDiario + " horas";
            no = document.createTextNode(result);
            elementoList.appendChild(no);
            lista.appendChild(elementoList);





            totalTempo = timeStringToFloat(localStorage.getItem(nomes)) * localStorage.getItem("Tempo redes socias") * 365;


            resultadoTotal = nomes + " - " + totalTempo.toFixed(2) + " horas";

            noTotal = document.createTextNode(resultadoTotal);
            elementoListTotal.appendChild(noTotal);
            listaTotal.appendChild(elementoListTotal);








        }























    }



}







function myFunction() {
    var testeaux;



    if (valida_campo()) {
        var tempoZap = timeStringToFloat(document.getElementById(campo[0]).value);
        var tempoInst = timeStringToFloat(document.getElementById(campo[1]).value);
        var tempoFB = timeStringToFloat(document.getElementById(campo[2]).value);
        var tempoTW = timeStringToFloat(document.getElementById(campo[3]).value);
        var tempoYT = timeStringToFloat(document.getElementById(campo[4]).value);
        var tempoOutras = timeStringToFloat(document.getElementById(campo[5]).value);
        var idade = timeStringToFloat(document.getElementById(campo[6]).value);


        localStorage.setItem(campoLabel[0], String(tempoZap));

        if (tempoFB >= 0 && tempoInst >= 0 && tempoZap >= 0 && tempoTW >= 0 && tempoYT >= 0 && tempoOutras >= 0 && idade >= 0) {





            // verifica quais campos tem valor maior q zero
            for (var i = 0; i < campo.length; i++) {
                if (timeStringToFloat(document.getElementById(campo[i]).value) > 0) {
                    localStorage.setItem(campoLabel[i], document.getElementById(campo[i]).value);





                }

            }














            var soma = tempoZap + tempoInst + tempoFB + tempoTW + tempoYT + tempoOutras;
            console.log(soma);
            if (soma > 24) {
                alert("Não é possivel dias com mais de 24 horas");
            } else if (soma < 3) {

                window.location.href = "nao-dependente.html";
            } else if (soma < 6) {

                window.location.href = "moderado.html";

            } else {
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

function passaValor(variavel, pagina) {


    switch (pagina) {
        case 1:
            window.location.href = "nao-dependente.html?horas=" + variavel;
            break;
        case 2:
            window.location.href = "moderado.html?horas=" + variavel;
            break;
        case 3:
            window.location.href = "muito-dependente.html?horas=" + variavel;
            break;

    }







}