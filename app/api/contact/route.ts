import { promises as fs } from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  ipAddress?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

async function ensureDataDirectory() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
}

async function readContacts(): Promise<ContactSubmission[]> {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(CONTACTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveContacts(contacts: ContactSubmission[]): Promise<void> {
  await ensureDataDirectory();
  await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateSubmission(body: any): { valid: boolean; error?: string } {
  if (!body.name || typeof body.name !== 'string') {
    return { valid: false, error: 'Name is required' };
  }

  if (!body.name.trim()) {
    return { valid: false, error: 'Name cannot be empty' };
  }

  if (!body.email || typeof body.email !== 'string') {
    return { valid: false, error: 'Email is required' };
  }

  if (!validateEmail(body.email)) {
    return { valid: false, error: 'Invalid email address' };
  }

  if (!body.subject || typeof body.subject !== 'string') {
    return { valid: false, error: 'Subject is required' };
  }

  if (!body.subject.trim()) {
    return { valid: false, error: 'Subject cannot be empty' };
  }

  if (!body.message || typeof body.message !== 'string') {
    return { valid: false, error: 'Message is required' };
  }

  if (!body.message.trim()) {
    return { valid: false, error: 'Message cannot be empty' };
  }

  if (body.message.trim().length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters' };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate submission
    const validation = validateSubmission(body);
    if (!validation.valid) {
      return NextResponse.json(
        { message: validation.error },
        { status: 400 }
      );
    }

    // Get IP address
    const ipAddress = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';

    // Create submission object
    const submission: ContactSubmission = {
      id: `contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      subject: body.subject.trim(),
      message: body.message.trim(),
      timestamp: new Date().toISOString(),
      ipAddress: ipAddress.split(',')[0].trim(),
    };

    // Read existing contacts
    const contacts = await readContacts();

    // Add new submission
    contacts.push(submission);

    // Save updated contacts
    await saveContacts(contacts);

    // Log submission (in production, you might send an email here)
    console.log('[CONTACT FORM] New submission:', {
      id: submission.id,
      email: submission.email,
      timestamp: submission.timestamp,
    });

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        id: submission.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[CONTACT FORM] Error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contacts = await readContacts();
    return NextResponse.json({
      count: contacts.length,
      contacts: contacts.map(({ id, name, email, subject, timestamp }) => ({
        id,
        name,
        email,
        subject,
        timestamp,
      })),
    });
  } catch (error) {
    console.error('[CONTACT API] Error reading contacts:', error);
    return NextResponse.json(
      { message: 'Error reading contact data' },
      { status: 500 }
    );
  }
}
