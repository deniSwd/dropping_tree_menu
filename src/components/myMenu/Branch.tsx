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
      {parentKey && <div>
        {Object.keys(currentObject).length > 0 &&
            <button className={s.button}
                    onClick={() => setDisplayObject(!displayObject)}>
              {displayObject ? '-': '+'}
            </button>}
          <span>{parentKey}</span>
      </div>}
      {displayObject && <div>
        {Object.keys(currentObject).map(key => <Branch currentObject={currentObject[key]} parentKey={key}/>)}
      </div>}
    </div>
  )
}
