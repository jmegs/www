"use client"

import * as React from "react"
import { SunHorizon, MoonStars } from "@phosphor-icons/react/dist/ssr"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme()
	const nextTheme = resolvedTheme === "dark" ? "light" : "dark"

	const handleToggleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const altKey = event.getModifierState("Alt")

		if (altKey) {
			return setTheme("system")
		}

		setTheme(nextTheme)
	}

	return (
		<Button variant="ghost" size="icon" onClick={handleToggleClick}>
			<SunHorizon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<MoonStars className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">{`Toggle theme to ${nextTheme}`}</span>
		</Button>
	)
}
