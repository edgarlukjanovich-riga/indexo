import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '@/lib/types';
import { API_BASE } from '@/lib/const';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postsApi;
