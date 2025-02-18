import express from 'express';
import { createBlog, findAllBlogs, findSpecificBlogs, updateBlog } from '../controllers/blogController.js';

const router = express.Router();
router.get("/api/blog", findAllBlogs)
router.post("/api/blog", createBlog)
router.patch("/api/blog/:id", updateBlog)

router.get("/api/blog/search", findSpecificBlogs)

export default router 