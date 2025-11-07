import { clsx } from 'clsx';
import type { LoadingSpinnerSize } from './types';

interface LoadingSpinnerVariantProps {
  size?: LoadingSpinnerSize;
  className?: string;
}

export function getLoadingSpinnerClassName(props: LoadingSpinnerVariantProps): string {
  const { size = 'medium', className } = props;

  return clsx(
    {
      'w-8 h-8': size === 'small',
      'w-12 h-12': size === 'medium',
      'w-16 h-16': size === 'large',
    },
    className
  );
}
