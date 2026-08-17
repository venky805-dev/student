const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const course = document.getElementById("course").value;
    const marks = document.getElementById("marks").value;

    const row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${course}</td>
        <td>${marks}</td>
        <td>
            <button onclick="deleteStudent(this)">Delete</button>
        </td>
    `;

    form.reset();
});
function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
const search = document.getElementById("search");

search.addEventListener("keyup", function() {

    const searchText = search.value.toLowerCase();
    const rows = table.getElementsByTagName("tr");

    for (let row of rows) {

        const text = row.textContent.toLowerCase();

        if (text.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
});