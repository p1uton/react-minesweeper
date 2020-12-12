export const LEVELS = [
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
  {
    id: 3,
    name: 'Jedi',
    rows: 32,
    cols: 60,
    mines: 400,
  },
];

export const SET_STATUS = 'SET_STATUS';
export const RESET_GAME = 'RESET_GAME';
export const FLAG_CELL = 'FLAG_CELL';
export const OPEN_CELLS = 'OPEN_CELLS';
export const PRESS_CELLS = 'PRESS_CELLS';

export const STATUS_NEW = 0;
export const STATUS_PLAY = 1;
export const STATUS_WIN = 2;
export const STATUS_LOST = 3;
