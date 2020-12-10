import React from 'react';
import { STATUS_NEW, STATUS_PLAY, STATUS_WIN, STATUS_LOST } from '../consts';
import { Cell } from '../components/Cell';
import { useSelector, useDispatch } from 'react-redux';
import { flagCellAction, openCellsAction, pressCellsAction, setStatusAction } from '../actions';
import { getCell, findNextCells, countFlagsNext, checkStatus } from '../functions';

export const Field = () => {

  const dispatch = useDispatch();

  const level = useSelector(state => state.level);
  const cells = useSelector(state => state.cells);
  const status = useSelector(state => state.status);

  const onCellMouseDown = (event, id) => {
    event.preventDefault();

    if (STATUS_NEW === status) {
      dispatch(setStatusAction(STATUS_PLAY));
    }

    if ((STATUS_WIN === status) || (STATUS_LOST === status)) {
      return;
    }

    const currentCell = getCell(cells, id);

    if (2 === event.button) {
      if (!currentCell.isOpen) {
        dispatch(flagCellAction(id));
      }
    } else {
      if (!currentCell.isOpen) {
        if (!currentCell.isFlag) {
          dispatch(pressCellsAction([id]));
        }
      } else {
        dispatch(pressCellsAction(findNextCells(cells, id, [], false).map(cell => cell.id)));
      }
    }
  }

  const onCellMouseUp = (event, id) => {
    event.preventDefault();

    if ((STATUS_WIN === status) || (STATUS_LOST === status)) {
      return;
    }

    const currentCell = getCell(cells, id);

    if (2 === event.button) {

    } else {
      if (!currentCell.isOpen) {
        if (!currentCell.isFlag) {
          dispatch(openCellsAction([id]));
          if (currentCell.isMine) {
            dispatch(setStatusAction(STATUS_LOST));
          } else {
            if ((countFlagsNext(cells, id) === currentCell.minesNext) || (0 === currentCell.minesNext)) {
              dispatch(openCellsAction(findNextCells(cells, id, [], true).map(cell => cell.id)));
            }
          }
        }
      } else {
        dispatch(pressCellsAction(findNextCells(cells, id, [], false).map(cell => cell.id)));
        if (countFlagsNext(cells, id) === currentCell.minesNext) {
          dispatch(openCellsAction(findNextCells(cells, id, [], true).map(cell => cell.id)));
        }
      }
    }

  }

  const onCellClick = (event, id) => {
    event.preventDefault();

    const newStatus = checkStatus(cells);

    if (null !== newStatus) {
      dispatch(setStatusAction(newStatus));
    }
  };

  return (
    <div className={'field field-' + level}>
      {
        cells.map(
          cell => <Cell
            key={cell.id}
            cell={cell}
            status={status}
            onCellMouseDown={onCellMouseDown}
            onCellMouseUp={onCellMouseUp}
            onCellClick={onCellClick}
          />
        )
      }
    </div>
  );
};