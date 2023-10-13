const name = document.getElementById("search_bar");
const tableRows = document.querySelectorAll("tbody tr");

name.addEventListener("keyup", function (e) {
    const searchValue = e.target.value.toLowerCase();

    tableRows.forEach(function (row) {
        const nameCell = row.querySelector("#name_cell");
        const rowName = nameCell.textContent.toLowerCase();

        if (rowName.includes(searchValue)) {
            row.style.display = ""; // Show the row
        } else {
            row.style.display = "none"; // Hide the row
        }
    });
});
