import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const CORE_PATHS = [
  "/",
  "/free-assessment",
  "/services",
  "/services/api-security",
  "/services/saas-vapt",
  "/services/ai-security",
  "/services/web-app-vapt",
  "/services/cloud-security",
  "/services/mobile-vapt",
  "/services/network-pentesting",
  "/services/kubernetes-security",
  "/services/startup-security",
  "/fintech-security",
  "/grc-readiness",
  "/manual-vs-automated-pentest",
  "/vapt-bangalore",
  "/vapt-hyderabad",
  "/about",
  "/contact",
  "/sample-report",
];

export async function GET(req: NextRequest) {
  return handleRevalidate(req);
}

export async function POST(req: NextRequest) {
  return handleRevalidate(req);
}

async function handleRevalidate(req: NextRequest) {
  const secretParam = req.nextUrl.searchParams.get("secret");
  const authHeader = req.headers.get("authorization")?.replace("Bearer ", "");
  const headerSecret = req.headers.get("x-revalidate-secret");
  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret) {
    return NextResponse.json(
      { error: "REVALIDATE_SECRET environment variable is not configured." },
      { status: 500 }
    );
  }

  const providedSecret = secretParam || authHeader || headerSecret;
  if (!providedSecret || providedSecret !== expectedSecret) {
    return NextResponse.json(
      { error: "Invalid or missing revalidation secret token." },
      { status: 401 }
    );
  }

  const customPath = req.nextUrl.searchParams.get("path");
  const pathsToRevalidate = customPath ? [customPath] : CORE_PATHS;

  for (const path of pathsToRevalidate) {
    try {
      revalidatePath(path, "page");
    } catch (err: any) {
      console.error(`Failed to revalidate path: ${path}`, err);
    }
  }

  return NextResponse.json({
    revalidated: true,
    paths: pathsToRevalidate,
    now: Date.now(),
  });
}
