import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/Project"; 
import connect from "@/utils/db"; 
export async function GET(req: NextRequest) {
  await connect();

  try {
    const posts = await Project.find(); 
    console.log(JSON.stringify(posts));
    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving posts:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve posts" },
      { status: 500 }
    );
  }
}

export const revalidate = 0;
