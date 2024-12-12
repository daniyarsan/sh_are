import Header from '@/components/Header';
import FooterMobile1 from '@/components/footer/FooterMobile1';
import Footer from '@/components/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import ToastProvider from '@/providers/ToastProvider';
import React, { useContext } from 'react';
import { usePage } from '@inertiajs/react';
import AlertError from '@/components/_elements/alerts/AlertError';
import AlertSuccess from '@/components/_elements/alerts/AlertSuccess';
import Loader from '@/layouts/loader/Loader';
import { ParamsContext } from '@/contexts/ParamsProvider';
import { PageProps } from '@/types';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { errors, success } = usePage<PageProps>().props;
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error('ParamsContext must be used within a ParamsProvider');
  }
  const { loading, setLoading } = context;

  return (
    <>
      {loading && <Loader />}

      <Header />

      <main className='global-style mx-auto w-full max-w-screen-xl py-10'>
        <AlertError errors={errors} />
        <AlertSuccess message={success} />
        <ToastProvider>{children}</ToastProvider>
      </main>
      <FooterMobile1 />
      <Footer />
    </>
  );
}
