import React, {FC, useMemo, useState} from 'react';
import s from './branch.module.scss'
import {TreeType} from "../../API/menuAPI";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectPath, setPath} from "../../app/treeSlice";

type BranchPropsType = {
  currentObject: TreeType
  parentKey: string
  parentPath?: Array<string>
  deepIndex: number
}

export const Branch: FC<BranchPropsType> = ({currentObject, parentKey, parentPath = [], deepIndex}) => {
  const dispatch = useAppDispatch()
  const selectedPath = useAppSelector(selectPath)
  const path = useMemo(() => [...parentPath, parentKey], [parentKey, parentPath])
  const [displayObject, setDisplayObject] = useState(false)

  const onButtonClick = () => {
    setDisplayObject(!displayObject)
    dispatch(setPath(path))
  }

  const isActive = useMemo(() => {
    for (let i = 0; i < selectedPath.length; i++)
      if (selectedPath[deepIndex - i] !== path[deepIndex - i])
        return false
    return true
  }, [deepIndex, selectedPath, path])

  return (
    <div className={s.branch}>
      {parentKey &&
          <div>
              <div className={s.branchItem} onClick={onButtonClick}>
                {Object.keys(currentObject).length > 0 &&
                    <div className={s.button}>
                      {displayObject ? '-' : '+'}
                    </div>}
                  <div className={isActive && displayObject
                    ? s.branchPathName : s.branchName}>
                    {parentKey}
                  </div>
              </div>
          </div>}
      {displayObject &&
          <div>
            {Object.keys(currentObject).map(key =>
              <Branch currentObject={currentObject[key]}
                      parentKey={key}
                      parentPath={path}
                      deepIndex={deepIndex + 1}/>)}
          </div>}
    </div>
  )
}
