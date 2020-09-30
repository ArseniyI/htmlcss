 function calculate_subtotal(index)
 {
    let quantity = document.getElementById("quantity" + index).value;
    let price = document.getElementById("price" + index).innerText;
    document.getElementById("subtotal" + index).innerText = quantity * price;
 }