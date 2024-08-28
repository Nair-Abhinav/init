"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ThemeProviderProps {
    children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps & any) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}