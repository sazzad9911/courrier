import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../libs/prisma";
import errorMessage from "../../../validations/errorMessage";

export const GET = async (request: NextRequest) => {
    const trackingId = request.nextUrl.searchParams.get("trackingId");
    try {
      const result = await prisma.addparcel.findUnique({
        where: {
          trackingId:trackingId
        },
        include:{
          rider:true,
          TrackParcel:true,
          user:{
            select:{
                name:true,
                phone:true
            }
          }
        }
      });
      return NextResponse.json(result);
    } catch (error) {
      return errorMessage(error);
    }
  };
  