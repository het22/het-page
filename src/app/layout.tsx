import { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import '@styles/global.css'

export const metadata: Metadata = {
    title: 'het',
}

export default function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
        <body>{children}</body>
      </html>
    )
}
