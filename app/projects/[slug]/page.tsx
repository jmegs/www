import { readFile } from "node:fs/promises"
import { join } from "node:path"
import slugify from "@sindresorhus/slugify"
import { notFound } from "next/navigation"

type Project = {
	title: string
	client: string
	hero: { src: string; alt: string }
	alt: string
	description: string
	problem: string
	impact: string
	lesson: string
	gallery: Array<{ src: string; alt: string }>
}

type PageProps = {
	params: {
		slug: string
	}
}

export default async function ProjectPage({ params }: PageProps) {
	const project = await getProjectBySlug(params.slug)

	if (!project) {
		notFound()
	}

	return (
		<div>
			<h1>{project.title}</h1>
			{/* Render other project details */}
		</div>
	)
}

export async function generateStaticParams() {
	const projectSlugs = await getAllProjectSlugs()

	return projectSlugs.map((slug) => ({
		slug,
	}))
}

async function getProjectBySlug(slug: string): Promise<Project | undefined> {
	const projects = await fetchProjects()
	return projects.find((project) => slugify(project.title) === slug)
}

async function getAllProjectSlugs(): Promise<string[]> {
	const projects = await fetchProjects()
	return projects.map((project) => slugify(project.title))
}

async function fetchProjects(): Promise<Project[]> {
	const file = await readFile(
		join(process.cwd(), "app", "projects", "data.json"),
		"utf-8"
	)
	return JSON.parse(file)
}
