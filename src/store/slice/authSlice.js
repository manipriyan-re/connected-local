// store/authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action for logging in
export const login = createAsyncThunk(
	'auth/login',
	async ({ username, password }, { rejectWithValue }) => {
		try {
			const response = await fetch('https://dummyjson.com/users');
			if (!response.ok) {
				throw new Error('Login failed');
			}

			const data = await response.json();
			return data; // assuming the API returns the user data and token
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

// Slice definition
const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: null,
		status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
		error: null,
		isLoggedIn: false,
		menuList: [],
		subMenuList: {},
	},
	reducers: {
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isLoggedIn = false;
		},
		getMenuList: (state) => {
			state.menuList = [
				{
					name: 'Monitoring',
					path: '/monitoring',
					icon: 'dash-menu.svg',
					isMainMenu: false,
					subMenu: [
						{
							name: 'Vehicle Dashboard',
							icon: 'veh-dash-icon.svg',
							path: '/monitoring/vehicle-dashboard',
						},
						{
							name: 'Trip Summary',
							icon: 'trip-sum-icon.svg',
							path: '/monitoring/trip-summary',
						},
					],
				},
				{
					name: 'Alert Support',
					icon: 'alerts-menu.svg',
					isMainMenu: true,
					path: '/alerts-support',
					subMenu: [],
				},
				{
					name: 'Vehicle Control',
					path: '/vehicle-control',
					icon: 'vehicle-control.svg',
					isMainMenu: false,
					subMenu: [
						{
							name: 'Vehicle Management',
							icon: 'veh-mang-icon.svg',
							path: '/vehicle-control/vehicle-management',
						},
					],
				},
				{
					name: 'Configuration',
					path: '/configuration',
					icon: 'config-menu.svg',
					isMainMenu: false,
					subMenu: [
						{
							name: 'Variant Management',
							icon: 'config-sub-icon.svg',
							path: '/configuration/variant-management',
						},
						{
							name: 'PIN Management',
							icon: 'config-sub-icon.svg',
							path: '/configuration/pin-management',
						},
					],
				},
				{
					name: 'Reports',
					path: '/reports',
					icon: 'reports.svg',
					isMainMenu: false,
					subMenu: [
						{
							name: 'Deep Log Event History',
							icon: 'reports-icon.svg',
							path: '/reports/deep-log-event-history',
						},
						{
							name: 'Vehicle Logger',
							icon: 'reports-icon.svg',
							path: '/reports/vehicle-logger',
						},
					],
				},
			];
		},
		setSubMenu: (state, action) => {
			state.subMenuList = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.isLoggedIn = true;
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export const { logout, getMenuList, setSubMenu } = authSlice.actions;

export default authSlice.reducer;
