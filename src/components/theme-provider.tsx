"use client";
import {
	ThemeProvider as NextThemesProvider,
	type ThemeProviderProps,
} from "next-themes";
import React from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	const [isHydrated, setIsHydrated] = React.useState(false);

	React.useEffect(() => {
		setIsHydrated(true);
	}, []);

	if (!isHydrated) {
		return <div style={{ visibility: "hidden" }}>{children}</div>;
	}

	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export { useTheme } from "next-themes";
