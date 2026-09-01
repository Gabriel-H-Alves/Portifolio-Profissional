import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/Gabriel-H-Alves/repos?sort=updated&per_page=6", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ repos: [] }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json({ repos: data });
  } catch (error) {
    return NextResponse.json({ repos: [] }, { status: 200 });
  }
}
