function generateTable()
 {

    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    const tableBody = document.getElementById('table-body');

    tableBody.innerHTML = 'Matrix A';

    for (let i = 0; i < rows; i++) {
        const tableRow = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            // const tableCell = document.createElement('td');
            // tableCell.textContent = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
            const tableCell = document.createElement('td')
            tableCell.textContent = prompt("Enter The Elements:")
            tableRow.appendChild(tableCell);
        }
       tableBody.appendChild(tableRow);

    }


}
