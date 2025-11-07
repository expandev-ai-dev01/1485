import { AppProviders } from './providers';
import { AppRouter } from './router';

/**
 * @component App
 * @summary Root application component that wraps the entire app with providers and routing
 * @type root-component
 * @category core
 *
 * @description
 * Main application component that orchestrates:
 * - Global providers (Query, Theme, etc.)
 * - Routing configuration
 * - Error boundaries
 */
export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};
