//order summary
function addToCart(productName, productPriceId, productQuantityId) {
    
	var priceElement = document.getElementById(productPriceId);
    var quantityElement = document.getElementById(productQuantityId);
    var price = parseFloat(priceElement.innerText);
    var quantity = parseInt(quantityElement.value);

    // Calculate total price for this product
    var totalPrice = price * quantity;

    // Check if the product is already in the order summary
    var orderSummary = document.getElementById("order-summary");
    var existingProducts = orderSummary.getElementsByClassName("product-name");
    var isProductExist = false;

    for (var i = 0; i < existingProducts.length; i++) {
        if (existingProducts[i].innerText === productName) {
            isProductExist = true;
            // If quantity becomes zero, remove the item from the order summary
            if (quantity === 0) {
                orderSummary.removeChild(existingProducts[i].parentElement);
            } else {
                // Update quantity and total price for existing product
                var quantityNode = existingProducts[i].nextElementSibling;
                var totalPriceNode = quantityNode.nextElementSibling;
                quantityNode.innerText = "Quantity: " + quantity;
                totalPriceNode.innerText = "Total: $" + totalPrice.toFixed(2);
            }
            break;
        }
    }

    if (!isProductExist && quantity !== 0) {
        var productItem = document.createElement("tr");
        productItem.innerHTML = "<td class='product-name'>" + productName + "</td><td>Quantity: " + quantity + "</td><td>Total: $" + totalPrice.toFixed(2) + "</td>";
        orderSummary.appendChild(productItem);
    }
}

function clearCart() {
    document.getElementById("order-summary").innerHTML = "";
}

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

function openModal() {
    // Check if the order summary is empty
    var orderSummary = document.getElementById("order-summary");
    if (orderSummary.innerHTML.trim() === "") {
        alert("Order summary is empty. Please add items to your cart.");
        return; // Exit the function if the order summary is empty
    }

    // If the order summary is not empty, proceed to open the modal
    document.getElementById("myModal").style.display = "block";
}

    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }

function validateForm() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
	var orderSummary = document.getElementById("order-summary");

    if (name.trim() == "") {
        alert("Name must be filled out");
        return false; // Prevent form submission
    }

    if (address.trim() == "") {
        alert("Address must be filled out");
        return false; // Prevent form submission
    }

    if (contact.trim() == "") {
        alert("Contact must be filled out");
        return false; // Prevent form submission
    }
    if (contact.trim() == "") {
        alert("Contact must be filled out");
        return false; // Prevent form submission
    }
else{
	alert('Data has been Submitted');

    // Generate and display the receipt
    generateReceipt(name, address, contact);
    return false; // Prevent form submission for demonstration
}
}

// Function to generate the receipt
function generateReceipt(name, address, contact) {
    var orderSummary = document.getElementById("order-summary");
    var rows = orderSummary.getElementsByTagName("tr");
    var receiptContent = "Receipt:\n\n";
    receiptContent += "Name: " + name + "\n";
    receiptContent += "Address: " + address + "\n";
    receiptContent += "Contact: " + contact + "\n\n";
    receiptContent += "Order Summary:\n";

    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        for (var j = 0; j < cells.length; j++) {
            receiptContent += cells[j].innerText + " ";
        }
        receiptContent += "\n";
    }

    alert(receiptContent);
}