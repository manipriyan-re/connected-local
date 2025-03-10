import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	toast: {
		type: '',
		message: '',
		isToast: false,
	},
};

const toastSlice = createSlice({
	name: 'toast',
	initialState,
	showToast: (state, action) => {
		const { type, message } = action.payload;
		state.toast = { type, message, isToast: true };
	},
	closeToast: (state) => {
		state.toast = { type: '', message: '', isToast: false };
	},
});

export const { showToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;
