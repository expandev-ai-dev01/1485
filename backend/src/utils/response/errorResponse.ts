/**
 * @summary Error response interface
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary Creates a standardized error response
 * @param message Error message
 * @param code Error code (default: INTERNAL_ERROR)
 * @param details Optional error details
 * @returns Formatted error response
 */
export function errorResponse(
  message: string,
  code: string = 'INTERNAL_ERROR',
  details?: any
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}
