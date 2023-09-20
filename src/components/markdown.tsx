import { getMDXComponent } from "next-contentlayer/hooks"
import { type DocumentTypes } from "contentlayer/generated"
import cx from "clsx"

type Props = {
  doc: DocumentTypes
}

const components = {
  a: A
}

export default function Markdown({ doc }: Props) {
  if (!doc.body.code) {
    console.warn(`markdown source for ${doc._id} is undefined`)
    return null
  }
  const MDXContent = getMDXComponent(doc.body.code)
  return <MDXContent components={components} />
}

function A(props: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a className={cx(props.className, "underline hover:opacity-90 transition-opacity")} {...props} />
  )
}