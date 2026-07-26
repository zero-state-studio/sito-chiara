import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Blob from "@/components/Blob";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { site } from "@/content/site";
import { breadcrumbJsonLd, ogFor, projectJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return site.progetti.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = site.progetti.items.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/progetti/${slug}` },
    openGraph: ogFor({
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      path: `/progetti/${slug}`,
    }),
  };
}

export default async function ProjectDetail({ params }: Params) {
  const { slug } = await params;
  const project = site.progetti.items.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd data={projectJsonLd(project)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: site.progetti.title, path: "/progetti" },
          { name: project.title, path: `/progetti/${project.slug}` },
        ])}
      />
      <Section containerClassName="max-w-3xl">
        <Blob className="right-[-5rem] top-0 h-72 w-72" tint="glow" opacity={0.45} />
        <Reveal>
          <Link
            href="/progetti"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-deep transition hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {site.progetti.detailBack}
          </Link>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-ink">
            {project.title}
          </h1>
        </Reveal>

        {project.image && (
          <Reveal delay={80} className="mt-6">
            <figure className="overflow-hidden rounded-3xl ring-1 ring-brand/15 shadow-sm">
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1200}
                height={1600}
                sizes="(max-width: 768px) 90vw, 720px"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </Reveal>
        )}

        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/85">
          {project.body.map((p, i) => (
            <Reveal key={p.slice(0, 24)} as="p" delay={i * 60}>
              {p}
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand from="canvas" />
    </>
  );
}
