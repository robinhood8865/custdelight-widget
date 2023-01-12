import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airtableBaseID: "",
  airtableAPIKey: "",
  airtableState: 0,
  publishableKey: "",
  secretKey: "",
};

const IntegrationSlice = createSlice({
  name: "Integration",
  initialState,
  reducers: {
    setIntegrationConfigration: (state, action) => action.payload,
  },
});

const { reducer, actions } = IntegrationSlice;

export const { setIntegrationConfigration } = actions;
export default reducer;
