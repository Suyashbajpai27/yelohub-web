import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarClock,
  Check,
  Download,
  Gift,
  LayoutDashboard,
  Monitor,
  Play,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const quickCards = [
  {
    icon: ShoppingCart,
    iconColor: "text-[#0B6F1C]",
    text: "Shop from multiple stores in one cart",
    arrow: true,
  },
  {
    icon: CalendarClock,
    iconColor: "text-[#0B6F1C]",
    text: "Book appointments at home or at the shop",
    arrow: false,
  },
  {
    icon: Truck,
    iconColor: "text-[#0B6F1C]",
    text: "Real-time tracking for every delivery",
    arrow: false,
  },
  {
    icon: Monitor,
    iconColor: "text-[#0B6F1C]",
    text: "Easy payment & COD options",
    arrow: false,
  },
] as const;

const howItWorks = [
  {
    title: "For Customers",
    image: "/assets/images/home1.svg",
    bullets: [
      "Browse local stores and services in one place",
      "Add items from multiple shops to a single cart",
      "Track every order in real time",
      "Pay securely with flexible options",
    ],
    bulletIcon: "star" as const,
  },
  {
    title: "For Vendors",
    image: "/assets/images/home2.svg",
    bullets: [
      "List products and manage inventory easily",
      "Reach nearby customers with better visibility",
      "Accept orders and run promotions",
      "Get insights to grow your business",
    ],
    bulletIcon: "star" as const,
  },
  {
    title: "For Delivery Partners",
    image: "/assets/images/home3.svg",
    bullets: [
      "Choose flexible hours that fit your schedule",
      "Earn competitive payouts with weekly transfers",
      "Navigate with clear pickup and drop details",
      "Unlock bonuses during peak hours",
    ],
    bulletIcon: "star" as const,
  },
] as const;

const services = [
  {
    bg: "bg-[#F1F7E4]",
    iconBg: "bg-[#C6DFB8]",
    icon: ShoppingCart,
    title: "Multi-Store Shopping Cart",
    desc: "Buy groceries, clothes, books, and more from different shops in one order. Because life’s too short for multiple trips.Buy groceries, clothes, books, and more from different shops in one order. Because life’s too short for multiple trips.",
  },
  {
    bg: "bg-[#E9EAFB]",
    iconBg: "bg-[#B8BAF0]",
    icon: CalendarClock,
    title: "Appointment Booking",
    desc: "Book spa, salon, or clinic visits with zero waiting hassle. Your time matters.Book spa, salon, or clinic visits with zero waiting hassle. Your time matters.",
  },
  {
    bg: "bg-[#E7F6FA]",
    iconBg: "bg-[#ADE1F0]",
    icon: Truck,
    title: "Real-Time Tracking",
    desc: "Watch your order move toward you step by step—because trust grows with transparency.Watch your order move toward you step by step—because trust grows with transparency.",
  },
  {
    bg: "bg-[#F7E6F4]",
    iconBg: "bg-[#E8B8E0]",
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Pay your way: UPI, cards, wallets, or COD. Safe and flexible.Pay your way: UPI, cards, wallets, or COD. Safe and flexible.",
  },
  {
    bg: "bg-[#F7E6E8]",
    iconBg: "bg-[#F0B8BF]",
    icon: Gift,
    title: "Loyalty Rewards & Referrals",
    desc: "Earn points, get discounts, and share the love with friends. Because good vibes should be rewarded.Earn points, get discounts, and share the love with friends. Because good vibes should be rewarded.",
  },
  {
    bg: "bg-[#F3E8DE]",
    iconBg: "bg-[#E5C9B0]",
    icon: LayoutDashboard,
    title: "Vendor Dashboard",
    desc: "For shopkeepers: manage your business smartly without stress.For shopkeepers: manage your business smartly without stress.",
  },
] as const;

const testimonials = [
  {
    name: "Ravi Sharma",
    text: "YeloHub made ordering from my neighbourhood stores effortless. Tracking is clear and deliveries are always on time.",
  },
  {
    name: "Neha Verma",
    text: "As a small business owner, the dashboard and support helped us go online without the usual tech headaches.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative min-h-[min(85vh,720px)] w-full overflow-hidden md:min-h-[560px]">
        <Image
          src="/assets/images/homeBanner.svg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden />

        <div className="relative z-10 mx-auto flex min-h-[min(85vh,720px)] w-full max-w-[1500px] flex-col justify-center px-6 py-20 md:min-h-[560px] md:px-8 md:py-24">
          <Reveal>
            <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-white">
              Your City <span className="text-[#F5C400]">Your Hub</span>
            </h1>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/95 md:text-lg md:leading-8">
              From your neighbourhood shop to your favourite salon, YeloHub
              brings your local world online—shop, book, and get everything
              delivered fast, simple, and reliable.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/vendors"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9CA3AF]/80 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#9CA3AF]/90 md:px-7 md:text-base"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-white shadow-sm">
                  <Check
                    className="size-4 text-[#0B6F1C]"
                    strokeWidth={3}
                    aria-hidden
                  />
                </span>
                Become a Vendor
              </Link>
              <Link
                href="/delivery-partners"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B6F1C] shadow-lg transition hover:bg-white/95 md:px-7 md:text-base"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/10">
                  <Check
                    className="size-4 text-[#0B6F1C]"
                    strokeWidth={3}
                    aria-hidden
                  />
                </span>
                Join as Partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick info cards */}
      <section className="relative z-20 -mt-16 bg-transparent pb-10 md:-mt-20 md:pb-12">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {quickCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.text} delay={0.05 * i} className="h-full">
                <div
                  className={cn(
                    "group relative flex h-full min-h-[96px] flex-col justify-between rounded-md border bg-white p-5 shadow-md transition-all duration-200",
                    "border-zinc-200/90 hover:-translate-y-0.5 hover:border-[#FDD000] hover:bg-[#FDD000] hover:shadow-lg",
                  )}
                >
                  <div className="flex h-full items-center gap-4">
                    <div
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-md border border-zinc-200/90 bg-white shadow-sm transition-colors",
                        "group-hover:border-white/30 group-hover:bg-white/10",
                        card.iconColor,
                      )}
                    >
                      <Icon
                        className="size-6 transition-colors group-hover:text-white"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>

                    <span
                      className={cn(
                        "h-12 w-px shrink-0 bg-zinc-200/80 transition-colors",
                        "group-hover:bg-white/60",
                      )}
                      aria-hidden
                    />

                    <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-zinc-800 transition-colors group-hover:text-white md:text-[15px]">
                      {card.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto w-full max-w-[1500px] px-6 py-14 md:px-8 md:py-0">
        <Reveal>
          <h2 className="relative pb-4 text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-zinc-900 after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-20 after:-translate-x-1/2 after:rounded-full after:bg-[#00A14E] after:content-['']">
            How It{" "}
            <span className="text-[#00A14E]">Work</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {howItWorks.map((block, i) => (
            <Reveal key={block.title} delay={0.08 * i} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-md",
                  "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                  "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-[#00A14E] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] hover:after:opacity-100",
                )}
              >
                <div className="relative aspect-[16/11] w-full bg-zinc-50">
                  <Image
                    src={block.image}
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-[#00A14E] md:text-xl">
                    {block.title}:
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    {block.bullets.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F5C400]/25 text-[#B45309]">
                          <Star className="size-3.5 fill-[#F5C400] text-[#B45309]" />
                        </span>

                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 md:py-10">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-8">
          <Reveal>
            <h2 className="relative pb-4 text-center text-[clamp(2.25rem,4.2vw,3.1rem)] font-bold tracking-tight text-zinc-900 after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-24 after:-translate-x-1/2 after:rounded-full after:bg-[#00A14E] after:content-['']">
              Our{" "}
              <span className="text-[#00A14E]">Features</span>
            </h2>
            <p className="mt-3 text-center text-base text-zinc-800 md:text-lg">
              &ldquo;One App. Endless Possibilities.&rdquo;
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={0.05 * i} className="h-full">
                {(() => {
                  const Icon = s.icon;
                  return (
                    <article
                      className={cn(
                        "group relative flex h-full min-h-[380px] flex-col border border-zinc-200/80 p-9 shadow-sm transition-all duration-300 md:min-h-[410px]",
                        "hover:-translate-y-2 hover:shadow-lg",
                        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-[#00A14E] after:opacity-0 after:transition-opacity after:duration-200 after:content-[''] hover:after:opacity-100",
                        s.bg,
                      )}
                    >
                      <div className={cn("flex size-14 items-center justify-center rounded-full shadow-sm ring-1 ring-black/10", s.iconBg)}>
                        <Icon className="size-7 text-[#43484B]" aria-hidden />
                      </div>
                      <h3 className="mt-8 text-xl font-semibold text-[#1E6B3A] md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-4 flex-1 text-base leading-7 text-zinc-900/90 md:text-[20px]">
                        {s.desc}
                      </p>
                      <Link
                        href=""
                        className="mt-8 inline-flex text-base font-medium text-[#D65A4A] !no-underline hover:underline md:text-[20px]"
                      >
                        Learn more...
                      </Link>
                    </article>
                  );
                })()}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* App download */}
      <section className="mx-auto w-full max-w-[1500px] px-6 py-12 md:px-8 md:py-16">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[56px] px-8 py-10 shadow-sm md:rounded-[80px] md:px-14 md:py-11"
            style={{
              backgroundImage:
                "url('/assets/images/fresh-green-textured.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#8EAF7D]/55" aria-hidden />
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
              <div className="relative max-w-xl">
                <h2 className="whitespace-nowrap text-[clamp(1.65rem,3vw,2.35rem)] font-extrabold leading-tight text-[#000000]">
                  Download Customer Mobile App
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-900 md:text-base md:leading-7">
                  Buy groceries, clothes, books, and more from different shops
                  in one order. Because life’s too short for multiple trips.
                </p>

                <div className="mt-7">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-zinc-900 shadow-md transition",
                      "hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <Image
                        src="/assets/images/logo.svg"
                        alt="YeloHub"
                        width={34}
                        height={34}
                      />
                      Download Now
                    </span>
                    <span className="h-6 w-px bg-zinc-200" aria-hidden />
                    <Download className="size-6" aria-hidden />
                  </button>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:ml-auto">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/assets/images/mobileBanner.svg"
                    alt=""
                    fill
                    className="object-contain object-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Reviewers */}
      <section className="border-t border-zinc-100 bg-white py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-8">
          <Reveal>
            <h2 className="relative pb-4 text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-zinc-900 after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-24 after:-translate-x-1/2 after:rounded-full after:bg-[#00A14E] after:content-['']">
              Our{" "}
              <span className="text-[#00A14E]">Reviewers</span>
            </h2>
            <p className="mt-3 text-center text-sm text-zinc-600 md:text-base">
              Some testimonial
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={0.08 * i}>
                <figure className="relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white p-8 shadow-md transition hover:shadow-lg">
                  <span className="pointer-events-none absolute left-5 top-8 z-0 select-none text-4xl font-serif leading-none text-[#0B6F1C]/45">
                    &ldquo;
                  </span>
                  <span className="pointer-events-none absolute bottom-0 right-7 z-0 select-none text-5xl font-serif leading-none text-[#0B6F1C]/65">
                    &rdquo;
                  </span>
                  <figcaption className="relative z-10 pl-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0 text-[15px] font-semibold text-zinc-900 md:text-base">
                        {t.name}
                      </div>
                      <div
                        className="flex shrink-0 gap-0.5"
                        aria-label="5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className="size-4 fill-[#F5C400] text-[#F5C400]"
                            aria-hidden
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-medium leading-7 text-zinc-600 md:text-[15px]">
                      {t.text}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            <span className="h-1 w-10 rounded-full bg-[#00A14E]" />
            <span className="h-1 w-10 rounded-full bg-zinc-200" />
          </div>
        </div>
      </section>

      {/* Map + contact */}
      <section className="border-t border-zinc-100 bg-[#f7f7f7] py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm lg:grid-cols-2 lg:rounded-3xl">
          <div className="relative min-h-[320px] w-full lg:min-h-[480px]">
            <Image
              src="/assets/images/map.svg"
              alt="Map — Lucknow area"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="p-8 md:p-10 lg:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-[28px]">
              Have any question?
            </h2>
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <HomeField label="Full Name" placeholder="Name" />
                <HomeField label="Your Email" placeholder="Enter Your Email" />
                <HomeField
                  label="Your Phone Number"
                  placeholder="Enter Your Phone Number"
                />
                <HomeField label="Query" placeholder="What is your query?" />
              </div>
              <div>
                <p className="text-xs font-medium text-zinc-400">
                  Your Message
                </p>
                <textarea
                  placeholder="Type Here"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-sm border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-0"
                />
              </div>
              <button
                type="button"
                className="h-12 w-full rounded-sm bg-[#00A14E] text-sm font-medium text-white transition-colors hover:bg-[#008f44]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function HomeField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium text-zinc-400">{label}</p>
      <input
        placeholder={placeholder}
        className="mt-2 h-9 w-full rounded-sm border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-0"
      />
    </div>
  );
}
