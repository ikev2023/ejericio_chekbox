//dev by: Kevin Molina
//github: @ikev2023
let total = 0;

function sumar(checkbox, amount) {
    if (checkbox.checked) {
        total += amount;
    } else {
        total -= amount;
    }
    if (total==0)
    {
        document.getElementById("h1_total").innerText = "Selecione un producto";
        document.getElementById("h1_total2").innerText = "Selecione un producto";
        document.getElementById("div_datos").style.display = "none";
    }
    else
    {
        document.getElementById("h1_total").innerText = "Precio total: Q" + total + ".00";
        document.getElementById("h1_total2").innerText = "Precio total: Q" + total + ".00";
        document.getElementById("div_datos").style.display = "block";
    }
}
function cambio()
{
    let dinero = document.getElementById("txt_dinero").value
    if (dinero=="")
    {
        document.getElementById("lbl_cambio").innerText = "ingrese datos";
    }
    else
    {
        let cambio = dinero-total;
    document.getElementById("lbl_cambio").innerText = cambio.toFixed(2);
    }
}