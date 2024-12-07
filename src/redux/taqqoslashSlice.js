import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const taqqoslashSlice = createSlice({
  name: "Taqqoslash",
  initialState: {
    value: JSON.parse(localStorage.getItem("taqqoslash")) || [],
  },
  reducers: {
    addToTaqqoslash(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("taqqoslash", JSON.stringify(state.value));
      toast.success("Taqqoslashga qo'shildi +");
    },
    removeFromTaqqoslash(state, action) {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
      toast.error("Taqqoslashdan olib tashlandi -");
      localStorage.setItem("taqqoslash", JSON.stringify(state.value));
    },
  },
});

export const { addToTaqqoslash, removeFromTaqqoslash } = taqqoslashSlice.actions;
export default taqqoslashSlice.reducer;

