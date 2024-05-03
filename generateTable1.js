function gen() {

    const rows1 = document.getElementById('rows1').value;
    const columns1 = document.getElementById('columns1').value;
    const tableBody = document.getElementById('table-body');

    tableBody.innerHTML = 'Matrix B';

    for (let m = 0; m < rows1; m++) {
        const tableRow = document.createElement('tr');
        for (let o = 0; o < columns1; o++) {
            // const tableCell = document.createElement('td');
            // tableCell.textContent = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
            const tableCell = document.createElement('td');
            tableCell.textContent = prompt("Enter The Elements:");
            tableRow.appendChild(tableCell);
           
        }
        tableBody.appendChild(tableRow);

    }


}
