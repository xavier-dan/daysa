import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

const mockUseTranslations = jest.fn();

jest.mock('next-intl', () => ({
    useTranslations: () => mockUseTranslations(),
}));

describe('Footer', () => {
    const mockTranslation = {
        galeria: 'Galeria de Arte',
        sigaNos: 'Siga-nos',
        copyright: 'Todos os direitos reservados.',
    };

    beforeEach(() => {
        jest.clearAllMocks();
        mockUseTranslations.mockReturnValue((key: keyof typeof mockTranslation) => mockTranslation[key]);
    });

    it('deve renderizar corretamente o endereço e título da galeria', () => {
        render(<Footer />);

        expect(screen.getByText(mockTranslation.galeria)).toBeInTheDocument();
        expect(screen.getByText(/Rua das Artes/)).toBeInTheDocument();
        expect(screen.getByText(/Bairro das Cores/)).toBeInTheDocument();
        expect(screen.getByText(/São Paulo, SP/)).toBeInTheDocument();
    });

    it('deve renderizar os links de redes sociais com seus ícones', () => {
        render(<Footer />);

        const twitterLink = screen.getByRole('link', { name: /twitter/i });
        const instagramLink = screen.getByRole('link', { name: /instagram/i });
        const facebookLink = screen.getByRole('link', { name: /facebook/i });
        const linkedinLink = screen.getByRole('link', { name: /linkedin/i });

        expect(twitterLink).toHaveAttribute('href', 'https://x.com');
        expect(instagramLink).toHaveAttribute('href', 'https://instagram.com');
        expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
        expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com');

        [twitterLink, instagramLink, facebookLink, linkedinLink].forEach((link) => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });

    it('deve renderizar corretamente a seção de redes sociais com o título traduzido', () => {
        render(<Footer />);

        const followUsTitle = screen.getByText(mockTranslation.sigaNos);
        expect(followUsTitle).toBeInTheDocument();
    });

    it('deve renderizar o texto de copyright', () => {
        render(<Footer />);

        const currentYear = new Date().getFullYear().toString();
        const copyright =
            screen.getByText((content) =>
                content.includes(currentYear) && content.includes(mockTranslation.copyright)
            );

        expect(copyright).toBeInTheDocument();
    });
});
