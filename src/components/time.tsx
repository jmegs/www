"use client"

import { useEffect, useState } from "react"

function getFormattedTime() {
  let now = Date.now()
  let formatted = Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/New_York",
  })
    .format(now)
    .slice(0, -3) // remove AM/PM from end of string
  return formatted
}

export default function Time() {
  const [time, setTime] = useState(() => getFormattedTime())

  useEffect(() => {
    const interval = setInterval(() => {
      const now = getFormattedTime()
      setTime(now)
    }, 1000 * 10)

    return () => clearInterval(interval)
  })

  return <span>NYC&nbsp;{time}</span>
}
