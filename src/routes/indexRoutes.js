import { Router } from "express";
import blogRouter from "./blogRoutes.js"
import userRouter from "./userRoutes.js"
const router = Router()

router.use("/api/blog", blogRouter)
router.use("/api/user", userRouter)

export default router