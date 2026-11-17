function comprar() {

    let articulo1 = Number(document.getElementById("articulo1").value);
    let articulo2 = Number(document.getElementById("articulo2").value);
    let articulo3 = Number(document.getElementById("articulo3").value);

    let total = articulo1 + articulo2 + articulo3;

    document.getElementById("resultado").innerHTML =
    "El total de tu compra es: $" + total;

}












