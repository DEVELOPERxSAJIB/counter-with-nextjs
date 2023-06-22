import mongoDBConnection from "@/config/configDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

// get all users
export const GET = async () => {
  try {
    await mongoDBConnection();
    const user = await User.find();
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};

// create new use
export const POST = async (request) => {
  try {
    await mongoDBConnection();
    const data = await request.json();
    const user = await User.create({ ...data });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
