import { useState, useEffect } from 'react'

export default function TypingText({ text, speed = 60, delay = 0, className = '' }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return

    const timeout = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, started, text, speed])

  return (
    <span className={className}>
      {displayed}
      <span className="cursor" aria-hidden="true">_</span>
    </span>
  )
}
