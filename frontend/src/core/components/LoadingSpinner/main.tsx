import { getLoadingSpinnerClassName } from './variants';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Loading spinner component for async operations
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @props
 * @param {LoadingSpinnerSize} size - Spinner size (small, medium, large)
 * @param {string} className - Additional CSS classes
 */
export const LoadingSpinner = ({ size = 'medium', className }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className={getLoadingSpinnerClassName({ size, className })}>
        <div className="animate-spin rounded-full border-4 border-gold-200 border-t-gold-500" />
      </div>
    </div>
  );
};
