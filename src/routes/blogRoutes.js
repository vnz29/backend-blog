import express from 'express';
import { createBlog, deleteBlog, findAllBlogs, findSpecificBlogs, updateBlog } from '../controllers/blogController.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get("/",requireAuth,findAllBlogs)
router.post("/", createBlog)
router.patch("/:id", updateBlog)
router.delete("/:id",deleteBlog)

router.get("/search", findSpecificBlogs)

export default router 