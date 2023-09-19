import Markdown from "@/components/markdown"
import {allBios, type Bio} from "contentlayer/generated"

export default async function Home() {
  const { currentBio, pastBio, colo } = await getData()

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>hello world!</h1>
      <Markdown name="currentBio" code={currentBio?.body.code} />
      <Markdown name="pastBio" code={pastBio?.body.code} />
      <Markdown name="colophon" code={colo?.body.code} />
    </main>
  )
}

async function getData() {
  const currentBio = allBios.find( b => b.slug === "current" )
  const pastBio = allBios.find( b => b.slug === "past" )
  const colo = allBios.find( b => b.slug === "colophon" )
  return {currentBio, pastBio, colo}
}