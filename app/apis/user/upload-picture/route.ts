import { NextRequest, NextResponse } from "next/server";
import cloudinary from "../../../../libs/cloudinary";
import errorMessage from "../../../../validations/errorMessage";
import prisma from "../../../../libs/prisma";
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";


export async function POST(req: NextRequest) {
    try {
        const token = req.headers.get("USER");
        const user = JSON.parse(token) as { id: string; phone: string };

        const formData = await req.formData();
        const imageFile = formData.get("image") as Blob | null;
        const formDataUri = formData.get("dataUri") as string

        if (!imageFile && !formDataUri) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }
        let dataUri = ""

        if (imageFile) {
            const arrayBuffer = await imageFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const mimeType = imageFile.type;
            const base64String = buffer.toString("base64");
            dataUri = `data:${mimeType};base64,${base64String}`;
        }else{
            dataUri=formDataUri;
        }


        const result = await cloudinary.uploader.upload(dataUri, {
            public_id: "user_" + user.id,
        });


        const userRes = await prisma.users.update({
            where: { id: user.id },
            data: { image: result.secure_url },
        });

        return NextResponse.json(userRes, { status: 200 });
    } catch (error) {
        //console.error("Error:", error);
        return NextResponse.json({ error: "Error uploading image" }, { status: 500 });
    }
}