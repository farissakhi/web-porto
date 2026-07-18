import { readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "cv-faris-sakhi.pdf");
    const fileBuffer = readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        // Serve as inline PDF — browser renders it, IDM doesn't intercept
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        // Prevent caching issues
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new NextResponse("CV not found", { status: 404 });
  }
}
