"use client";
import Link from "next/link";
import React from "react";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li className="list-none">
            <Link
                href={href}
                className="text-sm md:text-base block"
                style={{ color: 'var(--header-text)' }}
            >
                <span className="hover:opacity-90">{children}</span>
            </Link>
        </li>
    );
}
