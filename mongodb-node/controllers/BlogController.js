const BlogService = require("../services/BlogService");

// Controllers consume services created
// JSON serialize results for http res 
// Catch errors during CRUD operations and return 500 res

async function prepareResponse(crudOperation, requestData, response) {
    try {
        const blogs = await crudOperation(...requestData);
        response.json({ data: blogs, status: "success" });
    } catch (err) {
        response.status(500).json({ error: err.message });
    }
}

exports.getAllBlogs = async (req, res) => {
    await prepareResponse(BlogService.getAllBlogs, [], res);
    /* try {
        const blogs = await BlogService.getAllBlogs();
        res.json({ data: blogs, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } */
};

exports.createBlog = async (req, res) => {
    await prepareResponse(BlogService.createBlog, [req.body], res);
    /* try {
        const blog = await BlogService.createBlog(req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } */
};

exports.getBlogById = async (req, res) => {
    await prepareResponse(BlogService.getBlogById, [req.params.id], res);
    /* try {
        const blog = await BlogService.getBlogById(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } */
};

exports.updateBlog = async (req, res) => {
    await prepareResponse(BlogService.updateBlog, [req.params.id, req.body], res);
    /* try {
        const blog = await BlogService.updateBlog(req.params.id, req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } */
};

exports.deleteBlog = async (req, res) => {
    await prepareResponse(BlogService.deleteBlog, [req.params.id], res);
    /* try {
        const blog = await BlogService.deleteBlog(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    } */
};
