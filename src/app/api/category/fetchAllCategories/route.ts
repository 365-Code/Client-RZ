import { connectDB } from "@/db";
import categoryModel from "@/models/categoryModel";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 20

export async function GET() {
  try {
    await connectDB();
    const categories = await categoryModel.find();
    return NextResponse.json({ success: true, categories }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: "Internal Server Error. Couldn't fetch categories" }
    );
  }
}
