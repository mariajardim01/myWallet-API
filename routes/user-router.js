import { Router } from "express";
import { signUpUser } from "../controllers/signUpUser.js";
import { userSchema, userSignInSchema } from "../schemas/userSchemas.js";
import { schemaValidation } from "../middlewares/schemaValidation.js";
import { signInUser } from "../controllers/signInUser.js";


const router = Router()

router.post('/sign-up',schemaValidation(userSchema),signUpUser)
router.post('/sign-in',schemaValidation(userSignInSchema),signInUser)

export default router