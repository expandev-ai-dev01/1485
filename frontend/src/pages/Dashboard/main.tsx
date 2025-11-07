/**
 * @page DashboardPage
 * @summary Main dashboard page showing financial overview
 * @domain financial
 * @type dashboard-page
 * @category financial-management
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none (no authentication required)
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Financial overview, charts, recent transactions
 *
 * @description
 * Main dashboard displaying:
 * - Current balance
 * - Expense and income charts
 * - Recent transactions
 * - Financial alerts
 */
export const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gold-500 mb-2">Bem-vindo ao Plutus</h1>
        <p className="text-gold-200">Seu controle financeiro pessoal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-dark-900 border border-gold-800 rounded-lg p-6">
          <h3 className="text-gold-400 text-sm font-medium mb-2">Saldo Atual</h3>
          <p className="text-3xl font-bold text-gold-500">R$ 0,00</p>
        </div>

        <div className="bg-dark-900 border border-gold-800 rounded-lg p-6">
          <h3 className="text-gold-400 text-sm font-medium mb-2">Receitas do Mês</h3>
          <p className="text-3xl font-bold text-green-500">R$ 0,00</p>
        </div>

        <div className="bg-dark-900 border border-gold-800 rounded-lg p-6">
          <h3 className="text-gold-400 text-sm font-medium mb-2">Despesas do Mês</h3>
          <p className="text-3xl font-bold text-red-500">R$ 0,00</p>
        </div>
      </div>

      <div className="bg-dark-900 border border-gold-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gold-500 mb-4">Transações Recentes</h2>
        <p className="text-gold-200 text-center py-8">Nenhuma transação registrada ainda</p>
      </div>
    </div>
  );
};

export default DashboardPage;
