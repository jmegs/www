'use client';

import NavItem from "@/components/navitem";
import Link from 'next/link'
import { useEffect, useState } from "react";



export default function Navbar() {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || 'DEVMODE'
  const [time, setTime] = useState(() => getFormattedTime())

  useEffect(() => {
    const interval = setInterval(() => {
      const now = getFormattedTime() 
      setTime(now)
    }, 1000 * 10)

    return () => clearInterval(interval)
  })

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
        <NavItem label={`NYC ${time}`} icon="location" isActive={false} />
      </div>
    </div>
  )
}

function getFormattedTime() {
  let now = Date.now()
  let formatted = Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", timeZone: "America/New_York" }).format(now).slice(0, -3)
  return formatted
}