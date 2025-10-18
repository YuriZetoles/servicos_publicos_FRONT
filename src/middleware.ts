// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access_token')?.value;
  
  // Rotas públicas que não precisam de autenticação
  const publicPaths = ['/', '/login', '/signup', '/recover-password', '/cadastro'];
  const isPublicPath = publicPaths.some(path => 
    request.nextUrl.pathname === path || request.nextUrl.pathname.startsWith(path + '/')
  );

  // Se não estiver autenticado e tentar acessar rota protegida
  if (!accessToken && !isPublicPath) {
    return NextResponse.redirect(new URL('/login/municipe', request.url));
  }

  // Se tem token e está tentando acessar login/cadastro, redireciona para home
  const authOnlyPaths = ['/login', '/signup', '/cadastro'];
  const isAuthOnlyPath = authOnlyPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );
  
  if (accessToken && isAuthOnlyPath) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|public).*)',
  ],
};
