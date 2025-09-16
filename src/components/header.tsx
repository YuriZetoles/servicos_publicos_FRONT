"use client";
import Link from "next/link";
import { Navigation } from "./ui/navigation";
import NavLink from "./ui/nav-link";
import * as React from "react";

export default function Header({ inverted }: { inverted?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const cls = `site-header bg-[var(--header-bg)] border-b ${inverted ? 'site-header--inverted' : ''}`;
  return (
    <header className={cls} style={{ borderColor: 'var(--header-border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: 64 }}>
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-semibold tracking-wide text-[18px] md:text-[20px]"
              style={{ color: 'var(--header-text)' }}
            >
              VILHENA+PÚBLICA
            </Link>
          </div>

          <div className="hidden md:block">
            <nav>
              <Navigation>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/pedidos">Meus Pedidos</NavLink>
                <NavLink href="/login">Login</NavLink>
              </Navigation>
            </nav>
          </div>

          <div className="md:hidden">
            <button
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              style={{ color: 'var(--header-text)' }}
            >
              <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="md:hidden" aria-hidden={!open}>
        <div
          className={`transform-origin-top transition-all duration-200 ease-in-out ${open ? 'opacity-100 scale-100 max-h-96' : 'opacity-0 scale-95 max-h-0'} overflow-hidden border-t`}
          style={{ borderColor: 'var(--header-border)' }}
        >
          <div className="px-4 pt-2 pb-4 bg-[var(--header-bg)] shadow-sm">
            <Navigation vertical>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/pedidos">Meus Pedidos</NavLink>
              <NavLink href="/login">Login</NavLink>
            </Navigation>
          </div>
        </div>
      </div>
    </header>
  );
}

