import './globals.css'

export const metadata = {
  title: 'Daksh Trivedi · Cybersecurity Engineer',
  description: 'Security Engineer & Builder - Web App Security, Malware Analysis, Bug Bounty Hunter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
