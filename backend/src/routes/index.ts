import { Router } from 'express';
import v1Routes from '@/routes/v1';

const router = Router();

/**
 * @summary Version 1 routes (current stable)
 * @remarks All v1 routes are prefixed with /v1
 */
router.use('/v1', v1Routes);

/**
 * @summary Future API versions can be added here
 * @example router.use('/v2', v2Routes);
 */

export default router;
