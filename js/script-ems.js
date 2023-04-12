// CREATE AN ARRAY OF EMPLOYEES
let employees = [];
employees[0] = [11111111, "Sarah Letts", 1212, "sletts@hchc.org", "Executive"];
employees[1] = [22222222, "Bernie Perez", 1313, "bperez@hchc.org", "Administrative"];
employees[2] = [33333333, "Angelica pace", 1414, "apace@hchc.org", "Administrative"];
employees[3] = [44444444, "Kayla Teal", 1313, "kteal@hchc.org", "Marketing"];
employees[4] = [55555555, "Chris French", 1313, "cfrench@hchc.org", "Quality Assurance"];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.employees) {
    employees = JSON.parse(localStorage.employees);
}

// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);
let form = $("addForm");
let empTable = $("empTable");
let empCount = $("empCount");
empCount.innerHTML = ` (${employees.length})`;

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
function buildTable(list) {
    for (let employee of list) {
        let row = document.createElement("tr");
        for (let i = 0; i < employee.length; i++) {
            row.innerHTML += `<td>${employee[i]}</td>`;
        }
        row.innerHTML += `<td><button class="btn btn-danger btn-sm">X</button></td>`
        empTable.getElementsByTagName("tbody")[0].appendChild(row);
    }
}

buildTable(employees);

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID = $("id").value;
    let fullName = $("name").value;
    let extension = $("extension").value;
    let email = $("email").value;
    let department = $("department").value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [employeeID, fullName, extension, email, department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);
    console.log(`Test: ${employees}`);

    // BUILD THE GRID
    buildGrid(employees);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.tagName == "BUTTON") {
        let deletePerson = e.target.parentElement.parentElement.children[1].innerHTML;
        let confirmed = confirm(`Are you sure you want to delete ${deletePerson}?`);

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        if (confirmed) {
            rowToDelete = e.target.parentElement.parentElement.rowIndex;
        }
        console.log(rowToDelete);
    }
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowToDelete - 1, 1);
        console.log(employees);

        // BUILD THE GRID
        buildGrid(employees);
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.getElementsByTagName("tbody")[0].remove();

    // REBUILD THE TBODY FROM SCRATCH
    empTable.appendChild(document.createElement('tbody'));

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    buildTable(employees);

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    // Note from Cheryl - Already done when creating tbody element

    // UPDATE EMPLOYEE COUNT
    empCount.innerHTML = ` (${employees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem("employees", JSON.stringify(employees));
}

