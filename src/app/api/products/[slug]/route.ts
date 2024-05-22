import { retreiveDataBySlug } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server"

export async function GET( req: NextRequest, { params }: { params: { slug: string } } ) {
    const apiKey = req.headers.get('apiKey');
    const validApiKey = process.env.API_KEY

    if (!apiKey || apiKey !== validApiKey) {
        return NextResponse.json({ error: 'Unauthorized'  }, { status: 401 });
    }
    const slug = params.slug

    const data = await retreiveDataBySlug("products", slug);

    if (!data) {
        return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404, headers: { 'Content-Type': 'application/json' }});
    }

    return NextResponse.json({ status: 200, message:"Success", data: data });

  }