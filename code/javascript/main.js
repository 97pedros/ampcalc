voltagem = document.getElementById("txt_volts").value;
tela = document.getElementById("tela").value;
function calcular(impedancia)
{
    switch (impedancia) {
        case 4:
            window.alert(voltagem);
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