"use client";
import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export function Navigation({ children, vertical }: { children: React.ReactNode; vertical?: boolean }) {
    return (
        <NavigationMenu.Root>
            <NavigationMenu.List className={`${vertical ? 'flex flex-col gap-3' : 'flex gap-6 items-center'}`}>
                {children}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}
