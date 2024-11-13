import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";
import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
    const token = request.headers.get("USER") as string
    const user = JSON.parse(token) as { id: string, phone: string }
    try {
        // console.log(token)
        const newUser = await prisma.users.findUnique({
            where: {
                id: user.id,
            }
        })
        if (!newUser) return NextResponse.json({ error: "User not found" }, { status: 400 })


        return NextResponse.json({ ...newUser })
    } catch (error) {
        return errorMessage(error)

    }
}
export { GET }