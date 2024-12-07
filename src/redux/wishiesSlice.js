import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const wishiesSlice = createSlice({
  name: "Wishies",
  initialState: {
    value: JSON.parse(localStorage.getItem("wishes")) || [],
  },
  reducers: {
    addToWishies(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("wishes", JSON.stringify(state.value));
      toast.success("Saralanganlarga qoshildi 👍");
    },
    removeFromWishies(state, action) {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
      toast.error("Savatdan olib tashlandi 👎");
      localStorage.setItem("wishes", JSON.stringify(state.value));
    },
  },
});

export const { addToWishies, removeFromWishies } = wishiesSlice.actions;
export default wishiesSlice.reducer;
