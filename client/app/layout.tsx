'use client';

import { Poppins } from 'next/font/google';
import { SessionProvider } from '../context/SessionContext';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full bg-white">
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body className={poppins.className}>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
