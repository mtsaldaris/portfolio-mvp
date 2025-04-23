import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    city: 'Bangkok',
    country: 'Thailand',
    lat: 13.7563,
    lon: 100.5018,
  })
}