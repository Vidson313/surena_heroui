'use client';

import { createClient } from '@/lib/supabase-client';

export async function sendContactMessage(formData: FormData) {
  const supabase = createClient();
  const fullName = formData.get('fullName') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!fullName || !email || !message) {
    throw new Error('لطفاً فیلدهای ضروری را پر کنید.');
  }

  const { error } = await supabase
    .from('contact_messages')
    .insert([
      {
        full_name: fullName,
        email: email,
        subject: `پیام از طرف ${fullName} (${phone})`,
        message: message,
      },
    ]);

  if (error) {
    console.error('Error sending message:', error);
    throw new Error('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.');
  }

  return { success: true };
}
