function addCustomer() {
    var customerNameInput = document.getElementById("customerName");
    var customerList = document.getElementById("customerList");

    if (customerNameInput.value !== "") {
        var li = document.createElement("li");
        li.innerHTML = customerNameInput.value + '<button onclick="editCustomer(this)">Düzenle</button> <button onclick="removeCustomer(this)">Sil</button>';
        customerList.appendChild(li);
        customerNameInput.value = "";
    }
}

function removeCustomer(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
function updateCustomer() {
    var editedCustomerNameInput = document.getElementById("editedCustomerName");
    var selectedCustomer = document.querySelector(".selected");

    if (selectedCustomer && editedCustomerNameInput.value !== "") {
        selectedCustomer.firstChild.nodeValue = editedCustomerNameInput.value;
        cancelEdit();
    }
}

function cancelEdit() {
    var customerDetails = document.getElementById("customerDetails");
    var editedCustomerNameInput = document.getElementById("editedCustomerName");

    customerDetails.style.display = "none";
    editedCustomerNameInput.value = "";
}

function editCustomer(button) {
    var li = button.parentNode;
    var customerDetails = document.getElementById("customerDetails");
    var editedCustomerNameInput = document.getElementById("editedCustomerName");

    editedCustomerNameInput.value = li.firstChild.nodeValue;
    customerDetails.style.display = "block";
    editedCustomerNameInput.focus();

    // Varsa seçili olan müşteriyi temizle
    var selectedCustomer = document.querySelector(".selected");
    if (selectedCustomer) {
        selectedCustomer.classList.remove("selected");
    }

    // Şu anki müşteriyi seçili yap
    li.classList.add("selected");
}