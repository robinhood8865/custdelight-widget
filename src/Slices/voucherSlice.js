import { createSlice } from "@reduxjs/toolkit";

const widget = localStorage.getItem("widget");

const initialState = widget
  ? JSON.parse(widget).module.voucher
  : {
      voucherType: 1,
      expiryTerm: 1,
      fees: 99,
      voucherFirstName: false,
      voucherLastName: false,
      voucherEmail: false,
      voucherMobileNumber: false,
      redemptionType: false,
      redemption: 200,
      voucherTerms: "https://www.xxx.com",
    };

const VoucherSlice = createSlice({
  name: "Voucher",
  initialState,
  reducers: {
    setVoucherConfigration: (state, action) => action.payload,
    setVoucherType: (state, action) => {
      state.voucherType = action.payload;
    },
    setExpiryTerm: (state, action) => {
      state.expiryTerm = action.payload;
    },
    setFees: (state, action) => {
      state.fees = action.payload;
    },
    setVoucherFirstName: (state, action) => {
      state.voucherFirstName = action.payload;
    },
    setVoucherLastName: (state, action) => {
      state.voucherLastName = action.payload;
    },
    setVoucherEmail: (state, action) => {
      state.voucherEmail = action.payload;
    },
    setVoucherMobileNumber: (state, action) => {
      state.voucherMobileNumber = action.payload;
    },
    setRedemptionType: (state, action) => {
      state.redemptionType = action.payload;
    },
    setRedemption: (state, action) => {
      state.redemption = action.payload;
    },
    setVoucherTerms: (state, action) => {
      state.voucherTerms = action.payload;
    },
  },
});

const { reducer, actions } = VoucherSlice;

export const {
  setVoucherType,
  setExpiryTerm,
  setFees,
  setVoucherFirstName,
  setVoucherLastName,
  setVoucherEmail,
  setVoucherMobileNumber,
  setRedemptionType,
  setRedemption,
  setVoucherTerms,
  setVoucherConfigration,
} = actions;
export default reducer;
