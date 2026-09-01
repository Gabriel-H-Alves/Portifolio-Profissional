import { NextRequest, NextResponse } from "next/server";
import { ariaResponses, ariaFallback } from "@/data/ai-prompts";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = (body.query || "").toLowerCase();

    let response = ariaFallback;
    if (query.includes("ia") || query.includes("inteligência") || query.includes("llm")) {
      response = ariaResponses.ia;
    } else if (query.includes("cyber") || query.includes("segurança") || query.includes("owasp")) {
      response = ariaResponses.cyber;
    } else if (query.includes("stack") || query.includes("tecnologia") || query.includes("react")) {
      response = ariaResponses.stack;
    } else if (query.includes("visão") || query.includes("computacional") || query.includes("opencv")) {
      response = ariaResponses.visao;
    } else if (query.includes("carreira") || query.includes("trajetória") || query.includes("liderança")) {
      response = ariaResponses.carreira;
    }

    return NextResponse.json({ reply: response });
  } catch (error) {
    return NextResponse.json({ reply: ariaFallback }, { status: 200 });
  }
}
