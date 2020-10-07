let voltagem;
let potencia;
let checkbox;
let corpo;
let txtvolts;
function calcular(impedancia)
{
    voltagem = document.getElementById("txtvolts").value;
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
        document.getElementById("tela").innerText = potencia;
}

function darkmode()
{
    checkbox = document.getElementById("darkmode");
    corpo = document.getElementById("corpo");
    txtvolts = document.getElementById("txtvolts");
    if(checkbox.checked == true)
    {
        corpo.style.backgroundColor = "#000000";
        txtvolts.style.backgroundColor = "#ffffff";
        txtvolts.style.border = "3px solid #3399ff"
    }
    else
    {
        corpo.style.backgroundColor = "#ffffff";
        txtvolts.style.backgroundColor = "#ffffff";
        txtvolts.style.border = "2px solid #3399ff"
    }
}