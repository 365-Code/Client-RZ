import { connectDB } from "@/db";
import categoryModel from "@/models/categoryModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
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

    await categoryModel.findByIdAndDelete(cId);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: "Internal Server Error" }
    );
  }
}
