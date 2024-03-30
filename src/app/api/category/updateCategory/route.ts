import { connectDB } from "@/db";
import categoryModel from "@/models/categoryModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const cId = searchParams.get("cId");

    const existing = await categoryModel.findById(cId);

    if (!existing) {
      return NextResponse.json(
        { success: false },
        { status: 401, statusText: "Category Not Exist" }
      );
    }

    const categoryData = await req.json();

    const category = await categoryModel.findByIdAndUpdate(cId, categoryData);
    return NextResponse.json({ success: true, category }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
