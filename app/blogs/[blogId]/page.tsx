import BlogMain from "@/components/blog/BlogMain";
import { client } from "@/lib/content/client";
import type { Metadata } from 'next'

const fetchBlog = async (id: string) => {
    const response = await client.getEntry(id);
    return response;
}

type Props = {
    params: {blogId: string}
  }
   
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = params.blogId
    const blog = await fetchBlog(id);

    return {
        title: `Contawo | ${blog.fields.title}`,
        description: blog.fields.description,
        metadataBase: new URL("https://www.contawo.com"),
        keywords: ["JavaScript", "Next.js", "HTML5", "CSS3", "React.js", "blogs", "lifestyle", "Typescript"],
        authors: [{
            name: blog.fields.author.fields.fullname,
            url: "https://code.contawo.com/",
        }],
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
            title: blog.fields.title,
            description: blog.fields.description,
            url: `https://contawo.com/blogs/${blog.sys.id}`,
            siteName: 'Contawo',
            images: [
                {
                    url: `https:${blog.fields.bannerImage.fields.file.url}`
                }
            ],
            locale: 'en_US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.fields.title,
            description: blog.fields.description,
            creator: blog.fields.author.fields.fullname,
            images: [`https:${blog.fields.bannerImage.fields.file.url}`],
        }
    }
}

export default async function BlogPage({params} : Props) {
    const blogData = await fetchBlog(params.blogId);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: blogData.fields.title,
        image: `https:${blogData.fields.bannerImage.fields.file.url}`,
        description: blogData.fields.description,
    }

    return (
        <>
            <BlogMain post={blogData} slug={params.blogId} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    )
}