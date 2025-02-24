import { Router } from "express";
import userRouter from "./user-router.js"
import transactionsRouter from "./transaction-router.js"

const router = Router()

router.use(userRouter)
router.use(transactionsRouter)

export default router