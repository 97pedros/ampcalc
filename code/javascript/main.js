/**********************************************************
 * (c) 2020 Pedro dos santos, são paulo, brasil           *
 * O objetivo desse código é ser parte de um app mobile   *
 * mas está escrito de forma horrível, porem funcional    *
***********************************************************/
let voltagem;
let potencia;
let checkbox;
let corpo;
let txtvolts;

//num precisa dessa linha, mas vai que...
checkbox = document.getElementById("darkmode");


// faz o calculo da potencia recebendo a voltagem da saída do amplificador
function calcular(impedancia)
{
    voltagem = document.getElementById("txtvolts").value;
    //o calculo em si
    switch (impedancia)
    {
        case 4:
            potencia = voltagem * voltagem / impedancia+" Watts";
            break;
            case 6:
            potencia = voltagem * voltagem / impedancia+" Watts";
            break;
            case 8:
                potencia = voltagem * voltagem / impedancia+" Watts";
                break;
                case 16:
            potencia = voltagem * voltagem / impedancia+" Watts";
            break;
    }
    //substitui o titulo no h1 pelo resultado
    document.getElementById("tela").innerText = potencia;
}

//implementa o darkmode
function darkmode()
{
    //atualiza as variáveis
    checkbox = document.getElementById("darkmode");
    corpo = document.getElementById("corpo");
    txtvolts = document.getElementById("txtvolts");

    //da utilidade a chave de darkmode
    if(checkbox.checked == true)
    {
        //modo escuro, alterando css e memoria local da maquina do usuário
        localStorage.setItem("mode", "ativado");
        corpo.style.backgroundColor = "#000000";
        txtvolts.style.backgroundColor = "#ffffff";
        txtvolts.style.border = "3px solid #3399ff"
    }
    else
    {
        //modo claro revertendo tudo la de cima
        localStorage.setItem("mode", "desativado");
        corpo.style.backgroundColor = "#ffffff";
        txtvolts.style.backgroundColor = "#ffffff";
        txtvolts.style.border = "2px solid #3399ff"
    }
}


//checa a ultima posição da chave de darkmode
if(localStorage.mode == "ativado")
{
    checkbox.checked = true;
}
else
{
    checkbox.checked = false;
}

//chama a função darkmode, quebrei a cabeça pra fazer essa gambiarra
//sendo que era só usar essa unica linha de código
document.onload = darkmode();
