import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User, AuthState, LoginPayload } from '@/app/types/interfaces/interfaces';

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: LoginPayload, { rejectWithValue }) => {
        const { email, password } = credentials;

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (email === 'user@example.com' && password === '123456') {
            return { email };
        } else {
            return rejectWithValue('Email ou senha inválidos');
        }
    }
);

const initialState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
};

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.error = null;
        },
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Erro ao autenticar';
            });
    },
});

export const { logout, clearError } = loginSlice.actions;
export default loginSlice.reducer;
