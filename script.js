// script.js — dinamiska sadaļu rotācija ar rindu un kolonnu animācijām
const gridContainer = document.querySelector('.grid-container');
const topRow = document.querySelector('.row.top-row');
const rightCol = document.querySelector('.column.right-column');

let currentState = 0;

function rotateSections() {
  switch (currentState) {
    case 0:
      topRow.style.transform = 'translateX(-100%)';
      rightCol.style.transform = 'translateY(0)';
      break;
    case 1:
      topRow.style.transform = 'translateX(0)';
      rightCol.style.transform = 'translateY(-100%)';
      break;
    case 2:
      topRow.style.transform = 'translateX(-200%)';
      rightCol.style.transform = 'translateY(-100%)';
      break;
    default:
      topRow.style.transform = 'translateX(0)';
      rightCol.style.transform = 'translateY(0)';
      break;
  }

  currentState = (currentState + 1) % 3;
}

// Automātiska rotācija ik pēc 5 sekundēm
setInterval(rotateSections, 5000);

// Peles klikšķu efekts uz sadaļām (testam)
const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    alert(`Tu nospiedi: ${tile.textContent}`);
  });
});
