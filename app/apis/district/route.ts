import { NextRequest, NextResponse } from "next/server";
import DISTRICT from "../../assets/DISTRICT";
import errorMessage from "../../../validations/errorMessage";

const getDistrictList = (request: NextRequest) => {
    const district = request.nextUrl.searchParams.get("district");
    try {
        if (district) {
            return NextResponse.json(DISTRICT[district])
        }
        const districtList = []
        Object.keys(DISTRICT).forEach(district => {
            districtList.push(district)
        })
        return NextResponse.json(districtList)
    } catch (error) {
        return errorMessage(error)
    }
}
export { getDistrictList as GET }