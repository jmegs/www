"use client"

import { load, trackPageview } from "fathom-client"
import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Load fathom script on mount
  useEffect(() => {
    load("TVQPDWBA", {
      includedDomains: ["johnmeguerian.com", "www.johnmeguerian.com"],
      auto: false,
    })
  }, [])

  useEffect(() => {
    if (!pathname) return

    trackPageview({
      url: pathname + searchParams.toString(),
      referrer: document.referrer,
    })
  }, [pathname, searchParams])

  return null
}

export default function Fathom() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  )
}
