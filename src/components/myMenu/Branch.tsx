import React, {FC, useMemo, useState} from 'react';
import s from './branch.module.scss'
import {TreeType} from "../../API/menuAPI";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectPath, setPath} from "../../app/treeSlice";

type BranchPropsType = {
  currentObject: TreeType
  parentKey: string
  parentPath?: Array<string>
}

export const Branch: FC<BranchPropsType> = ({currentObject, parentKey, parentPath = []}) => {
  const dispatch = useAppDispatch();
  const isPath = useAppSelector(selectPath);
  const path = useMemo(() => [...parentPath, parentKey], [parentKey, parentPath])
  const [displayObject, setDisplayObject] = useState(false)

  const onButtonClick = () => {
    setDisplayObject(!displayObject)
    dispatch(setPath(path))
  }

  return (
    <div className={s.branch}>
      {parentKey &&
          <div>
              <div className={s.branchItem} onClick={onButtonClick}>
                {Object.keys(currentObject).length > 0 &&
                    <div className={s.button}>
                      {displayObject ? '-' : '+'}
                    </div>}
                  <div className={isPath.includes(parentKey) && displayObject ? s.branchPathName : s.branchName }>
                    {parentKey}
                  </div>
              </div>
          </div>}
      {displayObject &&
          <div>
            {Object.keys(currentObject).map(key => <Branch currentObject={currentObject[key]}
                                                           parentKey={key}
                                                           parentPath={path}/>)}
          </div>}
    </div>
  )
}
