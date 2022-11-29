import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  voucherCount: [],
  totalPrice: 0,
};

const WidgetSlice = createSlice({
  name: "Widget",
  initialState,
  reducers: {
    setVoucherByIndex: (state, action) => {
      const { voucherIndex, count } = action.payload;
      state.voucherCount[voucherIndex] = count;
    },
    setVoucherCount: (state, action) => {
      state.voucherCount = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    addTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
  },
});

const { reducer, actions } = WidgetSlice;

export const {
  setVoucherCount,
  setVoucherByIndex,
  setTotalPrice,
  addTotalPrice,
} = actions;
export default reducer;
