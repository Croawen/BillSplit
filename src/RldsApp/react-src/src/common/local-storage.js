import { CURRENT_USER } from "./constants";

export const setCurrentUser = user => {
  localStorage.setItem(CURRENT_USER, JSON.stringify(user));
};

export const getCurrentUserFromLS = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER));
};

export const clearUserFromLocalStorage = () => {
  localStorage.removeItem(CURRENT_USER);
};