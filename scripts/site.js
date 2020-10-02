 function calculateSubtotal(index)
 {
    const quantity = document.getElementById("quantity" + index).value;
    const price = document.getElementById("price" + index).innerText;
    document.getElementById("subtotal" + index).innerText = round(quantity * price);
    calculateTotal();
 }

 function calculateTotal()
 {
    let total = 0.0;

    for(let index = 0; ; index++)
    {
        let subtotal = document.getElementById("subtotal" + index);

        if(!subtotal)
        {
            break;
        }

        total += parseFloat(subtotal.innerText);
    }

    document.getElementById("total").innerText = round(total);
 }

 function calculateAll()
 {
    // Calculate subtotals
    for(let index = 0; ; index++)
    {
        let subtotal = document.getElementById("subtotal" + index);

        if(subtotal)
        {
            calculateSubtotal(index);
        }
        else
        {
            break;
        }
    }
 }

 function round(x)
 {
     return Math.round(x * 100) / 100.0;
 }

 function back()
 {
    history.back();
 }

 function clearSearch(control)
 {
    if(control.value === "Search...")
     {
         control.value = "";
     }
 }

 function setSearch(control)
 {
    if(control.value === "")
     {
         control.value = "Search...";
     }
 }