"use client"

import { FolderNotchOpen } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { usePathname } from "next/navigation"

function titleCase(word: string) {
	return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
}

export default function Breadcrumb() {
	const pathname = usePathname()
	const segments = pathname.split("/").filter((seg) => seg) // remove falsy values

	return (
		<div className="flex gap-2">
			{segments.length ? (
				<>
					<Link href="/">
						<FolderNotchOpen size={24} />
					</Link>
					<span>/</span>
					<span>{titleCase(segments[0])}</span>
				</>
			) : null}
		</div>
	)
}
