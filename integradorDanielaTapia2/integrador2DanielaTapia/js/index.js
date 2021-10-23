function totalSummary() {

    let totalTickets = document.getElementById("tickets").value
    let precioTicket = 200 * totalTickets
    let category = document.getElementById("category").value

    if (category == document.getElementById("student").value) {

        let descuento = precioTicket * 80 / 100
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("trainee").value) {

        let descuento = precioTicket * 50 / 100
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("junior").value) {

        let descuento = precioTicket * 30 / 100
        let precioTotal = parseInt(precioTicket - descuento)

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    } else if (category == document.getElementById("default").value) {

        let precioTicket = 200 * totalTickets
        let precioTotal = precioTicket

        document.getElementById("total-summary").innerHTML = `Total a pagar: $${precioTotal}`

    }
}

function deleteSummary() {

    document.getElementById("category").value = document.getElementById("default").value
    document.getElementById("name").value = ""
    document.getElementById("surname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("tickets").value = ""


    document.getElementById("total-summary").innerHTML = ""

}