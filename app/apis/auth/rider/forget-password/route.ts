import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"
import md5 from 'md5';
import prisma from "../../../../../libs/prisma";
import { LRUCache } from 'lru-cache'
const secret = process.env.SECRET || "cluster0"

interface tokenTypes {
    number: string,
    otp: string
}

interface requestTypes {
    password: string,
    token: string,
}
interface RequestCount {
    count: number;
    lastRequest: number;
}
const cache = new LRUCache<string, number>({
    max: 1000, // Maximum number of items in cache
    ttl: 1000 * 60 * 2,
});
const limitCache = new LRUCache<string, RequestCount>({
    max: 1000, // Maximum number of items in cache
    ttl: 24 * 60 * 60 * 1000, // 1 day in milliseconds
});
interface tokenTypes {
    number: string,
    otp: string
}
const POST = async (request: NextRequest) => {

    const { password, token } = await request.json() as requestTypes

    if (!password || !token) {
        return NextResponse.json({ error: "Some fields are required" }, { status: 404 })
    }
    if (password.length < 6 || password.length > 20) {
        return NextResponse.json({ error: "Password field is between 6 to 20 character" }, { status: 404 })
    }
    try {
        const { number } = jwt.verify(token, secret) as tokenTypes


        const encryptedPassword = md5(password);
        const user = await prisma.rider.update({
            data: {
                password: encryptedPassword,
            },
            where: {
                phone: number
            }
        })
        return NextResponse.json(user)

    } catch (error) {
        return NextResponse.json({ error: "Failed to forget in with the device token", code: error }, { status: 400 })
    }
}
const GET = async (request: NextRequest) => {
    const number = request.nextUrl.searchParams.get("phoneNumber");
    if (!number) {
        return NextResponse.json({ error: "Phone Number not found" }, { status: 404 });
    }
    const currentTimestamp = Date.now();
    const requestLimit = 3;
    // Get request count info from cache
    const requestInfo = limitCache.get(number);

    if (requestInfo) {
        // Reset count if last request was over 24 hours ago
        if (currentTimestamp - requestInfo.lastRequest > 24 * 60 * 60 * 1000) {
            requestInfo.count = 0;
            requestInfo.lastRequest = currentTimestamp;
        }

        if (requestInfo.count >= requestLimit) {
            return NextResponse.json({ error: "Daily request limit exceeded. Please try again tomorrow." }, { status: 429 });
        }

        // Update request count and timestamp
        requestInfo.count += 1;
        requestInfo.lastRequest = currentTimestamp;
        limitCache.set(number, requestInfo);
    } else {
        // Initialize request count info
        limitCache.set(number, { count: 1, lastRequest: currentTimestamp });
    }
    // if (number.length !== 11) {
    //     return NextResponse.json({ error: "Invalid phone number" }, { status: 404 });
    // }
    if (cache.has(number)) {
        return NextResponse.json({ error: "OTP has already been sent. Please wait 2 minute before requesting again." }, { status: 429 });
    }
    try {
        const oldUser = await prisma.rider.findUnique({
            where: { phone: number }
        })

        if (!oldUser) {
            return NextResponse.json({ error: "No user account with this phone number" }, { status: 404 })
        }
        // const code = generateSixDigitNumber()
        const data = {
            number: number,
            otp: "000000"
        }
        // await sendSMS(number, `Your SK Online account verification code is ${code}`)
        const key = jwt.sign(data, secret, { expiresIn: '5m' })
        cache.set(number, 100)
        return NextResponse.json({ key: key })

    } catch (error: any) {

        if (error.response.data?.status === "error") {
            return NextResponse.json({ error: "Invalid Phone Number" }, { status: 400 });
        }
        return NextResponse.json({ error: "Failed to generate token" }, { status: 400 });
    }
}
const PUT = async (request: NextRequest) => {
    const { OTP, key } = await request.json()
    if (!OTP || !key) {
        return NextResponse.json({ error: "OTP and key not found" }, { status: 404 })
    }
    try {
        const { otp, number } = jwt.verify(key, secret) as tokenTypes
        if (otp !== OTP) {
            return NextResponse.json({ error: "Invalid OTP" }, { status: 404 })
        }
        const data = {
            number: number,
        }
        const token = jwt.sign(data, secret, { expiresIn: "1h" })
        return NextResponse.json({ token: token })
    } catch (error) {
        return NextResponse.json({ error: "Failed to generate token" }, { status: 400 })
    }
}
export { POST,GET,PUT }