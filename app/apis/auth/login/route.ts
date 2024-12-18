
import { NextRequest, NextResponse } from "next/server";
import md5 from "md5"
import prisma from "../../../../libs/prisma";
import { encrypt } from "../../../../functions/JWT";

interface loginTypes {
    email: string,
    password: string
}


const POST = async (request: NextRequest) => {


    const { email, password } = await request.json() as loginTypes


    if (!email || !password) {
        return NextResponse.json({ error: "Invalid email and password" }, { status: 404 })
    }
    try {

        const encryptedPassword = md5(password);
        console.log(encryptedPassword)
        const user = await prisma.users.findUnique({
            where: {
                email: email,
                password: encryptedPassword
            }
        })
        if (!user) {
            return NextResponse.json({ error: "Email and password are incorrect" }, { status: 404 })
        }
        const userToken = await encrypt(user.id.toString(), user.isAdmin)
        return NextResponse.json({ user, userToken })
    } catch (error) {

        return NextResponse.json({ error: "Failed to login with this device ", code: error }, { status: 400 })
    }

}

export { POST }