import express from 'express';
import homeRoutes from "./homeRoutes";
import userRoutes from "./userRoutes";

const router = express.Router();

router.use('/', homeRoutes);
router.use('/users', userRoutes);

export default router;