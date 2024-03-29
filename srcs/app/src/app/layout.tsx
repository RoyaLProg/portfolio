import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RoyaLProg Portfolio',
  description: 'a little game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
		<head>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Gantari:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
		</head>
		<body>{children}</body>
    </html>
  )
}
