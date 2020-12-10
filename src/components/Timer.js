import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { STATUS_NEW, STATUS_PLAY } from '../consts';

export const Timer = () => {

  const status = useSelector(state => state.status);

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (STATUS_NEW === status) {
      setTimer(0);
    } else if (STATUS_PLAY === status) {
      const interval = setInterval(() => {
        setTimer(value => value + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <div className="topbar-block">
      {timer}
    </div>
  );
};