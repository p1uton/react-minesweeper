import React from 'react';

export const Status = ({ status, onClick }) => {
  return (
    <div
      className={'status status' + status}
      onClick={event => onClick(event)}
    />
  );
};