import { connectDB } from "@/db";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";




export async function GET (req: NextRequest){
    try {
        await connectDB();
        const {searchParams} = new URL(req.url);
        const filter = searchParams.get("filter");
        const products = await productModel.find({
            category: filter == "all" ? "" : filter
        })
        return NextResponse.json({
            products
        })
    } catch (error: any) {
        return NextResponse.json({
            msg: error.message
        })
    }
}