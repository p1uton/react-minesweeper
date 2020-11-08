export const isNext = (cell1, cell2) => {
  let dc = Math.abs(cell1.col - cell2.col);
  let dr = Math.abs(cell1.row - cell2.row);
  return (dc === 1 && dr === 1) || (dc === 0 && dr === 1) || (dc === 1 && dr === 0);
};

export const getCell = (currentCells, id) => {
  return currentCells.filter(cell => cell.id === id).shift();
};

export const checkStatus = (currentCells, status) => {
  if (0 !== currentCells.filter(cell => cell.isOpen && cell.isMine).length) {
    return 3;
  } else {
    const count1 = currentCells.filter(cell => cell.isMine && !cell.isFlag).length;
    const count2 = currentCells.filter(cell => !cell.isMine && !cell.isOpen).length;
    if ((0 === count1) && (0 === count2)) {
      return 2;
    } else {
      return status;
    }
  }
};

export const countFlagsNext = (currentCells, id) => {
  const currentCell = getCell(currentCells, id);
  return currentCells.filter(cell => isNext(cell, currentCell) && cell.isFlag).length;
};

export const initialCells = ({rows, cols, mines}) => {
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
