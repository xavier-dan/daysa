'use client';

import React from 'react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { useTranslations } from 'next-intl';
import { login } from './loginSlice';

type Inputs = {
    email: string;
    password: string;
};

export default function Login() {

    const t = useTranslations('Login');

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
        <main className="min-h-screen flex items-center justify-center bg-[#fff]">
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="max-w-md w-full bg-[#f6f6f6] rounded-lg shadow-lg p-8"
            >
                <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ color: '#9E783F', fontWeight: 'bold' }}>
                    {t('entrar')}
                </Typography>

                <TextField
                    label={t('email')}
                    type="email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{ style: { color: '#9E783F' } }}
                    {...register('email', {
                        required: t('emailObrigatorio'),
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: t('emailInvalido'),
                        },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    inputProps={{ 'aria-label': 'Email' }}
                />

                <TextField
                    label={t('senha')}
                    type="password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    color="primary"
                    InputLabelProps={{ style: { color: '#9E783F' } }}
                    {...register('password', { required: t('senhaObrigatoria') })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    inputProps={{ 'aria-label': 'password' }}
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
                        backgroundColor: '#9E783F',
                        '&:hover': { backgroundColor: '#e2b46e' },
                        fontWeight: 'bold',
                    }}
                >
                    {isLoading ? t('entrando') : t('entrarBtn')}
                </Button>

                <Box className="mt-6 flex justify-between text-sm text-[#9E783F]">
                    <Link href="/forgot-password" className="hover:underline">
                        {t('esqueci')}
                    </Link>
                    <Link href="/signUp" className="hover:underline">
                        {t('cadastro')}
                    </Link>
                </Box>
            </Box>
        </main>
    );
}
