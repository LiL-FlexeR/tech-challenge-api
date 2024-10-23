import { Router } from "express";
import ordersRouter from "./orders.controller";

const router = Router();

router.use(ordersRouter);

export default router;
