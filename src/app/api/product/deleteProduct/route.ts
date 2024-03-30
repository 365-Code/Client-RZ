import { connectDB } from "@/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();
    const {searchParams} = new URL(req.url)
    const pId = searchParams.get("pId");

    const existing = await productModel.findById(pId);

    if(!existing){
        return NextResponse.json(
          { success: false },
          { status: 401, statusText: "Product not exist" }
        );
    }

    await productModel.findByIdAndDelete(pId)

    return NextResponse.json(
      { success: true, msg: "Product Deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
