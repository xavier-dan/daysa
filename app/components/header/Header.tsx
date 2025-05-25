'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLink from '../navLink/NavLink';
import Photo from '@/public/logo.png';
// import { useTranslations } from 'next-intl';
import { useAppSelector, useAppDispatch } from '@/app/hooks/hooks';
import { toggleMenu } from '../menu/menuSlice';

export default function Header() {
    const menuOpen = useAppSelector((state) => state.menu.isOpen);
    const dispatch = useAppDispatch();
    const router = useRouter();
    //const t = useTranslations('Header');

    return (
        <header
            className="w-full bg-[#f6f6f6] shadow-md border-b-2 border-[#9e783f]"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center py-6">
                <div
                    onClick={() => router.push('/home')}
                    className="cursor-pointer"
                    aria-label="Homepage"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && router.push('/home')}
                >
                    <Image
                        src={Photo}
                        alt="Logo Daysa"
                        width={100}
                        height={50}
                        quality={100}
                        priority
                        style={{ filter: 'drop-shadow(1px 1px 1px rgba(12,30,54,0.6))' }}
                    />
                </div>

                <nav className="hidden md:flex space-x-6">
                    <NavLink href="/about" className="font-bold underline">
                        SOBRE
                    </NavLink>
                    <NavLink href="/gallery" className="font-bold underline ">
                        GALERIA
                    </NavLink>
                    <NavLink href="/login" className="font-bold underline">
                        LOGIN
                    </NavLink>
                </nav>

                <button
                    className="md:hidden text-[#9e783f]"
                    onClick={() => dispatch(toggleMenu())}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
                </button>
            </div>

            {menuOpen && (
                <nav className="md:hidden px-6 pb-6 flex flex-col space-y-4 bg-[#f6f6f6] shadow-md border-b-2 border-[#9e783f]">
                    <NavLink href="/about">SOBRE</NavLink>
                    <NavLink href="/gallery">GALERIA</NavLink>
                    <NavLink href="/login">LOGIN</NavLink>
                </nav>
            )}
        </header>
    );
}
