import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { Post } from '@/lib/types';
import { API_BASE } from '@/lib/const';

const baseQuery = fetchBaseQuery({ baseUrl: API_BASE });

async function baseQueryWithErrorHandling(
  ...args: Parameters<typeof baseQuery>
): Promise<Awaited<ReturnType<typeof baseQuery>>> {
  try {
    return await baseQuery(...args);
  } catch {
    return { error: { status: 'FETCH_ERROR', error: 'Network error' } as FetchBaseQueryError };
  }
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: baseQueryWithErrorHandling,
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
