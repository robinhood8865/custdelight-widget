import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingIndex: 0,
  subDomain: "",
  customerPortal: "",
  logoUrl: "logourl",
  branding: false,
  senderName: "",
  senderEmail: "",
};

const SettingSlice = createSlice({
  name: "Setting",
  initialState,
  reducers: {
    setSettingConfigration: (state, action) => action.payload,
    setSettingIndex: (state, action) => {
      state.settingIndex = action.payload;
    },
    setSubDomain: (state, action) => {
      state.subDomain = action.payload;
    },
    setCustomerPortal: (state, action) => {
      state.customerPortal = action.payload;
    },
    setLogoUrl: (state, action) => {
      state.logoUrl = action.payload;
    },
    setBranding: (state, action) => {
      state.branding = action.payload;
    },
    setSenderName: (state, action) => {
      state.senderName = action.payload;
    },
    setSenderEmail: (state, action) => {
      state.senderEmail = action.payload;
    },
  },
});

const { reducer, actions } = SettingSlice;

export const {
  setSettingIndex,
  setSubDomain,
  setCustomerPortal,
  setLogoUrl,
  setBranding,
  setSenderName,
  setSenderEmail,
  setSettingConfigration,
} = actions;
export default reducer;
