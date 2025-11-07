/**
 * @component Footer
 * @summary Application footer with copyright and links
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-gold-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gold-200 text-sm">
            © {currentYear} Plutus. Todos os dados são armazenados localmente no seu dispositivo.
          </p>
          <p className="text-gold-300 text-xs mt-2 md:mt-0">
            Privacidade garantida - Sem cadastro, sem login
          </p>
        </div>
      </div>
    </footer>
  );
};
