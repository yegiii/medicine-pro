import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  totalQuantity: 0,
  reducers: {},
});

export default cartSlice;
