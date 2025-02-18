import { Router } from "express";
import blogRouter from "./blogRoutes.js"
const router = Router()

router.use(blogRouter)

export default router