'use client';

import Image from 'next/image';
import { Exposicao } from '@/app/types/interfaces/interfaces';
import { useTranslations } from 'next-intl';

interface CardExposicaoProps {
  exposicao: Exposicao;
}

export default function CardExposicao({ exposicao }: CardExposicaoProps) {

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={exposicao.imagemSrc}
          alt={exposicao.titulo}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 hover:opacity-90"
        />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
          {exposicao.categoria === 'Nossas Exposições' ? ('categoriaExposicoes') : exposicao.categoria}
        </p>
        <h3 className="text-xl font-serif text-gray-50 mb-3 leading-tight">{exposicao.titulo}</h3>
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 0 00-2-2H5a2 0 00-2 2v12a2 0 002 2z" />
          </svg>
          <span>{exposicao.dataInicio}</span>
          <span className="mx-2">–</span>
          <span>{exposicao.dataFim}</span>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-500 transition-colors duration-200">
          jaja
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}