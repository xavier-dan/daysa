import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../loginSlice';
import { AuthState } from '@/app/types/interfaces/interfaces';
import Login from '../Login';

jest.mock('next-intl', () => ({
    useTranslations: () => (key: string) => {
        const translations: Record<string, string> = {
            entrar: 'Entrar',
            entrando: 'Entrando...',
            entrarBtn: 'Entrar',
            email: 'Email',
            senha: 'Senha',
            emailObrigatorio: 'Email obrigatório',
            senhaObrigatoria: 'Senha obrigatória',
            emailInvalido: 'Email inválido',
            esqueci: 'Esqueci minha senha',
            cadastro: 'Cadastre-se',
        };
        return translations[key] || key;
    },
}));

function createTestStore(initialState?: Partial<AuthState>) {
    return configureStore({
        reducer: {
            login: loginReducer,
        },
        preloadedState: {
            login: {
                user: null,
                isLoading: false,
                error: null,
                ...initialState,
            },
        },
    });
}

function renderLogin(store = createTestStore()) {
    return render(
        <Provider store={store}>
            <Login />
        </Provider>
    );
}

describe('Login', () => {
    it('deve renderizar campos de email e senha', () => {
        renderLogin();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('password')).toBeInTheDocument();
    });

    it('deve exibir mensagem de erro se authError estiver presente', () => {
        const store = createTestStore({ error: 'Erro simulado' });
        renderLogin(store);
        expect(screen.getByText('Erro simulado')).toBeVisible();
    });

    it('deve validar campos obrigatórios', async () => {
        renderLogin();
        fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));

        expect(await screen.findByText('Email obrigatório')).toBeVisible();
        expect(await screen.findByText('Senha obrigatória')).toBeVisible();
    });

    it('deve validar email inválido', async () => {
        renderLogin();

        fireEvent.input(screen.getByLabelText('Email'), {
            target: { value: 'email_invalido' },
        });

        fireEvent.input(screen.getByLabelText('password'), {
            target: { value: '123456' },
        });

        fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));

        expect(await screen.findByText('Email inválido')).toBeVisible();
    });
});
