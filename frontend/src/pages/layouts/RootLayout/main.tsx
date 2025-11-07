import { Outlet } from 'react-router-dom';
import { Header } from './_impl/Header';
import { Footer } from './_impl/Footer';

/**
 * @component RootLayout
 * @summary Main application layout with header and footer
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @description
 * Root layout that wraps all pages with:
 * - Application header with navigation
 * - Main content area (Outlet)
 * - Application footer
 */
export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
