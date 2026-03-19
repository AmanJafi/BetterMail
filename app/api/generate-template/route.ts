import { NextResponse } from 'next/server';

// API-based template generation has been removed.
// Templates are now created manually via the "Custom Template" paste workflow.
export async function POST() {
  return NextResponse.json(
    { error: 'AI generation via API is disabled. Use the Custom Template paste workflow instead.' },
    { status: 405 }
  );
}
