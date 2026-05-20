import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => '/posts',
    }),
    getPostById: build.query({
      query: (id) => `/posts/${id}`,
    }),
    createPost: build.mutation({
      query: (data) => ({
        url: '/posts',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation } = baseApi;

export default baseApi