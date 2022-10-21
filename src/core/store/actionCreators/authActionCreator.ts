import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { api, TOKEN } from "core/utils";
import { IAuth, IAuthResponse, ISignIn } from "core/models";

export const signIn = createAsyncThunk(
  "auth/login",
  async (authData: ISignIn, thunkAPI) => {
    try {
      const { data } = await api.post<IAuthResponse>("/auth/login", {
        ...authData.data,
      });
      localStorage.setItem(TOKEN, data.token);
      authData.callback();
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/login",
  async (authData: IAuth, thunkAPI) => {
    try {
      await api.post<IAuthResponse>("/auth/register", {
        ...authData,
      });
    } catch (e) {
      const err = e as AxiosError;
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
