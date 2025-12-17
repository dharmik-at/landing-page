import { sendEmail } from '@/lib/email';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send confirmation email to the subscriber
    await sendEmail({
      to: email,
      subject: 'Welcome to IngestIQ Updates!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #f97316; margin-bottom: 20px;">Thanks for subscribing! 🎉</h1>
          <p style="color: #4b5563; line-height: 1.6;">
            You're now subscribed to IngestIQ updates. We'll keep you informed about:
          </p>
          <ul style="color: #4b5563; line-height: 1.8;">
            <li>New features and improvements</li>
            <li>Technical guides and tutorials</li>
            <li>Product announcements</li>
          </ul>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px;">
            You can unsubscribe at any time by replying to this email.
          </p>
        </div>
      `,
    });

    // Notify you about the new subscriber
    await sendEmail({
      to: process.env.GMAIL_USER || 'dharmik.gohil@avestatechnologies.com',
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #f97316;">New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
