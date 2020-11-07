import React, {useState} from 'react';
import {isNext, getCell, checkStatus, countFlagsNext} from './functions';
import {Cell} from './Cell';

const rows = 16;
const cols = 30;
const minesCount = 99;

const statuses = [
  'new',
  'play',
  'win',
  'lost',
];

const initialCells = () => {
  let cells = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({
        id: r * cols + c,
        row: r,
        col: c,
        isOpen: false,
        isMine: false,
        isFlag: false,
        isMouseDown: false,
        minesNext: 0,
      });
    }
  }

  let minesLeft = minesCount;

  while (minesLeft > 0) {
    let rand = Math.floor(Math.random() * cells.length);
    if (!cells[rand].isMine) {
      cells[rand].isMine = true;
      minesLeft--;
    }
  }

  cells.map(cell => {
    cell.minesNext = cells.filter(cell2 => isNext(cell, cell2) && cell2.isMine).length;
    return cell;
  });

  return cells;
};


function App() {

  const [cells, setCells] = useState(() => initialCells());
  const [status, setStatus] = useState(() => 0);


  const handleCellClick = (event, id, isRightClick) => {
    event.preventDefault();

    if ((2 === status) || (3 === status)) {
      return;
    }

    if (0 === status) {
      setStatus(1);
    }

    let currentCells = cells.concat();

    const currentCell = getCell(currentCells, id);

    if (isRightClick) {
      if (!currentCell.isOpen) {
        flagCell(currentCells, id);
      }
    } else {
      if (!currentCell.isFlag) {
        if (!currentCell.isOpen) {
          openCell(currentCells, id);
        } else {
          if (currentCell.minesNext === countFlagsNext(currentCells, id)) {
            currentCells
              .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag && cell.isMine)
              .map(cell => openCell(currentCells, cell.id));
            if (3 !== checkStatus(currentCells, status)) {
              currentCells
                .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag)
                .map(cell => openCell(currentCells, cell.id));
            }
          }
        }
      }
    }

    setCells(currentCells);

    setStatus(status => checkStatus(currentCells, status));
  };


  const handleCellMouseDown = (event, id) => {
    event.preventDefault();
    // console.log('handleCellMouseDown', id);

    let currentCells = cells.concat();
    const currentCell = getCell(currentCells, id);

    if (currentCell.isOpen) {
      currentCells
        .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag)
        .map(cell => cell.isMouseDown = true);

      setCells(currentCells);
    }
  };


  const handleCellMouseUp = (event, id) => {
    event.preventDefault();
    // console.log('handleCellMouseUp', id);

    let currentCells = cells.concat();
    const currentCell = getCell(currentCells, id);

    if (currentCell.isOpen) {
      currentCells
        .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag)
        .map(cell => cell.isMouseDown = false);

      setCells(currentCells);
    }
  };


  const flagCell = (currentCells, id) => {
    currentCells.map(cell => cell.id === id ? cell.isFlag = !cell.isFlag : null);
  };


  const openCell = (currentCells, id) => {
    currentCells.map(cell => cell.id === id ? cell.isOpen = true : null);

    const currentCell = getCell(currentCells, id);
    if (!currentCell.isMine && (0 === currentCell.minesNext)) {
      currentCells
        .filter(cell => isNext(cell, currentCell) && !cell.isOpen && !cell.isFlag)
        .map(cell => openCell(currentCells, cell.id));
    }
  };


  return (
    <div>
      <div className="field" style={{width: cols*20, height: rows*20}}>
        {cells.map(cell => <Cell
          key={cell.id}
          cell={cell}
          status={status}
          onClick={handleCellClick}
          onMouseDown={handleCellMouseDown}
          onMouseUp={handleCellMouseUp}
        />)}
      </div>
      <hr />
      status: {statuses[status]}
      <br />
      mines left: {cells.filter(cell => cell.isMine).length - cells.filter(cell => cell.isFlag).length}
    </div>
  );
}

export default App;
