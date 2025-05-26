import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ArtworkResponse, Artwork } from '@/app/types/interfaces/interfaces';

export const artApi = createApi({
  reducerPath: 'artApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/' }),
  tagTypes: ['Artworks'],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  keepUnusedDataFor: 60,
  endpoints: (builder) => ({
    getArtworksWithFields: builder.query<ArtworkResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 8 }) => ({
        url: 'artworks',
        params: {
          page,
          limit,
          fields: 'id,title,artist_title,date_display,thumbnail,image_id',
        },
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ id }) => ({ type: 'Artworks' as const, id })),
              { type: 'Artworks', id: 'LIST' },
            ]
          : [{ type: 'Artworks', id: 'LIST' }],
    }),
    getArtwork: builder.query<Artwork, number>({
      query: (id) => ({ url: `artworks/${id}`, params: { fields: 'id,title,artist_title,date_display,medium_display,thumbnail,image_id' } }),
      providesTags: (result, error, id) => [{ type: 'Artworks', id }],
    }),
  }),
});

export const { useGetArtworksWithFieldsQuery, useGetArtworkQuery } = artApi;
