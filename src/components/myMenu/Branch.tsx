import React, {FC, useState} from 'react';
import s from './branch.module.scss'
import {TreeType} from "../../API/menuAPI";

type BranchPropsType = {
  currentObject: TreeType
  parentKey?: string
}

export const Branch: FC<BranchPropsType> = ({currentObject, parentKey}) => {

  const [displayObject, setDisplayObject] = useState(false)

  return (
    <div className={s.branch}>
      {parentKey &&
          <div>
              <div className={s.branchItem}>
                {Object.keys(currentObject).length > 0 &&
                    <div className={s.button}>
                      {displayObject ? '-' : '+'}
                    </div>}
                  <div className={s.branchName}
                       onClick={() => setDisplayObject(!displayObject)}>
                    {parentKey}
                  </div>
              </div>
          </div>}
      {displayObject &&
          <div>
            {Object.keys(currentObject).map(key => <Branch currentObject={currentObject[key]} parentKey={key}/>)}
          </div>}
    </div>
  )
}
