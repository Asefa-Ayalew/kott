"use client"
import { TagsType } from "../models/app.tags";
import apiSlice from "./app.api";


interface QueryMutationOptions<TParams = unknown, TBody = unknown> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: TBody;
  params?: TParams;
  providesTags?: (typeof TagsType)[number][];
  invalidatesTags?: (typeof TagsType)[number][];
  hasParams?: boolean;
}

export const ecommerceApi:any = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getApp: builder.query<any, any>({
      query: ({ url, params = {}, method = 'GET', hasParams = false }) => {
        return {
          url,
          method,
        };
      },
      providesTags: (result, error, { providesTags }) => providesTags || [],
    }),
    app: builder.mutation<any, QueryMutationOptions<any>>({
      query: ({ url, method, body, params = {} }) => {
        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: (result, error, { invalidatesTags }) =>

        invalidatesTags || [],

    }),
  }),
});

export const { useAppMutation, useLazyGetAppQuery, useGetAppQuery } =
  ecommerceApi;
