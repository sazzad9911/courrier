import { NextRequest, NextResponse } from "next/server";
import errorMessage from "../../../../validations/errorMessage";
import prisma from "../../../../libs/prisma";
import { riderPickupSchema } from "../../../../validations/modelValidation";

const GET = async (request: NextRequest) => {
    const type = request.nextUrl.searchParams.get("type")
    const token = request.headers.get("RIDER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };

    try {
        const data = await riderPickupSchema.validate({ type })
        const results = await prisma.addparcel.findMany({
            where: {
                pickUpRiderId: user.id
            },
            orderBy: {
                date: "desc"
            }
        })
        return NextResponse.json(results)
    } catch (error) {
        return errorMessage(error)
    }
}
export { GET }