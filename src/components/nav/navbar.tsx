import NavItem from "@/components/nav/navitem";
import Link from 'next/link'
import Time from "@/components/time"
import PortfolioComingSoon from "@/components/nav/index-tooltip"



export default function Navbar() {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'DEVMODE'

  return (
    <div className="flex justify-between px-8 py-4">
      <div className="flex gap-x-4">
        <Link href="/">
          <NavItem isActive={true}>Info</NavItem>
        </Link>
        <PortfolioComingSoon />
      </div>
      <div className="flex gap-x-4">
        <NavItem icon="commit" isActive={false}>{sha.slice(0, 7)}</NavItem>
        <NavItem icon="location" isActive={false}><Time /></NavItem>
      </div>
    </div>
  )
}

