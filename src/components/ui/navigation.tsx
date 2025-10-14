// src/components/ui/navigation.tsx

"use client";
import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface NavigationProps {
    children: React.ReactNode;
    vertical?: boolean;
    'data-test'?: string;
}

export function Navigation({ children, vertical, 'data-test': dataTest }: NavigationProps) {
    return (
        <NavigationMenu.Root data-test={dataTest}>
            <NavigationMenu.List 
                className={`${vertical ? 'flex flex-col gap-3' : 'flex gap-6 items-center'}`}
            >
                {children}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}
