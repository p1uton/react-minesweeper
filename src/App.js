import React, {useState, useEffect} from 'react';
import {isNext, getCell, checkStatus, countFlagsNext, initialCells} from './functions';
import {Cell} from './Cell';

// const rows = 16;
// const cols = 30;
// const minesCount = 99;

const levels = [
  {
    id: 0,
    name: 'Beginner',
    rows: 8,
    cols: 8,
    mines: 10,
  },
  {
    id: 1,
    name: 'Intermediate',
    rows: 16,
    cols: 16,
    mines: 40,
  },
  {
    id: 2,
    name: 'Expert',
    rows: 16,
    cols: 30,
    mines: 99,
  },
];


function App() {

  const [level, setLevel] = useState(() => 1);
  const [status, setStatus] = useState(() => 0);
  const [timer, setTimer] = useState(() => 0);
  const [cells, setCells] = useState(() => initialCells(levels[level]));


  useEffect(() => {
    if (1 === status) {
      const interval = setInterval(() => {
        setTimer(value => value + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [status]);


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


  const handleResetClick = event => {
    event.preventDefault();
    resetGame(level);
  };


  const resetGame = newLevel => {
    setLevel(newLevel);
    setStatus(0);
    setTimer(0);
    setCells(initialCells(levels[newLevel]));
  };


  const handleLevelClick = (event, newLevel) => {
    event.preventDefault();
    resetGame(newLevel);
  };


  return (
    <div>
      <div className="container" style={{width: levels[level].cols*20}}>
        <div className="topbar">
          <div className="topbar-block">
            {cells.filter(cell => cell.isMine).length - cells.filter(cell => cell.isFlag).length}
          </div>
          <div className={'status status' + status} onClick={event => handleResetClick(event)}>
          </div>
          <div className="topbar-block">
            {timer}
          </div>
        </div>
        <div className="field" style={{width: levels[level].cols*20, height: levels[level].rows*20}}>
          {cells.map(cell => <Cell
            key={cell.id}
            cell={cell}
            status={status}
            onClick={handleCellClick}
            onMouseDown={handleCellMouseDown}
            onMouseUp={handleCellMouseUp}
          />)}
        </div>
        <div className="bottombar">
          {levels.map(item => <input
            type="button"
            value={item.name}
            onClick={event => handleLevelClick(event, item.id)}
            key={item.id}
          />)}
        </div>
      </div>
    </div>
  );
}

export default App;
