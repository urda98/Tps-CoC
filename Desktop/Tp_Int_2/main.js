
let cantidad = document.getElementById("inputCantidad");
let categoria = document.getElementById("inputState");
let resumen = document.getElementById("resumeButton");
let reset = document.getElementById('resetButton');
let total = document.getElementById('aPagar');

console.log(cantidad);
console.log(cantidad.value);
console.log(categoria);


function displayPurchase () {
    let cantidad = document.getElementById("inputCantidad");
    let categoria = document.getElementById("inputState");
    
    if (cantidad.value == 1 || cantidad.value == 2 || cantidad.value == 3) {
        if (categoria.value == "Estudiante") {
            var resultado = (200 * 0.8 * cantidad.value);
            document.getElementById('aPagar').innerHTML = ('Total a Pagar: ' + resultado);
        } else if (categoria.value == 'Trainee') {
            var resultado = (200 * 0.5 * cantidad.value);
            document.getElementById('aPagar').innerHTML = ('Total a Pagar: ' + resultado);
        } else if (categoria.value == 'Junior') {
            var resultado = (200 * 0.15 * cantidad.value);
            document.getElementById('aPagar').innerHTML = ('Total a Pagar: ' + resultado);
        }
    }
};

resumen.addEventListener('click', (e) => {
    e.preventDefault();

    displayPurchase();
});

function Delete() {
    document.getElementById("aPagar").innerHTML = "Total a Pagar: $ ";
};

reset.addEventListener("click", (e) =>{
    e.preventDefault();
    Delete();
});