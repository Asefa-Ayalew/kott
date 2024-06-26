import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { AxiosRequestConfig, AxiosError } from 'axios';
import axiosInstance from './axios-instance';

type AxiosBaseQueryArgs = {
  url: string;
  method: AxiosRequestConfig['method'];
  body?: AxiosRequestConfig['data'];
  headers?: AxiosRequestConfig['headers'];
  params?: AxiosRequestConfig['params'];
};

export const axiosBaseQuery = (): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> =>
  async ({ url, method, body, params }) => {
    try {
      const response = await axiosInstance({
        url,
        method,
        data: body,
        params,
      });
      return { data: response.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data || err.message },
      };
    }
  };