let voltagem;
let potencia;
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