import { NextRequest, NextResponse } from "next/server";
import { riderInfoSchema } from "../../../../validations/modelValidation";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

const handleUpdateInfo = async (request: NextRequest) => {
    const token = request.headers.get("RIDER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };
    try {
        const data = await riderInfoSchema.validate(await request.json())
        
        const rider = await prisma.rider.update({
            where: {
                id: user.id,
            },
            data: data
        })
        return NextResponse.json(rider)
    } catch (error) {
        return errorMessage(error,undefined,"phone number")
    }
}
const handleGetInfo = async (request: NextRequest) => {
    const token = request.headers.get("RIDER") as string
    const user = JSON.parse(token) as { id: string; phone: string };
    try {
        const rider = await prisma.rider.findUnique({
            where: {
                id: user.id,
            }
        })
        return NextResponse.json(rider)
    } catch (error) {
        return errorMessage(error)
    }
}
export { handleUpdateInfo as PUT, handleGetInfo as GET }