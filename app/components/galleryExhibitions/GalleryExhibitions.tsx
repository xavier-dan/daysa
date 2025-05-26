'use client';
import React from 'react';
import CardExposicao from '../cardExposicao/CardExposicao';
import { useGetArtworksWithFieldsQuery } from '@/app/api/artApi';
// import type { ArtworkResponse } from '@/app/types/interfaces/interfaces';

export default function GalleryExhibitions() {
  const { data, error, isLoading } = useGetArtworksWithFieldsQuery({ page: 1, limit: 8 });

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error loading artworks.</p>;

  const iiifBase = data.config.iiif_url;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {data.data.map((art) => (
        <CardExposicao key={art.id} artwork={art} iiifBase={iiifBase} />
      ))}
    </div>
  );
}