const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

// Define what a "blog" is to the API
const blogSchema = new Schema({
    title: String,
    body: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Blog", blogSchema);
