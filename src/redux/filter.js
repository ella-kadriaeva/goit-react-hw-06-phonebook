import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'ddd',
};

export const counterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = counterSlice.actions;

export default counterSlice.reducer;
