//const host = "https://expense-tracker-app-knl1.onrender.com";
const host = "https://expense-tracker-app-main.vercel.app";

export const setAvatarAPI = `${host}/api/auth/setAvatar`;
export const registerAPI = `${host}/api/auth/register`;
export const loginAPI = `${host}/api/auth/login`;
export const addTransaction = `${host}/api/v1/addTransaction`;
export const getTransactions = `${host}/api/v1/getTransaction`;
export const editTransactions = `${host}/api/v1/updateTransaction`;
export const deleteTransactions = `${host}/api/v1/deleteTransaction`;
