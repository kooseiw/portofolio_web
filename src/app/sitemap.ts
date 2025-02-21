import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://kooseiw.vercel.app/";
    return [
        {
            url: domain,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        }
    ]
}