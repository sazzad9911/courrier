import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import errorMessage from "../../../../validations/errorMessage";

export const GET = async (request: NextRequest) => {
  const trackingId = request.nextUrl.searchParams.get("trackingId");
  const status = request.nextUrl.searchParams.get("status");
  try {
    const result = await prisma.addparcel.findMany({
      where: {
        trackingId: trackingId ? trackingId : undefined,
        status: status ? status : undefined,
      },
      include: {
        rider: trackingId ? true : false,
        TrackParcel: trackingId ? true : false,
      },
    });
    return NextResponse.json(trackingId ? result[0] : { result });
  } catch (error) {
    return errorMessage(error);
  }
};
