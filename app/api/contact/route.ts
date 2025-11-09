import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      linkedInProfile,
      industry,
      areaOfInterest,
      overseasExperience,
      referralMember,
      message
    } = body;

    // Validate required fields
    if (!firstName || !email || !linkedInProfile || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate LinkedIn URL format
    const linkedInRegex = /^https?:\/\/(www\.)?linkedin\.com\//;
    if (!linkedInRegex.test(linkedInProfile)) {
      return NextResponse.json(
        { error: 'Invalid LinkedIn profile URL' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = {
      to: 'kimble@akieubao.com',
      subject: 'AKB Membership Application',
      text: `
Name: ${firstName} ${lastName || ''}
Email: ${email}
Phone: ${phone || 'Not provided'}
LinkedIn Profile: ${linkedInProfile}

Industry: ${industry || 'Not provided'}
Area of Interest: ${areaOfInterest || 'Not provided'}
Overseas Experience: ${overseasExperience || 'Not provided'}

Referral Member: ${referralMember || 'None'}

Message:
${message}
      `.trim(),
      html: `
        <h2>New AKB Membership Application</h2>
        <h3>Personal Information</h3>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName || ''}</li>
          <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          <li><strong>LinkedIn:</strong> <a href="${linkedInProfile}">${linkedInProfile}</a></li>
        </ul>

        <h3>Professional Background</h3>
        <ul>
          <li><strong>Industry:</strong> ${industry || 'Not provided'}</li>
          <li><strong>Area of Interest:</strong> ${areaOfInterest || 'Not provided'}</li>
          <li><strong>Overseas Experience:</strong> ${overseasExperience || 'Not provided'}</li>
        </ul>

        <h3>Referral</h3>
        <p>${referralMember || 'None'}</p>

        <h3>Message</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    };

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log the email content
    console.log('Email to send:', emailContent);

    // In production, you would send the email here:
    // await sendEmail(emailContent);

    // For development, we'll return success but note that email wasn't actually sent
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully. Our team will review your application and contact you within 48 hours.',
      note: 'Email service not configured. Please configure an email provider (Resend, SendGrid, etc.) in production.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process application. Please try again.' },
      { status: 500 }
    );
  }
}
