// Zmienna przechowująca listę klientów
let customerList: Customer[] = [];
let index: number = 0;
let currentEditingID: number | null = null;

// Funkcja zapisu danych
function saveData(event: Event): void {
    event.preventDefault();
    let customer = new Customer();
    customer.id = currentEditingID !== null ? currentEditingID : index++;
    customer.company = (document.getElementById("company-name") as HTMLInputElement).value;
    customer.nip = (document.getElementById("company-nip") as HTMLInputElement).value;
    customer.city = (document.getElementById("city") as HTMLInputElement).value;
    customer.street = (document.getElementById("street") as HTMLInputElement).value;
    customer.houseNumber = (document.getElementById("house-number") as HTMLInputElement).value;
    customer.flatNumber = (document.getElementById("flat-number") as HTMLInputElement).value;
    customer.zipCode = (document.getElementById("zip-code") as HTMLInputElement).value;
    customer.comments = (document.getElementById("comments") as HTMLInputElement).value;
    customer.industry = (document.getElementById("industry") as HTMLInputElement).value;
    customer.active = (document.getElementById("is-active") as HTMLInputElement).checked;

    if (currentEditingID !== null) {
        const customerIndex = customerList.findIndex((customer) => customer.id === currentEditingID);
        if (customerIndex !== -1) {
            customerList[customerIndex] = customer;
        }
    } else {
        customerList.push(customer);
    }

    currentEditingID = null;
    clearForm();
    hideForm();
}

// Funkcja wypełniająca przykładowe dane
function fillSampleData(): void {
    (document.getElementById("company-name") as HTMLInputElement).value = "FOO sp. z o.o";
    (document.getElementById("company-nip") as HTMLInputElement).value = "1234567890";
    (document.getElementById("city") as HTMLInputElement).value = "Warszawa";
    (document.getElementById("street") as HTMLInputElement).value = "Zamkowa";
    (document.getElementById("house-number") as HTMLInputElement).value = "10";
    (document.getElementById("flat-number") as HTMLInputElement).value = "5";
    (document.getElementById("zip-code") as HTMLInputElement).value = "00-001";
    (document.getElementById("comments") as HTMLInputElement).value = "Brak uwag.";
    (document.getElementById("industry") as HTMLInputElement).value = "1";
    (document.getElementById("is-active") as HTMLInputElement).checked = true;
}

// Funkcja czyszcząca formularz
function clearForm(): void {
    (document.getElementById("company-name") as HTMLInputElement).value = "";
    (document.getElementById("company-nip") as HTMLInputElement).value = "";
    (document.getElementById("city") as HTMLInputElement).value = "";
    (document.getElementById("street") as HTMLInputElement).value = "";
    (document.getElementById("house-number") as HTMLInputElement).value = "";
    (document.getElementById("flat-number") as HTMLInputElement).value = "";
    (document.getElementById("zip-code") as HTMLInputElement).value = "";
    (document.getElementById("comments") as HTMLInputElement).value = "";
    (document.getElementById("industry") as HTMLInputElement).value = "Wybierz...";
    (document.getElementById("is-active") as HTMLInputElement).checked = false;
}

// Funkcja pokazująca formularz
function showForm(): void {
    document.getElementById("customer-list")!.innerHTML = "";
    let customerForm = document.getElementById("customer-form")!;
    customerForm.style.display = `block`;
}

// Funkcja ukrywająca formularz
function hideForm(): void {
    clearForm();
    let customerForm = document.getElementById("customer-form")!;
    customerForm.style.display = `none`;
    currentEditingID = null;
}

// Funkcja edytująca dane klienta
function editData(customerId: number): void {
    let customer = customerList.find((customer) => customer.id === customerId);
    if (customer) {
        currentEditingID = customer.id;
        showForm();
        (document.getElementById("company-name") as HTMLInputElement).value = customer.company;
        (document.getElementById("company-nip") as HTMLInputElement).value = customer.nip;
        (document.getElementById("city") as HTMLInputElement).value = customer.city;
        (document.getElementById("street") as HTMLInputElement).value = customer.street;
        (document.getElementById("house-number") as HTMLInputElement).value = customer.houseNumber;
        (document.getElementById("flat-number") as HTMLInputElement).value = customer.flatNumber;
        (document.getElementById("zip-code") as HTMLInputElement).value = customer.zipCode;
        (document.getElementById("comments") as HTMLInputElement).value = customer.comments;
        (document.getElementById("industry") as HTMLInputElement).value = customer.industry;
        (document.getElementById("is-active") as HTMLInputElement).checked = customer.active;
    }
}

// Funkcja renderująca listę klientów
function renderCustomerList(): void {
    hideForm();
    document.getElementById("customer-list")!.innerHTML = "";
    let customers = document.getElementById("customer-list")!;
    customerList.forEach((customer) => {
        customers.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    ${customer.getAddress()}
                </div>
                <button type="button" class="btn btn-danger" onclick="editData(${customer.id})">Edytuj</button>
            </li>
        `;
    });
}