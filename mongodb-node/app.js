const mongoose = require("mongoose");
const express = require("express");
const BlogRouter = require("./routes/BlogRoutes");

const app = express();

// middleware
// When sending a request to the /api/blogs route,
// Express will check the routes in the ./routes folder
app.use(express.json());
app.use("/api/blogs", BlogRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});


// Configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("Welcome to MongoDB!");
        }
    }
    );
    
module.exports = app;
    