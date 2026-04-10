import crescendoWebsite from "@/assets/images/crescendo.png";
import kisumLandingWebsite from "@/assets/images/kisum-landing-web.png";
import villaWebsite from "@/assets/images/villa-web.png";
import lgmWebsite from "@/assets/images/lgm.png";
import sashaWebsite from "@/assets/images/sasha-supra.png";
import eshopWebsite from "@/assets/images/eshop.png";
import mingshidaWebsite from "@/assets/images/mingshida-web.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Crescendo",
    year: "2024",
    title: "Crescendo Website",
    description:
      "Crescendo is a classical entertainment platform built with Next.js, TailwindCSS, and shadcn/ui. It's a division under the Primuse Group that specializes in delivering elevated classical show experiences, including ballet performances, classical concerts, and modern classical compositions.",
    link: "https://www.crescendo.asia/",
    image: crescendoWebsite,
  },
  // {
  //   company: "LGM Agency",
  //   year: "2024",
  //   title: "LGM Agency Website",
  //   description:
  //     "This is a modern web application for LGM Agency, a premier DJ booking and talent management agency, built using Next.js 15 and TypeScript. The project features a sleek, responsive design with smooth animations using Framer Motion and AOS, and implements a dark theme aesthetic with custom UI components from shadcn/ui.",
  //   link: "https://www.lgm.live/",
  //   image: lgmWebsite,
  // },
  // {
  //   company: "LGM Agency",
  //   year: "2025",
  //   title: "Sasha Supra Website",
  //   description:
  //     "This is a Next.js website project for a DJ named Sasha Supra, featuring a modern and stylish design with a focus on showcasing her music, tour dates, and social media presence. The project utilizes TypeScript, Tailwind CSS for styling, and various React components to create an interactive user experience.",
  //   link: "https://sashasupra.com/",
  //   image: sashaWebsite,
  // },
  {
    company: "Koosei Portfolio",
    year: "2025",
    title: "e-Commerce Website",
    description:
      "This is an e-commerce website built with Next.js, TypeScript, and Sanity CMS. The project implements a modern shopping experience with features like product browsing, category filtering, search functionality, shopping cart management (using Zustand for state management), and a sale promotion system.",
    link: "https://ecommerce-website-teal-sigma.vercel.app/",
    image: eshopWebsite,
  },
  {
    company: "Primuse Group",
    year: "2025",
    title: "Kisum Landing Website",
    description:
      "This is a landing website for KISUM built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. The project delivers a modern and responsive user experience with clean UI components, smooth animations, and SEO-friendly performance to showcase KISUM's all-in-one platform for promoters and agencies.",
    link: "https://main.d2vl85afgd174y.amplifyapp.com/",
    image: kisumLandingWebsite,
  },
  {
    company: "Villa Website",
    year: "2026",
    title: "Villa Website",
    description:
      "This is a villa booking website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The project delivers a modern and responsive browsing experience with clean UI components, smooth interactions, and SEO-friendly performance to showcase villa listings, details, and booking information clearly.",
    link: "https://main.da1jwkn2sykl3.amplifyapp.com/",
    image: villaWebsite,
  },
  {
    company: "PT Mingshida Paint Indonesia",
    year: "2026",
    title: "Mingshida Website",
    description:
      "This is a company profile and product showcase website for Mingshida built with Next.js, TypeScript, and Tailwind CSS, complete with an integrated admin panel. The admin dashboard enables full CRUD operations for About content, products, and user management, providing efficient content control while maintaining a modern, responsive, and SEO-friendly frontend experience.",
    link: "https://frontend-mingshida.vercel.app/",
    image: mingshidaWebsite,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          eyebrow="Real-world Results"
          description="See how I transformed concepts into functional, high-performance web applications."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-12 lg:px-22 sticky"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-cyan-400 to-sky-500 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    <li className="flex gap-2 text-sm md:text-base text-white/50 text-justify">
                      <span>{project.description}</span>
                    </li>
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-3">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
