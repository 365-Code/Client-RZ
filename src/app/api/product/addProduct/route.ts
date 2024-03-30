import { connectDB } from "@/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

interface productType {
  name: string;
  slug: string;
  type: string;
  image: string;
  material?: string;
  category?: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const productData = (await req.json()) as productType;

    const slug = slugify(productData.name.toLowerCase(), "-");
    const existing = await productModel.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        { success: false, msg: "Product Already Exist" },
        { status: 401, statusText: "Product Already Exist" }
      );
    }

    if (productData.type == "slab") {
      delete productData.category;
    } else if (productData.type == "handicraft") {
      delete productData.material;
    }

    const newProduct = await productModel.create({ ...productData, slug });
    return NextResponse.json(
      { success: true, product: newProduct.populate("category"), msg: "Product Added" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
