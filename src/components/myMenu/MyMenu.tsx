import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCount,} from '../../app/counterSlice';

export function MyMenu() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>

    </div>
  );
}
