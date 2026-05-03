import { Router, type IRouter } from "express";
import healthRouter from "./health";
import chatRouter from "./openai/chat";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/openai", chatRouter);

export default router;
