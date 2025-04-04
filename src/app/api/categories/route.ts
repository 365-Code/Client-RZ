import { connectDB } from "@/lib/db";
import { Category } from "@/lib/models";
import { MongooseError } from "mongoose";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET() {
  try {
    await connectDB();

    const categories = await Category.find().sort({ createdAt: -1 });
    return NextResponse.json({
      categories,
    });
  } catch (error) {
    if (error instanceof ApiError || error instanceof MongooseError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Internal Databse Error",
        },
        { status: 500 }
      );
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, imageUrl } = await req.json();

    const categoryName = String(name).trim().toLowerCase();
    const existing = await Category.findOne({
      name: categoryName,
    });

    if (existing) {
      return NextResponse.json(
        {
          message: "Category already exist",
        },
        { status: 200 }
      );
    }

    const slug = slugify(categoryName, "-");
    const category = await Category.create({
      name: categoryName,
      slug,
      imageUrl,
    });

    return NextResponse.json({
      category,
      message: "Category Added Successfully",
    });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Internal Databse Error",
        },
        { status: 500 }
      );
    }
  }
}
