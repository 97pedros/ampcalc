let voltagem;
function calcular(impedancia)
{
    voltagem = document.getElementById("txtvolts").value;
    switch (impedancia) {
        case 4:
            document.getElementById("tela").innerText = voltagem;
            break;
        case 6:
            window.alert(voltagem);
            break;
        case 8:
            window.alert(voltagem);
            break;
        case 16:
            window.alert(voltagem);
            break;

    }
}