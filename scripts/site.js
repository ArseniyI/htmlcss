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

function onCartLoad()
{
    const urlParams = new URLSearchParams(window.location.search);

    for(let index = 0; ; index++)
    {
        let quantity = document.getElementById("quantity" + index);

        if(quantity)
        {
            const value = urlParams.get(index);

            if(value)
            {
                quantity.value = value;
            }  
        }
        else
        {
            break;
        }
    }

    calculateAll();
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

 function onCartClick()
 {
    let params = '';
    
    for(let index = 0; ; index++)
    {
        let quantity = document.getElementById("quantity" + index);

        if(quantity)
        {
            params += (params.length === 0 ? '?' : '&') + index + '=' + quantity.value;
        }
        else
        {
            break;
        }
    }

    window.location.href = "cart.html" + params;
 }