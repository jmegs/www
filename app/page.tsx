import Link from "next/link"

export default function Home() {
	return (
		<div className="py-10 lg:py-20">
			<h1 className="max-w-xs">
				<Link href="/info" className="underline">
					John Meguerian
				</Link>{" "}
				is a concept to code design manager based in NYC.
			</h1>
		</div>
	)
}
