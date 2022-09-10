const express = require("express");
const{
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog
} = require("../controllers/BlogController");

const router = express.Router();

// For each of the CRUD operations, tie them to a route
// Also associate them with REST operation
router.route("/")
    .get(getAllBlogs)
    .post(createBlog);

router.route("/:id")
    .get(getBlogById)
    .put(updateBlog)
    .delete(deleteBlog);

module.exports = router;
