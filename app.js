// Initialize variables
let player = "X";
let winner = null;

// Get all cells
const cells = document.querySelectorAll(".col");

function clearCells(){
    writeMessage('');

    cells.forEach((cell) => {
        cell.innerText = '';
    });
}

// Adding event listeners to cells
cells.forEach((cell) => {
    
    cell.addEventListener("click", () => {
        // If cell is not empty or game is already won, do nothing
        if (cell.innerText !== "" || winner !== null) {
            return;
        }

        // Update cell with current player
        cell.innerText = player;

        // Check for winner
        checkWinner();

        // Switch player
        player = player === "X" ? "O" : "X";
    });
});

// Check for winner function
function checkWinner() {
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];

    let isGameEnded = false;

    winningCombinations.forEach((combination) => {
        const [a, b, c] = combination;

        if (
            cells[a - 1].innerText === cells[b - 1].innerText &&
            cells[b - 1].innerText === cells[c - 1].innerText &&
            cells[a - 1].innerText !== ""
        ) 
        {
            winner = player;
            writeMessage(`${winner} wins!`);
            isGameEnded = true;
        }
    });

    // Check for tie
    if (winner === null && Array.from(cells).every(cell => cell.innerText !== "")) {
        writeMessage("It's a tie!");
        isGameEnded = true;
    }

    if(isGameEnded){
        setTimeout(function(){
            winner = null;
            clearCells();
        }, 4000);
    }
}

function writeMessage(message)
{
    var messagediv = document.getElementById('message');

    messagediv.style.display = message === '' ? 'none' : '';

    messagediv.innerHTML = message;
}

clearCells();