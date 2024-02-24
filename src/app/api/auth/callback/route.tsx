import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
// todo tu masz podwaliny prawdopodobnie z docsów to podziałania z api (wyciągnięcia implementacji z komponentów) i z nie dodawaniem do kazdego komponentu createRouteHandlerClient
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
      cookies: () => cookieStore,
    });
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect('https://freshdesk-clone.vercel.app/login');
}
