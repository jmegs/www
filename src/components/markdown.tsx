import {getMDXComponent} from "next-contentlayer/hooks"

type Props = {
  code: string | undefined
  name: string
}

export default function Markdown({ code, name }: Props) {
  if (!code) {
    console.warn(`markdown source for ${name} is undefined`)
    return null
  }
  const MDXContent = getMDXComponent(code)
  return <MDXContent />
}