import { LEVELS, STATUS_LOST, STATUS_NEW, STATUS_WIN } from "./consts";

export const initialCells = ({ rows, cols, mines }) => {
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
        isPressed: false,
        minesNext: 0,
      });
    }
  }

  let minesLeft = mines;

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


export const isNext = (cell1, cell2) => {
  const dc = Math.abs(cell1.col - cell2.col);
  const dr = Math.abs(cell1.row - cell2.row);
  return (dc === 1 && dr === 1) || (dc === 0 && dr === 1) || (dc === 1 && dr === 0);
};


export const getCell = (currentCells, id) => {
  return currentCells.filter(cell => cell.id === id).shift();
};


export const checkStatus = (currentCells) => {
  if (0 !== currentCells.filter(cell => cell.isOpen && cell.isMine).length) {
    return STATUS_LOST;
  } else {
    const count1 = currentCells.filter(cell => cell.isMine && !cell.isFlag).length;
    const count2 = currentCells.filter(cell => !cell.isMine && !cell.isOpen).length;
    if ((0 === count1) && (0 === count2)) {
      return STATUS_WIN;
    } else {
      return null;
    }
  }
};


export const countFlagsNext = (currentCells, id) => {
  const currentCell = getCell(currentCells, id);
  return currentCells.filter(cell => isNext(cell, currentCell) && cell.isFlag).length;
};


export const findNextCells = (currentCells, id, foundCells, isSearchTree) => {
  const currentCell = getCell(currentCells, id);

  const resultCells = currentCells.filter(
    cell => isNext(cell, currentCell)
      &&
      !cell.isOpen
      &&
      !cell.isFlag
      &&
      -1 === foundCells.indexOf(cell.id)
  );

  resultCells.forEach(cell => {
    foundCells.push(cell.id);
  });

  if (isSearchTree) {
    resultCells
      .filter(cell => (0 === cell.minesNext))
      .forEach(cell => findNextCells(currentCells, cell.id, foundCells, isSearchTree)
        .forEach(cell => resultCells.push(cell))
      );
  }

  return resultCells;
};


export const loadLevel = () => {
  try {
    return localStorage.getItem('level');
  } catch {
    return null;
  }
};


export const saveLevel = level => {
  try {
    localStorage.setItem('level', level);
  } catch {
  }
};


export const initialState = () => {
  const savedLevel = localStorage.getItem('level');
  const initialLevel = (null !== savedLevel) ? savedLevel : 1;
  return {
    level: initialLevel,
    status: STATUS_NEW,
    cells: initialCells(LEVELS[initialLevel]),
  };
};