import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from './store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
})

export const {incrementByAmount} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;


export const incrementIfOdd =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      const currentValue = selectCount(getState());
      if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
      }
    };

export default counterSlice.reducer;