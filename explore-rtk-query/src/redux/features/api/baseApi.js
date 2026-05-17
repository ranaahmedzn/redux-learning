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
    })
  }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = baseApi;

export default baseApi