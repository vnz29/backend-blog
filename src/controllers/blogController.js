import Blog from '../models/blogModel.js';

export const createBlog = async (req, res) => {
    const { title, content, authorID } = req.body;
  
    try {
      // Create a new user instance
      const newBlog = new Blog({
        title,
        content,
        authorID
      });
  
      // Save the user to the database
      await newBlog.save();
      
      // Send response
      res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const findAllBlogs = async (req, res) => {
   
  
    try {
      // Create a new user instance
      const Blogs = await Blog.find();
  
      // Save the user to the database
      
      // Send response
      res.status(201).json({ message: 'Blog created successfully', blog: Blogs });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const findSpecificBlogs = async (req, res) => {
    const {title}  = req.query

    try {
      // Create a new user instance
      const Blogs = await Blog.find({
        $or: [
          { title: { $regex: title, $options: 'i' } },  // case insensitive

        ]
      });

      
      // Send response
      res.status(201).json({ message: 'Blog created successfully', blog: Blogs });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  export const updateBlog = async (req, res) => {
     try {
    const BlogID = req.params.id;
    const updatedData = req.body;

    const blog = await Blog.findByIdAndUpdate(BlogID, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure that the update meets schema validation
    });

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
  };

  export const deleteBlog = async (req, res) => {
    console.log(req.params.id)
    try {
      const item = await Blog.findByIdAndDelete(req.params.id);
      if (!item) {
        return res.status(404).send('Item not found');
      }
      res.status(200).send(`Deleted item: ${item}`);
    } catch (error) {
      res.status(500).send('Error deleting item');
    }
 };