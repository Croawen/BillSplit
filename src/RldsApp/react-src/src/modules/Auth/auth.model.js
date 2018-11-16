import produce from 'immer';
import {
    getCurrentUserFromLS,
    setCurrentUser,
    clearUserFromLocalStorage,
  } from '../../common/local-storage';

export const currentUserModel = {
    state: {
        currentUser: getCurrentUserFromLS(),
    },

    reducers: {
        setCurrentUser(state, payload) {
            return produce(state, draft => {
                draft.currentUser = payload;
            });
        },

        clearUser(state, payload) {
            return produce(state, draft => {
                draft.currentUser = null;
            });
        },
    },

    effects: dispatch => ({
        async register({ email, password }) {
        },

        async confirmEmail({ token }) {
        },

        async logIn({ email, password }) {
            const user = { email: "test@gmail.com" };
            //set user in local storage
            setCurrentUser(user);
            //set user in redux
            this.setCurrentUser(user);
            return user;
        },

        async passwordReset({ email }) {
        },

        async setNewPassword({ token, newPassword }) {
        },

        logOut() {
            clearUserFromLocalStorage();
            this.clearUser();
        },
    }),
};
