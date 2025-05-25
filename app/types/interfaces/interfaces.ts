export interface MenuState {
    isOpen: boolean;
};

export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
      className?: string;
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


export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  date_display: string;
  medium_display: string;
  image_id: string | null;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
}

export interface ArtworkResponse {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string | null;
  };
  data: Artwork[];
  config: {
    iiif_url: string;
  };
}

export interface CardExposicaoProps {
  artwork: Artwork;
}