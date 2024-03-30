import { connectDB } from "@/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const {searchParams} = new URL(req.url)
    const pId = searchParams.get("pId");

    const product = await productModel.findById(pId);

    if(!product){
        return NextResponse.json(
          { success: false },
          { status: 401, statusText: "Product not exist" }
        );
    }

    return NextResponse.json(
      { success: true, product },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}