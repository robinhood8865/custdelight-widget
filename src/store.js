import { configureStore } from "@reduxjs/toolkit";
import membershipReducer from "./Slices/membershipSlice";
import voucherReducer from "./Slices/voucherSlice";
import moduleReducer from "./Slices/moduleSlice";
import themeReducer from "./Slices/themeSlice";
import settingReducer from "./Slices/settingSlice";
import widgetReducer from "./Slices/widgetSlice";
import integrationReducer from "./Slices/integrationSlice";
const reducer = {
  membership: membershipReducer,
  voucher: voucherReducer,
  module: moduleReducer,
  theme: themeReducer,
  setting: settingReducer,
  widget: widgetReducer,
  integration: integrationReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
