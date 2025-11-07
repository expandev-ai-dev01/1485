/**
 * @utility localStorage
 * @summary Type-safe localStorage wrapper utilities
 * @domain core
 * @type utility
 * @category storage
 *
 * @description
 * Provides type-safe methods for localStorage operations:
 * - Automatic JSON serialization/deserialization
 * - Error handling
 * - Type safety with generics
 */

export const storage = {
  /**
   * Get item from localStorage with type safety
   */
  get<T>(key: string): T | null {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error: unknown) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return null;
    }
  },

  /**
   * Set item in localStorage with automatic serialization
   */
  set<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error: unknown) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  },

  /**
   * Remove item from localStorage
   */
  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch (error: unknown) {
      console.error(`Error removing from localStorage key "${key}":`, error);
    }
  },

  /**
   * Clear all items from localStorage
   */
  clear(): void {
    try {
      window.localStorage.clear();
    } catch (error: unknown) {
      console.error('Error clearing localStorage:', error);
    }
  },
};
