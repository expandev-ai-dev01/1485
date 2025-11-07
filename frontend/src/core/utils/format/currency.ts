/**
 * @utility formatCurrency
 * @summary Formats numbers as Brazilian Real currency
 * @domain core
 * @type utility
 * @category formatting
 *
 * @param {number} value - Numeric value to format
 * @returns {string} Formatted currency string (e.g., "R$ 1.234,56")
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
