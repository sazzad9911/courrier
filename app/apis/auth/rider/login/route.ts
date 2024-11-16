
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5"
import prisma from "../../../../../libs/prisma";
import { encrypt } from "../../../../../functions/JWT";

interface loginTypes {
    phone: string,
    password: string
}


const POST = async (request: NextRequest) => {


    const { phone, password } = await request.json() as loginTypes


    if (!phone || !password) {
        return NextResponse.json({ error: "Invalid email and password" }, { status: 404 })
    }
    try {

        const encryptedPassword = md5(password) as string
        const rider = await prisma.rider.findUnique({
            where: {
                phone: phone,
                password: encryptedPassword
            }
        })
        if (!rider) {
            return NextResponse.json({ error: "Phone and password are incorrect" }, { status: 404 })
        }
        const userToken = await encrypt(rider.id.toString(), rider.isActive)
        return NextResponse.json({ rider, userToken })
    } catch (error) {

        return NextResponse.json({ error: "Failed to login with this device ", code: error }, { status: 400 })
    }

}

export { POST }