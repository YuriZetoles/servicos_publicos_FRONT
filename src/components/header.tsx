import Link from "next/link";
import { Navigation } from "./ui/navigation";
import NavLink from "./ui/nav-link";

export default function Header({ inverted }: { inverted?: boolean }) {
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
          <nav>
            <Navigation>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/pedidos">Meus Pedidos</NavLink>
              <NavLink href="/login">Login</NavLink>
            </Navigation>
          </nav>
        </div>
      </div>
    </header>
  );
}

