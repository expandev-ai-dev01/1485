import { Router } from 'express';
import internalRoutes from '@/routes/v1/internalRoutes';

const router = Router();

/**
 * @summary Internal (authenticated) routes
 * @remarks Routes prefixed with /internal for authenticated access
 */
router.use('/internal', internalRoutes);

/**
 * @summary External (public) routes can be added here
 * @example router.use('/external', externalRoutes);
 */

export default router;
