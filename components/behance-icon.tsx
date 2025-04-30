import type React from "react"

export function BehanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* B letter */}
      <path d="M6.5 8.5h4.5a2 2 0 0 1 0 4H6.5v-4z" />
      <path d="M6.5 12.5H11a2 2 0 0 1 0 4H6.5v-4z" />

      {/* Behance underscore */}
      <path d="M16 15.5h4" />

      {/* Top line */}
      <path d="M18.5 8.5h-4" />

      {/* Container */}
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </svg>
  )
}
