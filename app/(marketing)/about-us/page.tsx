import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Open YeloHub, add products to your cart, and checkout—it’s that simple.",
  },
  {
    q: "Which shops are on YeloHub?",
    a: "From grocery stores to fashion shops, salons, and clinics—we’re adding more every day.",
  },
  {
    q: "How can I register my store?",
    a: "Just click “Register as Vendor,” fill details, upload documents, and go live.",
  },
  {
    q: "How do delivery partners get paid?",
    a: "Weekly payouts directly to bank/wallet. Bonuses for peak-time deliveries.",
  },
  {
    q: "Is YeloHub available in my city?",
    a: "We’re expanding rapidly—stay tuned!",
  },
] as const;

export default function AboutUsPage() {
  return (
    <div className="bg-[#FFFFFF]">
      <section className="relative h-[230px] w-full overflow-hidden">
        <Image
          src="/assets/images/aboutusBanner.svg"
          alt="About us banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
        <div className="relative mx-auto flex h-full w-full max-w-[1500px] items-center px-6 md:px-8">
          <Reveal>
            <h1 className="text-5xl font-semibold text-white">About Us</h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-8 md:px-8 bg-white">
        <Reveal>
          <div className="overflow-hidden rounded-md border border-zinc-300 bg-[#F5F9FE] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-7 md:p-8">
                <h2 className="text-[40px] font-semibold leading-[1.05] text-zinc-900">
                  Local Businesses
                  <span className="block text-[#00A14E]">Digital Future</span>
                </h2>
                <p className="mt-5 max-w-[540px] text-base leading-7 text-zinc-700 font-semibold">
                  Every city has a heartbeat - it&apos;s the local shops, service
                  providers, and people who work tirelessly to serve their
                  community. But in today&apos;s digital age, many of these businesses
                  are left behind.
                </p>
                <p className="mt-6 text-[22px] font-medium text-zinc-900">
                  That&apos;s why we built <span className="text-[#00A14E]">YeloHub.</span>
                </p>
                <p className="mt-2 text-[22px] font-semibold text-[#00A14E]">
                  A platform where:
                </p>
              </div>

              <div className="relative min-h-[360px] bg-[#f4f6f8]">
                <Image
                  src="/assets/images/localBusiness.svg"
                  alt="Local businesses visual"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 border-t border-zinc-300 bg-white px-6 py-4 md:grid-cols-3 md:gap-4 md:px-7">
              <Reveal delay={0.05} className="flex items-center gap-4 py-1">
                <Image
                  src="/assets/images/customerCart.svg"
                  alt="Customers icon"
                  width={50}
                  height={44}
                />
                <p className="min-w-0 flex-1 text-[18px] leading-7 text-zinc-900 font-semibold">
                  Customers enjoy convenience
                  <br />
                  and variety
                </p>
              </Reveal>
              <Reveal delay={0.1} className="flex items-center gap-4 py-1">
                <Image
                  src="/assets/images/sales.svg"
                  alt="Vendors icon"
                  width={50}
                  height={44}
                />
                <p className="min-w-0 flex-1 text-[18px] leading-7 text-zinc-900 font-semibold">
                  Vendors gain digital visibility
                  <br />
                  and sales
                </p>
              </Reveal>
              <Reveal delay={0.15} className="flex items-center gap-4 py-1">
                <Image
                  src="/assets/images/deliveryPartner.svg"
                  alt="Delivery partners icon"
                  width={50}
                  height={44}
                />
                <p className="min-w-0 flex-1 text-[18px] leading-7 text-zinc-900 font-semibold">
                  Delivery partners find respectful earning
                  <br />
                  opportunities
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 rounded-md bg-[#ececec] p-6 md:p-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <article className="relative rounded-lg border border-zinc-300 bg-white px-8 pb-8 pt-14 text-center">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFFFFF] p-2">
                  <Image
                    src="/assets/images/diamond.svg"
                    alt="Vision icon"
                    width={58}
                    height={58}
                  />
                </div>
                <h3 className="text-[32px] font-semibold text-zinc-900 md:text-[32px]">
                  Our Vision
                </h3>
                <p className="mt-3 text-[18px] leading-7 text-zinc-800 md:text-[20px] md:leading-8 font-medium">
                  Watch your order move toward you step by step - because trust
                  grows with transparency
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="relative rounded-lg border border-zinc-300 bg-white px-8 pb-8 pt-14 text-center">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFFFFF] p-2">
                  <Image
                    src="/assets/images/mission.svg"
                    alt="Mission icon"
                    width={58}
                    height={58}
                  />
                </div>
                <h3 className="text-[32px] font-semibold text-zinc-900 md:text-[32px]">
                  Our Mission
                </h3>
                <p className="mt-3 text-[18px] leading-7 text-zinc-800 md:text-[20px] md:leading-8 font-medium">
                  Building a digital bridge between people, stores, and services -
                  because local should never be left behind.
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-12 pb-2 md:mt-16">
          <Reveal>
            <h2 className="relative pb-4 text-center text-3xl font-semibold tracking-tight text-zinc-900 after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-20 after:-translate-x-1/2 after:rounded-full after:bg-[#00A14E] after:content-[''] md:text-4xl">
              FAQ
            </h2>
          </Reveal>

          <div className="mt-8 w-full space-y-4">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={0.06 * i}>
                <details
                  className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md open:border-[#00A14E]/40"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 bg-[#F5F9FE] px-5 py-4 text-sm font-semibold text-zinc-900 md:text-base">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-black/5">
                      <ChevronRight className="size-4 text-[#00A14E] transition-transform duration-200 group-open:rotate-90" />
                    </span>
                    <span className="flex-1">{item.q}</span>
                  </summary>
                  <div className="border-t border-zinc-200 px-5 pb-5 pt-4 text-sm font-medium leading-7 text-zinc-700 md:text-[15px]">
                    {item.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

