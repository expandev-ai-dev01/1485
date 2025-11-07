/**
 * @component Header
 * @summary Application header with branding and navigation
 * @domain core
 * @type layout-component
 * @category navigation
 */
export const Header = () => {
  return (
    <header className="bg-dark-900 border-b border-gold-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
              <span className="text-dark-950 font-bold text-lg">₱</span>
            </div>
            <h1 className="text-2xl font-bold text-gold-500">Plutus</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <span className="text-gold-200 text-sm">Controle Financeiro Pessoal</span>
          </nav>
        </div>
      </div>
    </header>
  );
};
