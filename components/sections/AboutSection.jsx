import Image from 'next/image';
import SecTitle from '@/components/ui/SecTitle';
import SkillDomainCard from '@/components/ui/SkillDomainCard';
import { skillSections } from '@/constants';
import myPhoto from '@/images/myPhoto.jpeg';

export default function AboutSection({
  variant = 'page',
  id,
  headingAs = 'h2',
  showTitle = true,
}) {
  const photoSrc = typeof myPhoto === 'string' ? myPhoto : myPhoto.src;
  const totalSkills = skillSections.reduce((sum, section) => sum + section.skills.length, 0);
  const isPage = variant === 'page';
  const outerClassName = isPage ? 'page-section' : 'section-shell section-shell--bordered';

  return (
    <section id={id} className={outerClassName}>
      <div className="content-wrap">
        {showTitle ? (
          <SecTitle
            as={headingAs}
            eyebrow="About"
            title="Building practical, scalable software with modern web stacks."
            subtitle="Background, focus areas, and skills across the stack—without repeating the timeline above."
          />
        ) : null}

        {/* Intro: portrait + story + metrics row */}
        <div className="overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-surface/40 p-6 md:p-8 lg:p-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,auto)_1fr] lg:gap-14">
            <div className="mx-auto shrink-0 lg:mx-0">
              <div className="overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-bg">
                <Image
                  src={photoSrc}
                  width={240}
                  height={240}
                  className="h-48 w-48 object-cover object-center transition-transform duration-300 ease-out motion-reduce:transition-none hover:scale-[1.01] md:h-56 md:w-56"
                  alt="Portrait of Elsayed Kewan"
                  priority={variant === 'home'}
                />
              </div>
            </div>

            <div className="min-w-0">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-portfolio-accent">
                Full Stack Developer
              </p>
              <h2 className="text-2xl font-semibold leading-[1.15] tracking-tight text-portfolio-text md:text-4xl md:leading-[1.12]">
                Shipping clean interfaces, scalable APIs, and automation that saves real time.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-portfolio-muted md:text-base md:leading-relaxed">
                I&apos;m Elsayed Kewan, focused on fast, maintainable web products—modern frontend
                experiences, solid backend architecture, and product-ready systems with JavaScript,
                Next.js, Node.js, and Prisma.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-portfolio-muted md:text-base md:leading-relaxed">
                I also build automation with Puppeteer and n8n, plus desktop tools with Electron,
                combining engineering fundamentals with AI-assisted workflows to cut repetitive work.
              </p>

            </div>
          </div>
        </div>

        {/* Skills by domain */}
        <section
          className="relative mt-14 border-t border-portfolio-border md:mt-20"
          aria-labelledby={id ? `${id}-skills-heading` : 'skills-heading'}
        >
          <div className="pt-12 md:pt-14">
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-portfolio-accent">
                Expertise
              </p>
              <h2
                id={id ? `${id}-skills-heading` : 'skills-heading'}
                className="text-2xl font-semibold tracking-tight text-portfolio-text md:text-3xl"
              >
                Skills by domain
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-portfolio-muted md:text-base">
                Organized by engineering domain so you can scan depth across frontend, backend, data,
                and delivery.
              </p>
            </div>

            <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
              {skillSections.map((section) => (
                <SkillDomainCard key={section.title} section={section} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
