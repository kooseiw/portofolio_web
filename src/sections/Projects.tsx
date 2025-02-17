import nomadsWebsite from "@/assets/images/nomads.png";
import crescendoWebsite from "@/assets/images/crescendo.png";
import lgmWebsite from "@/assets/images/lgm.png";
import sashaWebsite from "@/assets/images/sasha-supra.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Nomads",
    year: "2024",
    title: "Nomads Website",
    description:
      "This is a Next.js website for Nomads, an event management platform specializing in music festivals and cultural events across Southeast Asia, featuring modern design with dynamic content, social media integration, and responsive layouts built using React, Tailwind CSS, and Framer Motion.",
    link: "https://nomads.events",
    image: nomadsWebsite,
  },
  {
    company: "Crescendo",
    year: "2024",
    title: "Crescendo Website",
    description:
      "Crescendo is a classical entertainment platform built with Next.js, TailwindCSS, and shadcn/ui. It's a division under the Primuse Group that specializes in delivering elevated classical show experiences, including ballet performances, classical concerts, and modern classical compositions.",
    link: "https://www.crescendo.asia/",
    image: crescendoWebsite,
  },
  {
    company: "LGM Agency",
    year: "2024",
    title: "LGM Agency Website",
    description:
      "This is a modern web application for LGM Agency, a premier DJ booking and talent management agency, built using Next.js 15 and TypeScript. The project features a sleek, responsive design with smooth animations using Framer Motion and AOS, and implements a dark theme aesthetic with custom UI components from shadcn/ui.",
    link: "https://www.lgm.live/",
    image: lgmWebsite,
  },
  {
    company: "LGM Agency",
    year: "2025",
    title: "Sasha Supra Website",
    description:
      "This is a Next.js website project for a DJ named Sasha Supra, featuring a modern and stylish design with a focus on showcasing her music, tour dates, and social media presence. The project utilizes TypeScript, Tailwind CSS for styling, and various React components to create an interactive user experience.",
    link: "https://sashasupra.com/",
    image: sashaWebsite,
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
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    <li className="flex gap-2 text-sm md:text-base text-white/50 text-justify">
                      <span>{project.description}</span>
                    </li>
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
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
