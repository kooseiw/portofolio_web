import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Koosei Wibawa | Portfolio",
        short_name: "Koosei Wibawa | Portfolio",
        description: "Koosei Wibawa is a front-end developer with a passion for creating beautiful and functional web experiences.",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    }
}