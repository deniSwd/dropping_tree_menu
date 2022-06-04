import React, {FC, useState} from 'react';
import s from './branch.module.scss'
import {TreeType} from "../../API/menuAPI";

type BranchPropsType = {
  currentObject: TreeType
}

export const Branch: FC<BranchPropsType> = ({currentObject}) => {

  const [displayObject, setDisplayObject] = useState<boolean>(false)
  console.log(Object.keys(currentObject))
  return (
    <div className={s.branch}>
      <div>

        <div className={s.childObject}>
          {Object.keys(currentObject).map(currentKey =>
            <div className={s.item}>
              {Object.keys(currentObject).length > 0 &&
                  <button className={s.button}
                          onClick={() => setDisplayObject(!displayObject)}>
                      +
                  </button>
              }
              <div>
                {currentKey}
              </div>
              {displayObject &&
                  <Branch currentObject={currentObject[currentKey]}/>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
