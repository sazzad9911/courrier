import { decryptToken, encryptToken } from "@/functions/hash";
import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
    const { ref } = await request.json()
    if (!ref) return NextResponse.json({ error: "ops" }, { status: 404 })
    try {
        const reference = decryptToken(ref).split("-")
        let text = "";
        console.log(reference)
        const user = await Promise.all(reference.map(async (d, i) => {
            const u = await prisma.users.findUnique({ where: { id: d } })
            return text = text + `${text?"-":""}` + u?.serialNumber
        }))
        console.log(text)
        const newRef = encryptToken(text)
        return NextResponse.json(newRef)
    } catch (error) {
        return NextResponse.json({ error: "failed" }, { status: 404 })
    }
}
export {POST}