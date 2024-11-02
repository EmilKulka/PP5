let customerList = [];
let index = 0;
let currentEditingID = null;


function saveData(event) {
    event.preventDefault();
    const formData = {
        id: currentEditingID !== null ? currentEditingID : index++,
        company: document.getElementById("company-name").value,
        nip: document.getElementById("company-nip").value,
        city: document.getElementById("city").value,
        street: document.getElementById("street").value,
        houseNumber: document.getElementById("house-number").value,
        flatNumber: document.getElementById("flat-number").value,
        zipCode: document.getElementById("zip-code").value,
        comments: document.getElementById("comments").value,
        industry: document.getElementById("industry").value,
        active: document.getElementById("is-active").checked
    };

    if(currentEditingID !== null) {
        const customerIndex = customerList.findIndex(customer => customer.id === currentEditingID);
        customerList[customerIndex] = formData;
    } else {
        customerList.push(formData);
    }

    currentEditingID = null;
    clearForm();
    hideForm();
}

function fillSampleData() {
    document.getElementById("company-name").value = "FOO sp. z o.o";
    document.getElementById("company-nip").value = "1234567890";
    document.getElementById("city").value = "Warszawa";
    document.getElementById("street").value = "Zamkowa";
    document.getElementById("house-number").value = "10";
    document.getElementById("flat-number").value = "5";
    document.getElementById("zip-code").value = "00-001";
    document.getElementById("comments").value = "Brak uwag.";
    document.getElementById("industry").value = "1"; 
    document.getElementById("is-active").checked = true; 
}   

function clearForm() {
    document.getElementById("company-name").value = "";
    document.getElementById("company-nip").value = "";
    document.getElementById("city").value = "";
    document.getElementById("street").value = "";
    document.getElementById("house-number").value = "";
    document.getElementById("flat-number").value = "";
    document.getElementById("zip-code").value = "";
    document.getElementById("comments").value = "";
    document.getElementById("industry").value = "Wybierz..."; 
    document.getElementById("is-active").checked = false;
}


function showForm() {
    document.getElementById("customer-list").innerHTML = "";
    let customerForm = document.getElementById("customer-form");
    customerForm.style.display = `block`;
}
function hideForm() {
    clearForm();
    let customerForm = document.getElementById("customer-form");
    customerForm.style.display = `none`;
    currentEditingId = null;
}

function editData(customerId) {
    let customer = customerList.find((customer) => customer.id === customerId);
    currentEditingID = customer.id;
    showForm();
    document.getElementById("company-name").value = customer.company;
    document.getElementById("company-nip").value = customer.nip;
    document.getElementById("city").value = customer.city;
    document.getElementById("street").value = customer.street;
    document.getElementById("house-number").value = customer.houseNumber;
    document.getElementById("flat-number").value = customer.flatNumber;
    document.getElementById("zip-code").value = customer.zipCode;
    document.getElementById("comments").value = customer.comments;
    document.getElementById("industry").value = customer.industry; 
    document.getElementById("is-active").checked = customer.active;
}

function renderCustomerList() {
    hideForm();
    document.getElementById("customer-list").innerHTML = "";
    let customers = document.getElementById("customer-list");
    customerList.forEach((customer)=>customers.innerHTML += 
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                ${customer.company} |
                ${customer.city} |
                ${customer.street} 
                ${customer.houseNumber}/${customer.flatNumber} |
                ${customer.zipCode}
            </div>
            <button type="button" class="btn btn-danger" onclick="editData(${customer.id})">Edytuj</button>
        </li>
    `
    );
}