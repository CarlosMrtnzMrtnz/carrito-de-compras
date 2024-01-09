// ------------------------------contador-------------------------------------
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// ------------------------------sumar productos----------------------------

let botonesControlCantidad = document.querySelectorAll(".botonControl")
botonesControlCantidad.forEach(botoncito => {
    botoncito.addEventListener("click", (evento) => {
        // ---------Suma de elementos------------------
        let h5Producto = document.querySelector(`#${evento.target.dataset.idCantidad}`)
        let cantidadActual = h5Producto.innerText
        // ---------Suma total de elementos------------
        let acumulado = document.querySelector("#total1")
        let contenidoAcumulado = acumulado.innerText

        if (evento.target.dataset.accion == 'restar') {
            
                cantidadActual = parseInt(cantidadActual) - 1
                contenidoAcumulado = parseInt(contenidoAcumulado) - 1
            
        } else {
            cantidadActual = parseInt(cantidadActual) + 1
            contenidoAcumulado = parseInt(contenidoAcumulado) + 1
        }
        h5Producto.innerHTML = cantidadActual
        acumulado.innerText = contenidoAcumulado
    })
});
// -------------------------------Saldo total-----------------------------------

// matriz = [210000, 382000, 90000]
// totalCompra = document.querySelectorAll(".botonControl")
// totalCompra.forEach(element => {
//     element.addEventListener('click', (e) => {
//         buscaCantidad = e.target.dataset.idCantidad
//         var cantidadX = document.querySelector(`#${buscaCantidad}`)
//         var cantidadX = parseInt(cantidadX.innerText)

//         resumen = document.querySelector("#pagarTotal")

//         if (buscaCantidad == "h5_1") {
//             var cantidadX = cantidadX * 210000
//             matriz.splice(0, 1, cantidadX)

//         } else if (buscaCantidad == "h5_2") {
//             cantidadX = cantidadX * 382000
//             matriz.splice(1, 1, cantidadX)

//         } else if (buscaCantidad == "h5_3") {
//             cantidadX = cantidadX * 90000
//             matriz.splice(2, 1, cantidadX)
//         }

//         var suma = matriz.reduce(function (acumular, elemento) {
//             return acumular + elemento
//         })
//         resumen.innerHTML = suma
//         descuento = parseInt(document.querySelector("#pagarTotal").innerText)
//         aplicaDescuento = document.querySelector("#total1").innerText
//         descuentoRealizado = document.querySelector("#descuentoRealizado")
//         descuentoRealizado2 = descuentoRealizado.innerText
//         if (aplicaDescuento >= 7) {
//             descuentoRealizado2 = descuento * .1
//             descuentoRealizado.innerHTML = descuentoRealizado2
//             descuento = descuento * .9
//             resumen.innerHTML = descuento
//         } else {
//             descuentoRealizado.innerHTML = 0
//         }

//     })

// });
// ----------------------------------------------------------------------------------------------------

// -------------------------------Cobro de envio-------------------------------


var envio = document.querySelectorAll(".envio")
pagoEnvio = document.querySelector("#pagarTotal")
envio.forEach(element => {
    element.addEventListener('click', (e) => {
        envioAplicado = parseInt(pagoEnvio.innerText)
        if (e.target.id == "envioPrioritario") {
            pagoEnvio = document.querySelector("#pagarTotal")
            console.log(e.target.class)
            if (e.target.dataset.prioritario != "true") {
                pagoEnvio.innerText = envioAplicado + 5000
                e.target.setAttribute("data-prioritario", "true")
            }

        } else if (e.target.id == "envioNormal") {
            pagoEnvio = document.querySelector("#pagarTotal")
            let inputEnvioPrioritario = document.querySelector("#envioPrioritario")
            if (inputEnvioPrioritario.dataset.prioritario == "true") {
                pagoEnvio.innerText = envioAplicado - 5000
                inputEnvioPrioritario.setAttribute("data-prioritario", "false")
            }
        }
    })

})

// -------------------------------Entrega Introducir direccion--------------------------------------

entregar = document.querySelector(".entrega")
entregar.addEventListener('click', evento => {
    window.location.href = "entrega.html"
})

transferencia = document.querySelector(".transferencia")
transferencia.addEventListener('click', evento => {
    window.location.href = "https://www.pse.com.co/persona"
})

tCredito = document.querySelector(".tCredito")
contenedor = document.querySelector(".contenedor")
tCredito.addEventListener('click', e => {

    var nuevoHTML = '<div>' +
        '<input class="bg-body-secondary tc" placeholder="0000 0000 0000"  type="text">' +

        '<input class="bg-body-secondary tc1" placeholder="01/23" type="text">' +

        '<input class="bg-body-secondary tc2" placeholder="CVV" type="text">' +

        '</div>'
    contenedor.innerHTML = nuevoHTML;
})
// ------------------------------Borrar carrito--------------------------------------------------------

document.querySelector('#btnBorrarCarro').addEventListener('click', () => {
    Swal.fire({
        title: "Esta seguro?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, vaciar carrito",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            //aquí va su proceso para borrar el carrito 🙃
            setTimeout(() => {
                borrar = document.querySelectorAll(".borrar1")
                borrar.forEach(elementosBorrar => {
                    elementosBorrar.innerHTML = ""
                });
                // -----------------Reset valores--------------------------
                resetTotal = document.getElementById("total1")
                resetValor = document.getElementById("pagarTotal")

                resetTotal1 = resetTotal.innerText
                resetTotal.innerText = 0

                resetValor1 = resetValor.innerText
                resetValor.innerText = 0
                // ---------------------------------------------------------
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }, 500)
        }
    });
})
// --------------------------------------------------------------------------

// ------------------------------Borrar elementos----------------------------
borrarArticulos = document.querySelectorAll(".botonQuitar")
precioTotalX = document.querySelector("#pagarTotal")
acumuladoX = document.querySelector("#total1")
borrarArticulos.forEach((elementos, posicion) => {
    elementos.addEventListener('click', (evento) => {
        // ---------Valor acumulado -----------------
        acumulado = document.querySelector("#total1")
        acumulado = parseInt(acumulado.innerText)
        descuentoRealizado1 = document.querySelector("#descuentoRealizado")
        cantidadProducto = parseInt(document.querySelector(`#${evento.target.dataset.idCantidad}`).innerText)
        precio = parseInt(document.querySelector(`#${evento.target.dataset.idPrecio}`).innerText) * cantidadProducto
        precioTotalX.innerText = parseInt(precioTotal.innerText) - precio
        acumuladoX.innerText = acumulado - cantidadProducto

        if (acumuladoX.innerText < 7 && descuentoRealizado1.innerText != 0) {
        precioTotalX.innerText = parseInt(precioTotalX.innerText) + 50000
        descuentoRealizado1.innerText = 0
            
        } else if (acumuladoX.innerText == 0) {
        eliminarCarro = document.querySelector(".xx").innerText = ""

        }

        setTimeout(() => {
            const tooltip = bootstrap.Tooltip.getInstance(`#${evento.target.id}`)
            x = document.querySelector(`#${evento.target.dataset.divProducto}`).innerHTML = ""
            tooltip.hide()
        }, 500)



    })

})



// ---------------------------------Descuento y control de cantidad - total a pagar---------------------------------------------------------------
descuentoRealizado1 = document.querySelector("#descuentoRealizado")
acumulado = document.querySelector("#total1")
precioTotal = document.querySelector("#pagarTotal")
sumarRestar = document.querySelectorAll(".botonControl")
sumarRestar.forEach((elemento, posiscion) => {
    elemento.addEventListener("click", evento =>{

        cantidadProducto = document.querySelector(`#${evento.target.dataset.idCantidad}`)
        precioProducto = document.querySelector(`#${evento.target.dataset.precio}`)

        cantidadProducto = parseInt(cantidadProducto.innerText)
        precioProducto = parseInt(precioProducto.innerText)

        acumulado = document.querySelector("#total1")
        acumulado = parseInt(acumulado.innerText)
        precioTotal1 = parseInt(precioTotal.innerText)

        if (evento.target.dataset.accion == "sumar") {
            calculoTotal = precioTotal1 + precioProducto 
            precioTotal.innerText = calculoTotal 
        } 
         else if (evento.target.dataset.accion == "restar") {                
            calculoTotal = precioTotal1 - precioProducto 
            precioTotal.innerText = calculoTotal
            precioTotal1 = calculoTotal;
        }
            if (cantidadProducto < 1) {
                precioTotal.innerText = calculoTotal
                let eliminar = document.querySelector(`#${evento.target.dataset.producto}`).innerText=""
            }
        if (acumulado == 7 && descuentoRealizado1.innerText == 0) {
            descuentoRealizado1.innerText = 50000
            precioTotal.innerText = calculoTotal - 50000
        } else if (acumulado == 6 && descuentoRealizado1.innerText != 0) {
            descuentoRealizado1.innerText = 0
            precioTotal.innerText = calculoTotal + 50000
        } else if (acumulado == 0) {
            precioTotal.innerText = 0
            eliminarCarro = document.querySelector(".xx").innerText = ""
        }

    })
})
// -----------------------------------------------------------------------------------------------------------------------------------------------