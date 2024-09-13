import ContactMain from "@/components/contact/ContactMain";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contawo | Contact',
    description: 'Contawo is a go-to destination for anyone who is interested in programming. Contawo is designed to cater to beginners, intermediate and advanced learners. Contawo also features a vibrant community of programmers who engage in discussions, share ideas, and collaborate on projects. Whether you are looking to learn a new programming language, sharpen your skills, or explore new programming concepts, we have something for everyone.',
    metadataBase: new URL("https://contawo.com/contact"),
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
      description: "Contawo is blog website that is your one stop shop for increasing your programming skills with the best practices."
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contawo',
      description: 'Contawo is a go-to destination for anyone who is interested in programming. Contawo is designed to cater to beginners, intermediate and advanced learners. Contawo also features a vibrant community of programmers who engage in discussions, share ideas, and collaborate on projects. Whether you are looking to learn a new programming language, sharpen your skills, or explore new programming concepts, we have something for everyone.',
      creator: 'Awonke Mnotoza',
      images: ['https://nextjs.org/og.png'],
    }
}

export default function Contact() {
    return (
        <ContactMain />
    )
}