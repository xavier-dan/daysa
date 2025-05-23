import React from 'react';
import Link from 'next/link';
import { NavLinkProps } from '@/app/types/interfaces/interfaces';

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link
            href={href}
            className="
                text-[#F5F5F5]     
                text-lg           
                px-4 py-2          
                rounded-md 
                transition-colors duration-300 
                hover:text-[#8B6C3A] 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#8B6C3A]
                inline-block
            "
        >
            {children}
        </Link>
    );
}
