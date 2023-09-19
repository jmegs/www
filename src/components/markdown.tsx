import { getMDXComponent } from "next-contentlayer/hooks"
import cx from "clsx"

type Props = {
  code: string | undefined
  name: string
}

const components = {
  a: A
}

export default function Markdown({ code, name }: Props) {
  if (!code) {
    console.warn(`markdown source for ${name} is undefined`)
    return null
  }
  const MDXContent = getMDXComponent(code)
  return <MDXContent components={components }/>
}

function A(props: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a className={cx(props.className, "underline hover:opacity-90 transition-opacity")} {...props} />
  )
}