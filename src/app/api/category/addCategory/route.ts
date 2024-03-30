import { connectDB } from "@/db";
import categoryModel from "@/models/categoryModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        await connectDB();
        const categoryData = await req.json()
        const existing = await categoryModel.findOne({name: categoryData.name.toLowerCase()})
        if(existing){
            return NextResponse.json({success: false, msg: "Category Exists"},{status: 401, statusText: "Category Already Exist"})
        }
        const newCategory = await categoryModel.create({name: categoryData.name.toLowerCase()});
        return NextResponse.json({success: true, category: newCategory, msg: "Category Added"},{status: 200})
    } catch (error) {
        return NextResponse.json({success: false},{status: 500, statusText: "Internal Server Error"})
    }
}