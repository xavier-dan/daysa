import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PexelsResponse } from '@/app/types/interfaces/interfaces';

const PEXELS_API_KEY = '0odNfpJNPzM32vy7DuOyau2o1M6KHKPtXYJxazqqUx5oITYjOlwhJuQG';

export const pexelsApi = createApi({
  reducerPath: 'pexelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.pexels.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', PEXELS_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPexelsPhotos: builder.query<PexelsResponse, { per_page?: number; page?: number }>({
      query: ({ per_page = 8, page = 1 }) => ({
        url: 'search',
        params: {
          query: 'art painting', 
          per_page,
          page,
        },
      }),
    }),
  }),
});

export const { useGetPexelsPhotosQuery } = pexelsApi;
