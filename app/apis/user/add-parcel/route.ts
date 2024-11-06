import { NextRequest, NextResponse } from "next/server";
import { addParcelSchema } from "../../../../validations/modelValidation";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const POST = async (request: NextRequest) => {
  try {
    const data = await addParcelSchema.validate(await request.json());
    const token = request.headers.get("USER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };
    const trackingId = await getUniqueTrackingID();
    const parcel = await prisma.addparcel.create({
      data: {
        ...data,
        userId: user.id,
        trackingId: trackingId,
        weight: data.weight,
        address: data.address,
        amount: data.amount,
        category: data.category,
        district: data.district,
        name: data.name,
        phoneNumber: data.phoneNumber,
        thana: data.thana,
        pickUpFrom: data.pickUpFrom,
        serviceType: data.serviceType,
      },
    });

    return NextResponse.json({
      message: "Addparcel successfully done",
      parcel,
    });
  } catch (error) {
    return errorMessage(error);
  }
};

export const GET = async (request: NextRequest) => {
  const take = request.nextUrl.searchParams.get("take");
  const skip = request.nextUrl.searchParams.get("skip");
  const id = request.nextUrl.searchParams.get("id");
  try {
    const token = request.headers.get("USER") as string;
    const user = JSON.parse(token) as { id: string; phone: string };
    const total = await prisma.addparcel.count({
      where: { userId: user.id },
    });
    const result = await prisma.addparcel.findMany({
      where: {
        userId: user.id,
        id: id ? id : undefined
      },
      take: parseInt(take) || undefined,
      skip: parseInt(skip) || undefined,
    });
    return NextResponse.json({ result, total });
  } catch (error) {
    return errorMessage(error);
  }
};

function generateTrackingID(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let trackingID = "";

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    trackingID += characters[randomIndex];
  }

  return trackingID;
}

async function getUniqueTrackingID() {
  let trackingID: string;
  let isUnique = false;

  // Keep generating until we find a unique ID
  while (!isUnique) {
    trackingID = generateTrackingID();
    const existingParcel = await prisma.addparcel.findUnique({
      where: { trackingId: trackingID },
    });

    // If no existing parcel is found with this ID, it's unique
    if (!existingParcel) {
      isUnique = true;
    }
  }
  return trackingID.toString();
}
