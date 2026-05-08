import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Package, Play, Store, Users } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { VendorRegisterCTA } from "@/components/vendor/VendorRegisterCTA";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Be Discoverable",
    description: "Reach thousands of nearby customers instantly.",
    icon: "/assets/images/discoverable.svg",
    bg: "bg-[#E6F7ED]",
  },
  {
    title: "Boost Sales",
    description: "Get more orders without extra shop space.",
    icon: "/assets/images/vendorsales.svg",
    bg: "bg-[#FFF4E6]",
  },
  {
    title: "Smart Dashboard",
    description: "Manage products, prices, and orders with ease.",
    icon: "/assets/images/dashboard.svg",
    bg: "bg-[#E8F4FC]",
  },
  {
    title: "Promotions",
    description: "Run offers to attract new customers, and grow your brand.",
    icon: "/assets/images/promotion.svg",
    bg: "bg-[#FCE8F0]",
  },
  {
    title: "Fast Settlements",
    description: "Your earnings, directly in your account.",
    icon: "/assets/images/settlement.svg",
    bg: "bg-[#F3EEFF]",
  },
] as const;

const stats = [
  {
    label: "10K+ Happy Vendors",
    icon: Store,
    iconWrap: "bg-[#00A14E]/15 text-[#00A14E]",
  },
  {
    label: "1M+ Orders Delivered",
    icon: Package,
    iconWrap: "bg-[#F97316]/15 text-[#EA580C]",
  },
  {
    label: "500K+ Active Customers",
    icon: Users,
    iconWrap: "bg-[#00A14E]/15 text-[#00A14E]",
  },
  {
    label: "200+ Cities Covered",
    icon: MapPin,
    iconWrap: "bg-[#3B82F6]/15 text-[#2563EB]",
  },
] as const;

export default function VendorsPage() {
  return (
    <div className="bg-white">
      <section className="relative h-[min(42vw,320px)] min-h-[200px] w-full overflow-hidden md:h-[280px]">
        <Image
          src="/assets/images/vendorBanner.svg"
          alt="Vendors — grow with YeloHub"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative mx-auto flex h-full w-full max-w-[1500px] items-end px-6 pb-10 md:px-8 md:pb-12">
          <h1 className="sr-only">Vendors</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative order-2 min-h-[320px] w-full lg:order-1 lg:min-h-[420px]">
            <div className="relative aspect-[3/2] w-full max-w-[620px] overflow-hidden rounded-2xl bg-transparent lg:max-w-none">
              <Image
                src="/assets/images/vendorPhoto.svg"
                alt="Vendor using YeloHub at checkout"
                fill
                className="object-cover object-left"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-1 lg:order-2">
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight text-zinc-900">
              Grow Local
              <br />
              <span className="text-[#00A14E]">Earn Local</span>{" "}
              <span className="text-zinc-900">With YeloHub</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 md:text-lg">
              Your shop is more than four walls—it&apos;s your legacy. YeloHub
              helps you take that legacy online
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <VendorRegisterCTA
                className="inline-flex items-center justify-center gap-1 rounded-full bg-[#00A14E] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:bg-[#008f44] hover:shadow-md active:translate-y-0 md:px-7 md:text-base"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#00A14E] bg-white px-6 py-3.5 text-sm font-semibold text-[#00A14E] transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:bg-[#00A14E]/5 hover:shadow-sm active:translate-y-0 md:px-7 md:text-base"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-[#00A14E]/10">
                  <Play className="size-4 fill-[#00A14E] text-[#00A14E]" aria-hidden />
                </span>
                Watch How it Work
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-zinc-200/80 bg-white px-3 py-3.5 text-center shadow-sm"
                  >
                    <div
                      className={cn(
                        "mx-auto flex size-10 items-center justify-center rounded-full",
                        item.iconWrap,
                      )}
                    >
                      <Icon className="size-5" strokeWidth={2} aria-hidden />
                    </div>
                    <p className="mt-2 text-[11px] font-semibold leading-snug text-zinc-800 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-zinc-100 bg-[#FAFAFA] py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-8">
          <Reveal>
            <h2 className="relative pb-4 text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-zinc-900 after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-24 after:-translate-x-1/2 after:rounded-full after:bg-[#00A14E] after:content-['']">
              Everything You Need to Succeed{" "}
              <span className="text-[#00A14E]">Online</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((card, i) => (
              <Reveal key={card.title} delay={0.05 * i} className="h-full">
                <article
                  className={cn(
                    "group relative flex h-full flex-col rounded-2xl border border-zinc-200/60 px-5 pb-6 pt-8 text-center shadow-sm",
                    "transition-all duration-300 ease-out will-change-transform",
                    "hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-200/60",
                    card.bg,
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-black/5 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="mx-auto flex size-[72px] items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/5">
                    <Image
                      src={card.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="object-contain transition-transform duration-300 ease-out will-change-transform group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-zinc-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-10 md:px-8 md:py-12">
        <Reveal>
          <div
            className="group relative overflow-hidden rounded-[48px] px-5 py-5 shadow-xl md:rounded-[56px] md:px-10 md:py-3"
            style={{
              backgroundImage: "url('/assets/images/backgroundVendor.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/70" aria-hidden />
            <div className="relative grid grid-cols-1 items-center gap-7 lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="max-w-xl">
                <h2 className="text-[clamp(1.8rem,3vw,2.35rem)] font-bold leading-tight text-white">
                  Start Selling Start Growing
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/85 md:text-base md:leading-7">
                  Join thousands of local business already growing with YeloHub.
                </p>
                <VendorRegisterCTA
                  className="mt-5 inline-flex items-center gap-1 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-200 will-change-transform hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-md active:translate-y-0 md:px-7 md:text-base"
                />
              </div>
              <div className="relative mx-auto flex w-full justify-center lg:justify-end">
                <div className="relative mt-4 h-[200px] w-full max-w-[360px] sm:mt-6 sm:h-[220px] sm:max-w-[400px] md:mt-7 md:h-[250px] md:max-w-[460px] lg:mx-0 lg:ml-auto lg:mt-10 lg:h-[270px] lg:max-w-[540px]">
                  <Image
                    src="/assets/images/vendorHouse.svg"
                    alt="Storefront illustration"
                    fill
                    className="origin-bottom-right object-contain object-center transform-gpu scale-[1.04] sm:scale-[1.06] md:scale-[1.08] lg:scale-[1.10]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
