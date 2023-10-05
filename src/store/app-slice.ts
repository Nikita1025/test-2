import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { apiApp } from '../api/api';

import { AsyncThunkConfig, RequestSubmitFormType, ResponseSubmitFormType } from './types';

type AuthState = {
  dataForm: boolean;
};

const initialState: AuthState = {
  dataForm: false,
};

const slice = createSlice({
  initialState,
  name: 'app',
  reducers: {},
});

export const submitForm = createAsyncThunk<
  ResponseSubmitFormType,
  RequestSubmitFormType,
  AsyncThunkConfig
>('app/submitForm', async (dataForm, {}) => {
  try {
    const { data } = await apiApp.submitForm(dataForm);

    return data;
  } catch (error) {
    console.log(error);
  }
});
export const appReducer = slice.reducer;
