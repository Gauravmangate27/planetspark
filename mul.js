function generateTable() {
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
          const data1= tableRow.appendChild(tableCell);
          document.write(data1)
        }
       tableBody.appendChild(tableRow);
      

    }




    // Display or use matrixC as needed
}
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
            const data= tableRow.appendChild(tableCell);
            document.read(data)

        }
       tableBody.appendChild(tableRow);
     
    }


}
function multiplyMatrices(_data1,_data) {
   

    if (columns !== rows1) {
        console.error("Number of columns of Matrix A must be equal to the number of rows of Matrix B for multiplication.");
        return;
    }

    const result = new Array(rows);
    for (let i = 0; i < rows; i++) {
        result[p] = new Array(columns1).fill(0);
    }

    for (let p = 0; p < rows; p++) {
        for (let j = 0; j < columns1; j++) {
            for (let k = 0; k < columns; k++) {
                result[p][k] += MatrixC[i][j] * matrixB[m][o];
            }
        }
    }

    return result;
}
const matrixC = multiplyMatrices(generateTable(), gen());
document.write(matrixC)
