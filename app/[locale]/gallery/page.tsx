'use client';
import React from 'react';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import GalleryExhibitions from '@/app/components/galleryExhibitions/GalleryExhibitions';

export default function GalleryPage() {
  return (
    <>
      <Header />
      <GalleryExhibitions />
      <Footer />
    </>
  );
}
