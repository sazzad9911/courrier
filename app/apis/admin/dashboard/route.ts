import { NextRequest, NextResponse } from "next/server";
import errorMessage from "../../../../validations/errorMessage";
import prisma from "../../../../libs/prisma";

const handleInformation = async (request: NextRequest) => {
    const weekly = request.nextUrl.searchParams.get("weekly")

    try {
        let totalParcel = 0;
        let totalDelivered = 0;
        let totalPending = 0;
        let totalCancelled = 0;

        const today = new Date();
        const totalParcelDeliveryByMonths = [];
        const lastWeekDataByDay = [];

        if (weekly) {
            // Calculate data for each day of the last week
            for (let i = 6; i >= 0; i--) {
                const dayStart = new Date(today);
                dayStart.setDate(today.getDate() - i);
                dayStart.setHours(0, 0, 0, 0);

                const dayEnd = new Date(dayStart);
                dayEnd.setDate(dayStart.getDate() + 1);

                const parcels = await prisma.addparcel.findMany({
                    where: {
                        date: {
                            gte: dayStart,
                            lt: dayEnd,
                        },
                    },
                });

                const dayDelivered = parcels.filter(parcel => parcel.status === "delivered").length;
                const dayPending = parcels.filter(parcel => parcel.status === "pending").length;
                const dayCancelled = parcels.filter(parcel => parcel.status === "cancelled").length;

                lastWeekDataByDay.push({
                    date: dayStart.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
                    total: parcels.length,
                    delivered: dayDelivered,
                    pending: dayPending,
                    cancelled: dayCancelled,
                });
            }
            return NextResponse.json(lastWeekDataByDay)

        }

        for (let i = 0; i < 12; i++) {
            // Calculate the start and end dates for each month
            const startOfMonth = new Date(today.getFullYear(), today.getMonth() - i, 1);
            const endOfMonth = new Date(today.getFullYear(), today.getMonth() - i + 1, 0);

            // Query the database for parcels in the current month
            const parcels = await prisma.addparcel.findMany({
                where: {
                    date: {
                        gte: startOfMonth,
                        lt: endOfMonth,
                    },
                },
            });

            // Calculate stats for the current month
            const monthlyDelivered = parcels.filter(parcel => parcel.status === "delivered").length;
            const monthlyPending = parcels.filter(parcel => parcel.status === "pending").length;
            const monthlyCancelled = parcels.filter(parcel => parcel.status === "cancelled").length;

            totalParcel += parcels.length;
            totalDelivered += monthlyDelivered;
            totalPending += monthlyPending;
            totalCancelled += monthlyCancelled;

            totalParcelDeliveryByMonths.push({
                month: startOfMonth.toLocaleString('default', { month: 'long', year: 'numeric' }),
                total: parcels.length,
                delivered: monthlyDelivered,
                pending: monthlyPending,
                cancelled: monthlyCancelled,
            });
        }

        return NextResponse.json({
            totalParcel,
            totalDelivered,
            totalPending,
            totalCancelled,
            totalParcelDeliveryByMonths,
        })
    } catch (error) {
        return errorMessage(error);
    }
};

export { handleInformation as GET }
