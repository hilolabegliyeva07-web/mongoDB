import {  NextResponse } from "next/server"
import { Product } from "@/app/products-table"

const products: Product[] = [
    {
        name: "Non",
        price: 4000
    },
    {
        name: "suv",
        price: 4000
    },
    {
        name: "Uzum",
        price: 4000
    },
    {
        name: "Olma",
        price: 4000
    },
    {
        name: "Banan",
        price: 4000
    },
    {
        name: "Anor",
        price: 4000
    },
]

export async function GET() {
    return NextResponse.json(products)
}

export async function POST(request: Request) {
    const data = await request.json()
    products.push(data)
    return NextResponse.json(products)
}