import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";
import { fraudMarkSchema } from "../../../../validations/modelValidation";

const GET = async (request: NextRequest) => {
    const phone = request.nextUrl.searchParams.get('phone');
    if (!phone) return NextResponse.json({ error: 'Invalid phone' }, { status: 404 })
    try {
        const result = await prisma.addparcel.findFirst({
            where: {
                phoneNumber: phone
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return errorMessage(error)
    }
}

const POST = async (request: NextRequest) => {
    const token = request.headers.get("RIDER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };
    try {
        const data = await fraudMarkSchema.validate(await request.json())
        const res = await prisma.fraudReport.create({
            data: {
                riderId: user.id,
                name: data.name,
                phone: data.phone,
                address: data.address
            }
        })
        return NextResponse.json(res)
    } catch (error) {
        return errorMessage(error)
    }
}
export { GET, POST }