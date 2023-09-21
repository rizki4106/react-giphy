'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// 
import Head from 'next/head'

// loading bar style
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Giphy',
  description: 'Your awesome giphy',
}

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <ProgressBar
            height='5px'
            color='#5DDA62'
            options={{showSpinner: false}}
        />
            {children}
      </body>
    </html>
  )
}
