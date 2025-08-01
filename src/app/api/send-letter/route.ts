// src/app/api/send-letter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { sendLetter, LetterData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data: LetterData = await request.json();
    
    // Basic validation
    if (!data.recipientEmail || !data.message) {
      return NextResponse.json(
        { error: 'Recipient email and message are required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.recipientEmail)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Content length validation
    if (data.message.length > 2000) {
      return NextResponse.json(
        { error: 'Message too long (max 2000 characters)' },
        { status: 400 }
      );
    }

    await sendLetter(data);

    return NextResponse.json(
      { message: 'Letter sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending letter:', error);
    return NextResponse.json(
      { error: 'Failed to send letter' },
      { status: 500 }
    );
  }
}
