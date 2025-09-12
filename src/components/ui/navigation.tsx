"use client";
import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export function Navigation({ children }: { children: React.ReactNode }) {
    return (
        <NavigationMenu.Root>
            <NavigationMenu.List className="flex gap-6 items-center">
                {children}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}
