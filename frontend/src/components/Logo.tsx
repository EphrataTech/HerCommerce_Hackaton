import React from 'react'

interface LogoProps {
  width?: number | string
  height?: number | string
  className?: string
}

const Logo: React.FC<LogoProps> = ({ width = 120, height = 32, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 300 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AdeyBIZZ logo"
    >
      <defs>
        <linearGradient id="g-orange" x1="0" x2="1">
          <stop offset="0%" stopColor="#FF9A3C" />
          <stop offset="100%" stopColor="#FFA53A" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000" floodOpacity="0.12"/>
        </filter>
      </defs>

      <g transform="translate(40,40)" filter="url(#shadow)">
        <g fill="url(#g-orange)">
          <path d="M0 -22 C6 -20 10 -14 14 -8 C18 -2 22 8 16 14 C10 20 0 24 -6 20 C-12 16 -18 6 -20 -2 C-22 -10 -14 -18 -8 -20 C-2 -22 0 -22 0 -22 Z"/>
          <g transform="rotate(45)">
            <path d="M0 -22 C6 -20 10 -14 14 -8 C18 -2 22 8 16 14 C10 20 0 24 -6 20 C-12 16 -18 6 -20 -2 C-22 -10 -14 -18 -8 -20 C-2 -22 0 -22 0 -22 Z"/>
          </g>
          <g transform="rotate(90)">
            <path d="M0 -22 C6 -20 10 -14 14 -8 C18 -2 22 8 16 14 C10 20 0 24 -6 20 C-12 16 -18 6 -20 -2 C-22 -10 -14 -18 -8 -20 C-2 -22 0 -22 0 -22 Z"/>
          </g>
          <g transform="rotate(135)">
            <path d="M0 -22 C6 -20 10 -14 14 -8 C18 -2 22 8 16 14 C10 20 0 24 -6 20 C-12 16 -18 6 -20 -2 C-22 -10 -14 -18 -8 -20 C-2 -22 0 -22 0 -22 Z"/>
          </g>
        </g>

        <path d="M-6 -6 L2 -4 L-1 2 L6 4 L0 12 L1 0 L-6 -6 Z" fill="#FFFFFF" transform="scale(1.2)"/>
      </g>

      <g transform="translate(80,50)">
        <text x="0" y="0" fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="28" fontWeight={600} fill="#F57C00">Adey</text>
        <text x="70" y="0" fontFamily="Inter, Arial, Helvetica, sans-serif" fontSize="28" fontWeight={400} fill="#9B9B9B">BIZZ</text>
      </g>
    </svg>
  )
}

export default Logo
