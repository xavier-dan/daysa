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