import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from './store';
import {TreeType, userAPI} from "../API/menuAPI";

const initialState = {
  myObject: {} as TreeType,
  selectedPath: [] as Array<string>
};

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setMyObject: (state, action: PayloadAction<TreeType>) => {
      state.myObject = action.payload;
    },
    setPath: (state, action: PayloadAction<Array<string>>) => {
      state.selectedPath = action.payload
    }
  }
})

export const {setMyObject, setPath} = treeSlice.actions;

export const selectObject = (state: RootState) => state.tree.myObject
export const selectPath = (state: RootState) => state.tree.selectedPath


export const getMyObject = (): AppThunk =>
  async (dispatch) => {
    const currentObject = await userAPI.getObject()
    dispatch(setMyObject(currentObject));
  };

export default treeSlice.reducer;
