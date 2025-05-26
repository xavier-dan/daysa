export interface MenuState {
  isOpen: boolean;
};

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
};

export interface Exposicao {
  id: string;
  imagemSrc: string;
  categoria: string;
  titulo: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
}

export interface User {
  email: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}