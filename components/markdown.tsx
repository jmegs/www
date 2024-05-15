import { readFile } from "fs/promises"
import { join } from "path"
import { MDXRemote } from "next-mdx-remote/rsc"

type Props = {
	path: string
}

export async function Markdown({ path }: Props) {
	const source = await fetchFile(path)
	return <MDXRemote source={source} />
}

async function fetchFile(filepath: string) {
	return await readFile(join(process.cwd(), "content", filepath), "utf-8")
}
