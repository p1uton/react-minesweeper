import { FLAG_CELL, LEVELS, OPEN_CELLS, PRESS_CELLS, RESET_GAME, SET_STATUS, STATUS_NEW } from '../consts';
import { initialCells } from '../functions';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case RESET_GAME:
      return {
        ...state,
        level: action.payload,
        status: STATUS_NEW,
        cells: initialCells(LEVELS[action.payload]),
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case FLAG_CELL:
      return {
        ...state,
        cells: state.cells.map(
          cell => cell.id === action.payload
            ? {
              ...cell,
              isFlag: !cell.isFlag,
            }
            : cell
        ),
      };
    case OPEN_CELLS:
      return {
        ...state,
        cells: state.cells.map(
          cell => -1 !== action.payload.indexOf(cell.id)
            ? {
              ...cell,
              isOpen: true,
            }
            : cell
        ),
      };
    case PRESS_CELLS:
      return {
        ...state,
        cells: state.cells.map(
          cell => -1 !== action.payload.indexOf(cell.id)
            ? {
              ...cell,
              isPressed: !cell.isPressed,
            }
            : cell
        ),
      };
    default:
      return state;
  }
};