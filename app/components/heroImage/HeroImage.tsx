'use client';

import React from 'react';
import Image from 'next/image';
//import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Photo from '@/public/arte.png';

export default function HeroImage() {
    //const t = useTranslations('HomePage');
    const router = useRouter();

    return (
        <div className="relative w-full h-screen">
            <Image
                src={Photo}
                alt="Imagem principal do blog"
                fill
                className="object-cover"
                quality={90}
                priority
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Galeria de Arte
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    A Galeria de Arte Daysa é um espaço dedicado à celebração da criatividade e expressão artística. Aqui, você encontra obras únicas, exposições inspiradoras e um ambiente acolhedor para apreciar a arte em suas diversas formas. Descubra talentos, explore novas perspectivas e viva experiências culturais inesquecíveis.
                </p>
                <button
                    onClick={() => router.push('/reviews')}
                    className="bg-[#9e783f] hover:bg-[#e2b46e] text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                    GALERIA
                </button>
            </div>
        </div>
    );
}
