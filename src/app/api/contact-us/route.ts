import GetInTouch from '@/models/Contact';
import connectDB from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const request = await req.json();

    // Save to MongoDB
    await connectDB();

    const newContact = new GetInTouch({ ...request });
    await newContact.save();

    // // Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Supreme Group" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Get In Touch Form Submission - Supreme Group',
      html: `
        <h3>New Get In Touch Form Submission - Supreme Group</h3>
        <p><strong>Name:</strong> ${request?.name}</p>
        <p><strong>Email:</strong> ${request?.email}</p>
        <p><strong>Subject:</strong> ${request?.subject}</p>
        <p><strong>Message:</strong> ${request?.message}</p>

      `,
    });

    return NextResponse.json({ success: true, message: 'Saved successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
