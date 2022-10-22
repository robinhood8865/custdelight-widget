import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleMemberShip: false,
  visibleVouchers: false,
  visiblePayment: false,
  moduleIndex: 1,
};

const ModuleSlice = createSlice({
  name: "Module",
  initialState,
  reducers: {
    setMemberShip: (state, action) => {
      state.visibleMemberShip = action.payload;
    },
    setVouchers: (state, action) => {
      state.visibleVouchers = action.payload;
    },
    setPayment: (state, action) => {
      state.visiblePayment = action.payload;
    },
    setModuleIndex: (state, action) => {
      state.moduleIndex = action.payload;
    },
  },
});

const { reducer, actions } = ModuleSlice;

export const { setMemberShip, setVouchers, setPayment, setModuleIndex } =
  actions;
export default reducer;
