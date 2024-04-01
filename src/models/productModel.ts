import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "slab"
    },
    material: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Categories"
    }
}, {timestamps: true})

const productModel = mongoose.models.Products || mongoose.model("Products", productSchema)
export default productModel