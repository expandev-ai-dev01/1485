import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * @component AppProviders
 * @summary Wraps the application with all necessary context providers
 * @type provider-component
 * @category core
 *
 * @description
 * Centralizes all global providers:
 * - TanStack Query for server state management
 * - Future providers can be added here
 */
export const AppProviders = ({ children }: AppProvidersProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
