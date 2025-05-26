'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import type { PexelsPhoto } from '@/app/types/interfaces/interfaces';
import { useTranslations } from 'next-intl';

interface CardExposicaoProps {
  photo: PexelsPhoto;
}

export default function CardExposicao({ photo }: CardExposicaoProps) {
  const [favorited, setFavorited] = useState(false);
    const t = useTranslations('Galeria');

  const handleShare = async () => {
    const shareUrl = photo.url;
    if (navigator.share) {
      try {
        await navigator.share({
          title: photo.alt || t('untitled'),
          text: `${t('share')} ${photo.photographer}`,
          url: shareUrl,
        });
      } catch (error) {
        console.error('Erro ao compartilhar:', error);
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert(t('copied'));
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <div className="relative h-60 w-full bg-gray-700">
        <Image
          src={photo.src.large}
          alt={photo.alt || 'Imagem Pexels'}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-white">{photo.alt || t('untitled')}</h3>
        <p className="text-sm text-gray-300">{t('by')} {photo.photographer}</p>
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={handleShare} aria-label={t('share')}>
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
