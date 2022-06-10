import React, {useEffect} from 'react';
import {Branch} from './components/myMenu/Branch';
import s from './App.module.scss';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {getMyObject, selectObject, selectPath} from "./app/treeSlice";


export const App = () => {
  const myObject = useAppSelector(selectObject);
  const isPath = useAppSelector(selectPath).join(' / ')
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMyObject())
  }, [dispatch])
  return (
    <div className={s.app}>
      <div className={s.path}>
        PATH: {isPath}
      </div>
      <div className={s.tree}>
        <Branch currentObject={myObject} parentKey={'root'} deepIndex={0}/> {/*add index*/}
      </div>
    </div>
  )
}

export default App;
