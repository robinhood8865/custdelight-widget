import { configureStore } from "@reduxjs/toolkit";
import membershipReducer from "./Slices/membershipSlice";
import voucherReducer from "./Slices/voucherSlice";
import moduleReducer from "./Slices/moduleSlice";
import themeReducer from "./Slices/themeSlice";
import settingReducer from "./Slices/settingSlice";

const reducer = {
  membership: membershipReducer,
  voucher: voucherReducer,
  module: moduleReducer,
  theme: themeReducer,
  setting: settingReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
