import React from 'react';
import ClientLayout from './ClientLayout';

export default function LocaleLayout({ children }: { children: React.ReactNode }) {
    return <> <ClientLayout>{children}</ClientLayout>  </>;
}