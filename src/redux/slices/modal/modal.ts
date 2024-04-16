import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isOpen: boolean;
  addressModal: boolean;
}

const initialState: InitialStateType = {
  isOpen: false,
  addressModal: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state) => {
        state.isOpen = true;
    },
    closeModal: (state) => {
        state.isOpen = false;
    },
    openAddressModal: (state) => {
        state.addressModal = true;
    },
    closeAddressModal: (state) => {
        state.addressModal = false;
    },
  },
});

export const {openModal, closeModal,openAddressModal,closeAddressModal} = modalSlice.actions;
export default modalSlice.reducer;
