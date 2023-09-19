import NavItem from "@/components/navitem";
import Link from 'next/link'

export default function Navbar() {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'DEVMODE'
  return (
    <div className="flex justify-between px-8 py-4">
      <div className="flex gap-x-4">
        <Link href="/">
          <NavItem label="Info" isActive={true} />
        </Link>
        <NavItem label="Index" icon="disabled" isActive={false} />
      </div>
      <div className="flex gap-x-4">
        <NavItem label={sha.slice(0, 7)} icon="commit" isActive={false} />
        <NavItem label="Index" icon="location" isActive={false} />
      </div>
    </div>
  )
}