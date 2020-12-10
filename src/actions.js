import { FLAG_CELL, OPEN_CELLS, PRESS_CELLS, RESET_GAME, SET_STATUS } from './consts';

export const setStatusAction = status => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};

export const resetGameAction = level => {
  return {
    type: RESET_GAME,
    payload: level,
  };
};

export const flagCellAction = id => {
  return {
    type: FLAG_CELL,
    payload: id,
  };
};

export const openCellsAction = id => {
  return {
    type: OPEN_CELLS,
    payload: id,
  };
};

export const pressCellsAction = id => {
  return {
    type: PRESS_CELLS,
    payload: id,
  };
};