const calculadora  = document.getElementById("calculadora");
const botones = document.querySelectorAll(".numeros");
var resultado = document.querySelectorAll(".numeros");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        if (boton.id === "c") {
            ventana.textContent = "0";
            return;
        }   
        if (boton.id === "borrar") {
            if (ventana.textContent.length === 1 || ventana.textContent === "Error!") {
                ventana.textContent = "0";  
            } else {
                ventana.textContent = ventana.textContent.slice(0, -1);
            }
         return;
        }

        if(ventana.textContent === "0" || ventana.textContent === "Error!") {
            ventana.textContent = botonApretado;
        } else {
            ventana.textContent += botonApretado
        }
        if (boton.id === "suma") {
        } else {
           resultado = boton.value;
        }
    })
})