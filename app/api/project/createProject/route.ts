import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/Project";
import connect from "@/utils/db";

export async function POST(req:NextRequest, res:NextResponse) {
  await connect();

  try {
    const projectData = await req.json();

    const newProject = new Project({
      projectName: projectData.projectName,
      image: projectData.image,
      description: projectData.description,
      author: projectData.author,
      date: projectData.date,
      technologies: projectData.technologies,
      repository: projectData.repository,
    });

    const savedProject = await newProject.save();

    return NextResponse.json({ success: true, project: savedProject }, { status: 201 });
  } catch (error) {
    console.error("Error saving project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save project" },
      { status: 500 }
    );
  }
}

export const revalidate = 0;
