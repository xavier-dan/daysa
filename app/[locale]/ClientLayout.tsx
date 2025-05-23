'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}
