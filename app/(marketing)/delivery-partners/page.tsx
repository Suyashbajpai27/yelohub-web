import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play, TrendingUp } from "lucide-react";

import { DeliveryPartnerJoinCTA } from "@/components/delivery/DeliveryPartnerJoinCTA";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const whyPartner = [
  {
    icon: "/assets/images/clock.svg",
    title: "Work on Your Terms",
    description: "Choose your own time and area.",
    accent: "bg-[#00A14E]",
    iconBg: "bg-[#E6F7ED]",
  },
  {
    icon: "/assets/images/wallet.svg",
    title: "Weekly Payouts",
    description: "Get paid Direct to your bank or wallet.",
    accent: "bg-[#F97316]",
    iconBg: "bg-[#FFF4E6]",
  },
  {
    icon: "/assets/images/bonus.svg",
    title: "Bonuses & Incentives",
    description:
      "Earn more with exciting bonuses and peak hour incentives.",
    accent: "bg-[#3B82F6]",
    iconBg: "bg-[#E8F4FC]",
  },
  {
    icon: "/assets/images/policies.svg",
    title: "Partner-Friendly Policies",
    description:
      "Transparent policies and dedicated support whenever you need.",
    accent: "bg-[#EF4444]",
    iconBg: "bg-[#FCE8F0]",
  },
  {
    icon: "/assets/images/heart.svg",
    title: "Make an Impact",
    description:
      "Every delivery you make brings a smile and builds a stronger community.",
    accent: "bg-[#EF4444]",
    iconBg: "bg-[#F3EEFF]",
  },
] as const;

const avatarColors = ["#00A14E", "#3B82F6", "#F97316", "#8B5CF6"] as const;

export default function DeliveryPartnersPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[420px] w-full overflow-hidden md:min-h-[480px]">
        <Image
          src="/assets/images/deliverybgBanner.svg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25 md:from-black/70 md:via-black/35 md:to-transparent"
          aria-hidden
        />

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[52%] lg:block">
          <Image
            src="/assets/images/deliveryBanner.svg"
            alt=""
            fill
            className="object-contain object-right-bottom pb-0 pt-16 lg:-translate-x-40 xl:-translate-x-52"
          />
        </div>

        <div className="absolute right-10 top-6 z-20 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-lg md:right-16 md:top-10 lg:right-24 lg:block xl:right-32">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E6F7ED]">
              <Image
                src="/assets/images/wallet.svg"
                alt=""
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold leading-snug text-zinc-900">
                Earn Upto ₹25,000+ Per Month
              </p>
              {/* <div className="mt-2 flex items-center gap-1 text-[#00A14E]">
                <TrendingUp className="size-4" strokeWidth={2} aria-hidden />
                <span className="text-xs font-semibold">Growth</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-[1500px] flex-col px-6 py-12 md:min-h-[480px] md:px-8 md:py-16 lg:justify-center">
          <div className="max-w-xl lg:max-w-[540px]">
            <h1 className="inline-flex whitespace-nowrap text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-tight">
              <span className="text-white">Earn More</span>
              <span className="ml-3 inline-block rounded-md bg-[#F5C400] px-3 py-1.5 text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.1] text-white shadow-sm md:px-4 md:py-2">
                Work Your Way
              </span>
            </h1>
            <p className="mt-5 text-base leading-7 text-white/95 md:text-lg">
              Join YeloHub as a delivery partner. Enjoy flexible hours, weekly
              payouts, and exciting incentives while supporting your community.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <DeliveryPartnerJoinCTA className="inline-flex items-center justify-center gap-1 rounded-full bg-[#00A14E] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#008f44] md:px-7 md:text-base" />
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 md:px-7 md:text-base"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-zinc-100">
                  <Play
                    className="size-4 fill-zinc-900 text-zinc-900"
                    aria-hidden
                  />
                </span>
                Watch How It Works
              </button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {avatarColors.map((bg, i) => (
                    <div
                      key={i}
                      className="size-10 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: bg }}
                      aria-hidden
                    />
                  ))}
                </div>
                <div
                  className="-ml-1 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#F97316] text-xs font-bold text-white shadow-sm"
                  aria-hidden
                >
                  2K+
                </div>
              </div>
              <p className="text-sm font-semibold text-white md:text-base">
                Happy Delivery Partner
              </p>
            </div>
          </div>

          <div className="relative mt-10 h-56 w-full lg:hidden">
            <Image
              src="/assets/images/deliveryBanner.svg"
              alt="YeloHub delivery partner"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="relative z-20 mx-auto mb-6 max-w-[220px] rounded-2xl bg-white p-4 shadow-lg sm:mx-6 lg:hidden">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E6F7ED]">
              <Image
                src="/assets/images/wallet.svg"
                alt=""
                width={22}
                height={22}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold leading-snug text-zinc-900">
                Earn Upto ₹25,000+ Per Month
              </p>
              <div className="mt-2 flex items-center gap-1 text-[#00A14E]">
                <TrendingUp className="size-4" strokeWidth={2} aria-hidden />
                <span className="text-xs font-semibold">Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-14 md:px-8 md:py-20">
        <Reveal>
          <h2 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-zinc-900">
            Why Partner with{" "}
            <span className="text-[#00A14E]">Yelohub?</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyPartner.map((card, i) => (
            <Reveal key={card.title} delay={0.05 * i} className="h-full">
              <article
                className={cn(
                  "group relative flex h-full flex-col items-center rounded-2xl border border-zinc-200/60 bg-white px-6 pb-8 pt-7 text-center shadow-sm",
                  "transition-all duration-300 ease-out will-change-transform",
                  "hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/60",
                )}
              >
                <div
                  className={cn(
                    "flex size-[58px] items-center justify-center rounded-full shadow-sm ring-1 ring-black/5",
                    card.iconBg,
                  )}
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#004C1E] md:text-[17px]">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">
                  {card.description}
                </p>
                <div
                  className={cn("mt-6 h-[3px] w-14 rounded-full", card.accent)}
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 pb-14 md:px-8 md:pb-20">
        <Reveal>
          <div className="overflow-hidden rounded-[56px] bg-[#43484B] px-5 py-8 shadow-xl md:rounded-[64px] md:px-8 md:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
              <div className="max-w-md shrink-0 lg:w-[min(100%,28%)]">
                <h2 className="text-[clamp(1.35rem,2.5vw,1.85rem)] font-bold leading-snug text-white">
                  Be Your Own Boss. Earn with Freedom.
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/85 md:text-base md:leading-7">
                  Flexible hours. Great earning. Real impact.
                </p>
                <DeliveryPartnerJoinCTA className="mt-6 inline-flex items-center gap-1 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 md:mt-8 md:px-7 md:text-base" />
              </div>

              <div
                className="hidden w-px shrink-0 self-stretch bg-white/20 lg:block"
                aria-hidden
              />

              <div className="h-px w-full bg-white/20 lg:hidden" aria-hidden />

              <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
                <div className="max-w-xs shrink-0">
                  <h3 className="text-lg font-bold text-white md:text-xl">
                    What You Need
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/90 md:text-base">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 shrink-0 rounded-full bg-[#00A14E]" />
                      Smartphone + Bike/Cycle
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 shrink-0 rounded-full bg-[#00A14E]" />
                      Valid ID Proof
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 shrink-0 rounded-full bg-[#00A14E]" />
                      Bank Details
                    </li>
                  </ul>
                </div>

                <div className="relative mx-auto h-[200px] w-full max-w-[280px] sm:h-[220px] sm:max-w-[300px] md:h-[240px] md:max-w-[320px] lg:mx-0 lg:ml-auto lg:max-w-[380px]">
                  <Image
                    src="/assets/images/deliveryPartnerwithScooter1.png"
                    alt="Delivery partner with scooter"
                    fill
                    className="object-contain object-bottom"
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
