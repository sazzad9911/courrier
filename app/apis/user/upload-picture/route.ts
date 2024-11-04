import { NextRequest, NextResponse } from "next/server";
import cloudinary from "../../../../libs/cloudinary";
import errorMessage from "../../../../validations/errorMessage";
import prisma from "../../../../libs/prisma";

const handler = async (request: NextRequest) => {
    const token = request.headers.get("USER") as string
    const user = JSON.parse(token) as { id: string, phone: string }
    try {

        const formData = await request.formData()
        const image = formData.get('image') as File
        const byteData = await image.arrayBuffer()
        const buffer = Buffer.from(byteData)
        const mimeType = image.type;
        const base64String = buffer.toString('base64');
        const dataUri = `data:${mimeType};base64,${base64String}`;
        const result = await cloudinary.uploader.upload(dataUri, {
            public_id: image.name,
        });

        const userRes = await prisma.users.update({
            where: {
                id: user.id,
            },
            data: {
                image: result.secure_url
            }
        })

        return NextResponse.json(userRes)
    } catch (error) {

        return errorMessage(error)
    }

}
export { handler as POST }