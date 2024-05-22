import { NextRequest, NextResponse } from 'next/server';
import { createProduct, retreiveData } from '@/lib/firebase/services';
import { Product } from '@/models/Product';
// Handler untuk metode GET
export async function GET(req: NextRequest) {
    const apiKey = req.headers.get('apiKey');
    const validApiKey = process.env.API_KEY

    if (!apiKey || apiKey !== validApiKey) {
        return NextResponse.json({ error: 'Unauthorized'  }, { status: 401 });
    }
    const data = await retreiveData("products");
    return NextResponse.json({ status: 200, message:"Success", data: data }); 
}

// Handler untuk metode POST
export async function POST(req: Request) {
    try {
        const apiKey = req.headers.get('apiKey');
        const validApiKey = process.env.API_KEY;

        if (!apiKey || apiKey !== validApiKey) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const data: Product = await req.json();
        
        if (data) {
            const status = await createProduct(data);
            if (status) {
                return NextResponse.json({ status: 200, message: 'Product created successfully' });
            } else {
                return new Response(JSON.stringify({ error: 'Product already exists' }), { status: 400, headers: { 'Content-Type': 'application/json' }});
            }
        }   
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}

