import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from './store';
import {TreeType, userAPI} from "../API/menuAPI";

const initialState = {
  myObject: {} as TreeType,
  isPath: [] as Array<string>
};

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setMyObject: (state, action: PayloadAction<TreeType>) => {
      state.myObject = action.payload;
    },
    setPath: (state, action: PayloadAction<Array<string>>) => {
      state.isPath = action.payload
    }
  }
})

export const {setMyObject, setPath} = treeSlice.actions;

export const selectObject = (state: RootState) => state.tree.myObject;
export const selectPath = (state: RootState) => state.tree.isPath;


export const getMyObject = (): AppThunk =>
  async (dispatch) => {
    const currentObject = await userAPI.getObject()
    dispatch(setMyObject(currentObject));
  };

export default treeSlice.reducer;
