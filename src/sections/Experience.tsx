import { Card } from "@/components/Card";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: string;
  type: "work" | "education";
  period: string;
  title: string;
  organization: string;
  company?: string;
  location: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: "work-2",
    type: "work",
    period: "Sept 2025 - Present",
    title: "Frontend + QA Hybrid Engineer",
    company: "Primuse Group",
    organization: "Full-time",
    location: "Bali, Indonesia",
    description:
      "Built responsive frontend interfaces from UI designs using Next.js, Tailwind CSS, and shadcn/ui, applying clean code architecture. Also contributed to quality assurance by executing manual test cases and developing automation testing using Playwright.",
  },
  {
    id: "work-1",
    type: "work",
    period: "Sept 2024 - Jan 2025",
    title: "Frontend Developer",
    company: "Primuse Group",
    organization: "Internship",
    location: "Bali, Indonesia",
    description:
      "Developed and maintained multiple company websites using Next.js, Tailwind CSS, and shadcn, building responsive and user-friendly interfaces. Optimized performance and implemented SEO best practices to improve visibility. Collaborated with cross-functional teams to deliver web solutions aligned with each brand's identity.",
  },
  {
    id: "edu-1",
    type: "education",
    period: "Sept 2021 - Aug 2025",
    title: "Bachelor of Informatics",
    organization: "Atma Jaya Yogyakarta University",
    location: "Yogyakarta, Indonesia",
    description:
      "Completed undergraduate studies with a focus on software engineering, web, and mobile development. Developed an integrated ticketing system for Nomads and Crescendo using Next.js, Node.js, and MongoDB, reducing third-party dependency (5-15%) and improving data efficiency (40%). Validated through 88 black box test cases with a SUS score of 73.95.",
  },
];

const timelineItemStyle: Record<
  TimelineItem["type"],
  { label: string; accentClassName: string; icon: "briefcase" | "graduation" }
> = {
  work: {
    label: "Work",
    accentClassName: "text-cyan-300 border-cyan-400/40 bg-cyan-400/15",
    icon: "briefcase",
  },
  education: {
    label: "Education",
    accentClassName: "text-fuchsia-300 border-fuchsia-400/40 bg-fuchsia-400/15",
    icon: "graduation",
  },
};

const TimelineIcon = ({ icon }: { icon: "briefcase" | "graduation" }) => {
  if (icon === "graduation") {
    return <GraduationCap className="size-3" />;
  }

  return <Briefcase className="size-3" />;
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">
            My Professional Journey
          </p>
          <h2 className="font-serif text-3xl md:text-5xl mt-6">
            Experience &amp; Education
          </h2>
          <p className="text-sm md:text-lg text-white/60 mt-4 max-w-2xl mx-auto">
            My professional and academic journey in software development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/15" />

          <div className="space-y-10">
            {timelineItems.map((item) => {
              const style = timelineItemStyle[item.type];

              return (
                <div key={item.id} className="relative pl-16">
                  <div
                    className={`absolute left-4 top-1 size-5 rounded-full border-2 flex items-center justify-center ${style.accentClassName}`}
                  >
                    <TimelineIcon icon={style.icon} />
                  </div>

                  <Card className="rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 -ml-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-2">
                      <h3 className="font-semibold text-base md:text-lg leading-snug">
                        {item.title}
                      </h3>
                      <span
                        className={`w-fit mt-2 -ml-1 md:-ml-0 md:mt-0 md:shrink-0 text-xs md:text-sm px-2.5 py-1 rounded-full border ${style.accentClassName}`}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-white/80 mb-1">
                      {item.organization} • {item.location}
                    </p>
                    {item.company && (
                      <p className="text-xs md:text-sm text-white/80 mb-2">
                        {item.company}
                      </p>
                    )}
                    <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
