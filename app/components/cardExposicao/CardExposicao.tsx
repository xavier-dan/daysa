'use client';
import React from 'react';
import Link from 'next/link';
import type { Artwork } from '@/app/types/interfaces/interfaces';

interface CardExposicaoProps {
  artwork: Artwork;
  iiifBase: string;
}

export default function CardExposicao({ artwork, iiifBase }: CardExposicaoProps) {
  const { image_id, thumbnail, title, artist_title, date_display } = artwork;
  const iiifUrl = image_id
    ? `${iiifBase}/${image_id}/full/400,/0/default.jpg`
    : '/placeholder.jpg';

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <Link href={`/gallery/${artwork.id}`}>
        <div className="relative h-60 w-full bg-gray-700">
          <img
            src={iiifUrl}
            alt={thumbnail?.alt_text || title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
          <p className="text-sm text-gray-300">{artist_title}</p>
          <p className="text-sm text-gray-500 mt-2">{date_display}</p>
        </div>
      </Link>
    </div>
  );
}
