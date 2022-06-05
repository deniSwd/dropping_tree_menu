import React, {useEffect} from 'react';
import {Branch} from './components/myMenu/Branch';
import s from './App.module.scss';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {getMyObject, selectObject} from "./app/treeSlice";


export const App = () => {
  const myObject = useAppSelector(selectObject);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMyObject())
  }, [dispatch])
  return (
    <div className={s.tree}>
      <Branch currentObject={myObject} parentKey={'root'}/>
    </div>
  )
}

export default App;
