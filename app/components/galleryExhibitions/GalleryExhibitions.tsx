'use client';
import React from 'react';
import CardExposicao from '../cardExposicao/CardExposicao';
import { useGetPexelsPhotosQuery } from '@/app/api/pexelsApi';
import type { PexelsPhoto } from '@/app/types/interfaces/interfaces';
import { useTranslations } from 'next-intl';

export default function GalleryExhibitions() {
  const { data, error, isLoading } = useGetPexelsPhotosQuery({ per_page: 8 });
    const t = useTranslations('Galeria');

  if (isLoading) return <p>{t('loading')}</p>;
  if (error || !data) return <p>{t('error')}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {data.photos.map((photo: PexelsPhoto) => (
        <CardExposicao key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
