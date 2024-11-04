import { NextRequest, NextResponse } from "next/server";
import cloudinary from "../../../../libs/cloudinary";
import errorMessage from "../../../../validations/errorMessage";

async function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
}


const handler = async (request: NextRequest) => {
    try {

        const formData = await request.formData()
        const image = formData.get('image') as File
        const base64Image = await fileToBase64(image);
        const result = await cloudinary.uploader.upload(base64Image, {
            public_id: image.name, // optional: specify a public ID
            //folder: 'your_folder_name', // optional: specify a folder in Cloudinary
        });

        return NextResponse.json({
            message: 'Image uploaded successfully',
            url: result.secure_url,
            publicId: result.public_id,
        })

    } catch (error) {
        console.log(error)
        return errorMessage(error)
    }

}
export { handler as POST }