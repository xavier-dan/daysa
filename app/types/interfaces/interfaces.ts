export interface MenuState {
  isOpen: boolean;
}

export interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

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

export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
}

export interface PexelsResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
  next_page: string;
}

export interface CardExposicaoProps {
  photo: PexelsPhoto;
}
