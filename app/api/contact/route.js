import { saveContact } from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const saved = await saveContact({
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
    });

    return new Response(JSON.stringify({ success: true, id: saved.id }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(JSON.stringify({ error: 'Could not save message right now.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
