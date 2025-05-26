import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ClientLayout from './ClientLayout';
import { NextIntlClientProvider } from 'next-intl';
import SEOHead from './SEOHead';
import '../globals.css'; 

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <SEOHead />
            <body>
                <ClientLayout>
                    <NextIntlClientProvider>
                    {children}
                    </NextIntlClientProvider>
                </ClientLayout>
            </body>
        </html>
    );
}