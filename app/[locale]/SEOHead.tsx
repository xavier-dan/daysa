import Head from 'next/head';
import { useTranslations, useLocale } from 'next-intl';

export default function SEOHead() {
    const t = useTranslations('meta');
    const locale = useLocale();

    const meta = {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        url: 'https://daysa.vercel.app',
        author: 'Daniel Lacerda e Yasmin Muniz'
    };

    return (
        <head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="author" content={meta.author} />
            <meta httpEquiv="Content-Language" content={locale} />

            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={meta.url} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />

            <link rel="alternate" hrefLang="pt" href={`${meta.url}/pt`} />
            <link rel="alternate" hrefLang="es" href={`${meta.url}/es`} />
            <link rel="alternate" hrefLang="en" href={`${meta.url}/en`} />
            <link rel="alternate" hrefLang="x-default" href={meta.url} />
        </head>
    );
}
