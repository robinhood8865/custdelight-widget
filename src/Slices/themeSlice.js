import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  styleIndex: 0,
  headerColor: "#812FBF",
  buttonColor: "#812FBF",
  widgetColor: "#812FBF",
  widgetIcon: "custdelight.jpg",
};

const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setThemeConfigration: (state, action) => action.payload,
    setStyleIndex: (state, action) => {
      state.styleIndex = action.payload;
    },
    setHeaderColor: (state, action) => {
      state.headerColor = action.payload;
    },
    setButtonColor: (state, action) => {
      state.buttonColor = action.payload;
    },
    setWidgetColor: (state, action) => {
      state.widgetColor = action.payload;
    },
    setwidgetIcon: (state, action) => {
      state.widgetIcon = action.payload;
    },
  },
});

const { reducer, actions } = ThemeSlice;

export const {
  setStyleIndex,
  setHeaderColor,
  setButtonColor,
  setWidgetColor,
  setwidgetIcon,
  setThemeConfigration,
} = actions;
export default reducer;
