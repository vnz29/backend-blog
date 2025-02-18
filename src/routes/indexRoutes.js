import { Router } from "express";
import blogRouter from "./blogRoutes.js"
const router = Router()
// router.get('/', (req, res) => {
//     res.send("hello deployment")
// })
router.use(blogRouter)

export default router