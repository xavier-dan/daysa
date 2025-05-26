import React from 'react';
import Link from 'next/link';
import { NavLinkProps } from '@/app/types/interfaces/interfaces';

export default function NavLink({ href, children, className = '', ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`
        text-[#9e783f]     
        text-lg           
        px-4 py-2          
        rounded-md 
        transition-colors duration-300 
        hover:text-[#e2b46e] 
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#e2b46e]
        inline-block
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
