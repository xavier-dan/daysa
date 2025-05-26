'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import type { Artwork } from '@/app/types/interfaces/interfaces';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';

interface CardExposicaoProps {
  artwork: Artwork;
  iiifBase: string;
}

export default function CardExposicao({ artwork, iiifBase }: CardExposicaoProps) {
  const { image_id, thumbnail, title, artist_title, date_display } = artwork;
  const [favorited, setFavorited] = useState(false);

  const iiifUrl = image_id
    ? `${iiifBase}/${image_id}/full/400,/0/default.jpg`
    : '/placeholder.jpg';

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/gallery/${artwork.id}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Confira esta obra de ${artist_title}`,
          url: shareUrl,
        });
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert('Link copiado para a área de transferência!');
    }
  };

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
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
        <p className="text-sm text-gray-300">{artist_title}</p>
        <p className="text-sm text-gray-500 mt-2">{date_display}</p>
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={handleShare} aria-label="Compartilhar">
            <FaShareAlt className="text-white hover:text-blue-400 w-5 h-5" />
          </button>
          <button onClick={() => setFavorited(!favorited)} aria-label="Favoritar">
            {favorited ? (
              <FaHeart className="text-red-500 w-5 h-5" />
            ) : (
              <FaRegHeart className="text-white hover:text-red-400 w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
