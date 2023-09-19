import Markdown from "@/components/markdown"
import { allBios, type Bio } from "contentlayer/generated"

export default async function Home() {
  const { currentBio, pastBio, colo } = await getData()

  return (

    <div className="flex flex-wrap mt-auto px-8 gap-x-16 gap-y-8">
      <div className="basis-96 flex flex-col gap-y-3">
        <Markdown name="currentBio" code={currentBio?.body.code} />
      </div>
      <div className="basis-96 flex flex-col gap-y-3">
        <Markdown name="pastBio" code={pastBio?.body.code} />
      </div>
      <div className="basis-96 flex flex-col gap-y-3">
        <Markdown name="colophon" code={colo?.body.code} />
      </div>
    </div>

  )
}

async function getData() {
  const currentBio = allBios.find(b => b.slug === "current")
  const pastBio = allBios.find(b => b.slug === "past")
  const colo = allBios.find(b => b.slug === "colophon")
  return { currentBio, pastBio, colo }
}