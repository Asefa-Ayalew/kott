import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getCurrentSession } from './get-current-session';
import axios from 'axios';
import { SessionStatus } from '../../models/session-status-enum';
import { Session } from '../../models/session';

export interface AuthState {
  sessionStatus?: SessionStatus;
  session?: Session | null;
}

const initialState: AuthState = {
  sessionStatus: SessionStatus.IS_CHECKING,
  session: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checkSessionExists: (state: any) => {
      const session = getCurrentSession();
      if (session) {
        state.session = { ...session };
        state.sessionStatus = SessionStatus.IS_LOGGED_IN;
      } else {
        state.sessionStatus = SessionStatus.IS_LOGGED_OUT;
      }
    },
    logIn: (state: any, action: PayloadAction<Session>) => {
      state.session = { ...action.payload };
      state.sessionStatus = SessionStatus.IS_LOGGED_IN;
      localStorage.setItem('session', JSON.stringify({ ...state.session }));
    },
    logOut: (state: any) => {
      state.sessionStatus = SessionStatus.IS_LOGGED_OUT;
      state.session = undefined;
      localStorage.removeItem('session');
    },
    updateSession: (state: any, action: PayloadAction<Session>) => {
      state.session = { ...state.session, ...action.payload };
      localStorage.setItem('session', JSON.stringify({ ...state.session }));
    },
  },
});

export const { logIn, logOut, checkSessionExists, updateSession } =
  authSlice.actions;

export const authReducer = authSlice.reducer;

/* Asynchronous logic */
export const refreshAccessToken =
  (refreshToken: string) => async (dispatch: any, getState: any) => {
    try {
      if (refreshToken) {
        const newToken = await axios({
          method: 'POST',
          url: `${process.env['NEXT_PUBLIC_AUTH_API']}/api/auth/refrsh-token`,
          data: { refreshToken: refreshToken },
        });
        const session = getState()?.auth?.session;
        const newSession = {
          ...session,
          ...newToken.data,
          accessTokenIssueDate: new Date(Date.now()).toString(),
          refreshTokenIssueDate: new Date(Date.now()).toString(),
        };
        dispatch(updateSession({ ...newSession }));
      }
    } catch (err) {
      console.log(err);
    }
  };
