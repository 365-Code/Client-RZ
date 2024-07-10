import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        slug: String,
        required: true,
    }
})

const categoryModel = mongoose.models.Categories || mongoose.model("Categories", categorySchema)
export default categoryModel