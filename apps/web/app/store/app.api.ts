import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '@repo/ui/axiosBaseQuery';
import { TagsType } from '../models/app.tags';

 const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  tagTypes: TagsType,
  endpoints: (builder) => ({}),
});

export default apiSlice;
