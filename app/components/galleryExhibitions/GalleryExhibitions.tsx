'use client'; 
import React from 'react';
import Image from 'next/image';
import CardExposicao from '../cardExposicao/CardExposicao';
import { Exposicao } from '@/app/types/interfaces/interfaces';
import { useTranslations } from 'next-intl'; 

const exposicoesAtuais: Exposicao[] = [
  {
    id: '1',
    imagemSrc: '/images/renascentista.jpg',
    categoria: 'Nossas Exposições', 
    titulo: 'As Exposições Cobrem Todos os Tempos da Civilização Egípcia',
    descricao: 'Uma jornada abrangente pela história e cultura do antigo Egito.',
    dataInicio: '12 Ago, 2024',
    dataFim: '31 Out, 2024',
  },
  {
    id: '2',
    imagemSrc: '/images/vangogh.jpg',
    categoria: 'Nossas Exposições',
    titulo: 'Adriano e Atena, Conversando com um Mundo Ideal',
    descricao: 'Uma exploração de diálogos filosóficos e ideais artísticos da antiguidade.',
    dataInicio: '10 Set, 2024',
    dataFim: '15 Nov, 2024',
  },
  {
    id: '3',
    imagemSrc: '/images/estatua.jpg',
    categoria: 'Nossas Exposições',
    titulo: 'Clássicos da Europa. O destino comum da Grécia e Itália.',
    descricao: 'Traçando os destinos entrelaçados e legados culturais da Grécia e Itália.',
    dataInicio: '01 Out, 2024',
    dataFim: '01 Dez, 2024',
  },
];

export default function GalleryExhibitions() {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-2">titulo</p>
          <h1 className="text-4xl font-serif text-gray-100">tititi</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exposicoesAtuais.map((exposicao) => (
            <CardExposicao key={exposicao.id} exposicao={exposicao} />
          ))}
        </div>
      </div>
    </div>
  );
}