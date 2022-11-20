import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  membershipType: 1,
  paymentTerm: 1,
  fees: 99.99,
  useFirstName: false,
  useLastName: false,
  useEmail: false,
  useMobileNumber: false,
  cancellation: 1,
  membershipTerms: "https://www.xxx.com",
};

const MembershipSlice = createSlice({
  name: "Membership",
  initialState,
  reducers: {
    setMemebershipConfigration: (state, action) => action.payload,

    setMembershipType: (state, action) => {
      state.membershipType = action.payload;
    },
    setPaymentTerm: (state, action) => {
      state.paymentTerm = action.payload;
    },
    setFees: (state, action) => {
      state.fees = action.payload;
    },
    setUseFirstName: (state, action) => {
      state.useFirstName = action.payload;
    },
    setUseLastName: (state, action) => {
      state.useLastName = action.payload;
    },
    setUseEmail: (state, action) => {
      state.useEmail = action.payload;
    },
    setUseMobileNumber: (state, action) => {
      state.useMobileNumber = action.payload;
    },
    setCancellation: (state, action) => {
      state.cancellation = action.payload;
    },
    setMembershipTerms: (state, action) => {
      state.membershipTerms = action.payload;
    },
  },
});

const { reducer, actions } = MembershipSlice;

export const {
  setMemebershipConfigration,
  setMembershipType,
  setPaymentTerm,
  setFees,
  setUseFirstName,
  setUseLastName,
  setUseEmail,
  setUseMobileNumber,
  setCancellation,
  setMembershipTerms,
} = actions;
export default reducer;
