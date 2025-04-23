import { NextResponse } from 'next/server'

export async function GET() {
  const quotes = [
    "Talk is cheap. Show me the JSON.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Simplicity is the soul of efficiency.",
    "There are only two hard things in Computer Science: cache invalidation and naming things.",
    "First, solve the problem. Then, write the code.",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "Programmer: A machine that turns coffee into code.",
    "Code is like humor. When you have to explain it, it's bad.",
    "In a world without fences and walls, who needs Gates and Windows?",
    "Weeks of coding can save you hours of planning."
  ]
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  
  return NextResponse.json({
    data: {
      quote: randomQuote,
      timestamp: new Date().toISOString(),
      source: "Developer Wisdom API"
    },
    metadata: {
      totalQuotes: quotes.length,
      version: "1.0.0"
    }
  })
}