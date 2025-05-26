import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from "../../menu/menuSlice";
import Header from '../Header';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

jest.mock('next-intl', () => ({
    useTranslations: () => (key: string) => {
        const translations: Record<string, string> = {
            sobre: 'Sobre',
            galeria: 'Galeria',
            login: 'Login',
        };
        return translations[key] || key;
    },
}));

function createTestStore() {
    return configureStore({
        reducer: {
            menu: menuReducer,
        },
    });
}

describe('Header', () => {

    it('deve mostrar os links da navbar', () => {
        const store = configureStore({
            reducer: { menu: menuReducer },
        });

        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        expect(screen.getByText('Sobre')).toBeVisible();
        expect(screen.getByText('Galeria')).toBeVisible();
        expect(screen.getByText('Login')).toBeVisible();

        const toggleButton = screen.getByLabelText('Toggle menu');
        expect(toggleButton).toBeInTheDocument();
    });

    it('deve redirecionar para a home ao clicar na logo', () => {
        const store = createTestStore();
        const mockPush = jest.fn();

        jest.spyOn(require('next/navigation'), 'useRouter').mockReturnValue({
            push: mockPush,
        });

        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        const logo = screen.getByRole('button', { name: /homepage/i });
        fireEvent.click(logo);

        expect(mockPush).toHaveBeenCalledWith('/home');
    });
});
