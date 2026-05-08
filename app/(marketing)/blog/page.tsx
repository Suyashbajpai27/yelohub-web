import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const posts = [
  {
    slug: "why-local-stores-digital-presence-2025",
    image: "/assets/images/blog1.svg",
    title: "Why Local Stores Need a Digital Presence 2025",
    excerpt:
      "Learn how neighbourhood shops are winning online without losing their local soul — and what to prioritise first.",
  },
  {
    slug: "salon-booking-hyperlocal-trends",
    image: "/assets/images/blog2.svg",
    title: "Salon Booking & Hyperlocal Trends That Actually Convert",
    excerpt:
      "From same-day slots to repeat clients: patterns we see across high-performing service businesses on YeloHub.",
  },
  {
    slug: "inventory-pricing-for-small-retail",
    image: "/assets/images/blog3.svg",
    title: "Smarter Inventory & Pricing for Small Retail",
    excerpt:
      "Practical tips to reduce stock-outs, avoid race-to-the-bottom pricing, and keep margins healthy on every order.",
  },
  {
    slug: "community-commerce-playbook",
    image: "/assets/images/blog4.svg",
    title: "The Community Commerce Playbook",
    excerpt:
      "How local clusters, word-of-mouth, and digital discovery work together to build durable demand in your area.",
  },
] as const;

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="relative h-[min(38vw,300px)] min-h-[200px] w-full overflow-hidden md:h-[260px]">
        <Image
          src="/assets/images/blogBanner.svg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div className="relative mx-auto flex h-full w-full max-w-[1500px] items-center px-6 md:px-8">
          <Reveal y={10}>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              BLOG
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-12 md:px-8 md:py-16">
        <Reveal>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-zinc-900">
            About YeloHub{" "}
            <span className="text-[#00A14E]">Blog</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 md:text-lg">
            Your go to source for everything related to local business growth,
            online selling, hyperlocal trends, and community success stories.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={0.06 * i} className="h-full">
              <article
                className={cn(
                  "group flex h-full w-full max-w-[420px] flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-md",
                  "transition-all duration-300 ease-out will-change-transform",
                  "hover:-translate-y-1.5 hover:border-zinc-200 hover:shadow-xl",
                  "focus-within:-translate-y-1.5 focus-within:border-zinc-200 focus-within:shadow-xl",
                  "border-b-[3px] border-b-transparent hover:border-b-[#00A14E] focus-within:border-b-[#00A14E]",
                )}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-zinc-100"
                >
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out will-change-transform motion-safe:group-hover:scale-[1.06]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
                <div className="flex flex-1 flex-col px-5 pb-8 pt-6 sm:min-h-[235px]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-lg font-bold leading-snug text-zinc-900 !no-underline transition-colors duration-200 hover:text-[#00A14E] hover:no-underline"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group/read mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#00A14E] !no-underline transition-all duration-200 hover:gap-2 hover:text-[#008f44] hover:no-underline"
                  >
                    Read More
                    <ChevronRight
                      className="size-4 transition-transform duration-200 ease-out will-change-transform group-hover/read:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
