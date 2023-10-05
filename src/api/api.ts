import axios from 'axios';

import { RequestSubmitFormType } from '../store/types';

const baseConfigService = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

export const apiApp = {
  submitForm: async (dataForm: RequestSubmitFormType) => {
    const { data } = await baseConfigService.post('/posts', dataForm);

    return data;
  },
};
