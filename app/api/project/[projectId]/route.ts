import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/Project";
import connect from "@/utils/db";

export async function GET(req: NextRequest, { params }: { params: { projectId: string } }) {
  await connect();

  try {
    const { projectId } = params;

    const project = await Project.findById(projectId);

    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, project }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve project" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { projectId: string } }) {
  await connect();

  try {
    const { projectId } = params;

    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, project: deletedProject }, { status: 200 });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete project" },
      { status: 500 }
    );
  }
}

export const revalidate = 0;
