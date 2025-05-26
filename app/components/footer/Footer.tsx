'use client';

import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useTranslations } from 'next-intl';


export default function Footer() {

    const t = useTranslations('Footer');

    return (
        <footer className="bg-[#f6f6f6] text-[#9e783f] py-8 px-6 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('galeria')}</h3>
                    <p className="not-italic text-sm leading-relaxed max-w-xs">
                        Rua das Artes, 123<br />
                        Bairro das Cores<br />
                        São Paulo, SP - 01234-567
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('sigaNos')}</h3>
                    <div className="flex space-x-6 text-[#9e783f]">
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#1DA1F2] transition-colors">
                            <FaTwitter size={28} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E1306C] transition-colors">
                            <FaInstagram size={28} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#1877F2] transition-colors">
                            <FaFacebookF size={28} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0A66C2] transition-colors">
                            <FaLinkedinIn size={28} />
                        </a>
                    </div>
                </div>
            </div>

            <p className="text-center text-xs text-[#D7C4B1] mt-8">
                © {new Date().getFullYear()} {t('copyright')}
            </p>
        </footer>
    );
}
