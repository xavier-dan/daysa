'use client';

import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { login } from './loginSlice';

type Inputs = {
    email: string;
    password: string;
};

export default function Login() {
    const dispatch = useAppDispatch();
    const authError = useAppSelector(state => state.login.error);
    const isLoading = useAppSelector(state => state.login.isLoading);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(login(data));
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#E8E4DC]">
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="max-w-md w-full bg-white rounded-lg shadow-lg p-8"
            >
                <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ color: '#0C1E36', fontWeight: 'bold' }}>
                    Entrar
                </Typography>

                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{ style: { color: '#0C1E36' } }}
                    {...register('email', {
                        required: 'Email é obrigatório',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Email inválido',
                        },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    inputProps={{ 'aria-label': 'Email' }}
                />

                <TextField
                    label="Senha"
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{ style: { color: '#0C1E36' } }}
                    {...register('password', { required: 'Senha é obrigatória' })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    inputProps={{ 'aria-label': 'Senha' }}
                />

                {authError && (
                    <Typography variant="body2" color="error" sx={{ mt: 1, mb: 2 }}>
                        {authError}
                    </Typography>
                )}

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isLoading}
                    sx={{
                        mt: 2,
                        backgroundColor: '#0C1E36',
                        '&:hover': { backgroundColor: '#081829' },
                        fontWeight: 'bold',
                    }}
                >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>

                <Box className="mt-6 flex justify-between text-sm text-[#0C1E36]">
                    <Link href="/forgot-password" className="hover:underline">
                        Esqueci minha senha
                    </Link>
                    <Link href="/signUp" className="hover:underline">
                        Cadastre-se
                    </Link>
                </Box>
            </Box>
        </main>
    );
}
