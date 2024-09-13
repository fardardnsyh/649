import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import LayoutMain from '@/components/LayoutMain';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Contawo',
  description: 'Contawo is a go-to destination for anyone who is interested in programming. Contawo is designed to cater to beginners, intermediate and advanced learners. Contawo also features a vibrant community of programmers who engage in discussions, share ideas, and collaborate on projects. Whether you are looking to learn a new programming language, sharpen your skills, or explore new programming concepts, we have something for everyone.',
  metadataBase: new URL("https://contawo.com"),
  keywords: ["JavaScript", "Next.js", "HTML5", "CSS3", "React.js", "blogs", "lifestyle", "Typescript"],
  authors: {
    name: "Awonke Mnotoza",
    url: "https://dev.contawo.com/"
  },
  creator: "Awonke Mnotoza",
  publisher: "Awonke Mnotoza",
  robots: {
    nosnippet: false,
    notranslate: false,
    noimageindex: true,
    noarchive: true,
    "max-image-preview": "none",
    "max-video-preview": -1,
    "max-snippet": -1
  },
  openGraph: {
    title: "Contawo Blogs",
    description: "Contawo is blog website that is your one stop shop for increasing your programming skills with the best practices.",
    url: `https://contawo.com`,
    siteName: 'Contawo',
    images: [
        {
            url: `https://ibb.co/k20ww4f`
        }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contawo',
    description: 'Contawo is a go-to destination for anyone who is interested in programming. Contawo is designed to cater to beginners, intermediate and advanced learners. Contawo also features a vibrant community of programmers who engage in discussions, share ideas, and collaborate on projects. Whether you are looking to learn a new programming language, sharpen your skills, or explore new programming concepts, we have something for everyone.',
    creator: 'Awonke Mnotoza',
    images: ['https://nextjs.org/og.png'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: "Contawo",
    image: "https://ibb.co/k20ww4f",
    description: 'Contawo is a go-to destination for anyone who is interested in programming. Contawo is designed to cater to beginners, intermediate and advanced learners. Contawo also features a vibrant community of programmers who engage in discussions, share ideas, and collaborate on projects. Whether you are looking to learn a new programming language, sharpen your skills, or explore new programming concepts, we have something for everyone.',
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutMain>
          {children}
        </LayoutMain>
      </body>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  )
}
