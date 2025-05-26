'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import AboutImage from '@/public/about-img.jpg'; 

export default function AboutSection() {
    const t = useTranslations('About');

    return (
        <section className="bg-[#fff] text-[#0c1e36] py-16 px-6 md:px-20 border-y-2 border-[#9e783f]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 relative h-64 sm:h-96">
                    <Image
                        src={AboutImage}
                        alt="Galeria de arte"
                        fill
                        style={{ objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                        quality={90}
                        priority
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#9e783f]">{t('titulo')}</h2>
                    <p className="text-base leading-relaxed">
                        {t('descricao1')}
                    </p>
                    <p className="text-base leading-relaxed">
                        {t('descricao2')}
                    </p>
                    <p className="text-base leading-relaxed">
                        {t('descricao3')}
                    </p>
                </div>
            </div>
        </section>
    );
}
