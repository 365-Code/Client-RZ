import { connectDB } from "@/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 1

export async function GET(req: NextRequest){
  try {

    await connectDB();
    const products = await productModel.find().populate("category");
    return NextResponse.json({success: true, products}, {status: 200})
    
  } catch (error) {
    return NextResponse.json({success: false}, {status:500, statusText: "Internal Server Error: Couldn't fetch products"})
  }
}