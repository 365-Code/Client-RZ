import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest){
    try {
        const body = await req.json()

        const {username, password} = body

        if( username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD ){
            return NextResponse.json({success: false}, {status: 403, statusText: "Access Forbidden"})
        }

        return NextResponse.json({success: true})
    } catch (error) {
        return NextResponse.json({success: false}, {status:500, statusText: "Internal Server Error"})
    }
}