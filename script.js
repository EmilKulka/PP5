let customerList = [];
let index = 0;


function saveData(event) {
    event.preventDefault();
    const formData = {
        id: index++,
        company: document.getElementById("company").value,
        nip: document.getElementById("companyNIP").value,
        city: document.getElementById("City").value,
        street: document.getElementById("Street").value,
        houseNumber: document.getElementById("houseNumber").value,
        flatNumber: document.getElementById("flatNumber").value,
        zipCode: document.getElementById("zipCode").value,
        comments: document.getElementById("comments").value,
        industry: document.getElementById("exampleSelect").value,
        active: document.getElementById("flexCheckDefault").checked
    };

    customerList.push(formData);
    hideForm();

    renderCustomerList();

}

function fillSampleData() {
    document.getElementById("customer_id").value = 1;
    document.getElementById("company").value = "Przykładowa Firma";
    document.getElementById("companyNIP").value = "1234567890";
    document.getElementById("City").value = "Warszawa";
    document.getElementById("Street").value = "Przykładowa Ulica";
    document.getElementById("houseNumber").value = "10";
    document.getElementById("flatNumber").value = "5";
    document.getElementById("zipCode").value = "00-001";
    document.getElementById("comments").value = "Brak uwag.";
    document.getElementById("exampleSelect").value = "1"; // Ustawienie przykładowej opcji branży
    document.getElementById("flexCheckDefault").checked = true; // Ustawienie checkboxa na aktywny
}   

function showForm() {
    let customerForm = document.getElementById("customer-form");
    customerForm.style.display = `block`;
}
function hideForm() {
    let customerForm = document.getElementById("customer-form");
    customerForm.style.display = `none`;
}

function renderCustomerList() {
    document.getElementById("customer-list").innerHTML = "";
    let customers = document.getElementById("customer-list");
    customerList.forEach((customer)=>customers.innerHTML += `<li class="list-group-item">${customer.id}</li>`);
    

}

