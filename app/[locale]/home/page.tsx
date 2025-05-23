import React from 'react';
import Header from '@/app/components/header/Header';
import HeroImage from '@/app/components/heroImage/HeroImage';
import Footer from '@/app/components/footer/Footer';

export default function Start() {
    return (
        <>
            <Header />
            <HeroImage></HeroImage>
            <Footer></Footer>
        </>
    );
}