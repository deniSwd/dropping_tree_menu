import React from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {getMyObject, selectObject,} from '../../app/treeSlice';

export function MyMenu() {
  const myObject = useAppSelector(selectObject);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(getMyObject())}>
        My Tree
      </button>
      <div>
        {Object.keys(myObject).map(key => <div>{key}</div> )}
      </div>
    </div>
  );
}
