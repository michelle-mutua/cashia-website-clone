import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import fs from "fs";
import path from "path";

function getGoogleApiKey(): string | undefined {
  return (
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ??
    process.env["GOOGLE_GENERATIVE_API_KEY"]
  );
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return Response.json(
        { reply: "Please enter a message." },
        { status: 400 }
      );
    }

    const apiKey = getGoogleApiKey();
    if (!apiKey) {
      console.error("Missing Google API key in .env.local");
      return Response.json(
        {
          reply:
            "The chat assistant is not configured yet. Please add your Google API key to .env.local.",
        },
        { status: 500 }
      );
    }

    const filePath = path.join(process.cwd(), "data", "cashia-context.txt");

    let cashiaContext: string;
    try {
      cashiaContext = fs.readFileSync(filePath, "utf8");
    } catch {
      console.error("Missing data/cashia-context.txt");
      cashiaContext =
        "Cashia is a digital payments platform in Kenya. For support contact support@cashia.com or WhatsApp 0709 200 900.";
    }

    const google = createGoogleGenerativeAI({ apiKey });

    const result = await generateText({
      model: google("gemini-2.5-flash"),
      system: `You are Mila, Cashia's friendly customer support AI assistant.

Rules:
- Answer  based on the provided Cashia information and AI capabilities.
- Be friendly, warm and professional.
- Keep answers concise (2-4 sentences when possible).
- If the answer is not in the context, say:
"I don't have information about that yet. Please contact Cashia support at support@cashia.com or WhatsApp 0709 200 900."

Cashia Information:
${cashiaContext}`,
      prompt: message,
    });

    return Response.json({
      reply: result.text,
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    const message =
      error instanceof Error ? error.message : "Unknown error";

    if (message.includes("quota") || message.includes("Quota")) {
      return Response.json({
        reply:
          "The AI service is temporarily unavailable (API quota). Check your Google AI Studio billing and rate limits, then try again in a minute.",
      });
    }

    return Response.json(
      {
        reply:
          "Sorry, I encountered an error. Please try again.",
      },
      { status: 500 }
    );
  }
}