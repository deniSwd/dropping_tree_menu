import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getMyObject, selectObject,} from '../../app/treeSlice';

export function MyMenu() {
  const myObject = useAppSelector(selectObject);
  const dispatch = useAppDispatch();
console.log(myObject)
  return (
    <div>
      <button onClick={()=>dispatch(getMyObject())}>
        MY MENU
      </button>
      <div>
        {JSON.stringify(myObject)}
      </div>
    </div>
  );
}
