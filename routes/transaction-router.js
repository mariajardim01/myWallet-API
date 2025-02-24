import { Router } from "express";
import { postTransaction } from "../controllers/postTransaction.js";
import { authValidation } from "../middlewares/authValidation.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { transactionSchema } from "../schemas/transactionSchema.js";
import { getTransaction } from "../controllers/getTransactions.js";
import { putTransiction } from "../controllers/putTransactions.js";
import { deleteTransaction } from "../controllers/deleteTransaction.js";
import { verifyUserTransaction } from "../middlewares/verifyUserTransaction.js";

const router = Router()

router.use(authValidation)
router.post('/transactions',schemaValidation(transactionSchema),postTransaction)
router.get('/transactions',getTransaction)
router.put('/transactions/:transactionId',schemaValidation(transactionSchema),verifyUserTransaction, putTransiction)
router.delete('/transactions/:transactionId',verifyUserTransaction, deleteTransaction)

export default router