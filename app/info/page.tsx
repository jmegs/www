import Bio from "./bio.mdx"
import Colo from "./colo.mdx"

export default async function InfoPage() {
	return (
		<div className="py-10 lg:py-20">
			<p>info</p>
			<Bio />
			<Colo />
		</div>
	)
}
