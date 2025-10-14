// src/components/ui/nav-link.tsx

"use client";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    'data-test'?: string;
}

export default function NavLink({ href, children, 'data-test': dataTest }: NavLinkProps) {
    return (
        <li className="list-none" data-test={dataTest}>
            <Link
                href={href}
                className="text-sm md:text-base block"
                style={{ color: 'var(--global-text-primary)' }}
            >
                <span className="hover:opacity-90">{children}</span>
            </Link>
        </li>
    );
}
