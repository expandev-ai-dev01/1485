import { useNavigate } from 'react-router-dom';

/**
 * @page NotFoundPage
 * @summary 404 error page for non-existent routes
 * @domain core
 * @type error-page
 * @category navigation
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-gold-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gold-300 mb-4">Página não encontrada</h2>
      <p className="text-gold-200 mb-8">A página que você está procurando não existe.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-gold-500 text-dark-950 rounded-lg font-medium hover:bg-gold-600 transition-colors"
      >
        Voltar para o início
      </button>
    </div>
  );
};

export default NotFoundPage;
