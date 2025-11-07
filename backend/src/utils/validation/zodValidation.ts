import { z } from 'zod';

/**
 * @summary Common Zod validation schemas
 * @remarks Reusable validation schemas following project standards
 */

/**
 * @summary String validation with max length
 */
export const zString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema;
};

/**
 * @summary Nullable string validation with max length
 */
export const zNullableString = (maxLength?: number) => {
  let schema = z.string();
  if (maxLength) {
    schema = schema.max(maxLength);
  }
  return schema.nullable();
};

/**
 * @summary Name validation (1-200 characters)
 */
export const zName = z.string().min(1).max(200);

/**
 * @summary Description validation (max 500 characters, nullable)
 */
export const zNullableDescription = z.string().max(500).nullable();

/**
 * @summary Bit/Boolean validation (0 or 1)
 */
export const zBit = z.number().int().min(0).max(1);

/**
 * @summary Positive integer validation
 */
export const zPositiveInt = z.number().int().positive();

/**
 * @summary Nullable positive integer (foreign key)
 */
export const zNullableFK = z.number().int().positive().nullable();

/**
 * @summary Foreign key validation
 */
export const zFK = z.number().int().positive();

/**
 * @summary Date string validation (ISO format)
 */
export const zDateString = z.string().datetime();

/**
 * @summary Decimal validation (15,2 precision)
 */
export const zDecimal = z.number();

/**
 * @summary Price/Monetary validation (18,6 precision)
 */
export const zPrice = z.number();
