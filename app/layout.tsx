import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Amelia Santana | Ciudad Corazón',
    description:
        'Tu candidata a regidora por la Circunscripción 3 para construir juntos un mejor Santiago.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={inter.className}
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #f56565, #68d391, #d69e2e, #cbd5e0)',
                }}
            >
                <div className="w-full h-screen flex items-center justify-center">{children}</div>
            </body>
        </html>
    )
}
